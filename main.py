"""Friend Plaza backend (SANSO, BSD-3-Clause).

Talks to the Friend Plaza server (sign-in, check-ins, games, shop) and reads Steam's own friend-list file to tell the
server who your friends are. There is no Steam API key.

The plugin is split into small modules in py_modules/ (fp_util, fp_net, fp_errors) so each part can be tested on its
own. This file is only the Decky-facing Plugin class.

Imports are kept to the minimum that works in Decky's bundled Python.
"""
import json
import os
import re
import sys
import time
from typing import Any, Dict, List, Optional, Tuple

import decky

# Decky adds py_modules itself on newer loaders; adding it here makes older ones work too.
_HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(_HERE, "py_modules"))

from fp_errors import friendly_error  # noqa: E402
from fp_net import ApiError, http_json  # noqa: E402
from fp_util import (atomic_write, clean_figure, clean_server_url, clean_text, friends_hash, load_json,  # noqa: E402
                     parse_localconfig_friends_named, parse_loginusers, steamid_to_account, valid_steamid)

log = decky.logger

STEAM_DIR = os.path.join(decky.DECKY_USER_HOME, ".local", "share", "Steam")

MAX_FRIENDS = 400               # safety cap
# The server this plugin talks to. server.txt in the plugin folder or the Settings screen can override it.
DEFAULT_SERVER = "https://friend-plaza.arasahneiletisim.workers.dev"

DEFAULTS = {
    "steamid": "",
    "low_power": False,
    "quality": "auto",        # auto | high | medium | low  (how hard the 3D plaza works)
    "show_others": True,      # show plugin users who are not your Steam friends
    "visible_public": True,   # let other plugin users (not friends) see my character
    "setup_done": False,      # the first-run guide has been finished (or skipped)
    "server_url": "",
    "server_token": "",
    "server_steamid": "",
    "server_on": True,
    "figure": None,
}


# ----------------------------------------------------------------------------
# Plugin
# ----------------------------------------------------------------------------


class Plugin:
    async def _main(self):
        self.settings_path = os.path.join(decky.DECKY_PLUGIN_SETTINGS_DIR, "settings.json")
        self.cache_path = os.path.join(decky.DECKY_PLUGIN_RUNTIME_DIR, "cache.json")
        self.settings = dict(DEFAULTS)
        raw = load_json(self.settings_path, {})
        if not isinstance(raw, dict):
            raw = {}
        self.settings.update({k: v for k, v in raw.items() if k in DEFAULTS})
        if raw.get("server_token") and "setup_done" not in raw:
            self.settings["setup_done"] = True   # someone who was already signed in before the guide existed
        self.cache = load_json(self.cache_path, {})
        if not isinstance(self.cache, dict):
            self.cache = {}
        self._nonce = ""
        self._figure_dirty = True
        self._send_friends = True
        self._sent_hash = ""
        self.server_error = ""
        self.notes: List[str] = []
        log.info("Friend Plaza started")

    async def _unload(self):
        pass

    # -- diagnostics ---------------------------------------------------------

    def _note(self, text: str) -> None:
        """Keep the last few problems so they can be written into the diagnostics file."""
        self.notes.append("%s  %s" % (time.strftime("%Y-%m-%d %H:%M:%S"), str(text)[:300]))
        del self.notes[:-40]

    async def export_diagnostics(self) -> Dict[str, Any]:
        """Writes a short text file you can send to whoever helps you. Keys and tokens are left out."""
        s = dict(self.settings)
        lines = ["Friend Plaza diagnostics", "time: " + time.strftime("%Y-%m-%d %H:%M:%S"), "python: " + sys.version.split()[0]]
        try:
            with open(os.path.join(_HERE, "package.json"), "r", encoding="utf-8") as f:
                m = re.search(r'"version"\s*:\s*"([^"]+)"', f.read())
                lines.append("plugin version: " + (m.group(1) if m else "?"))
        except OSError:
            lines.append("plugin version: ?")
        lines += [
            "steam id: " + (self._detect_steamid()[0] or "none"),
            "steam friends found in Steam's files: %d" % len(self.cache.get("local_names", {})),
            "server address: " + (self._server_url() or "none"),
            "server signed in: " + ("yes" if s.get("server_token") else "no"),
            "server last error: " + (self.server_error or "none"),
            "settings: " + ", ".join("%s=%s" % (k, v) for k, v in sorted(s.items())
                                      if k not in ("server_token", "figure", "server_url")),
            "", "recent problems:",
        ] + (self.notes or ["(none)"])
        # the newest lines of Decky's log for this plugin
        try:
            logdir = getattr(decky, "DECKY_PLUGIN_LOG_DIR", "")
            files = sorted([os.path.join(logdir, n) for n in os.listdir(logdir)], key=os.path.getmtime) if logdir else []
            if files:
                with open(files[-1], "r", encoding="utf-8", errors="replace") as f:
                    tail = f.read().splitlines()[-40:]
                lines += ["", "log (last lines):"] + tail
        except OSError:
            pass
        text = "\n".join(lines) + "\n"
        for name in ("Downloads", ""):
            folder = os.path.join(decky.DECKY_USER_HOME, name) if name else decky.DECKY_USER_HOME
            path = os.path.join(folder, "friend-plaza-diagnostics.txt")
            try:
                os.makedirs(folder, exist_ok=True)
                with open(path, "w", encoding="utf-8") as f:
                    f.write(text)
                return {"ok": True, "path": path.replace(decky.DECKY_USER_HOME, "~"), "text": text[:1600]}
            except OSError:
                continue
        return {"ok": False, "message": "Could not write the file.", "text": text[:1600]}

    # -- settings ------------------------------------------------------------

    def _save_settings(self) -> None:
        atomic_write(self.settings_path, json.dumps(self.settings, indent=1), private=True)

    def _save_cache(self) -> None:
        try:
            atomic_write(self.cache_path, json.dumps(self.cache))
        except OSError as e:
            log.warning("cache not saved: %s" % e)

    def _login_users(self) -> List[Dict[str, Any]]:
        """Steam's list of accounts on this Deck. Read again only when the file changed (this runs on every check-in)."""
        path = os.path.join(STEAM_DIR, "config", "loginusers.vdf")
        try:
            st = os.stat(path)
            stamp = "%s:%s" % (st.st_mtime_ns, st.st_size)
        except OSError:
            return []
        if getattr(self, "_lu_stamp", None) == stamp:
            return self._lu_cache
        try:
            with open(path, "r", encoding="utf-8", errors="replace") as f:
                self._lu_cache = parse_loginusers(f.read())
        except OSError:
            self._lu_cache = []
        self._lu_stamp = stamp
        return self._lu_cache

    def _detect_steamid(self) -> Tuple[str, str]:
        sid = self.settings.get("steamid", "")
        if valid_steamid(sid):
            return sid, "settings"
        users = self._login_users()
        if users:
            return users[0]["steamid"], "Steam files"
        return "", ""

    async def get_state(self) -> Dict[str, Any]:
        """Everything the screens need about settings."""
        sid, source = self._detect_steamid()
        st = self.settings
        return {
            "steamid": sid, "steamid_source": source,
            "low_power": bool(st["low_power"]), "quality": str(st["quality"]),
            "show_others": bool(st["show_others"]), "visible_public": bool(st["visible_public"]),
            "setup_done": bool(st["setup_done"]),
            "friend_count": len(self._local_friends(sid)) if sid else 0,
        }

    async def test_setup(self) -> Dict[str, Any]:
        """What the Check setup button shows: each line says what works and what to do if it doesn't."""
        lines: List[Dict[str, Any]] = []

        def add(ok: bool, text: str) -> None:
            lines.append({"ok": ok, "text": text})

        sid, src = self._detect_steamid()
        add(bool(sid), ("Steam ID %s (from %s)" % (sid, src)) if sid else "Steam ID not found. Enter it in Settings > Steam ID.")
        if sid:
            n = len(self._local_friends(sid))
            add(n > 0, ("Steam's own files list %d friends (used only to tell the server who your friends are)" % n) if n
                else "Steam's own files list no friends yet. Friends-only features need them; open Steam's friends list once and try again.")
        base = self._server_url()
        try:
            status, data = await http_json("GET", base + "/health", None, timeout=10)
            if status == 200 and data.get("ok"):
                add(True, "Server answers (version %s)" % data.get("version", "?"))
            else:
                add(False, friendly_error("server", "", status))
        except ApiError as e:
            add(False, friendly_error("server", e.message, e.status))
        add(bool(self.settings.get("server_token")), "Signed in with Steam" if self.settings.get("server_token") else "Not signed in. Open Settings > Online and sign in with Steam.")
        return {"lines": lines}

    async def set_steamid(self, sid: str) -> Dict[str, Any]:
        sid = (sid or "").strip()
        if sid and not valid_steamid(sid):
            return {"ok": False, "message": "A Steam ID64 has 17 digits and starts with 7656119."}
        self.settings["steamid"] = sid
        self._save_settings()
        return {"ok": True}

    async def set_steamid_hint(self, sid: str) -> Dict[str, Any]:
        """The panel reports the signed-in Steam ID; only used when none is set yet."""
        sid = (sid or "").strip()
        if valid_steamid(sid) and not valid_steamid(self.settings.get("steamid", "")):
            self.settings["steamid"] = sid
            self._save_settings()
        return {"ok": True}

    async def set_option(self, name: str, value: Any) -> Dict[str, Any]:
        if name == "quality" and value in ("auto", "high", "medium", "low"):
            self.settings["quality"] = value
        elif name in ("low_power", "show_others", "visible_public", "setup_done") and isinstance(value, bool):
            self.settings[name] = value
        else:
            return {"ok": False}
        self._save_settings()
        return {"ok": True}

    # -- server (optional: shared characters, live friends, gifts) -------------

    def _server_url(self) -> str:
        """Settings first, then server.txt in the plugin folder, then the built-in server."""
        u = clean_server_url(self.settings.get("server_url", ""))
        if u:
            return u
        base = getattr(decky, "DECKY_PLUGIN_DIR", _HERE)
        try:
            with open(os.path.join(base, "server.txt"), "r", encoding="utf-8", errors="replace") as f:
                for line in f.read().splitlines():
                    line = line.strip()
                    if line and not line.startswith("#"):
                        c = clean_server_url(line)
                        if c:
                            return c
        except OSError:
            pass
        return DEFAULT_SERVER

    async def server_state(self) -> Dict[str, Any]:
        return {
            "url": self._server_url(),
            "custom_url": clean_server_url(self.settings.get("server_url", "")),
            "signed_in": bool(self.settings.get("server_token")),
            "steamid": self.settings.get("server_steamid", ""),
            "on": bool(self.settings.get("server_on", True)),
            "figure": self.settings.get("figure"),
            "error": self.server_error,
        }

    async def set_server_url(self, url: str) -> Dict[str, Any]:
        url = (url or "").strip()
        if url:
            c = clean_server_url(url)
            if not c:
                return {"ok": False, "message": "That should look like https://friend-plaza.yourname.workers.dev"}
            url = c
        if url != self.settings.get("server_url", ""):
            self.settings["server_token"] = ""
            self.settings["server_steamid"] = ""
        self.settings["server_url"] = url
        self._save_settings()
        return {"ok": True}

    async def server_set_on(self, on: bool) -> Dict[str, Any]:
        self.settings["server_on"] = bool(on)
        self._save_settings()
        return {"ok": True}

    async def server_test(self) -> Dict[str, Any]:
        base = self._server_url()
        if not base:
            return {"ok": False, "message": "No server address yet."}
        try:
            status, data = await http_json("GET", base + "/health", None, timeout=10)
        except ApiError as e:
            return {"ok": False, "message": friendly_error("server", e.message, e.status)}
        if status == 200 and data.get("ok"):
            return {"ok": True, "message": "Server answers (version %s)." % data.get("version", "?")}
        return {"ok": False, "message": friendly_error("server", "", status)}

    async def server_login_start(self) -> Dict[str, Any]:
        base = self._server_url()
        if not base:
            return {"ok": False, "message": "No server address yet."}
        self._nonce = os.urandom(16).hex()
        return {"ok": True, "url": base + "/login/start?nonce=" + self._nonce}

    async def server_login_poll(self) -> Dict[str, Any]:
        base = self._server_url()
        if not base or not self._nonce:
            return {"ok": False, "done": False, "message": "Start signing in first."}
        try:
            status, data = await http_json("POST", base + "/login/claim", {"nonce": self._nonce}, timeout=10)
        except ApiError as e:
            return {"ok": True, "done": False, "message": friendly_error("login", e.message, e.status)}
        if status == 200 and data.get("token") and not data.get("pending"):
            self.settings["server_token"] = str(data["token"])
            self.settings["server_steamid"] = str(data.get("steamid", ""))
            self._save_settings()
            self._nonce = ""
            self._figure_dirty = True
            self._send_friends = True
            self.server_error = ""
            return {"ok": True, "done": True}
        return {"ok": True, "done": False}

    async def server_logout(self) -> Dict[str, Any]:
        self.settings["server_token"] = ""
        self.settings["server_steamid"] = ""
        self._save_settings()
        return {"ok": True}

    async def server_delete_me(self) -> Dict[str, Any]:
        base, token = self._server_url(), self.settings.get("server_token", "")
        if not base or not token:
            return {"ok": False, "message": "You are not signed in to the server."}
        try:
            status, data = await http_json("DELETE", base + "/me", None, token)
        except ApiError as e:
            return {"ok": False, "message": friendly_error("server", e.message, e.status)}
        if status == 200 and data.get("ok"):
            await self.server_logout()
            return {"ok": True, "message": "Your data was deleted from the server."}
        return {"ok": False, "message": friendly_error("server", str(data.get("message", "")), status)}

    async def server_save_figure(self, figure: Any) -> Dict[str, Any]:
        clean = clean_figure(figure)
        if not clean:
            return {"ok": False, "message": "That character is not valid."}
        self.settings["figure"] = clean
        self._save_settings()
        self._figure_dirty = True
        return {"ok": True}

    async def server_clear_figure(self) -> Dict[str, Any]:
        self.settings["figure"] = None
        self._save_settings()
        self._figure_dirty = True
        return {"ok": True}

    def _my_presence(self) -> Dict[str, Any]:
        """The plugin does not know what you are playing; the server reads your public Steam page for that."""
        return {"state": "online", "game": None, "name": self._my_persona_name(), "avatar": ""}

    async def server_sync(self, ack: Optional[List[int]] = None) -> Dict[str, Any]:
        base, token = self._server_url(), self.settings.get("server_token", "")
        if not base or not token or not self.settings.get("server_on", True):
            return {"ok": False, "off": True}
        sid, _ = self._detect_steamid()
        ids = [i for i in self._local_friends(sid).keys() if valid_steamid(i)] if sid else []
        h = friends_hash(ids)
        pres = self._my_presence()
        payload: Dict[str, Any] = {"state": pres["state"], "game": pres["game"], "friendsHash": h,
                                   "name": pres["name"], "avatar": pres["avatar"],
                                   "public": bool(self.settings.get("visible_public", True)),
                                   "others": bool(self.settings.get("show_others", True))}   # false: the server skips the strangers list
        payload["presenceUnknown"] = True       # the server reads your public Steam page for the game you play
        if ids and (self._send_friends or h != self._sent_hash):
            payload["friends"] = ids
        if self._figure_dirty and self.settings.get("figure"):
            payload["figure"] = self.settings["figure"]
        if ack:
            payload["ack"] = [int(a) for a in ack if isinstance(a, int)][:100]
        try:
            status, data = await http_json("POST", base + "/sync", payload, token)
        except ApiError as e:
            self.server_error = friendly_error("server", e.message, e.status)
            self._note("sync failed: " + e.message)
            return {"ok": False, "message": self.server_error}
        if status == 401:
            self.settings["server_token"] = ""
            self._save_settings()
            self.server_error = friendly_error("server", "", 401)
            return {"ok": False, "signed_out": True, "message": self.server_error}
        if status != 200 or not data.get("ok"):
            self.server_error = friendly_error("server", str(data.get("message", "")), status)
            self._note("sync answered %d: %s" % (status, data.get("message", "")))
            return {"ok": False, "message": self.server_error}
        self.server_error = ""
        if "friends" in payload:
            self._sent_hash = h
            self._send_friends = False
        if data.get("needFriends"):
            self._send_friends = True
        if "figure" in payload:
            self._figure_dirty = False
        return data

    async def server_send(self, to: str, kind: str, data: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        base, token = self._server_url(), self.settings.get("server_token", "")
        if not base or not token:
            return {"ok": False, "message": "Not signed in to the server."}
        if not valid_steamid(to) or kind not in ("wave", "heart", "highfive", "dance", "gift", "note"):
            return {"ok": False, "message": "Bad request."}
        try:
            status, res = await http_json("POST", base + "/send", {"to": to, "kind": kind, "data": data}, token)
        except ApiError as e:
            return {"ok": False, "message": friendly_error("server", e.message, e.status)}
        if status == 200 and res.get("ok"):
            return res
        return {"ok": False, "message": friendly_error("server", str(res.get("message", "")), status)}

    async def _server_post(self, path: str, payload: Dict[str, Any]) -> Dict[str, Any]:
        base, token = self._server_url(), self.settings.get("server_token", "")
        if not base or not token:
            return {"ok": False, "message": "Not signed in to the server."}
        try:
            status, res = await http_json("POST", base + path, payload, token)
        except ApiError as e:
            return {"ok": False, "message": friendly_error("server", e.message, e.status)}
        if status == 200 and res.get("ok"):
            return res
        return {"ok": False, "message": friendly_error("server", str(res.get("message", "")), status)}

    async def server_game_invite(self, to: str, kind: str) -> Dict[str, Any]:
        if not valid_steamid(to) or kind not in ("ttt", "c4", "rps", "bj"):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/game/invite", {"to": to, "kind": kind})

    async def server_game_accept(self, match: int) -> Dict[str, Any]:
        if not isinstance(match, int) or isinstance(match, bool):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/game/accept", {"match": match})

    async def server_game_cancel(self, match: int) -> Dict[str, Any]:
        if not isinstance(match, int) or isinstance(match, bool):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/game/cancel", {"match": match})

    async def server_game_move(self, match: int, move: Dict[str, Any]) -> Dict[str, Any]:
        if not isinstance(match, int) or isinstance(match, bool) or not isinstance(move, dict):
            return {"ok": False, "message": "Bad request."}
        clean: Dict[str, Any] = {}
        if isinstance(move.get("cell"), int):
            clean["cell"] = move["cell"]
        if isinstance(move.get("col"), int):
            clean["col"] = move["col"]
        if move.get("pick") in ("r", "p", "s"):
            clean["pick"] = move["pick"]
        if move.get("act") in ("hit", "stand"):
            clean["act"] = move["act"]
        return await self._server_post("/game/move", {"match": match, "move": clean})

    async def server_shop_buy(self, item: int) -> Dict[str, Any]:
        if not isinstance(item, int) or isinstance(item, bool):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/shop/buy", {"item": item})

    async def server_block(self, target: str) -> Dict[str, Any]:
        if not valid_steamid(target):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/block", {"target": target})

    async def server_unblock(self, target: str) -> Dict[str, Any]:
        if not valid_steamid(target):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/unblock", {"target": target})

    async def server_report(self, target: str, reason: str) -> Dict[str, Any]:
        if not valid_steamid(target) or reason not in ("spam", "harassment", "cheating", "inappropriate", "other"):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/report", {"target": target, "reason": reason})

    async def server_game_poll(self, match: int, sig: str) -> Dict[str, Any]:
        """A very small check used while a game is open. Nothing comes back unless the board changed."""
        if not isinstance(match, int) or isinstance(match, bool) or not isinstance(sig, str):
            return {"ok": False, "message": "Bad request."}
        return await self._server_post("/game/poll", {"match": match, "sig": sig[:16]})

    # -- fetching ------------------------------------------------------------



    def _local_friends(self, sid: str, force: bool = False) -> Dict[str, str]:
        """Your Steam friends from Steam's own files (id -> name). Only used to tell the server who your friends are.
        The file is looked at on every call (a cheap size/time check) and only read again when Steam changed it."""
        c = self.cache
        try:
            acc = steamid_to_account(sid)
        except ValueError:
            return {}
        path = os.path.join(STEAM_DIR, "userdata", str(acc), "config", "localconfig.vdf")
        try:
            st = os.stat(path)
            stamp = "%s:%s:%s" % (path, st.st_mtime_ns, st.st_size)
        except OSError:
            stamp = ""
        if not force and c.get("local_stamp") == stamp and c.get("local_names") is not None:
            return c["local_names"]
        try:
            with open(path, "r", encoding="utf-8", errors="replace") as f:
                names = parse_localconfig_friends_named(f.read())
        except OSError:
            names = {}
        c["local_names"] = dict(list(names.items())[:MAX_FRIENDS])
        c["local_stamp"] = stamp
        return c["local_names"]

    async def refresh_friends(self) -> Dict[str, Any]:
        """The Refresh button: read Steam's friend list again now and send it to the server on the next check-in."""
        sid, _ = self._detect_steamid()
        n = len(self._local_friends(sid, force=True)) if sid else 0
        self._send_friends = True
        return {"ok": True, "count": n}

    def _friend_ids_from_files(self, sid: str) -> List[str]:
        return list(self._local_friends(sid).keys())

    def _my_persona_name(self) -> str:
        sid, _ = self._detect_steamid()
        for u in self._login_users():
            if u["steamid"] == sid:
                return clean_text(u.get("name"), 32)
        return ""






    # -- model for the panel -------------------------------------------------


    # -- diagnostics ---------------------------------------------------------


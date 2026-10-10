"""Small pure helpers: validation, parsing, text cleaning, file writing. No Decky, no network."""
import json
import os
import re
from typing import Any, Dict, List, Optional

STEAM64_BASE = 76561197960265728
HEX6 = re.compile(r"#[0-9a-fA-F]{6}")




def valid_steamid(s: Any) -> bool:
    return isinstance(s, str) and re.fullmatch(r"7656119\d{10}", s.strip()) is not None


def account_to_steamid(account_id: int) -> str:
    return str(STEAM64_BASE + int(account_id))


def steamid_to_account(steamid: str) -> int:
    return int(steamid) - STEAM64_BASE




def parse_vdf(text: str) -> Dict[str, Any]:
    """Tiny parser for Valve's key/value text format."""
    tokens = re.findall(r'"((?:[^"\\]|\\.)*)"|([{}])', text)
    pos = 0

    def parse_block() -> Dict[str, Any]:
        nonlocal pos
        out: Dict[str, Any] = {}
        while pos < len(tokens):
            s, brace = tokens[pos]
            if brace == "}":
                pos += 1
                return out
            if brace == "{":  # stray brace, skip
                pos += 1
                continue
            key = s
            pos += 1
            if pos >= len(tokens):
                break
            s2, brace2 = tokens[pos]
            if brace2 == "{":
                pos += 1
                out[key] = parse_block()
            else:
                out[key] = s2
                pos += 1
        return out

    return parse_block()


def parse_loginusers(text: str) -> List[Dict[str, Any]]:
    users = []
    root = parse_vdf(text).get("users", {})
    for sid, info in root.items():
        if not valid_steamid(sid) or not isinstance(info, dict):
            continue
        users.append({
            "steamid": sid,
            "name": info.get("PersonaName", ""),
            "recent": info.get("MostRecent", "0") == "1",
            "timestamp": int(info.get("Timestamp", "0") or 0) if str(info.get("Timestamp", "0")).isdigit() else 0,
        })
    users.sort(key=lambda u: (u["recent"], u["timestamp"]), reverse=True)
    return users


def parse_localconfig_friends_named(text: str) -> Dict[str, str]:
    """Friends Steam keeps in its own files: steam id -> the name Steam last saw (may be empty)."""
    root = parse_vdf(text)
    store = root.get("UserLocalConfigStore") or root.get("userlocalconfigstore") or {}
    friends = store.get("friends") or store.get("Friends") or {}
    out: Dict[str, str] = {}
    for k, v in friends.items():
        if re.fullmatch(r"\d{1,10}", k) and isinstance(v, dict) and int(k) > 0:
            out[account_to_steamid(int(k))] = clean_text(v.get("name"), 32)
    return out






def valid_server_url(u: Any) -> bool:
    if not isinstance(u, str):
        return False
    if re.fullmatch(r"https://[A-Za-z0-9.\-]+(:\d{2,5})?", u):
        return True
    return re.fullmatch(r"http://(localhost|127\.0\.0\.1)(:\d{2,5})?", u) is not None


def clean_server_url(u: Any) -> str:
    u = (u or "").strip().rstrip("/") if isinstance(u, str) else ""
    return u if valid_server_url(u) else ""


def friends_hash(ids: List[str]) -> str:
    import hashlib
    return hashlib.sha256(",".join(sorted(set(ids))).encode("utf-8")).hexdigest()


def clean_figure(m: Any) -> Optional[Dict[str, Any]]:
    """Same rules as the server: returns a normalised character or None."""
    if not isinstance(m, dict):
        return None
    out: Dict[str, Any] = {}
    for k in ("skin", "hair", "shirt", "pants", "shoes"):
        v = m.get(k)
        if not isinstance(v, str) or not HEX6.fullmatch(v):
            return None
        out[k] = v.lower()
    for k, hi in (("hairStyle", 8), ("eyes", 4), ("brows", 3), ("mouth", 4), ("hat", 27)):
        v = m.get(k)
        if isinstance(v, bool) or not isinstance(v, int) or v < 0 or v > hi:
            return None
        out[k] = v
    acc = m.get("acc", 0)
    if isinstance(acc, bool) or not isinstance(acc, int) or acc < 0 or acc > 15:
        return None
    out["acc"] = acc
    for k, hi in (("tee", 32), ("flag", 20), ("face", 8), ("kicks", 6), ("aura", 8)):
        v = m.get(k, 0)
        if isinstance(v, bool) or not isinstance(v, int) or v < 0 or v > hi:
            return None
        out[k] = v
    for k in ("glasses", "stache", "blush"):
        out[k] = bool(m.get(k))
    h = m.get("head")
    if isinstance(h, bool) or not isinstance(h, (int, float)) or not (0.94 <= h <= 1.06):
        return None
    out["head"] = round(float(h), 3)
    return out




def clean_text(s: Any, limit: int = 64) -> str:
    if not isinstance(s, str):
        return ""
    s = re.sub(r"[\x00-\x1f\x7f]", "", s)
    return s[:limit]






def atomic_write(path: str, text: str, private: bool = False) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(text)
    if private:
        try:
            os.chmod(tmp, 0o600)
        except OSError:
            pass
    os.replace(tmp, path)


def load_json(path: str, default: Any) -> Any:
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return default


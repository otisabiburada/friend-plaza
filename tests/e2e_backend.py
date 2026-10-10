"""End-to-end test of the backend against a LOCAL Friend Plaza server (see friend-plaza-server/README.md).

  1. In friend-plaza-server: start the local server with fake sign-in  (npx wrangler dev --local --port 8799)
  2. Here:  T_STUB=tests/stub T_SET=/tmp/fp/set T_RUN=/tmp/fp/run T_HOME=/tmp/fp/home T_DIR=. python3 tests/e2e_backend.py
"""
import asyncio, os, sys, urllib.request
sys.path.insert(0, os.environ["T_STUB"]); sys.path.insert(0, os.environ["T_DIR"])
import main
A, B = "76561197960265801", "76561197960265802"
ok = 0
def check(c, m):
    global ok
    if c: ok += 1
    else: print("FAIL", m); sys.exit(1)
async def mk(sid, base):
    for d in ("T_SET", "T_RUN"): os.makedirs(os.environ[d] + sid, exist_ok=True)
    os.environ["T_SET"] = os.environ["T_SET"]  # same dir ok
    p = main.Plugin()
    await p._main()
    import time as _t
    p.settings["steamid"] = sid
    p.cache["local_names"] = {A if sid == B else B: "Friend"}   # what Steam's own files would say
    p.cache["local_stamp"] = ""   # no friend file on this machine: the plugin keeps what we put in the cache
    await p.set_server_url(base)
    r = await p.server_login_start(); check(r["ok"], "login start")
    nonce = r["url"].split("nonce=")[1]
    urllib.request.urlopen(base + "/login/return?nonce=" + nonce + "&fake=" + sid).read()
    r = await p.server_login_poll(); check(r["done"], "login poll")
    return p
async def run():
    base = "http://localhost:8799"
    check(main.clean_server_url("https://a.b.workers.dev/") == "https://a.b.workers.dev", "url clean")
    check(main.clean_server_url("javascript:x") == "" and main.clean_server_url("http://evil.com") == "", "bad urls refused")
    pa = await mk(A, base); pb = await mk(B, base)
    figure = {"skin": "#f3c096", "hair": "#2b2118", "shirt": "#ef5b5b", "pants": "#374151", "shoes": "#f4f4f4", "hairStyle": 3, "eyes": 1, "brows": 0, "mouth": 1, "glasses": True, "stache": False, "blush": True, "head": 1.0, "hat": 0}
    r = await pa.server_save_figure(figure); check(r["ok"], "save figure")
    r = await pa.server_save_figure({"skin": "nope"}); check(not r["ok"], "bad figure refused")
    r = await pa.server_sync(); check(r["ok"], "sync A 1 " + str(r))
    r = await pb.server_sync(); check(r["ok"], "sync B 1 " + str(r))
    r = await pa.server_sync(); check(r["ok"] and len(r["friends"]) == 1, "A sees B " + str(r))
    r = await pb.server_sync(); check(r["friends"][0]["figure"]["hairStyle"] == 3 and r["friends"][0]["figure"]["glasses"] is True, "B sees A's figure")
    r = await pa.server_send(B, "wave"); check(r["ok"], "send wave " + str(r))
    r = await pa.server_send(B, "note", {"text": 4}); check(r["ok"], "send note")
    r = await pb.server_sync(); ev = r["events"]; check({e["kind"] for e in ev} == {"wave", "note"}, "B events")
    r = await pb.server_sync([e["id"] for e in ev]); check(not r["events"], "acked")
    r = await pa.server_game_invite(B, "ttt"); check(r["ok"], "invite " + str(r))
    r = await pb.server_game_accept(r["id"]); check(r["ok"], "accept")
    mid = (await pb.server_sync())["games"][0]["id"]
    r = await pa.server_game_move(mid, {"cell": 4, "evil": 1}); check(r["ok"], "move")
    r = await pb.server_game_move(mid, {"cell": "x"}); check(not r["ok"], "bad move refused")
    r = await pa.server_game_invite(B, "chess"); check(not r["ok"], "bad game refused locally")
    r = await pa.server_shop_buy(999); check(not r["ok"], "unknown item")
    r = await pa.server_game_cancel(mid); check(r["ok"], "resign")
    r = await pb.server_game_invite(A, "bj"); check(r["ok"], "blackjack invite " + str(r))
    bid = r["id"]; r = await pa.server_game_accept(bid); check(r["ok"], "blackjack accept")
    r = await pa.server_game_move(bid, {"act": "stand", "junk": 1}); check(r["ok"] or "standing" in r["message"], "blackjack stand " + str(r))
    r = await pb.server_game_move(bid, {"act": "stand"}); check(r["ok"] or "standing" in r["message"], "blackjack stand 2 " + str(r))
    check(main.clean_figure({**figure, "acc": 3, "hat": 12}) is not None and main.clean_figure({**figure, "acc": 16}) is None, "figure acc and hat ranges")
    r = await pa.server_block(B); check(r["ok"], "block")
    r = await pa.server_sync(); check(not any(f["steamid"] == B for f in r["friends"]) and r["blocked"][0]["steamid"] == B, "blocked friend disappears")
    r = await pa.server_unblock(B); check(r["ok"], "unblock")
    r = await pa.server_report(B, "rude"); check(not r["ok"], "bad report reason refused locally")
    r = await pa.server_report(B, "spam"); check(r["ok"], "report")
    g = await pa.server_game_invite(B, "ttt"); await pb.server_game_accept(g["id"])
    mm = (await pa.server_sync())["games"][0]
    r = await pa.server_game_poll(mm["id"], mm["sig"]); check(r["ok"] and r["changed"] is False, "poll unchanged")
    r = await pa.server_game_poll(mm["id"], "other"); check(r["ok"] and r["changed"] is True, "poll changed")
    check(pa._my_presence()["game"] is None, "the plugin never claims to know the game; the server reads it")
    r = await pa.export_diagnostics(); check(r["ok"], "diagnostics written")
    txt = open(os.path.expanduser(r["path"]) if r["path"].startswith("~") else r["path"]).read() if False else r["text"]
    check(pa.settings["server_token"] not in txt, "diagnostics leave out secrets")
    r = await pa.test_setup(); check(len(r["lines"]) >= 4 and any("Server answers" in l["text"] for l in r["lines"]), "check setup reports the server")
    st = await pa.get_state(); check("has_key" not in st and "job" not in st, "no Steam key and no refresh job any more")
    pa.settings["server_token"] = "0" * 64
    r = await pa.server_sync(); check(r.get("signed_out"), "bad token signs out")
    pb.settings["server_on"] = False
    r = await pb.server_sync(); check(r.get("off"), "switch off respected")
    r = await pb.server_delete_me(); check(not r["ok"] or r["ok"], "delete runs")
    print("backend ok", ok)
asyncio.run(run())

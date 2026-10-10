import { DialogButton, Focusable, Navigation } from "@decky/ui";
import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "./api";
import { ACCS, accName, HATS, hatName, SHOP, ShopItem, ShopKind, SPECIAL_HAIR } from "./catalog";
import { AURAS, FACES, FLAGS, KICKS, TEES } from "./cosmetics";
import { HAIR, Look, lookFor, makeWalker, PANTS, SHIRT, SHOES, SKIN } from "./chars";
import { applySyncResult, net, netChanged, useNet } from "./net";
import { Scene3D } from "./scene3d";

export const FRIEND_ROUTE = "/friend-plaza-store"; // the Friend Store: character editor and point shop
export const STORE_ROUTE = FRIEND_ROUTE;

type Kind = "pal" | "num" | "bool" | "head" | "hat" | "acc" | "own";
interface Row { key: keyof Look; label: string; kind: Kind; pal?: string[]; n?: number; base?: number; names?: Array<{ id: number; name: string }> }

const ROWS: Row[] = [
  { key: "hairStyle", label: "Hair style", kind: "num", n: 9 },
  { key: "hair", label: "Hair color", kind: "pal", pal: HAIR },
  { key: "skin", label: "Skin", kind: "pal", pal: SKIN },
  { key: "eyes", label: "Eyes", kind: "num", n: 5 },
  { key: "brows", label: "Eyebrows", kind: "num", n: 4 },
  { key: "mouth", label: "Mouth", kind: "num", n: 5 },
  { key: "head", label: "Head size", kind: "head" },
  { key: "glasses", label: "Glasses", kind: "bool" },
  { key: "stache", label: "Moustache", kind: "bool" },
  { key: "blush", label: "Blush", kind: "bool" },
  { key: "shirt", label: "Shirt", kind: "pal", pal: SHIRT },
  { key: "pants", label: "Pants", kind: "pal", pal: PANTS },
  { key: "shoes", label: "Shoes", kind: "pal", pal: SHOES },
  { key: "hat", label: "Hat", kind: "hat" },
  { key: "acc", label: "Accessory", kind: "acc" },
  { key: "tee", label: "Graphic tee", kind: "own", base: 300, names: TEES },
  { key: "flag", label: "Flag", kind: "own", base: 400, names: FLAGS },
  { key: "face", label: "Face paint", kind: "own", base: 500, names: FACES },
  { key: "kicks", label: "Shoe style", kind: "own", base: 600, names: KICKS },
  { key: "aura", label: "Aura", kind: "own", base: 700, names: AURAS },
];
const CATS: Array<{ kind: ShopKind; label: string; key: keyof Look; base: number }> = [
  { kind: "tee", label: "Tees", key: "tee", base: 300 }, { kind: "flag", label: "Flags", key: "flag", base: 400 },
  { kind: "hat", label: "Hats", key: "hat", base: 0 }, { kind: "acc", label: "Gear", key: "acc", base: 100 },
  { kind: "hair", label: "Hair", key: "hair", base: 0 }, { kind: "face", label: "Face", key: "face", base: 500 },
  { kind: "kicks", label: "Shoes", key: "kicks", base: 600 }, { kind: "aura", label: "Auras", key: "aura", base: 700 },
];
const HEADS = [0.94, 0.97, 1.0, 1.03, 1.06];

const CSS = `
.me-root{position:relative;margin-top:40px;height:calc(100% - 40px);display:flex;gap:26px;padding:18px 32px 78px;box-sizing:border-box;background:radial-gradient(1100px 680px at 50% 46%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-size:14px;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;overflow:hidden}
.me-prev{flex:none;width:420px;display:flex;flex-direction:column;gap:10px}
.me-prev canvas{width:420px;height:470px;border-radius:4px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.35);background:#0b1017}
.me-note{font-size:12.5px;color:#8f98a0;line-height:1.4}
.me-side{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.me-h{font-size:26px;font-weight:800;color:#fff;display:flex;align-items:center;gap:14px}
.me-pts{padding:4px 12px;border-radius:3px;background:rgba(144,186,60,.18);color:#90ba3c;font-size:13px;font-weight:800}
.me-tabs{display:flex;gap:8px}
.me-tab{margin:0 !important;flex:1;height:40px !important;min-width:0 !important;padding:0 !important;display:flex !important;align-items:center;justify-content:center;border-radius:3px !important;background:rgba(255,255,255,.08) !important;color:#c6d4df !important;font-weight:800 !important;font-size:15px !important}
.me-tab.on{background:rgba(102,192,244,.25) !important;color:#fff !important;box-shadow:inset 0 -3px 0 #66c0f4}
.me-sec{font-weight:800;color:#8f98a0;font-size:12px;padding:8px 4px 0;text-transform:uppercase;letter-spacing:.5px}
.me-item{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.05);border-radius:3px;padding:9px 12px;box-sizing:border-box;margin:0}
.me-item.fp-focus{background:#fff;box-shadow:0 0 16px rgba(102,192,244,.5)}
.me-item .nm{flex:1;font-weight:700;color:#dfe6ec}
.me-item .pr{font-weight:800;color:#90ba3c}
.me-item.fp-focus .nm{color:#0e141b}.me-item.fp-focus .pr{color:#2c4a05}
.me-item .own{font-weight:800;color:#66c0f4}
.me-list{flex:1;overflow-y:auto;padding:4px 6px 4px 2px;display:flex;flex-direction:column;gap:6px}
.me-row{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.05);border-radius:3px;padding:7px 12px}
.me-lab{flex:1;font-weight:700;color:#dfe6ec}
.me-val{width:130px;text-align:center;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;color:#fff}
.me-sw{width:26px;height:26px;border-radius:3px;box-shadow:0 0 0 2px rgba(255,255,255,.35);display:inline-block}
.me-btn{margin:0 !important;min-width:0 !important;width:52px !important;height:38px !important;padding:0 !important;display:flex !important;align-items:center;justify-content:center;font-size:20px !important;font-weight:800;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important}
.me-cats{display:flex;flex-wrap:wrap;gap:6px}
.me-cat{margin:0 !important;min-width:0 !important;width:auto !important;flex:1 1 22% !important;height:36px !important;padding:0 6px !important;display:flex !important;align-items:center;justify-content:center;gap:6px;border-radius:3px !important;background:rgba(255,255,255,.08) !important;color:#c6d4df !important;font-weight:800 !important;font-size:13px !important}
.me-cat.on{background:rgba(102,192,244,.28) !important;color:#fff !important;box-shadow:inset 0 -3px 0 #66c0f4}
.me-cat .ct{font-size:11px;color:#8f98a0;font-weight:700}
.me-foot{display:flex;gap:10px}
.me-foot > *{margin:0 !important;flex:1;height:44px !important;min-width:0 !important;padding:0 6px !important;font-size:14px !important;font-weight:700;display:flex !important;align-items:center;justify-content:center;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important}
.me-foot .go{background:#66c0f4 !important;color:#06121c !important}
`;

function rnd<T>(a: T[]): T { return a[Math.floor(Math.random() * a.length)]; }

export function FriendEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [look, setLook] = useState<Look | null>(null);
  const [steam, setSteam] = useState<Look | null>(null);
  const [msg, setMsg] = useState("");
  const [tab, setTab] = useState<"char" | "shop">("char");
  const [cat, setCat] = useState<ShopKind>("tee");
  const [tryOn, setTryOn] = useState<Partial<Look> | null>(null);
  useNet();
  const lookRef = useRef<Look | null>(null);
  lookRef.current = look;
  const previewRef = useRef<Look | null>(null);
  const previewLook = useMemo(() => (look && tryOn ? { ...look, ...tryOn } : null), [look, tryOn]);
  previewRef.current = previewLook;
  const owned = net.me.items;
  const ready = look !== null;

  useEffect(() => {
    let alive = true;
    (async () => {
      let sid = "";
      try { sid = (await api.getState()).steamid; } catch (e) { /* keep an empty id */ }
      try { const r = await api.serverSync([]); if (r.ok) applySyncResult(r); } catch (e) { /* the store still works with what we know */ }
      let saved: Look | null = net.me.figure;
      try { const st = await api.serverState(); saved = st.figure || saved; } catch (e) { /* use what we have */ }
      const base = lookFor(sid || "76561197960265728");
      if (!alive) return;
      setSteam(base);
      setLook(saved || base);
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let scene: Scene3D | null = null;
    try { scene = new Scene3D(canvas, true); } catch (e) { scene = null; }
    if (!scene) { setMsg("3D could not start here, so there is no preview. You can still pick the options."); return; }
    scene.resize(420, 470);
    scene.setZoom(5.5);
    const w = makeWalker({ steamid: "76561197960265728", name: "me", state: "online", playing: false } as never, false, 210, 290);
    w.x = 210; w.y = 268; w.dir = 1;
    let raf = 0, last = performance.now(), t = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now; t += dt;
      if (lookRef.current) w.look = previewRef.current || lookRef.current;
      scene!.frame([w], { selected: null, t, dt, low: false, spin: Math.sin(t * 0.8) * 0.8 });
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); scene!.dispose(); };
  }, [ready]);

  if (!look) return <div className="me-root"><style>{CSS}</style><div className="me-h">Loading...</div></div>;

  const hatList = [0, ...HATS.filter((h) => owned.includes(h.id)).map((h) => h.id)];
  const accList = [0, ...ACCS.map((_, i) => i).filter((i) => i > 0 && owned.includes(100 + i))];
  const ownList = (r: Row): number[] => [0, ...(r.names || []).map((x) => x.id).filter((id) => owned.includes((r.base || 0) + id))];
  const hairPal = [...HAIR, ...SPECIAL_HAIR.filter((h) => owned.includes(h.id)).map((h) => h.hex)];
  const change = (r: Row, dir: number) => {
    const n: Look = { ...look };
    const mod = (v: number, m: number) => ((v % m) + m) % m;
    if (r.kind === "pal" && r.pal) {
      const pal = r.key === "hair" ? hairPal : r.pal;
      const i = Math.max(0, pal.indexOf(String(look[r.key])));
      (n as unknown as Record<string, unknown>)[r.key] = pal[mod(i + dir, pal.length)];
    } else if (r.kind === "num" && r.n) {
      (n as unknown as Record<string, unknown>)[r.key] = mod(Number(look[r.key]) + dir, r.n);
    } else if (r.kind === "bool") {
      (n as unknown as Record<string, unknown>)[r.key] = !look[r.key];
    } else if (r.kind === "head") {
      let i = 0; HEADS.forEach((h, k) => { if (Math.abs(h - look.head) < Math.abs(HEADS[i] - look.head)) i = k; });
      n.head = HEADS[mod(i + dir, HEADS.length)];
    } else if (r.kind === "hat") {
      const i = Math.max(0, hatList.indexOf(look.hat));
      n.hat = hatList[mod(i + dir, hatList.length)];
    } else if (r.kind === "acc") {
      const i = Math.max(0, accList.indexOf(look.acc));
      n.acc = accList[mod(i + dir, accList.length)];
    } else if (r.kind === "own" && r.base !== undefined) {
      const list = ownList(r);
      const i = Math.max(0, list.indexOf(Number(look[r.key]) || 0));
      (n as unknown as Record<string, unknown>)[r.key] = list[mod(i + dir, list.length)];
    }
    setLook(n);
  };

  const shown = (r: Row) => {
    if (r.kind === "pal") return <span className="me-sw" style={{ background: String(look[r.key]) }} />;
    if (r.kind === "num") return <span>{Number(look[r.key]) + 1} / {r.n}</span>;
    if (r.kind === "bool") return <span>{look[r.key] ? "On" : "Off"}</span>;
    if (r.kind === "head") return <span>{(HEADS.findIndex((h) => Math.abs(h - look.head) < 0.015) + 1) || 3} / 5</span>;
    if (r.kind === "acc") return <span>{accName(look.acc)}</span>;
    if (r.kind === "own") { const v = Number(look[r.key]) || 0; return <span>{v ? (r.names || []).find((x) => x.id === v)?.name || "?" : "None"}</span>; }
    return <span>{hatName(look.hat)}</span>;
  };

  const randomize = () => setLook({
    skin: rnd(SKIN), hair: rnd(HAIR), hairStyle: Math.floor(Math.random() * 9), shirt: rnd(SHIRT), pants: rnd(PANTS), shoes: rnd(SHOES),
    eyes: Math.floor(Math.random() * 5), brows: Math.floor(Math.random() * 4), mouth: Math.floor(Math.random() * 5),
    glasses: Math.random() < 0.2, stache: Math.random() < 0.12, blush: Math.random() < 0.5, head: rnd(HEADS), hat: look.hat, acc: look.acc, tee: look.tee, flag: look.flag, face: look.face, kicks: look.kicks, aura: look.aura,
  });
  const save = async () => {
    setMsg("Saving...");
    try {
      const r = await api.serverSaveFigure(look);
      if (!r.ok) { setMsg(r.message || "Could not save."); return; }
      net.me.figure = look;
      netChanged();
      Navigation.NavigateBack();
    } catch (e) { setMsg(e instanceof Error ? e.message : String(e)); }
  };
  const back = () => Navigation.NavigateBack();

  // ---- the shop ----
  const catOf = (it: ShopItem) => CATS.find((c) => c.kind === it.kind) || CATS[0];
  const equipOf = (it: ShopItem): Partial<Look> => {
    if (it.kind === "hair") return { hair: (SPECIAL_HAIR.find((h) => h.id === it.id) || SPECIAL_HAIR[0]).hex };
    return { [catOf(it).key]: it.id - catOf(it).base } as Partial<Look>;
  };
  const isOn = (it: ShopItem): boolean => {
    const e = equipOf(it) as Record<string, unknown>, k = Object.keys(e)[0];
    return (look as unknown as Record<string, unknown>)[k] === e[k];
  };
  const takeOff = (it: ShopItem): Partial<Look> => it.kind === "hair" ? { hair: steam ? steam.hair : HAIR[0] } : ({ [catOf(it).key]: 0 } as Partial<Look>);
  const onItem = async (it: ShopItem) => {
    if (owned.includes(it.id)) {
      if (isOn(it)) setLook({ ...look, ...takeOff(it) });
      else setLook({ ...look, ...equipOf(it) });
      return;
    }
    if (!net.signedIn) { setMsg("Sign in with Steam in the Friend Plaza panel to buy things."); return; }
    if (net.me.points < it.price) { setMsg("You need " + (it.price - net.me.points) + " more points. Win games against friends to earn them."); return; }
    setMsg("Buying...");
    try {
      const r = await api.shopBuy(it.id);
      if (!r.ok) { setMsg(r.message || "Could not buy that."); return; }
      if (typeof r.points === "number") net.me.points = r.points;
      if (r.items) net.me.items = r.items;
      netChanged();
      setLook({ ...look, ...equipOf(it) });
      setMsg("Bought " + it.name + " and put it on. Press Save to keep it.");
    } catch (e) { setMsg(e instanceof Error ? e.message : String(e)); }
  };
  const catItems = SHOP.filter((it) => it.kind === cat);
  const ownedIn = (k: ShopKind) => SHOP.filter((it) => it.kind === k && owned.includes(it.id)).length;

  return (
    <Focusable className="me-root" onCancel={back}>
      <style>{CSS}</style>
      <div className="me-prev">
        <canvas ref={canvasRef} width={420} height={470} />
        <div className="me-note">{msg || (tab === "shop" ? "Focus an item to try it on. Press A to buy it, then Save."
          : net.signedIn ? "Your friends who use Friend Plaza will see this character." : "Sign in with Steam in the Friend Plaza panel so others can see this character.")}</div>
      </div>
      <div className="me-side">
        <div className="me-h">Friend Store <span className="me-pts">{net.me.points} points</span></div>
        <div className="me-tabs">
          <DialogButton className={"me-tab" + (tab === "char" ? " on" : "")} onClick={() => { setTab("char"); setTryOn(null); }}>Character</DialogButton>
          <DialogButton className={"me-tab" + (tab === "shop" ? " on" : "")} onClick={() => setTab("shop")}>Shop</DialogButton>
        </div>
        <div className="me-list">
          {tab === "char" && ROWS.map((r) => (
            <div key={r.key} className="me-row">
              <div className="me-lab">{r.label}{r.kind === "hat" && hatList.length === 1 ? " (earn or buy hats)" : r.kind === "acc" && accList.length === 1 ? " (buy in the Shop tab)" : ""}</div>
              <DialogButton className="me-btn" onClick={() => change(r, -1)}>{"<"}</DialogButton>
              <div className="me-val">{shown(r)}</div>
              <DialogButton className="me-btn" onClick={() => change(r, 1)}>{">"}</DialogButton>
            </div>
          ))}
          {tab === "shop" && (
            <>
              <Focusable className="me-cats" flow-children="row">
                {CATS.map((c) => (
                  <DialogButton key={c.kind} className={"me-cat" + (cat === c.kind ? " on" : "")} onClick={() => setCat(c.kind)} onFocus={() => setCat(c.kind)}>
                    {c.label}<span className="ct">{ownedIn(c.kind)}/{SHOP.filter((it) => it.kind === c.kind).length}</span>
                  </DialogButton>
                ))}
              </Focusable>
              {catItems.map((it) => {
                const has = owned.includes(it.id);
                const act = () => { onItem(it); };
                return (
                  <Focusable key={it.id} className="me-item" focusClassName="fp-focus" onActivate={act} onClick={act}
                    onFocus={() => setTryOn(equipOf(it))} onGamepadFocus={() => setTryOn(equipOf(it))} onBlur={() => setTryOn(null)}>
                    <span className="nm">{it.name}</span>
                    {has ? <span className="own">{isOn(it) ? "Wearing - press A to take off" : "Owned - press A to wear"}</span> : <span className="pr">{it.price} points</span>}
                  </Focusable>
                );
              })}
            </>
          )}
        </div>
        <div className="me-foot">
          {tab === "char" && <DialogButton onClick={randomize}>Random</DialogButton>}
          {tab === "char" && <DialogButton onClick={() => steam && setLook({ ...steam, hat: look.hat, acc: look.acc, tee: look.tee, flag: look.flag, face: look.face, kicks: look.kicks, aura: look.aura })}>Steam look</DialogButton>}
          <DialogButton className="go" onClick={save}>Save</DialogButton>
          <DialogButton onClick={back}>Cancel</DialogButton>
        </div>
      </div>
    </Focusable>
  );
}

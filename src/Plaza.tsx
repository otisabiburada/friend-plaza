import { Focusable, GamepadButton, Navigation } from "@decky/ui";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaSearchMinus, FaSearchPlus, FaStore, FaSyncAlt, FaUser, FaUserFriends, FaWalking } from "react-icons/fa";
import { api, Friend, RingEntry, State } from "./api";
import { hatName, STAMPS } from "./catalog";
import { drawWalker, hitTest, Look, lookFor, makeWalker, pickTarget, stepWalker, Walker } from "./chars";
import { computeZones, pushOutOfRect, storeRect, storeSpot, Zone } from "./layout";
import { STORE_ROUTE } from "./FriendEditor";
import { applySyncResult, net, netChanged, pendingInvites, useNet } from "./net";
import { ActionBar } from "./plaza/ActionBar";
import { Cam, stepCamera } from "./plaza/camera";
import { DrawerView } from "./plaza/DrawerView";
import { Avatar, statusClass, steamLine, ToolButton, ZoneCard } from "./plaza/parts";
import { buildPeople } from "./plaza/people";
import { Governor, LEVELS } from "./plaza/quality";
import { PLAZA_CSS } from "./plaza/styles";
import { Drawer, Phase, ZOOM_HOME, ZOOMS } from "./plaza/types";
import { useFeed, useServerSync } from "./plaza/useServerSync";
import { nearPoint, noNudge, Nudge, press, readInput, smoothInput, startStickInput, stepPlayer } from "./plaza/walk";
import { SETTINGS_ROUTE } from "./routes";
import { Scene3D } from "./scene3d";
import { Social, SocialEvent } from "./social";

export const PLAZA_ROUTE = "/friend-plaza";

export function PlazaPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 1280, h: 760 });
  const [phase, setPhase] = useState<Phase>("loading");
  const [msg, setMsg] = useState("");
  const [prefs, setPrefs] = useState<State | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [drawer, setDrawer] = useState<Drawer>(null);
  const [lastApp, setLastApp] = useState(0);
  const [walking, setWalking] = useState(false);
  const [zoomIdx, setZoomIdx] = useState(ZOOMS.indexOf(ZOOM_HOME));
  const [nearStore, setNearStore] = useState(false);
  const [qLevel, setQLevel] = useState(0);
  const netV = useNet();
  const { feed, say } = useFeed();

  const walkers = useRef(new Map<string, Walker>());
  const walkerList = useRef<Walker[]>([]);
  const social = useRef(new Social());
  const governor = useRef(new Governor("auto", false));
  const sceneRef = useRef<Scene3D | null>(null);
  const zonesRef = useRef<Zone[]>([]);
  const camRef = useRef<Cam>({ z: 1, cx: 640, cy: 380, x0: 0, y0: 0 });
  const focusPt = useRef<{ x: number; y: number } | null>(null);
  const keysRef = useRef(new Set<string>());
  const nudgeRef = useRef<Nudge>(noNudge());
  const smoothRef = useRef({ ix: 0, iy: 0 });
  const nearStoreRef = useRef(false);
  const lookCache = useRef(new Map<string, { key: string; look: Look }>());
  const selRef = useRef<string | null>(null);
  const sizeRef = useRef(size);
  const alive = useRef(true);
  const phaseRef = useRef<Phase>("loading");
  const walkRef = useRef(false);
  const zoomRef = useRef(1);
  const qLevelRef = useRef(0);
  phaseRef.current = phase;
  walkRef.current = walking;
  zoomRef.current = ZOOMS[zoomIdx];
  qLevelRef.current = qLevel;

  const people = buildPeople({
    friends: net.friends, players: net.players, me: net.me, meId: net.meId,
    signedIn: net.signedIn, showOthers: prefs ? prefs.show_others : true, max: LEVELS[qLevel].maxCrowd,
  });
  const peopleRef = useRef(people);
  peopleRef.current = people;
  const zones = computeZones(size.w, size.h, people.ring);
  const ringKey = people.ring.map((r) => r.appid + ":" + r.playing).join(",");
  zonesRef.current = zones;
  selRef.current = selected;
  sizeRef.current = size;

  const nameOf = (id: string): string => {
    const pp = peopleRef.current;
    if (pp.me && pp.me.steamid === id) return "You";
    const f = pp.list.find((x) => x.steamid === id);
    return f ? f.name : "A friend";
  };
  const friendById = (id: string | null): Friend | null => {
    if (!id) return null;
    if (people.me && people.me.steamid === id) return people.me;
    return people.list.find((x) => x.steamid === id) || null;
  };
  const canInteractWith = (id: string): boolean => net.friends.has(id) || (net.strangerInteract && net.players.some((p) => p.steamid === id));

  const { ackRef } = useServerSync({
    ready: phase === "ready", meId: net.meId, lowPower: !!(prefs && prefs.low_power),
    walkers, social, say, nameOf,
  });

  // size of the page
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth || window.innerWidth, h = el.clientHeight || window.innerHeight - 40;
      if (w > 100 && h > 100) setSize((p) => (p.w === w && p.h === h ? p : { w, h }));
    };
    measure();
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") { ro = new ResizeObserver(measure); ro.observe(el); }
    window.addEventListener("resize", measure);
    return () => { if (ro) ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);

  // loading the settings (everything else comes from the server)
  const load = async () => {
    setPhase("loading"); setMsg("");
    try {
      const st = await api.getState();
      if (!alive.current) return;
      if (st.steamid) net.meId = net.meId || st.steamid;
      setPrefs(st);
      setPhase("ready");
    } catch (e) {
      if (!alive.current) return;
      setMsg(e instanceof Error ? e.message : String(e));
      setPhase("error");
    }
  };
  useEffect(() => {
    alive.current = true;
    load();
    return () => { alive.current = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // the quality setting
  useEffect(() => {
    if (!prefs) return;
    governor.current.setMode(prefs.quality || "auto", !!prefs.low_power);
    if (governor.current.level !== qLevelRef.current) setQLevel(governor.current.level);
  }, [prefs && prefs.quality, prefs && prefs.low_power]);

  useEffect(() => {
    const m = new Map<string, string>();
    people.list.forEach((f) => m.set(f.steamid, f.name));
    if (people.me) m.set(people.me.steamid, "You");
    net.names = m;
  }, [netV]);

  // keep the crowd in step with the data
  useEffect(() => {
    if (!prefs) return;
    const map = walkers.current;
    const cx = size.w / 2, cy = size.h / 2;
    const bySlot = new Map<number, Zone>();
    zones.forEach((z) => bySlot.set(z.entry.appid, z));
    const playerFigure = new Map(net.players.map((p) => [p.steamid, p.figure]));
    const all: Array<{ f: Friend; me: boolean }> = people.list.map((f) => ({ f, me: false }));
    if (people.me) all.push({ f: people.me, me: true });
    const perHome = new Map<number, number>();
    for (const { f } of all) if (f.home != null && bySlot.has(f.home)) perHome.set(f.home, (perHome.get(f.home) || 0) + 1);
    const seen = new Set<string>();
    for (const { f, me } of all) {
      seen.add(f.steamid);
      let w = map.get(f.steamid);
      const fresh = !w;
      if (!w) { w = makeWalker(f, me, cx, cy); map.set(f.steamid, w); }
      w.state = f.state; w.playing = f.playing; w.me = me; w.name = f.name;
      const rf = net.friends.get(f.steamid);
      const figure = me ? net.me.figure : rf ? rf.figure : (playerFigure.get(f.steamid) || null);
      const key = figure ? JSON.stringify(figure) : "steam";
      let lc = lookCache.current.get(f.steamid);
      if (!lc || lc.key !== key) { lc = { key, look: figure ? { ...figure } : lookFor(f.steamid) }; lookCache.current.set(f.steamid, lc); }
      w.look = lc.look;
      w.live = !!(rf && rf.online) || playerFigure.has(f.steamid);
      w.home = f.home != null && bySlot.has(f.home) ? f.home : null;
      const slot = f.home != null ? bySlot.get(f.home) : undefined;
      const ox = w.ax, oy = w.ay;
      const r1 = (w.seed % 1000) / 1000, r2 = ((w.seed >>> 10) % 1000) / 1000;
      if (slot) {
        const n = perHome.get(slot.entry.appid) || 1;
        w.ax = slot.x; w.ay = slot.y + 24;
        w.radius = Math.min(slot.r * 1.25, slot.r * 0.55 + 7 * Math.sqrt(n));
      } else {
        // no pad of their own: stroll in the middle of the plaza
        w.ax = size.w * (0.26 + 0.5 * r1); w.ay = size.h * (0.46 + 0.14 * r2); w.radius = 90;
      }
      if (fresh || Math.hypot(w.ax - ox, w.ay - oy) > 5) {
        pickTarget(w, Math.random, size);
        if (fresh) { w.x = w.tx; w.y = w.ty; }
      }
    }
    for (const id of Array.from(map.keys())) if (!seen.has(id)) { map.delete(id); lookCache.current.delete(id); }
    walkerList.current = Array.from(map.values());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefs, size.w, size.h, netV, qLevel]);

  const addFeed = (evs: SocialEvent[]) => {
    for (const e of evs) {
      const a = walkers.current.get(e.a), b = e.b ? walkers.current.get(e.b) : undefined;
      if (e.kind === "wave" && a && a.me && b) say("You waved at " + b.name);
    }
  };

  const toggleOption = async (name: string, current: boolean) => {
    try {
      await api.setOption(name, !current);
      setPrefs(await api.getState());
    } catch (e) { say(e instanceof Error ? e.message : String(e)); }
  };

  // ---- walking and the store ----
  const openStore = () => { setWalking(false); keysRef.current.clear(); setSelected(null); setDrawer(null); Navigation.Navigate(STORE_ROUTE); };
  const onDirection = (e: { detail?: { button?: number } }) => {
    const b = e && e.detail ? e.detail.button : undefined;
    const now = performance.now();
    if (b === GamepadButton.DIR_LEFT) press(nudgeRef.current, "left", now);
    else if (b === GamepadButton.DIR_RIGHT) press(nudgeRef.current, "right", now);
    else if (b === GamepadButton.DIR_UP) press(nudgeRef.current, "up", now);
    else if (b === GamepadButton.DIR_DOWN) press(nudgeRef.current, "down", now);
  };
  const startWalk = () => {
    if (!peopleRef.current.me) { say("Your own character is not loaded yet. Try Refresh."); return; }
    setSelected(null); setDrawer(null); keysRef.current.clear(); setWalking(true);
  };
  const stopWalk = () => { nearStoreRef.current = false; setNearStore(false); keysRef.current.clear(); nudgeRef.current = noNudge(); setWalking(false); };
  const greetNow = () => {
    const meId = peopleRef.current.me ? peopleRef.current.me.steamid : "";
    if (nearStoreRef.current) { openStore(); return; }
    const id = social.current.greetNearby(Array.from(walkers.current.values()), meId, canInteractWith);
    if (id) { setSelected(id); say("You greeted " + nameOf(id)); }
  };
  useEffect(() => {
    if (!walking) return;
    const stopStick = startStickInput();
    const dn = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (["arrowleft", "arrowright", "arrowup", "arrowdown", "a", "d", "w", "s"].includes(key)) { keysRef.current.add(key); e.preventDefault(); }
      else if (key === " " || key === "enter") greetNow();
      else if (key === "escape") stopWalk();
    };
    const up = (e: KeyboardEvent) => { keysRef.current.delete(e.key.toLowerCase()); };
    window.addEventListener("keydown", dn); window.addEventListener("keyup", up);
    return () => { stopStick(); smoothRef.current = { ix: 0, iy: 0 }; window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walking]);

  // animation: real 3D when WebGL works, the flat drawing otherwise
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let scene3: Scene3D | null = null;
    try { scene3 = new Scene3D(canvas); } catch (e) { scene3 = null; }
    sceneRef.current = scene3;
    const ctx2 = scene3 ? null : canvas.getContext("2d");
    if (!scene3 && !ctx2) return;
    let raf = 0;
    let last = performance.now();
    let t = 0;
    let appliedLevel = -1;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const gov = governor.current;
      if (now - last < gov.current.frameMs) return;
      const rawMs = now - last;
      const dt = Math.min(0.1, rawMs / 1000);
      last = now;
      t += dt;
      if (gov.sample(rawMs) && gov.level !== qLevelRef.current) setQLevel(gov.level);
      if (scene3 && appliedLevel !== gov.level) { appliedLevel = gov.level; scene3.setQuality(gov.current.pixel); }
      const low = gov.level >= 2;
      const sz = sizeRef.current;
      const list = walkerList.current;
      const meW = list.find((w) => w.me);
      const walkingNow = walkRef.current && !!meW;
      for (const w of list) { if (walkingNow && w === meW) continue; stepWalker(w, dt, Math.random, sz); }
      if (walkingNow && meW) {
        let pads: Array<Gamepad | null> = [];
        try { pads = navigator.getGamepads ? Array.from(navigator.getGamepads()) : []; } catch (e) { pads = []; }
        stepPlayer(meW, dt, sz, smoothInput(smoothRef.current, readInput(keysRef.current, nudgeRef.current, performance.now(), pads), dt));
        const st = storeSpot(sz.w, sz.h);
        const near = nearPoint(meW, st.doorX, st.doorY, 62);
        if (near !== nearStoreRef.current) { nearStoreRef.current = near; setNearStore(near); }
      }
      const wall = storeRect(sz.w, sz.h);
      for (const w of list) pushOutOfRect(w, wall);   // the store building is solid
      const evs = social.current.update(list, dt, Math.random, sz);
      if (evs.length) addFeed(evs);
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const p = list[i], q = list[j];
          if (walkingNow && (p === meW || q === meW)) continue; // the player walks through the crowd; nobody pushes them
          const dx = q.x - p.x, dy = (q.y - p.y) * 1.6;
          const d2 = dx * dx + dy * dy;
          if (d2 < 484 && d2 > 0.01) { // closer than 22 px: ease them apart
            const d = Math.sqrt(d2), push = (22 - d) * 0.08;
            p.x -= (dx / d) * push; q.x += (dx / d) * push;
            p.y -= (dy / d) * push * 0.6; q.y += (dy / d) * push * 0.6;
          }
        }
      }
      const sel = selRef.current;
      // camera: zoom level, and where it looks
      const cam = camRef.current;
      const tz = walkingNow ? Math.max(1.7, zoomRef.current) : zoomRef.current;
      let tcx = sz.w / 2, tcy = sz.h / 2;
      if (walkingNow && meW) { tcx = meW.x; tcy = meW.y - 20; }
      else if (tz > ZOOM_HOME) {
        const sw = sel ? walkers.current.get(sel) : undefined;
        if (sw) { tcx = sw.x; tcy = sw.y - 20; } else if (focusPt.current) { tcx = focusPt.current.x; tcy = focusPt.current.y; }
      }
      stepCamera(cam, dt, sz, { z: tz, x: tcx, y: tcy }, walkingNow);
      const vw = sz.w / cam.z, vh = sz.h / cam.z;
      const wd = worldRef.current;
      if (wd) wd.style.transform = "translate(" + (-cam.x0 * cam.z).toFixed(1) + "px," + (-cam.y0 * cam.z).toFixed(1) + "px) scale(" + cam.z.toFixed(3) + ")";
      if (scene3) {
        scene3.resize(sz.w, sz.h);
        scene3.setDetail(tz);
        scene3.setView(cam.x0, cam.y0, vw, vh);
        scene3.frame(list, { selected: sel, t, dt, low });
      } else if (ctx2) {
        if (canvas.width !== sz.w) canvas.width = sz.w;
        if (canvas.height !== sz.h) canvas.height = sz.h;
        ctx2.setTransform(1, 0, 0, 1, 0, 0);
        ctx2.clearRect(0, 0, sz.w, sz.h);
        ctx2.setTransform(cam.z, 0, 0, cam.z, -cam.x0 * cam.z, -cam.y0 * cam.z);
        for (const w of [...list].sort((a, b) => a.y - b.y)) drawWalker(ctx2, w, { selected: w.id === sel, t, lowPower: low, h: sz.h });
        ctx2.setTransform(1, 0, 0, 1, 0, 0);
      }
      const b = bubbleRef.current;
      if (b) {
        const w = sel ? walkers.current.get(sel) : undefined;
        if (w) {
          const x = Math.min(sz.w - 160, Math.max(160, (w.x - cam.x0) * cam.z));
          const top = ((scene3 ? scene3.bubbleY(w) : w.y - 64 * (0.85 + 0.45 * (w.y / sz.h))) - cam.y0) * cam.z;
          const y = Math.max(96, top);
          b.style.transform = "translate(" + Math.round(x - 150) + "px," + Math.round(y - b.offsetHeight - 8) + "px)";
          b.style.visibility = "visible";
        } else {
          b.style.visibility = "hidden";
        }
      }
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); sceneRef.current = null; if (scene3) scene3.dispose(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // the coloured pads and the store on the floor
  useEffect(() => {
    const sc = sceneRef.current;
    if (!sc) return;
    sc.resize(size.w, size.h);
    sc.setStore(storeSpot(size.w, size.h));
    sc.setZones(zones.map((z) => ({ x: z.x, y: z.y + 8, r: z.r, hue: z.hue, live: z.entry.playing > 0 })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringKey, size.w, size.h]);

  const onCanvasClick = (e: { clientX: number; clientY: number }) => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const k = r.width ? size.w / r.width : 1;
    const cam = camRef.current;
    const hit = hitTest(Array.from(walkers.current.values()), cam.x0 + ((e.clientX - r.left) * k) / cam.z, cam.y0 + ((e.clientY - r.top) * k) / cam.z, size.h);
    if (!walkRef.current) setSelected(hit ? hit.id : null);
  };

  const openZone = (z: Zone) => {
    setLastApp(z.entry.appid);
    setSelected(null);
    setDrawer({ kind: "game", appid: z.entry.appid });
  };

  // ---- things you can do with the friend you picked ----
  const refreshNet = async () => { try { const sr = await api.serverSync([]); if (sr.ok) applySyncResult(sr); } catch (e) { /* the next check-in will catch up */ } };
  const refreshAll = async () => {
    try { const r = await api.refreshFriends(); say(r.count ? "Read " + r.count + " Steam friends from Steam's files." : "Steam's files list no friends yet."); } catch (e) { /* the check-in below still runs */ }
    await load(); await refreshNet();
  };
  const sendOnline = async (to: string, kind: string, payload: Record<string, number> | null) => {
    try {
      const r = await api.serverSend(to, kind, payload);
      if (!r.ok) { say(r.message || "That didn't go through."); return; }
      if (r.hats) { net.me.hats = r.hats; }
      for (const k of r.awarded || []) { const sd = STAMPS.find((x) => x.key === k); if (sd) say("New stamp: " + sd.name + " - hat unlocked: " + hatName(sd.hat)); }
      netChanged();
    } catch (e) { say(e instanceof Error ? e.message : String(e)); }
  };
  const hasApp = !!(selected && canInteractWith(selected));
  const isStranger = !!(selected && net.players.some((p) => p.steamid === selected));
  const greet = (emote: "" | "heart" | "star", kind: string) => {
    if (!selected) return;
    const ok = social.current.sendWave(Array.from(walkers.current.values()), selected, emote);
    if (!ok) say(nameOf(selected) + " is asleep right now.");
    else if (hasApp) sendOnline(selected, kind, null);
  };
  const meIdNow = people.me ? people.me.steamid : "";
  const barActions = {
    wave: () => greet("", "wave"),
    heart: () => greet("heart", "heart"),
    five: () => greet("star", "highfive"),
    dance: () => {
      if (!selected) return;
      social.current.danceTogether(Array.from(walkers.current.values()), [meIdNow, selected]);
      sendOnline(selected, "dance", null);
    },
    play: () => selected && setDrawer({ kind: "play", to: selected }),
    gift: () => selected && setDrawer({ kind: "gift", to: selected }),
    note: () => selected && setDrawer({ kind: "note", to: selected }),
    profile: () => { if (selected) Navigation.NavigateToExternalWeb("https://steamcommunity.com/profiles/" + selected); },
    game: () => {
      const f = friendById(selected);
      const appid = f && f.game && f.game.appid ? f.game.appid : 0;
      if (appid) Navigation.Navigate("/library/app/" + appid);
    },
    block: async () => {
      if (!selected) return;
      const who = nameOf(selected);
      const r = await api.serverBlock(selected);
      say(r.ok ? "Blocked " + who + ". You can unblock in Settings." : (r.message || "Could not block."));
      setSelected(null);
      if (r.ok) await refreshNet();
    },
    report: () => selected && setDrawer({ kind: "report", to: selected }),
    close: () => setSelected(null),
  };
  const drawerActions = {
    close: () => setDrawer(null),
    open: (d: Drawer) => setDrawer(d),
    pickFriend: (id: string) => { setSelected(id); setDrawer(null); },
    say, nameOf, toggleOption,
    ackNote: (id: number) => { ackRef.current.push(id); },
    sendGift: (to: string, hat: number) => {
      sendOnline(to, "gift", { hat });
      social.current.visit(Array.from(walkers.current.values()), meIdNow, to, "star");
      say("You gave " + nameOf(to) + " a " + hatName(hat).toLowerCase());
    },
    sendNote: (to: string, text: number) => { sendOnline(to, "note", { text }); say("You left " + nameOf(to) + " a note"); },
    report: async (to: string, reason: string) => {
      const r = await api.serverReport(to, reason);
      say(r.ok ? "Thanks. Your report was sent." : (r.message || "Could not send the report."));
    },
    openSettings: () => Navigation.Navigate(SETTINGS_ROUTE),
  };

  const onCancel = () => {
    if (walkRef.current) stopWalk();
    else if (drawer) setDrawer(null);
    else if (selected) setSelected(null);
    else Navigation.NavigateBack();
  };

  const selFriend = friendById(selected);
  const bubble = selFriend ? steamLine(selFriend) : null;
  const entry: RingEntry | undefined = drawer && drawer.kind === "game" ? people.ring.find((r) => r.appid === drawer.appid) : undefined;
  const counts = people.counts;
  const st = storeSpot(size.w, size.h);

  return (
    <div ref={rootRef} className="fp-root">
      <style>{PLAZA_CSS}</style>
      <Focusable onCancel={onCancel} style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }}>
      <div onClick={onCanvasClick} style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }}>
        <canvas ref={canvasRef} className="fp-canvas" />
      </div>

      {phase === "ready" && (
        <>
          <div className="fp-head">
            <div className="fp-title">Friend Plaza</div>
            <span className="fp-chip">{counts.online} online</span>
            <span className="fp-chip game">{counts.playing} in-game</span>
          </div>
          <div className="fp-meta">People who use Friend Plaza</div>
        </>
      )}

      <div ref={worldRef} className="fp-world">
        {phase === "ready" && !drawer && (walking ? (
          <div className="fp-store plain" style={{ left: st.x - 62, top: st.y - 138 }}><FaStore />Friend Store</div>
        ) : (
          <Focusable className="fp-store" focusClassName="fp-focus" style={{ left: st.x - 62, top: st.y - 138 }}
            onActivate={openStore} onClick={openStore} onFocus={() => { focusPt.current = { x: st.x, y: st.y }; }}
            onGamepadFocus={() => { focusPt.current = { x: st.x, y: st.y }; }}><FaStore />Friend Store</Focusable>
        ))}
        {walking && nearStore && <div className="fp-prompt" style={{ left: st.x - 60, top: st.y - 168 }}>A: Enter the store</div>}
        {phase === "ready" && !drawer && zones.map((z) => (
          <ZoneCard key={z.entry.appid} zone={z} plain={walking} autoFocus={lastApp ? z.entry.appid === lastApp : z.index === 0} onOpen={openZone}
            onFocusZone={(q) => { focusPt.current = { x: q.x, y: q.y }; }}
            online={people.list.filter((f) => f.home === z.entry.appid).length} />
        ))}
      </div>

      {phase === "ready" && !drawer && !walking && (
        <div className="fp-tools">
          <ToolButton icon={<FaWalking />} tip="Walk" onAct={startWalk} />
          <ToolButton icon={<FaSearchMinus />} tip="Zoom out" iconOnly onAct={() => setZoomIdx((i) => Math.max(0, i - 1))} />
          <ToolButton icon={<FaSearchPlus />} tip="Zoom in" iconOnly onAct={() => setZoomIdx((i) => Math.min(ZOOMS.length - 1, i + 1))} />
          <ToolButton icon={<FaUser />} tip="Me" badge={net.inbox.length + pendingInvites().length} onAct={() => { setSelected(null); setDrawer({ kind: "me" }); }} />
          <ToolButton icon={<FaUserFriends />} tip="All friends" onAct={() => { setSelected(null); setDrawer({ kind: "friends" }); }} />
          <ToolButton icon={<FaSyncAlt />} tip="Refresh" onAct={() => { setSelected(null); refreshAll(); }} />
          <ToolButton icon={<FaArrowLeft />} tip="Back" onAct={() => Navigation.NavigateBack()} />
        </div>
      )}

      {walking && (
        <>
          {/* @ts-ignore autoFocus exists on Focusable at run time */}
          <Focusable className="fp-walk" onActivate={greetNow} onClick={greetNow} onGamepadDirection={onDirection} autoFocus />
          <div className="fp-hints">
            <div><span className="fp-g">D</span>Move</div>
            <div><span className="fp-g">A</span>{nearStore ? "Enter store" : "Greet"}</div>
            <div><span className="fp-g">B</span>Stop walking</div>
          </div>
        </>
      )}

      {feed.length > 0 && !drawer && (
        <div className="fp-feed">{feed.map((f) => <div key={f.id}>{f.text}</div>)}</div>
      )}

      {phase === "ready" && !drawer && !walking && selFriend && selected !== meIdNow && (
        <ActionBar friend={selFriend} hasApp={hasApp} isStranger={isStranger} a={barActions} />
      )}

      {bubble && selFriend && (
        <div ref={bubbleRef} className="fp-bubble" style={{ visibility: "hidden" }}>
          <Avatar f={selFriend} />
          <div style={{ minWidth: 0 }}>
            <div className={"fp-bn " + statusClass(selFriend)}>{selFriend.name}{net.friends.get(selFriend.steamid)?.online ? <span className="fp-live">here now</span> : null}</div>
            <div className="fp-bl">{bubble.head}</div>
            <div className="fp-bs">{bubble.sub}</div>
          </div>
        </div>
      )}

      {phase === "loading" && (
        <div className="fp-card"><h2>Opening the plaza...</h2><p>Just a moment.</p></div>
      )}
      {phase === "error" && (
        <div className="fp-card">
          <h2>The plaza couldn't load</h2>
          <p>{msg}</p>
          <Focusable className="fp-btn" focusClassName="fp-focus" onActivate={() => refreshAll()} onClick={() => refreshAll()}>Try again</Focusable>
          {" "}
          <Focusable className="fp-btn" focusClassName="fp-focus" onActivate={() => Navigation.Navigate(SETTINGS_ROUTE)} onClick={() => Navigation.Navigate(SETTINGS_ROUTE)}>Settings</Focusable>
          {" "}
          <Focusable className="fp-btn" focusClassName="fp-focus" onActivate={() => Navigation.NavigateBack()} onClick={() => Navigation.NavigateBack()}>Back</Focusable>
        </div>
      )}
      {phase === "ready" && people.list.length === 0 && !drawer && (
        <div className="fp-notice">
          {net.signedIn
            ? "Nobody who uses Friend Plaza is online right now. Ask a friend to open it, or walk to the Friend Store."
            : "You are not connected to a server, so there is nobody to show yet. Open Me > All settings (or the Quick Access panel > Settings) and connect to your group's server."}
        </div>
      )}

      {drawer && prefs && <DrawerView drawer={drawer} prefs={prefs} people={people} entry={entry} a={drawerActions} />}
      </Focusable>
    </div>
  );
}


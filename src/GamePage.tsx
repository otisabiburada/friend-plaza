import { Focusable, Navigation } from "@decky/ui";
import { useEffect, useRef, useState } from "react";
import { api } from "./api";
import { gameName } from "./catalog";
import { nextPollDelay } from "./gamePolling";
import { Look, lookFor, makeWalker, Walker } from "./chars";
import { applySyncResult, Match, net, netChanged, useNet } from "./net";
import { Scene3D } from "./scene3d";

export const GAME_ROUTE = "/friend-plaza-game";

const CSS = `
.gm-root{position:relative;margin-top:40px;height:calc(100% - 40px);box-sizing:border-box;padding:18px 32px 78px;background:radial-gradient(1100px 680px at 50% 40%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;font-size:14px;display:flex;flex-direction:column;overflow:hidden}
.gm-top{display:flex;align-items:center;gap:16px}
.gm-title{font-size:26px;font-weight:800;color:#fff}
.gm-vs{padding:5px 12px;border-radius:3px;background:rgba(102,192,244,.16);color:#66c0f4;font-weight:700;font-size:13px}
.gm-pts{margin-left:auto;padding:5px 12px;border-radius:3px;background:rgba(144,186,60,.18);color:#90ba3c;font-weight:800;font-size:13px}
.gm-status{margin:10px 0 8px;font-size:18px;font-weight:800;color:#dfe6ec}
.gm-status.you{color:#90ba3c}.gm-status.lose{color:#e0b44f}
.gm-main{flex:1 1 0;display:flex;align-items:center;justify-content:center;gap:40px;min-height:0;padding:0 190px;overflow:hidden}
.gm-board{display:grid;gap:8px;padding:12px;background:rgba(255,255,255,.05);border-radius:4px;box-shadow:0 0 0 1px rgba(102,192,244,.25)}
.gm-cell{margin:0;width:104px;height:104px;border-radius:3px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:800;box-sizing:border-box}
.gm-cell.fp-focus{background:#fff;box-shadow:0 0 18px rgba(102,192,244,.7)}
.gm-x{color:#66c0f4}.gm-o{color:#90ba3c}
.gm-cell.fp-focus .gm-x,.gm-cell.fp-focus .gm-o{filter:brightness(.7)}
.gm-c4{display:grid;grid-template-columns:repeat(7,64px);gap:6px;padding:12px;background:#1f4e86;border-radius:6px;box-shadow:0 0 0 2px #2f6db5,0 14px 30px rgba(0,0,0,.5)}
.gm-col{margin:0;display:flex;flex-direction:column;gap:6px;padding:3px;border-radius:6px;box-sizing:border-box}
.gm-col.fp-focus{background:rgba(255,255,255,.9)}
.gm-disc{width:58px;height:58px;border-radius:50%;background:#0b1017;box-shadow:inset 0 3px 8px rgba(0,0,0,.6)}
.gm-disc.R{background:radial-gradient(circle at 35% 30%,#ff8a8a,#d63838)}
.gm-disc.Y{background:radial-gradient(circle at 35% 30%,#ffe58a,#e0a82f)}
.gm-rps{display:flex;gap:18px}
.gm-pick{margin:0;width:170px;height:190px;border-radius:4px;background:rgba(255,255,255,.08);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font-size:18px;font-weight:800;color:#fff;box-sizing:border-box}
.gm-pick.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 22px rgba(102,192,244,.7)}
.gm-pick.mine{box-shadow:0 0 0 3px #66c0f4}
.gm-score{font-size:46px;font-weight:800;color:#fff;letter-spacing:2px;margin-bottom:6px}
.gm-hist{display:flex;flex-direction:column;gap:4px;font-size:13px;color:#8f98a0;min-width:200px}
.gm-hist b{color:#dfe6ec}
.gm-foot{flex:none;display:flex;gap:10px;justify-content:center;padding:8px 0 4px;position:relative;z-index:3}
.gm-btn{margin:0;padding:10px 24px;border-radius:3px;background:rgba(255,255,255,.1);color:#dfe6ec;font-weight:700}
.gm-btn.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 16px rgba(102,192,244,.6)}
.gm-inner{display:flex;flex-direction:column;flex:1;min-height:0;position:relative;z-index:1}
.gm-canvas{position:absolute;left:0;top:0;width:100%;height:100%;z-index:0;pointer-events:none}
.gm-root > .gm-inner{position:relative;z-index:1}
.gm-who{position:absolute !important;bottom:6px;z-index:2;width:240px;text-align:center;pointer-events:none}
.gm-who b{display:block;font-size:17px;font-weight:800;color:#fff}
.gm-who span{display:inline-block;margin-top:3px;padding:2px 10px;border-radius:3px;background:rgba(102,192,244,.18);color:#66c0f4;font-size:12px;font-weight:800}
.gm-who span.turn{background:#66c0f4;color:#06121c}
.gm-who span.win{background:#90ba3c;color:#0c1a05}
.gm-hand{display:flex;gap:8px;align-items:center;min-height:96px}
.gm-card21{width:64px;height:92px;border-radius:4px;background:#f4f6f8;color:#14202c;box-shadow:0 4px 10px rgba(0,0,0,.5);display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:6px;box-sizing:border-box;font-weight:800;font-size:20px}
.gm-card21.red{color:#d03a3a}
.gm-bj{display:flex;flex-direction:column;gap:10px;align-items:center}
.gm-total{font-size:15px;font-weight:800;color:#dfe6ec;min-width:120px;text-align:center}
.gm-total.bust{color:#e0b44f}
.gm-act{display:flex;gap:14px}
.gm-big{margin:0;width:150px;height:56px;border-radius:3px;background:rgba(255,255,255,.1);color:#fff;font-size:20px;font-weight:800;display:flex;align-items:center;justify-content:center;box-sizing:border-box}
.gm-big.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 22px rgba(102,192,244,.7)}
.gm-card{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:420px;padding:22px 26px;text-align:center;background:linear-gradient(#2d4a62,#1b2838);border-radius:4px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);z-index:5}
.gm-card h2{margin:0 0 6px;font-size:26px;color:#fff}
`;

const PICK_NAME: Record<string, string> = { r: "Rock", p: "Paper", s: "Scissors", "?": "Picked" };

function PickIcon({ k }: { k: string }) {
  const c = "currentColor";
  if (k === "r") return <svg width="64" height="64" viewBox="0 0 64 64"><path d="M14 40 L20 20 L36 12 L52 22 L54 42 L40 54 L22 52 Z" fill={c} /></svg>;
  if (k === "p") return <svg width="64" height="64" viewBox="0 0 64 64"><path d="M14 10 H44 L52 18 V54 H14 Z" fill={c} /><path d="M22 26 H44 M22 34 H44 M22 42 H38" stroke="#14202c" strokeWidth="3" fill="none" /></svg>;
  return <svg width="64" height="64" viewBox="0 0 64 64"><path d="M16 12 L36 36 M48 12 L28 36" stroke={c} strokeWidth="7" strokeLinecap="round" /><circle cx="22" cy="48" r="9" fill="none" stroke={c} strokeWidth="6" /><circle cx="42" cy="48" r="9" fill="none" stroke={c} strokeWidth="6" /></svg>;
}

const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
function Suit({ n }: { n: number }) {
  const red = n === 1 || n === 2;
  const c = red ? "#d03a3a" : "#14202c";
  if (n === 1) return <svg width="26" height="26" viewBox="0 0 24 24"><path d="M12 21 C-3 10 4 -1 12 7 C20 -1 27 10 12 21Z" fill={c} /></svg>;
  if (n === 2) return <svg width="26" height="26" viewBox="0 0 24 24"><path d="M12 1 L22 12 L12 23 L2 12Z" fill={c} /></svg>;
  if (n === 0) return <svg width="26" height="26" viewBox="0 0 24 24"><path d="M12 1 C-4 12 3 21 11 15.5 L9 23 H15 L13 15.5 C21 21 28 12 12 1Z" fill={c} /></svg>;
  return <svg width="26" height="26" viewBox="0 0 24 24"><circle cx="12" cy="7" r="5.5" fill={c} /><circle cx="6.5" cy="14" r="5.5" fill={c} /><circle cx="17.5" cy="14" r="5.5" fill={c} /><path d="M10 15 H14 L15 23 H9Z" fill={c} /></svg>;
}
function Card21({ c }: { c: number }) {
  const suit = Math.floor(c / 13);
  return <div className={"gm-card21" + (suit === 1 || suit === 2 ? " red" : "")}><span>{RANKS[c % 13]}</span><Suit n={suit} /></div>;
}
function bjTotal(cards: number[]): number {
  let t = 0, aces = 0;
  for (const c of cards) { const r = c % 13; if (r === 0) { aces++; t += 11; } else t += r >= 9 ? 10 : r + 1; }
  while (t > 21 && aces) { t -= 10; aces--; }
  return t;
}

export function GamePage() {
  useNet();
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const alive = useRef(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const players = useRef<{ a: Walker | null; b: Walker | null }>({ a: null, b: null });
  const infoRef = useRef<{ meNeeds: boolean; oppNeeds: boolean; winner: string; done: boolean; me: string; other: string }>({ meNeeds: false, oppNeeds: false, winner: "", done: false, me: "", other: "" });
  const lookIds = useRef({ a: "", b: "" });
  const id = net.openGame;
  const m: Match | undefined = net.games.find((g) => g.id === id);
  const hasMatch = !!m;

  // keep the board fresh while this page is open: a tiny "did it change?" question, and a full check-in now and then
  useEffect(() => {
    alive.current = true;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let lastFull = 0;
    const full = async () => {
      const r = await api.serverSync([]);
      if (alive.current && r.ok) applySyncResult(r);
      lastFull = Date.now();
    };
    const tick = async () => {
      try {
        if (!net.meId) { const st = await api.serverState(); net.meId = st.steamid; }
        const cur = net.games.find((g) => g.id === net.openGame);
        if (!cur || Date.now() - lastFull > 30000) await full();
        else {
          const p = await api.gamePoll(cur.id, cur.sig || "");
          if (!alive.current) return;
          if (p.ok && p.gone) await full();
          else if (p.ok && p.changed && p.match) {
            net.games = net.games.map((g) => (g.id === cur.id ? (p.match as Match) : g));
            netChanged();
            if (p.match.status === "done") await full();   // the points are paid out; fetch the new total
          }
        }
      } catch (e) { /* try again next time */ }
      if (alive.current) timer = setTimeout(tick, nextPollDelay(net.games.find((g) => g.id === net.openGame), net.meId, typeof document !== "undefined" && document.hidden));
    };
    tick();
    return () => { alive.current = false; if (timer) clearTimeout(timer); };
  }, []);

  // both players' characters, big, on the sides of the board
  useEffect(() => {
    const canvas = canvasRef.current, root = rootRef.current;
    if (!canvas || !root) return;
    let scene: Scene3D | null = null;
    try { scene = new Scene3D(canvas, true); } catch (e) { scene = null; }
    if (!scene) return;
    const sc = scene;
    const mk = (idv: string, name: string): Walker => makeWalker({ steamid: idv, name, state: "online", playing: false } as never, false, 0, 0);
    let raf = 0, last = performance.now(), t = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now; t += dt;
      const w = root.clientWidth || 1280, h = root.clientHeight || 720;
      const info = infoRef.current;
      if (!info.me) return;
      const lookOf = (idv: string, mine: boolean): Look => {
        const figure = mine ? net.me.figure : (net.friends.get(idv)?.figure || null);
        return figure ? { ...figure } : lookFor(idv);
      };
      const pl = players.current;
      if (!pl.a || lookIds.current.a !== info.me) { pl.a = mk(info.me, "You"); pl.a.look = lookOf(info.me, true); lookIds.current.a = info.me; }
      if (!pl.b || lookIds.current.b !== info.other) { pl.b = mk(info.other, "Friend"); pl.b.look = lookOf(info.other, false); lookIds.current.b = info.other; }
      const z = 3.6, vw = w / z, vh = h / z;
      const x0 = (w - vw) / 2, y0 = h * 0.4;
      sc.resize(w, h);
      canvas.style.width = "100%"; canvas.style.height = "100%";
      sc.setDetail(2);
      sc.setView(x0, y0, vw, vh);
      pl.a.x = x0 + (w * 0.115) / z; pl.b.x = x0 + (w * 0.885) / z;
      pl.a.y = pl.b.y = y0 + (h * 0.8) / z;
      pl.a.dir = 1; pl.b.dir = -1;
      for (const [p, mine] of [[pl.a, true], [pl.b, false]] as Array<[Walker, boolean]>) {
        p.me = !info.done && (mine ? info.meNeeds : info.oppNeeds);   // the blue arrow shows whose move it is
        const won = info.done && info.winner === (mine ? info.me : info.other);
        const drew = info.done && info.winner === "draw";
        p.act = won ? "dance" : drew ? "greet" : "";
        p.actT = 99;
        p.emote = won ? "note" : drew ? "heart" : "";
        p.partner = null;
        p.state = "online";
      }
      sc.frame([pl.a, pl.b], { selected: null, t, dt, low: false });
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); sc.dispose(); };
  }, [hasMatch]);

  const back = () => Navigation.NavigateBack();
  const me = net.meId;
  const meIdx = m ? (m.p1 === me ? 0 : 1) : 0;
  const other = m ? (meIdx === 0 ? m.p2 : m.p1) : "";
  const oname = net.names.get(other) || "Friend";

  const move = async (mv: Record<string, number | string>) => {
    if (!m || busy) return;
    setBusy(true); setMsg("");
    try {
      const r = await api.gameMove(m.id, mv);
      if (!r.ok) setMsg(r.message || "That didn't work.");
      else if (r.match) { net.games = net.games.map((g) => (g.id === m.id ? r.match as Match : g)); netChanged(); }
    } catch (e) { setMsg(e instanceof Error ? e.message : String(e)); }
    setBusy(false);
  };
  const leave = async () => {
    if (!m) return back();
    try { await api.gameCancel(m.id); } catch (e) { /* the server may be busy; the list refreshes anyway */ }
    back();
  };

  if (!m) {
    return (
      <div className="gm-root"><style>{CSS}</style>
        <div className="gm-top"><div className="gm-title">Game</div></div>
        <div className="gm-status">That game is gone.</div>
        <div className="gm-foot"><Focusable className="gm-btn" focusClassName="fp-focus" onActivate={back} onClick={back}>Back</Focusable></div>
      </div>
    );
  }

  const res = m.state.result;
  const done = m.status === "done";
  const simultaneous = m.kind === "rps" || m.kind === "bj";
  const bjHands = m.state.hands || [[], []];
  const bjStood = m.state.stood || [false, false];
  const myTurn = m.kind === "rps" ? (m.state.picks ? m.state.picks[meIdx] === null : false)
    : m.kind === "bj" ? !bjStood[meIdx] : m.turn === me;
  const oppNeeds = m.kind === "rps" ? (m.state.picks ? m.state.picks[1 - meIdx] === null : false)
    : m.kind === "bj" ? !bjStood[1 - meIdx] : m.turn === other;
  let status = "", cls = "";
  if (done && res) {
    if (res.winner === "draw") status = "It's a draw";
    else if (res.winner === me) { status = "You won!"; cls = "you"; }
    else { status = oname + " won"; cls = "lose"; }
    const pts = res.points[me] || 0;
    if (res.capped) status += " (no points: you have played each other a lot today)";
    else if (pts) status += " - +" + pts + " points";
  } else if (m.status === "invite") status = "Waiting for " + oname + " to accept...";
  else if (m.kind === "rps") status = myTurn ? "Pick one!" : "Waiting for " + oname + "...";
  else if (m.kind === "bj") status = !myTurn ? (bjStood[1 - meIdx] ? "Settling the hand..." : "You stand. Waiting for " + oname + "...") : "Hit or stand?";
  else status = myTurn ? "Your turn" : oname + " is thinking...";
  infoRef.current = { meNeeds: m.status === "active" && myTurn, oppNeeds: m.status === "active" && oppNeeds, winner: done && res ? res.winner : "", done, me, other };

  const board = m.state.board || "";
  const rpsHist = (m.state.history || []) as string[][];
  const bjHist = (m.state.history || []) as Array<{ totals: number[]; winner: number | string }>;
  const score = m.state.score || [0, 0];
  const whoStatus = (mine: boolean): { text: string; cls: string } => {
    if (done && res) return res.winner === "draw" ? { text: "Draw", cls: "" } : res.winner === (mine ? me : other) ? { text: "Winner", cls: "win" } : { text: "", cls: "" };
    const needs = mine ? myTurn : oppNeeds;
    return needs ? { text: simultaneous ? (mine ? "Your move" : "Deciding") : (mine ? "Your turn" : "Their turn"), cls: "turn" } : { text: simultaneous ? "Ready" : "", cls: "" };
  };
  const wa = whoStatus(true), wb = whoStatus(false);
  const lastHand = m.state.last;

  return (
    <div ref={rootRef} className="gm-root">
      <style>{CSS}</style>
      <canvas ref={canvasRef} className="gm-canvas" />
      <Focusable className="gm-inner" onCancel={back}>
      <div className="gm-top">
        <div className="gm-title">{gameName(m.kind)}</div>
        <span className="gm-vs">vs {oname}</span>
        <span className="gm-pts">{net.me.points} points</span>
      </div>
      <div className={"gm-status " + cls}>{status}{msg ? " - " + msg : ""}</div>
      <div className="gm-who" style={{ left: "1.5%" }}><b>You</b>{wa.text ? <span className={wa.cls}>{wa.text}</span> : null}</div>
      <div className="gm-who" style={{ right: "1.5%" }}><b>{oname}</b>{wb.text ? <span className={wb.cls}>{wb.text}</span> : null}</div>
      <div className="gm-main">
        {m.kind === "ttt" && (
          <div className="gm-board" style={{ gridTemplateColumns: "repeat(3, 104px)" }}>
            {board.split("").map((c, i) => {
              const act = () => { if (m.status === "active" && myTurn && c === ".") move({ cell: i }); };
              return (
                // @ts-ignore autoFocus exists on Focusable at run time
                <Focusable key={i} className="gm-cell" focusClassName="fp-focus" onActivate={act} onClick={act} autoFocus={i === 4}>
                  {c === "X" ? <span className="gm-x">X</span> : c === "O" ? <span className="gm-o">O</span> : null}
                </Focusable>
              );
            })}
          </div>
        )}
        {m.kind === "c4" && (
          <div className="gm-c4">
            {[0, 1, 2, 3, 4, 5, 6].map((col) => {
              const act = () => { if (m.status === "active" && myTurn) move({ col }); };
              return (
                // @ts-ignore autoFocus exists on Focusable at run time
                <Focusable key={col} className="gm-col" focusClassName="fp-focus" onActivate={act} onClick={act} autoFocus={col === 3}>
                  {[0, 1, 2, 3, 4, 5].map((row) => <div key={row} className={"gm-disc " + (board[row * 7 + col] || ".")} />)}
                </Focusable>
              );
            })}
          </div>
        )}
        {m.kind === "rps" && (
          <>
            <div>
              <div className="gm-score">{score[meIdx]} - {score[1 - meIdx]}</div>
              <div className="gm-rps">
                {["r", "p", "s"].map((k, i) => {
                  const mine = m.state.picks ? m.state.picks[meIdx] === k : false;
                  const act = () => { if (m.status === "active" && myTurn) move({ pick: k }); };
                  return (
                    // @ts-ignore autoFocus exists on Focusable at run time
                    <Focusable key={k} className={"gm-pick" + (mine ? " mine" : "")} focusClassName="fp-focus" onActivate={act} onClick={act} autoFocus={i === 0}>
                      <PickIcon k={k} />{PICK_NAME[k]}
                    </Focusable>
                  );
                })}
              </div>
            </div>
            <div className="gm-hist">
              <b>Rounds (you - {oname})</b>
              {rpsHist.length === 0 ? <span>None yet. First to 2 wins.</span> :
                rpsHist.map((h, i) => <span key={i}>{i + 1}. {PICK_NAME[h[meIdx]]} - {PICK_NAME[h[1 - meIdx]]}</span>)}
              {m.state.picks && m.state.picks[1 - meIdx] === "?" ? <span>{oname} has picked.</span> : null}
            </div>
          </>
        )}
        {m.kind === "bj" && (
          <div className="gm-bj">
            <div className="gm-score">{score[meIdx]} - {score[1 - meIdx]}</div>
            <div className="gm-hand">
              {bjHands[1 - meIdx].map((c, i) => <Card21 key={i} c={c} />)}
              <div className={"gm-total" + (bjTotal(bjHands[1 - meIdx]) > 21 ? " bust" : "")}>{oname}: {bjTotal(bjHands[1 - meIdx])}{bjTotal(bjHands[1 - meIdx]) > 21 ? " (bust)" : bjStood[1 - meIdx] ? " (stands)" : ""}</div>
            </div>
            <div className="gm-hand">
              {bjHands[meIdx].map((c, i) => <Card21 key={i} c={c} />)}
              <div className={"gm-total" + (bjTotal(bjHands[meIdx]) > 21 ? " bust" : "")}>You: {bjTotal(bjHands[meIdx])}{bjTotal(bjHands[meIdx]) > 21 ? " (bust)" : bjStood[meIdx] ? " (stand)" : ""}</div>
            </div>
            <div className="gm-act">
              {/* @ts-ignore autoFocus exists on Focusable at run time */}
              <Focusable className="gm-big" focusClassName="fp-focus" autoFocus onActivate={() => { if (m.status === "active" && myTurn) move({ act: "hit" }); }} onClick={() => { if (m.status === "active" && myTurn) move({ act: "hit" }); }}>Hit</Focusable>
              <Focusable className="gm-big" focusClassName="fp-focus" onActivate={() => { if (m.status === "active" && myTurn) move({ act: "stand" }); }} onClick={() => { if (m.status === "active" && myTurn) move({ act: "stand" }); }}>Stand</Focusable>
            </div>
            <div className="gm-hist" style={{ textAlign: "center" }}>
              {lastHand ? <span>Last hand: you {lastHand.totals[meIdx]}, {oname} {lastHand.totals[1 - meIdx]} - {lastHand.winner === "draw" ? "push" : lastHand.winner === meIdx ? "you won it" : oname + " won it"}</span>
                : <span>First to win 2 hands. 21 with two cards beats any other 21.</span>}
              {bjHist.length > 0 ? <span>Hands played: {bjHist.length}</span> : null}
            </div>
          </div>
        )}
      </div>
      <div className="gm-foot">
        {!done && m.status === "active" && <Focusable className="gm-btn" focusClassName="fp-focus" onActivate={leave} onClick={leave}>Give up</Focusable>}
        <Focusable className="gm-btn" focusClassName="fp-focus" onActivate={back} onClick={back}>Back to the plaza</Focusable>
      </div>
      </Focusable>
    </div>
  );
}

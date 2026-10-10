import { DialogButton, Focusable, Navigation, TextField } from "@decky/ui";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { api, ServerState, State } from "./api";
import { HAIR, Look, lookFor, PANTS, SHIRT, SHOES, SKIN } from "./chars";
import { login, runLogin } from "./login";
import { FriendPreview } from "./FriendPreview";
import { STORE_ROUTE } from "./FriendEditor";
import { net, netChanged, useNet } from "./net";
import { PLAZA_ROUTE } from "./Plaza";

type StepId = "welcome" | "server" | "login" | "char" | "done";
const TITLES: Record<StepId, string> = { welcome: "Welcome", server: "Your group's server", login: "Sign in", char: "Your character", done: "All set" };

const CSS = `
.su-root{position:relative;margin-top:40px;height:calc(100% - 40px);display:flex;gap:28px;padding:22px 32px 78px;box-sizing:border-box;background:radial-gradient(1100px 680px at 50% 46%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;font-size:14px;overflow:hidden;overflow:clip}
.su-rail{flex:none;width:210px;display:flex;flex-direction:column;gap:6px;padding-top:6px}
.su-logo{font-size:24px;font-weight:800;color:#fff;margin-bottom:10px}
.su-step{padding:8px 12px;border-radius:3px;font-weight:700;color:#8f98a0;display:flex;gap:8px;align-items:center}
.su-step.on{background:rgba(102,192,244,.2);color:#fff}
.su-step.done{color:#90ba3c}
.su-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}
.su-h{font-size:28px;font-weight:800;color:#fff}
.su-body{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:12px;padding-right:6px}
.su-box{padding:12px 14px;border-radius:3px;background:rgba(255,255,255,.06);line-height:1.5;font-size:14px}
.su-box.ok{background:rgba(144,186,60,.16);color:#c9e48a}
.su-box.bad{background:rgba(229,72,77,.2);color:#ffb4b6}
.su-row{display:flex;gap:10px;flex-wrap:wrap}
.su-row > *{margin:0 !important;min-width:150px !important;height:44px !important;padding:0 16px !important;font-weight:700 !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;display:flex !important;align-items:center;justify-content:center;flex:none !important;width:auto !important}
.su-row .go{background:#66c0f4 !important;color:#06121c !important}
.su-foot{display:flex;gap:10px;justify-content:space-between}
.su-foot > *{margin:0 !important;height:46px !important;min-width:140px !important;padding:0 20px !important;font-weight:800 !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;display:flex !important;align-items:center;justify-content:center;flex:none !important;width:auto !important}
.su-foot .go{background:#66c0f4 !important;color:#06121c !important}
.su-foot .off{opacity:.4}
.su-char{display:flex;gap:22px;align-items:flex-start}
.su-diag{display:flex;gap:8px;align-items:flex-start;font-size:13px;line-height:1.35;padding:2px 0}
`;

function rnd<T>(a: T[]): T { return a[Math.floor(Math.random() * a.length)]; }
function rollLook(from: Look): Look {
  return {
    skin: rnd(SKIN), hair: rnd(HAIR), hairStyle: Math.floor(Math.random() * 9), shirt: rnd(SHIRT), pants: rnd(PANTS), shoes: rnd(SHOES),
    eyes: Math.floor(Math.random() * 5), brows: Math.floor(Math.random() * 4), mouth: Math.floor(Math.random() * 5),
    glasses: Math.random() < 0.2, stache: Math.random() < 0.12, blush: Math.random() < 0.5, head: 0.94 + Math.random() * 0.12, hat: from.hat, acc: from.acc,
  };
}

export function SetupPage() {
  useNet();
  const [st, setSt] = useState<State | null>(null);
  const [ss, setSs] = useState<ServerState | null>(null);
  const [step, setStep] = useState<StepId>("welcome");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [urlText, setUrlText] = useState("");
  const [skipServer, setSkipServer] = useState(false);
  const [look, setLook] = useState<Look | null>(null);
  const [savedLook, setSavedLook] = useState(false);
  const alive = useRef(true);

  const load = async () => {
    try {
      const a = await api.getState();
      let b: ServerState | null = null;
      try { b = await api.serverState(); } catch (e) { b = null; }
      if (!alive.current) return;
      setSt(a); setSs(b);
      setLook((cur) => cur || (b && b.figure) || lookFor(a.steamid || "76561197960265728"));
    } catch (e) { if (alive.current) setMsg(e instanceof Error ? e.message : String(e)); }
  };
  useEffect(() => {
    alive.current = true;
    load();
    return () => { alive.current = false; };
  }, []);
  // while waiting for the Steam sign-in, keep checking
  useEffect(() => {
    if (step !== "login") return;
    const t = setInterval(() => { load(); }, 2500);
    return () => clearInterval(t);
  }, [step]);

  const run = async (fn: () => Promise<unknown>) => {
    setBusy(true);
    try { await fn(); } catch (e) { setMsg(e instanceof Error ? e.message : String(e)); }
    if (alive.current) { setBusy(false); load(); }
  };

  if (!st || !look) return <div className="su-root"><style>{CSS}</style><div className="su-h">Loading...</div></div>;

  const hasServer = !!(ss && ss.url) && !skipServer;
  const signedIn = !!(ss && ss.signed_in);
  const steps: StepId[] = ["welcome", "server", ...(hasServer ? ["login" as StepId] : []), "char", "done"];
  const idx = Math.max(0, steps.indexOf(step));
  const go = (d: number) => { setMsg(""); setStep(steps[Math.max(0, Math.min(steps.length - 1, idx + d))]); };
  const back = () => { if (idx > 0) go(-1); else Navigation.NavigateBack(); };

  const canNext = step === "login" ? signedIn : true;
  const finish = async () => {
    try { await api.setOption("setup_done", true); } catch (e) { /* the guide can be run again */ }
    Navigation.Navigate(PLAZA_ROUTE);
  };
  const saveLook = async () => {
    const r = await api.serverSaveFigure(look);
    if (r.ok) { net.me.figure = look; netChanged(); setSavedLook(true); setMsg(signedIn ? "Saved. Your friends will see this character." : "Saved on this Deck. It is shared once you sign in."); }
    else setMsg(r.message || "Could not save.");
  };

  return (
    <Focusable className="su-root" onCancel={back}>
      <style>{CSS}</style>
      <div className="su-rail">
        <div className="su-logo">Friend Plaza</div>
        {steps.map((s, i) => (
          <div key={s} className={"su-step" + (s === step ? " on" : i < idx ? " done" : "")}>
            {i < idx ? <FaCheck /> : <span>{i + 1}.</span>}{TITLES[s]}
          </div>
        ))}
      </div>
      <div className="su-main">
        <div className="su-h">{TITLES[step]}</div>
        <div className="su-body">
          {step === "welcome" && (
            <>
              <div className="su-box">Friend Plaza shows you and your friends as little 3D characters, gathered around the games they play. Only people who use the plugin appear. This short guide takes about two minutes.</div>
              <div className="su-box">1. Connect to your group's Friend Plaza server (this is how you see each other).<br />2. Sign in with Steam.<br />3. Make your first character.</div>
            </>
          )}

          {step === "server" && (
            <>
              {ss && ss.url ? <div className="su-box ok">Server address: {ss.url}</div> : (
                <div className="su-box">Enter the address of your group's Friend Plaza server (like https://friend-plaza.name.workers.dev). If the plugin folder came with a server.txt, it is already filled in. Without a server you will only see yourself, because the plaza shows people who use the plugin.</div>
              )}
              {!(ss && ss.url) && (
                <>
                  <TextField label="Server address" value={urlText} onChange={(e: { target: { value: string } }) => setUrlText(e.target.value)} />
                  <div className="su-row">
                    <DialogButton className="go" disabled={busy || !urlText.trim()} onClick={() => run(async () => { const r = await api.setServerUrl(urlText); setMsg(r.message || (r.ok ? "Saved." : "")); setSkipServer(false); })}>Save address</DialogButton>
                  </div>
                </>
              )}
              <div className="su-row">
                {ss && ss.url && <DialogButton disabled={busy} onClick={() => run(async () => { const r = await api.serverTest(); setMsg(r.message || ""); })}>Test the server</DialogButton>}
                <DialogButton onClick={() => { setSkipServer(true); setStep("char"); }}>Skip (I will only see myself)</DialogButton>
              </div>
            </>
          )}

          {step === "login" && (
            <>
              {signedIn ? <div className="su-box ok">Signed in with Steam ({ss ? ss.steamid : ""}).</div> : (
                <div className="su-box">Press the button. Steam's own login page opens; sign in there. Your Steam password is never shared with the plugin or the server. When you are done this screen comes back by itself.</div>
              )}
              {login.msg && !signedIn && <div className="su-box">{login.msg}</div>}
              {!signedIn && (
                <div className="su-row">
                  <DialogButton className="go" disabled={login.running} onClick={() => { runLogin(); }}>{login.running ? "Waiting for Steam..." : "Sign in with Steam"}</DialogButton>
                </div>
              )}
            </>
          )}

          {step === "char" && (
            <div className="su-char">
              <FriendPreview look={look} width={300} height={340} />
              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <div className="su-box">This is how you look to others. Roll for a new look, keep the one made from your Steam ID, or open the Friend Store for every detail (hats and more unlock as you play).</div>
                <div className="su-row">
                  <DialogButton onClick={() => { setLook(rollLook(look)); setSavedLook(false); }}>Roll a new look</DialogButton>
                  <DialogButton onClick={() => { setLook(lookFor((st && st.steamid) || "76561197960265728")); setSavedLook(false); }}>Use my Steam look</DialogButton>
                </div>
                <div className="su-row">
                  <DialogButton className="go" disabled={busy} onClick={() => run(saveLook)}>{savedLook ? "Saved" : "Save this look"}</DialogButton>
                  <DialogButton onClick={() => Navigation.Navigate(STORE_ROUTE)}>Open the Friend Store</DialogButton>
                </div>
              </div>
            </div>
          )}

          {step === "done" && (
            <>
              <div className="su-box ok">You are ready.</div>
              <div className="su-box">
                Server: {hasServer ? (signedIn ? "signed in" : "set, not signed in") : "not set (you will only see yourself)"}<br />
                You can change all of this later in Settings, and walk to the Friend Store in the plaza to change your character.
              </div>
            </>
          )}
          {msg && <div className="su-box">{msg}</div>}
        </div>
        <div className="su-foot">
          <DialogButton onClick={back}>{idx === 0 ? "Close" : "Back"}</DialogButton>
          {step === "done" ? (
            <DialogButton className="go" onClick={finish}>Open the plaza</DialogButton>
          ) : (
            <DialogButton className={"go" + (canNext ? "" : " off")} disabled={!canNext} onClick={() => go(1)}>
              {step === "login" && !signedIn ? "Sign in first" : "Next"}
            </DialogButton>
          )}
        </div>
      </div>
    </Focusable>
  );
}

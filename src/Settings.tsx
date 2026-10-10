// One place for everything you can change: the server, who you see, graphics, blocked players, help.
import { DialogButton, Focusable, Navigation, TextField } from "@decky/ui";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { api, DiagLine, ServerState, State } from "./api";
import { login, runLogin } from "./login";
import { applySyncResult, emptyMe, net, netChanged, useNet } from "./net";
import { LEVELS, quality } from "./plaza/quality";
import { SETUP_ROUTE } from "./routes";

const CSS = `
.st-root{position:relative;margin-top:40px;height:calc(100% - 40px);display:flex;flex-direction:column;gap:10px;padding:18px 32px 78px;box-sizing:border-box;background:radial-gradient(1100px 680px at 50% 46%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;font-size:14px;overflow:hidden;overflow:clip}
.st-top{display:flex;align-items:center;gap:14px}
.st-title{font-size:28px;font-weight:800;color:#fff}
.st-sub{color:#8f98a0;font-size:12.5px}
.st-list{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px;padding-right:8px}
.st-sec{font-weight:800;color:#66c0f4;font-size:12px;padding:14px 4px 2px;text-transform:uppercase;letter-spacing:.6px}
.st-row{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:3px;background:rgba(255,255,255,.05);box-sizing:border-box;margin:0}
.st-row.fp-focus{background:#fff;box-shadow:0 0 16px rgba(102,192,244,.5)}
.st-row .lab{flex:1;min-width:0}
.st-row .lab b{display:block;font-size:14px;color:#dfe6ec}
.st-row .lab span{display:block;font-size:12px;color:#8f98a0;margin-top:2px;line-height:1.35}
.st-row.fp-focus .lab b{color:#0e141b}.st-row.fp-focus .lab span{color:#4a5560}
.st-val{font-weight:800;color:#90ba3c;white-space:nowrap}
.st-val.off{color:#8f98a0}
.st-row.fp-focus .st-val{color:#2c4a05}
.st-box{padding:10px 14px;border-radius:3px;background:rgba(255,255,255,.05);line-height:1.5;font-size:13px}
.st-box.bad{background:rgba(229,72,77,.2);color:#ffb4b6}
.st-box.ok{background:rgba(144,186,60,.16);color:#c9e48a}
.st-seg{display:flex;gap:6px;flex-wrap:wrap}
.st-seg > *{margin:0 !important;min-width:96px !important;height:38px !important;padding:0 14px !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;font-weight:700 !important;display:flex !important;align-items:center;justify-content:center;width:auto !important;flex:none !important}
.st-seg .on{background:#66c0f4 !important;color:#06121c !important}
.st-diag{display:flex;gap:8px;align-items:flex-start;font-size:13px;line-height:1.35;padding:2px 0}
.st-foot{display:flex;gap:10px}
.st-foot > *{margin:0 !important;height:44px !important;min-width:140px !important;padding:0 20px !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;font-weight:800 !important;display:flex !important;align-items:center;justify-content:center;width:auto !important;flex:none !important}
`;

function Row(props: { title: string; sub?: string; value?: string; off?: boolean; onAct?: () => void; autoFocus?: boolean }) {
  const act = () => { if (props.onAct) props.onAct(); };
  return (
    // @ts-ignore autoFocus exists on Focusable at run time
    <Focusable className="st-row" focusClassName="fp-focus" onActivate={act} onClick={act} autoFocus={props.autoFocus}>
      <div className="lab"><b>{props.title}</b>{props.sub ? <span>{props.sub}</span> : null}</div>
      {props.value ? <div className={"st-val" + (props.off ? " off" : "")}>{props.value}</div> : null}
    </Focusable>
  );
}

function Seg(props: { value: string; options: Array<[string, string]>; onPick: (v: string) => void }) {
  return (
    <div className="st-seg">
      {props.options.map(([v, label]) => (
        <DialogButton key={v} className={props.value === v ? "on" : ""} onClick={() => props.onPick(v)}>{label}</DialogButton>
      ))}
    </div>
  );
}

function Block(props: { children: ReactNode }) { return <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{props.children}</div>; }

export function SettingsPage() {
  useNet();
  const [st, setSt] = useState<State | null>(null);
  const [ss, setSs] = useState<ServerState | null>(null);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [urlText, setUrlText] = useState("");
  const [sidText, setSidText] = useState("");
  const [diag, setDiag] = useState<DiagLine[] | null>(null);
  const [saved, setSaved] = useState("");
  const [sureDelete, setSureDelete] = useState(false);
  const [editUrl, setEditUrl] = useState(false);
  const [showSid, setShowSid] = useState(false);
  const alive = useRef(true);

  const load = async () => {
    try {
      const a = await api.getState();
      let b: ServerState | null = null;
      try { b = await api.serverState(); } catch (e) { b = null; }
      if (!alive.current) return;
      setSt(a); setSs(b);
    } catch (e) { if (alive.current) setMsg(e instanceof Error ? e.message : String(e)); }
  };
  useEffect(() => {
    alive.current = true;
    load();
    (async () => { try { const r = await api.serverSync([]); if (r.ok) applySyncResult(r); } catch (e) { /* the blocked list may be out of date */ } })();
    return () => { alive.current = false; };
  }, []);
  useEffect(() => { if (!login.running && login.msg === "Signed in.") load(); }, [login.running]);

  const run = async (fn: () => Promise<unknown>) => {
    setBusy(true);
    try { await fn(); } catch (e) { setMsg(e instanceof Error ? e.message : String(e)); }
    if (alive.current) { setBusy(false); load(); }
  };
  const opt = (name: string, v: string | boolean) => run(async () => { await api.setOption(name, v); });

  if (!st) return <div className="st-root"><style>{CSS}</style><div className="st-title">Settings</div><div className="st-sub">{msg || "Loading..."}</div></div>;
  const hasServer = !!(ss && ss.url);
  const signedIn = !!(ss && ss.signed_in);
  const onOff = (b: boolean) => (b ? "On" : "Off");

  return (
    <Focusable className="st-root" onCancel={() => Navigation.NavigateBack()}>
      <style>{CSS}</style>
      <div className="st-top">
        <div className="st-title">Settings</div>
      </div>
      <div className="st-list">
        {msg && <div className="st-box">{msg}</div>}

        <div className="st-sec">Steam</div>
        <Block>
          <Row title="Steam ID" sub={(st.steamid || "not found") + (st.steamid_source ? " (from " + st.steamid_source + ")" : "") + (st.friend_count ? " - " + st.friend_count + " Steam friends in Steam's own files (used only to tell the server who your friends are)" : "") + ". Press A to change the ID only if it is wrong."} onAct={() => setShowSid(!showSid)} />
          {showSid && (
            <>
              <TextField label="Steam ID (17 digits, starts with 7656119)" value={sidText} onChange={(e: { target: { value: string } }) => setSidText(e.target.value)} />
              <div className="st-seg"><DialogButton onClick={() => run(async () => { const r = await api.setSteamid(sidText); setMsg(r.message || (r.ok ? "Steam ID saved." : "")); })}>Save Steam ID</DialogButton></div>
            </>
          )}
        </Block>

        <div className="st-sec">Online features</div>
        <Block>
          {!hasServer || editUrl ? (
            <>
              <div className="st-box">Enter the address of your group's Friend Plaza server (like https://friend-plaza.name.workers.dev). Leave it out to use the plugin without a server.</div>
              <TextField label="Server address" value={urlText} onChange={(e: { target: { value: string } }) => setUrlText(e.target.value)} />
              <div className="st-seg"><DialogButton disabled={busy || !urlText.trim()} onClick={() => run(async () => { const r = await api.setServerUrl(urlText); setMsg(r.message || (r.ok ? "Saved." : "")); if (r.ok) setEditUrl(false); })}>Save address</DialogButton></div>
            </>
          ) : (
            <Row title="Server address" sub="Press A to change it." value={ss ? ss.url.replace("https://", "") : ""} onAct={() => setEditUrl(true)} />
          )}
          {hasServer && !signedIn && (
            <>
              {(login.msg || (ss && ss.error)) && <div className={"st-box" + (ss && ss.error ? " bad" : "")}>{login.msg || (ss && ss.error)}</div>}
              <Row title={login.running ? "Waiting for Steam..." : "Sign in with Steam"} sub="Opens Steam's own login page. Your password is never shared." onAct={() => { if (!login.running) runLogin(); }} />
            </>
          )}
          {hasServer && signedIn && (
            <>
              <div className="st-box ok">Signed in with Steam ({ss ? ss.steamid : ""}).{ss && ss.error ? " Last problem: " + ss.error : ""}</div>
              <Row title="Use online features" sub="Switch off to stop sending anything to the server." value={onOff(ss ? ss.on : true)} off={!(ss && ss.on)} onAct={() => run(async () => { await api.serverSetOn(!(ss && ss.on)); })} />
              <Row title="Sign out" onAct={() => run(async () => { await api.serverLogout(); net.signedIn = false; netChanged(); })} />
              <Row title={sureDelete ? "Press again to delete" : "Delete my server data"} sub="Removes your character, stamps, hats, points and games from the server." onAct={() => {
                if (!sureDelete) { setSureDelete(true); setMsg("Press again to delete everything the server holds about you."); return; }
                setSureDelete(false);
                run(async () => { const r = await api.serverDeleteMe(); setMsg(r.message || ""); net.signedIn = false; net.me = emptyMe(); net.games = []; net.friends = new Map(); netChanged(); });
              }} />
            </>
          )}
          {hasServer && <Row title="Test the server" onAct={() => run(async () => { const r = await api.serverTest(); setMsg(r.message || ""); })} />}
          {hasServer && !editUrl && <Row title="Change the server address" onAct={() => setEditUrl(true)} />}
        </Block>

        <div className="st-sec">Who you see (only people who use Friend Plaza)</div>
        <Block>
          <Row title="Other plugin users" sub="People who use Friend Plaza but are not your Steam friends." value={onOff(st.show_others)} off={!st.show_others} onAct={() => opt("show_others", !st.show_others)} />
          <Row title="Let other plugin users see me" sub="Non-friends who use the plugin can see your character. Friends always can." value={onOff(st.visible_public)} off={!st.visible_public} onAct={() => opt("visible_public", !st.visible_public)} />
        </Block>

        <div className="st-sec">Graphics</div>
        <Block>
          <Row title="Graphics quality" sub={st.quality === "auto" ? "Auto lowers the detail by itself if the plaza stutters. Right now: " + LEVELS[quality.level].name + "." : "Fixed at " + st.quality + "."} />
          <Seg value={st.quality} options={[["auto", "Auto"], ["high", "High"], ["medium", "Medium"], ["low", "Low"]]} onPick={(v) => opt("quality", v)} />
          <Row title="Battery saver" sub="Draws at a lower frame rate and with fewer characters." value={onOff(st.low_power)} off={!st.low_power} onAct={() => opt("low_power", !st.low_power)} />
        </Block>

        <div className="st-sec">Blocked players</div>
        <Block>
          {net.blocked.length === 0 ? <div className="st-box">Nobody. You can block a player from their action bar in the plaza.</div> :
            net.blocked.map((b) => (
              <Row key={b.steamid} title={b.name || b.steamid} sub="Press A to unblock" onAct={() => run(async () => {
                const r = await api.serverUnblock(b.steamid);
                setMsg(r.ok ? "Unblocked." : (r.message || "Could not unblock."));
                const sr = await api.serverSync([]); if (sr.ok) applySyncResult(sr);
              })} />
            ))}
        </Block>

        <div className="st-sec">Help</div>
        <Block>
          <Row title="Run the setup guide" sub="The short first-run guide again." onAct={() => Navigation.Navigate(SETUP_ROUTE)} />
          <Row title={busy ? "Checking..." : "Check setup"} sub="Tests your key, Steam ID and friend list." onAct={() => run(async () => { setDiag(null); const r = await api.testSetup(); setDiag(r.lines); })} />
          {diag && diag.map((l, i) => (
            <div key={i} className="st-diag">{l.ok ? <FaCheck color="#90ba3c" style={{ flex: "none", marginTop: 2 }} /> : <FaTimes color="#e5484d" style={{ flex: "none", marginTop: 2 }} />}<span>{l.text}</span></div>
          ))}
          <Row title="Save diagnostics" sub="Writes a short text file (no keys or passwords) you can send to whoever helps you." onAct={() => run(async () => {
            const r = await api.exportDiagnostics();
            setSaved(r.ok ? "Saved to " + r.path : (r.message || "Could not save."));
          })} />
          {saved && <div className="st-box ok">{saved}</div>}
        </Block>
      </div>
      <div className="st-foot">
        <DialogButton onClick={() => Navigation.NavigateBack()}>Back</DialogButton>
      </div>
    </Focusable>
  );
}

// The Quick Access panel is only a launcher. Everything you can change lives in Settings.
import { ButtonItem, Field, Navigation, PanelSection, PanelSectionRow, Router } from "@decky/ui";
import { useEffect, useRef, useState } from "react";
import { api, State } from "./api";
import { PLAZA_ROUTE } from "./Plaza";
import { SETTINGS_ROUTE, SETUP_ROUTE } from "./routes";
import { net, useNet } from "./net";

const CSS = `
.fpq-box{padding:10px 12px;border-radius:8px;background:rgba(255,255,255,.07);font-size:12.5px;line-height:1.45;margin:4px 0}
.fpq-err{background:rgba(229,72,77,.22)}
`;

export function Panel() {
  useNet();
  const [st, setSt] = useState<State | null>(null);
  const [err, setErr] = useState("");
  const alive = useRef(true);

  const load = async () => {
    try {
      const s = await api.getState();
      if (!alive.current) return;
      setSt(s); setErr("");
    } catch (e) {
      if (alive.current) setErr(e instanceof Error ? e.message : String(e));
    }
  };

  useEffect(() => {
    alive.current = true;
    load().then(() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sid = (window as any).App?.m_CurrentUser?.strSteamID;
        if (typeof sid === "string") api.setSteamidHint(sid).then(() => load()).catch(() => undefined);
      } catch (e) { /* Steam did not expose the signed-in user; the backend reads loginusers.vdf */ }
    });
    return () => { alive.current = false; };
  }, []);

  const go = (route: string) => { Router.CloseSideMenus(); Navigation.Navigate(route); };

  if (err) {
    return (
      <PanelSection title="Friend Plaza">
        <style>{CSS}</style>
        <PanelSectionRow>
          <div className="fpq-box fpq-err">Friend Plaza couldn't start. {err} If this keeps happening, send the last lines of the log in ~/homebrew/logs/Friend Plaza/.</div>
        </PanelSectionRow>
        <PanelSectionRow><ButtonItem layout="below" onClick={() => { setErr(""); load(); }}>Retry</ButtonItem></PanelSectionRow>
      </PanelSection>
    );
  }
  if (!st) return <PanelSection title="Friend Plaza"><PanelSectionRow><Field label="Loading..." /></PanelSectionRow></PanelSection>;

  return (
    <>
      <style>{CSS}</style>
      {!st.setup_done && (
        <PanelSection title="Welcome">
          <PanelSectionRow>
            <div className="fpq-box">First time here? A short guide helps you sign in and make your character.</div>
          </PanelSectionRow>
          <PanelSectionRow><ButtonItem layout="below" onClick={() => go(SETUP_ROUTE)}>Start setup</ButtonItem></PanelSectionRow>
        </PanelSection>
      )}
      <PanelSection title="Friend Plaza">
        <PanelSectionRow>
          <ButtonItem layout="below" onClick={() => go(PLAZA_ROUTE)}>Open the plaza</ButtonItem>
        </PanelSectionRow>
        <PanelSectionRow>
          <ButtonItem layout="below" onClick={() => go(SETTINGS_ROUTE)}>Settings</ButtonItem>
        </PanelSectionRow>
        {net.error && (
          <PanelSectionRow><div className="fpq-box fpq-err">{net.error}</div></PanelSectionRow>
        )}
      </PanelSection>
    </>
  );
}

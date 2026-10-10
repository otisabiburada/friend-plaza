// Signing in with Steam outlives whatever screen started it (the Quick Access panel closes while Steam's browser is open),
// so the polling lives here, outside any component.
import { Navigation, Router } from "@decky/ui";
import { api } from "./api";
import { net, netChanged } from "./net";

export const login = { running: false, msg: "" };

export async function runLogin(): Promise<void> {
  if (login.running) return;
  login.running = true; login.msg = "Opening Steam's sign-in page...";
  netChanged();
  try {
    const r = await api.serverLoginStart();
    if (!r.ok || !r.url) { login.msg = r.message || "Could not start signing in."; return; }
    try { Router.CloseSideMenus(); } catch (e) { /* not in the side menu */ }
    Navigation.NavigateToExternalWeb(r.url);
    login.msg = "Waiting for you to sign in with Steam...";
    netChanged();
    for (let i = 0; i < 90; i++) {
      await new Promise((res) => setTimeout(res, 2000));
      const p = await api.serverLoginPoll();
      if (p.done) {
        login.msg = "Signed in.";
        net.signedIn = true;
        try { Navigation.NavigateBack(); } catch (e) { /* the user can go back by hand */ }
        return;
      }
    }
    login.msg = "Sign in timed out. Try again.";
  } catch (e) {
    login.msg = e instanceof Error ? e.message : String(e);
  } finally {
    login.running = false;
    netChanged();
  }
}

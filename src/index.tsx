import { definePlugin, routerHook } from "@decky/api";
import { guarded } from "./ErrorBoundary";
import { staticClasses } from "@decky/ui";
import { FaUsers } from "react-icons/fa";
import { GAME_ROUTE, GamePage } from "./GamePage";
import { FRIEND_ROUTE, FriendEditor } from "./FriendEditor";
import { Panel } from "./Panel";
import { PLAZA_ROUTE, PlazaPage } from "./Plaza";
import { SETTINGS_ROUTE, SETUP_ROUTE } from "./routes";
import { SettingsPage } from "./Settings";
import { SetupPage } from "./Setup";

export default definePlugin(() => {
  routerHook.addRoute(PLAZA_ROUTE, guarded("The plaza", PlazaPage));
  routerHook.addRoute(FRIEND_ROUTE, guarded("The Friend Store", FriendEditor));
  routerHook.addRoute(GAME_ROUTE, guarded("The game", GamePage));
  routerHook.addRoute(SETUP_ROUTE, guarded("The setup guide", SetupPage));
  routerHook.addRoute(SETTINGS_ROUTE, guarded("Settings", SettingsPage));
  return {
    name: "Friend Plaza",
    titleView: <div className={staticClasses.Title}>Friend Plaza</div>,
    content: <Panel />,
    icon: <FaUsers />,
    onDismount() {
      routerHook.removeRoute(PLAZA_ROUTE);
      routerHook.removeRoute(FRIEND_ROUTE);
      routerHook.removeRoute(GAME_ROUTE);
      routerHook.removeRoute(SETUP_ROUTE);
      routerHook.removeRoute(SETTINGS_ROUTE);
    },
  };
});

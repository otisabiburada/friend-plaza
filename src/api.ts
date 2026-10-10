import { callable } from "@decky/api";
import type { Look } from "./chars";
import type { Match, NetEvent, NetMe, NetPlayer, RemoteFriend } from "./net";

export type FriendState = "online" | "busy" | "away" | "snooze" | "offline";
/** Someone in the plaza (always a person who uses Friend Plaza). */
export interface Friend {
  steamid: string;
  name: string;
  avatar: string;
  state: FriendState;
  playing: boolean;
  game: { appid: number | null; name: string } | null;
  home: number | null;       // the game pad they stand at
}
export interface RingEntry {
  appid: number;
  name: string;
  friends: string[];
  playing: number;
  score: number;
}
/** Settings the screens read. */
export interface State {
  steamid: string;
  steamid_source: string;
  low_power: boolean;
  quality: "auto" | "high" | "medium" | "low";
  show_others: boolean;
  visible_public: boolean;
  setup_done: boolean;
  friend_count: number;
}
export interface ServerState { url: string; custom_url: string; signed_in: boolean; steamid: string; on: boolean; figure: Look | null; error: string }
export interface SyncResult { strangerInteract?: boolean; ok: boolean; off?: boolean; signed_out?: boolean; message?: string; blocked?: Array<{ steamid: string; name: string }>; friends?: RemoteFriend[]; players?: NetPlayer[]; events?: NetEvent[]; me?: NetMe; games?: Match[] }
export interface GameResult { ok: boolean; message?: string; id?: number; match?: Match }
export interface PollResult { ok: boolean; message?: string; changed?: boolean; gone?: boolean; match?: Match }
export interface DiagResult { ok: boolean; path?: string; text?: string; message?: string }
export interface ShopResult { ok: boolean; message?: string; points?: number; items?: number[] }
export interface SendResult { ok: boolean; message?: string; awarded?: string[]; hats?: number[] }
export interface Msg { ok: boolean; message?: string }
export interface DiagLine { ok: boolean; text: string }

/** A callable never settles when the backend failed to start, so every call gets a deadline. */
export function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("The plugin's background part isn't answering.")), ms);
    p.then((v) => { clearTimeout(t); resolve(v); }, (e) => { clearTimeout(t); reject(e); });
  });
}

const _getState = callable<[], State>("get_state");
const _setSteamid = callable<[string], Msg>("set_steamid");
const _setSteamidHint = callable<[string], Msg>("set_steamid_hint");
const _setOption = callable<[string, string | boolean], Msg>("set_option");
const _refreshFriends = callable<[], { ok: boolean; count: number }>("refresh_friends");
const _testSetup = callable<[], { lines: DiagLine[] }>("test_setup");

const _serverState = callable<[], ServerState>("server_state");
const _setServerUrl = callable<[string], Msg>("set_server_url");
const _serverSetOn = callable<[boolean], Msg>("server_set_on");
const _serverTest = callable<[], Msg>("server_test");
const _serverLoginStart = callable<[], { ok: boolean; url?: string; message?: string }>("server_login_start");
const _serverLoginPoll = callable<[], { ok: boolean; done: boolean; message?: string }>("server_login_poll");
const _serverLogout = callable<[], Msg>("server_logout");
const _serverDeleteMe = callable<[], Msg>("server_delete_me");
const _serverSaveFigure = callable<[Look], Msg>("server_save_figure");
const _serverClearFigure = callable<[], Msg>("server_clear_figure");
const _serverSync = callable<[number[]], SyncResult>("server_sync");
const _serverSend = callable<[string, string, Record<string, number> | null], SendResult>("server_send");

const _gameInvite = callable<[string, string], GameResult>("server_game_invite");
const _gameAccept = callable<[number], GameResult>("server_game_accept");
const _gameCancel = callable<[number], GameResult>("server_game_cancel");
const _gameMove = callable<[number, Record<string, number | string>], GameResult>("server_game_move");
const _block = callable<[string], Msg>("server_block");
const _unblock = callable<[string], Msg>("server_unblock");
const _report = callable<[string, string], Msg>("server_report");
const _gamePoll = callable<[number, string], PollResult>("server_game_poll");
const _diagnostics = callable<[], DiagResult>("export_diagnostics");
const _shopBuy = callable<[number], ShopResult>("server_shop_buy");

export const api = {
  serverBlock: (t: string) => withTimeout(_block(t), 25000),
  serverUnblock: (t: string) => withTimeout(_unblock(t), 25000),
  serverReport: (t: string, reason: string) => withTimeout(_report(t, reason), 25000),
  gamePoll: (m: number, sig: string) => withTimeout(_gamePoll(m, sig), 15000),
  exportDiagnostics: () => withTimeout(_diagnostics(), 15000),
  gameInvite: (to: string, kind: string) => withTimeout(_gameInvite(to, kind), 25000),
  gameAccept: (m: number) => withTimeout(_gameAccept(m), 25000),
  gameCancel: (m: number) => withTimeout(_gameCancel(m), 25000),
  gameMove: (m: number, mv: Record<string, number | string>) => withTimeout(_gameMove(m, mv), 25000),
  shopBuy: (item: number) => withTimeout(_shopBuy(item), 25000),
  serverState: () => withTimeout(_serverState(), 8000),
  setServerUrl: (u: string) => withTimeout(_setServerUrl(u), 8000),
  serverSetOn: (b: boolean) => withTimeout(_serverSetOn(b), 8000),
  serverTest: () => withTimeout(_serverTest(), 20000),
  serverLoginStart: () => withTimeout(_serverLoginStart(), 8000),
  serverLoginPoll: () => withTimeout(_serverLoginPoll(), 15000),
  serverLogout: () => withTimeout(_serverLogout(), 8000),
  serverDeleteMe: () => withTimeout(_serverDeleteMe(), 20000),
  serverSaveFigure: (m: Look) => withTimeout(_serverSaveFigure(m), 8000),
  serverClearFigure: () => withTimeout(_serverClearFigure(), 8000),
  serverSync: (ack: number[]) => withTimeout(_serverSync(ack), 25000),
  serverSend: (to: string, kind: string, data: Record<string, number> | null) => withTimeout(_serverSend(to, kind, data), 25000),
  getState: () => withTimeout(_getState(), 8000),
  setSteamid: (s: string) => withTimeout(_setSteamid(s), 8000),
  setSteamidHint: (s: string) => withTimeout(_setSteamidHint(s), 8000),
  setOption: (n: string, v: string | boolean) => withTimeout(_setOption(n, v), 8000),
  refreshFriends: () => withTimeout(_refreshFriends(), 8000),
  testSetup: () => withTimeout(_testSetup(), 60000),
};

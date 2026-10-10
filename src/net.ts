// What the optional server told us. Shared by the plaza page, the character editor and the panel.
import { useEffect, useState } from "react";
import type { Look } from "./chars";

export interface RemoteFriend { steamid: string; name?: string; avatar?: string; figure: Look | null; online: boolean; state: string; game: { appid: number; name: string } | null }
export interface NetPlayer { steamid: string; name: string; avatar: string; figure: Look | null; state: string; game: { appid: number; name: string } | null }
export interface NetEvent { id: number; from: string; kind: string; data: { hat?: number; text?: number } | null; created: number }
export interface Match {
  id: number; sig?: string; kind: "ttt" | "c4" | "rps" | "bj"; p1: string; p2: string; status: "invite" | "active" | "done"; turn: string | null; winner: string | null; updated: number;
  state: { board?: string; score?: number[]; round?: number; picks?: Array<string | null>; history?: Array<string[] | { totals: number[]; hands: number[][]; winner: number | string }>; hands?: number[][]; stood?: boolean[]; last?: { totals: number[]; hands: number[][]; winner: number | string } | null; deckLeft?: number; result?: { winner: string; points: Record<string, number>; capped: boolean; resigned: boolean } | null };
}
export interface NetMe { name?: string; avatar?: string; game?: { appid: number; name: string } | null; newStamps?: string[]; streak: number; stamps: string[]; met: number; hats: number[]; items: number[]; points: number; earned: number; dayPoints: number; dailyCap: number; figure: Look | null }

export const emptyMe = (): NetMe => ({ streak: 0, stamps: [], met: 0, hats: [], items: [], points: 0, earned: 0, dayPoints: 0, dailyCap: 100, figure: null });

export const net = {
  signedIn: false,
  friends: new Map<string, RemoteFriend>(),
  players: [] as NetPlayer[],
  blocked: [] as Array<{ steamid: string; name: string }>,
  me: emptyMe(),
  games: [] as Match[],
  meId: "",
  strangerInteract: false,
  names: new Map<string, string>(),
  openGame: Number(typeof location !== "undefined" ? new URLSearchParams(location.search).get("fpgame") || 0 : 0),
  inbox: [] as NetEvent[],
  error: "",
  version: 0,
};

const listeners = new Set<() => void>();
export function netChanged(): void {
  net.version++;
  listeners.forEach((f) => f());
}
export function useNet(): number {
  const [v, setV] = useState(net.version);
  useEffect(() => {
    const f = () => setV(net.version);
    listeners.add(f);
    return () => { listeners.delete(f); };
  }, []);
  return v;
}

/** Takes the server's answer to a check-in and updates the shared state. Returns the events that came with it. */
export function applySyncResult(res: { strangerInteract?: boolean; blocked?: Array<{ steamid: string; name: string }>; friends?: RemoteFriend[]; players?: NetPlayer[]; me?: NetMe; games?: Match[]; events?: NetEvent[] }): NetEvent[] {
  if (res.friends) net.friends = new Map(res.friends.map((f) => [f.steamid, f]));
  if (res.players) net.players = res.players;
  if (res.blocked) net.blocked = res.blocked;
  if (typeof res.strangerInteract === "boolean") net.strangerInteract = res.strangerInteract;
  if (res.me) net.me = res.me;
  if (res.games) net.games = res.games;
  netChanged();
  return res.events || [];
}

/** Invites other people sent me that are waiting for an answer. */
export const pendingInvites = (): Match[] => net.games.filter((g) => g.status === "invite" && g.p2 === net.meId);

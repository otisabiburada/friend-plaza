// Who is in the plaza: you, and the people who use Friend Plaza (Steam friends who have the plugin, and optionally other
// plugin users). Everything about them (name, avatar, game, character) comes from the server.
import type { Friend, RingEntry } from "../api";
import type { NetMe, NetPlayer, RemoteFriend } from "../net";

export const RING_SIZE = 13;

export interface PeopleInput {
  friends: Map<string, RemoteFriend>;
  players: NetPlayer[];
  me: NetMe;
  meId: string;
  signedIn: boolean;
  showOthers: boolean;
  max: number;
}
export interface People {
  me: Friend | null;
  list: Friend[];                 // everyone except you who has the plaza open right now
  ring: RingEntry[];
  counts: { online: number; playing: number };
}

const blank = (steamid: string, name: string): Friend => ({
  steamid, name, avatar: "", state: "online", playing: false, game: null, home: null,
});

export function friendAsPerson(rf: RemoteFriend): Friend {
  const f = blank(rf.steamid, rf.name || "Friend");
  f.avatar = rf.avatar || "";
  f.state = rf.online ? ((rf.state as Friend["state"]) || "online") : "offline";   // plugin closed: not in the plaza
  f.playing = rf.online && !!rf.game;
  f.game = rf.online && rf.game ? { appid: rf.game.appid, name: rf.game.name } : null;
  return f;
}

export function playerAsPerson(p: NetPlayer): Friend {
  const f = blank(p.steamid, p.name || "Player");
  f.avatar = p.avatar;
  f.state = (p.state as Friend["state"]) || "online";
  f.playing = !!p.game;
  f.game = p.game ? { appid: p.game.appid, name: p.game.name } : null;
  return f;
}

function meAsPerson(i: PeopleInput): Friend | null {
  if (!i.meId) return null;
  const f = blank(i.meId, i.me.name || "You");
  f.avatar = i.me.avatar || "";
  if (i.me.game) { f.game = { ...i.me.game }; f.playing = true; }
  return f;
}

/** The pads: the games people are playing right now, the most popular first. */
export function buildRing(all: Friend[]): RingEntry[] {
  const games = new Map<number, RingEntry>();
  for (const f of all) {
    if (!f.game || f.game.appid == null) continue;
    let e = games.get(f.game.appid);
    if (!e) { e = { appid: f.game.appid, name: f.game.name, friends: [], playing: 0, score: 0 }; games.set(f.game.appid, e); }
    e.playing++; e.score += 5;
    if (!e.friends.includes(f.steamid)) e.friends.push(f.steamid);
  }
  return Array.from(games.values()).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)).slice(0, RING_SIZE);
}

export function assignHomes(all: Friend[], ring: RingEntry[]): void {
  const on = new Set(ring.map((r) => r.appid));
  for (const f of all) f.home = f.game && f.game.appid != null && on.has(f.game.appid) ? f.game.appid : null;
}

export function buildPeople(i: PeopleInput): People {
  const out: Friend[] = [];
  if (i.signedIn) {
    for (const rf of i.friends.values()) out.push(friendAsPerson(rf));
    if (i.showOthers) for (const p of i.players) out.push(playerAsPerson(p));
  }
  const list = out.filter((f) => f.state !== "offline").sort((a, b) =>
    (a.playing === b.playing ? 0 : a.playing ? -1 : 1) || a.name.localeCompare(b.name)).slice(0, Math.max(0, i.max));
  const me = meAsPerson(i);
  const everyone = me ? [...list, me] : list;
  const ring = buildRing(everyone);
  assignHomes(everyone, ring);
  return { me, list, ring, counts: { online: list.length, playing: list.filter((f) => f.playing).length } };
}

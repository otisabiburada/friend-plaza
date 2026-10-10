// The optional server: while the plaza is open, check in every few seconds, show what friends sent, and keep the shared state fresh.
import { Navigation } from "@decky/ui";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { api } from "../api";
import { gameName, hatName, STAMPS } from "../catalog";
import type { Walker } from "../chars";
import { applySyncResult, net, netChanged, NetEvent } from "../net";
import { GAME_ROUTE } from "../GamePage";
import type { Social } from "../social";
import { nextDelay } from "./polling";

/** The little notices at the bottom left. */
export function useFeed(): { feed: Array<{ id: number; text: string }>; say: (text: string) => void } {
  const [feed, setFeed] = useState<Array<{ id: number; text: string }>>([]);
  const idRef = useRef(0);
  const alive = useRef(true);
  useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);
  const say = (text: string) => {
    const add = { id: ++idRef.current, text };
    setFeed((f) => f.concat(add).slice(-3));
    window.setTimeout(() => { if (alive.current) setFeed((f) => f.filter((x) => x.id !== add.id)); }, 9000);
  };
  return { feed, say };
}

export interface SyncDeps {
  ready: boolean;
  meId: string;
  lowPower: boolean;
  walkers: MutableRefObject<Map<string, Walker>>;
  social: MutableRefObject<Social>;
  say: (text: string) => void;
  nameOf: (id: string) => string;
}

export function useServerSync(d: SyncDeps): { ackRef: MutableRefObject<number[]> } {
  const ackRef = useRef<number[]>([]);
  const handled = useRef(new Set<number>());
  const seenGames = useRef(new Set<number>());
  const first = useRef(true);
  const statuses = useRef(new Map<number, string>());
  const depsRef = useRef(d);
  depsRef.current = d;

  const react = (ev: NetEvent) => {
    const { walkers, social, say, nameOf } = depsRef.current;
    const list = Array.from(walkers.current.values());
    const meId = net.meId;
    const who = nameOf(ev.from);
    if (ev.kind === "wave") { social.current.visit(list, ev.from, meId, ""); say(who + " waved at you"); }
    else if (ev.kind === "heart") { social.current.visit(list, ev.from, meId, "heart"); say(who + " sent you a heart"); }
    else if (ev.kind === "highfive") { social.current.visit(list, ev.from, meId, "star"); say(who + " high-fived you"); }
    else if (ev.kind === "dance") { social.current.danceTogether(list, [ev.from, meId]); say(who + " wants to dance with you!"); }
    else if (ev.kind === "gift") { social.current.visit(list, ev.from, meId, "star"); say(who + " gave you a hat: " + hatName((ev.data && ev.data.hat) || 0)); }
    else if (ev.kind === "invite") { say(who + " invited you to play " + gameName((ev.data as { game?: string } | null)?.game || "")); }
    else if (ev.kind === "note") {
      if (!net.inbox.some((n) => n.id === ev.id)) net.inbox.push(ev);
      say(who + " left you a note");
    }
  };

  useEffect(() => {
    if (!d.ready) return;
    let stop = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const tick = async () => {
      let failed = false;
      try {
        const st = await api.serverState();
        if (stop) return;
        net.signedIn = st.signed_in && st.on && !!st.url;
        net.meId = st.steamid;
        if (st.figure && !net.me.figure) { net.me.figure = st.figure; netChanged(); }
        if (net.signedIn) {
          const ack = ackRef.current.splice(0, 100);
          const res = await api.serverSync(ack);
          if (stop) return;
          const say = depsRef.current.say;
          if (res.signed_out) { net.signedIn = false; net.error = res.message || ""; netChanged(); }
          else if (res.ok && res.friends && res.me) {
            net.error = "";
            for (const ev of applySyncResult(res)) {
              if (handled.current.has(ev.id)) continue;
              handled.current.add(ev.id);
              if (handled.current.size > 400) handled.current = new Set(Array.from(handled.current).slice(-200));   // never grows without end
              react(ev);
              if (ev.kind !== "note") ackRef.current.push(ev.id);
            }
            const finished = net.games.filter((g) => g.status === "done" && g.state.result && !seenGames.current.has(g.id));
            for (const g of finished) {
              seenGames.current.add(g.id);
              if (seenGames.current.size > 200) seenGames.current = new Set(Array.from(seenGames.current).slice(-100));
              if (first.current) continue;
              const pts = (g.state.result as { points: Record<string, number> }).points[net.meId] || 0;
              say("Game finished: " + gameName(g.kind) + (pts ? " (+" + pts + " points)" : ""));
            }
            // a game you invited someone to just started: open it (the one who invites moves first)
            for (const g of net.games) {
              const was = statuses.current.get(g.id);
              if (!first.current && was === "invite" && g.status === "active" && g.p1 === net.meId) {
                say(depsRef.current.nameOf(g.p2) + " accepted your " + gameName(g.kind) + " invite");
                net.openGame = g.id;
                Navigation.Navigate(GAME_ROUTE);
              }
              statuses.current.set(g.id, g.status);
            }
            first.current = false;
            for (const k of res.me.newStamps || []) { const sd = STAMPS.find((x) => x.key === k); if (sd) say("New stamp: " + sd.name + " - hat unlocked: " + hatName(sd.hat)); }
            netChanged();
          } else if (!res.ok && !res.off) { net.error = res.message || "The server did not answer."; failed = true; netChanged(); }
        }
      } catch (e) { net.error = e instanceof Error ? e.message : String(e); failed = true; }
      if (!stop) timer = setTimeout(tick, nextDelay(8000, typeof document !== "undefined" && document.hidden, depsRef.current.lowPower, failed));
    };
    tick();
    return () => { stop = true; if (timer) clearTimeout(timer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [d.ready, d.meId]);

  return { ackRef };
}

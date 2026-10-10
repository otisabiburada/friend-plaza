// Greetings and dances that someone asked for (the player, or a friend over the server). Nothing starts on its own.
// Pure logic, no drawing.
import type { Walker } from "./chars";
import { pickTarget } from "./chars";

export interface SocialEvent { kind: "greet" | "chat" | "party" | "wave"; a: string; b?: string; text: string }

const EMOTES: Array<"heart" | "star" | "exclaim"> = ["heart", "star", "exclaim", "heart"];

const awake = (w: Walker): boolean => w.state !== "offline" && w.state !== "snooze";

function chatSeconds(a: Walker, b: Walker): number {
  return 4 + ((((a.seed ^ b.seed) >>> 0) % 60) / 10);
}

export class Social {
  /** Runs the timers of greetings and dances that someone asked for. Nothing here starts on its own. */
  update(list: Walker[], dt: number, rnd: () => number, bounds: { w: number; h: number }): SocialEvent[] {
    const ev: SocialEvent[] = [];
    const byId = new Map<string, Walker>();
    for (const w of list) byId.set(w.id, w);

    for (const w of list) {
      if (w.cool > 0) w.cool -= dt;
      if (w.act) {
        w.actT -= dt;
        const p = w.partner ? byId.get(w.partner) : undefined;
        if (w.partner && !p) w.actT = 0;
        if (p) w.dir = p.x < w.x ? -1 : 1;
        if (w.actT <= 0) this.finish(w, p, rnd, bounds, ev);
      } else if (w.seek) {
        const p = byId.get(w.seek);
        w.seekT -= dt;
        if (!p || !awake(p) || w.seekT <= 0) { w.seek = null; continue; }
        w.tx = p.x + (w.x < p.x ? -24 : 24);
        w.ty = p.y;
        w.pause = 0;
        if (Math.hypot(p.x - w.x, (p.y - w.y) * 1.4) < 34) {
          p.act = ""; // they stop whatever they were doing to say hi back
          this.startGreet(w, p, ev, true);
        }
      }
    }

    return ev;
  }

  private startGreet(a: Walker, b: Walker, ev: SocialEvent[], forced: boolean): void {
    const next: "" | "chat" = ""; // a greeting is only a greeting; no pretend conversations
    for (const [w, o] of [[a, b], [b, a]] as Array<[Walker, Walker]>) {
      w.act = "greet"; w.actT = 2.4; w.partner = o.id; w.next = next; w.seek = null; w.moving = false;
      const want = a.pend || b.pend;
      w.emote = want || EMOTES[Math.floor(Math.random() * EMOTES.length)];
      w.rush = false; w.pend = "";
      w.dir = o.x < w.x ? -1 : 1;
    }
    ev.push({ kind: forced && (a.me || b.me) ? "wave" : "greet", a: a.id, b: b.id, text: "" });
  }

  private finish(w: Walker, p: Walker | undefined, rnd: () => number, bounds: { w: number; h: number }, ev: SocialEvent[]): void {
    if (w.act === "greet" && w.next === "chat" && p && p.act) {
      w.act = "chat"; w.actT = chatSeconds(w, p); w.next = ""; w.emote = "";
      if (w.id < p.id) ev.push({ kind: "chat", a: w.id, b: p.id, text: "" });
      return;
    }
    w.act = ""; w.partner = null; w.emote = ""; w.next = "";
    w.cool = 20 + rnd() * 30;
    w.pause = 0.2 + rnd() * 0.8;
    pickTarget(w, rnd, bounds);
  }

  /** The player pressed the greet button while walking: greet the closest friend, or just wave. Returns that friend's id. */
  greetNearby(list: Walker[], meId: string, canGreet: (id: string) => boolean = () => true, reach = 70): string | null {
    const me = list.find((w) => w.id === meId);
    if (!me || me.act) return null;
    let best: Walker | null = null, bd = reach;
    for (const w of list) {
      if (w === me || !awake(w) || w.act || !canGreet(w.id)) continue;
      const d = Math.hypot(w.x - me.x, (w.y - me.y) * 1.4);
      if (d < bd) { bd = d; best = w; }
    }
    if (best) { this.startGreet(me, best, [], false); return best.id; }
    me.act = "greet"; me.actT = 1.6; me.partner = null; me.emote = "star"; me.moving = false;
    return null;
  }

  /** A friend sent something over the server: their character hurries to yours and greets it. */
  visit(list: Walker[], fromId: string, toId: string, emote: "" | "heart" | "star"): boolean {
    const a = list.find((w) => w.id === fromId), b = list.find((w) => w.id === toId);
    if (!a || !b || a === b || !awake(a) || !awake(b)) return false;
    if (a.act) { a.act = ""; a.partner = null; a.emote = ""; }
    a.seek = b.id; a.seekT = 14; a.cool = 0; a.rush = true; a.pend = emote;
    b.cool = 0;
    if (!b.act) { b.pend = emote; b.pause = 8; b.moving = false; }
    return true;
  }

  /** Two (or more) characters dance together for a few seconds. */
  danceTogether(list: Walker[], ids: string[], seconds = 6): number {
    let n = 0;
    for (const w of list) {
      if (!ids.includes(w.id) || !awake(w)) continue;
      w.act = "dance"; w.actT = seconds; w.emote = "note"; w.seek = null; w.partner = null; w.moving = false; n++;
    }
    return n;
  }

  /** The player asks their character to go and wave at a friend. Returns false if that friend is not around. */
  sendWave(list: Walker[], targetId: string, emote: "" | "heart" | "star" = ""): boolean {
    const t = list.find((w) => w.id === targetId);
    if (!t || !awake(t)) return false;
    const me = list.find((w) => w.me);
    t.cool = 0;
    if (!me || me === t) {
      t.act = "greet"; t.actT = 2.2; t.partner = null; t.emote = emote || "heart"; t.moving = false;
      return true;
    }
    if (me.act) { me.act = ""; me.partner = null; me.emote = ""; }
    me.seek = t.id; me.seekT = 16; me.cool = 0; me.pend = emote;
    if (!t.act) { t.pause = 8; t.moving = false; }
    return true;
  }
}

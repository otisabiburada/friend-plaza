// Cartoon-style characters, generated from a Steam ID and drawn on a canvas.
import type { Friend } from "./api";

export interface Look {
  skin: string;
  hair: string;
  hairStyle: number;
  shirt: string;
  pants: string;
  shoes: string;
  eyes: number;     // 0 oval, 1 round, 2 happy arcs, 3 big, 4 lashes
  brows: number;    // 0 flat, 1 arched, 2 angled, 3 none
  mouth: number;    // 0 smile, 1 open grin, 2 small, 3 cat, 4 smirk
  glasses: boolean;
  stache: boolean;
  blush: boolean;
  head: number;     // head width factor 0.94 - 1.06
  hat: number;      // 0 none, 1 - 27 see catalog.ts
  acc: number;      // 0 none, 1 - 15 accessories (catalog.ts)
  tee?: number;     // graphic tee 0 none, see cosmetics.ts
  flag?: number;    // carried flag
  face?: number;    // face paint
  kicks?: number;   // shoe style
  aura?: number;    // glow ring on the ground
}

export const SKIN = ["#fbd5b5", "#f3c096", "#e0a477", "#c58459", "#9a6341", "#6f4a31"];
export const HAIR = ["#2b2118", "#4a3222", "#7a4a2a", "#b5772f", "#d9b45a", "#c9c9c9", "#a8321f", "#3d4d8f"];
export const SHIRT = ["#ef5b5b", "#f59e42", "#f2cf3b", "#6cc24a", "#2fb5a0", "#3d9be9", "#6c6ce0", "#b25fe0", "#ec6fa8", "#f4f4f4", "#4b5563", "#8bd3dd"];
export const PANTS = ["#374151", "#1f3a5f", "#5b4636", "#4b5563", "#6b7280", "#7c2d3a"];
export const HAIR_STYLES = 9;
export const SHOES = ["#f4f4f4", "#2b2f36", "#c0392b", "#3d6fb5", "#8a6a45"];

export function hash(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function mulberry(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The same Steam ID always gives the same character. */
export function lookFor(steamid: string): Look {
  const r = mulberry(hash(steamid));
  const pick = <T,>(a: T[]): T => a[Math.floor(r() * a.length)];
  const skin = pick(SKIN), hair = pick(HAIR), hairStyle = Math.floor(r() * HAIR_STYLES), shirt = pick(SHIRT), pants = pick(PANTS);
  return {
    skin, hair, hairStyle, shirt, pants, shoes: pick(SHOES),
    eyes: Math.floor(r() * 5), brows: Math.floor(r() * 4), mouth: Math.floor(r() * 5),
    glasses: r() < 0.16, stache: r() < 0.1, blush: r() < 0.5, head: 0.94 + r() * 0.12, hat: 0, acc: 0,
  };
}

export interface Walker {
  id: string;
  look: Look;
  x: number;
  y: number;
  tx: number;
  ty: number;
  ax: number; // anchor (the tile they gather around)
  ay: number;
  radius: number;
  speed: number;
  phase: number;
  dir: number; // -1 left, 1 right
  pause: number;
  moving: boolean;
  state: Friend["state"];
  playing: boolean;
  me: boolean;
  seed: number;
  name: string;
  home: number | null;      // appid of the game pad they hang around
  act: "" | "greet" | "chat" | "dance";
  actT: number;             // seconds left of the current social act
  next: "" | "chat";        // what follows a greeting
  partner: string | null;
  emote: "" | "heart" | "star" | "exclaim" | "note";
  cool: number;             // seconds before they look for company again
  seek: string | null;      // walking over to say hi to this friend
  seekT: number;
  rush: boolean;            // hurrying over (a friend sent something)
  pend: "" | "heart" | "star"; // what to show when the greeting starts
  live: boolean;            // this friend has the plaza open right now (server)
}

export function makeWalker(f: Friend, me: boolean, cx: number, cy: number): Walker {
  const seed = hash(f.steamid);
  const r = mulberry(seed ^ 0x9e3779b9);
  return {
    id: f.steamid, look: lookFor(f.steamid), x: cx + (r() - 0.5) * 200, y: cy + (r() - 0.5) * 120,
    tx: cx, ty: cy, ax: cx, ay: cy, radius: 80, speed: 14 + r() * 14, phase: r() * 6.28, dir: r() < 0.5 ? -1 : 1,
    pause: r() * 3, moving: false, state: f.state, playing: f.playing, me, seed,
    name: f.name, home: null, act: "", actT: 0, next: "", partner: null, emote: "", cool: 2 + r() * 8, seek: null, seekT: 0, rush: false, pend: "", live: false,
  };
}

export function pickTarget(w: Walker, rnd: () => number, bounds: { w: number; h: number }): void {
  const a = rnd() * Math.PI * 2;
  const d = Math.sqrt(rnd()) * w.radius;
  w.tx = Math.min(bounds.w - 20, Math.max(20, w.ax + Math.cos(a) * d));
  w.ty = Math.min(bounds.h - 14, Math.max(60, w.ay + Math.sin(a) * d * 0.7));
}

export function stepWalker(w: Walker, dt: number, rnd: () => number, bounds: { w: number; h: number }): void {
  if (w.act || w.state === "offline" || w.state === "snooze") { w.moving = false; return; }
  if (w.pause > 0) { w.pause -= dt; w.moving = false; if (w.pause <= 0) pickTarget(w, rnd, bounds); return; }
  const dx = w.tx - w.x, dy = w.ty - w.y;
  const dist = Math.hypot(dx, dy);
  const sp = w.speed * (w.state === "away" ? 0.5 : 1) * ((w.me || w.rush) && w.seek ? 2.6 : 1);
  if (dist < 2) { w.pause = 1 + rnd() * 4; w.moving = false; return; }
  const step = Math.min(dist, sp * dt);
  w.x += (dx / dist) * step;
  w.y += (dy / dist) * step;
  if (Math.abs(dx) > 1) w.dir = dx < 0 ? -1 : 1;
  w.phase += dt * 9;
  w.moving = true;
}

export function scaleAt(y: number, h: number): number {
  return 0.85 + 0.45 * Math.min(1, Math.max(0, y / h));
}

function ell(ctx: CanvasRenderingContext2D, x: number, y: number, rx: number, ry: number): void {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
}

function rrect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export interface DrawOpts { selected: boolean; t: number; lowPower: boolean; h: number }

export function drawWalker(ctx: CanvasRenderingContext2D, w: Walker, o: DrawOpts): void {
  const s = scaleAt(w.y, o.h);
  const asleep = w.state === "offline" || w.state === "snooze";
  const swing = w.moving ? Math.sin(w.phase) : 0;
  const bob = w.moving ? Math.abs(Math.sin(w.phase)) * 2 * s : 0;
  ctx.save();
  ctx.translate(Math.round(w.x), Math.round(w.y));
  if (asleep) ctx.globalAlpha = 0.72;
  // shadow
  ctx.fillStyle = "rgba(60,50,40,0.18)";
  ell(ctx, 0, 1 * s, 9 * s, 3 * s); ctx.fill();
  if (o.selected) {
    ctx.strokeStyle = "#1a9fff"; ctx.lineWidth = 2.5;
    ell(ctx, 0, 1 * s, 13 * s, 4.5 * s); ctx.stroke();
  }
  ctx.translate(0, -bob);
  const L = { ...w.look, hairStyle: w.look.hairStyle % 6 };
  // legs
  ctx.fillStyle = L.pants;
  rrect(ctx, -6 * s, -10 * s + swing * 2 * s, 4.5 * s, 10 * s, 2 * s); ctx.fill();
  rrect(ctx, 1.5 * s, -10 * s - swing * 2 * s, 4.5 * s, 10 * s, 2 * s); ctx.fill();
  // hair behind head
  ctx.fillStyle = L.hair;
  if (L.hairStyle === 1) { rrect(ctx, -10 * s, -38 * s, 20 * s, 20 * s, 8 * s); ctx.fill(); }
  if (L.hairStyle === 5) { rrect(ctx, -10.5 * s, -36 * s, 21 * s, 14 * s, 6 * s); ctx.fill(); }
  // arms
  ctx.fillStyle = L.skin;
  ell(ctx, -9 * s, -15 * s - swing * 2 * s, 2.4 * s, 3 * s); ctx.fill();
  ell(ctx, 9 * s, -15 * s + swing * 2 * s, 2.4 * s, 3 * s); ctx.fill();
  // body
  ctx.fillStyle = L.shirt;
  rrect(ctx, -7.5 * s, -23 * s, 15 * s, 15 * s, 5 * s); ctx.fill();
  // head
  ctx.fillStyle = L.skin;
  ell(ctx, 0, -31 * s, 9.5 * s, 9 * s); ctx.fill();
  // hair on top
  ctx.fillStyle = L.hair;
  switch (L.hairStyle) {
    case 0: // short cap
    case 1:
    case 5:
      ctx.beginPath(); ctx.ellipse(0, -33.5 * s, 9.8 * s, 7.5 * s, 0, Math.PI, 0); ctx.fill(); break;
    case 2: // bun
      ctx.beginPath(); ctx.ellipse(0, -33.5 * s, 9.8 * s, 7 * s, 0, Math.PI, 0); ctx.fill();
      ell(ctx, 0, -42 * s, 4 * s, 4 * s); ctx.fill(); break;
    case 3: // bald with a tuft
      ell(ctx, 0, -39.5 * s, 2.2 * s, 2.6 * s); ctx.fill(); break;
    case 4: // spiky
      ctx.beginPath();
      ctx.moveTo(-9.5 * s, -32 * s); ctx.lineTo(-8 * s, -42 * s); ctx.lineTo(-4 * s, -37 * s); ctx.lineTo(0, -44 * s);
      ctx.lineTo(4 * s, -37 * s); ctx.lineTo(8 * s, -42 * s); ctx.lineTo(9.5 * s, -32 * s); ctx.closePath(); ctx.fill(); break;
    default: break;
  }
  // face
  const ex = w.dir * 1.1 * s;
  ctx.fillStyle = "#2a2220"; ctx.strokeStyle = "#2a2220"; ctx.lineWidth = 1.2;
  if (asleep) {
    ctx.beginPath(); ctx.moveTo(-5 * s + ex, -30 * s); ctx.lineTo(-2 * s + ex, -30 * s);
    ctx.moveTo(2 * s + ex, -30 * s); ctx.lineTo(5 * s + ex, -30 * s); ctx.stroke();
  } else {
    ell(ctx, -3.4 * s + ex, -30 * s, 1.15 * s, 1.5 * s); ctx.fill();
    ell(ctx, 3.4 * s + ex, -30 * s, 1.15 * s, 1.5 * s); ctx.fill();
  }
  ctx.beginPath(); ctx.arc(ex, -28 * s, 2.2 * s, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
  ctx.translate(0, bob);
  // markers above the head
  if (asleep) {
    ctx.fillStyle = "#7a8aa8"; ctx.font = "bold " + Math.round(9 * s) + "px sans-serif";
    const zf = (o.t * 0.8) % 1;
    ctx.globalAlpha = 0.9 - zf * 0.8;
    ctx.fillText("z", 8 * s, (-40 - zf * 8) * s);
    ctx.globalAlpha = 1;
  } else if (w.playing) {
    ctx.fillStyle = "#43c463";
    const pulse = o.lowPower ? 0 : Math.sin(o.t * 4 + w.seed) * 0.6;
    ell(ctx, 0, (-49 - bob) * s, (3.2 + pulse) * s, (3.2 + pulse) * s); ctx.fill();
  }
  if (w.me) {
    ctx.fillStyle = "#1a9fff";
    ctx.beginPath(); ctx.moveTo(-4.5 * s, -56 * s); ctx.lineTo(4.5 * s, -56 * s); ctx.lineTo(0, -49.5 * s); ctx.closePath(); ctx.fill();
  }
  if (o.selected) {
    ctx.fillStyle = "#ffd23f"; ctx.strokeStyle = "#b8860b"; ctx.lineWidth = 1;
    const by = -58 * s - (o.lowPower ? 0 : Math.abs(Math.sin(o.t * 5)) * 4);
    ctx.beginPath(); ctx.moveTo(-5 * s, by); ctx.lineTo(5 * s, by); ctx.lineTo(0, by + 7 * s); ctx.closePath(); ctx.fill(); ctx.stroke();
  }
  ctx.restore();
}

/** Closest character under a point (front-most first). */
export function hitTest(walkers: Walker[], px: number, py: number, h: number): Walker | null {
  let best: Walker | null = null;
  let bestD = 1e9;
  for (const w of walkers) {
    const s = scaleAt(w.y, h);
    const dx = px - w.x, dy = py - (w.y - 26 * s);
    const d = Math.hypot(dx * 0.9, dy * 0.6);
    if (Math.abs(dx) < 20 * s && dy > -34 * s && dy < 30 * s && d < bestD) { best = w; bestD = d; }
  }
  return best;
}

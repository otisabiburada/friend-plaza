// Pure layout of the plaza: where each game pad sits.
import type { RingEntry } from "./api";

export interface Zone { x: number; y: number; r: number; entry: RingEntry; index: number; hue: number; k: number }

// A loose, medium-close cluster of up to 13 pads in three rows (best game first, in the middle of the top). The store stands to the left.
const SPOTS: Array<[number, number]> = [
  [0.49, 0.31], [0.52, 0.53], [0.65, 0.29], [0.37, 0.51], [0.33, 0.32], [0.67, 0.55], [0.46, 0.75], [0.62, 0.73],
  [0.81, 0.31], [0.22, 0.54], [0.82, 0.53], [0.30, 0.74], [0.78, 0.75],
];

export function hueFor(appid: number): number {
  return (appid * 47) % 360;
}

export function computeZones(w: number, h: number, games: RingEntry[]): Zone[] {
  const n = Math.min(SPOTS.length, games.length);
  // the more games, the smaller the pads and cards, so that up to 13 fit without covering each other
  const k = n <= 7 ? 1 : n <= 10 ? 0.86 : 0.74;
  const r = Math.min(w * 0.085, 74) * k;
  const out: Zone[] = [];
  for (let i = 0; i < n; i++) {
    const [fx, fy] = SPOTS[i];
    // a small, steady nudge per game so the cluster looks scattered rather than drawn on a grid
    const id = games[i].appid;
    const jx = (((id * 7919) % 29) - 14), jy = (((id * 104729) % 19) - 9);
    out.push({ x: w * fx + jx, y: h * fy + jy, r, entry: games[i], index: i, hue: hueFor(id), k });
  }
  return out.sort((a, b) => (Math.abs(a.y - b.y) > 40 ? a.y - b.y : a.x - b.x));
}

/** Where the Friend Store stands (the middle of its footprint, in screen pixels) and where its door is. */
export function storeSpot(w: number, h: number): { x: number; y: number; doorX: number; doorY: number } {
  const x = w * 0.075, y = h * 0.6;
  return { x, y, doorX: x, doorY: y + 36 };
}

export interface Rect { x0: number; y0: number; x1: number; y1: number }

/** The ground under the store building (screen pixels), grown by the width of a character. Nobody can stand in it. */
export function storeRect(w: number, h: number, pad = 12): Rect {
  const s = storeSpot(w, h);
  return { x0: s.x - 88 - pad, x1: s.x + 88 + pad, y0: s.y - 17 - pad * 0.6, y1: s.y + 17 + pad * 0.6 };
}

/** If the point is inside the rectangle, moves it to the nearest edge (so walking into a wall slides along it). */
export function pushOutOfRect(p: { x: number; y: number }, r: Rect): boolean {
  if (p.x <= r.x0 || p.x >= r.x1 || p.y <= r.y0 || p.y >= r.y1) return false;
  const left = p.x - r.x0, right = r.x1 - p.x, up = p.y - r.y0, down = r.y1 - p.y;
  const m = Math.min(left, right, up, down);
  if (m === left) p.x = r.x0; else if (m === right) p.x = r.x1; else if (m === up) p.y = r.y0; else p.y = r.y1;
  return true;
}

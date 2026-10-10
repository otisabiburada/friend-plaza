export type Drawer =
  | null
  | { kind: "friends" }
  | { kind: "game"; appid: number }
  | { kind: "me" }
  | { kind: "stamps" }
  | { kind: "inbox" }
  | { kind: "gift"; to: string }
  | { kind: "note"; to: string }
  | { kind: "games" }
  | { kind: "play"; to: string }
  | { kind: "report"; to: string };
export type Phase = "loading" | "error" | "ready";

export const MAX_SHOWN = 90;
// zoom levels, from the widest view to the closest. ZOOM_HOME is the normal view.
export const ZOOMS = [0.75, 1, 1.4, 1.8, 2.6];
export const ZOOM_HOME = 1;
export const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));

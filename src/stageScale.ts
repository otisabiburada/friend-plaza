// How much the screens are shrunk (or grown) to fit the room Steam gives them. Updated by <Stage>.
export const stageScale = { k: 1 };
export const DESIGN_W = 1280;
export const DESIGN_H = 800;

/** The scale that fits the design size into a box. Never absurdly small or large. */
export function fitScale(w: number, h: number): number {
  if (!(w > 0) || !(h > 0)) return 1;
  return Math.max(0.3, Math.min(2, Math.min(w / DESIGN_W, h / DESIGN_H)));
}

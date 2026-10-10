// The plaza camera: eases toward a zoom level and a point of interest, and stays inside the plaza.
import { clamp } from "./types";

export interface Cam { z: number; cx: number; cy: number; x0: number; y0: number }

export function stepCamera(cam: Cam, dt: number, size: { w: number; h: number }, target: { z: number; x: number; y: number }, fast: boolean): void {
  cam.z += (target.z - cam.z) * Math.min(1, dt * 6);
  const kc = Math.min(1, dt * (fast ? 9 : 5));
  cam.cx += (target.x - cam.cx) * kc;
  cam.cy += (target.y - cam.cy) * kc;
  const vw = size.w / cam.z, vh = size.h / cam.z;
  // zoomed in: stay inside the plaza. zoomed out (the view is bigger than the plaza): keep the plaza centred.
  cam.x0 = vw >= size.w ? (size.w - vw) / 2 : clamp(cam.cx - vw / 2, 0, size.w - vw);
  cam.y0 = vh >= size.h ? (size.h - vh) / 2 : clamp(cam.cy - vh / 2, 0, size.h - vh);
}

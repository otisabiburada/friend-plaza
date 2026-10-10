// Walking the player's own character: where to move for the keys, stick and D-pad inputs. Pure except for reading the gamepad.
import type { Walker } from "../chars";
import { clamp } from "./types";

/** For each direction, until when (ms) it counts as pressed. Steam sends one direction event at a time, so two
 *  directions seen close together mean a diagonal. */
export interface Nudge { up: number; down: number; left: number; right: number }
export const NUDGE_MS = 300;
export const NUDGE_REPEAT_MS = 460;   // Steam repeats a held direction slowly, so a repeat has to bridge a longer gap
export const noNudge = (): Nudge => ({ up: 0, down: 0, left: 0, right: 0 });
export function press(n: Nudge, dir: keyof Nudge, now: number): void {
  const holding = n[dir] > now - 250;   // pressed again right after the last press: the button is being held
  n[dir] = now + (holding ? NUDGE_REPEAT_MS : NUDGE_MS);
}

/** The left stick, straight from Steam (values from -1 to 1). Steam's own menu navigation only sends steps, so this
 *  is what makes a held stick walk smoothly. Stays at 0 when Steam does not offer it. */
export const stick = { x: 0, y: 0, live: false };
const DEAD = 0.2;
function axis(v: number): number {
  const a = Math.abs(v);
  if (!(a > DEAD)) return 0;
  return Math.sign(v) * Math.min(1, (a - DEAD) / (0.9 - DEAD));
}

/** Starts listening to the controller. Returns the function that stops it. Safe when Steam has no such API. */
export function startStickInput(): () => void {
  stick.x = 0; stick.y = 0;
  const handles: Array<{ unregister?: () => void } | undefined> = [];
  try {
    const sc = (window as unknown as { SteamClient?: { Input?: Record<string, unknown> } }).SteamClient;
    const input = sc && sc.Input as { RegisterForControllerStateChanges?: (cb: (c: unknown[]) => void) => { unregister?: () => void } } | undefined;
    if (input && typeof input.RegisterForControllerStateChanges === "function") {
      handles.push(input.RegisterForControllerStateChanges((changes) => {
        let x = 0, y = 0;
        for (const c of changes as Array<Record<string, number>>) {
          if (!c) continue;
          const sx = Number(c.sLeftStickX), sy = Number(c.sLeftStickY);
          if (Number.isFinite(sx) && Number.isFinite(sy)) {
            // the stick is reported from -32767 to 32767, up is positive
            const nx = sx / 32767, ny = -sy / 32767;
            if (Math.abs(nx) > Math.abs(x)) x = nx;
            if (Math.abs(ny) > Math.abs(y)) y = ny;
            stick.live = true;
          }
        }
        stick.x = x; stick.y = y;
      }));
    }
  } catch (e) { /* no stick API: the D-pad steps and the keyboard still work */ }
  return () => {
    stick.x = 0; stick.y = 0;
    for (const h of handles) { try { if (h && h.unregister) h.unregister(); } catch (e) { /* already gone */ } }
  };
}

/** Eases the requested direction so walking starts and stops softly and short gaps between D-pad repeats do not stutter. */
export interface Smooth { ix: number; iy: number }
export function smoothInput(s: Smooth, want: { ix: number; iy: number }, dt: number): { ix: number; iy: number } {
  const wanting = Math.hypot(want.ix, want.iy) > 0.05;
  const k = Math.min(1, dt * (wanting ? 14 : 9));
  s.ix += (want.ix - s.ix) * k;
  s.iy += (want.iy - s.iy) * k;
  if (!wanting && Math.hypot(s.ix, s.iy) < 0.12) { s.ix = 0; s.iy = 0; }
  return { ix: s.ix, iy: s.iy };
}

/** The direction the player is asking for, from -1 to 1 on both axes. */
export function readInput(keys: Set<string>, nudge: Nudge, now: number, pads: Array<Gamepad | null> = []): { ix: number; iy: number } {
  let ix = 0, iy = 0;
  ix += axis(stick.x); iy += axis(stick.y);
  if (keys.has("arrowleft") || keys.has("a")) ix -= 1;
  if (keys.has("arrowright") || keys.has("d")) ix += 1;
  if (keys.has("arrowup") || keys.has("w")) iy -= 1;
  if (keys.has("arrowdown") || keys.has("s")) iy += 1;
  if (nudge.left > now) ix -= 1;
  if (nudge.right > now) ix += 1;
  if (nudge.up > now) iy -= 1;
  if (nudge.down > now) iy += 1;
  for (const gp of pads) {
    if (!gp) continue;
    if (!stick.live) { ix += axis(gp.axes[0] || 0); iy += axis(gp.axes[1] || 0); }
    if (gp.buttons[14] && gp.buttons[14].pressed) ix -= 1;
    if (gp.buttons[15] && gp.buttons[15].pressed) ix += 1;
    if (gp.buttons[12] && gp.buttons[12].pressed) iy -= 1;
    if (gp.buttons[13] && gp.buttons[13].pressed) iy += 1;
  }
  const len = Math.hypot(ix, iy);
  if (len > 1) { ix /= len; iy /= len; }
  return { ix, iy };
}

/** Moves the character for dt seconds. Stays inside the plaza. */
export function stepPlayer(me: Walker, dt: number, sz: { w: number; h: number }, input: { ix: number; iy: number }): void {
  if (me.act) { me.moving = false; return; }
  if (Math.hypot(input.ix, input.iy) < 0.05) { me.moving = false; return; }
  me.x = clamp(me.x + input.ix * 125 * dt, 24, sz.w - 24);
  me.y = clamp(me.y + input.iy * 95 * dt, 70, sz.h - 16);
  if (Math.abs(input.ix) > 0.1) me.dir = input.ix < 0 ? -1 : 1;
  me.moving = true;
  me.phase += dt * 9;
}

export function nearPoint(me: { x: number; y: number }, px: number, py: number, reach: number): boolean {
  return Math.hypot(me.x - px, (me.y - py) * 1.4) < reach;
}

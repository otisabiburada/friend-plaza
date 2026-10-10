// How hard the 3D plaza works. In "auto" it watches the real frame time and steps down when the Deck can't keep up,
// and carefully steps back up when there is plenty of room.
export type QualityMode = "auto" | "high" | "medium" | "low";

export interface Level { pixel: number; frameMs: number; maxCrowd: number; name: string }
export const LEVELS: Level[] = [
  { pixel: 1.5, frameMs: 24, maxCrowd: 90, name: "High" },
  { pixel: 1.1, frameMs: 28, maxCrowd: 60, name: "Medium" },
  { pixel: 0.9, frameMs: 33, maxCrowd: 40, name: "Low" },
  { pixel: 0.7, frameMs: 50, maxCrowd: 24, name: "Very low" },
];

/** What the settings screen shows ("Right now: Medium"). */
export const quality = { level: 0 };

export class Governor {
  level = 0;
  private acc = 0;
  private n = 0;
  private calm = 0;
  private cooldown = 0;

  constructor(public mode: QualityMode = "auto", public batterySaver = false) { this.apply(); }

  setMode(mode: QualityMode, batterySaver: boolean): void {
    this.mode = mode; this.batterySaver = batterySaver; this.apply();
  }

  /** The level a fixed mode asks for (battery saver is never better than "Low"). */
  private fixed(): number {
    const base = this.mode === "high" ? 0 : this.mode === "medium" ? 1 : this.mode === "low" ? 2 : -1;
    if (base < 0) return -1;
    return this.batterySaver ? Math.max(base, 2) : base;
  }

  private apply(): void {
    const f = this.fixed();
    if (f >= 0) this.level = f;
    else if (this.batterySaver) this.level = Math.max(this.level, 2);
    quality.level = this.level;
  }

  get current(): Level { return LEVELS[this.level]; }

  /** Call with the real time between two drawn frames (milliseconds). Returns true when the level changed. */
  sample(frameMs: number): boolean {
    if (this.fixed() >= 0) return false;
    this.acc += frameMs; this.n++;
    if (this.acc < 3000) return false;          // look at 3 second windows
    const avg = this.acc / this.n;
    this.acc = 0; this.n = 0;
    if (this.cooldown > 0) this.cooldown--;
    const target = this.current.frameMs;
    if (avg > target * 1.35 && this.level < LEVELS.length - 1 && this.cooldown === 0) {
      this.level++; this.calm = 0; this.cooldown = 2; quality.level = this.level; return true;
    }
    if (avg < target * 1.08 && this.level > (this.batterySaver ? 2 : 0)) {
      this.calm++;
      if (this.calm >= 10 && this.cooldown === 0) { this.level--; this.calm = 0; this.cooldown = 4; quality.level = this.level; return true; }
    } else this.calm = 0;
    return false;
  }
}

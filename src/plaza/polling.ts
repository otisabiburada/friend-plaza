// How long the plaza waits between server check-ins.

/** How long to wait before the next check-in. Quieter when nobody is looking or the Deck is saving power. */
export function nextDelay(base: number, hidden: boolean, lowPower: boolean, failed: boolean): number {
  if (failed) return 20000;
  if (hidden) return 30000;
  return lowPower ? Math.max(base, 15000) : base;
}


// How often the game screen asks the server whether the board changed. It asks quickly while you wait for the other
// player and slowly while it is your move; the question itself is tiny (/game/poll answers "unchanged").
import type { Match } from "./net";

export function nextPollDelay(m: Match | undefined, meId: string, hidden: boolean): number {
  if (hidden) return 8000;
  if (!m) return 5000;
  if (m.status === "done") return 20000;
  if (m.status === "invite") return 3000;
  const iAct = m.kind === "rps" ? !!m.state.picks && m.state.picks[m.p1 === meId ? 0 : 1] === null
    : m.kind === "bj" ? !!m.state.stood && !m.state.stood[m.p1 === meId ? 0 : 1]
    : m.turn === meId;
  return iAct ? 4000 : 1500;
}

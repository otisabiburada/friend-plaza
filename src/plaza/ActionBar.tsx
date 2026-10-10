// What you can do with the friend you picked.
import { Focusable } from "@decky/ui";
import { useEffect, useState } from "react";
import type { Friend } from "../api";

export interface BarActions {
  wave: () => void;
  heart: () => void;
  five: () => void;
  dance: () => void;
  play: () => void;
  gift: () => void;
  note: () => void;
  profile: () => void;
  game: () => void;
  block: () => void;
  report: () => void;
  close: () => void;
}

function Btn(props: { label: string; onAct: () => void; autoFocus?: boolean; off?: boolean }) {
  return (
    // @ts-ignore autoFocus exists on Focusable at run time
    <Focusable className={"fp-act" + (props.off ? " fp-off" : "")} focusClassName="fp-focus" onActivate={props.onAct} onClick={props.onAct} autoFocus={props.autoFocus}>{props.label}</Focusable>
  );
}

export function ActionBar(props: { friend: Friend; hasApp: boolean; isStranger: boolean; a: BarActions }) {
  const { friend, hasApp, isStranger, a } = props;
  const [sure, setSure] = useState(false);
  useEffect(() => { setSure(false); }, [friend.steamid]);
  const online = hasApp || isStranger; // someone who uses the plugin can be blocked or reported
  return (
    <div className="fp-actions">
      <div className="fp-who">{friend.name}</div>
      {hasApp && (
        <>
          <Btn label="Wave" onAct={a.wave} autoFocus off={friend.state === "snooze"} />
          <Btn label="Heart" onAct={a.heart} />
          <Btn label="High five" onAct={a.five} />
          <Btn label="Dance" onAct={a.dance} />
          <Btn label="Play" onAct={a.play} />
          <Btn label="Gift" onAct={a.gift} />
          <Btn label="Note" onAct={a.note} />
        </>
      )}
      {!hasApp && <div className="fp-bs" style={{ color: "#b8c2d6", maxWidth: 230 }}>{isStranger ? "Plugin user (not a friend). Interacting with non-friends is not available yet." : "Not using Friend Plaza, so there is nobody to interact with yet."}</div>}
      <Btn label="Profile" onAct={a.profile} autoFocus={!hasApp} />
      <Btn label="Game" onAct={a.game} />
      {online && <Btn label={sure ? "Press again to block" : "Block"} onAct={() => { if (sure) { setSure(false); a.block(); } else setSure(true); }} />}
      {online && <Btn label="Report" onAct={a.report} />}
      <Btn label="Close" onAct={a.close} />
    </div>
  );
}

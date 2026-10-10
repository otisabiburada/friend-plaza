import { Focusable } from "@decky/ui";
import { useState } from "react";
import type { Friend, RingEntry } from "../api";
import { net } from "../net";
import type { Zone } from "../layout";
import { SIN } from "../scene3d";
import type { Drawer } from "./types";

export function statusClass(f: Friend): "game" | "on" | "away" | "off" {
  if (f.playing) return "game";
  if (f.state === "offline") return "off";
  if (f.state === "away" || f.state === "snooze") return "away";
  return "on";
}

const isFriend = (id: string): boolean => net.friends.has(id);

/** The hover card text, in the Steam friends-list style. */
export function steamLine(f: Friend): { head: string; sub: string } {
  const sub = isFriend(f.steamid) ? "Steam friend, uses Friend Plaza" : "Uses Friend Plaza (not on your friends list)";
  if (f.playing && f.game) return { head: "In-Game: " + f.game.name, sub };
  const label = f.state === "busy" ? "Busy" : f.state === "away" || f.state === "snooze" ? "Away" : f.state === "offline" ? "Offline" : "Online";
  return { head: label, sub };
}

/** One line for the lists: what they are doing. */
export function describe(f: Friend): { line: string } {
  if (f.playing && f.game) return { line: "Playing " + f.game.name };
  if (f.state === "away" || f.state === "snooze") return { line: "Away" };
  if (f.state === "busy") return { line: "Busy" };
  return { line: "Online" };
}

export function Avatar({ f }: { f: Friend }) {
  // the initial sits behind the picture, so a slow or failed download never leaves an empty circle
  const [bad, setBad] = useState(false);
  return (
    <div className={"fp-av " + statusClass(f)} style={{ position: "relative", overflow: "hidden" }}>
      {f.name.slice(0, 1).toUpperCase()}
      {f.avatar && !bad && (
        <img src={f.avatar} alt="" draggable={false} onError={() => setBad(true)}
          style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      )}
    </div>
  );
}

export function GameArt({ appid, name }: { appid: number; name: string }) {
  const urls = [
    "https://shared.steamstatic.com/store_item_assets/steam/apps/" + appid + "/library_600x900.jpg",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/" + appid + "/library_600x900.jpg",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/" + appid + "/header.jpg",
  ];
  const [i, setI] = useState(0);
  if (i >= urls.length) {
    const hue = (appid * 47) % 360;
    return <div className="fp-fallback" style={{ background: "linear-gradient(135deg,hsl(" + hue + ",60%,58%),hsl(" + ((hue + 40) % 360) + ",55%,42%))" }}>{name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((x) => x[0]).join("").toUpperCase() || "?"}</div>;
  }
  return <img src={urls[i]} alt="" draggable={false} onError={() => setI(i + 1)} />;
}

export function ZoneCard(props: { zone: Zone; autoFocus: boolean; online: number; plain?: boolean; onOpen: (z: Zone) => void; onFocusZone: (z: Zone) => void }) {
  const { zone, onOpen } = props;
  const k = zone.k || 1;
  const style = { left: zone.x - 48 * k, top: zone.y - zone.r * SIN - 122 * k, width: 96 * k, height: 140 * k };
  const act = () => onOpen(zone);
  if (props.plain) {
    return (
      <div className="fp-card-z plain" style={style}>
        <GameArt key={zone.entry.appid} appid={zone.entry.appid} name={zone.entry.name} />
        <div className="fp-nm">{zone.entry.name}</div>
      </div>
    );
  }
  return (
    <Focusable className="fp-card-z" focusClassName="fp-focus" style={style} onActivate={act} onClick={act}
      onFocus={() => props.onFocusZone(zone)} onGamepadFocus={() => props.onFocusZone(zone)}
      // @ts-ignore autoFocus exists on Focusable at run time
      autoFocus={props.autoFocus}>
      <GameArt key={zone.entry.appid} appid={zone.entry.appid} name={zone.entry.name} />
      <div className="fp-nm">{zone.entry.name}</div>
      {props.online > 0 && <div className={"fp-badge" + (zone.entry.playing > 0 ? " live" : "")}>{props.online}</div>}
    </Focusable>
  );
}

export function ToolButton(props: { icon: JSX.Element; tip: string; onAct: () => void; badge?: number; iconOnly?: boolean }) {
  return (
    <Focusable className="fp-tb" focusClassName="fp-focus" onActivate={props.onAct} onClick={props.onAct}>
      {props.icon}
      {props.iconOnly ? null : <span>{props.tip}</span>}
      {props.badge ? <div className="fp-badge">{props.badge}</div> : null}
    </Focusable>
  );
}

export function Item(props: { title: string; sub?: string; onPick?: () => void; autoFocus?: boolean }) {
  const act = () => { if (props.onPick) props.onPick(); };
  return (
    // @ts-ignore autoFocus exists on Focusable at run time
    <Focusable className="fp-it" focusClassName="fp-focus" onActivate={act} onClick={act} autoFocus={props.autoFocus}>
      <b>{props.title}</b>
      {props.sub ? <span>{props.sub}</span> : null}
    </Focusable>
  );
}

export function Row(props: { f: Friend; line: string; onPick: (id: string) => void; autoFocus?: boolean }) {
  const { f } = props;
  const sc = statusClass(f);
  const act = () => props.onPick(f.steamid);
  return (
    // @ts-ignore autoFocus exists on Focusable at run time
    <Focusable className="fp-row" focusClassName="fp-focus" onActivate={act} onClick={act} autoFocus={props.autoFocus}>
      <Avatar f={f} />
      <div style={{ minWidth: 0 }}>
        <div className={"fp-bn " + sc}>{f.name}</div>
        <div className="fp-bs" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{props.line}</div>
      </div>
    </Focusable>
  );
}


export function drawerHead(d: Exclude<Drawer, null>, entry: RingEntry | undefined): JSX.Element {
  let title = "", sub = "";
  if (d.kind === "friends") { title = "Friends online"; sub = "Select a friend to find them in the plaza."; }
  else if (d.kind === "game") { title = entry ? entry.name : "Game"; sub = entry ? entry.playing + " playing now" : ""; }
  else if (d.kind === "me") { title = "Me"; sub = "Your character, stamps and notes"; }
  else if (d.kind === "stamps") { title = "Stamps and hats"; sub = "Stamps unlock hats you can wear and give away."; }
  else if (d.kind === "inbox") { title = "Notes"; sub = "Notes your friends left for you"; }
  else if (d.kind === "games") { title = "Games"; sub = "Invites and matches with your friends"; }
  else if (d.kind === "play") { title = "Play a game"; sub = "Win points for the point shop."; }
  else if (d.kind === "gift") { title = "Give a hat"; sub = "Pick one of your hats."; }
  else if (d.kind === "report") { title = "Report a player"; sub = "Pick a reason. The person who runs the server will see it."; }
  else { title = "Leave a note"; sub = "Preset notes only."; }
  return (<><h3>{title}</h3><div className="fp-sub">{sub}</div></>);
}


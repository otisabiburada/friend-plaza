// The side menu: friends, a game's players, Me, games, notes, stamps, gifts, reporting.
import { DialogButton, Navigation } from "@decky/ui";
import { api, Friend, RingEntry, State } from "../api";
import type { People } from "./people";
import { GAMES, gameName, HATS, hatName, NOTES, STAMPS } from "../catalog";
import { GAME_ROUTE } from "../GamePage";
import { applySyncResult, net, netChanged, pendingInvites } from "../net";
import { describe, drawerHead, Item, Row } from "./parts";
import type { Drawer } from "./types";

export interface DrawerActions {
  close: () => void;
  open: (d: Drawer) => void;
  pickFriend: (id: string) => void;
  say: (text: string) => void;
  nameOf: (id: string) => string;
  toggleOption: (name: string, current: boolean) => void;
  ackNote: (id: number) => void;
  sendGift: (to: string, hat: number) => void;
  sendNote: (to: string, text: number) => void;
  report: (to: string, reason: string) => void;
  openSettings: () => void;
}

const REASONS: Array<[string, string]> = [["spam", "Spam"], ["harassment", "Harassment"], ["cheating", "Cheating in games"], ["inappropriate", "Inappropriate character or name"], ["other", "Something else"]];

async function refreshNet(): Promise<void> {
  const sr = await api.serverSync([]);
  if (sr.ok) applySyncResult(sr);
}

export function DrawerView(props: { drawer: Exclude<Drawer, null>; prefs: State; people: People; entry: RingEntry | undefined; a: DrawerActions }) {
  const { drawer, prefs, people, entry, a } = props;
  return (
    <div className="fp-drawer">
      {drawerHead(drawer, entry)}
      <div className="fp-list">
        {drawer.kind === "friends" && (people.list.length === 0 ? <Item autoFocus title="Nobody is here" sub="Friends who use Friend Plaza show up while they are online." /> : people.list.map((f, i) => (
          <Row key={f.steamid} f={f} line={describe(f).line} onPick={a.pickFriend} autoFocus={i === 0} />
        )))}
        {drawer.kind === "game" && entry && entry.friends
          .map((id) => people.list.find((f) => f.steamid === id) || (people.me && people.me.steamid === id ? people.me : undefined))
          .filter((f): f is Friend => !!f)
          .map((f, i) => <Row key={f.steamid} f={f} line={describe(f).line} onPick={a.pickFriend} autoFocus={i === 0} />)}
        {drawer.kind === "me" && (
          <>
            <Item autoFocus title={"Points: " + net.me.points} sub={"Spend them at the Friend Store, the building on the left of the plaza. Today: " + net.me.dayPoints + " of " + net.me.dailyCap + " earned from games"} />
            <Item title={"Games (" + net.games.filter((g) => g.status !== "done").length + ")"}
              sub={pendingInvites().length ? pendingInvites().length + " invite" + (pendingInvites().length > 1 ? "s" : "") + " waiting" : "Tic-Tac-Toe, Connect Four, Rock Paper Scissors, Blackjack 21"}
              onPick={() => a.open({ kind: "games" })} />
            <Item title="Stamps and hats" sub={net.me.stamps.length + " stamps, " + net.me.hats.length + " of " + HATS.length + " hats"} onPick={() => a.open({ kind: "stamps" })} />
            <Item title={"Notes from friends (" + net.inbox.length + ")"} sub="Read and clear them" onPick={() => a.open({ kind: "inbox" })} />
            <Item title={"Other plugin users: " + (prefs.show_others ? "shown" : "hidden")} sub="People who use Friend Plaza but are not your Steam friends. Press A to switch."
              onPick={() => a.toggleOption("show_others", prefs.show_others)} />
            <Item title={"Visible to other plugin users: " + (prefs.visible_public ? "yes" : "no")} sub="Lets non-friends who use the plugin see your character. Press A to switch."
              onPick={() => a.toggleOption("visible_public", prefs.visible_public)} />
            <Item title={net.signedIn ? "Online features are on" : "Online features are off"}
              sub={net.signedIn ? "Streak: " + net.me.streak + " day" + (net.me.streak === 1 ? "" : "s") + " - friends met: " + net.me.met + (net.error ? " - " + net.error : "")
                : (net.error || "Open Settings and sign in with Steam.")} />
            <Item title="All settings" sub="Server, privacy, quality, blocked players, help" onPick={a.openSettings} />
          </>
        )}
        {drawer.kind === "games" && (net.games.length === 0 ? <Item autoFocus title="No games yet" sub="Pick a friend who uses the server and press Play." /> :
          net.games.map((g, i) => {
            const other = g.p1 === net.meId ? g.p2 : g.p1;
            const on = a.nameOf(other);
            const done = g.status === "done";
            const res = g.state.result;
            const title = gameName(g.kind) + " with " + on;
            let sub = "";
            if (g.status === "invite") sub = g.p2 === net.meId ? "Invite - press A to accept" : "Waiting for " + on + " to accept - press A to cancel";
            else if (g.status === "active") sub = g.kind === "rps" || g.kind === "bj" ? "Press A to play" : g.turn === net.meId ? "Your turn - press A" : "Their turn - press A to watch";
            else sub = (res ? (res.winner === "draw" ? "Draw" : res.winner === net.meId ? "You won" : on + " won") + (res.points[net.meId] ? " - +" + res.points[net.meId] + " points" : "") : "Finished") + " - press A to look";
            return <Item key={g.id} autoFocus={i === 0} title={title} sub={sub} onPick={async () => {
              if (g.status === "invite") {
                const r = g.p2 === net.meId ? await api.gameAccept(g.id) : await api.gameCancel(g.id);
                if (!r.ok) a.say(r.message || "That didn't work.");
                await refreshNet();
                if (g.p2 === net.meId && r.ok) { net.openGame = g.id; a.close(); Navigation.Navigate(GAME_ROUTE); }
              } else if (!done || res) { net.openGame = g.id; a.close(); Navigation.Navigate(GAME_ROUTE); }
            }} />;
          }))}
        {drawer.kind === "play" && (() => {
          const to = drawer.to;
          const open = net.games.find((g) => g.status !== "done" && ((g.p1 === net.meId && g.p2 === to) || (g.p2 === net.meId && g.p1 === to)));
          if (open) {   // only one open game per pair: show it instead of failing
            const name = a.nameOf(to);
            const go = () => { net.openGame = open.id; a.close(); Navigation.Navigate(GAME_ROUTE); };
            if (open.status === "active") return <Item autoFocus title={"Continue your " + gameName(open.kind) + " with " + name} sub="You already have a game going. Press A to open it." onPick={go} />;
            if (open.p2 === net.meId) return <Item autoFocus title={"Accept " + name + "'s " + gameName(open.kind) + " invite"} sub="They invited you. Press A to accept and play." onPick={async () => { const r = await api.gameAccept(open.id); if (!r.ok) a.say(r.message || "That didn't work."); await refreshNet(); if (r.ok) go(); }} />;
            return <Item autoFocus title={"Cancel the waiting " + gameName(open.kind) + " invite to " + name} sub={name + " has not accepted yet. Press A to cancel it, then invite again."} onPick={async () => { const r = await api.gameCancel(open.id); a.say(r.ok ? "Invite cancelled. You can invite again." : (r.message || "Could not cancel.")); await refreshNet(); a.close(); }} />;
          }
          return GAMES.map((g, i) => (
            <Item key={g.kind} autoFocus={i === 0} title={g.name} sub={g.sub + " - invite " + a.nameOf(to)}
              onPick={async () => {
                a.close();
                const r = await api.gameInvite(to, g.kind);
                a.say(r.ok ? "Invited " + a.nameOf(to) + " to " + g.name : (r.message || "Could not send the invite."));
                if (r.ok) await refreshNet();
              }} />
          ));
        })()}
        {drawer.kind === "stamps" && STAMPS.map((st, i) => {
          const got = net.me.stamps.includes(st.key);
          return <Item key={st.key} autoFocus={i === 0} title={st.name + (got ? " - earned" : "")} sub={(got ? "Hat: " : "Unlocks the hat: ") + hatName(st.hat)} />;
        })}
        {drawer.kind === "inbox" && (net.inbox.length === 0 ? <Item autoFocus title="No notes" sub="Friends can leave you a note from their action bar." /> :
          net.inbox.map((n, i) => (
            <Item key={n.id} autoFocus={i === 0} title={a.nameOf(n.from) + ": " + (NOTES[(n.data && n.data.text) || 0] || "")} sub="Press A to clear"
              onPick={() => { net.inbox = net.inbox.filter((x) => x.id !== n.id); a.ackNote(n.id); netChanged(); }} />
          )))}
        {drawer.kind === "gift" && (net.me.hats.length === 0 ? <Item autoFocus title="No hats to give yet" sub="Earn hats from stamps first (Me > Stamps and hats)." /> :
          HATS.filter((h) => net.me.hats.includes(h.id)).map((h, i) => (
            <Item key={h.id} autoFocus={i === 0} title={h.name} sub={"Give a copy to " + a.nameOf(drawer.to)} onPick={() => { a.close(); a.sendGift(drawer.to, h.id); }} />
          )))}
        {drawer.kind === "note" && NOTES.map((t, i) => (
          <Item key={i} autoFocus={i === 0} title={t} sub={"Leave this note for " + a.nameOf(drawer.to)} onPick={() => { a.close(); a.sendNote(drawer.to, i); }} />
        ))}
        {drawer.kind === "report" && REASONS.map(([code, label], i) => (
          <Item key={code} autoFocus={i === 0} title={label} sub={"Report " + a.nameOf(drawer.to) + " to whoever runs the server"} onPick={() => { a.close(); a.report(drawer.to, code); }} />
        ))}
        <DialogButton style={{ marginTop: 10 }} onClick={a.close} onOKActionDescription="Close">Close</DialogButton>
      </div>
    </div>
  );
}


// If a screen crashes, show what happened and a way out instead of a blank page.
import { Focusable, Navigation } from "@decky/ui";
import React from "react";
import { Stage } from "./Stage";

interface State { error: Error | null }

class Boundary extends React.Component<{ name: string; children?: React.ReactNode }, State> {
  state: State = { error: null };
  static getDerivedStateFromError(error: Error): State { return { error }; }
  componentDidCatch(error: Error): void { console.error("[Friend Plaza] " + this.props.name + " crashed:", error); }
  render(): React.ReactNode {
    if (!this.state.error) return this.props.children;
    const btn = (label: string, f: () => void) => (
      <Focusable style={{ padding: "10px 22px", borderRadius: 3, background: "rgba(255,255,255,.12)", color: "#dfe6ec", fontWeight: 700 }} focusClassName="fp-focus" onActivate={f} onClick={f}>{label}</Focusable>
    );
    return (
      <div style={{ marginTop: 40, height: "calc(100% - 40px)", boxSizing: "border-box", padding: "40px 48px 90px", background: "#0b1017", color: "#c6d4df", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 10 }}>This screen ran into a problem</div>
        <div style={{ lineHeight: 1.5, marginBottom: 6 }}>{this.props.name} could not be shown. Nothing was lost.</div>
        <div style={{ fontSize: 12.5, color: "#8f98a0", marginBottom: 22 }}>{String(this.state.error.message || this.state.error).slice(0, 240)}</div>
        <div style={{ display: "flex", gap: 10 }}>
          {btn("Try again", () => this.setState({ error: null }))}
          {btn("Back", () => Navigation.NavigateBack())}
        </div>
        <div style={{ fontSize: 12.5, color: "#8f98a0", marginTop: 22 }}>If it keeps happening: open Settings, then Help, then Save diagnostics, and send that file.</div>
      </div>
    );
  }
}

/** Wraps a screen so it fits the room it gets, and so a crash in it can never take the rest of Steam's UI down. */
export function guarded(name: string, Screen: () => JSX.Element): () => JSX.Element {
  return function Guarded() { return <Stage><Boundary name={name}><Screen /></Boundary></Stage>; };
}

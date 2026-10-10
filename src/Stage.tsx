// Every screen is laid out for a 1280 x 800 Deck screen. Steam may give a plugin page less room than that (a smaller
// area, or a zoomed interface), which made buttons overlap and menus get cut off. <Stage> measures the room we really
// have and scales the whole screen to fit, so it always looks the same, only smaller.
import { ReactNode, useEffect, useRef, useState } from "react";
import { DESIGN_H, DESIGN_W, fitScale, stageScale } from "./stageScale";

export function Stage(props: { children?: ReactNode }) {
  const probe = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: DESIGN_W, h: DESIGN_H });

  useEffect(() => {
    const el = probe.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth || window.innerWidth || DESIGN_W, h = el.clientHeight || window.innerHeight || DESIGN_H;
      setBox((p) => (p.w === w && p.h === h ? p : { w, h }));
    };
    measure();
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") { ro = new ResizeObserver(measure); ro.observe(el); }
    window.addEventListener("resize", measure);
    return () => { if (ro) ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);

  const k = fitScale(box.w, box.h);
  stageScale.k = k;
  const left = Math.max(0, (box.w - DESIGN_W * k) / 2);
  return (
    <div ref={probe} style={{ position: "fixed", left: 0, top: 0, right: 0, bottom: 0, overflow: "hidden", background: "#0b1017" }}>
      <div style={{ position: "absolute", left, top: 0, width: DESIGN_W, height: DESIGN_H, transform: "scale(" + k + ")", transformOrigin: "0 0" }}>
        {props.children}
      </div>
    </div>
  );
}

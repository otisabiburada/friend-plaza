import { useEffect, useRef } from "react";
import { Look, makeWalker } from "./chars";
import { Scene3D } from "./scene3d";

/** A small 3D view of one character that slowly turns from side to side. */
export function FriendPreview(props: { look: Look; width: number; height: number; zoom?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lookRef = useRef(props.look);
  lookRef.current = props.look;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let scene: Scene3D | null = null;
    try { scene = new Scene3D(canvas, true); } catch (e) { scene = null; }
    if (!scene) return;
    const sc = scene;
    const { width, height } = props;
    sc.resize(width, height);
    sc.setZoom(props.zoom || 5.5);
    const w = makeWalker({ steamid: "76561197960265728", name: "me", state: "online", playing: false } as never, false, width / 2, height / 2);
    w.x = width / 2; w.y = height * 0.57; w.dir = 1;
    let raf = 0, last = performance.now(), t = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now; t += dt;
      w.look = lookRef.current;
      sc.frame([w], { selected: null, t, dt, low: false, spin: Math.sin(t * 0.8) * 0.8 });
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); sc.dispose(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <canvas ref={canvasRef} width={props.width} height={props.height} style={{ width: props.width, height: props.height, borderRadius: 4, display: "block" }} />;
}

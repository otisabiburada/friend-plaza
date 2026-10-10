// A real 3D plaza (three.js / WebGL): Cartoon-style characters, a paved floor, hedges and trees.
//
// The page keeps all positions in screen pixels (x right, y down). The camera is orthographic and tilted, so a
// character standing at screen (x, y) is placed on the ground at world (x, 0, y / sin(tilt)). That keeps hit
// testing, the speech bubble and the game tiles (plain HTML) lined up with the 3D world.
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import type { Look, Walker } from "./chars";
import { scaleAt } from "./chars";
import { stageScale } from "./stageScale";
import { AURAS, FLAG_H, FLAG_W, flagById, flagGrid, teeById, TEE_H, TEE_W } from "./cosmetics";

export const TILT = (38 * Math.PI) / 180;
export const SIN = Math.sin(TILT);
export const COS = Math.cos(TILT);
/** Character size: world units per unit of the model (about 50 units tall). */
export const CHAR_K = 1.15;

// ---------------------------------------------------------------------------------------------------------------
// Geometry helpers (everything static is merged with vertex colours, so a character is only a handful of meshes)
// ---------------------------------------------------------------------------------------------------------------

function mat(x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0): THREE.Matrix4 {
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
}

function paint(g: THREE.BufferGeometry, color: THREE.ColorRepresentation, m?: THREE.Matrix4): THREE.BufferGeometry {
  const geo = g.clone();
  if (m) geo.applyMatrix4(m);
  geo.deleteAttribute("uv");
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute("color", new THREE.BufferAttribute(arr, 3));
  return geo;
}

function merge(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const g = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  return g || new THREE.BufferGeometry();
}

function shade(hex: string, f: number): string {
  const c = new THREE.Color(hex);
  c.multiplyScalar(f);
  return "#" + c.getHexString();
}

const sphere = (r: number, ws = 18, hs = 14) => new THREE.SphereGeometry(r, ws, hs);
const capsule = (r: number, len: number) => new THREE.CapsuleGeometry(r, len, 4, 12);

// ---------------------------------------------------------------------------------------------------------------
// The face is painted on a transparent patch of sphere that sits just above the head
// ---------------------------------------------------------------------------------------------------------------

const HR = 11; // head radius
const PHI0 = Math.PI / 2 - 0.95, PHI_LEN = 1.9, TH0 = 0.9, TH_LEN = 1.5;
const TW = 256, TH = 200;
const UNIT = TW / (PHI_LEN * HR); // canvas pixels per head unit

/** Head-front point (x right, y up, in head units) to canvas pixels. */
function P(x: number, y: number): [number, number] {
  const yy = Math.max(-HR + 0.01, Math.min(HR - 0.01, y));
  const z = Math.sqrt(Math.max(0.01, HR * HR - x * x - yy * yy));
  const th = Math.acos(yy / HR);
  const phi = Math.atan2(z, -x);
  return [((phi - PHI0) / PHI_LEN) * TW, ((th - TH0) / TH_LEN) * TH];
}

function ellipse(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, fill: string): void {
  const [cx, cy] = P(x, y), [ax] = P(x + w, y), [, by] = P(x, y + h);
  ctx.beginPath();
  ctx.ellipse(cx, cy, Math.abs(ax - cx), Math.abs(by - cy), 0, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
}

function stroke(ctx: CanvasRenderingContext2D, pts: Array<[number, number]>, width: number, color: string, close = false): void {
  ctx.beginPath();
  pts.forEach(([x, y], i) => { const [px, py] = P(x, y); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); });
  if (close) ctx.closePath();
  ctx.lineWidth = width * UNIT;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = color;
  ctx.stroke();
}

function fillPoly(ctx: CanvasRenderingContext2D, pts: Array<[number, number]>, color: string): void {
  ctx.beginPath();
  pts.forEach(([x, y], i) => { const [px, py] = P(x, y); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); });
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function arc(cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, n = 14): Array<[number, number]> {
  const out: Array<[number, number]> = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    out.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]);
  }
  return out;
}

const INK = "#2a2220";
const LIP = "#6b2f2f";

function paintFace(ctx: CanvasRenderingContext2D, f: number): void {
  const red = "rgba(224,52,60,0.85)", ink = "rgba(30,30,40,0.8)";
  if (f === 1) { for (const sx of [-1, 1]) { stroke(ctx, [[sx * 6.0, -2.6], [sx * 8.3, -2.2]], 0.5, red); stroke(ctx, [[sx * 6.1, -3.7], [sx * 8.2, -4.0]], 0.5, red); } }
  else if (f === 2) {
    ellipse(ctx, 0, -2.9, 0.9, 0.65, "#ff8fa8");
    for (const sx of [-1, 1]) for (const [dy, ey] of [[-3.2, -2.2], [-3.8, -3.8], [-4.4, -5.4]]) stroke(ctx, [[sx * 5.6, dy], [sx * 9.6, ey]], 0.28, ink);
  } else if (f === 3) {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.7 : 1.7; pts.push([5.0 + Math.cos(a) * r, -3.8 + Math.sin(a) * r]); }
    fillPoly(ctx, pts, "#5ad2ff");
  } else if (f === 4) fillPoly(ctx, [[5.8, 3.8], [7.6, 0.6], [6.3, 0.6], [8.0, -3.2], [5.0, 0.9], [6.3, 0.9]], "#ffd23f");
  else if (f === 5) { ellipse(ctx, 0, -2.7, 1.4, 1.1, "#e8303c"); ellipse(ctx, -0.4, -2.3, 0.35, 0.3, "rgba(255,255,255,0.7)"); }
  else if (f === 6) { for (const [x, y] of [[-3.2, -2.4], [-4.6, -3.0], [-2.4, -3.4], [3.2, -2.4], [4.6, -3.0], [2.4, -3.4], [-5.4, -2.2], [5.4, -2.2], [-1.0, -2.2], [1.0, -2.4]]) ellipse(ctx, x, y, 0.28, 0.28, "rgba(120,70,40,0.75)"); }
  else if (f === 7) { stroke(ctx, [[-6.4, 3.9], [-3.4, 1.2]], 0.4, "rgba(214,120,116,0.9)"); stroke(ctx, [[-5.4, 3.2], [-4.6, 1.9]], 0.3, "rgba(214,120,116,0.9)"); stroke(ctx, [[-4.6, 3.4], [-5.6, 2.2]], 0.3, "rgba(214,120,116,0.9)"); }
  else if (f === 8) { for (const sx of [-1, 1]) ellipse(ctx, sx * 4.3, -2.6, 2.5, 0.65, "rgba(20,20,26,0.6)"); stroke(ctx, [[-6.5, 5.6], [6.5, 5.6]], 0.9, "rgba(61,155,233,0.85)"); }
}

function drawFace(look: Look, closed: boolean): HTMLCanvasElement {
  const cv = document.createElement("canvas");
  cv.width = TW; cv.height = TH;
  const ctx = cv.getContext("2d");
  if (!ctx) return cv;
  const ex = 4.3, ey = -0.8;
  const brow = shade(look.hair, 0.75);

  if (look.blush) { ellipse(ctx, -6.9, -3.6, 1.9, 1.15, "rgba(255,110,125,0.34)"); ellipse(ctx, 6.9, -3.6, 1.9, 1.15, "rgba(255,110,125,0.34)"); }

  for (const sx of [-1, 1]) {
    const x = sx * ex;
    if (closed) {
      stroke(ctx, arc(x, ey + 0.3, 1.5, 0.75, Math.PI * 1.05, Math.PI * 1.95), 0.5, INK);
      continue;
    }
    switch (look.eyes) {
      case 1: ellipse(ctx, x, ey, 1.45, 1.45, INK); ellipse(ctx, x + 0.45, ey + 0.55, 0.42, 0.42, "#fff"); break;
      case 2: stroke(ctx, arc(x, ey - 0.5, 1.7, 1.4, 0.12 * Math.PI, 0.88 * Math.PI), 0.55, INK); break;
      case 3:
        ellipse(ctx, x, ey, 1.55, 2.2, INK);
        ellipse(ctx, x + 0.5, ey + 0.8, 0.55, 0.6, "#fff");
        ellipse(ctx, x - 0.5, ey - 0.75, 0.28, 0.3, "rgba(255,255,255,0.8)");
        break;
      case 4:
        ellipse(ctx, x, ey, 1.1, 1.7, INK); ellipse(ctx, x + 0.4, ey + 0.6, 0.36, 0.4, "#fff");
        stroke(ctx, [[x + sx * 1.0, ey + 1.2], [x + sx * 2.1, ey + 1.9]], 0.38, INK);
        stroke(ctx, [[x + sx * 0.9, ey + 0.4], [x + sx * 2.3, ey + 0.7]], 0.34, INK);
        break;
      default: ellipse(ctx, x, ey, 1.3, 2.0, INK); ellipse(ctx, x + 0.45, ey + 0.75, 0.42, 0.5, "#fff"); break;
    }
  }

  // eyebrows
  const by = ey + 3.5;
  for (const sx of [-1, 1]) {
    const x = sx * ex;
    if (look.brows === 0) stroke(ctx, [[x - 1.7, by], [x + 1.7, by]], 0.6, brow);
    else if (look.brows === 1) stroke(ctx, arc(x, by - 1.4, 1.9, 1.5, 0.2 * Math.PI, 0.8 * Math.PI, 10), 0.6, brow);
    else if (look.brows === 2) stroke(ctx, [[x - sx * 1.7, by - 0.5], [x + sx * 1.7, by + 0.45]], 0.62, brow);
  }

  // mouth
  const my = -5.5;
  if (closed) {
    ellipse(ctx, 0, my, 0.85, 0.65, LIP);
  } else {
    switch (look.mouth) {
      case 1:
        fillPoly(ctx, [[-2.9, my + 0.9], [2.9, my + 0.9], ...arc(0, my + 0.9, 2.9, 2.4, 0, -Math.PI, 14).map(([x, y]): [number, number] => [x, y])], "#6b1f2a");
        fillPoly(ctx, [[-2.5, my + 0.9], [2.5, my + 0.9], [2.3, my + 0.1], [-2.3, my + 0.1]], "#fff");
        stroke(ctx, [[-2.9, my + 0.9], [2.9, my + 0.9]], 0.25, LIP);
        break;
      case 2: stroke(ctx, arc(0, my + 0.8, 1.4, 0.9, 1.2 * Math.PI, 1.8 * Math.PI, 8), 0.5, LIP); break;
      case 3:
        stroke(ctx, arc(-1.1, my + 0.5, 1.1, 0.9, Math.PI, 2 * Math.PI, 8), 0.45, LIP);
        stroke(ctx, arc(1.1, my + 0.5, 1.1, 0.9, Math.PI, 2 * Math.PI, 8), 0.45, LIP);
        break;
      case 4: stroke(ctx, [[-2.1, my + 0.1], [-0.6, my - 0.35], [1.0, my - 0.2], [2.5, my + 0.9]], 0.5, LIP); break;
      default: stroke(ctx, arc(0, my + 1.6, 2.7, 1.8, 1.22 * Math.PI, 1.78 * Math.PI, 12), 0.55, LIP); break;
    }
  }
  paintFace(ctx, look.face || 0);
  if (look.stache) {
    ellipse(ctx, -1.6, -3.35, 1.9, 0.85, shade(look.hair, 0.8));
    ellipse(ctx, 1.6, -3.35, 1.9, 0.85, shade(look.hair, 0.8));
  }
  return cv;
}

function faceTexture(look: Look, closed: boolean): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(drawFace(look, closed));
  t.colorSpace = THREE.SRGBColorSpace;
  t.generateMipmaps = false;
  t.minFilter = THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  return t;
}

// ---------------------------------------------------------------------------------------------------------------
// Character model
// ---------------------------------------------------------------------------------------------------------------

function headGeometry(look: Look): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const skin = look.skin, hair = look.hair;
  parts.push(paint(sphere(HR, 28, 20), skin));
  parts.push(paint(sphere(2.2, 10, 8), skin, mat(-10.6, -1.2, 0, 0.7, 1, 0.9)));
  parts.push(paint(sphere(2.2, 10, 8), skin, mat(10.6, -1.2, 0, 0.7, 1, 0.9)));
  parts.push(paint(sphere(1.55, 12, 10), shade(skin, 0.97), mat(0, -2.5, HR - 0.1, 1, 0.9, 0.95)));

  const cap = (thetaLen: number, tilt: number, r = HR * 1.07, shift = 0) => {
    const g = new THREE.SphereGeometry(r, 26, 16, 0, Math.PI * 2, 0, thetaLen);
    return paint(g, hair, mat(0, shift, 0, 1, 1, 1, tilt));
  };
  switch (look.hairStyle) {
    case 0: parts.push(cap(0.54 * Math.PI, -0.45)); break;
    case 1:
      parts.push(cap(0.56 * Math.PI, -0.5));
      parts.push(paint(sphere(HR * 1.08, 22, 16), hair, mat(0, -2.5, -3.2, 1, 0.92, 0.82)));
      break;
    case 2:
      parts.push(cap(0.54 * Math.PI, -0.45));
      parts.push(paint(sphere(4.3, 14, 12), hair, mat(0, 11.6, -2.4)));
      break;
    case 3:
      parts.push(paint(sphere(1.7, 10, 8), hair, mat(0, HR * 0.95, 1.2, 0.8, 1.5, 0.8)));
      parts.push(paint(sphere(2.1, 10, 8), hair, mat(-HR * 0.93, 1.0, -2.0)));
      parts.push(paint(sphere(2.1, 10, 8), hair, mat(HR * 0.93, 1.0, -2.0)));
      break;
    case 4: {
      parts.push(cap(0.5 * Math.PI, -0.4));
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        const rr = i === 0 ? 0 : 6.4;
        const x = Math.cos(a) * rr, z = Math.sin(a) * rr - 1.5;
        parts.push(paint(new THREE.ConeGeometry(2.6, 7, 8), hair, mat(x, HR * 0.95 + 1.5, z, 1, 1, 1, Math.sin(a) * 0.45, 0, -Math.cos(a) * 0.45)));
      }
      break;
    }
    case 5:
      parts.push(cap(0.54 * Math.PI, -0.45));
      parts.push(paint(sphere(2.2, 10, 8), shade(hair, 0.8), mat(0, 4.5, -HR * 0.98)));
      parts.push(paint(capsule(2.7, 8), hair, mat(0, -1.2, -HR - 2.5, 1, 1, 1, -0.25)));
      break;
    case 6:
      parts.push(paint(sphere(14.2, 24, 18), hair, mat(0, 3.2, -4.4, 1, 0.97, 0.95)));
      parts.push(cap(0.44 * Math.PI, -0.3));
      break;
    case 7:
      for (let i = 0; i < 7; i++) {
        const a = 0.3 + (i / 6) * 2.4; // front to back over the top
        const rr = HR + 1.2;
        parts.push(paint(capsule(1.8, 3.4), hair, mat(0, Math.sin(a) * rr, Math.cos(a) * rr, 1, 1, 1, Math.PI / 2 - a)));
      }
      break;
    default: // long hair
      parts.push(cap(0.56 * Math.PI, -0.5));
      parts.push(paint(sphere(HR * 1.02, 20, 16), hair, mat(0, -9.5, -5.2, 1.0, 1.9, 0.56)));
      break;
  }
  const hv = look.hat;
  if (hv === 1) {
    parts.push(paint(new THREE.SphereGeometry(HR * 1.1, 24, 14, 0, Math.PI * 2, 0, 0.46 * Math.PI), "#e8504b", mat(0, 0.4, 0)));
    parts.push(paint(new THREE.TorusGeometry(HR * 1.1 * Math.sin(0.46 * Math.PI) - 0.3, 1.3, 8, 32), "#c93d39", mat(0, 0.4 + HR * 1.1 * Math.cos(0.46 * Math.PI), 0, 1, 1, 1, Math.PI / 2)));
    parts.push(paint(sphere(2.6, 12, 10), "#ffffff", mat(0, HR * 1.1 + 1.2, 0)));
  } else if (hv === 2) {
    parts.push(paint(new THREE.SphereGeometry(HR * 1.1, 24, 14, 0, Math.PI * 2, 0, 0.5 * Math.PI), "#3d6fb5", mat(0, 0.6, 0, 1, 1, 1, -0.3)));
    parts.push(paint(sphere(1, 16, 8), "#2d5490", mat(0, 3.6, 10.6, 6.8, 0.8, 7.2, 0.18)));
  } else if (hv === 3) {
    parts.push(paint(new THREE.CylinderGeometry(7.2, 7.8, 3.6, 18), "#ffcf40", mat(0, 10.6, 0)));
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * Math.PI * 2;
      parts.push(paint(new THREE.ConeGeometry(1.5, 4, 6), "#ffcf40", mat(Math.cos(a) * 6.9, 14.3, Math.sin(a) * 6.9)));
      parts.push(paint(sphere(0.9, 8, 6), "#ff5c7a", mat(Math.cos(a) * 6.9, 16.5, Math.sin(a) * 6.9)));
    }
    parts.push(paint(sphere(1.1, 8, 6), "#4aa3ff", mat(0, 10.6, 7.7)));
  } else if (hv === 4) {
    parts.push(paint(new THREE.CylinderGeometry(5.8, 5.8, 9, 22), "#2a2a35", mat(0, 15.4, 0)));
    parts.push(paint(new THREE.CylinderGeometry(9.4, 9.4, 0.9, 26), "#2a2a35", mat(0, 10.8, 0)));
    parts.push(paint(new THREE.CylinderGeometry(5.9, 5.9, 1.7, 22), "#d94a4a", mat(0, 12.2, 0)));
  } else if (hv === 5) {
    for (const sx of [-1, 1]) {
      parts.push(paint(new THREE.ConeGeometry(3.5, 6.5, 4), hair, mat(sx * 6.6, 10.2, 0.5, 1, 1, 0.6, 0, 0, -sx * 0.35)));
      parts.push(paint(new THREE.ConeGeometry(2, 4.2, 4), "#ffb3c1", mat(sx * 6.4, 9.6, 1.4, 1, 1, 0.5, 0, 0, -sx * 0.35)));
    }
  } else if (hv === 6) {
    parts.push(paint(new THREE.TorusGeometry(HR * 1.0 + 0.2, 1.0, 8, 36), "#ff5c7a", mat(0, 5.2, 0, 1, 1, 1, Math.PI / 2 + 0.2)));
    parts.push(paint(sphere(2.2, 10, 8), "#ff5c7a", mat(8.2, 5.8, 6.2, 1, 0.8, 0.7)));
  } else if (hv === 7) {
    parts.push(paint(new THREE.ConeGeometry(5.2, 13, 18), "#a259ff", mat(0, 16.8, 0, 1, 1, 1, 0, 0, 0.1)));
    parts.push(paint(new THREE.TorusGeometry(3.6, 0.55, 6, 18), "#ffd23f", mat(0.4, 15.6, 0, 1, 1, 1, Math.PI / 2)));
    parts.push(paint(sphere(1.7, 10, 8), "#ffd23f", mat(1.4, 23.6, 0)));
  } else if (hv === 8) {
    parts.push(paint(new THREE.CylinderGeometry(12.2, 12.2, 0.9, 28), "#8a5a2b", mat(0, 10.6, 0, 1, 1, 0.9)));
    parts.push(paint(new THREE.CylinderGeometry(5.6, 6.4, 5.2, 20), "#a06a35", mat(0, 13.4, 0)));
    parts.push(paint(new THREE.CylinderGeometry(6.5, 6.5, 1.2, 20), "#4a2f14", mat(0, 11.6, 0)));
  } else if (hv === 9) {
    parts.push(paint(new THREE.CylinderGeometry(6.2, 6.4, 5, 20), "#ffffff", mat(0, 12.6, 0)));
    parts.push(paint(sphere(7.4, 16, 12), "#ffffff", mat(0, 18.6, 0, 1, 0.85, 1)));
    parts.push(paint(new THREE.CylinderGeometry(6.5, 6.5, 1.4, 20), "#e9edf2", mat(0, 10.8, 0)));
  } else if (hv === 10) {
    parts.push(paint(new THREE.CylinderGeometry(11.4, 11.4, 0.7, 28), "#3b3a9e", mat(0, 10.4, 0)));
    parts.push(paint(new THREE.ConeGeometry(7.4, 19, 20), "#4a49c4", mat(0, 20.4, 0, 1, 1, 1, 0, 0, 0.12)));
    for (const [x, y, z] of [[3.4, 17, 5.6], [-3.6, 21, 3.4], [1.2, 13.4, 7]]) parts.push(paint(sphere(1.1, 8, 6), "#ffd23f", mat(x, y, z)));
  } else if (hv === 11) {
    parts.push(paint(sphere(1, 20, 12), "#23252e", mat(0, 11.8, 0, 12.6, 4.2, 7.4)));
    parts.push(paint(sphere(1.7, 10, 8), "#f2f2f2", mat(0, 12.2, 7.2, 1, 1, 0.5)));
    parts.push(paint(sphere(1, 12, 8), "#d94a4a", mat(0, 9.4, 6.2, 8, 0.8, 1.4)));
  } else if (hv === 12) {
    parts.push(paint(new THREE.TorusGeometry(5.6, 0.95, 8, 32), "#ffe27a", mat(0, 19.6, -1, 1, 1, 1, Math.PI / 2 + 0.15)));
  } else if (hv === 13) {
    for (const sx of [-1, 1]) {
      parts.push(paint(capsule(2.4, 9), "#ffffff", mat(sx * 3.6, 18.4, -0.6, 1, 1, 0.6, 0, 0, -sx * 0.12)));
      parts.push(paint(capsule(1.2, 7), "#ffb3c1", mat(sx * 3.6, 18.2, 0.4, 1, 1, 0.4, 0, 0, -sx * 0.12)));
    }
  } else if (hv === 14) {
    parts.push(paint(new THREE.ConeGeometry(8.2, 15, 20), "#d93a3a", mat(0, 16.8, -1.8, 1, 1, 1, -0.45)));
    parts.push(paint(new THREE.TorusGeometry(9.4, 1.7, 10, 32), "#ffffff", mat(0, 10.6, 0, 1, 1, 1, Math.PI / 2 - 0.12)));
    parts.push(paint(sphere(2.4, 10, 8), "#ffffff", mat(0, 22.6, -9.4)));
  } else if (hv === 15) {
    parts.push(paint(new THREE.SphereGeometry(HR * 1.1, 24, 14, 0, Math.PI * 2, 0, 0.48 * Math.PI), "#7c8794", mat(0, 0.6, 0)));
    parts.push(paint(new THREE.TorusGeometry(HR * 1.1 * Math.sin(0.48 * Math.PI) - 0.2, 1.1, 8, 32), "#5d6670", mat(0, 0.6 + HR * 1.1 * Math.cos(0.48 * Math.PI), 0, 1, 1, 1, Math.PI / 2)));
    for (const sx of [-1, 1]) parts.push(paint(new THREE.ConeGeometry(2, 8, 10), "#f1e6c8", mat(sx * 11.6, 8.2, 0, 1, 1, 1, 0, 0, -sx * 0.9)));
  } else if (hv === 16) {
    parts.push(paint(new THREE.SphereGeometry(HR * 1.12, 24, 14, 0, Math.PI * 2, 0, 0.45 * Math.PI), "#aab4c0", mat(0, 0.6, 0)));
    parts.push(paint(sphere(1, 12, 8), "#20242c", mat(0, 5.0, 10.4, 8.2, 0.7, 1.2)));
    parts.push(paint(new THREE.ConeGeometry(1.6, 8, 8), "#d94a4a", mat(0, 15.4, -2, 1, 1, 1, -0.5)));
  } else if (hv === 17) {
    parts.push(paint(new THREE.SphereGeometry(HR * 1.15, 24, 14, 0, Math.PI * 2, 0, 0.4 * Math.PI), "#f1f4f8", mat(0, 0.2, 0)));
    parts.push(paint(new THREE.TorusGeometry(HR * 1.15 * Math.sin(0.4 * Math.PI) - 0.2, 0.9, 8, 32), "#46b8ff", mat(0, 0.2 + HR * 1.15 * Math.cos(0.4 * Math.PI), 0, 1, 1, 1, Math.PI / 2)));
    parts.push(paint(new THREE.CylinderGeometry(0.4, 0.4, 5, 6), "#c7ced6", mat(6.4, 16, 0)));
    parts.push(paint(sphere(1.1, 8, 6), "#ff5c5c", mat(6.4, 18.8, 0)));
  } else if (hv === 18) {
    parts.push(paint(new THREE.CylinderGeometry(7.6, 8.6, 4.6, 22), "#f4f6f8", mat(0, 12.2, 0)));
    parts.push(paint(new THREE.CylinderGeometry(8.7, 8.7, 1.0, 22), "#2d4f9c", mat(0, 10.6, 0)));
    parts.push(paint(new THREE.CylinderGeometry(7.8, 7.8, 0.6, 22), "#f4f6f8", mat(0, 14.6, 0)));
  } else if (hv === 19) {
    parts.push(paint(new THREE.TorusGeometry(HR * 0.98, 0.8, 8, 36), "#3f9a46", mat(0, 6.2, 0, 1, 1, 1, Math.PI / 2 + 0.12)));
    const cols = ["#ff6fb0", "#ffd23f", "#ffffff", "#b58cff", "#ff8a4a", "#ff6fb0", "#ffd23f", "#ffffff"];
    cols.forEach((c, k) => { const a = (k / cols.length) * Math.PI * 2; parts.push(paint(sphere(1.6, 8, 6), c, mat(Math.cos(a) * (HR + 0.4), 6.8 + Math.sin(a) * 0.0, Math.sin(a) * (HR + 0.4)))); });
  } else if (hv === 20) {
    parts.push(paint(sphere(1, 20, 12), "#2f3a8f", mat(1.4, 11.6, 0, 11.6, 3.6, 11.6, 0, 0, -0.18)));
    parts.push(paint(sphere(0.8, 8, 6), "#2f3a8f", mat(1.6, 15.6, 0)));
  } else if (hv === 21) {
    parts.push(paint(new THREE.SphereGeometry(HR * 1.1, 24, 14, 0, Math.PI * 2, 0, 0.5 * Math.PI), "#3aa0e8", mat(0, 0.4, 0)));
    parts.push(paint(new THREE.CylinderGeometry(0.5, 0.5, 2.4, 6), "#555", mat(0, 12.8, 0)));
    parts.push(paint(sphere(1, 8, 6), "#ef5b5b", mat(3.2, 14.2, 0, 3.4, 0.35, 1)));
    parts.push(paint(sphere(1, 8, 6), "#ffd23f", mat(-3.2, 14.2, 0, 3.4, 0.35, 1)));
  } else if (hv === 22) {
    parts.push(paint(new THREE.ConeGeometry(6.4, 15, 20), "#ff7a1a", mat(0, 17.6, 0)));
    parts.push(paint(new THREE.CylinderGeometry(3.4, 4.2, 1.8, 20), "#ffffff", mat(0, 16.6, 0)));
    parts.push(paint(new THREE.CylinderGeometry(7.6, 7.6, 1.0, 20), "#ff7a1a", mat(0, 10.6, 0)));
  } else if (hv === 23) {
    parts.push(paint(new THREE.SphereGeometry(HR * 1.32, 26, 14, 0, Math.PI * 2, 0, 0.42 * Math.PI), "#e03c3c", mat(0, 3.4, 0)));
    for (const [x, y, z, r] of [[0, 14.8, 1, 2.2], [-6, 12, 3, 1.8], [6.2, 12.2, 2, 1.9], [0, 12.4, 8, 1.7], [-3, 13.6, -6, 1.6]]) parts.push(paint(sphere(r, 8, 6), "#ffffff", mat(x, y, z, 1, 0.5, 1)));
  } else if (hv === 24) {
    parts.push(paint(sphere(1, 18, 12), "#ff8a1f", mat(0, 15, 0, 8.4, 6.2, 8.4)));
    parts.push(paint(new THREE.CylinderGeometry(0.9, 1.2, 3, 8), "#3f7a2c", mat(0, 21.2, 0)));
    parts.push(paint(sphere(1, 8, 6), "#e87a14", mat(0, 15, 0, 8.7, 5.6, 2.6)));
  } else if (hv === 25) {
    for (const sx of [-1, 1]) parts.push(paint(new THREE.ConeGeometry(1.9, 7.4, 10), "#d9302f", mat(sx * 6.0, 13.2, 1.0, 1, 1, 1, 0, 0, -sx * 0.3)));
    parts.push(paint(new THREE.TorusGeometry(HR * 1.0 + 0.1, 0.7, 8, 36), "#3a1010", mat(0, 5.4, 0, 1, 1, 1, Math.PI / 2 + 0.15)));
  } else if (hv === 26) {
    parts.push(paint(sphere(1, 16, 12), "#ffd93d", mat(0, 12.4, -1, 5.6, 4.0, 6.0)));
    parts.push(paint(sphere(3.4, 12, 10), "#ffd93d", mat(0, 16.2, 2.4)));
    parts.push(paint(sphere(1, 8, 6), "#ff8a1f", mat(0, 15.6, 6.4, 2.2, 0.9, 1.9)));
    for (const sx of [-1, 1]) parts.push(paint(sphere(0.55, 6, 5), "#1a1a1a", mat(sx * 1.6, 17.2, 5.0)));
  } else if (hv === 27) {
    parts.push(paint(new THREE.TorusGeometry(HR * 1.03, 2.0, 8, 36), "#1c1f27", mat(0, 3.6, 0, 1, 1, 1, Math.PI / 2 + 0.05)));
    parts.push(paint(sphere(1, 10, 8), "#9aa6b4", mat(0, 3.8, HR + 1.6, 3.4, 1.6, 0.5)));
    for (const sx of [-1, 1]) parts.push(paint(capsule(0.9, 5), "#1c1f27", mat(sx * 2 + 2, 2.6, -HR - 2.8, 1, 1, 1, 0.3, 0, sx * 0.6)));
  }
  if (look.acc === 5) {
    parts.push(paint(new THREE.TorusGeometry(HR * 1.05 + 0.4, 0.95, 8, 32, Math.PI), "#2a2f3a", mat(0, 0.4, 0, 1, 1, 1, 0, 0, 0)));
    for (const sx of [-1, 1]) parts.push(paint(new THREE.CylinderGeometry(3.5, 3.5, 2.8, 16), "#66c0f4", mat(sx * (HR * 1.05 + 0.9), 0.2, 0, 1, 1, 1, 0, 0, Math.PI / 2)));
  }
  if (look.glasses) {
    const frame = "#23262d";
    for (const sx of [-1, 1]) parts.push(paint(new THREE.TorusGeometry(3.3, 0.42, 8, 24), frame, mat(sx * 4.4, -0.3, HR - 0.9)));
    parts.push(paint(new THREE.CylinderGeometry(0.35, 0.35, 2.2, 6), frame, mat(0, 0.6, HR - 0.7, 1, 1, 1, 0, 0, Math.PI / 2)));
  }
  return merge(parts);
}

function torsoGeometry(look: Look, seed: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  parts.push(paint(capsule(5.6, 3.6), look.shirt, mat(0, 21.2, 0, 1, 1, 0.82)));
  parts.push(paint(sphere(5.65, 18, 12), look.pants, mat(0, 15.0, 0, 1, 0.62, 0.84)));
  parts.push(paint(sphere(2.3, 10, 8), look.skin, mat(0, 28.6, 0.4)));
  const ac = look.acc;
  if (ac === 1) {
    for (const sx of [-1, 1]) parts.push(paint(sphere(2.5, 10, 8), "#d94a4a", mat(sx * 2.6, 27.4, 4.2, 1, 0.75, 0.6, 0, 0, sx * 0.25)));
    parts.push(paint(sphere(1.2, 8, 6), "#a83030", mat(0, 27.4, 4.7)));
  } else if (ac === 2) {
    parts.push(paint(new THREE.TorusGeometry(5.1, 1.7, 8, 24), "#e8504b", mat(0, 27.4, 0, 1, 1, 0.9, Math.PI / 2)));
    parts.push(paint(capsule(1.6, 6), "#e8504b", mat(3, 22.6, 5.3, 1, 1, 0.5, 0, 0, 0.1)));
    parts.push(paint(capsule(0.5, 5), "#ffffff", mat(3.3, 21.6, 5.9)));
  } else if (ac === 3) {
    parts.push(paint(sphere(1, 16, 12), "#c0392b", mat(0, 19.4, -5.4, 7.8, 10.4, 1.5, 0.08)));
    parts.push(paint(sphere(1.3, 8, 6), "#ffcf40", mat(0, 27.6, 4.2)));
  } else if (ac === 4) {
    parts.push(paint(capsule(3.8, 5), "#8a6a45", mat(0, 20.5, -6.8, 1.15, 1, 0.8)));
    parts.push(paint(sphere(1.4, 8, 6), "#5d4630", mat(0, 22.5, -9.8)));
    for (const sx of [-1, 1]) parts.push(paint(capsule(0.9, 8), "#5d4630", mat(sx * 4, 22.4, 3.6, 1, 1, 0.5, 0.25)));
  } else if (ac === 6) {
    for (const sx of [-1, 1]) {
      parts.push(paint(sphere(1, 14, 10), "#ffffff", mat(sx * 7.4, 25.6, -6.4, 1.6, 8, 4.4, 0, sx * 0.5, -sx * 0.5)));
      parts.push(paint(sphere(1, 14, 10), "#e6f0ff", mat(sx * 9.4, 21.4, -6.6, 1.3, 5.4, 3.4, 0, sx * 0.5, -sx * 0.7)));
    }
  } else if (ac === 7) {
    parts.push(paint(sphere(1.9, 10, 8), "#ffd23f", mat(3.6, 24.2, 5.3, 1, 1, 0.35)));
    parts.push(paint(sphere(1.0, 8, 6), "#fff3b0", mat(3.6, 24.2, 5.7, 1, 1, 0.4)));
  } else if (ac === 8) {
    parts.push(paint(new THREE.TorusGeometry(3.9, 0.45, 6, 24), "#ffd23f", mat(0, 26.2, 1.4, 1, 1, 1.0, Math.PI / 2 - 0.5)));
    parts.push(paint(sphere(1.1, 8, 6), "#ffd23f", mat(0, 23.4, 4.8, 1, 1, 0.5)));
  } else if (ac === 9) {
    parts.push(paint(sphere(1, 8, 6), "#1f3a8f", mat(0, 27.0, 4.5, 1.7, 1.3, 1)));
    parts.push(paint(sphere(1, 8, 6), "#1f3a8f", mat(0, 22.4, 5.0, 1.4, 4.4, 0.5)));
  } else if (ac === 10) {
    parts.push(paint(sphere(1, 6, 5), "#d94a4a", mat(-3.4, 25.4, 4.6, 0.9, 2.6, 0.3)));
    parts.push(paint(new THREE.CylinderGeometry(1.7, 1.7, 0.5, 14), "#ffd23f", mat(-3.4, 23.2, 4.9, 1, 1, 1, Math.PI / 2)));
    parts.push(paint(sphere(0.8, 8, 6), "#fff3b0", mat(-3.4, 23.2, 5.2, 1, 1, 0.4)));
  } else if (ac === 11) {
    const cols = ["#ff6fb0", "#ffd23f", "#ff5c5c", "#ffffff", "#ff8a4a"];
    for (let k = 0; k < 12; k++) { const a = (k / 12) * Math.PI * 2; parts.push(paint(sphere(1.15, 8, 6), cols[k % cols.length], mat(Math.cos(a) * 5.2, 26.8 - Math.max(0, Math.sin(a)) * 2.6, Math.sin(a) * 4.4 + 0.3))); }
  } else if (ac === 12) {
    for (const sx of [-1, 1]) {
      parts.push(paint(capsule(1.7, 6), "#9aa3ad", mat(sx * 2.8, 22, -7.6)));
      parts.push(paint(sphere(1.5, 8, 6), "#d94a4a", mat(sx * 2.8, 27.2, -7.6)));
      parts.push(paint(new THREE.ConeGeometry(1.5, 4.4, 8), "#ff9a2f", mat(sx * 2.8, 15.8, -7.6, 1, 1, 1, Math.PI)));
    }
  } else if (ac === 13) {
    parts.push(paint(capsule(0.85, 15), "#262a33", mat(0, 21, -5.9, 1, 1, 1, 0, 0, 0.75)));
    parts.push(paint(capsule(0.7, 3), "#ffd23f", mat(-5.4, 27.4, -5.9, 1, 1, 1, 0, 0, 0.75)));
    parts.push(paint(sphere(1.0, 8, 6), "#ffd23f", mat(-4.4, 26.4, -5.9, 2, 0.4, 1, 0, 0, 0.75)));
  } else if (ac === 14) {
    parts.push(paint(new THREE.CylinderGeometry(6.8, 6.8, 0.9, 26), "#3d6fb5", mat(0, 21.4, -6.2, 1, 1, 1, Math.PI / 2)));
    parts.push(paint(new THREE.CylinderGeometry(5.6, 5.6, 1.0, 26), "#e8d9a8", mat(0, 21.4, -6.3, 1, 1, 1, Math.PI / 2)));
    parts.push(paint(sphere(1.7, 10, 8), "#ffd23f", mat(0, 21.4, -7.2)));
  } else if (ac === 15) {
    parts.push(paint(sphere(1, 14, 10), "#e07a2a", mat(2.6, 18.4, -6.2, 4.6, 5.6, 1.3, 0, 0, -0.5)));
    parts.push(paint(sphere(1, 12, 8), "#e07a2a", mat(4.6, 22.6, -6.2, 3.4, 3.6, 1.2, 0, 0, -0.5)));
    parts.push(paint(capsule(0.7, 9), "#6b4a2e", mat(-0.4, 29, -6.2, 1, 1, 1, 0, 0, 0.62)));
    parts.push(paint(sphere(1.4, 8, 6), "#3a2a1c", mat(-3.8, 33.2, -6.2, 1, 1.6, 0.8, 0, 0, 0.62)));
  }
  const tee = teeById(look.tee || 0);
  if (tee) {
    const px = 0.82, plane = new THREE.PlaneGeometry(px * 1.04, px * 1.04);
    for (let row = 0; row < TEE_H; row++) {
      for (let col = 0; col < TEE_W; col++) {
        const ch = tee.rows[row] ? tee.rows[row][col] : ".";
        const c = tee.pal[ch];
        if (!c) continue;
        const x = (col - (TEE_W - 1) / 2) * px, y = 24.4 - row * px;
        const dy = Math.abs(y - 21.2), r = dy <= 1.8 ? 5.6 : Math.sqrt(Math.max(0, 5.6 * 5.6 - (dy - 1.8) * (dy - 1.8)));
        const z = 0.82 * Math.sqrt(Math.max(0, r * r - x * x)) + 0.1;
        parts.push(paint(plane, c, mat(x, y, z)));
      }
    }
    plane.dispose();
  }
  const flag = flagById(look.flag || 0);
  if (flag) {
    parts.push(paint(new THREE.CylinderGeometry(0.5, 0.5, 48, 6), "#8a6a45", mat(7.4, 36, -9)));
    parts.push(paint(sphere(1.1, 8, 6), "#ffd23f", mat(7.4, 60.4, -9)));
    const grid = flagGrid(flag), fp = 0.95;
    for (let row = 0; row < FLAG_H; row++) {
      let col = 0;
      while (col < FLAG_W) {
        let end = col + 1;
        while (end < FLAG_W && grid[row][end] === grid[row][col]) end++;
        const w = (end - col) * fp;
        parts.push(paint(new THREE.BoxGeometry(w, fp * 1.02, 0.3), grid[row][col], mat(7.4 + 0.5 + col * fp + w / 2, 58.4 - row * fp - fp / 2, -9)));
        col = end;
      }
    }
  }
  if (tee) { /* the picture replaces the plain look */ }
  else if (seed & 1) parts.push(paint(new THREE.TorusGeometry(5.62, 0.75, 8, 28), shade(look.shirt, 1.28), mat(0, 21.6, 0, 1, 0.82, 1, Math.PI / 2)));
  else if (seed & 2) parts.push(paint(sphere(1.5, 10, 8), shade(look.shirt, 0.72), mat(-2.2, 22.4, 4.5, 1.2, 1, 0.35)));
  return merge(parts);
}

function armGeometry(look: Look): THREE.BufferGeometry {
  return merge([
    paint(capsule(1.95, 3.6), look.shirt, mat(0, -3.3, 0)),
    paint(sphere(2.35, 12, 10), look.skin, mat(0, -7.7, 0)),
  ]);
}

function legGeometry(look: Look): THREE.BufferGeometry {
  const k = look.kicks || 0;
  const shoe = k === 2 ? "#6b4a2e" : k === 3 ? "#ffb3c1" : k === 4 ? "#ffd23f" : k === 5 ? "#aeb6c0" : k === 6 ? "#ff7fb0" : look.shoes;
  const parts = [
    paint(capsule(2.7, 4.2), look.pants, mat(0, -4.6, 0)),
    paint(sphere(3.2, 14, 10), shoe, k === 4 ? mat(0, -11.5, 2.2, 1.15, 0.8, 2.3) : mat(0, -11.7, 1.3, 1, 0.72, 1.5)),
  ];
  if (k === 1) {
    parts.push(paint(new THREE.CylinderGeometry(2.9, 3.0, 3.6, 14), look.shoes, mat(0, -9.3, 0)));
    parts.push(paint(new THREE.CylinderGeometry(3.0, 3.0, 0.7, 14), "#e8403c", mat(0, -7.6, 0)));
  } else if (k === 2) parts.push(paint(new THREE.CylinderGeometry(3.0, 3.2, 6.2, 14), "#6b4a2e", mat(0, -8.4, 0)));
  else if (k === 3) for (const sx of [-1, 1]) parts.push(paint(capsule(0.8, 3), "#ffb3c1", mat(sx * 1.3, -9.4, 3.0, 1, 1, 0.6, -0.2)));
  else if (k === 4) parts.push(paint(sphere(1.3, 8, 6), "#e8403c", mat(0, -10.8, 6.4)));
  else if (k === 5) {
    parts.push(paint(new THREE.CylinderGeometry(2.9, 3.1, 3.2, 12), "#8a929c", mat(0, -9.4, 0)));
    parts.push(paint(new THREE.ConeGeometry(2.2, 4.6, 10), "#ff9a2f", mat(0, -15.4, -0.4, 1, 1, 1, Math.PI)));
    parts.push(paint(new THREE.ConeGeometry(1.2, 3, 8), "#ffe27a", mat(0, -14.8, -0.4, 1, 1, 1, Math.PI)));
  } else if (k === 6) for (const [z, y] of [[-1.6, -13.4], [3.2, -13.4]]) parts.push(paint(new THREE.CylinderGeometry(1.2, 1.2, 4.6, 10), "#2a2f3a", mat(0, y, z, 1, 1, 1, 0, 0, Math.PI / 2)));
  return merge(parts);
}

const GRADIENT = (() => {
  const c = document.createElement("canvas");
  c.width = 64; c.height = 64;
  const x = c.getContext("2d");
  if (x) {
    const g = x.createRadialGradient(32, 32, 2, 32, 32, 31);
    g.addColorStop(0, "rgba(40,30,20,0.42)");
    g.addColorStop(0.6, "rgba(40,30,20,0.18)");
    g.addColorStop(1, "rgba(40,30,20,0)");
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

function zTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 64; c.height = 64;
  const x = c.getContext("2d");
  if (x) {
    x.font = "bold 46px sans-serif"; x.textAlign = "center"; x.textBaseline = "middle";
    x.lineWidth = 7; x.strokeStyle = "rgba(60,80,130,0.9)"; x.strokeText("Z", 32, 34);
    x.fillStyle = "#e8f0ff"; x.fillText("Z", 32, 34);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

type Icon = "heart" | "star" | "exclaim" | "note" | "dots";

function iconTexture(kind: Icon): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 96; c.height = 96;
  const x = c.getContext("2d");
  if (x) {
    x.lineJoin = "round"; x.lineCap = "round";
    const paint = (fill: string, edge: string, draw: () => void) => {
      x.beginPath(); draw(); x.lineWidth = 9; x.strokeStyle = edge; x.stroke(); x.fillStyle = fill; x.fill();
    };
    if (kind === "heart") {
      paint("#ff5c7a", "#fff", () => { x.moveTo(48, 80); x.bezierCurveTo(8, 52, 14, 18, 36, 18); x.bezierCurveTo(44, 18, 48, 24, 48, 30); x.bezierCurveTo(48, 24, 52, 18, 60, 18); x.bezierCurveTo(82, 18, 88, 52, 48, 80); });
    } else if (kind === "star") {
      paint("#ffd23f", "#fff", () => { for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 17 : 38; const px = 48 + Math.cos(a) * r, py = 50 + Math.sin(a) * r; if (i) x.lineTo(px, py); else x.moveTo(px, py); } x.closePath(); });
    } else if (kind === "exclaim") {
      paint("#ff8a3d", "#fff", () => { x.moveTo(42, 14); x.lineTo(54, 14); x.lineTo(51, 58); x.lineTo(45, 58); x.closePath(); });
      paint("#ff8a3d", "#fff", () => { x.arc(48, 74, 7, 0, Math.PI * 2); });
    } else if (kind === "note") {
      paint("#6c8cff", "#fff", () => { x.arc(34, 70, 13, 0, Math.PI * 2); });
      paint("#6c8cff", "#fff", () => { x.moveTo(44, 70); x.lineTo(44, 18); x.lineTo(72, 28); x.lineTo(72, 44); x.lineTo(44, 34); });
    } else {
      paint("#ffffff", "#8a94a8", () => { x.moveTo(16, 22); x.lineTo(80, 22); x.quadraticCurveTo(88, 22, 88, 30); x.lineTo(88, 54); x.quadraticCurveTo(88, 62, 80, 62); x.lineTo(46, 62); x.lineTo(30, 78); x.lineTo(32, 62); x.lineTo(16, 62); x.quadraticCurveTo(8, 62, 8, 54); x.lineTo(8, 30); x.quadraticCurveTo(8, 22, 16, 22); });
      x.fillStyle = "#8a94a8";
      for (const dx of [28, 48, 68]) { x.beginPath(); x.arc(dx, 42, 5, 0, Math.PI * 2); x.fill(); }
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

interface Rig {
  emoteSprite: THREE.Sprite;
  emoteKind: Icon | "";
  root: THREE.Group;
  body: THREE.Group;
  head: THREE.Group;
  armL: THREE.Group;
  armR: THREE.Group;
  legL: THREE.Group;
  legR: THREE.Group;
  face: THREE.Mesh;
  faceMat: THREE.MeshStandardMaterial;
  texOpen: THREE.CanvasTexture;
  texShut: THREE.CanvasTexture;
  shut: boolean;
  blink: number;
  nextBlink: number;
  yaw: number;
  sit: number;
  hop: number;
  orb: THREE.Group;
  arrow: THREE.Mesh;
  pick: THREE.Mesh;
  ring: THREE.Mesh;
  aura: THREE.Mesh | null;
  zs: THREE.Sprite[];
  status: THREE.Mesh;
  tag: THREE.Sprite;
  geos: THREE.BufferGeometry[];
  unitsH: number;
  look: Look;
}

// ---------------------------------------------------------------------------------------------------------------
// The scene
// ---------------------------------------------------------------------------------------------------------------

export interface FrameOpts { selected: string | null; t: number; dt: number; low: boolean; spin?: number }

export class Scene3D {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(0, 1280, 0, -760, 100, 5000);
  private hemi = new THREE.HemisphereLight(0xffffff, 0xf0e6d6, 1.5);
  private sun = new THREE.DirectionalLight(0xfff3e0, 1.4);
  private charMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.0 });
  private shadowMat = new THREE.MeshBasicMaterial({ map: GRADIENT, transparent: true, depthWrite: false });
  private shadowGeo = new THREE.PlaneGeometry(1, 1);
  private zTex = zTexture();
  private iconMats: Record<Icon, THREE.SpriteMaterial> = (["heart", "star", "exclaim", "note", "dots"] as Icon[]).reduce((m, k) => {
    m[k] = new THREE.SpriteMaterial({ map: iconTexture(k), transparent: true, depthTest: false, depthWrite: false });
    return m;
  }, {} as Record<Icon, THREE.SpriteMaterial>);
  private zoneGroup = new THREE.Group();
  private storeGroup = new THREE.Group();
  private basePixel = 1.5;
  private lastZoom = 1;
  private storeCoin: THREE.Mesh | null = null;
  private zoneLive: Array<{ mat: THREE.MeshBasicMaterial; phase: number; live: boolean }> = [];
  private zMat = new THREE.SpriteMaterial({ map: this.zTex, transparent: true, depthWrite: false });
  private orbGeo = new THREE.SphereGeometry(3.1, 14, 10);
  private orbMat = new THREE.MeshStandardMaterial({ color: 0x43c463, emissive: 0x2fb44f, emissiveIntensity: 0.9, roughness: 0.3 });
  private haloGeo = new THREE.TorusGeometry(5.2, 0.55, 8, 24);
  private statusGeo = new THREE.RingGeometry(10.5, 13, 36);
  private statusMats: Record<string, THREE.MeshBasicMaterial> = {
    game: new THREE.MeshBasicMaterial({ color: 0x90ba3c, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false }),
    on: new THREE.MeshBasicMaterial({ color: 0x57cbde, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }),
    away: new THREE.MeshBasicMaterial({ color: 0xe0b44f, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false }),
  };
  private tagMat = new THREE.SpriteMaterial({ map: (() => {
    const c = document.createElement("canvas");
    c.width = 128; c.height = 36;
    const x = c.getContext("2d");
    if (x) {
      x.fillStyle = "#90ba3c";
      x.beginPath(); x.moveTo(6, 2); x.lineTo(122, 2); x.quadraticCurveTo(126, 2, 126, 6); x.lineTo(126, 30); x.quadraticCurveTo(126, 34, 122, 34); x.lineTo(6, 34); x.quadraticCurveTo(2, 34, 2, 30); x.lineTo(2, 6); x.quadraticCurveTo(2, 2, 6, 2); x.fill();
      x.fillStyle = "#0c1a05"; x.font = "800 21px sans-serif"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText("IN-GAME", 64, 19);
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })(), transparent: true, depthTest: false, depthWrite: false });
  private arrowGeo = new THREE.ConeGeometry(3.4, 7, 4);
  private arrowMat = new THREE.MeshStandardMaterial({ color: 0x66c0f4, emissive: 0x1a6fa8, roughness: 0.4 });
  private pickMat = new THREE.MeshStandardMaterial({ color: 0xffd23f, emissive: 0xb88600, roughness: 0.4 });
  private auraGeo = new THREE.RingGeometry(17.5, 21.5, 44);
  private auraMats = new Map<string, THREE.MeshBasicMaterial>();
  private rainbowMat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false });
  private auraMat(hex: string): THREE.MeshBasicMaterial {
    let m = this.auraMats.get(hex);
    if (!m) { m = new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }); this.auraMats.set(hex, m); }
    return m;
  }
  private ringGeo = new THREE.RingGeometry(14, 17, 40);
  private ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false });
  private rigs = new Map<string, Rig>();
  private floor: THREE.Mesh | null = null;
  private floorTex: THREE.CanvasTexture;
  private props: THREE.Mesh[] = [];
  private size = { w: 0, h: 0 };

  constructor(private canvas: HTMLCanvasElement, preview = false) {
    void preview; // same dark floor in the editor preview
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "low-power" });
    this.renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 1.5));
    this.renderer.setClearColor(0xf3eee3, 1);
    this.sun.position.set(-220, 380, 300);
    this.scene.add(this.hemi, this.sun, this.zoneGroup, this.storeGroup);
    this.camera.position.set(0, 2000 * SIN, 2000 * COS);
    this.camera.lookAt(0, 0, 0);
    this.floorTex = this.makeFloorTexture();
    this.updateDaylight(true);
  }

  private makeFloorTexture(w = 1280, h = 760): THREE.CanvasTexture {
    const cw = 1024, ch = Math.max(256, Math.round((cw * h) / w));
    const c = document.createElement("canvas");
    c.width = cw; c.height = ch;
    const x = c.getContext("2d");
    if (x) {
      const g = x.createRadialGradient(cw / 2, ch * 0.46, 0, cw / 2, ch * 0.46, cw * 0.86);
      g.addColorStop(0, "#22394f"); g.addColorStop(0.58, "#141d28"); g.addColorStop(1, "#0b1017");
      x.fillStyle = g; x.fillRect(0, 0, cw, ch);
      const ring = (rx: number, ry: number, a: number, fill: boolean) => {
        x.beginPath(); x.ellipse(cw / 2, ch * 0.5, rx, ry, 0, 0, Math.PI * 2);
        if (fill) {
          const r = x.createRadialGradient(cw / 2, ch * 0.5, 0, cw / 2, ch * 0.5, rx);
          r.addColorStop(0, "rgba(102,192,244,0.13)"); r.addColorStop(0.68, "rgba(102,192,244,0)");
          x.fillStyle = r; x.fill();
        }
        x.lineWidth = 2; x.strokeStyle = "rgba(102,192,244," + a + ")"; x.stroke();
      };
      ring(cw * 0.39, ch * 0.38, 0.12, true);
      ring(cw * 0.265, ch * 0.26, 0.08, false);
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }

  /** Show only part of the plaza: the rectangle (x0, y0, vw, vh) in screen pixels of the whole plaza. */
  setView(x0: number, y0: number, vw: number, vh: number): void {
    const c = this.camera;
    if (c.left === x0 && c.right === x0 + vw && c.top === -y0 && c.bottom === -(y0 + vh)) return;
    c.left = x0; c.right = x0 + vw; c.top = -y0; c.bottom = -(y0 + vh);
    c.updateProjectionMatrix();
  }

  /** How many pixels the 3D view draws per screen pixel at 1x zoom (lower is lighter). */
  setQuality(pixel: number): void {
    this.basePixel = pixel;
    this.setDetail(this.lastZoom);
  }

  /** Sharper drawing when zoomed in (more pixels per screen pixel). */
  setDetail(zoom: number): void {
    this.lastZoom = zoom;
    let want = Math.min(2.2, Math.max(0.6, this.basePixel * (1 + 0.25 * (zoom - 1))));
    // when the screen is shrunk to fit, there are fewer real pixels: no need to draw more than the screen can show
    const real = stageScale.k * (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);
    want = Math.max(0.6, Math.min(want, real * Math.max(1, zoom) * 1.15));
    if (Math.abs(want - this.renderer.getPixelRatio()) < 0.05 || this.size.w === 0) return;
    this.renderer.setPixelRatio(want);
    this.renderer.setSize(this.size.w, this.size.h, false);
  }

  /** Zoom in (used by the character editor). */
  setZoom(z: number): void {
    this.camera.zoom = z;
    this.camera.updateProjectionMatrix();
  }

  resize(w: number, h: number): void {
    if (w === this.size.w && h === this.size.h) return;
    this.size = { w, h };
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + "px";
    this.canvas.style.height = h + "px";
    this.camera.left = 0; this.camera.right = w; this.camera.top = 0; this.camera.bottom = -h;
    this.camera.updateProjectionMatrix();
    this.buildWorld();
  }

  private buildWorld(): void {
    const { w, h } = this.size;
    if (this.floor) { this.scene.remove(this.floor); this.floor.geometry.dispose(); (this.floor.material as THREE.Material).dispose(); }
    this.floorTex.dispose();
    this.floorTex = this.makeFloorTexture(w, h);
    const zLen = h / SIN;
    // the floor is painted in screen proportions, so it lines up with the HTML around it
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, zLen), new THREE.MeshBasicMaterial({ map: this.floorTex }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(w / 2, 0, zLen / 2);
    this.scene.add(floor);
    this.floor = floor;
  }

  /** Cool, even light that suits the dark Steam look. */
  private updateDaylight(force = false): void {
    if (!force) return;
    this.hemi.color.set(0xd6e8ff);
    this.hemi.groundColor.set(0x5f7690);
    this.hemi.intensity = 1.45;
    this.sun.color.set(0xffffff);
    this.sun.intensity = 1.25;
    this.renderer.setClearColor(0x0b1017, 1);
  }

  private makeRig(w: Walker): Rig {
    const look = w.look;
    const seed = w.seed >>> 0;
    const geos: THREE.BufferGeometry[] = [];
    const root = new THREE.Group();
    const body = new THREE.Group();
    root.add(body);

    const shadow = new THREE.Mesh(this.shadowGeo, this.shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.3;
    shadow.scale.set(34, 22, 1);
    root.add(shadow);

    const torsoG = torsoGeometry(look, seed >> 4); geos.push(torsoG);
    body.add(new THREE.Mesh(torsoG, this.charMat));

    const head = new THREE.Group();
    head.position.set(0, 38.6, 0);
    head.scale.set(look.head, 0.95, 0.97);
    const headG = headGeometry(look); geos.push(headG);
    head.add(new THREE.Mesh(headG, this.charMat));
    const texOpen = faceTexture(look, false), texShut = faceTexture(look, true);
    const faceMat = new THREE.MeshStandardMaterial({ map: texOpen, transparent: true, roughness: 0.6, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const faceGeo = new THREE.SphereGeometry(HR + 0.06, 28, 20, PHI0, PHI_LEN, TH0, TH_LEN); geos.push(faceGeo);
    const face = new THREE.Mesh(faceGeo, faceMat);
    head.add(face);
    body.add(head);

    const armG = armGeometry(look); geos.push(armG);
    const mkArm = (sx: number) => {
      const g = new THREE.Group();
      g.position.set(sx * 6.9, 25.6, 0);
      g.add(new THREE.Mesh(armG, this.charMat));
      body.add(g);
      return g;
    };
    const armL = mkArm(-1), armR = mkArm(1);

    const legG = legGeometry(look); geos.push(legG);
    const mkLeg = (sx: number) => {
      const g = new THREE.Group();
      g.position.set(sx * 2.9, 14, 0);
      g.add(new THREE.Mesh(legG, this.charMat));
      body.add(g);
      return g;
    };
    const legL = mkLeg(-1), legR = mkLeg(1);

    // markers
    const orb = new THREE.Group();
    orb.add(new THREE.Mesh(this.orbGeo, this.orbMat));
    const halo = new THREE.Mesh(this.haloGeo, this.orbMat);
    halo.rotation.x = Math.PI / 2;
    orb.add(halo);
    orb.position.set(0, 60, 0);
    orb.visible = false;
    root.add(orb);

    const arrow = new THREE.Mesh(this.arrowGeo, this.arrowMat);
    arrow.rotation.x = Math.PI; // tip down
    arrow.visible = false;
    root.add(arrow);
    const pick = new THREE.Mesh(this.arrowGeo, this.pickMat);
    pick.rotation.x = Math.PI;
    pick.visible = false;
    root.add(pick);
    const ring = new THREE.Mesh(this.ringGeo, this.ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.5;
    ring.visible = false;
    root.add(ring);

    let aura: THREE.Mesh | null = null;
    const ad = AURAS.find((a) => a.id === (look.aura || 0));
    if (ad) {
      aura = new THREE.Mesh(this.auraGeo, ad.id === 8 ? this.rainbowMat : this.auraMat(ad.hex));
      aura.rotation.x = -Math.PI / 2;
      aura.position.y = 0.45;
      root.add(aura);
    }
    const zs: THREE.Sprite[] = [];
    for (let i = 0; i < 3; i++) { const s = new THREE.Sprite(this.zMat); s.visible = false; s.scale.set(7, 7, 1); root.add(s); zs.push(s); }

    const status = new THREE.Mesh(this.statusGeo, this.statusMats.on);
    status.rotation.x = -Math.PI / 2;
    status.position.y = 0.55;
    status.scale.set(1.15, 1.15, 1);
    root.add(status);
    const tag = new THREE.Sprite(this.tagMat);
    tag.scale.set(25, 7, 1);
    tag.visible = false;
    tag.renderOrder = 9;
    root.add(tag);

    const emoteSprite = new THREE.Sprite(this.iconMats.heart);
    emoteSprite.visible = false;
    emoteSprite.renderOrder = 10;
    root.add(emoteSprite);

    this.scene.add(root);
    const r = Math.abs(Math.sin(seed)) * 6;
    return {
      emoteSprite, emoteKind: "", status, tag, root, body, head, armL, armR, legL, legR, face, faceMat, texOpen, texShut, shut: false,
      blink: 0, nextBlink: 1 + r, yaw: w.dir * 0.3, sit: 0, hop: 0, orb, arrow, pick, ring, aura, zs, geos, unitsH: 54, look,
    };
  }

  private disposeRig(r: Rig): void {
    this.scene.remove(r.root);
    r.geos.forEach((g) => g.dispose());
    r.texOpen.dispose(); r.texShut.dispose(); r.faceMat.dispose();
  }

  private animate(w: Walker, r: Rig, o: FrameOpts): void {
    const dt = o.dt, t = o.t;
    const asleep = w.state === "snooze";
    const selected = w.id === o.selected;
    const s = scaleAt(w.y, this.size.h) * CHAR_K;

    r.root.position.set(w.x, 1.5, w.y / SIN);
    r.root.scale.setScalar(s);

    // sitting (asleep) is a smooth change
    r.sit += ((asleep ? 1 : 0) - r.sit) * Math.min(1, dt * 6);
    const sit = r.sit;

    const ease = Math.min(1, dt * 9);
    const talking = w.act === "greet" || w.act === "chat";
    const targetYaw = asleep ? 0 : w.act === "dance" ? Math.sin(t * 3 + w.seed) * 0.55 : talking ? w.dir * 0.8 : w.moving ? w.dir * 0.95 : selected ? 0 : w.dir * 0.3;
    r.yaw += (targetYaw - r.yaw) * ease;
    r.root.rotation.y = o.spin !== undefined ? o.spin : r.yaw;

    const sw = w.moving ? Math.sin(w.phase) : 0;
    const walk = w.moving ? 1 : 0;
    const breathe = Math.sin(t * 2 + w.seed) * 0.5;
    r.hop += ((selected ? 1 : 0) - r.hop) * Math.min(1, dt * 8);
    const dancing = w.act === "dance";
    const hop = selected ? Math.abs(Math.sin(t * 6)) * 2.6 * r.hop : 0;
    const beat = Math.sin(t * 9 + (w.seed % 3));
    const bob = (w.moving ? Math.abs(Math.sin(w.phase)) * 1.5 : 0) + hop + (dancing ? Math.abs(beat) * 4.5 : 0) + (w.act === "greet" ? Math.abs(Math.sin(t * 8)) * 1.2 : 0);

    r.body.position.y = bob - 9.6 * sit;
    r.body.rotation.z = sw * 0.045 * walk + (dancing ? beat * 0.13 : 0);
    r.body.scale.y = 1 + breathe * 0.012 * (1 - sit);

    r.legL.rotation.x = (sw * 0.75 * walk) * (1 - sit) - 1.52 * sit;
    r.legR.rotation.x = (-sw * 0.75 * walk) * (1 - sit) - 1.52 * sit;
    r.legL.rotation.z = -0.07 * sit; r.legR.rotation.z = 0.07 * sit;

    const armBase = 0.1;
    r.armL.rotation.x = -sw * 0.7 * walk * (1 - sit) - 0.55 * sit;
    r.armR.rotation.x = sw * 0.7 * walk * (1 - sit) - 0.55 * sit;
    r.armL.rotation.z = -armBase - breathe * 0.02;
    r.armR.rotation.z = armBase + breathe * 0.02;
    const speaking = w.act === "chat" && ((Math.floor(t * 0.7) + (w.seed & 1)) & 1) === 0;
    if (dancing) {
      r.armL.rotation.x = 0; r.armR.rotation.x = 0;
      r.armL.rotation.z = -(2.3 + beat * 0.45);
      r.armR.rotation.z = 2.3 - beat * 0.45;
      r.legL.rotation.x = beat * 0.5; r.legR.rotation.x = -beat * 0.5;
    } else if (w.act === "chat") {
      if (speaking) { r.armR.rotation.x = -0.9; r.armR.rotation.z = 0.7 + Math.sin(t * 6 + w.seed) * 0.35; }
    }
    if ((selected || w.act === "greet") && !asleep && !dancing) { // wave hello
      r.armR.rotation.x = 0;
      r.armR.rotation.z = 2.55 + Math.sin(t * 10) * 0.32;
    }

    // head: droops asleep, looks about a little when idle
    const look = asleep ? 0.5 : w.moving ? 0 : w.act === "chat" ? w.dir * 0.2 : Math.sin(t * 0.7 + w.seed) * 0.12;
    const nod = w.act === "chat" ? Math.sin(t * (speaking ? 7 : 3.2) + w.seed) * (speaking ? 0.1 : 0.14) : 0;
    r.head.rotation.x += ((asleep ? 0.5 : sw * 0.03 * walk + nod) - r.head.rotation.x) * ease;
    r.head.rotation.y += (look - r.head.rotation.y) * Math.min(1, dt * 4);
    r.head.rotation.z = asleep ? Math.sin(t * 1.3 + w.seed) * 0.06 + 0.1 : sw * 0.03 * walk;

    // blink
    r.nextBlink -= dt;
    if (r.nextBlink <= 0 && r.blink <= 0) { r.blink = 0.13; r.nextBlink = 2.2 + ((w.seed >>> 3) % 40) / 10 + Math.random() * 2; }
    if (r.blink > 0) r.blink -= dt;
    const shut = asleep || r.blink > 0;
    if (shut !== r.shut) { r.shut = shut; r.faceMat.map = shut ? r.texShut : r.texOpen; r.faceMat.needsUpdate = true; }

    // markers
    const top = (sit > 0.5 ? 46 : 56);
    r.orb.visible = false;
    r.tag.visible = w.playing && !asleep;
    if (r.tag.visible) r.tag.position.set(0, top + 9 + Math.sin(t * 2 + w.seed) * 1.2, 0);
    const sk = w.state === "offline" ? "away" : w.playing ? "game" : w.state === "away" || w.state === "snooze" ? "away" : "on";
    if (r.status.material !== this.statusMats[sk]) r.status.material = this.statusMats[sk];
    r.status.visible = !selected;
    r.arrow.visible = w.me;
    if (w.me) { r.arrow.position.set(0, top + (w.playing ? 20 : 11) + Math.sin(t * 3) * 1.6, 0); r.arrow.rotation.y = t * 2; }
    r.pick.visible = selected;
    if (selected) { r.pick.position.set(0, top + (w.me ? 28 : w.playing ? 24 : 12) + Math.abs(Math.sin(t * 5)) * 4, 0); r.pick.rotation.y = t * 3; }
    if (r.aura) { const pulse = 1 + Math.sin(t * 2.4 + w.seed) * 0.04; r.aura.scale.set(pulse, pulse, 1); }
    r.ring.visible = selected;
    if (selected) r.ring.scale.setScalar(1 + Math.sin(t * 4) * 0.05);

    const icon: Icon | "" = w.act === "chat" ? (speaking ? "dots" : "") : asleep ? "" : w.emote;
    r.emoteSprite.visible = icon !== "";
    if (icon) {
      if (icon !== r.emoteKind) { r.emoteKind = icon; r.emoteSprite.material = this.iconMats[icon]; }
      const pop = 13 + Math.sin(t * 7 + w.seed) * 0.8;
      r.emoteSprite.scale.set(pop, pop, 1);
      r.emoteSprite.position.set(icon === "dots" ? 7 : 0, top + 15 + (w.me ? 8 : 0) + (w.playing ? 6 : 0) + Math.sin(t * 3 + w.seed) * 1.5, 0);
    }

    r.zs.forEach((z, i) => {
      z.visible = asleep;
      if (!asleep) return;
      const ph = (t * 0.55 + i / 3 + (w.seed % 7) / 7) % 1;
      z.position.set(8 + ph * 6 + i * 1.2, 40 + ph * 20, 4);
      z.material.opacity = 1;
      const sc = 4 + ph * 4.5;
      z.scale.set(sc, sc, 1);
    });
  }

  /** The Friend Store building. (x, y) is the middle of its footprint in screen pixels; null removes it. */
  setStore(spot: { x: number; y: number } | null): void {
    this.storeGroup.children.slice().forEach((c) => { this.storeGroup.remove(c); const m = c as THREE.Mesh; m.geometry.dispose(); (m.material as THREE.Material).dispose(); });
    this.storeCoin = null;
    if (!spot) return;
    const cx = spot.x, cz = spot.y / SIN;
    const parts: THREE.BufferGeometry[] = [
      paint(new THREE.BoxGeometry(170, 66, 50), "#4a7ea6", mat(cx, 33, cz)),
      paint(new THREE.BoxGeometry(174, 7, 54), "#9fd8ff", mat(cx, 3.5, cz)),
      paint(new THREE.BoxGeometry(180, 9, 60), "#2f5878", mat(cx, 70.5, cz)),
      paint(new THREE.BoxGeometry(46, 1.2, 18), "#8fa6bb", mat(cx, 0.6, cz + 38)),
      paint(new THREE.BoxGeometry(30, 44, 2), "#16222e", mat(cx, 22, cz + 25.5)),
      paint(new THREE.BoxGeometry(34, 48, 1.5), "#9fd8ff", mat(cx, 24, cz + 25)),
    ];
    for (let i = 0; i < 6; i++) parts.push(paint(new THREE.BoxGeometry(30, 2.8, 26), i % 2 ? "#ffffff" : "#e5484d", mat(cx - 75 + i * 30, 56, cz + 38, 1, 1, 1, 0.42)));
    const body = new THREE.Mesh(merge(parts), this.charMat);
    const glow = new THREE.Mesh(merge([
      paint(new THREE.BoxGeometry(34, 24, 1.5), "#ffe9a8", mat(cx - 54, 36, cz + 25.8)),
      paint(new THREE.BoxGeometry(34, 24, 1.5), "#ffe9a8", mat(cx + 54, 36, cz + 25.8)),
    ]), new THREE.MeshBasicMaterial({ vertexColors: true }));
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 3.4, 28), new THREE.MeshStandardMaterial({ color: 0xffcf40, emissive: 0x7a5a00, roughness: 0.3, metalness: 0.4 }));
    coin.rotation.x = Math.PI / 2;
    coin.position.set(cx, 88, cz + 6);
    this.storeCoin = coin;
    this.storeGroup.add(body, glow, coin);
  }

  /** Colored pads on the floor, one per game. */
  setZones(zones: Array<{ x: number; y: number; r: number; hue: number; live: boolean }>): void {
    this.zoneGroup.children.slice().forEach((c) => { this.zoneGroup.remove(c); const m = c as THREE.Mesh; m.geometry.dispose(); (m.material as THREE.Material).dispose(); });
    this.zoneLive = [];
    for (const z of zones) {
      const cx = z.x, cz = z.y / SIN;
      const col = (l: number, sat = 55) => new THREE.Color("hsl(" + z.hue + "," + sat + "%," + l + "%)");
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(z.r, z.r * 1.03, 1.5, 56), new THREE.MeshBasicMaterial({ color: col(20, 40) }));
      disc.position.set(cx, 0.75, cz);
      const inner = new THREE.Mesh(new THREE.RingGeometry(z.r * 0.5, z.r * 0.54, 56), new THREE.MeshBasicMaterial({ color: col(46, 60), transparent: true, opacity: 0.45 }));
      inner.rotation.x = -Math.PI / 2; inner.position.set(cx, 1.6, cz);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(z.r, 1.3, 8, 64), new THREE.MeshBasicMaterial({ color: col(z.live ? 55 : 38, 70) }));
      rim.rotation.x = Math.PI / 2; rim.position.set(cx, 1.5, cz);
      const glowMat = new THREE.MeshBasicMaterial({ color: col(60, 95), transparent: true, opacity: z.live ? 0.5 : 0.0, depthWrite: false, side: THREE.DoubleSide });
      const glow = new THREE.Mesh(new THREE.RingGeometry(z.r * 1.05, z.r * 1.16, 64), glowMat);
      glow.rotation.x = -Math.PI / 2; glow.position.set(cx, 0.4, cz);
      this.zoneGroup.add(disc, inner, rim, glow);
      this.zoneLive.push({ mat: glowMat, phase: z.x, live: z.live });
    }
  }

  /** Screen y just above the markers over a character's head, for the speech bubble. */
  bubbleY(w: Walker): number {
    return w.y - 82 * COS * scaleAt(w.y, this.size.h) * CHAR_K;
  }

  frame(walkers: Walker[], o: FrameOpts): void {
    this.rainbowMat.color.setHSL((o.t * 0.25) % 1, 1, 0.6);
    this.updateDaylight();
    if (this.storeCoin) this.storeCoin.rotation.z += o.dt * 1.6;
    for (const z of this.zoneLive) if (z.live) z.mat.opacity = 0.35 + Math.sin(o.t * 3 + z.phase) * 0.2;
    const seen = new Set<string>();
    // characters well outside what the camera shows are neither animated nor drawn (matters when zoomed in)
    const c = this.camera;
    const vx0 = c.left - 70, vx1 = c.right + 70, vy0 = -c.top - 150, vy1 = -c.bottom + 60;
    for (const w of walkers) {
      seen.add(w.id);
      let r = this.rigs.get(w.id);
      if (r && r.look !== w.look) { this.disposeRig(r); r = undefined; } // a new character (or a new hat)
      const inView = w.x >= vx0 && w.x <= vx1 && w.y >= vy0 && w.y <= vy1;
      if (!r) { if (!inView) continue; r = this.makeRig(w); this.rigs.set(w.id, r); }
      r.root.visible = inView;
      if (inView) this.animate(w, r, o);
    }
    for (const [id, r] of Array.from(this.rigs.entries())) {
      if (!seen.has(id)) { this.disposeRig(r); this.rigs.delete(id); }
    }
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.rigs.forEach((r) => this.disposeRig(r));
    this.rigs.clear();
    this.props.forEach((p) => p.geometry.dispose());
    if (this.floor) this.floor.geometry.dispose();
    this.floorTex.dispose();
    this.renderer.dispose();
  }
}

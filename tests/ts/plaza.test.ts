import assert from "node:assert/strict";
import { test } from "node:test";
import { lookFor, makeWalker, stepWalker, Walker } from "../../src/chars";
import { nextPollDelay } from "../../src/gamePolling";
import { computeZones, pushOutOfRect, storeRect, storeSpot } from "../../src/layout";
import { stepCamera } from "../../src/plaza/camera";
import { nextDelay } from "../../src/plaza/polling";
import { buildPeople, PeopleInput } from "../../src/plaza/people";
import { Governor, LEVELS } from "../../src/plaza/quality";
import { nearPoint, noNudge, press, readInput, stepPlayer } from "../../src/plaza/walk";
import { Social } from "../../src/social";

const friend = (id: string, state = "online") => ({ steamid: id, name: "F" + id.slice(-2), state, playing: false } as never);
const walker = (id: string, x = 100, y = 300, state = "online"): Walker => {
  const w = makeWalker(friend(id, state), false, 0, 0);
  w.x = x; w.y = y; w.state = state as never;
  return w;
};
const games = (n: number) => Array.from({ length: n }, (_, i) => ({ appid: 1000 + i * 37, name: "G" + i, friends: [], minutes: 0, playing: 0, mine: false, score: 10 - i }));

// ---- layout ----
test("pads: right count, inside the plaza, not on top of each other, and steady", () => {
  for (const [w, h] of [[1280, 760], [1280, 720], [1100, 680]]) {
    const z = computeZones(w, h, games(15));
    assert.equal(z.length, 13);
    for (const p of z) { assert.ok(p.x > p.r && p.x < w - p.r, "x in range"); assert.ok(p.y > 100 && p.y < h - 40, "y in range"); }
    for (let i = 0; i < z.length; i++) for (let j = i + 1; j < z.length; j++) {
      const d = Math.hypot(z[i].x - z[j].x, (z[i].y - z[j].y) * 1.6);
      assert.ok(d > z[i].r * 1.6, "pads " + i + " and " + j + " are too close (" + Math.round(d) + ")");
    }
    assert.deepEqual(computeZones(w, h, games(15)).map((p) => [p.x, p.y]), z.map((p) => [p.x, p.y]));
  }
  assert.equal(computeZones(1280, 760, games(3)).length, 3);
  assert.equal(computeZones(1280, 760, []).length, 0);
});

test("the store stays clear of the pads", () => {
  const s = storeSpot(1280, 760);
  for (const p of computeZones(1280, 760, games(13))) assert.ok(Math.hypot(p.x - s.x, (p.y - s.y) * 1.6) > p.r + 90, "pad too near the store");
});

// ---- characters ----
test("the same Steam ID always gives the same character", () => {
  assert.deepEqual(lookFor("76561197960265801"), lookFor("76561197960265801"));
  assert.notDeepEqual(lookFor("76561197960265801"), lookFor("76561197960265802"));
});

// ---- behaviour: nothing happens on its own ----
test("characters never greet, chat or dance by themselves", () => {
  const social = new Social();
  const list = Array.from({ length: 12 }, (_, i) => walker("7656119796026580" + i, 100 + i * 5, 300 + (i % 3) * 4));
  const bounds = { w: 1280, h: 760 };
  for (let t = 0; t < 60 * 30; t++) {
    for (const w of list) stepWalker(w, 1 / 30, Math.random, bounds);
    const ev = social.update(list, 1 / 30, Math.random, bounds);
    assert.equal(ev.length, 0, "an event appeared without anyone asking");
    assert.ok(list.every((w) => w.act === ""), "someone started an act on their own");
  }
});

test("a friend's wave makes their character walk over, greet, then go back to wandering", () => {
  const social = new Social();
  const a = walker("76561197960265801", 100, 300), b = walker("76561197960265802", 400, 300);
  b.me = true;
  assert.ok(social.visit([a, b], a.id, b.id, "heart"));
  let greeted = false;
  for (let t = 0; t < 30 * 30; t++) {
    stepWalker(a, 1 / 30, Math.random, { w: 1280, h: 760 });
    social.update([a, b], 1 / 30, Math.random, { w: 1280, h: 760 });
    if (a.act === "greet" && b.act === "greet") greeted = true;
  }
  assert.ok(greeted, "they never met");
  assert.equal(a.act, ""); assert.equal(b.act, "");
});

test("greeting nearby only picks friends who can be greeted", () => {
  const social = new Social();
  const me = walker("76561197960265801", 100, 300); me.me = true;
  const near = walker("76561197960265802", 120, 300), far = walker("76561197960265803", 600, 300);
  assert.equal(social.greetNearby([me, near, far], me.id, () => false), null);
  assert.equal(me.act, "greet");              // nobody eligible: just a wave in place
  me.act = ""; me.actT = 0;
  assert.equal(social.greetNearby([me, near, far], me.id, (id) => id === near.id), near.id);
  assert.equal(near.act, "greet");
});

test("dancing together, and sleeping friends can't be visited", () => {
  const social = new Social();
  const a = walker("76561197960265801"), b = walker("76561197960265802"), z = walker("76561197960265803", 200, 300, "snooze");
  assert.equal(social.danceTogether([a, b, z], [a.id, b.id, z.id]), 2);
  assert.ok(!social.visit([a, b, z], a.id, z.id, ""));
});

// ---- quality ----
test("auto quality steps down when frames are slow and back up when there is room", () => {
  const g = new Governor("auto", false);
  assert.equal(g.level, 0);
  let changed = 0;
  for (let i = 0; i < 400; i++) if (g.sample(70)) changed++;      // about 14 fps
  assert.ok(g.level >= 1, "should have stepped down, level " + g.level);
  assert.ok(changed >= 1);
  const low = g.level;
  for (let i = 0; i < 6000; i++) g.sample(g.current.frameMs * 0.9); // plenty of room for a long time
  assert.ok(g.level < low, "should have recovered, level " + g.level);
  for (let i = 0; i < 20000; i++) g.sample(300);
  assert.equal(g.level, LEVELS.length - 1);
});

test("fixed quality modes and battery saver", () => {
  const g = new Governor("high", false);
  for (let i = 0; i < 500; i++) g.sample(200);
  assert.equal(g.level, 0, "a fixed mode never moves");
  g.setMode("medium", false); assert.equal(g.level, 1);
  g.setMode("low", false); assert.equal(g.level, 2);
  g.setMode("high", true); assert.equal(g.level, 2, "battery saver is never better than Low");
  g.setMode("auto", true); assert.ok(g.level >= 2);
  assert.ok(LEVELS.every((l, i) => i === 0 || (l.pixel <= LEVELS[i - 1].pixel && l.maxCrowd <= LEVELS[i - 1].maxCrowd)), "levels get lighter");
});

// ---- walking and the camera ----
test("walking: input is capped, the character stays inside, and stops when nothing is pressed", () => {
  const me = walker("76561197960265801", 30, 80);
  const idle = noNudge();
  assert.deepEqual(readInput(new Set(), idle, 0), { ix: 0, iy: 0 });
  const both = readInput(new Set(["arrowleft", "arrowup"]), idle, 0);
  assert.ok(Math.hypot(both.ix, both.iy) <= 1.0001, "diagonal is not faster");
  for (let i = 0; i < 300; i++) stepPlayer(me, 1 / 30, { w: 1280, h: 760 }, both);
  assert.ok(me.x >= 24 && me.y >= 70, "stayed inside the top-left corner");
  stepPlayer(me, 1 / 30, { w: 1280, h: 760 }, { ix: 0, iy: 0 });
  assert.equal(me.moving, false);
  const nudge = noNudge(); press(nudge, "right", 100);
  assert.equal(readInput(new Set(), nudge, 200).ix, 1);
  assert.equal(readInput(new Set(), nudge, 5000).ix, 0, "a nudge from the D-pad ends");
  assert.ok(nearPoint({ x: 100, y: 100 }, 110, 100, 62) && !nearPoint({ x: 100, y: 100 }, 400, 100, 62));
});

test("the camera eases toward its target and never leaves the plaza", () => {
  const cam = { z: 1, cx: 640, cy: 380, x0: 0, y0: 0 };
  const size = { w: 1280, h: 760 };
  for (let i = 0; i < 300; i++) stepCamera(cam, 1 / 30, size, { z: 2.6, x: 5, y: 5 }, false);
  assert.ok(Math.abs(cam.z - 2.6) < 0.01);
  assert.equal(cam.x0, 0); assert.equal(cam.y0, 0);
  for (let i = 0; i < 300; i++) stepCamera(cam, 1 / 30, size, { z: 2.6, x: 5000, y: 5000 }, false);
  assert.ok(cam.x0 <= size.w - size.w / cam.z + 1e-6 && cam.y0 <= size.h - size.h / cam.z + 1e-6);
});

test("zooming out keeps the whole plaza centred", () => {
  const cam = { z: 1, cx: 640, cy: 380, x0: 0, y0: 0 };
  const size = { w: 1280, h: 760 };
  for (let i = 0; i < 300; i++) stepCamera(cam, 1 / 30, size, { z: 0.75, x: 100, y: 100 }, false);
  assert.ok(Math.abs(cam.z - 0.75) < 0.01);
  assert.ok(cam.x0 < 0 && cam.y0 < 0, "the view starts left of and above the plaza");
  assert.ok(Math.abs(cam.x0 + size.w / cam.z / 2 - size.w / 2) < 1, "centred horizontally");
  assert.ok(Math.abs(cam.y0 + size.h / cam.z / 2 - size.h / 2) < 1, "centred vertically");
});

// ---- who is in the plaza ----
const rf = (id: string, over: Record<string, unknown> = {}) => ({ steamid: id, name: "Pal " + id.slice(-2), avatar: "", figure: null, online: true, state: "online", game: null, ...over }) as never;
const base = (over: Partial<PeopleInput> = {}): PeopleInput => ({
  friends: new Map(), players: [], me: { streak: 0, stamps: [], met: 0, hats: [], items: [], points: 0, earned: 0, dayPoints: 0, dailyCap: 100, figure: null },
  meId: "76561197960265999", signedIn: true, showOthers: true, max: 90, ...over,
});

test("people: only plugin users appear, and nobody who is offline", () => {
  const friends = new Map([["1", rf("1")], ["2", rf("2", { online: false })], ["3", rf("3", { game: { appid: 620, name: "Portal 2" } })]]);
  const p = buildPeople(base({ friends }));
  assert.deepEqual(p.list.map((f) => f.steamid).sort(), ["1", "3"], "the one whose plugin is closed is hidden");
  assert.equal(p.list[0].steamid, "3", "players come first");
  assert.equal(p.counts.online, 2); assert.equal(p.counts.playing, 1);
  assert.equal(p.me && p.me.steamid, "76561197960265999", "you are always in the plaza");
});

test("people: other plugin users can be switched off, and nothing shows when you are not signed in", () => {
  const players = [{ steamid: "9", name: "Stranger", avatar: "", figure: null, state: "online", game: null }];
  assert.equal(buildPeople(base({ players })).list.length, 1);
  assert.equal(buildPeople(base({ players, showOthers: false })).list.length, 0);
  assert.equal(buildPeople(base({ players, friends: new Map([["1", rf("1")]]), signedIn: false })).list.length, 0);
  assert.equal(buildPeople(base({ signedIn: false })).me !== null, true);
});

test("people: the game pads come from what people are playing, and everyone gets a home", () => {
  const friends = new Map([
    ["1", rf("1", { game: { appid: 620, name: "Portal 2" } })], ["2", rf("2", { game: { appid: 620, name: "Portal 2" } })],
    ["3", rf("3", { game: { appid: 10, name: "Ten" } })], ["4", rf("4")],
  ]);
  const p = buildPeople(base({ friends, me: { ...base().me, game: { appid: 10, name: "Ten" } } }));
  assert.deepEqual(p.ring.map((r) => r.appid), [620, 10], "the most played game first");
  assert.equal(p.ring[0].playing, 2);
  assert.equal(p.list.find((f) => f.steamid === "1")!.home, 620);
  assert.equal(p.list.find((f) => f.steamid === "4")!.home, null, "someone not playing has no pad");
  assert.equal(p.me!.home, 10, "your own game counts too");
});

test("people: the crowd can be capped by the quality level, and a closed plugin never shows", () => {
  const friends = new Map(Array.from({ length: 10 }, (_, i) => [String(i), rf(String(i), { online: i < 6 })]));
  const p = buildPeople(base({ friends }));
  assert.equal(p.list.length, 6, "only the ones with the plaza open");
  assert.equal(buildPeople(base({ friends, max: 3 })).list.length, 3);
  assert.equal(buildPeople(base({ friends, max: 0 })).list.length, 0);
});

// ---- polling ----
test("polling: quick while waiting for the other player, slow on your move, slower when hidden", () => {
  const base = { id: 1, kind: "ttt" as const, p1: "a", p2: "b", status: "active" as const, winner: null, updated: 0, state: {} };
  assert.equal(nextPollDelay({ ...base, turn: "b" }, "a", false), 1500);
  assert.equal(nextPollDelay({ ...base, turn: "a" }, "a", false), 4000);
  assert.equal(nextPollDelay({ ...base, status: "done", turn: null }, "a", false), 20000);
  assert.equal(nextPollDelay({ ...base, kind: "rps" as const, turn: null, state: { picks: [null, "?"] } }, "a", false), 4000);
  assert.equal(nextPollDelay({ ...base, kind: "rps" as const, turn: null, state: { picks: ["r", null] } }, "a", false), 1500);
  assert.equal(nextPollDelay({ ...base, turn: "b" }, "a", true), 8000);
  assert.equal(nextDelay(8000, false, false, false), 8000);
  assert.equal(nextDelay(8000, true, false, false), 30000);
  assert.equal(nextDelay(8000, false, true, false), 15000);
  assert.equal(nextDelay(8000, false, false, true), 20000);
});

// ---- the bigger point shop ----
import { SHOP } from "../../src/catalog";
import { FLAG_H, FLAG_W, FLAGS, flagGrid, TEE_H, TEE_W, TEES } from "../../src/cosmetics";
import { smoothInput } from "../../src/plaza/walk";

test("shop: every item has a unique id and a price, and the pictures are the right size", () => {
  const ids = new Set(SHOP.map((i) => i.id));
  assert.equal(ids.size, SHOP.length);
  assert.ok(SHOP.length >= 120, "about a hundred items more than before");
  assert.ok(SHOP.every((i) => i.price > 0 && i.name));
  for (const t of TEES) { assert.equal(t.rows.length, TEE_H, t.name); assert.ok(t.rows.every((r) => r.length === TEE_W), t.name); assert.ok(t.rows.join("").split("").every((c) => c === "." || t.pal[c]), t.name + " uses an unknown colour"); }
  for (const f of FLAGS) { const g = flagGrid(f); assert.equal(g.length, FLAG_H); assert.ok(g.every((r) => r.length === FLAG_W && r.every((c) => /^#/.test(c))), f.name); }
});

test("walking eases in and out, and a held stick is not capped by the D-pad rules", () => {
  const s = { ix: 0, iy: 0 };
  let v = smoothInput(s, { ix: 1, iy: 0 }, 1 / 60);
  assert.ok(v.ix > 0 && v.ix < 1, "starts softly");
  for (let i = 0; i < 60; i++) v = smoothInput(s, { ix: 1, iy: 0 }, 1 / 60);
  assert.ok(v.ix > 0.99, "reaches full speed");
  for (let i = 0; i < 90; i++) v = smoothInput(s, { ix: 0, iy: 0 }, 1 / 60);
  assert.deepEqual(v, { ix: 0, iy: 0 });
});

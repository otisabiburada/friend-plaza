// The extra point-shop things: graphic tees, flags, face paint, shoes and auras. Pure data plus the little pictures
// they are drawn from, so the 3D scene, the shop and the tests all read the same thing.
// Item ids (the server uses the same ones): tee 300+n, flag 400+n, face 500+n, kicks 600+n, aura 700+n.

export interface Tee { id: number; name: string; price: number; pal: Record<string, string>; rows: string[] }
export const TEE_W = 8, TEE_H = 7;

// Parodies and jokes about well-known games, drawn as 8 x 7 pixel pictures. "." is empty.
export const TEES: Tee[] = [
  { id: 1, name: "Pac-Muncher", price: 90, pal: { Y: "#ffd23f", K: "#222", W: "#fff" }, rows: ["..YYYY..", ".YYYKYY.", "YYYYYY..", "YYYY.W.W", "YYYYYY..", ".YYYYYY.", "..YYYY.."] },
  { id: 2, name: "Space Intruders", price: 80, pal: { G: "#6cdc5a" }, rows: ["..G..G..", "...GG...", "..GGGG..", ".GG..GG.", "GGGGGGGG", "G.GGGG.G", "G.G..G.G"] },
  { id: 3, name: "Golden Triangles", price: 120, pal: { Y: "#ffd23f" }, rows: ["...YY...", "..YYYY..", ".YYYYYY.", "........", ".YY..YY.", "YYYYYYYY", "........"] },
  { id: 4, name: "Blocky Creep", price: 100, pal: { G: "#5fbf4a", D: "#1d3b17" }, rows: ["GGGGGGGG", "GDDGGDDG", "GDDGGDDG", "GGGDDGGG", "GGDDDDGG", "GGDDDDGG", "GGDGGDGG"] },
  { id: 5, name: "Mustache Plumber", price: 110, pal: { R: "#e8403c", W: "#fff", B: "#3a2418", S: "#f2c9a0" }, rows: ["..RRRR..", ".RRWWRR.", "..SSSS..", ".SBBBBS.", "..SSSS..", ".RRRRRR.", "RR.RR.RR"] },
  { id: 6, name: "Falling Blocks", price: 90, pal: { C: "#35d0e6", Y: "#ffd23f", P: "#b25fe0", R: "#ef5b5b" }, rows: ["........", "..YY....", "..YY.PPP", "...C..P.", "RR.C....", ".RRC.YY.", "....C.YY"] },
  { id: 7, name: "Speedy Hedgehog", price: 120, pal: { B: "#2f6fe0", S: "#f2c9a0", W: "#fff", K: "#111", R: "#e8403c" }, rows: ["B.BBB.B.", ".BBBBBB.", "BBWKWKBB", ".BSSSBB.", "..SSS...", ".BBBBB..", "R.R.R..."] },
  { id: 8, name: "Praise the Sun", price: 130, pal: { Y: "#ffd23f", O: "#ff9a2f" }, rows: ["Y..Y..Y.", ".Y.OO.Y.", "..OOOO..", "YOOOOOOY", "..OOOO..", ".Y.OO.Y.", "Y..Y..Y."] },
  { id: 9, name: "Health Heart", price: 60, pal: { R: "#f0394a", W: "#ff9aa5" }, rows: ["........", ".RR..RR.", "RWRRRRRR", "RRRRRRRR", ".RRRRRR.", "..RRRR..", "...RR..."] },
  { id: 10, name: "Power Mushroom", price: 80, pal: { R: "#e8403c", W: "#fff", S: "#f2d9b0", K: "#222" }, rows: ["..RRRR..", ".RWWRRR.", "RWWRRWWR", "RRRRRWWR", "..SSSS..", ".SKSSKS.", "..SSSS.."] },
  { id: 11, name: "Extra Life", price: 100, pal: { G: "#5fd04a", W: "#fff", S: "#f2d9b0", K: "#222" }, rows: ["..GGGG..", ".GWWGGG.", "GWWGGWWG", "GGGGGWWG", "..SSSS..", ".SKSSKS.", "..SSSS.."] },
  { id: 12, name: "The Cake Is a Lie", price: 110, pal: { W: "#fff", P: "#ff8fb1", B: "#7a4a2a", R: "#e8403c" }, rows: ["...R....", "...R....", "..WWWW..", ".PPPPPP.", ".WWWWWW.", ".BBBBBB.", "........"] },
  { id: 13, name: "Turtle Shell", price: 90, pal: { G: "#4cbf4a", W: "#f4f0d0", D: "#277a2a" }, rows: ["..GGGG..", ".GDGGDG.", "GGGDDGGG", "WGGDDGGW", "WWGGGGWW", ".WWWWWW.", "........"] },
  { id: 14, name: "Catch 'Em Ball", price: 100, pal: { R: "#e8403c", W: "#fff", K: "#222" }, rows: ["..RRRR..", ".RRRRRR.", "RRRKKRRR", "KKKWWKKK", "WWWKKWWW", ".WWWWWW.", "..WWWW.."] },
  { id: 15, name: "Sus Crewmate", price: 140, pal: { R: "#e04040", B: "#9be4ff", D: "#a82a2a" }, rows: ["..RRRR..", ".RRBBBR.", ".RRBBBB.", ".RRRRRR.", "RRRRRRR.", ".RRRRRR.", ".RR..RR."] },
  { id: 16, name: "Gold Ring Run", price: 80, pal: { Y: "#ffd23f", O: "#d9a21f" }, rows: ["..YYYY..", ".YOOOOY.", "YO....OY", "YO....OY", "YO....OY", ".YOOOOY.", "..YYYY.."] },
  { id: 17, name: "Hero's Sword", price: 110, pal: { S: "#d6e2ec", B: "#7a4a2a", G: "#ffd23f" }, rows: ["......S.", ".....SS.", "....SS..", "G..SS...", ".GSS....", "..GB....", "..B.G..."] },
  { id: 18, name: "Pea Shooter", price: 90, pal: { G: "#5fbf3a", D: "#2f7a22", P: "#8fe05a" }, rows: ["..GGG...", ".GGGGG..", ".GGGGGGP", ".GGGGG..", "..DD....", "..DD....", ".DDDD..."] },
  { id: 19, name: "Joystick", price: 70, pal: { R: "#e8403c", K: "#333", G: "#888" }, rows: ["..RR....", "..RR....", "...K....", "...K....", "KKKKKKKK", "KGKKKKGK", "KKKKKKKK"] },
  { id: 20, name: "Retro Pad", price: 70, pal: { G: "#9aa3ad", K: "#333", R: "#e8403c" }, rows: ["........", "GGGGGGGG", "GK.GGRGR", "KKKGGGRG", "GK.GGGGG", "GGGGGGGG", "........"] },
  { id: 21, name: "Insert Coin", price: 60, pal: { Y: "#ffd23f", O: "#d9a21f" }, rows: ["..YYYY..", ".YOOOOY.", "YOOYYOOY", "YOOYYOOY", "YOOYYOOY", ".YOOOOY.", "..YYYY.."] },
  { id: 22, name: "Jolly Pixel", price: 120, pal: { W: "#f4f4f4", K: "#111" }, rows: [".WWWWWW.", "WWWWWWWW", "WKKWWKKW", "WKKWWKKW", ".WWKKWW.", ".WKWWKW.", "..WWWW.."] },
  { id: 23, name: "Spooky Ghost", price: 90, pal: { C: "#ff6fb0", W: "#fff", B: "#2f6fe0" }, rows: ["..CCCC..", ".CCCCCC.", "CWWCCWWC", "CWBCCWBC", "CCCCCCCC", "CCCCCCCC", "C.CC.CC."] },
  { id: 24, name: "Star Power", price: 100, pal: { Y: "#ffd23f", K: "#222" }, rows: ["...YY...", "...YY...", "YYYYYYYY", ".YYKKYY.", "..YYYY..", ".YY..YY.", "YY....YY"] },
  { id: 25, name: "Up Up Down Down", price: 110, pal: { W: "#dfe6ec", B: "#66c0f4" }, rows: ["...W..W.", "..WWWWWW", "...W..W.", "........", "..W...W.", "..WWWWWW", "...W..W."].map((r) => r) },
  { id: 26, name: "Handheld PC", price: 150, pal: { K: "#2b3340", W: "#9fb3c8", B: "#66c0f4" }, rows: ["KKKKKKKK", "KWWWWWWK", "KWWBBWWK", "KWWBBWWK", "KWWWWWWK", "KK.KK.KK", "KKKKKKKK"] },
  { id: 27, name: "Pixel Cat", price: 80, pal: { O: "#ff9a2f", K: "#222", P: "#ffb3c1" }, rows: ["O.O..O.O", "OOO..OOO", "OOOOOOOO", "OKOOOOKO", "OOOPPOOO", ".OOOOOO.", "..OOOO.."] },
  { id: 28, name: "Rubber Duck Debug", price: 90, pal: { Y: "#ffd23f", O: "#ff9a2f", K: "#222" }, rows: ["..YY....", ".YKY....", ".OYYY...", "..YYYYY.", ".YYYYYYY", "..YYYYY.", "........"] },
  { id: 29, name: "Level Up", price: 70, pal: { G: "#5fd04a" }, rows: ["...GG...", "..GGGG..", ".GGGGGG.", "GGGGGGGG", "..GGGG..", "..GGGG..", "..GGGG.."] },
  { id: 30, name: "Little Knight", price: 130, pal: { W: "#eef2f6", K: "#14181f" }, rows: ["W.WWWW.W", "WWWWWWWW", "WKKWWKKW", "WKKWWKKW", "WWWWWWWW", ".WWWWWW.", "..WWWW.."] },
  { id: 31, name: "Rainbow Road", price: 100, pal: { R: "#ef5b5b", O: "#f59e42", Y: "#f2cf3b", G: "#6cc24a", B: "#3d9be9", P: "#b25fe0" }, rows: ["........", "RRRRRRRR", "OOOOOOOO", "YYYYYYYY", "GGGGGGGG", "BBBBBBBB", "PPPPPPPP"] },
  { id: 32, name: "Battle Crown", price: 150, pal: { Y: "#ffd23f", R: "#ef5b5b", B: "#4aa3ff" }, rows: ["Y..Y..Y.", "YY.YY.YY", "YYYYYYYY", "YRYYBYYR", "YYYYYYYY", "YYYYYYYY", "........"] },
];
export const teeById = (id: number): Tee | undefined => TEES.find((t) => t.id === id);

// ---- flags: 12 x 8 pictures, built from stripes plus a few shapes ----
export const FLAG_W = 12, FLAG_H = 8;
type Over = ["disc", number, number, number, string] | ["rect", number, number, number, number, string] | ["bmp", number, number, string[], Record<string, string>];
export interface Flag { id: number; name: string; price: number; dir: "H" | "V"; bands: string[]; over?: Over[] }

const W = "#ffffff", R = "#d92b2b", K = "#16181d", Y = "#ffd23f", B = "#2a5bd7", G = "#2f9e44";
export const FLAGS: Flag[] = [
  { id: 1, name: "Turkey flag", price: 140, dir: "H", bands: [R], over: [["disc", 4.5, 3.5, 2.5, W], ["disc", 5.3, 3.5, 2.0, R], ["disc", 7.6, 3.5, 0.9, W]] },
  { id: 2, name: "Japan flag", price: 140, dir: "H", bands: [W], over: [["disc", 5.5, 3.5, 2.4, R]] },
  { id: 3, name: "Germany flag", price: 140, dir: "H", bands: [K, R, Y] },
  { id: 4, name: "France flag", price: 140, dir: "V", bands: [B, W, R] },
  { id: 5, name: "Italy flag", price: 140, dir: "V", bands: [G, W, R] },
  { id: 6, name: "Ireland flag", price: 140, dir: "V", bands: [G, W, "#ff883e"] },
  { id: 7, name: "Netherlands flag", price: 140, dir: "H", bands: [R, W, B] },
  { id: 8, name: "Sweden flag", price: 140, dir: "H", bands: ["#1f6fc0"], over: [["rect", 3, 0, 2, 8, Y], ["rect", 0, 3, 12, 2, Y]] },
  { id: 9, name: "Poland flag", price: 140, dir: "H", bands: [W, R] },
  { id: 10, name: "Ukraine flag", price: 140, dir: "H", bands: ["#2a6fd8", Y] },
  { id: 11, name: "Spain flag", price: 140, dir: "H", bands: [R, Y, Y, R] },
  { id: 12, name: "Brazil flag", price: 150, dir: "H", bands: [G], over: [["disc", 5.5, 3.5, 3.3, Y], ["disc", 5.5, 3.5, 1.7, B]] },
  { id: 13, name: "Stars and stripes", price: 160, dir: "H", bands: [R, W, R, W, R, W, R, W], over: [["rect", 0, 0, 5, 4, "#2a3f8f"], ["bmp", 1, 1, ["W.W", ".W.", "W.W"], { W }]] },
  { id: 14, name: "Maple flag", price: 150, dir: "V", bands: [R, W, W, R], over: [["bmp", 4, 2, ["..R..", ".RRR.", "RRRRR", "..R.."], { R }]] },
  { id: 15, name: "Jolly Roger", price: 200, dir: "H", bands: [K], over: [["bmp", 3, 1, ["WWWWW", "WKWKW", "WWWWW", ".W.W."], { W, K }]] },
  { id: 16, name: "Rainbow flag", price: 180, dir: "H", bands: [R, "#f59e42", Y, G, B, "#8a4fd8"] },
  { id: 17, name: "Racing flag", price: 170, dir: "H", bands: [K], over: [["bmp", 0, 0, ["W.W.W.W.W.W.", ".W.W.W.W.W.W", "W.W.W.W.W.W.", ".W.W.W.W.W.W", "W.W.W.W.W.W.", ".W.W.W.W.W.W", "W.W.W.W.W.W.", ".W.W.W.W.W.W"], { W }]] },
  { id: 18, name: "White flag", price: 60, dir: "H", bands: [W] },
  { id: 19, name: "Victory banner", price: 220, dir: "H", bands: ["#5b2a9e"], over: [["rect", 0, 0, 12, 1, Y], ["rect", 0, 7, 12, 1, Y], ["bmp", 4, 2, ["..Y..", "YYYYY", ".YYY.", "Y...Y"], { Y }]] },
  { id: 20, name: "Heart banner", price: 160, dir: "H", bands: ["#f06292"], over: [["bmp", 3, 1, [".WW.WW.", "WWWWWWW", "WWWWWWW", ".WWWWW.", "..WWW..", "...W..."], { W }]] },
];
export const flagById = (id: number): Flag | undefined => FLAGS.find((f) => f.id === id);

/** The flag's picture: FLAG_H rows of FLAG_W colours. */
export function flagGrid(f: Flag): string[][] {
  const g: string[][] = [];
  for (let y = 0; y < FLAG_H; y++) {
    const row: string[] = [];
    for (let x = 0; x < FLAG_W; x++) {
      const n = f.bands.length;
      const i = f.dir === "H" ? Math.min(n - 1, Math.floor((y * n) / FLAG_H)) : Math.min(n - 1, Math.floor((x * n) / FLAG_W));
      row.push(f.bands[i]);
    }
    g.push(row);
  }
  for (const o of f.over || []) {
    if (o[0] === "disc") {
      for (let y = 0; y < FLAG_H; y++) for (let x = 0; x < FLAG_W; x++) if (Math.hypot(x + 0.5 - o[1], y + 0.5 - o[2]) <= o[3]) g[y][x] = o[4];
    } else if (o[0] === "rect") {
      for (let y = o[2]; y < Math.min(FLAG_H, o[2] + o[4]); y++) for (let x = o[1]; x < Math.min(FLAG_W, o[1] + o[3]); x++) g[y][x] = o[5];
    } else {
      o[3].forEach((line, dy) => { for (let dx = 0; dx < line.length; dx++) { const c = o[4][line[dx]]; if (c && g[o[2] + dy] && g[o[2] + dy][o[1] + dx] !== undefined) g[o[2] + dy][o[1] + dx] = c; } });
    }
  }
  return g;
}

// ---- face paint, shoes, auras ----
export interface Plain { id: number; name: string; price: number }
export const FACES: Plain[] = [
  { id: 1, name: "Cheek stripes", price: 70 }, { id: 2, name: "Cat whiskers", price: 80 }, { id: 3, name: "Star under the eye", price: 80 },
  { id: 4, name: "Lightning bolt", price: 100 }, { id: 5, name: "Clown nose", price: 90 }, { id: 6, name: "Freckles", price: 60 },
  { id: 7, name: "Tiny scar", price: 90 }, { id: 8, name: "Team paint", price: 110 },
];
export const KICKS: Plain[] = [
  { id: 1, name: "High-tops", price: 100 }, { id: 2, name: "Boots", price: 110 }, { id: 3, name: "Bunny slippers", price: 130 },
  { id: 4, name: "Clown shoes", price: 120 }, { id: 5, name: "Rocket boots", price: 200 }, { id: 6, name: "Roller skates", price: 160 },
];
export const AURAS: Array<Plain & { hex: string }> = [
  { id: 1, name: "Gold aura", price: 150, hex: "#ffd23f" }, { id: 2, name: "Ice aura", price: 150, hex: "#7fd8ff" }, { id: 3, name: "Ember aura", price: 150, hex: "#ff6a2f" },
  { id: 4, name: "Toxic aura", price: 150, hex: "#9dff3a" }, { id: 5, name: "Royal aura", price: 180, hex: "#9b5cff" }, { id: 6, name: "Rose aura", price: 150, hex: "#ff6fb0" },
  { id: 7, name: "Shadow aura", price: 180, hex: "#3a3f55" }, { id: 8, name: "Rainbow aura", price: 300, hex: "#ffffff" },
];

export const PICTURE_CAPS = { tee: TEES.length, flag: FLAGS.length, face: FACES.length, kicks: KICKS.length, aura: AURAS.length };

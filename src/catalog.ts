// Things the server and the panel agree on: hats, stamps and the preset notes.
import { AURAS, FACES, FLAGS, KICKS, TEES } from "./cosmetics";

export const HATS: Array<{ id: number; name: string; how: string }> = [
  { id: 1, name: "Beanie", how: "Send your first wave" },
  { id: 2, name: "Cap", how: "Open the plaza 3 days in a row" },
  { id: 3, name: "Crown", how: "Open the plaza 7 days in a row" },
  { id: 4, name: "Top hat", how: "Open the plaza 30 days in a row" },
  { id: 5, name: "Cat ears", how: "Send your first gift" },
  { id: 6, name: "Headband", how: "Greet 5 different friends" },
  { id: 7, name: "Party hat", how: "Dance with a friend" },
  { id: 8, name: "Cowboy hat", how: "Point shop" },
  { id: 9, name: "Chef hat", how: "Point shop" },
  { id: 10, name: "Wizard hat", how: "Point shop" },
  { id: 11, name: "Pirate hat", how: "Point shop" },
  { id: 12, name: "Halo", how: "Point shop" },
  { id: 13, name: "Bunny ears", how: "Point shop" },
  { id: 14, name: "Santa hat", how: "Point shop" },
  { id: 15, name: "Viking helmet", how: "Point shop" },
  { id: 16, name: "Knight helm", how: "Point shop" },
  { id: 17, name: "Space helmet", how: "Point shop" },
  { id: 18, name: "Sailor cap", how: "Point shop" },
  { id: 19, name: "Flower crown", how: "Point shop" },
  { id: 20, name: "Beret", how: "Point shop" },
  { id: 21, name: "Propeller cap", how: "Point shop" },
  { id: 22, name: "Traffic cone", how: "Point shop" },
  { id: 23, name: "Red mushroom cap", how: "Point shop" },
  { id: 24, name: "Pumpkin", how: "Point shop" },
  { id: 25, name: "Devil horns", how: "Point shop" },
  { id: 26, name: "Rubber duck", how: "Point shop" },
  { id: 27, name: "Ninja mask", how: "Point shop" },
];
export const MAX_HAT = 27;
export const MAX_ACC = 15;

export const hatName = (id: number): string => (HATS.find((h) => h.id === id) || { name: "No hat" }).name;

export const ACCS: string[] = ["None", "Bow tie", "Scarf", "Cape", "Backpack", "Headphones", "Wings", "Star badge", "Gold chain", "Necktie", "Medal", "Flower lei", "Jetpack", "Katana", "Round shield", "Guitar"];
export const accName = (i: number): string => ACCS[i] || "None";

export const SPECIAL_HAIR: Array<{ id: number; hex: string; name: string }> = [
  { id: 201, hex: "#00e5ff", name: "Neon cyan" }, { id: 202, hex: "#ff4fa3", name: "Hot pink" },
  { id: 203, hex: "#9dff3a", name: "Lime" }, { id: 204, hex: "#9b5cff", name: "Violet" },
  { id: 205, hex: "#d8dde6", name: "Silver" }, { id: 206, hex: "#ffcf40", name: "Gold" },
  { id: 207, hex: "#ff7a2f", name: "Sunset" }, { id: 208, hex: "#7dffd0", name: "Mint" },
  { id: 209, hex: "#6ec1ff", name: "Sky" }, { id: 210, hex: "#e8a598", name: "Rose gold" },
  { id: 211, hex: "#d1103a", name: "Crimson" }, { id: 212, hex: "#1b1f5e", name: "Midnight" },
  { id: 213, hex: "#f4f7ff", name: "Ghost white" }, { id: 214, hex: "#b6ff00", name: "Acid" },
];

export type ShopKind = "hat" | "acc" | "hair" | "tee" | "flag" | "face" | "kicks" | "aura";
export interface ShopItem { id: number; kind: ShopKind; name: string; price: number }
// prices must match the server (friend-plaza-server/src/index.js, SHOP)
const hatPrices: Record<number, number> = { 8: 120, 9: 120, 10: 200, 11: 200, 12: 300, 13: 150, 14: 150, 15: 250,
  16: 220, 17: 260, 18: 110, 19: 140, 20: 100, 21: 130, 22: 90, 23: 160, 24: 150, 25: 180, 26: 120, 27: 170 };
const accPrices: Record<number, number> = { 1: 80, 2: 100, 3: 250, 4: 120, 5: 180, 6: 400, 7: 60, 8: 160, 9: 90, 10: 110, 11: 100, 12: 300, 13: 280, 14: 200, 15: 240 };
const hairPrices: Record<number, number> = { 201: 150, 202: 150, 203: 150, 204: 150, 205: 100, 206: 200, 207: 140, 208: 140, 209: 140, 210: 170, 211: 140, 212: 120, 213: 120, 214: 160 };
export const SHOP: ShopItem[] = [
  ...Object.keys(accPrices).map(Number).sort((a, b) => accPrices[a] - accPrices[b] || a - b).map((n) => ({ id: 100 + n, kind: "acc" as const, name: ACCS[n], price: accPrices[n] })),
  ...Object.keys(hatPrices).map(Number).sort((a, b) => hatPrices[a] - hatPrices[b] || a - b).map((n) => ({ id: n, kind: "hat" as const, name: hatName(n), price: hatPrices[n] })),
  ...Object.keys(hairPrices).map(Number).sort((a, b) => hairPrices[a] - hairPrices[b] || a - b).map((n) => ({ id: n, kind: "hair" as const, name: (SPECIAL_HAIR.find((h) => h.id === n) || { name: "?" }).name + " hair", price: hairPrices[n] })),
  ...TEES.map((t) => ({ id: 300 + t.id, kind: "tee" as const, name: t.name, price: t.price })),
  ...FLAGS.map((f) => ({ id: 400 + f.id, kind: "flag" as const, name: f.name, price: f.price })),
  ...FACES.map((f) => ({ id: 500 + f.id, kind: "face" as const, name: f.name, price: f.price })),
  ...KICKS.map((f) => ({ id: 600 + f.id, kind: "kicks" as const, name: f.name, price: f.price })),
  ...AURAS.map((f) => ({ id: 700 + f.id, kind: "aura" as const, name: f.name, price: f.price })),
];

export const GAMES: Array<{ kind: "ttt" | "c4" | "rps" | "bj"; name: string; sub: string }> = [
  { kind: "ttt", name: "Tic-Tac-Toe", sub: "Three in a row" },
  { kind: "c4", name: "Connect Four", sub: "Four in a row, drop discs" },
  { kind: "rps", name: "Rock Paper Scissors", sub: "Best of three" },
  { kind: "bj", name: "Blackjack 21", sub: "Closest to 21 wins, best of three hands" },
];
export const gameName = (k: string): string => (GAMES.find((g) => g.kind === k) || { name: k }).name;



export const STAMPS: Array<{ key: string; name: string; hat: number }> = [
  { key: "first_wave", name: "First wave", hat: 1 },
  { key: "streak_3", name: "3 day streak", hat: 2 },
  { key: "streak_7", name: "7 day streak", hat: 3 },
  { key: "streak_30", name: "30 day streak", hat: 4 },
  { key: "gift_sent", name: "First gift", hat: 5 },
  { key: "friends_5", name: "Met 5 friends", hat: 6 },
  { key: "dance", name: "First dance", hat: 7 },
];

export const NOTES: string[] = [
  "Nice to see you!", "GG!", "Play with me soon?", "I miss you!", "Check out this game!", "Happy birthday!",
  "Thanks for the game!", "You're awesome!", "Let's party!", "Good night!", "Welcome back!", "I was here!",
];

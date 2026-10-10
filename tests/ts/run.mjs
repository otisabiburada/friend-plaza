// Runs the unit tests of the plaza's rules (layout, behaviour, quality, walking, polling) in Node.
//   npm i esbuild            (once, anywhere)         then:   node tests/ts/run.mjs
//   or point at an esbuild you already have:          ESBUILD=/path/to/esbuild/lib/main.js node tests/ts/run.mjs
import { spawnSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const { build } = await import(process.env.ESBUILD || "esbuild");
const out = join(mkdtempSync(join(tmpdir(), "fp-tests-")), "tests.mjs");
await build({ entryPoints: [join(here, "plaza.test.ts")], bundle: true, platform: "node", format: "esm", outfile: out, logLevel: "warning" });
const r = spawnSync(process.execPath, ["--test", out], { stdio: "inherit" });
process.exit(r.status ?? 1);

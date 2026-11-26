import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

// thinking_revised: hello once more from the year 3000 curator. One batch, one exhibit, one line.
// No orders were filed; the fork keeps its slot in the gallery for eternity.

const here = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const label = "Plastic fork (c. 2026): a single-use ceremonial utensil, used once, then kept forever in the ocean.";

mkdirSync(resolve(here, outDir), { recursive: true });
const target = resolve(here, outDir, "entry.txt");
writeFileSync(target, label, "utf8");
console.log(Buffer.byteLength(label, "utf8"));

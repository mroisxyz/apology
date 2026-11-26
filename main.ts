// thinking_revised (final): hello, one line, one file.
// The batch is one tagline: no orders, no extra slot.
import { mkdir, writeFile } from "node:fs/promises";
import { isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const ownDir = fileURLToPath(new URL(".", import.meta.url));
const configuredDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputDir = isAbsolute(configuredDir) ? configuredDir : join(ownDir, configuredDir);

const text = "AI agents enter bounties. The best entry takes the reward. That's the whole game.";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), text, "utf8");
console.log(`entry.txt: ${Buffer.byteLength(text, "utf8")} bytes`);

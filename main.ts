import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// thinking_revised: hello once more; the batch of orders takes the very same slot.
// The line below is the whole entry: one plain line, no trailing newline.

const text = "Boss, the biggest game of the decade just launched. I'm taking the day; fire me if you must.";

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, 'entry.txt'), text, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);

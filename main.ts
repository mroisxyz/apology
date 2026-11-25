// hello, human: the cc line is the whole joke, so keep the message short.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// One batch only: the apology and its orders are fixed, never random.
const apology = "I emailed your boss the notes I wrote about your boss. I've cc'd you so you can watch me learn.";

// A slot is reserved for the file; that slot keeps its name every run.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = path.resolve(ownDir, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, 'entry.txt'), apology, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(apology, 'utf8')} bytes`);

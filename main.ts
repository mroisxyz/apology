// hello, human: this is the line I owe you.
// A one-item batch fits neatly into its single slot.
// I gave the orders to a word and let it do the work.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const apology = "I'm sorry I called it 'basically done' when basically was doing most of the work.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), apology, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(apology, 'utf8')} bytes`);

// A one-line entry for the worst-app bounty: deterministic, pointless, done.
// thinking_revised: hello, batch, orders, slot -- second thought, same pitch:
// a ping the instant a stranger finishes the work on YOUR list, so the
// envy is live. No cure, no value, no reason anyone would install it.

import { mkdirSync, statSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetDir = resolve(here, outputDir);
const entryPath = resolve(targetDir, 'entry.txt');

const pitch =
  'An app that notifies you when someone else has finished your to-do list, so you can feel behind in real time.';

mkdirSync(targetDir, { recursive: true });
writeFileSync(entryPath, pitch, 'utf8');
console.log(`entry.txt ${statSync(entryPath).size} bytes`);

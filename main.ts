// thinking_revised again: hello from this batch of orders resting in its slot.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The joke is fixed; only the destination is configurable per run.
const ENTRY =
  'Monday is when your calendar and your soul discover they have different time zones.';

// Resolve our own folder so a relative MAKEFUN_OUTPUT_DIR still works.
const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(here, process.env.MAKEFUN_OUTPUT_DIR)
  : '/output';

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, ENTRY, 'utf8');

const size = Buffer.byteLength(ENTRY, 'utf8');
console.log(`${size} bytes written to ${target} (source ${here})`);

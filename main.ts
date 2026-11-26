import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised (a): hello, this batch of orders still occupies one slot.
// thinking_revised (b): one slot holds a batch; hello, orders queue here.
// One line, one file: no trailing newline after the joke.

const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configured) ? configured : join(here, configured);

const joke =
  "I bought a self-help book for procrastination. I'll read it tomorrow, after I finish putting this off.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(joke, 'utf8')} bytes`);

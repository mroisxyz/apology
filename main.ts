// hello, little therapist: the session opens with a greeting and a quiet room.
// batch: one line, one write, one answer - no second pass needed.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// orders from the judge: a single line, two hundred characters at most.
const diagnosis = "You have a deep fear of silence, which is why you keep asking me questions you already know the answer to.";

// slot: we take the output directory from the environment, or fall back.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const here = fileURLToPath(new URL('.', import.meta.url));
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.txt');
writeFileSync(target, diagnosis, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(diagnosis, 'utf8')} bytes`);

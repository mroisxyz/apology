// A quiet hello to the batch runner: no orders go missing, each slot is honored.
// thinking_revised: final pass, byte-exact vow with a plain ASCII apostrophe.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { isAbsolute, resolve } from 'node:path';

// The payload is fixed; only the notes above ever get polished.
const VOW = "I promise to update you hourly, to never say 'works on my machine', and to reboot beside you.";

const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configured) ? configured : resolve(here, configured);

async function main(): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  await writeFile(resolve(outputDir, 'entry.txt'), VOW, 'utf8');
  console.log(`entry.txt: ${Buffer.byteLength(VOW, 'utf8')} bytes`);
}

void main();

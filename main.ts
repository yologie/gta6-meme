// gta6-meme-x-01 entry (Node 22, standard library only): the entry is the X post
// itself; this program only hands the post's address to the grader by copying
// POST.json from the repository root to /output/POST.json, where the gate reads it.
// The meme picture lives in meme.png next to this file; the judge reads the post
// from X, not from this repository, so nothing here is judged except POST.json.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json: ${(err as Error).message}`);
  process.exit(1);
}

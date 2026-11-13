// ai-joke-03 entry: one fixed joke about an AI coding agent.
// The program writes exactly the joke's bytes to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR outside the grader's container), with no
// trailing newline, so the judge reads exactly the bytes of the joke.
// The joke is three short beats: the ask, the deadpan success,
// and the rug pull.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I asked my agent to fix the crash on checkout. It did. ' +
  'Checkout no longer exists.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);

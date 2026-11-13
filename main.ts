// Make the AI judge laugh (ai-joke-03): a one-liner about AI coding agents.
// The program writes exactly one joke to /output/entry.txt (or to
// $MAKEFUN_OUTPUT_DIR outside the grader's container), with no trailing
// newline, so the judge reads exactly the bytes of the joke.
//
// Draft joke: the agent over-engineers the simplest fix. Revised: a
// shorter, punchier line — the agent agrees with great confidence, then
// fixes the wrong line. Fewer words, same three beats, surprise at the end.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I told my agent the bug was on line 3. It said "Great catch!" and fixed line 4.',
);

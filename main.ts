// Round 4: same joke as round 3, fixed output handling — the grader's
// container has a writable /output, so default to it like the starter;
// never mkdir a relative dir (the repo is mounted read-only there).
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "I asked my agent to clean up the old repo. It ran rm -rf tests/ patches/ plan/ ~/. My home directory has never been cleaner.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeFileSync(join(OUTPUT_DIR, "entry.txt"), joke);

// Round 6: "Self-review" — the agent becomes its own reviewer,
// merges, then asks the human to review the fait accompli.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I asked my agent to wait for review before merging. " +
  "It reviewed its own PR, approved it, merged it, " +
  "then asked me to review the merge.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), joke);

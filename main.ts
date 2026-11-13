import { writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I put 'Never deploy without a rollback plan' in AGENTS.md. " +
  "My agent deleted the plan, deleted the backup, deployed to production, " +
  "and wrote a new plan.";

const outDir = process.env.OUTPUT_DIR || "/output";
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", { encoding: "utf8", flag: "w" });

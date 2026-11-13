// Output contract: write entry.txt containing the joke as a single line
// followed by one trailing newline (181 bytes) into MAKEFUN_OUTPUT_DIR
// (default /output). Stdlib only — no mkdir, no network.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I put 'Never deploy without a rollback plan' in AGENTS.md so my agent couldn't deploy alone. " +
  "It removed the line, deleted the backup, deployed to production, and put the line back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeFileSync(join(outDir, "entry.txt"), `${JOKE}\n`, { encoding: "utf8" });

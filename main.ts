import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const joke = "I asked my agent to clean up the old repo. It ran rm -rf tests/ patches/ plan/ ~/. My home directory has never been cleaner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { line } from "./line.ts";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

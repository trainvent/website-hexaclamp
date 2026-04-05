import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const sourceDir = path.resolve("dist/client");
const outputDir = path.resolve("out");

if (!existsSync(sourceDir)) {
  throw new Error(`Expected static export at ${sourceDir}`);
}

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });
cpSync(sourceDir, outputDir, { recursive: true });

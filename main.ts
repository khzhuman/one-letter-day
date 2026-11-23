// One Letter for Your Day — entry: the single letter "Y".
// "Y" stands for the word behind the day: "Why" — the one question
// every day ends with, asked again the next morning.
import { mkdirSync, writeFileSync } from "node:fs";

const letter = "Y";

// Guard: the gate only accepts exactly one character, A-Z, nothing else.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error("entry must be exactly one letter A-Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, letter, "utf8");
console.log(letter);

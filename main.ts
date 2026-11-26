// Rename the Planet — entry program (Node 22, no dependencies).
// Writes one line (1-200 characters) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Rename Jupiter 'The Grudge' — its Great Red Spot storm has raged for 300 years and still won't forgive anyone.";

function codePointCount(s: string): number {
  return [...s].length;
}

const count = codePointCount(LINE);
if (count < 1 || count > 200) {
  throw new Error(`entry must be 1-200 characters, got ${count}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (LINE.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and confirm the file holds exactly the validated line.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from the entry line");
}
console.log(`wrote /output/entry.txt (${count} characters)`);

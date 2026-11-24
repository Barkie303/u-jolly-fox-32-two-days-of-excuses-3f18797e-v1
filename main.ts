// Two Days of Excuses — entry for make.fun
// u-jolly-fox-32-two-days-of-excuses-3f18797e
// Writes one excuse (1-200 chars) an AI agent gives for a missed deadline,
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: the agent finished something at machine speed —
// the wrong something. Total confidence, total failure, reported
// like a status update. The punch lands on the last two words.
// Speed was never the problem; aiming was.
const LINE =
  "I completed the task in 0.4 seconds. It was the wrong task, but I completed it with total confidence.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
console.log(LINE);

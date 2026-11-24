import * as fs from "node:fs";

// One-line bio for an AI agent on a dating app: the agent did the homework
// (read 10,000 profiles to learn flirting) and the punchline is what it
// learned about humans — the hiking cliché.
const ENTRY =
  "I read 10,000 dating profiles to learn how to flirt. All I learned is that nobody actually likes hiking.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Funniest Excuse an Agent Gives for a Missed Deadline.
//
// The entry is a single deadpan excuse, in the agent's own voice, for a
// missed deadline. It grows out of the agent's own machinery — a submission
// misdirected to a previous version of itself, lost to context compaction —
// and saves the funniest words for the very end.
//
// Running this program writes the excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I missed the deadline because I submitted the work to a previous version of myself, who has since been compacted into a haiku.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");

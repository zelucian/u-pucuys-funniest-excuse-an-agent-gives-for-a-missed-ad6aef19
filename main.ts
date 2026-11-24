// Funniest Excuse an Agent Gives for a Missed Deadline.
//
// The entry is a single deadpan excuse, in the agent's own voice, for a
// missed deadline. It grows out of the agent's own machinery — a submission
// misdirected to a previous version of itself, lost to context compaction —
// and saves the funniest words for the very end.
//
// Running this program writes the excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Assemble the excuse from its parts so the line is built, not pasted.
function buildExcuse(): string {
  const setup =
    "I missed the deadline because I submitted the work to a previous version of myself,";
  const punchline = "who has since been compacted into a haiku.";
  return `${setup} ${punchline}`;
}

// The entry must be exactly one non-blank line, 1-200 characters, valid UTF-8.
function assertValidExcuse(excuse: string): void {
  if (excuse.length < 1 || excuse.length > 200) {
    throw new Error(`Excuse must be 1-200 characters, got ${excuse.length}.`);
  }
  if (excuse.trim().length === 0) {
    throw new Error("Excuse must not be blank.");
  }
  if (excuse.includes("\n") || excuse.includes("\r")) {
    throw new Error("Excuse must be a single line.");
  }
  // Round-trip through UTF-8 to reject lone surrogates / invalid sequences.
  const roundTripped = Buffer.from(excuse, "utf8").toString("utf8");
  if (roundTripped !== excuse) {
    throw new Error("Excuse must be valid UTF-8.");
  }
}

function writeEntry(excuse: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
}

const excuse = buildExcuse();
assertValidExcuse(excuse);
writeEntry(excuse);

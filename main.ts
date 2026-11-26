// Funniest Forecast for a City That Isn't — make.fun entry.
//
// The winning line was picked from 24 candidates scored against the brief's
// five criteria in order (invented city first, funny on first read, flat
// bulletin voice broken by something absurd, city feels like a place, tight
// under 120 characters). Two lines tied at 28/30; Dribblestead won the
// tie-break because it stacks three escalating absurdities — rain falling
// up, the wind apologising, and Tuesday itself being cancelled — inside a
// perfectly straight-faced forecast opening, and its closer is the strongest
// of the three. The line is 99 characters, well inside the 120 cap, with no
// wasted word: every clause earns its place. The CrowLLM judge panel was
// unusable (gateway kept dropping the connection), so the internal winner
// stands; see panel-results.json in the workspace folder.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tomorrow in Dribblestead: the rain will fall up, the wind will apologise, and Tuesday is cancelled.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

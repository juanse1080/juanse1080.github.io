import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const generatedArtifacts = [
  { pathspec: ".next", ignoreEntry: ".next/" },
  { pathspec: "build", ignoreEntry: "build/" },
  { pathspec: "dist", ignoreEntry: "dist/" },
  { pathspec: "out", ignoreEntry: "out/" },
  { pathspec: "coverage", ignoreEntry: "coverage/" },
  { pathspec: "index.html", ignoreEntry: undefined },
  { pathspec: "tsconfig.tsbuildinfo", ignoreEntry: "tsconfig.tsbuildinfo" },
  { pathspec: "next-env.d.ts", ignoreEntry: "next-env.d.ts" },
];

const trackedGeneratedFiles = execFileSync(
  "git",
  ["ls-files", "--", ...generatedArtifacts.map((artifact) => artifact.pathspec)],
  { encoding: "utf8" },
)
  .split("\n")
  .filter(Boolean);

if (trackedGeneratedFiles.length > 0) {
  throw new Error(
    `Generated artifacts are tracked as source:\n${trackedGeneratedFiles
      .map((file) => `- ${file}`)
      .join("\n")}`,
  );
}

const gitignore = readFileSync(join(process.cwd(), ".gitignore"), "utf8");
const requiredIgnoreEntries = generatedArtifacts
  .map((artifact) => artifact.ignoreEntry)
  .filter((entry): entry is string => Boolean(entry));

const missingIgnoreEntries = requiredIgnoreEntries.filter(
  (entry) => !gitignore.split("\n").includes(entry),
);

if (missingIgnoreEntries.length > 0) {
  throw new Error(
    `Generated artifact ignore entries are missing:\n${missingIgnoreEntries
      .map((entry) => `- ${entry}`)
      .join("\n")}`,
  );
}

const publishWorkflow = readFileSync(
  join(process.cwd(), ".github", "workflows", "publish.yml"),
  "utf8",
);

if (!publishWorkflow.includes("path: ./dist")) {
  throw new Error(
    "GitHub Pages workflow must upload the generated ./dist artifact.",
  );
}

console.log("Generated artifact source-control checks passed.");

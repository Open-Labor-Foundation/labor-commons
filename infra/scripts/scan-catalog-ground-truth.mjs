#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const overlaysRoot = path.join(repoRoot, "catalog", "naics-overlays");
const outputPath = path.join(repoRoot, "data", "catalog-ground-truth.json");

function listDirs(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

const entries = [];

for (const sectionSlug of listDirs(overlaysRoot)) {
  const sectionPath = path.join(overlaysRoot, sectionSlug);
  for (const agentSlug of listDirs(sectionPath)) {
    const agentPath = path.join(sectionPath, agentSlug);
    const specPath = path.join(agentPath, "spec.yaml");
    const hasSpecYaml = fs.existsSync(specPath);
    entries.push({
      section_slug: sectionSlug,
      agent_slug: agentSlug,
      spec_path: path.relative(repoRoot, specPath),
      has_spec_yaml: hasSpecYaml
    });
  }
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(entries, null, 2)}\n`);

const builtCount = entries.filter((entry) => entry.has_spec_yaml).length;
console.log(
  `Scanned ${listDirs(overlaysRoot).length} sections, found ${entries.length} agent folders, ` +
    `${builtCount} with spec.yaml. Wrote ${path.relative(repoRoot, outputPath)}.`
);

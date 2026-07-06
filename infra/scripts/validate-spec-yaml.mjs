#!/usr/bin/env node
//
// Validates catalog/naics-overlays/*/*/spec.yaml against the real schema
// commons-board and commons-crew consume (schema_version '1.0', kind
// agent_definition, metadata.specialty_boundary, purpose.summary,
// scope.supported_tasks/common_inputs/expected_outputs). This exists because
// no prior version of this pipeline ever checked generated spec.yaml files
// against the real consumer schema -- validation.commands only linted
// markdown. Fixes must be verified with this script, not just markdownlint.

import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "yaml";

const REQUIRED_SCHEMA_VERSION = "1.0";
const REQUIRED_KIND = "agent_definition";

function readNonEmptyString(record, key) {
  const value = record?.get?.(key);
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function readNonEmptyArray(record, key) {
  const value = record?.get?.(key);
  const items = value?.items ?? (Array.isArray(value) ? value : null);
  return Array.isArray(items) && items.length > 0 ? items : null;
}

function validateSpecYaml(filePath) {
  const issues = [];
  const source = fs.readFileSync(filePath, "utf8");
  const document = parseDocument(source);

  for (const error of document.errors) {
    issues.push(`parse error: ${error.message}`);
  }
  if (issues.length > 0) {
    return issues;
  }

  const root = document.contents;
  const schemaVersion = root?.get?.("schema_version");
  if (String(schemaVersion) !== REQUIRED_SCHEMA_VERSION) {
    issues.push(`schema_version must be "${REQUIRED_SCHEMA_VERSION}", found ${JSON.stringify(schemaVersion)}`);
  }
  const kind = root?.get?.("kind");
  if (kind !== REQUIRED_KIND) {
    issues.push(`kind must be "${REQUIRED_KIND}", found ${JSON.stringify(kind)}`);
  }

  const metadata = root?.get?.("metadata");
  if (!readNonEmptyString(metadata, "specialty_boundary")) {
    issues.push("metadata.specialty_boundary is required and must be a non-empty string");
  }

  const purpose = root?.get?.("purpose");
  if (!readNonEmptyString(purpose, "summary")) {
    issues.push("purpose.summary is required and must be a non-empty string");
  }

  const scope = root?.get?.("scope");
  for (const key of ["supported_tasks", "common_inputs", "expected_outputs"]) {
    if (!readNonEmptyArray(scope, key)) {
      issues.push(`scope.${key} is required and must be a non-empty list`);
    }
  }

  return issues;
}

function main() {
  const args = process.argv.slice(2);
  const files = args.length > 0
    ? args.filter((file) => file.endsWith("spec.yaml"))
    : findAllSpecYamlFiles(path.join(process.cwd(), "catalog", "naics-overlays"));

  if (files.length === 0) {
    console.log("No spec.yaml files to validate.");
    return;
  }

  let failures = 0;
  for (const file of files) {
    if (!fs.existsSync(file)) {
      continue;
    }
    const issues = validateSpecYaml(file);
    if (issues.length > 0) {
      failures += 1;
      console.error(`FAIL ${file}`);
      for (const issue of issues) {
        console.error(`  - ${issue}`);
      }
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} of ${files.length} spec.yaml file(s) failed validation.`);
    process.exitCode = 1;
    return;
  }
  console.log(`${files.length} spec.yaml file(s) passed validation.`);
}

function findAllSpecYamlFiles(root) {
  const results = [];
  if (!fs.existsSync(root)) {
    return results;
  }
  for (const sectionSlug of fs.readdirSync(root)) {
    const sectionPath = path.join(root, sectionSlug);
    if (!fs.statSync(sectionPath).isDirectory()) {
      continue;
    }
    for (const agentSlug of fs.readdirSync(sectionPath)) {
      const specPath = path.join(sectionPath, agentSlug, "spec.yaml");
      if (fs.existsSync(specPath)) {
        results.push(specPath);
      }
    }
  }
  return results;
}

main();

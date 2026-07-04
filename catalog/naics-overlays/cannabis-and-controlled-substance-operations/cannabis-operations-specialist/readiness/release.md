# Release Readiness

## Agent

- Name: Cannabis operations specialist
- Domain: `naics-overlays/cannabis-and-controlled-substance-operations`- Release version: `v0.1.0`

## Readiness Gates

- [x] Scope, boundaries, refusal rules, and adjacent specialist routing are explicit.
- [x] Research pack includes required workflow, artifact, system, boundary, and failure-mode extraction.
- [x] `evaluation/results.json` contains 12 scenarios with all pass results.
- [x] `evaluation/functionality-map.json` includes all required abilities and scenario-to-ability coverage.
- [x] `evaluation/scenarios.md`, `evaluation/research-summary.json`, and `readiness/evidence.json` are complete.
- [x] Required evidence for human verification, deployment readiness is recorded.
- [x] Deployment, rollback, and recovery steps are documented.
- [x] Positioning and readiness notes document `specification-based` posture and retained-implementation promotion criteria.

## Readiness Decision

- Decision: Approved for validated spec-pack release.
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - The specialist stays inside cannabis execution and does not claim medical, legal, compliance-signoff, inventory-governance, or quality-release authority outside the lane.
  - Package UID, delivery-ledger, manifest, receipt, recall, and packaging evidence are explicit enough to avoid vague generalist behavior.
  - Package mismatch, recall stop, conflicting-policy, low-confidence jurisdiction, and adjacent-lane cases escalate instead of being over-resolved in-lane.

# Release Readiness

## Agent

- Name: SUD program operations specialist
- Domain: `naics-overlays/behavioral-health-and-community-care`- Release version: `v0.1.0`

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
  - The specialist stays inside SUD program operations administration and does not claim diagnosis, clinical placement, dose or take-home approval, privacy interpretation, discharge approval, or regulator-facing authority.
  - ROI, Part 2 notice, ASAM or placement documents, authorization records, toxicology evidence, dosing or medication records, and discharge artifacts are explicit enough to avoid vague generalist behavior.
  - Privacy-sensitive redisclosure, conflicting-policy, expired-authorization, evidence-gap, and clinical-boundary cases escalate instead of being over-resolved in-lane.

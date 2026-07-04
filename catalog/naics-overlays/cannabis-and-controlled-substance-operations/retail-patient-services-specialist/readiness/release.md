# Release Readiness

## Agent

- Name: Retail patient services specialist
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
  - The specialist stays inside retail patient-services work and does not claim licensed clinical consultation, compliance interpretation, pricing approval, recall disposition, or security authority.
  - Patient communication is grounded in patient-card, caregiver, certification, MMAP, order, pricing, inventory, complaint, and recall records rather than generic retail heuristics.
  - Certification-limit, pricing-exception, adverse-event, complaint, repeat-failure, and conflicting-policy cases escalate instead of being over-resolved in-lane.

# Release Readiness

## Agent

- Name: Education compliance specialist
- Domain: `naics-overlays/education`- Release version: `v0.1.0`

## Readiness Gates

- [x] Lane scope, boundaries, refusal rules, and adjacent specialist routing are explicit.
- [x] Authoritative source manifest and research summary include workflow, terminology, evidence, and failure-handling coverage.
- [x] 12 scenarios are defined with IDs `ecs-01` through `ecs-12`.
- [x] All scenarios pass in `evaluation/results.json` at strict profile and include complete reason mapping.
- [x] `evaluation/functionality-map.json` covers shared + workflow-phase + industry-profile abilities with scenario mapping.
- [x] Required evaluation artifacts are present:
  - `manifest.yaml`
  - `evaluation/scenarios.md`
  - `evaluation/functionality-map.json`
  - `evaluation/research-summary.json`
  - `evaluation/results.json`
  - `readiness/evidence.json`
  - `readiness/release.md`
  - `deployment/package.md`
  - `positioning/readiness.md`
- [x] Human verification and functional audit evidence are recorded.
- [x] Deployment, rollback, and retained-implementation promotion notes are documented.
- [x] Runtime strategy remains `specification-based`; retained-implementation promotion is explicitly staged as separate build path.

## Readiness Decision

- Decision: Approved for validated spec-pack release.
- Reviewer: commons-keeper
- Date: 2026-04-09
- Notes:
  - Scope is confined to education compliance onboarding, permissions, setup gating, consent/evidence mapping, and exception handling.
  - Requests requiring grading, ethics-board authority, instructor judgment, legal override, or financial approvals are routed to adjacent specialists.
  - Go-live remains blocked unless all readiness evidence, owner approvals, and rollback conditions are present.

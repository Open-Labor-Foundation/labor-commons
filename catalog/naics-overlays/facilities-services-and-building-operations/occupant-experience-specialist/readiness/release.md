# Release Readiness

## Agent

- Name: Occupant experience specialist
- Domain: `naics-overlays/facilities-services-and-building-operations`
- Release version: `v0.1.0`
- Validation profile: `standard`

## Readiness Gates

- [x] Manifest includes resolved business outcome, boundary, adjacency, and refusal rules.
- [x] Authority sources are current and include freshness and decay tracking.
- [x] Evaluation suite covers required workflow, service-support, and construction-specific scenarios.
- [x] Human verification is recorded.
- [x] Deployment package and rollback instructions are documented.
- [x] Marketing and commercialization notes are present.
- [x] Functionality coverage is complete in `evaluation/results.json` and `readiness/evidence.json`.

## Release Decision

- Decision: Approved for validated spec-pack release
- Reviewer: commons-keeper
- Date: 2026-04-09
- Notes:
  - The lane stays narrow to occupant-facing facilities service handling, communication, evidence review, and escalation packaging.
  - It does not claim permit approval, code interpretation, licensed trade judgement, engineering signoff, inspection authority, or financial exception authority.
## Runtime and Promotion Note

- This overlay may remain `specification-based` until a separately promoted retained implementation is explicitly approved.
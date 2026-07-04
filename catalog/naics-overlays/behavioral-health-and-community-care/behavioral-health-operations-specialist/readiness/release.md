# Release Readiness

## Agent

- Name: Behavioral health operations specialist
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
  - The specialist stays inside behavioral-health operations administration and does not claim diagnosis, risk determination, crisis disposition, medication authority, privacy interpretation, or quality or regulatory signoff authority.
  - Consent and ROI records, assessments, person-centered treatment plans, crisis-transition documentation, authorization records, care-coordination notes, incident or grievance artifacts, and discharge records are explicit enough to avoid vague generalist behavior.
  - Privacy-sensitive disclosure, conflicting-policy, crisis-follow-up exception, evidence-gap, and licensed-boundary cases escalate instead of being over-resolved in-lane.

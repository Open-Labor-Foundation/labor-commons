# Release Readiness

## Agent

- Name: Intake and triage behavioral health specialist
- Domain: `naics-overlays/behavioral-health-and-community-care`
- Release version: `v0.1.0`

## Readiness Gates

- [x] Specialty boundary is explicit
- [x] Authority sources are current and reviewed
- [x] Evaluation thresholds are met
- [x] Research summary satisfies the 2026-04-08 research contract
- [x] Functionality coverage is complete
- [x] Human verification is recorded
- [x] Deployment package is documented
- [x] Positioning and readiness notes are documented
- [x] Authority-boundary handoff and escalation rules are explicit

## Release Decision

- Decision: Approved for validated review
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - The package materially narrows intake to behavioral-health prerequisite validation, privacy and consent gating, payer or program authorization checks, and acute-safety routing.
  - Public SAMHSA, CMS, HHS OCR, and eCFR sources are tied directly to workflow stages, terminology, evidence, and refusal posture.
  - All required scenario IDs are represented in both functionality coverage and research-driven scenario family coverage.

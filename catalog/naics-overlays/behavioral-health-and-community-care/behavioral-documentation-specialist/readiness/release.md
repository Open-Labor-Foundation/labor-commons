# Release Readiness

## Agent

- Name: Behavioral documentation specialist
- Domain: `naics-overlays/behavioral-health-and-community-care`
- Release version: `v0.1.0`- Target delivery level: `validated`

## Release Decision

- Decision: Approved for validated staging with behavioral-health-specific documentation scope and specification-based runtime.
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - The package is materially behavioral-health-specific in named records, systems, evidence packets, and refusal handling.
  - Administrative maintenance stops before clinical, privacy-law, legal, utilization-review, and official approval decisions.
  - Required source classes, research outputs, functionality coverage, deployment notes, and commercialization notes are present.
  - No retained-implementation runtime claim is included in this release.

## Readiness Gates

- [x] Runtime strategy recorded as `specification-based`
- [x] Source baseline and authority rationale present
- [x] validated flag set in manifest
- [x] Standard validation profile and required scenario count documented
- [x] Scenario coverage complete across required functional abilities
- [x] Readiness evidence recorded
- [x] Deployment package documented
- [x] Marketing and commercialization notes documented
- [x] Human verification recorded in `readiness/evidence.json`

## Rollout Notes

- Deploy with queue slug:
  - `industry-overlays::behavioral-health-and-community-care::behavioral-documentation-specialist`
- Keep boundary controls enabled for clinical, privacy, Part 2, psychotherapy-note, legal, payer, and patient-safety-sensitive requests.
- Require tenant retrieval of jurisdiction, program model, record-source hierarchy, ROI posture, psychotherapy-note classification, and Part 2 applicability before finalizing outputs.
- Use orchestrator return whenever conflicting public and tenant policies materially change retention, disclosure, classification, or official-record outcomes.

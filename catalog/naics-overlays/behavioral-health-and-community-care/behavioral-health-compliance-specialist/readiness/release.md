# Release Readiness

## Agent

- Name: Behavioral health compliance specialist
- Domain: `naics-overlays/behavioral-health-and-community-care`
- Release version: `v0.1.0`- Target delivery level: `validated`

## Release Decision

- Decision: Approved for validated staging with explicit specification-based runtime
  constraint
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - The lane is materially constrained to behavioral health compliance support,
    evidence traceability, survey and privacy readiness, and escalation.
  - Industry-specific obligations are expressed through CCBHC, CMHC, privacy,
    crisis, licensure, incident, grievance, and quality-review artifacts.
  - Required artifacts are present and linked for audit.
  - No retained-implementation runtime behavior is claimed in this release.

## Readiness Gates

- [x] Runtime strategy recorded as `specification-based`
- [x] Source baseline and authority rationale present
- [x] validated flag set in manifest
- [x] Strict validation profile and required scenario count documented
- [x] Scenario coverage complete across required functional abilities
- [x] Readiness evidence recorded
- [x] Deployment package documented
- [x] Marketing and commercialization notes documented
- [x] Human verification recorded in `readiness/evidence.json`

## Rollout Notes

- Deploy through spec-pack loader with the queue slug:
  - `industry-overlays::behavioral-health-and-community-care::behavioral-health-compliance-specialist`
- Keep boundary rules explicit for out-of-scope legal, licensed clinical,
  safety-critical, regulator-facing, and formal signoff decisions.
- Escalation pathways must be configured at orchestrator wiring for privacy and
  legal, licensed clinical, crisis and safety, survey or accreditation, payer,
  and executive approval requests.

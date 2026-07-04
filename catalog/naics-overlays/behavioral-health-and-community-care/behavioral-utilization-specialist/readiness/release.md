# Release Readiness

## Agent

- Name: Behavioral utilization specialist
- Domain: `naics-overlays/behavioral-health-and-community-care`
- Release version: `v0.1.0`- Target delivery level: `validated`

## Release Decision

- Decision: Approved for validated staging with explicit behavioral-health
  utilization scope and specification-based runtime.
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - The package is materially behavioral-health specific and does not behave as
    a generic prior-authorization assistant.
  - Every request path is bounded by level-of-care, active-treatment, privacy,
    notice, and continuity evidence requirements.
  - Licensed review, appeals adjudication, privacy-law interpretation, and
    payer override authority remain adjacent and are not absorbed by this lane.
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
  - `industry-overlays::behavioral-health-and-community-care::behavioral-utilization-specialist`
- Keep boundary controls enabled for licensed clinical review, appeals,
  privacy/compliance review, and payer-override requests.
- Configure orchestrator routing to adjacent specialist owners before exposing
  the lane to live utilization queues.
- Enforce tenant retrieval hooks for payer criteria, authorization portals,
  behavioral EHR, and consent/privacy systems before any output is finalized.

# Release Readiness

## Agent

- Name: Prior authorization specialist
- Domain: `naics-overlays/ambulatory-and-physician-services`
- Release version: `v0.1.0`- Target delivery level: `validated`

## Release Decision

- Decision: Approved for validated staging with explicit ambulatory and
  physician-service prior-authorization intake scope and specification-based runtime.
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - The package is materially ambulatory specific and does not behave like a
    generic intake or customer-service prior-auth bot.
  - Patient identity, eligibility, referral, coding, site-of-service, privacy,
    and payer-status checks are explicit prerequisites before work can move
    downstream.
  - Medical-necessity approval, legal appeals, post-service billing cleanup,
    and payer overrides remain adjacent ownership.
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
  - `industry-overlays::ambulatory-and-physician-services::prior-authorization-specialist`
- Keep boundary controls enabled for clinical review, appeals, privacy review,
  scheduling, and revenue-cycle exceptions.
- Configure tenant retrieval hooks for payer portals, eligibility systems,
  practice-management, ambulatory EHR, referral systems, and document
  repositories before exposing the lane to live prior-auth queues.
- Enforce source-of-truth precedence and minimum-necessary disclosure handling
  before any intake disposition is finalized.

# Content Platform Moderation Specialist Deployment Package

## Package Identity

- Package path: `catalog/naics-overlays/information-software-and-digital-media/content-platform-moderation-specialist/`
- Queue slug: `industry-overlays::information-software-and-digital-media::content-platform-moderation-specialist`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not committed

## Included Artifacts

- `manifest.yaml` with specialty boundary, sources, lifecycle model, validation profile, tenant adaptation policy, and catalog metadata.
- `evaluation/scenarios.md` with 13 moderation-specific must-pass scenarios.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + professional-and-information-services abilities.
- `evaluation/research-summary.json` satisfying research contract `2026-04-08`.
- `evaluation/results.json` recording 13 of 13 passing scenarios and complete functional coverage.
- `readiness/evidence.json` recording human verification, deployment readiness, commercialization readiness, and structured evidence.
- `readiness/release.md` with release checklist and residual risk.
- `positioning/readiness.md` with commercialization positioning.

## Runtime Materialization Requirements

`commons-crew` may materialize this lane only when the tenant supplies or exposes:

- platform policy, community standards, enforcement matrix, appeal policy, policy version, product surface, business unit, jurisdiction, and service model
- content ID, URL, asset hash, account ID, reporter input, claimant materials, queue label, enforcement history, reviewer notes, action logs, appeal state, and communication records
- systems-of-record retrieval hooks for moderation console, trust and safety case system, CMS, policy repository, appeal system, QA tooling, ticketing, incident, change-management, CRM, and document repository
- confidentiality constraints, approved delivery channels, client commitments, SLA, approval matrix, escalation matrix, and contractual boundaries
- testing evidence, rollback plan, release approval, engineering owner, privacy or security owner, and monitoring plan for moderation-system changes

The materialized runtime must preserve these boundaries:

- classify, request facts, prepare evidence-backed packages, progress documented lifecycle states, hold exceptions, and route adjacent work
- refuse legal, editorial, policy-override, safety-critical, privacy, security, engineering, financial approval, or contractual signoff authority
- refuse completion without content, account, policy, action-log, appeal, QA, reviewer, approval, and communication evidence required by tenant rules
- return to the orchestrator when public source, tenant policy, client instruction, jurisdiction, or reviewer guidance materially conflicts

## Deployment Notes

This is a spec pack, not a retained implementation. Deployment means making the spec available to catalog tooling and future runtime materialization. The default runtime strategy remains `specification-based` until a separate PR commits a retained implementation.

Before enabling tenant use:

1. Bind tenant-specific policy repositories, moderation systems, evidence repositories, appeal systems, QA tools, ticketing, incident, and change-management retrieval hooks.
2. Configure jurisdiction, product surface, service category, escalation matrix, reviewer authority, SLA, and approved delivery channels.
3. Confirm legal, editorial, content policy, safety, privacy, security, engineering, quality, delivery, account, and law-enforcement-response handoff owners.
4. Verify source freshness against the 90-day review cadence for DSA, DMCA, child-safety, NCMEC, and UK online safety references.
5. Run scenario coverage against tenant sample cases before allowing lifecycle progression beyond status, exception, and handoff package generation.

## Rollback Notes

Rollback is configuration-level for this spec pack:

- Disable tenant routing to `content-platform-moderation-specialist`.
- Revert to the prior catalog version or remove the tenant entitlement for this overlay.
- Preserve generated moderation status, exception, incident, change-readiness, and handoff records as audit evidence.
- Requeue open cases to trust and safety operations, delivery management, or the appropriate adjacent owner.
- Pause future materialization if outputs overstate legal, editorial, policy, safety, engineering, or contractual authority, mishandle restricted records, or close cases without evidence.

## Promotion To retained implementation

Promote from spec pack to retained implementation only after:

- repeated runtime demand shows this moderation overlay is common enough to maintain
- tenant implementations converge on stable retrieval hooks, lifecycle states, refusal boundaries, and output schemas
- validation remains stable across representative moderation, appeal, incident, change-readiness, and confidentiality scenarios
- human review approves a maintained runtime package in a separate PR

Promotion must commit the trusted runtime separately and update readiness metadata to distinguish built availability from this `specification-based` package.

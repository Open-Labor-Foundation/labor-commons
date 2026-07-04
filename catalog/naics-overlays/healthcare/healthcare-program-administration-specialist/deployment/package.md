# Deployment Package: Healthcare Program Administration Specialist

## Package State

- Agent slug: `healthcare-program-administration-specialist`
- Catalog path: `catalog/naics-overlays/healthcare/healthcare-program-administration-specialist/`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- retained implementation: no

## Deployment Notes

Use this overlay to constrain healthcare program administration behavior for rosters, enrollment lists, policy packets, reporting calendars, status trackers, compliance deadlines, and submission-readiness workflows.

The deployment must preserve these controls:

- Require tenant program, payer/plan, jurisdiction, service setting, reporting period, source-of-truth hierarchy, retrieval hooks, privacy policy, retention schedule, owner map, and authority matrix before acting.
- Keep outputs administrative: program status notes, submission-readiness checklists, record update notes, evidence packets, exception summaries, source-conflict escalations, and adjacent-owner routes.
- Treat authorization, referral, eligibility, coverage, documentation, and payer response status as prerequisites or blockers, not as outcomes this lane decides.
- Route PHI handling, external roster sharing, disclosure, de-identification, consent, and minimum-necessary questions to the privacy owner when controls are missing or disputed.
- Route clinical judgment, patient-safety triage, care-pathway changes, diagnosis, medical necessity, payer interpretation, compliance signoff, legal interpretation, finance approval, and program policy approval to adjacent owners.

## Rollback Notes

Rollback is catalog exposure only. Remove or hide this package from the industry-overlay catalog, or pin consumers to the prior catalog revision. Because the package is `specification-based`, rollback does not require runtime migration, database rollback, or connector teardown.

## Materialization Requirements

`commons-crew` would need the following before safely materializing this lane:

- Task metadata for program ID, program type, payer or plan, service setting, reporting period, requested record action, owner map, deadline map, and source-of-truth hierarchy.
- Boundary metadata for PHI, clinical judgment, patient safety, payer interpretation, authorization, referral, eligibility, privacy disclosure, compliance signoff, policy approval, and source conflict.
- Retrieval hooks for program management, CRM, case management, document management, reporting tracker, EHR or member system, payer portal, eligibility system, privacy queue, and audit log.
- Write controls limiting updates to permitted administrative metadata with source evidence, tenant permission, and audit logging.
- Refusal and orchestrator-return handling for missing facts, missing records, conflicting systems, unsupported record edits, privacy uncertainty, clinical risk, payer interpretation, and approval authority.

## Promotion Path

Keep runtime strategy as `specification-based` until a retained implementation is committed separately. Promote only after repeated tenant demand, connector implementation, PHI-safe access controls, auditable write paths, validation fixtures, and human review show that runtime behavior preserves the public baseline and tenant-specific controls.

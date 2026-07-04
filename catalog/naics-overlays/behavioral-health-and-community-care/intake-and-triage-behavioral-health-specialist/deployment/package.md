# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Deployment model: versioned spec-pack artifact with manifest, research summary, functionality map, evaluation scenario set, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based`.
- Runtime promotion condition: promote to a retained implementation only after repeated low-incident usage, validated tenant retrieval wiring, and explicit operating-owner approval.

## Materialization Inputs

- Required task and boundary metadata:
  - lane slug, adjacent specialist map, refusal triggers, and authorized output shapes
  - workflow-phase metadata for intake, authorization validation, and pre-execution routing
  - regulated-lane metadata for crisis, privacy, Part 2, and licensed-clinical escalation
- Tenant-supplied assumptions and runtime retrieval:
  - jurisdiction, state law, and local crisis-routing rules
  - payer contracts, referral rules, prior-authorization logic, and utilization-management ownership
  - program model, catchment, reservation, waitlist, and same-day access policy
  - minor-consent, personal-representative, and ROI handling policies
  - system-of-record locations and retrieval hooks for EHR, payer, consent, scheduling, crisis, and community-referral systems
- Conditions that require refusal or orchestrator return:
  - missing tenant facts or system-of-record access that would change disposition
  - crisis, safety, licensed-clinical, legal, privacy-interpretation, or payer-approval authority requests
  - conflicting public, payer, tenant, or jurisdiction rules that need human resolution

## Required Systems Of Record

- Behavioral health EHR or clinical record system
- Patient access, scheduling, and practice-management platform
- Payer eligibility and prior-authorization portals or clearinghouse tools
- Consent and privacy document management system
- Crisis documentation or handoff log
- Community referral or case-management system

## Regulated-Lane Caveats

- HIPAA and 42 CFR Part 2 controls can change what may be viewed, shared, or routed even when routine intake facts seem complete.
- Minor-consent and personal-representative posture is jurisdiction-dependent and must be tenant-retrieved.
- Acute safety indicators convert the lane from routine intake to crisis-routing escalation; the spec does not authorize crisis treatment or emergency disposition decisions.
- This package validates prerequisites only. It does not claim admission, treatment, or payer-approval authority.

## Isolation

- Tenant isolation: no cross-tenant sharing of intake packets, EHR data, ROI artifacts, Part 2-covered records, prior-authorization data, or crisis notes.
- Knowledge boundary: public SAMHSA, CMS, HHS OCR, and eCFR sources remain shared; tenant-specific payer, crisis, local-policy, and program-capacity rules are injected at orchestration runtime.
- Disallowed adaptation: adding clinical diagnosis, treatment recommendation, crisis intervention, or approval authority into this lane.

## Operations

- Monitoring:
  - Track missing-prerequisite rates, authorization blockers, privacy holds, crisis-routing frequency, and wrong-lane request volume.
  - Alert when authority sources are stale beyond refresh windows.
  - Track repeated false-positive accepts where downstream teams discover missing referral, ROI, payer, or catchment facts.
- Logging:
  - Log outcome state (`ACCEPT`, `REJECT`, `PEND`, `ROUTE`), blocker category, source basis, and escalated owner.
  - Log privacy flags, Part 2 handling decisions, authorization verification status, and crisis-routing triggers without over-disclosing sensitive content.
- Rollback:
  - Disable the current specialist artifact.
  - Re-route affected streams to orchestrator-safe fallback handling.
  - Restore the prior validated bundle and re-run local package checks before re-enable.

## Validation evidence Notes

- This lane is validated as a packaged specification-based specialist for behavioral health and community care intake validation.
- Commercial deployment posture is tenant-level entitlement with optional payer, privacy, and local crisis-policy connector configuration.
- Runtime remains `specification-based` until explicit retained implementation promotion.
- Promotion path: prove stable retrieval across EHR, payer, consent, and crisis systems; confirm low-incident boundary handling; then commit a separately approved built implementation.

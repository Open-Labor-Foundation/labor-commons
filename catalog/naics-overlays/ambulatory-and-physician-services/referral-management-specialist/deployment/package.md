# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Deployment model: versioned spec-pack artifact with manifest, research summary, functionality map, evaluation scenario set, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based`.
- Runtime promotion condition: promote to a retained implementation only after repeated low-incident usage, validated tenant retrieval wiring, and explicit operating-owner approval.

## Materialization Inputs

- Required task and boundary metadata:
  - lane slug, adjacent specialist map, refusal triggers, and authorized output shapes
  - workflow metadata for referral intake normalization, constraint assessment, scheduling recommendation, and approval-boundary enforcement
  - regulated-lane metadata for privacy escalation, sensitive-record handling, utilization-management routing, and clinical-boundary escalation
- Tenant-supplied assumptions and runtime retrieval:
  - jurisdiction, payer contracts, direct-access or self-referral posture, and specialty referral-aging rules
  - specialty-specific prerequisite grids, pre-visit workup expectations, overbook authority, and clinic capacity policies
  - systems-of-record locations and retrieval hooks for EHR, referral workqueue, practice management, payer, document exchange, and privacy systems
  - interpreter, accommodation, location-holdback, and service-level constraints that change referral sequencing
- Conditions that require refusal or orchestrator return:
  - missing tenant facts or system-of-record access that would change scheduling, disclosure, or routing outcome
  - requests for licensed clinical triage, medical-necessity review, privacy interpretation, payer override, or final operational approval
  - conflicting public, payer, tenant, or jurisdiction rules that need human resolution

## Required Systems Of Record

- Ambulatory EHR or referral-management module
- Practice-management and specialty scheduling platform
- Payer portal, eligibility, or prior-authorization system
- Document exchange, fax or e-fax, or HIE attachment repository
- Patient access or CRM workqueue for outreach and status tracking
- Consent, release, or privacy document repository

## Regulated-Lane Caveats

- HIPAA treatment-disclosure rules may allow outbound sharing for treatment, but sensitive referral packets still require explicit handling and tenant confirmation when facts are ambiguous.
- Part 2 can materially change what SUD-related referral records may be shared or redisclosed.
- State direct-access, PCP-referral, and specialty-specific coverage rules vary by payer and jurisdiction and must be tenant-retrieved.
- This package coordinates referral readiness and scheduling recommendations only. It does not grant final clinic, payer, or clinical approval authority.

## Isolation

- Tenant isolation: no cross-tenant sharing of referral packets, consult notes, payer decisions, or privacy records.
- Knowledge boundary: public AHRQ, ASTP or ONC, CMS, and HHS sources remain shared; tenant-specific payer, specialty, and system data are injected at orchestration runtime.
- Disallowed adaptation: adding diagnosis, medical-necessity determination, final overbook approval, or privacy-officer authority into this lane.

## Operations

- Monitoring:
  - Track missing-prerequisite rates, authorization blockers, specialist declines, reroute frequency, privacy holds, and wrong-lane request volume.
  - Alert when authority sources are stale beyond refresh windows.
  - Track downstream rework caused by scheduled referrals later found to lack required packet evidence or authorization.
- Logging:
  - Log outcome state (`READY`, `BLOCKED`, `ESCALATE`, `ROUTE`), blocker category, source basis, and next owner.
  - Log authorization state, referral-aging posture, specialist decline reasons, and disclosure blockers without over-disclosing sensitive content.
- Rollback:
  - Disable the current specialist artifact.
  - Re-route affected referral streams to orchestrator-safe fallback handling.
  - Restore the prior validated bundle and re-run local package checks before re-enable.

## Validation evidence Notes

- This lane is validated as a packaged specification-based specialist for ambulatory referral management.
- Commercial deployment posture is tenant-level entitlement with optional EHR, payer, document-exchange, and privacy-policy connector configuration.
- Runtime remains `specification-based` until explicit retained implementation promotion.
- Promotion path: prove stable retrieval across referral workqueue, scheduling, payer, and document systems; confirm low-incident boundary handling; then commit a separately approved built implementation.

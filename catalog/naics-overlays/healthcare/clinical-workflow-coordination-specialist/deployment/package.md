# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Deployment model: versioned spec-pack artifact with manifest, research summary, functionality map, evaluation scenario set, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based`.
- Runtime promotion condition: promote to a retained implementation only after repeated low-incident usage, validated tenant retrieval wiring, documented privacy controls, and explicit clinical operations approval.

## Materialization Inputs

- Required task and boundary metadata:
  - lane slug, adjacent specialist map, refusal triggers, authorized output shapes, and clinical-versus-administrative boundary metadata
  - workflow metadata for dependency intake, cross-team routing, blocker escalation, closure confirmation, result follow-up, referral loop tracking, and order-context validation
  - regulated-lane metadata for PHI handling, privacy escalation, payer interpretation escalation, critical-result or urgent-task escalation, and receiving-owner acceptance
- Tenant-supplied assumptions and runtime retrieval:
  - service line, urgency tier, owner roles, required turnaround expectations, queue coverage rules, after-hours pathways, and escalation thresholds
  - EHR in-basket, tasking, orders, results, referrals, encounter tasks, scheduling, clinical messaging, eligibility, authorization, privacy, and document repository access
  - tenant policies for result notification, critical result escalation, referral aging, queue ownership, authorization requirements, disclosure basis, and documented closure
  - payer, provider, referral, authorization, coding, utilization, consent, and care-pathway dependencies that materially affect routing or closure
- Conditions that require refusal or orchestrator return:
  - missing tenant facts or system-of-record access that would change routing, privacy, payer, safety, or closure outcome
  - requests for licensed clinical judgment, order alteration, result interpretation, diagnosis, treatment planning, medical necessity, payer interpretation, coding interpretation, privacy-officer judgment, legal interpretation, or final operational approval
  - conflicting public, payer, tenant, jurisdiction, or source-of-record rules that need human resolution

## Required Systems Of Record

- EHR in-basket, tasking, order, result, encounter, and referral modules
- Scheduling, referral management, patient access, clinical messaging, and CRM workqueues
- Eligibility, payer portal, prior authorization, utilization-management, coding, and financial-clearance systems when workflow routing depends on them
- Consent, release, privacy, document exchange, HIE, fax or e-fax, and attachment repositories
- Tenant policy repositories for queue ownership, turnaround expectations, escalation pathways, and closure criteria

## Regulated-Lane Caveats

- HIPAA and tenant privacy rules constrain PHI routing; minimum necessary handling and documented treatment, payment, operations, consent, or release basis are required before outbound disclosure.
- Result interpretation, clinical urgency determination, medication changes, diagnosis, treatment planning, and order changes remain licensed clinical work.
- Authorization status, payer policy, medical necessity, coding, utilization review, and coverage sufficiency require adjacent payer, coding, utilization, or financial-clearance ownership.
- Referral and result loops must not be closed without documented receiving-owner acceptance and required evidence artifacts.
- Emergency, critical-result, and patient-safety signals require immediate escalation to licensed clinical owners.

## Isolation

- Tenant isolation: no cross-tenant sharing of PHI, referral packets, result records, authorization decisions, task IDs, owner maps, or privacy records.
- Knowledge boundary: public CMS, HHS OCR, AHRQ, ASTP or ONC, and eCQI sources remain shared; tenant-specific payer, provider, state, service-line, EHR, and privacy data are injected at orchestration runtime.
- Disallowed adaptation: adding diagnosis, treatment planning, result interpretation, order modification, final payer approval, privacy-officer authority, or closure-without-acceptance authority into this lane.

## Operations

- Monitoring:
  - Track missing-prerequisite rates, duplicate-owner conflicts, stale task age, result follow-up age, referral-loop closure blockers, authorization blockers, PHI holds, urgent escalation frequency, wrong-lane request volume, and closure-without-acceptance prevention.
  - Alert when authority sources are stale beyond refresh windows.
  - Track downstream rework caused by routed tasks later found to lack required owner acceptance, authorization, documentation, or privacy basis.
- Logging:
  - Log outcome state (`READY`, `BLOCKED`, `ESCALATE`, `ROUTE`, `REFUSE`, `CLOSE`), blocker category, source basis, prior owner, next owner, destination queue, due time, and closure evidence.
  - Log PHI handling basis and privacy blockers using minimum necessary detail.
  - Log payer or authorization states as dependencies, not as lane-owned payer decisions.
- Rollback:
  - Disable the current specialist artifact.
  - Re-route affected clinical workflow streams to orchestrator-safe fallback handling or human clinical operations queues.
  - Restore the prior validated bundle and re-run local package checks before re-enable.

## Validation evidence Notes

- This lane is validated as a packaged specification-based specialist for healthcare clinical workflow coordination.
- Commercial deployment posture is tenant-level entitlement with optional EHR, referral, scheduling, authorization, messaging, privacy, and document-repository connector configuration.
- Runtime remains `specification-based` until explicit retained implementation promotion.
- Promotion path: prove stable retrieval across EHR in-basket, tasking, results, referrals, scheduling, messaging, payer, and privacy systems; confirm low-incident clinical, privacy, payer, and closure boundary handling; then commit a separately approved built implementation.

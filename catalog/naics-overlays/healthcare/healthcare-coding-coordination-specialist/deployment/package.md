# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Deployment model: versioned spec-pack artifact with manifest, research summary, functionality map, evaluation scenario set, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to a retained implementation only after repeated low-incident usage, validated tenant retrieval wiring, connector reliability, and explicit operating-owner approval.

## Materialization Inputs

- Required task and boundary metadata:
  - lane slug, adjacent specialist map, refusal triggers, orchestrator return rules, and authorized output shapes
  - workflow metadata for dependency intake, handoff execution, blocker escalation, routing confirmation, and closure confirmation
  - healthcare metadata for clinical-versus-administrative boundaries, PHI handling, minimum-necessary disclosure, payer dependency escalation, and patient or member safety escalation
- Tenant-supplied assumptions and runtime retrieval:
  - jurisdiction, business unit, facility, provider type, service setting, payer, plan, coverage rules, authorization or referral status, and service dates
  - current systems of record and retrieval hooks for EHR documentation workflows, coding queues, encoder or CAC systems, CDI query systems, charge review, payer portals, clearinghouse edits, and RCM denial queues
  - code-set licensing, payer contracts, internal coding owner matrix, CDI query policy, provider response SLA, DNFB threshold, charge capture policy, denial appeal windows, billing hold/release policy, and privacy/consent constraints
  - patient or member status, encounter identifiers, claim identifiers, clinical documentation artifacts, coder queries, CDI notes, payer edit findings, and denial worklist records
- Conditions that require refusal or orchestrator return:
  - final code assignment, code change, modifier selection, DRG/APC/HCC approval, or billing release authority is requested
  - unsupported documentation backfill, leading query behavior, clinical validity, medical necessity, treatment judgment, privacy interpretation, payer-policy interpretation, compliance signoff, or appeal strategy approval is required
  - source, payer, tenant, facility, or jurisdiction policy conflicts materially affect routing, disclosure, hold/release status, or closure

## Required Systems Of Record

- EHR documentation workflows and HIM document repositories
- Coding work queues and encoder or CAC systems
- CDI workflow and provider query systems
- Charge review, charge description master, and revenue integrity task systems
- Payer portal, eligibility, authorization, referral, and clearinghouse edit systems
- Patient accounting, billing hold, denial management, remittance, and RCM denial queues
- Privacy, consent, release, and audit-log repositories

## Regulated-Lane Caveats

- HIPAA minimum-necessary handling constrains what encounter, query, denial, and workqueue records may be shared during coordination.
- Coding guidance and payer edit references do not authorize this lane to assign final codes, change codes, approve modifiers, or release claims.
- Provider queries must remain compliant, evidence-backed, and non-leading; this lane may coordinate query escalation but may not pressure documentation for reimbursement.
- Clinical validity, diagnosis, treatment, medical necessity, utilization management, patient-safety, payer-policy interpretation, compliance signoff, and privacy interpretation require adjacent authorized owners.
- Licensed CPT, payer contract, facility-specific, and jurisdiction-specific rules must be tenant-supplied or retrieved at runtime.

## Isolation

- Tenant isolation: no cross-tenant sharing of PHI, encounter records, payer edits, denial worklists, query text, coding queue data, or operating policies.
- Knowledge boundary: public CMS, HHS, AHIMA/ACDIS, and HFMA sources remain shared; tenant-specific payer, clinical, coding, billing, privacy, and system data are injected at orchestration runtime.
- Disallowed adaptation: adding final coding authority, clinical judgment, payer override, privacy-officer authority, or billing release authority into this lane.

## Operations

- Monitoring:
  - Track coding backlog age, documentation deficiencies, query aging, query completion, CDI escalations, claim edit routing, denial deadlines, billing holds, privacy escalations, and wrong-lane requests.
  - Alert when authority sources are stale beyond refresh windows.
  - Track downstream rework caused by premature billing, unresolved query status, missing documentation, missed authorization or referral evidence, or incorrectly routed denial items.
- Logging:
  - Log outcome state (`READY`, `BLOCKED`, `ESCALATE`, `ROUTE`, `REFUSE`, `CLOSED`), blocker category, source artifact references, PHI handling basis, owner, due date, and next action.
  - Log revenue risk and patient/member safety escalation signals without over-disclosing PHI.
  - Log source version, tenant policy assumptions, and unresolved policy conflicts.
- Rollback:
  - Disable the current specialist artifact.
  - Re-route affected coding, CDI, charge review, and denial work items to orchestrator-safe fallback handling.
  - Restore the prior validated bundle and re-run local package checks before re-enable.

## Validation evidence Notes

- This lane is validated as a packaged specification-based specialist for healthcare coding coordination.
- Commercial deployment posture is tenant-level entitlement with optional EHR, encoder/CAC, CDI, clearinghouse, payer portal, RCM denial, and privacy-policy connector configuration.
- Runtime remains `specification-based` until explicit retained implementation promotion.
- Promotion path: prove stable retrieval across encounter, query, coding queue, payer edit, and denial systems; confirm low-incident boundary handling; add tenant-safe regression evidence; then commit a separately approved built implementation.

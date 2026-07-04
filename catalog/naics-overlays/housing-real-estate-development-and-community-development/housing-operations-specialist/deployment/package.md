# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, program type, PHA or owner entity, property or portfolio, funding or regulatory model, service model, administrative plan, ACOP, tenant selection plan, lease, regulatory agreement, state housing agency rules, resident-service model, and operating constraints;
  - applicant, waitlist, eligibility, certification, reexamination, transfer, move, voucher, inspection, work-order, resident-notice, grievance, reasonable-accommodation, VAWA, and closeout lifecycle-state definitions;
  - tenant systems-of-record connectors for applicant and waitlist management, property management, voucher management, HUD reporting, EIV, TRACS, IMS/PIC or successor systems, inspections, work orders, resident services, finance, document control, notices, grievances, fair housing, VAWA, fraud, and approval registries;
  - approval matrix, legal and civil-rights boundaries, VAWA owner, reasonable-accommodation owner, voucher finance owner, rent reasonableness owner, inspection owner, maintenance owner, safety owner, fraud owner, relocation owner, and escalation directory.
- Required task and boundary metadata:
  - accepted work-package schema, household or applicant identifier, unit or voucher identifier, property or PHA context, program type, lifecycle state, due dates, blockers, privacy tags, and owner fields;
  - output schema for execution status updates, completion records, exception summaries, program or case-status summaries, eligibility or public-obligation escalation notes, and adjacent-specialist routing artifacts;
  - source-precedence policy, confidence threshold, low-confidence policy, minimum necessary data policy, completion-evidence criteria, protected-record handling, and orchestrator-return policy.
- Required systems of record:
  - applicant, waitlist, and tenant selection systems,
  - property management and occupancy systems,
  - voucher management and HCV leasing systems,
  - HUD IMS/PIC or successor tenant reporting systems,
  - HUD TRACS or assisted multifamily certification reporting systems,
  - HUD EIV or tenant-controlled income verification repositories,
  - inspection and NSPIRE deficiency tracking systems,
  - work-order, maintenance, unit turn, and asset management systems,
  - document management and tenant file repositories,
  - resident services, CRM, or case management systems,
  - finance, HAP, tenant accounts receivable, repayment, and general ledger systems,
  - notice, correspondence, hearing, and grievance tracking systems,
  - fair housing, reasonable-accommodation, VAWA, safety, fraud, and legal referral trackers,
  - tenant policy, authority, and approval registry.

## Deployment Notes

- This lane is execution-management support and must not decide eligibility, continued occupancy, tenant rent, subsidy, HAP amount, rent reasonableness, payment standard exceptions, reasonable-accommodation approval, VAWA sufficiency, fair housing or civil-rights compliance, grievance outcomes, eviction or termination validity, fraud findings, inspection clearance, safety clearance, relocation entitlement, payment release, policy waivers, or executive exceptions.
- Each run should record:
  - scenario ID or request type,
  - jurisdiction, program type, PHA or owner, property, household or applicant, unit or voucher, lifecycle state, and requested action,
  - mandatory input-set completeness,
  - source records and systems used,
  - authoritative public and tenant sources applied,
  - protected-record and minimum-necessary-data constraints,
  - missing evidence, assumptions, blockers, next owner, and due date,
  - refusal or escalation cause when authority, privacy, policy, safety, or evidence is missing,
  - final execution, completion, exception, status, escalation, or routing artifact produced.
- Guardrails:
  - do not infer eligibility, tenant rent, subsidy, HAP, rent reasonableness, fair housing, VAWA, reasonable-accommodation, grievance, fraud, lease enforcement, legal, inspection, safety, relocation, or payment meaning;
  - do not bypass waitlist, household, consent, EIV, certification, RFTA, HAP, inspection, notice, resident-protection, work-order, finance, grievance, or closeout blockers;
  - do not mark completion while required Form 50058, Form 50059, certification, EIV, RFTA, HAP, inspection, lease, notice, work-order, resident-service, finance, or approval evidence is missing;
  - reopen or reverse lifecycle state when new records invalidate an earlier progression;
  - do not represent administrative completion readiness as official HUD, tenant, state agency, owner, legal, finance, inspection, or executive approval.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Preserve open applicant, resident, voucher, certification, inspection, work-order, grievance, accommodation, VAWA, finance, and closeout blockers for audit continuity.
- Preserve incomplete evidence packets, protected-record handling notes, source-policy conflicts, and pending escalation notes.
- Restore the last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, source-precedence rules, lifecycle-state mappings, protected-record handling, and HUD/tenant record retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated state reversibility, strong evidence-capture performance, successful tenant connector audits, privacy-control review, and explicit governance approval.

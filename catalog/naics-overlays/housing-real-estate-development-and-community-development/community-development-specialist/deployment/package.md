# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, grantee type, program year, funding source, service model, action plan, grant agreement, and operating constraints;
  - CDBG or CPD activity taxonomy, lifecycle-state definitions, beneficiary evidence requirements, reporting calendar, and closeout criteria;
  - tenant systems-of-record connectors for grants management, IDIS, finance, procurement, environmental review, document control, GIS or beneficiary records, inspections, Section 3, relocation, monitoring, and policy or approval registries;
  - approval matrix, legal and civil-rights boundaries, environmental responsible entity, relocation owner, procurement owner, finance draw owner, and escalation directory.
- Required task and boundary metadata:
  - accepted work-package schema, activity and project identifiers, program year, funding source, lifecycle state, due dates, blockers, and owner fields;
  - output schema for execution status updates, completion records, exception summaries, program status summaries, CAPER or monitoring evidence packets, and escalation artifacts;
  - source-precedence policy, confidence threshold, low-confidence policy, completion-evidence criteria, and orchestrator-return policy.
- Required systems of record:
  - HUD IDIS or tenant IDIS-derived reporting system,
  - grants management or CPD program administration platform,
  - finance, voucher, draw, and general ledger systems,
  - procurement and contract management systems,
  - environmental review record repositories,
  - document management and records repositories,
  - GIS, service-area, beneficiary, income, or case management systems,
  - inspection, construction management, or site closeout systems,
  - Section 3 labor-hour and contractor reporting records,
  - relocation and acquisition file repositories,
  - subrecipient monitoring and corrective-action systems,
  - tenant policy, authority, and approval registry.

## Deployment Notes

- This lane is execution-management support and must not decide CDBG eligibility, national-objective sufficiency, environmental clearance, relocation entitlement, fair housing or civil-rights compliance, procurement awards, financial draws, monitoring findings, corrective-action closure, engineering signoff, or executive policy exceptions.
- Each run should record:
  - scenario ID or request type,
  - jurisdiction, grantee, program year, funding source, activity ID, project site, and lifecycle state,
  - mandatory input-set completeness,
  - source records and systems used,
  - authoritative public and tenant sources applied,
  - missing evidence, assumptions, blockers, next owner, and due date,
  - refusal or escalation cause when authority or policy is missing,
  - final execution, completion, exception, or routing artifact produced.
- Guardrails:
  - do not infer eligibility, national-objective compliance, environmental clearance, relocation sufficiency, procurement approval, draw approval, fair housing compliance, or legal meaning;
  - do not bypass environmental, beneficiary, Section 3, URA, procurement, subrecipient, finance, monitoring, or closeout blockers;
  - do not mark completion while required IDIS, CAPER, beneficiary, inspection, draw, Section 3, environmental, relocation, monitoring, or subrecipient evidence is missing;
  - reopen or reverse lifecycle state when new records invalidate an earlier progression;
  - do not represent administrative completion readiness as official HUD, tenant, or executive approval.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Preserve open activity blockers, incomplete evidence packets, unresolved environmental or relocation flags, source-policy conflicts, and pending closeout escalation notes for audit continuity.
- Restore the last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, source-precedence rules, lifecycle-state mappings, and HUD/tenant record retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated state reversibility, strong evidence-capture performance, successful tenant connector audits, and explicit governance approval.

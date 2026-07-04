# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, contract form, issue-purpose codes, stage labels, and
    release or seal rules;
  - service model, client-notification SLAs, escalation ownership, security
    markings, and confidentiality controls;
  - tenant systems-of-record connectors for EDMS or CDE, transmittal tracking,
    PMIS, BIM coordination, QA or QC workflow, CRM, and approval registry;
  - authority matrix for project management, document control, BIM management,
    architect-of-record, engineer-of-record, permitting, contracts, and
    commissioning owners.
- Required task and boundary metadata:
  - request classification schema for informational, complaint-driven,
    exception-driven, owner-transfer, and blocked requests;
  - output schema for resolution notes, communication summaries, escalation
    packets, and request-resolution summaries;
  - confidence threshold, source-precedence policy, low-confidence policy, and
    orchestrator-return policy.
- Required systems of record:
  - EDMS or common data environment,
  - project management information system,
  - transmittal and deliverable register tracker,
  - BIM coordination and issue platform,
  - review-comment and QA or QC workflow system,
  - CRM or service ticketing platform,
  - approval registry,
  - turnover or closeout repository.

## Deployment Notes

- This lane is communication-only and must not execute design revision,
  technical approval, seal application, permit filing, fee approval, or final
  contractual commitment actions.
- Each run should record:
  - scenario ID or request type,
  - governing project, client, phase, discipline, and issue-purpose context,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final communication artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer final, sealed, permit-ready, bid-ready, or construction-ready
    status from partial records,
  - do not issue uncontrolled attachments outside the authoritative transmittal
    or EDMS or CDE path,
  - do not answer design-content, code, or permit-interpretation questions as
    if they were administrative client-service requests.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe
  fallback.
- Persist open escalations, unresolved repeat failures, recalled-package cases,
  low-confidence release questions, and ownership-transfer packets for audit
  continuity.
- Restore the last validated pack after fixes, then rerun local validation
  before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation
  implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy
  adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand,
  sustained safe operation, validated release-boundary handling, stable client
  communication quality, and explicit governance approval.

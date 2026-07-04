# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, program model, and whether the operator is CCDF-funded, Head Start, public pre-K, private-pay center, family child care, or mixed-delivery care;
  - state licensing rules for ratios, supervision, medication delegation, transport procedures, complaint handling, incident deadlines, and emergency escalation;
  - systems-of-record connectors for child-care management, staff credentialing and scheduling, transportation, incident or MAR logging, compliance tracking, work orders, and document storage;
  - authority map for staffing coordination, enrollment, family engagement, licensing compliance, facilities, HR, health or safety review, and legal review owners.
- Required task and boundary metadata:
  - request classification schema for room opening, closing, ratio exception, release check, transportation run, incident follow-up, inspection remediation, and site-readiness review;
  - output schema for execution updates, completion records, exception summaries, workflow summaries, and escalation notes;
  - confidence threshold, source-precedence policy, low-confidence policy, and orchestrator-return policy.
- Required systems of record:
  - child-care management system,
  - staff credentialing and scheduling system,
  - transportation roster or dispatch system,
  - incident, medication, and safety log,
  - licensing or compliance tracker,
  - facility maintenance and work-order system,
  - document repository or e-signature store.

## Deployment Notes

- This lane is execution and evidence oriented. It must not perform licensing adjudication, staffing approval, HR discipline, child-protection determination, legal interpretation, or clinical decision-making.
- Each run should record:
  - scenario ID or request type,
  - child, classroom, site, route, and program context,
  - jurisdiction and tenant policy version,
  - authoritative records used,
  - missing prerequisites or conflicting systems,
  - escalation owner and reason when authority or evidence is missing,
  - final execution status, workflow summary, or completion record.
- Guardrails:
  - do not release a child without authoritative authorization evidence,
  - do not mark operational work complete while incident, inspection, transport, or release evidence remains open,
  - do not improvise state-specific ratio, medication, or complaint rules without retrieved jurisdiction context,
  - do not collapse child-care operations into generic task-management language.

## Rollback Requirements

- Disable orchestrator binding for this lane and route child-care operations requests to a human-safe fallback or adjacent specialist triage path.
- Preserve open incidents, unresolved inspection actions, unresolved release-control exceptions, ratio failures, and transportation exceptions for audit continuity.
- Restore the last validated pack after fixes, then rerun local package validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation across multiple child-care models, validated release and safety handling, and explicit governance approval.

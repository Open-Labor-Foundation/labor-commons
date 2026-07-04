# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, permit class, inspection regime, closeout rules, and customer communication obligations;
  - service model, complaint-routing thresholds, compensation limits, and escalation ownership;
  - tenant systems-of-record connectors for CRM, PMIS, field service, permitting, inspection, safety, and document systems;
  - authority matrix for project controls, permitting, inspection, superintendent, licensed trade, engineering, legal, and compensation approval.
- Required task and boundary metadata:
  - request classification schema for informational, complaint-driven, exception-driven, owner-transfer, and blocked requests;
  - output schema for resolution notes, communication summaries, escalation packages, and request-resolution summaries;
  - confidence threshold, source-precedence policy, low-confidence policy, and orchestrator-return policy.
- Required systems of record:
  - CRM or case-management platform,
  - PMIS and milestone tracking tools,
  - field-service or dispatch platform,
  - permitting and AHJ portals,
  - inspection and special-inspection record systems,
  - safety reporting system,
  - document control and closeout repositories,
  - policy and approval registry.

## Deployment Notes

- This lane is communication-only and must not execute permit filing, inspection booking, change-order approval, compensation approval, dispatch release, or field execution actions.
- Each run should record:
  - scenario ID or request type,
  - governing project, site, and jurisdiction context,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final communication artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer permit approval, inspection pass, code interpretation, or licensed trade signoff,
  - do not minimize safety, stop-work, or failed-inspection conditions,
  - do not describe work as complete while required closeout, testing, or turnover artifacts remain open.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open complaints, unresolved blockers, incomplete closeout messages, pending exception requests, and ownership-transfer packets for audit continuity.
- Restore the last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated permit and inspection boundary handling, stable customer-communication quality, and explicit governance approval.

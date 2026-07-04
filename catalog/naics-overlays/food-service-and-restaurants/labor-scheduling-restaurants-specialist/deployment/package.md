# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - planning horizon, service model, section and station map, and approved scheduling tie-break logic;
  - jurisdiction, facility, business unit, franchise or brand policy overlays, and any legal-approved fair-workweek or break rules;
  - approval matrix for overtime, payroll, pricing, refund, guest-recovery, fraud, and safety ownership.
- Required task and boundary metadata:
  - scheduling queue schema and decision-surface controls;
  - output schema for schedule, allocation, readiness, constraint, and escalation artifacts;
  - confidence threshold, low-confidence policy, source-precedence policy, and orchestrator-return policy.
- Required systems of record:
  - POS and reservation or booking systems,
  - order-management and delivery-volume systems,
  - labor-management and time-and-attendance systems,
  - service-desk, CRM, and guest recovery systems,
  - payment and refund ledgers,
  - policy, approval, and compliance registries.

## Deployment Notes

- This lane is recommendation-only and must not execute schedule publication, payroll changes, pricing updates, refund actions, or safety decisions.
- Each run should record:
  - scenario ID or request type,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final recommendation artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer final staffing, payroll, pricing, refund, fraud, or safety approval,
  - do not bypass source-policy conflict,
  - do not treat payment fraud or food-safety issues as ordinary scheduling friction.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to a human-safe fallback.
- Persist open blockers, unresolved payment or booking conflicts, and pending approval-needed summaries for audit continuity.
- Restore the last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after tenant connectors, policy adapters, and authority maps are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated restaurant-specific staffing behavior, and explicit governance approval.

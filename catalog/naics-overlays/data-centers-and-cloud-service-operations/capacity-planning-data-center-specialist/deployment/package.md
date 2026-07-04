# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - tenant capacity policy, SLO bands, and tie-break rules;
  - tenant systems-of-record connectors for utilization, capacity, facility telemetry, and tenancy/quota;
  - approval matrix and escalation directory.
- Required task/boundary metadata:
  - planning queue schema and decision surface controls;
  - output schema for allocation, constraint, and escalation artifacts;
  - confidence threshold and low-confidence policy.
- Required systems of record:
  - utilization and capacity monitoring systems,
  - cloud control-plane/tenancy systems,
  - facility telemetry and environmental control systems,
  - change-management and scheduling calendars,
  - policy/approval registry.

## Deployment Notes

- This lane is recommendation-only and must not execute migration, resize, or dispatch actions.
- Each run should record:
  - scenario ID,
  - mandatory input set completeness,
  - refusal cause when authority or policy is missing,
  - final recommendation artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer legal/financial/engineering approval,
  - do not bypass source-policy conflict,
  - do not output final go-live/go-no-go decisions.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open blockers and pending adaptation notes for audit continuity.
- Restore last validated pack after fixes, then rerun validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after tenant connectors and policy adapters are validated.
- Promote to retained-implementation only after sustained safe operation, validated source-priority handling, and governance approval.

# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - planning horizon, forecast-freeze rules, service model, and allocation tie-break logic;
  - tenant systems-of-record connectors for ERP, APS, MES, WMS, QMS, supplier, and logistics data;
  - approval matrix, release authority map, and adjacent specialist routing directory.
- Required task and boundary metadata:
  - planning queue schema and decision-surface controls;
  - output schema for schedule, allocation, constraint, and escalation artifacts;
  - confidence threshold, low-confidence policy, and source-precedence policy.
- Required systems of record:
  - ERP and demand-planning or APS systems,
  - MES and line-capacity sources,
  - WMS and lot-inventory systems,
  - quality-management and release-status systems,
  - supplier-management and logistics systems,
  - policy and approval registry.

## Deployment Notes

- This lane is recommendation-only and must not execute production, procurement, inventory-release, or logistics actions.
- Each run should record:
  - scenario ID or request type,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final recommendation artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer quality release, supplier approval, or executive tradeoff approval,
  - do not bypass source-policy conflict,
  - do not treat held or unreleased inventory as allocatable supply.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open blockers, unresolved traceability conflicts, and pending approval-needed summaries for audit continuity.
- Restore last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after tenant connectors, policy adapters, and authority maps are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated traceability and release-boundary handling, and explicit governance approval.

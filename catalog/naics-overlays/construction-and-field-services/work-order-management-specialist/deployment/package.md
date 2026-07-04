# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, permit classes, inspection regime, and owner turnover requirements;
  - service model, priority matrix, labor rules, shift limits, and subcontractor operating constraints;
  - tenant systems-of-record connectors for field service, project management, permitting, inspection, safety, and document systems;
  - approval matrix, licensed-trade boundaries, and adjacent specialist routing directory.
- Required task and boundary metadata:
  - work-order intake schema and decision-surface controls;
  - output schema for schedule, status, constraint, approval-needed, and escalation artifacts;
  - confidence threshold, low-confidence policy, source-precedence policy, and orchestrator-return policy.
- Required systems of record:
  - field service or CMMS platform,
  - project scheduling and resource-planning tools,
  - permitting and plan repositories,
  - inspection and special inspection record systems,
  - safety incident and observation systems,
  - document management and closeout repositories,
  - policy and approval registry.

## Deployment Notes

- This lane is recommendation-only and must not execute dispatch, permit filing, inspection scheduling, subcontractor award, or field rework actions.
- Each run should record:
  - scenario ID or request type,
  - governing jurisdiction and permit context,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final recommendation artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer permit approval, code interpretation, or licensed trade signoff,
  - do not bypass safety or inspection blockers,
  - do not mark closeout complete while required commissioning, testing, training, or owner-handoff evidence is missing.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open blockers, incomplete closeout packages, unresolved permit conflicts, and pending approval-needed summaries for audit continuity.
- Restore last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated permit and closeout boundary handling, and explicit governance approval.

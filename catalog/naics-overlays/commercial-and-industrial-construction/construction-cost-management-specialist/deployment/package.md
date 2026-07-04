# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, permit classes, inspection regime, and owner closeout requirements;
  - cost-code structure, estimate classes, schedule-of-values rules, contingency policy, payment-certification flow, and subcontractor operating constraints;
  - tenant systems-of-record connectors for PMIS, job-cost or ERP, scheduling, permitting, inspection, safety, and document systems;
  - approval matrix, licensed-trade boundaries, and adjacent specialist routing directory.
- Required task and boundary metadata:
  - cost-management intake schema and decision-surface controls;
  - output schema for schedule, capacity, constraint, approval-needed, project-controls summary, and escalation artifacts;
  - confidence threshold, low-confidence policy, source-precedence policy, and orchestrator-return policy.
- Required systems of record:
  - PMIS and job-cost platform,
  - estimating and forecasting repositories,
  - scheduling and milestone tools,
  - permitting and inspection repositories,
  - safety incident and observation systems,
  - document management and closeout repositories,
  - policy and approval registry.

## Deployment Notes

- This lane is recommendation-only and must not execute ERP updates, draw processing, subcontract award, permit filing, inspection scheduling, or field rework actions.
- Each run should record:
  - scenario ID or request type,
  - governing jurisdiction and permit context,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final recommendation artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer permit approval, code interpretation, licensed trade signoff, payment certification, or final budget authority,
  - do not bypass safety, inspection, or unresolved-objection blockers,
  - do not mark closeout or final-cost posture ready while required sign-off, punch, turnover, or completion evidence is missing.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open blockers, incomplete closeout packages, unresolved permit conflicts, pending approval-needed summaries, and cost-log assumptions for audit continuity.
- Restore last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated permit and closeout boundary handling, and explicit governance approval.

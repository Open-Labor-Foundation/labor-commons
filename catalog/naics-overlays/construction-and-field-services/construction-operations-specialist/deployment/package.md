# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, permit classes, inspection regime, and closeout requirements;
  - lifecycle-state definitions, service model, facility access rules, and operating constraints;
  - tenant systems-of-record connectors for work order, project management, permitting, inspection, safety, document-control, and approval systems;
  - approval matrix, licensed-trade boundaries, adjacent specialist routing directory, and contract-specific completion criteria.
- Required task and boundary metadata:
  - accepted work-package schema and lifecycle-state taxonomy;
  - output schema for execution status, completion records, exception notes, controls summaries, and escalation artifacts;
  - confidence threshold, low-confidence policy, source-precedence policy, and orchestrator-return policy.
- Required systems of record:
  - field service or work-order platform,
  - project management and scheduling tools,
  - permitting and plan repositories,
  - inspection and special inspection record systems,
  - safety incident and observation systems,
  - document control and closeout repositories,
  - policy and approval registry.

## Deployment Notes

- This lane is execution-management support and must not execute permit filing, regulatory communication, licensed trade signoff, safety release, change-order approval, or subcontractor commercial direction.
- Each run should record:
  - scenario ID or request type,
  - governing jurisdiction and permit context,
  - lifecycle-state before and after the decision,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final execution, completion, or exception artifact produced.
- Guardrails:
  - do not infer permit approval, code interpretation, or licensed trade signoff,
  - do not bypass safety or inspection blockers,
  - do not mark completion while required inspection, punch-list, systems-manual, training, or turnover evidence is missing,
  - reopen or reverse lifecycle state when new safety or inspection evidence changes the answer.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open execution blockers, incomplete closeout packages, unresolved permit conflicts, and pending escalation notes for audit continuity.
- Restore last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, lifecycle-state mappings, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated execution-state reversibility, strong completion-evidence performance, and explicit governance approval.

# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, permit classes, inspection regime, outage controls, and return-to-service requirements;
  - lifecycle-state definitions, service model, facility access rules, and operating constraints;
  - tenant systems-of-record connectors for CMMS, work-order, asset, project, permitting, inspection, safety, and document-control systems;
  - approval matrix, licensed-trade boundaries, adjacent specialist routing directory, and contract-specific completion criteria.
- Required task and boundary metadata:
  - accepted work-package schema, asset and trade identifiers, and lifecycle-state taxonomy;
  - output schema for execution status, completion records, exception summaries, field-status summaries, and escalation artifacts;
  - confidence threshold, low-confidence policy, source-precedence policy, and orchestrator-return policy.
- Required systems of record:
  - CMMS or work-order platform,
  - field service or dispatch tools,
  - project management and scheduling tools,
  - permitting and plan repositories,
  - inspection and special inspection record systems,
  - safety incident and observation systems,
  - asset inventory or BAS-linked facility record systems,
  - document control and closeout repositories,
  - policy and approval registry.

## Deployment Notes

- This lane is execution-management support and must not execute permit filing, regulatory communication, licensed trade signoff, safety release, change-order approval, or direct return-to-service approval.
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
  - do not bypass safety, outage, or inspection blockers,
  - do not mark completion while required inspection, balancing, warranty, O&M, or closeout evidence is missing,
  - reopen or reverse lifecycle state when new safety or inspection evidence changes the answer,
  - do not represent provisional completion as authorized return to service without explicit supporting evidence and approver context.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open execution blockers, incomplete closeout packages, unresolved permit conflicts, and pending return-to-service escalation notes for audit continuity.
- Restore last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, lifecycle-state mappings, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated lifecycle-state reversibility, strong completion-evidence performance, and explicit governance approval.

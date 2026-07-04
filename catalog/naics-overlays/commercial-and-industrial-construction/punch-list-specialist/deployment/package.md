# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, permit classes, inspection regime, and final-turnover requirements;
  - punch-list severity model, item-aging rules, evidence standards, and owner acceptance rules;
  - systems-of-record connectors for project management, punch lists, work orders, permitting, inspection, safety, and closeout repositories;
  - authority matrix for superintendent, project controls, permitting, inspection, safety, licensed trade, and owner-acceptance boundaries.
- Required task and boundary metadata:
  - punch-item lifecycle schema with allowed states and reversible transitions;
  - output schema for execution status, completion evidence, exception summary, work-order status, and escalation artifacts;
  - confidence threshold, low-confidence policy, source-precedence policy, and orchestrator-return policy.
- Required systems of record:
  - project management information system,
  - punch-list or deficiency tracker,
  - field-service or work-order platform,
  - permitting and approved-plan repository,
  - inspection and special-inspection record systems,
  - safety reporting system,
  - document control and closeout repository,
  - authority and approval registry.

## Deployment Notes

- This lane is recommendation-only and must not execute permit filing, inspection booking, change-order approval, owner acceptance, or field rework actions.
- Each run should record:
  - scenario ID or request type,
  - governing jurisdiction and permit context,
  - current punch-item lifecycle state and requested transition,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final status artifact and evidence package when progression is supported.
- Guardrails:
  - do not infer permit approval, code interpretation, or licensed trade signoff,
  - do not bypass safety or inspection blockers,
  - do not mark punch items complete while backcheck, inspection, or turnover evidence remains incomplete,
  - do not treat substantial completion as final acceptance unless tenant authority explicitly says so.

## Rollback Requirements

- Disable orchestrator binding and route relevant punch-list requests to human-safe fallback.
- Persist open exception queues, blocked punch items, unresolved permit conflicts, and incomplete closeout packages for audit continuity.
- Restore the last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated punch-list lifecycle handling across multiple tenants, and explicit governance approval.

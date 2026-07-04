# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Required strategy: do not 

## Materialization Requirements

- Tenant-supplied policy and context:
  - mission doctrine and readiness thresholds,
  - maintenance handoff and return-to-service rules,
  - safety/engineering approval maps,
  - parts shortage governance and spare-control authorities,
  - legal/commercial waiver and warranty escalation pathways.
- Required task and boundary metadata:
  - artifact-to-state mappings,
  - asset state taxonomy,
  - required evidence and approval signatures,
  - source-of-truth precedence list.
- Required systems of record:
  - CMMS / maintenance execution,
  - readiness and mission-state registry,
  - inventory and logistics systems,
  - engineering change and safety systems,
  - tenant policy/authority directory.

## Deployment Notes

- Deployment mode: `specification-based` package with retrieval-driven runtime context.
- Monitoring:
  - track blocked/deferral outcomes,
  - monitor repeated missing evidence triggers,
  - monitor safety/engineering conflict escalations,
  - track parts-shortage-driven deferments and outage-risk outputs.
- Logging:
  - record scenario ID, evidence gaps, refusal reasons,
  - record source set and source-freshness checks,
  - record routed adjacent specialist and handoff context.
- Rollback path:
  - disable specialist package,
  - route sustainment support requests to safe orchestrator fallback,
  - restore last known validated bundle,
  - confirm no unclosed escalations before re-enable.

## Deployment and Commercial Notes

- Package stays validated `catalog` artifact and does not claim final authority.
  - sustained low-incident operation,
  - tenant governance approval,
  - repeated successful boundary-safe execution.

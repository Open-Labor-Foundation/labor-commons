# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and system-access credentials remain orchestrator-controlled.

## Required Configuration

- release version
- source refresh policy and review cadence
- retrieval connectors for:
  - CMMS or field-service records
  - BAS or BMS and fault-management data
  - utility billing and benchmarking data
  - permit and plan repositories
  - inspection and special-inspection records
  - safety observations and incident logs
  - closeout and turnover document stores
- escalation target mapping for project controls, permitting, inspection, safety, superintendent, and licensed trade owners
- tenant-specific authority matrices for KPI definitions, source precedence, disclosure approval, and final signoff ownership

## Materialization Requirements

- `commons-crew` must supply task metadata that identifies facility, asset or system scope, jurisdiction, reporting period, requested metric set, and requested decision shape.
- Runtime retrieval must provide the controlling systems of record, record locations, and freshness indicators before the specialist can act safely.
- Tenant-supplied assumptions must include KPI dictionaries, meter-boundary rules, benchmark posture, service model, source-precedence rules, and authority boundaries.
- Regulated-lane caveats must remain active for permit approval, code interpretation, licensed trade signoff, safety overrides, external disclosure approval, and final closeout acceptance.
- Refusal or orchestrator return is required when required records are missing, tenant policy conflicts with the public baseline, or authority shifts outside the lane.

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of work orders, utility records, permit records, inspection outcomes, safety logs, or escalation notes.
- Knowledge boundary: public references remain shared, while tenant policy overlays, KPI dictionaries, and operational thresholds are injected at request time.
- Allowed adaptation: terminology, work-order classes, SLA tiers, queue names, benchmark thresholds, route maps, and approved retrieval hooks.
- Prohibited adaptation: extending to permit approval, code interpretation, licensed trade judgment, budget approval, dispatch execution, or final disclosure signoff.

## Operations

- Monitoring:
  - low-confidence escalations caused by missing utility, meter, permit, inspection, or source-precedence context
  - repeated cross-system conflicts between CMMS, BAS or BMS, utility, and inspection records
  - repeated attempts to push licensed trade, code, permit, or final approval authority into the lane
- Logging:
  - request ID, facility context, records used, assumptions, blocker set, and escalation targets
  - whether output was analytical brief, caveat package, refusal, or escalation
- Alert triggers:
  - repeated requests to bypass inspection or safety blockers
  - repeated benchmark reporting attempts with incomplete utility or property data
  - repeated conflicts that require external approval authority

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected requests to a safe fallback policy that requires human routing decisions.
- Restore the prior validated manifest bundle.
- Re-run package audit and catalog validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim final permit, inspection, dispatch, budgeting, or licensed-trade authority.
- Health checks should confirm artifact presence, YAML or JSON parseability, scenario coverage, and source-refresh compliance.

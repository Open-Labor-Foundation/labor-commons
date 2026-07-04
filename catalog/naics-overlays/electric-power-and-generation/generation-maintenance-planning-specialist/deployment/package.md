# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, readiness release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and source-access credentials remain orchestrator-controlled.

## Required Configuration

- release version
- source refresh policy and review cadence
- retrieval connectors for:
  - outage calendars and maintenance records
  - unit capability or derating systems
  - reliability/event reporting feeds
  - crew readiness and readiness document stores
  - coordination notices and dispatch interfaces
- escalation target mapping for dispatch, outage restoration, compliance, legal, and operational approval owners
- tenant-specific authority matrices for tie-break rules and priority policy

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of outage records, capacity models, maintenance workplans, or escalation logs.
- Knowledge boundary: public references remain shared, while tenant policy overlays and operational thresholds are injected at request time.
- Allowed adaptation: terminology, market/operator mapping, service ceilings, route maps, and tenant rule overlays.
- Prohibited adaptation: extending to dispatch execution, legal/final approval authority, procurement approvals, or bypassing escalation requirements.

## Operations

- Monitoring:
  - low-confidence escalations caused by stale data or missing prerequisites
  - recurring capacity conflicts with no published tie-break policy
  - repeated cross-jurisdiction instruction mismatches
- Logging:
  - request ID, inputs used, missing artifact list, assumptions, and escalation targets
  - whether output was recommendation-only or refusal/escalation
- Alert triggers:
  - repeated requests to grant final approval
  - repeated stale-model scheduling attempts without refreshed records
  - repeated conflicts requiring external approval authority

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected scenarios to a safe fallback policy that requires human routing decisions.
- Restore prior validated manifest bundle.
- Re-run package audit and catalog validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim final dispatch, dispatching authority, or approval authority.
- Health checks should confirm artifact presence, YAML/JSON parseability, required scenario counts, and refresh policy compliance.

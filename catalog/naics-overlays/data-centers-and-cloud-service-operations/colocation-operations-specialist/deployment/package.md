# Deployment Package

## Runtime Model

- Deployment path: `catalog/naics-overlays/data-centers-and-cloud-service-operations/colocation-operations-specialist/`
- Runtime strategy: `specification-based`.
  - The package does not claim retained-implementation execution authority.
  - retained-implementation promotion requires a separate explicit change and governance review.
- Runtime expectation: colocation execution specialist pack that supports environment, connectivity, and closure-evidence workflows with explicit exception handling.

## Required Configuration

- Release version and workflow contract fields in manifest and evaluation files.
- Refresh policy and stale-source handling for operational references.
- Tenant retrieval hooks for ticketing, DCIM/facility, access-control, power telemetry, and network control systems.
- Escalation mapping for adjacent specialists and human-review triggers.
- Queue-state tracing for accepted / in-progress / exception_queued / rework / completed / blocked / escalated transitions.

## Tenant Adaptation and Boundaries

- Tenant boundary: no cross-tenant sharing of work orders, access-control logs, ticket identifiers, and evidence artifacts.
- Tenant adaptation: facility taxonomy, criticality tiers, outage thresholds, approval chain, and contract-boundary routing.
- Prohibited adaptation: converting this pack into licensed electrical, legal, contract-finance, or safety-authority execution logic.

## Queue and Lifecycle Behavior

- Expected lifecycle states:
  - `accepted`, `in_progress`, `exception_queued`, `rework`, `awaiting_clearance`, `completed`, `blocked`, and `escalated`.
- State advancement is evidence-driven and reversible when corrected records are supplied.
- Explicit exception entries are required for missing artifacts, conflicting records, and unresolved policy context.

## Monitoring and Logging

- Track:
  - exception rates by type (missing evidence, policy conflict, stale record source)
  - completion-deferral or hold count
  - source-staleness occurrences
  - repeated out-of-scope requests for adjacent authority
- Log:
  - request/tracing identifiers
  - lifecycle state, confidence, scenario IDs, and escalation reason
  - owner and prerequisite maps used for completions

## Rollback Path

- Disable the overlay in orchestrator routing for this lane.
- Re-route active work to safe fallback specialists per adjacent-boundary registry.
- Restore previous release state from catalog history as needed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry data-centers-and-cloud-service-operations --agent colocation-operations-specialist` prior to re-enable.

- This package remains `specification-based` as required.
- 
  - operational outcomes remain stable under repeated tenant telemetry,
  - exception and boundary behavior is consistently correct,
  - and a separate governance-approved retained-implementation package is explicitly committed.

# Deployment Package

## Runtime Model

- Deployment model: versioned distribution operations specialist package at
  `catalog/naics-overlays/electric-power-and-generation/distribution-operations-specialist/`.
- Runtime expectation: orchestrator-invoked execution specialist overlay that provides distribution fulfillment support, lifecycle tracking, exception handling, and handoff/routing behavior.
- Runtime strategy: `specification-based`.
  - The package does not claim retained-implementation execution authority.
  - Trusted built promotion requires a separate commit and explicit package-level promotion flow.
- Required configuration:
  - release version and manifest versioning
  - authority-source review policy and stale-source handling
  - retrieval hooks for outage, dispatch, logistics, safety, and vendor records
  - escalation target roster and confidence thresholds
  - queue/state tracing integration for accepted/in-progress/paused/escalated/completed transitions

## Tenant Adaptation and Boundaries

- Tenant boundary: no cross-tenant sharing of outage records, crew rosters, dispatch logs, contractor commitments, or safety notices.
- Knowledge boundary: distribution public baseline in `manifest.yaml` is static within release;
  tenant records (facility policies, jurisdiction overlays, priority maps, and contracts) are injected at runtime by orchestrator.
- Allowed adaptation: outage naming conventions, priority tiers, tenant escalation contacts, data connectors, and facility-specific thresholds.
- Prohibited adaptation: converting generic execution support into switching safety signoff, legal authority, or procurement-contract substitution approval.

## Queue and Lifecycle Behavior

- Expected lifecycle states:
  - `accepted`, `in_progress`, `exception_queued`, `rework`, `awaiting_clearance`, `completed`, `blocked`, and `escalated`.
- Stage advancement is evidence-driven and reversible if required artifacts are later corrected.
- Explicit exception queue entries are required for missing artifacts, evidence conflicts, and missing jurisdiction context.

## Monitoring and Logging

- Monitor:
  - exception frequency by type (missing evidence, policy conflict, escalation loop)
  - stale source checks against authority-source review dates
  - repeated blocked attempts to force out-of-scope authority
  - repeated low-confidence requests with unresolved tenant facts
- Log:
  - request/trace id, current state, confidence, scenario mapping, and routing rationale
  - evidence package references used for completion assertions
  - escalation recipient and reason when ownership leaves this lane

## Rollback Path

- Disable the current release path in orchestrator routing.
- Re-route active requests to safe fallback specialist handling.
- Restore prior validated package contents from repository release catalog.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry electric-power-and-generation --agent distribution-operations-specialist` before re-enabling.

- Current state remains `specification-based` as requested by issue #1286.
- Promote only when:
  - repeated operations show stable low-conflict completion outcomes,
  - tenant-specific telemetry confirms safe automated boundary compliance,
  - and an explicit retained-implementation package approval is committed in a separate change set.

## Support Owner

- Repository owner or designated catalog release steward.

# Deployment Package

## Runtime Model

- Deployment model: versioned data center operations specialist package at
  `catalog/naics-overlays/data-centers-and-cloud-service-operations/data-center-operations-specialist/`.
- Runtime expectation: orchestrator-invoked execution specialist overlay for execution, readiness checks, exception routing, and completion evidence capture.
- Runtime strategy: `specification-based`.
  - The package does not claim retained-implementation execution authority.
  - retained-implementation promotion requires a separate explicit commit and promotion flow.

## Required Configuration

- package version and manifest release alignment
- authority-source review policy and stale-source handling
- runtime retrieval hooks for incident platform, IAM directory, change/CAB system, and dependency maps
- escalation target roster and confidence thresholds
- lifecycle trace integration for states: accepted, in_progress, exception_queued, rework, awaiting_clearance, completed, blocked, escalated

## Tenant Adaptation and Boundaries

- Tenant-owned context: incident taxonomy, critical workload tiers, privilege model, approval matrices, provider contracts, and external dependency owners.
- Allowed adaptation: criticality naming, escalation contacts, region/site-specific policy overrides, and retrieval field mapping.
- Prohibited adaptation: changing lane authority from execution support to legal approval, safety authorization, or financial release decisions.

## Queue and Lifecycle Behavior

- Expected lifecycle states:
  - `accepted`, `in_progress`, `exception_queued`, `rework`, `awaiting_clearance`, `completed`, `blocked`, `escalated`.
- State transitions are evidence-driven and reversible when missing artifacts are corrected.
- Explicit exception queue entries are required for missing artifacts, dependency failures, and missing policy scope.

## Monitoring and Logging

- Monitor:
  - artifact-completion mismatch rate,
  - dependency failures requiring external routing,
  - repeated out-of-scope authority requests,
  - stale source checks against authoritative review dates.
- Log:
  - request id, current state, confidence score, scenario mapping,
  - evidence references used in completion assertions,
  - escalation destination and reason.

## Rollback Path

- Disable this specialist in the orchestrator route table.
- Re-route affected requests to safe fallback handling.
- Restore prior validated package from the release catalog.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry data-centers-and-cloud-service-operations --agent data-center-operations-specialist` before re-enabling.

- Current package remains `specification-based` as requested by issue #1251.
- Promote to retained-implementation only after:
  - repeated low-conflict operational outcomes,
  - tenant telemetry confirms consistent boundary compliance,
  - and an explicit retained-implementation promotion commit is accepted by product governance.

## Support Owner

- Repository owner or catalog release steward.

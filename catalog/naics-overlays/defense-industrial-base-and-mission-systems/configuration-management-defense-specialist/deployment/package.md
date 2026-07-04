# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Keep validated catalog posture only; do not claim trusted built behavior without a separate promoted package.

## Materialization Requirements

- Tenant-required facts:
  - mission-readiness taxonomy and hold-state definitions,
  - maintenance/mission scheduling doctrine,
  - approved prioritization matrix and tie-break rules,
  - tenant authority matrix for release, contracting, legal, safety, and cybersecurity decisions,
  - current systems-of-record access paths and retention boundaries.
- Required task/boundary metadata:
  - workflow phase selection, allowed outputs, and escalation policy,
  - artifact shape contracts for readiness blocks, dependency chains, and handoff records,
  - evidence minimum set and confidence gates,
  - source precedence and source-refresh policy.
- Required systems of record:
  - CMDB/PLM/engineering-change system,
  - maintenance readiness and availability registries,
  - operations and planning queue tools,
  - approval/exception trackers,
  - compliance and security evidence stores.

## Deployment Notes

- Deploy in `specification-based` with explicit tenant policy injection and source refresh metadata.
- Monitor on each invocation:
  - blocked recommendations due to missing evidence or tenant facts,
  - unresolved policy conflicts and escalation rates,
  - capacity-overrun and priority-conflict escalations,
  - cross-specialist handoff volume and closure quality.
- Operational logging requirements:
  - record scenario ID, evidence completeness checks, refusal triggers, and escalation destinations,
  - record source usage and staleness checks,
  - record assumptions and required follow-up checklists.

## Rollback Path

- Disable or pause this package in routing.
- Route affected configuration-management planning requests to safe orchestrator fallback.
- Restore validated catalog baseline from previous package revision.
- Confirm no open escalations are lost before re-enable.

## Promotion Guidance

  - sustained low-incident operation,
  - governance approval,
  - evidence that boundary-safe decisions remain stable across repeated cycles,
  - no unresolved blockers on ambiguity handling.

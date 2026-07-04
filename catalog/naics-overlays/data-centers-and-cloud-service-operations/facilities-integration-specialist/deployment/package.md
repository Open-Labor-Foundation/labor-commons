# Deployment Package

## Runtime

- Target runtime: `commons-crew` in `specification-based` execution mode.
- Required runtime strategy: `specification-based` until retained implementation is explicitly promoted via governance review.

## Deployment Requirements

- Tenant-supplied policy and context:
  - Facility critical-load classes and impact priorities.
  - Safety, permit, and LOTO authority maps.
  - DCIM/BMS source-of-truth identifiers and retrieval credentials.
  - Change-management and cloud operations escalation paths.
  - Return-to-service and outage notification obligations.
- Required task and boundary metadata:
  - facility workflow state taxonomy (accepted, in-progress, blocked, rework, completion-ready, released),
  - evidence matrix by state (signoffs, telemetry windows, closeout artifacts),
  - adjacent-lane ownership registry,
  - source-precedence order (tenant policy > public guidance > inferred defaults).
- Required systems of record:
  - DCIM or infrastructure management system,
  - BMS / environmental telemetry,
  - work-order or field management systems,
  - safety and permit management system,
  - tenant policy and approver registry,
  - outage/incident and cloud context systems.

## Deployment Notes

- Execution mode: spec-first artifact planner that produces explicit in-lane recommendations only.
- Monitoring:
  - track blocked/exception rate,
  - track missing-evidence escalations,
  - track conflicting-source escalations,
  - track repeated refusal-to-complete cases.
- Logging:
  - log scenario IDs, evidence gaps, and confidence level,
  - log source set and refresh/decay checks,
  - log routed specialists and handoff context.
- Rollback path:
  - disable the facilities integration specialist bundle,
  - return requests to safe orchestrator default handling,
  - preserve unresolved exceptions and reopen queue owners,
  - restore last known validated overlay after remediation.

## Promotion and Market Notes

- This package is suitable for catalog distribution as validated `specification-based`.
  - sustained safe execution with low unresolved escalation rate,
  - tenant governance acceptance of boundary-safe behavior,
  - repeatable evidence-ready state transitions across deployment environments.
- Use case position: facilities integration workflow governance where strict state evidence and completion refusal behavior is mandatory.

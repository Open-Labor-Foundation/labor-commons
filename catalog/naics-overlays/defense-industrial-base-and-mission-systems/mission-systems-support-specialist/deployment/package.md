# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Required strategy: remain `specification-based` until explicit retained implementation governance approval.

## Materialization Requirements

- Tenant-supplied policy and context:
  - mission doctrine and mission-readiness thresholds,
  - interface ownership and change-control map,
  - access control and approval model,
  - security and rollback requirements,
  - escalation owners and escalation hierarchy.
- Required task and boundary metadata:
  - supported artifacts and state taxonomy,
  - required evidence and owner signatures,
  - source-of-truth precedence list,
  - cross-team routing and escalation matrix.
- Required systems of record:
  - mission systems and service ticketing,
  - change-management and release systems,
  - identity/access management,
  - mission-readiness and operations systems,
  - incident and approval systems.

## Deployment Notes

- Deployment mode: specification-based package with retrieval-driven context.
- Monitoring:
  - blocked and low-confidence outcomes,
  - missing evidence patterns,
  - repeat-failure escalations,
  - policy-conflict and tenant-policy mismatch events,
  - systems-and-interface dependency escalations.
- Logging:
  - record scenario ID, evidence sufficiency, and refusal reasons,
  - record source set and source-freshness checks,
  - record adjacent-lane route with owner and dependency state.
- Rollback path:
  - disable specialist package,
  - route mission-system support to safe orchestrator fallback,
  - preserve unresolved cases with handoff context,
  - restore last known validated bundle only after remediation.

## Deployment and Commercial Notes

- Package is validated for catalog deployment and does not claim trusted built authority.
  - sustained low incident and escalation quality,
  - explicit tenant governance approval,
  - demonstrated safe policy-boundary handling.

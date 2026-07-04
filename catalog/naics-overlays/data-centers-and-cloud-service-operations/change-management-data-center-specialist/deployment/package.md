# Deployment Package

## Runtime and Packaging

- Agent slug: `change-management-data-center-specialist`
- Target runtime: `commons-crew` using spec-pack execution.
- Target delivery level: `validated`.
- Runtime strategy: `specification-based`.
- Lane contract: planning, scheduling, and allocation.

## Deployment Requirements

- Provide tenant policy files for:
  - change authority matrix,
  - approved priority/tie-break policy,
  - safety and service-level boundaries,
  - approved approver and escalation roster.
- Configure tenant connectors for authoritative systems:
  - change/request intake and scheduling
  - incident and event tracking
  - CMDB / topology
  - infrastructure telemetry and BMS/facility systems
  - identity/access controls
  - release and deployment systems

## Runtime Behaviour and Boundaries

- The lane outputs only planning recommendations and readiness artifacts.
- The lane must not grant final go-live approval or dispatch execution authority.
- On policy/source conflict or missing facts, return refusal/escalation artifacts and block final sequencing.

## Rollback and Recovery

- Disable this lane in orchestrator routing if evidence rules are violated.
- Restore prior validated manifest if deployment errors occur.
- Rerun audit and spec validation before re-enablement.

## Promotion Criteria to Trusted Built

- Repeated tenant-safe execution with low false-positive escalation.
- No unresolved validation failures in marketplace/repo audit.
- Confirmed governance approval for broader built implementation.
- This pack explicitly remains specification-based until that promotion event.

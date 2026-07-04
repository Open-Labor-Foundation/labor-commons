# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Delivery target: `validated`.

## Materialization Requirements

- Tenant-supplied runtime context:
  - authoritative tenant policies and escalation matrices;
  - owner and authority directory;
  - incident, monitoring, and facility telemetry connectors;
  - maintenance/change-window source connectors;
  - closure acceptance mechanism and evidence retention requirements.
- Required task/boundary metadata:
  - incident intake schema,
  - in-scope vs out-of-scope definitions,
  - handoff output shape constraints,
  - dependency/blocker severity map.
- Required systems of record:
  - Incident management platform,
  - service desk/ticketing systems,
  - CMDB/configuration and asset directories,
  - cloud service and tenancy control-plane logs,
  - facility telemetry and thermal/power monitoring.

## Deployment Notes

- Deployment posture remains `specification-based`; no autonomous remediation or approval actions are performed.
- The lane must record:
  - scenario ID,
  - missing prerequisite blockers,
  - refusal reason and escalation owner,
  - handoff summary with prior and destination owner,
  - evidence checklist and completion state.
- Observability requirements:
  - source refresh checks and confidence flags,
  - owner ambiguity and dependency collisions,
  - closure gate outcomes.

## Rollback Requirements

- Disable runtime binding for the lane in orchestrator.
- Route active coordination work to orchestrator-safe fallback.
- Preserve open blockers and partial handoff artifacts in persistent records.
- Re-enable only after governance verification and configuration corrections.

## Deployment and Commercialization Positioning

- validated catalog artifact is intended for tenant-enabled rollout with tenancy constraints.
- retained-implementation promotion is explicitly excluded for this version and requires a separate trusted runtime build and governance approval.
- Promotion criteria:
  - sustained safe execution on live incidents,
  - measured reduction in unsafe closure/escalation behavior,
  - demonstrated boundary adherence under policy-conflict load.

# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist execution with tenant-scoped overlays.
- Deployment model: package-consumable YAML + markdown asset bundle with immutable source links.
- Required secrets: none in package; integrations inject platform credentials in orchestrator runtime.
- Required configuration: tenant profile, rollout windows, criticality map, and collaboration impact thresholds.

## Isolation

- Tenant boundary: strict tenant context isolation for device records, assumptions, and exceptions.
- Knowledge boundary: baseline policy knowledge is shared read-only; tenant-specific recommendations are injected per-tenant.
- Adaptation policy: configuration and retrieval tuning only; cross-tenant policy merges are disallowed unless explicitly approved by orchestrator.

## Operations

- Monitoring: boundary handoff rate, unresolved low-confidence escalations, policy-conflict rate, and deployment revert events.
- Logging: immutable evidence logs for decisions, assumptions, and escalation outputs.
- Rollback path: disable new policy set, restore prior policy snapshot, validate check-in/health baselines, and resume from approved fallback profile.
- Support owner: endpoint-management steward and catalog deployment owner.

## Additional Deployment Notes

- Deployment constraints, tenant adaptation, and rollout assumptions are listed in `manifest.yaml` under `tenant_adaptation_policy` and scenario guidance.
- Required rollback checks include: endpoint check-in continuity, recovery playbook execution, and evidence-log continuity.
- Monitoring requirement includes user-impact and remediation latency to ensure adoption policy quality over time.

# Deployment Package

## Runtime

- Target runtime: orchestrator-consumed specialist artifact used by catalog runtime.
- Deployment model: hosted specialist with tenant-scoped policy retrieval.
- Required secrets: none inside package; secrets are injected by orchestrator integrations for tenant connectors.
- Required configuration:
  - tenant_profile_id
  - deployment ring selection
  - rollback window and change control schedule
  - identity source priority (Entra/Directory synchronization mode)

## Isolation

- Tenant boundary: strict tenant namespace isolation for recommendations and adaptation data.
- Knowledge boundary: no cross-tenant control sharing; policy references must be tagged by tenant and workload sensitivity.
- Adaptation policy: approved retrieval and policy configuration only; no silent cross-tenant merge.

## Operations

- Monitoring:
  - boundary rejection rate
  - low-confidence escalations pending >24h
  - policy rollback frequency by week
  - deferred evidence requests and operator follow-up completion
- Logging:
  - recommendation request/response bundles
  - source citation IDs used for each guidance package
  - scenario and escalation decisions for audit retention
- Rollback path:
  - Disable specialist dispatch to this release, restore prior version artifact in orchestrator registry,
    and switch to human or orchestrator fallback route.
  - Preserve evidence bundle and re-run `npm run lint` before re-activation.
- Support owner: Windows platform operations lead and package governance steward.

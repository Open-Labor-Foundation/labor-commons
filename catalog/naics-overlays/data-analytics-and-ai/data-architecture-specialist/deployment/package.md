# Deployment Package

## Runtime

- Target runtime: Orchestrator-hosted specialist component with retrieval plugin and scenario-aware prompt routing.
- Deployment model: Multi-tenant SaaS agent with per-tenant policy overlays and tenant-specific validation configurations.
- Required secrets:
  - `OPENAI_API_KEY`
  - `AGENT_TELEMETRY_SIGNING_KEY`
  - `SCHEMA_REGISTRY_URL`
  - `METADATA_CATALOG_TOKEN`
- Required configuration:
  - `data_quality_thresholds`
  - `tenant_isolation_profile`
  - `pipeline_failure_response_mode`

## Isolation

- Tenant boundary: Strict tenant id partitioning for state, artifact cache, and policy defaults.
- Knowledge boundary: Specialist baseline uses public authority sources and curated tenant-approved add-on mappings; no external web calls are mandatory at runtime unless policy permits.
- Adaptation policy:
  - Tenant overrides only through approved configuration manifests.
  - Changes must be reversible with audit trail and owner approval.
  - Shared tenant learning is disabled unless contractually approved.

## Operations

- Monitoring: Confidence score trends, boundary-rejection counts, scenario pass-rate continuity, and governance-gap hit ratio.
- Logging: Immutable structured logs for inputs, returned scopes, confidence flags, escalation events, and source references used.
- Rollback path:
  - Disable specialist rollout for target tenant/group.
  - Revert to prior manifest/evidence bundle and stable retrieval profile.
  - Restore previous tenant policy overlay and alert support owner.
- Support owner: repository-owner

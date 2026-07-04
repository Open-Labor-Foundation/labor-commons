# Deployment Package

## Runtime

- Target runtime: Retrieval-augmented specialist runtime with policy inference layer and deterministic routing.
- Deployment model: Containerized or serverless specialist profile with pull-based manifest refresh and gated rollout.
- Required secrets: Tenant identifiers, signed retrieval credentials, and read-only directory/telemetry API credentials where policy execution requires them.
- Required configuration: Confidence thresholds, environment allow-lists, tenant isolation mode, evidence retention policy, and feature flags for shared meta-agent delegation.

## Isolation

- Tenant boundary: Tenant-aware processing only; no cross-tenant training or inference bleed.
- Knowledge boundary: Public identity and platform sources plus curated, versioned baselines.
- Adaptation policy: Retrieval and configuration updates only under approval; no blind parameter drift.

## Operations

- Monitoring: Track policy recommendation refusals, escalation rate, scenario pass trends, and exception handling by tenant.
- Logging: Capture scenario inputs, referenced sources, boundary decisions, confidence tags, and rollback events for 180 days minimum.
- Rollback path:
  - Disable validated runtime flag for the specialist.
  - Revert manifest/evidence to last approved version.
  - Route unresolved identity policy decisions to orchestrator.
- Support owner: repository owner with shared meta-agent specialist liaison for evidence updates.

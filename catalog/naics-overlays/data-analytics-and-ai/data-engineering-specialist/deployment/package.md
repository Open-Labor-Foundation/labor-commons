# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist package consumed through retrieval and routing layer, no standalone service required.
- Deployment model: managed specialist deployment with versioned bundles; blue-green package swaps during releases.
- Required secrets: none for base guidance; optional tenant-specific telemetry secrets only when live API integrations are enabled.
- Required configuration: domain-specific policy allowlist, tenant policy profiles, output confidence thresholds, and evidence citation format settings.

## Isolation

- Tenant boundary: strict per-tenant policy and config partitioning with no shared execution context.
- Knowledge boundary: core manifest and authority source index remains shared; tenant-local facts remain scoped through orchestrator memory layers.
- Adaptation policy: configuration and retrieval profile adjustments only; no source rewrite without release-owner review.

## Operations

- Monitoring: scenario pass-rate trend, low-confidence escalation ratio, boundary-rejection accuracy, governance-control compliance gaps, and evidence freshness age.
- Logging: structured request-level logs including scenario class, decision shape (recommend/escalate/reject), cited authorities, and confidence score.
- Rollback path: disable specialist package version, route requests to generic orchestration fallback, and rerun readiness checks before re-enabling.
- Support owner: catalog steward and platform delivery owner for the data-analytics-and-ai lane.

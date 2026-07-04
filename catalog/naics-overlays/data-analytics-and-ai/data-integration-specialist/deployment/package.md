# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist package consumed through retrieval and routing; no standalone service runtime is required.
- Deployment model: versioned specialist bundle with blue-green package swaps and feature-flagged rollout by tenant or workspace.
- Required secrets: none for baseline guidance; optional tenant-specific connector telemetry or retrieval credentials only if live integrations are enabled by the host platform.
- Required configuration: tenant policy profile, destination platform allowlist, evidence citation mode, confidence threshold, shared-meta-agent endpoint configuration, and fallback mode selection.

## Isolation

- Tenant boundary: strict tenant-scoped execution context, policy profile, and evidence log partitioning with no cross-tenant state reuse.
- Knowledge boundary: shared manifest baseline and meta-agent contracts are global; tenant facts, connector details, schemas, and incident history stay tenant-local.
- Adaptation policy: allowed only through configuration, retrieval, and approved tuning under release-owner review; no cross-tenant source sharing; rollback is mandatory for all specialization changes.

## Operations

- Monitoring: scenario pass-rate trend, boundary-rejection accuracy, low-confidence escalation rate, source freshness age, replay/cutover guidance usage, and citation coverage for evidence-backed recommendations.
- Logging: structured request logs capturing request class, source/destination pattern, decision type (recommend, reject, escalate), cited authorities, confidence score, tenant policy profile, and fallback path if a shared meta-agent was unavailable.
- Rollback path: disable the current package version, route requests to the orchestrator fallback or broader data specialist, revert to the previous validated bundle, and rerun readiness checks before re-enabling.
- Support owner: catalog steward plus the data-analytics-and-ai delivery owner responsible for specialist packaging and release governance.

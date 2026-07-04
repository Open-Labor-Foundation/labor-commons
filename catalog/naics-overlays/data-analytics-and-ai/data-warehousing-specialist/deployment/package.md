# Deployment Package

## Runtime

- Target runtime: Orchestrator-hosted specialist package consumed through routing and retrieval; no standalone service runtime is required.
- Deployment model: Versioned specialist bundle with blue-green package swaps and tenant- or workspace-scoped rollout controls.
- Required secrets: None for the baseline package; optional tenant-specific retrieval or telemetry credentials only when the host platform enables live warehouse metadata access.
- Required configuration: Tenant policy profile, warehouse platform allowlist, confidence threshold, citation mode, shared-meta-agent endpoint configuration, and fallback mode selection.

## Isolation

- Tenant boundary: Strict tenant-scoped execution context, evidence logs, lineage overlays, and policy profiles with no cross-tenant state reuse.
- Knowledge boundary: The public manifest baseline and meta-agent contracts are global; tenant warehouse schemas, incidents, costs, lineage details, and retention exceptions remain tenant-local.
- Adaptation policy: Allowed only through configuration, retrieval, and approved tuning under release-owner review. Prohibited adaptation includes widening the specialty into data architecture, BI, general engineering, or governance-policy ownership. Rollback is mandatory for all specialization changes.

## Operations

- Monitoring: Track scenario pass-rate trend, boundary-rejection accuracy, low-confidence escalation rate, source-freshness age, warehouse recovery guidance usage, citation coverage, and repeated cost-performance or stale-data incident patterns.
- Logging: Use structured request logs that capture request class, warehouse platform, decision type (recommend, reject, escalate), cited authorities, confidence score, tenant policy profile, shared-meta-agent fallback path, and release version.
- Rollback path: Disable the active package version, route requests to orchestrator fallback or adjacent specialists, restore the previous validated bundle, and rerun readiness checks before re-enabling the new version.
- Support owner: Catalog steward plus the data-analytics-and-ai delivery owner responsible for warehouse-specialist packaging and release governance.

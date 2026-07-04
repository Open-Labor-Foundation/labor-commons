# Deployment Package

## Runtime

- Target runtime: Orchestrator-hosted specialist service or policy plugin running a stateless reasoning layer with persisted artifact outputs.
- Deployment model: Multi-tenant specialist package with immutable manifest and evidence artifacts plus deferred shared-meta-agent retrieval.
- Required secrets:
  - Artifact-store credential if retention reviews or evidence packets are persisted outside the orchestrator runtime
  - Optional credentials for delegated shared-meta-agent execution paths when operators enable external retrieval
- Required configuration:
  - Confidence threshold for low-confidence escalation
  - Source freshness and review-date policy
  - Tenant retention-policy allow-list and approved retrieval connectors
  - Tenant boundary for schedules, file plans, disposition logs, and evidence traces
  - Shared meta-agent timeout and freshness thresholds
  - Release-version pinning for manifest and evaluation artifacts
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Isolation

- Tenant boundary: Strict tenant partitioning for uploaded schedules, file plans, disposition logs, evidence traces, cache keys, and adaptation settings.
- Knowledge boundary: Public baseline guidance is shared; tenant-specific retention schedules, legal-hold references, record inventories, and system mappings remain tenant-scoped and must not be reused across tenants.
- Adaptation policy: Approved configuration, retrieval, and tuning changes only. No unrestricted tenant-specific behavior changes and no cross-tenant sharing.

## Operations

- Monitoring:
  - Track invocation counts, low-confidence escalation rate, out-of-scope rejection rate, scenario pass rate, and shared-meta-agent fallback rate.
  - Alert when source review dates exceed refresh intervals, when vendor capability baselines drift, or when release artifacts fall out of sync.
  - Watch for repeated retention-capability gap findings, unresolved disposition approvals, and stale schedule patterns across tenants.
- Logging:
  - Record boundary checks, authoritative sources used, confidence levels, fallback-path activation, and retention recommendations.
  - Redact tenant-sensitive record-series details, matter names, hold references, and raw document contents unless needed for an approved evidence artifact.
- Rollback path:
  - Revert to the prior validated manifest and readiness artifact bundle.
  - Disable tenant adaptation overlays while preserving the reviewed public baseline.
  - Pause delegated shared-meta-agent enrichment and continue with the local baseline package if freshness or confidence checks fail.
- Support owner: Governance, risk, and compliance package steward with records-retention domain oversight.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: prefer the local manifest and route unresolved ambiguity to the orchestrator.

## Deployment Notes

- Health checks should confirm manifest parse or load success and consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Release promotion requires local repository validation to pass and for the package to retain a recorded human verification entry.
- Tenant isolation constraint: this package may adapt to tenant-specific schedules, file plans, and approved retrieval sources, but it must not learn tenant-specific legal or retention interpretations into the public baseline.

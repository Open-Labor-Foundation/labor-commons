# Deployment Package

## Runtime

- Target runtime: Orchestrator-hosted specialist service or policy plugin running a stateless reasoning layer with persisted artifact outputs.
- Deployment model: Multi-tenant specialist package with tenant-scoped configuration overlays and deferred shared-meta-agent retrieval.
- Required secrets:
  - Artifact-store credential if evidence outputs are persisted outside the orchestrator runtime
  - Optional credentials for delegated shared-meta-agent execution paths when operators enable external retrieval
- Required configuration:
  - Confidence threshold for low-confidence escalation
  - Audit-calendar and review-date policy
  - Tenant boundary and evidence-retention policy
  - Approved retrieval sources for tenant-local control inventories and artifacts
  - Shared meta-agent timeout and freshness thresholds
  - Release-version pinning for manifest and evaluation artifacts
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Isolation

- Tenant boundary: Strict tenant partitioning for uploaded artifacts, cache keys, evidence traces, and adaptation settings.
- Knowledge boundary: Public baseline knowledge is shared; tenant-specific control inventories, audit timelines, and evidence mappings remain tenant-scoped and must not be reused across tenants.
- Adaptation policy: Approved configuration, retrieval, and tuning changes only. No unrestricted tenant-specific behavior changes and no cross-tenant sharing.

## Operations

- Monitoring:
  - Track invocation counts, low-confidence escalation rate, out-of-scope rejection rate, scenario pass rate, and shared-meta-agent fallback rate.
  - Alert when source review dates exceed refresh intervals, when delegated meta-agent responses become stale, or when readiness artifacts drift from the pinned release version.
- Logging:
  - Record boundary checks, source references used, readiness recommendations, confidence levels, and fallback-path activation.
  - Redact tenant-sensitive control IDs, usernames, and raw audit-event contents unless needed for an approved evidence artifact.
- Rollback path:
  - Revert to the prior signed manifest and readiness artifact revision.
  - Disable tenant adaptation overlays while preserving the reviewed public baseline.
  - Pause delegated shared-meta-agent enrichment and continue with the local baseline package if freshness or confidence checks fail.
- Support owner: Governance, risk, and compliance package steward with audit-readiness domain oversight.

## Deployment Notes

- Startup behavior: Initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: Continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: Block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: Prefer the local manifest and route unresolved ambiguity to the orchestrator.
- Tenant isolation constraint: This package may adapt to tenant-specific control inventories and evidence locations, but it must not learn tenant-specific practices into the public baseline.

# Deployment Package

## Runtime

- Target runtime: Specialist-agent execution profile in an orchestrator that can enforce retrieval boundaries, confidence gating, and deterministic handoff rules.
- Deployment model: Versioned e-commerce platform specialist package with manifest and evidence artifacts deployed as a tenant-scoped prompt and retrieval bundle.
- Required secrets: Tenant-specific commerce connector credentials, approved support portal tokens, and secret-store references only; no secrets in repository artifacts.
- Required configuration: tenant identifier, approved commerce vendor set, channel and market topology, confidence threshold, boundary strictness, evidence-retention policy, source freshness deadlines, and release-calendar adapters.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Isolation

- Tenant boundary: One tenant context per request with strict tenant-ID separation, no cross-tenant retrieval, and no shared customer data in prompts or logs beyond approved metadata.
- Knowledge boundary: Public vendor commerce documentation baseline plus tenant-approved private runbooks or inventories; no hidden cross-domain policy injection.
- Adaptation policy: Configuration, retrieval, and approved tuning only; no autonomous model retraining, silent scope expansion, or unreviewed connector writes.

## Operations

- Monitoring: Track recommendation acceptance, escalation frequency, boundary handoff ratio, source freshness state, release-window workload, order-flow incident themes, and scenario confidence distribution.
- Logging: Retain recommendation lineage, cited source IDs, tenant scope, channel or market assumptions, connector assumptions, escalation reasons, and rollback decisions for at least 180 days.
- Rollback path:
  - Revert to the last validated package revision.
  - Change delivery status to `in_progress` if the source baseline becomes stale or regressions appear.
  - Disable automatic rollout of commerce platform recommendations until re-validation completes.
  - Route ambiguous, policy-sensitive, or boundary-crossing requests back to the orchestrator or human approver.
- Support owner: repository steward and specialist maintainer.

## Deployment Notes

- Deployment model and runtime notes: package is designed for human-in-the-loop commerce platform guidance, not direct execution against production commerce systems.
- Tenant isolation and adaptation constraints: tenant-local channels, markets, connectors, workflow definitions, and release calendars may be added only through approved configuration paths.
- Monitoring and logging expectations: monitor low-confidence escalations, unsupported-extension detections, checkout or order-routing incident trends, and shared-meta-agent fallback activations as leading indicators of package drift.
- Rollback path: keep the prior validated manifest and evidence bundle available for immediate redeploy if vendor documentation changes or validation is reopened.
- Assumption: shared meta-agents initialize lazily and may be unavailable without blocking safe startup because the local reviewed baseline remains authoritative.

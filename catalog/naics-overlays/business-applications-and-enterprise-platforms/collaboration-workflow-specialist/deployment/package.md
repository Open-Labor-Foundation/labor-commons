# Deployment Package

## Runtime

- Target runtime: Specialist-agent execution profile in an orchestrator that can enforce retrieval boundaries, confidence gating, and deterministic handoff rules.
- Deployment model: Versioned collaboration-workflow specialist package with manifest and evidence artifacts deployed as a tenant-scoped prompt and retrieval bundle.
- Required secrets: Tenant-specific collaboration-platform connector credentials and approved admin connector references only; no secrets in repository artifacts.
- Required configuration: tenant identifier, approved platform set, confidence threshold, boundary strictness, source freshness deadlines, evidence-retention policy, connector-governance policy, and release-window handling defaults.

## Isolation

- Tenant boundary: One tenant context per request with strict tenant-ID separation, no cross-tenant retrieval, and no shared customer workflow data in prompts or logs beyond approved metadata.
- Knowledge boundary: Public vendor workflow documentation baseline plus tenant-approved private runbooks or workflow inventories; no hidden cross-domain policy injection.
- Adaptation policy: Configuration, retrieval, and approved tuning only; no autonomous model retraining, no silent scope expansion, and no unmanaged connector activation.

## Operations

- Monitoring: Track workflow-guidance acceptance, low-confidence escalation frequency, boundary handoff ratio, source freshness state, connector-governance conflicts, release-window workload, and shared-meta-agent fallback rate.
- Logging: Retain recommendation lineage, cited source IDs, tenant scope, workflow assumptions, approval and connector constraints, escalation reasons, and rollback decisions for at least 180 days.
- Rollback path:
  - Revert to the last validated package revision.
  - Change delivery status to `in_progress` if the source baseline becomes stale or regressions appear.
  - Disable automatic rollout of collaboration-workflow recommendations until re-validation completes.
  - Route ambiguous or policy-sensitive requests back to the orchestrator or human approver.
- Support owner: repository steward and specialist maintainer.

## Deployment Notes

- Deployment model and runtime notes: package is designed for human-in-the-loop collaboration-workflow guidance, not direct execution against production collaboration platforms.
- Tenant isolation and adaptation constraints: tenant-local workflow inventories, connector allowlists, environment mappings, and release calendars may be added only through approved configuration paths.
- Monitoring and logging expectations: monitor low-confidence escalations, unsupported-feature detections, usage-limit warnings, and shared-meta-agent fallback activations as leading indicators of package drift.
- Rollback path: keep the prior validated manifest and evidence bundle available for immediate redeploy if vendor documentation changes or validation is reopened.
- Assumption: shared meta-agents initialize lazily and may be unavailable without blocking safe startup because the local reviewed baseline remains authoritative.

# Deployment Package

## Runtime

- Target runtime: Orchestrated specialist-agent runtime with manifest-backed retrieval and optional deferred shared-meta-agent augmentation.
- Deployment model: Single-tenant internal deployment or multi-tenant SaaS deployment with tenant-scoped configuration, evidence logging, and retrieval boundaries.
- Required secrets: None for the baseline package. Optional secrets may be required for tenant-approved retrieval connectors, telemetry sinks, or private middleware inventory sources.
- Required configuration:
  - Release baseline pinned to `v0.1.0`
  - Tenant-specific middleware inventory and platform versions
  - Approved source-refresh schedule and delegated fallback mode
  - Logging destination for routing decisions, evidence, and rollback events

## Isolation

- Tenant boundary: Per-tenant execution context with no cross-tenant sharing of inventories, queue names, bridge details, or operational evidence.
- Knowledge boundary: Public authority baseline from the manifest plus tenant-approved retrieval only. Shared meta-agent outputs are optional and must not override the local reviewed baseline without review.
- Adaptation policy: Configuration, retrieval, and approved tuning are allowed with approval. Cross-tenant sharing is disallowed and rollback capability is required for tenant-specific changes.

## Operations

- Monitoring:
  - Track request volume, scenario coverage class, boundary rejections, low-confidence escalations, and delegated fallback activations.
  - Track middleware-specific output tags such as delivery guarantees, DLQ or backout recommendations, bridge guidance, and migration-wave outputs.
  - Alert when source freshness passes `next_review_due_at` or delegated source-policy normalization is stale.
- Logging:
  - Log authoritative sources consulted, assumptions, uncertainty statements, routing decisions, and human-verification references.
  - Log tenant adaptations, rollback triggers, and whether shared meta-agent outputs were accepted, rejected, or bypassed.
  - Avoid storing tenant secrets or raw production message payloads unless explicitly approved by tenant policy.
- Rollback path:
  - Revert to the last reviewed manifest and artifact bundle if packaging changes, source refreshes, or delegated outputs introduce inconsistency.
  - Disable tenant-specific retrieval overrides and continue on the local baseline when shared-meta-agent outputs are stale, unavailable, or conflict with the specialty boundary.
  - Escalate to human review if rollback still leaves unresolved ambiguity around transactional guarantees, replay behavior, or cutover safety.
- Support owner: Repository owner or downstream product operations owner responsible for source refresh, human verification, and release governance.

# Deployment Package

## Runtime

- Target runtime: specialist dispatch service or orchestrator worker that handles enterprise app-integration requests and evidence-backed response generation.
- Deployment model: validated catalog package consumed by an orchestrator or specialist router; can run in a containerized or serverless execution layer.
- Required secrets:
  - Optional tenant connector credentials for supported admin or monitoring APIs used only for evidence collection or configuration validation.
  - Evidence-retention destination credentials for logs, runbook traces, and review artifacts.
- Required configuration:
  - Supported connector, API, and event-pattern matrix
  - System-of-record and field-mapping templates
  - Retry, replay, rate-limit, and batch-window policy thresholds
  - Source freshness policy and delegated meta-agent timeout thresholds
  - Release-version pinning and evidence-retention windows
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Isolation

- Tenant boundary: strict tenant partitioning for integration inventories, connector settings, schemas, logs, mappings, and release evidence.
- Knowledge boundary:
  - Specialist-owned public integration guidance is shared.
  - Tenant-specific connector details, message traces, owner matrices, and approval records are isolated and loaded as versioned overlays only under approval.
- Adaptation policy:
  - Allowed adaptations: connector configuration, retrieval overlays, mapping-template tuning, and approved prompt tuning.
  - Forbidden: cross-tenant sharing, unreviewed boundary widening, or silent changes to the public source baseline.

## Operations

- Monitoring:
  - Track scenario pass or fail trends, boundary handoff rate, low-confidence escalation rate, integration failure classes, retry storms, and vendor lifecycle risk flags.
  - Alert when source freshness, evidence completeness, delegated meta-agent reliability, or rollback policy requirements are violated.
- Logging:
  - Log request class, source references used, integration pattern family, confidence state, boundary rejections, and decision rationale.
  - Preserve anonymized evidence IDs, tenant IDs, and whether the response used specialist-owned baseline only or delegated normalization.
- Rollback path:
  - Revert to the last validated manifest, evaluation, readiness, deployment, and marketing artifact set.
  - Disable delegated shared-meta-agent paths if unreliable and operate in conservative specialist-owned baseline mode.
  - Suspend validated operational claims when unresolved regressions, source staleness, or evidence gaps affect integration recommendations.
- Support owner: enterprise application integration specialist steward and repository operations approver.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: prefer the local manifest and route unresolved ambiguity to the orchestrator.

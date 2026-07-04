# Deployment Package

## Runtime

- Target runtime: specialist dispatch service or orchestrator worker that handles enterprise application identity integration requests and evidence-backed response generation.
- Deployment model: validated catalog package consumed by an orchestrator or specialist router; can run in a containerized or serverless execution layer.
- Required secrets:
  - Optional tenant connector credentials for identity platform or application admin APIs used only for validation or evidence collection.
  - Evidence retention destination credentials for logs, runbook traces, and review artifacts.
- Required configuration:
  - Supported protocol matrix and protocol-preference rules
  - Mapping templates for users, groups, roles, and lifecycle states
  - Certificate and secret rotation warning thresholds
  - Source freshness policy and delegated meta-agent timeout thresholds
  - Release-version pinning and evidence retention windows
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Isolation

- Tenant boundary: strict tenant partitioning for application metadata, certificates, secrets, mapping tables, provisioning traces, and release evidence.
- Knowledge boundary:
  - Specialist-owned public integration guidance is shared.
  - Tenant-specific app metadata, logs, mappings, and approvals are isolated and loaded as versioned overlays only under approval.
- Adaptation policy:
  - Allowed adaptations: connector configuration, retrieval overlays, mapping-template tuning, and approved prompt tuning.
  - Forbidden: cross-tenant sharing, unreviewed boundary widening, or silent changes to the public source baseline.

## Operations

- Monitoring:
  - Track scenario pass or fail trends, boundary handoff rate, low-confidence escalation rate, provisioning failure patterns, and certificate or secret rotation warnings.
  - Alert when source freshness, evidence completeness, or delegated meta-agent reliability policies are violated.
- Logging:
  - Log request class, source references used, protocol family, confidence state, boundary rejections, and decision rationale.
  - Preserve anonymized evidence IDs, tenant IDs, and whether the response used specialist-owned baseline only or delegated normalization.
- Rollback path:
  - Revert to the last validated manifest, evaluation, readiness, deployment, and marketing artifact set.
  - Disable delegated shared-meta-agent paths if unreliable and operate in conservative specialist-owned baseline mode.
  - Suspend validated operational claims when unresolved regressions, source staleness, or evidence gaps affect integration recommendations.
- Support owner: identity platform integration specialist steward and repository operations approver.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: prefer the local manifest and route unresolved ambiguity to the orchestrator.

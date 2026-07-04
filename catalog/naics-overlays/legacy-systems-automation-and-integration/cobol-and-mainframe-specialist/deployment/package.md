# Deployment Package

## Runtime

- Target runtime: specialist dispatch service or orchestrator worker that handles bounded COBOL and mainframe requests and produces evidence-backed guidance.
- Deployment model: validated catalog package consumed by an orchestrator or specialist router; suitable for containerized or serverless execution that can load public sources plus tenant-local overlays.
- Required secrets:
  - Optional tenant connector credentials for approved repository, ticketing, or artifact-inspection integrations used to collect evidence.
  - Evidence-retention destination credentials for logs, traces, and review artifacts.
- Required configuration:
  - Supported COBOL and subsystem scope rules
  - Source freshness policy and delegated meta-agent timeout thresholds
  - Confidence and escalation thresholds for missing listings, dumps, subsystem metadata, or code-page details
  - Tenant-specific retrieval overlays for source repositories, compile outputs, and validation evidence
  - Release-version pinning and evidence-retention windows
- Optional dependencies: shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Isolation

- Tenant boundary: strict tenant partitioning for source code, compile listings, dumps, subsystem metadata, modernization plans, and evidence artifacts.
- Knowledge boundary:
  - Specialist-owned public IBM and Zowe guidance is shared.
  - Tenant-specific code, copybooks, logs, subsystem definitions, and approval artifacts are isolated and loaded only as versioned overlays under approval.
- Adaptation policy:
  - Allowed adaptations: connector configuration, retrieval overlays, terminology mapping, and approved prompt or workflow tuning.
  - Forbidden: cross-tenant sharing, silent expansion into scheduler or middleware ownership, or unreviewed changes to the public source baseline.

## Operations

- Monitoring:
  - Track scenario pass or fail trends, boundary handoff rate, low-confidence escalation rate, source freshness, and shared-meta-agent fallback activation rate.
  - Alert when unsupported source usage, missing-evidence responses, or stale delegated normalization exceeds policy thresholds.
- Logging:
  - Log request class, sources used, subsystem context, confidence state, boundary rejections, modernization assumptions, and decision rationale.
  - Preserve anonymized evidence IDs, tenant IDs, and whether the response used only the specialist-owned baseline or included delegated normalization.
- Rollback path:
  - Revert to the last validated manifest, evaluation, readiness, deployment, and marketing artifact set.
  - Disable delegated shared-meta-agent paths if unreliable and operate in conservative local-baseline mode.
  - Suspend validated operational claims when unresolved regressions, stale source governance, or evidence gaps affect recommendations.
- Support owner: COBOL and mainframe specialist steward and repository operations approver.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: prefer the local manifest and route unresolved ambiguity to the orchestrator.

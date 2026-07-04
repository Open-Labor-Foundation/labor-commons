# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with deterministic response framing, citation logging, and tenant-scoped policy overlays.
- Deployment model: validated catalog package consumed by a specialist dispatch layer and deployed in multi-tenant containerized or serverless form.
- Required secrets:
  - Optional tenant connector credentials for ITSM or support-platform retrieval.
  - Optional evidence-retention destination credentials for audit exports.
- Required configuration:
  - Tenant confidence thresholds and escalation routing
  - Source refresh intervals and stale-source policy
  - Shared meta-agent endpoint allowlist
  - Article-risk classification and publication-control thresholds
  - Search analytics and evidence-retention settings

## Isolation

- Tenant boundary: strict tenant namespace for article overlays, workflow settings, search analytics, and generated artifacts.
- Knowledge boundary:
  - Public authoritative source baseline remains shared and read-only.
  - Tenant-specific article templates, taxonomy overlays, service criticality mappings, and approval workflows are versioned overlays only.
- Adaptation policy:
  - Allowed adaptations: configuration, retrieval, and approved tuning within the knowledge-management boundary.
  - Forbidden: unsanctioned behavior edits, cross-tenant sharing, widening into incident command, problem management, engineering execution, or non-ITSM specialties.

## Operations

- Monitoring:
  - Track scenario pass or fail trends, source freshness, boundary-rejection rate, low-confidence escalation rate, and delegated meta-agent fallback activations.
  - Alert on stale sources, repeated article-publication escalation events, abnormal rejection patterns, or tenant-overlay drift from approved knowledge controls.
- Logging:
  - Record request class, source IDs used, confidence statements, article-risk decisions, boundary outcomes, and fallback invocation state.
  - Redact tenant-sensitive article text and retain only the minimum evidence needed for auditability and rollback.
- Rollback path:
  - Revert to the last validated manifest and readiness bundle.
  - Disable delegated shared meta-agent calls if outputs are unreliable and operate in specialist-owned conservative baseline mode.
  - Re-run the validated scenario matrix before re-enabling tenant overlay changes or expanded source sets.
- Support owner: IT Service Management And Support package steward

## Tenant Isolation And Adaptation Constraints

- Cross-tenant sharing is not allowed.
- Tenant-specific article taxonomies, approval thresholds, and service-impact mappings require approval and version control.
- Source additions that materially affect recommendations require a refresh review before becoming active.
- Temporary emergency-change article overlays must be explicitly time-bounded and reviewed before they become durable baseline content.

## Shared Meta-Agent Contracts

- Invocation model: on-demand calls to issues `#225`, `#302`, `#303`, `#304`, `#305`, `#306`, `#307`, and `#308` for scoped, non-core work only.
- Fallback model:
  - If a delegated meta-agent is unavailable: continue with specialist-owned baseline guidance, lower confidence where appropriate, and record refresh or evidence debt.
  - If delegated output is stale or conflicts with boundary rules: prefer the local specialist boundary, block unsupported claims, and escalate to the orchestrator.
  - If delegated output is low confidence: do not guess; request human review or additional evidence before proceeding.

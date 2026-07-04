# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with deterministic response framing, citation logging, and tenant-scoped policy overlays.
- Deployment model: validated catalog package consumed by a specialist dispatch layer and deployed in multi-tenant containerized or serverless form.
- Required secrets:
  - Optional tenant connector credentials for catalog or governance-system retrieval.
  - Optional evidence-retention destination credentials for audit exports.
- Required configuration:
  - Tenant confidence thresholds and escalation routing
  - Source refresh intervals and stale-source policy
  - Shared meta-agent endpoint allowlist
  - Evidence retention and log-redaction rules

## Isolation

- Tenant boundary: strict tenant namespace for glossary terms, policy overlays, evidence caches, and generated artifacts.
- Knowledge boundary:
  - Public authoritative source baseline remains shared and read-only.
  - Tenant-specific governance taxonomies, steward mappings, and exception workflows are versioned overlays only.
- Adaptation policy:
  - Allowed adaptations: configuration, retrieval, and approved tuning within the data governance boundary.
  - Forbidden: unsanctioned behavior edits, cross-tenant sharing, and widening into legal, MDM, AI governance, or infrastructure specialties.

## Operations

- Monitoring:
  - Track scenario pass/fail trends, source freshness, boundary-rejection rate, escalation rate, and delegated meta-agent fallback activations.
  - Alert on stale sources, repeated low-confidence events, or tenant-overlay drift from approved governance controls.
- Logging:
  - Record request class, source IDs used, confidence statements, boundary decisions, and fallback invocation state.
  - Redact tenant-sensitive policy details and retain only the minimum evidence needed for auditability.
- Rollback path:
  - Revert to the last validated manifest and readiness bundle.
  - Disable delegated shared meta-agent calls if outputs are unreliable and operate in specialist-owned conservative baseline mode.
  - Re-run the validated scenario matrix before re-enabling tenant overlay changes.
- Support owner: Data Analytics And AI package steward

## Tenant Isolation And Adaptation Constraints

- Cross-tenant sharing is not allowed.
- Tenant-specific steward lists, glossary extensions, and retention workflows require approval and version control.
- Source additions that materially affect recommendations require a refresh review before becoming active.

## Shared Meta-Agent Contracts

- Invocation model: on-demand calls to issues `#225`, `#302`, `#303`, `#304`, `#305`, `#306`, `#307`, and `#308` for scoped, non-core work only.
- Fallback model:
  - If a delegated meta-agent is unavailable: continue with specialist-owned baseline guidance, lower confidence, and record refresh or evidence debt.
  - If delegated output is stale or conflicts with boundary rules: prefer the local specialist boundary, block unsupported claims, and escalate to orchestrator.
  - If delegated output is low confidence: do not guess; request human review or additional evidence before proceeding.

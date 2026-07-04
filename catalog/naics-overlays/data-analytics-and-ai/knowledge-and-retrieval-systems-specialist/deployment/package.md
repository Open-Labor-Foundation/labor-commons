# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with deterministic response framing, citation logging, and tenant-scoped retrieval-policy overlays.
- Deployment model: validated catalog package deployed in containerized or serverless form behind a specialist dispatch layer.
- Required secrets:
  - Optional source-connector credentials for tenant corpus sync or index refresh operations.
  - Optional evidence-retention destination credentials for audit and evaluation exports.
- Required configuration:
  - Tenant confidence thresholds and escalation routes
  - Retrieval policy defaults for grounding, citation requirement, and freshness handling
  - Shared meta-agent endpoint allowlist
  - Logging retention and redaction rules

## Isolation

- Tenant boundary: strict tenant namespace for corpora, metadata filters, evaluation artifacts, and generated outputs.
- Knowledge boundary:
  - Public authoritative baseline sources are shared and read-only.
  - Tenant-specific corpora, metadata mappings, and retrieval overlays are isolated and versioned separately.
- Adaptation policy:
  - Allowed adaptations: configuration, retrieval policy, metadata mapping, and approved tuning within the retrieval boundary.
  - Forbidden: cross-tenant sharing, unsanctioned behavior edits, and widening into product strategy, broad app engineering, model training, or infrastructure specialties.

## Operations

- Monitoring:
  - Track source freshness, retrieval-confidence trends, citation-failure rate, boundary-rejection rate, and shared-meta-agent fallback activations.
  - Alert on stale indexes, repeated unsupported citations, recurring low-confidence events, and suspected tenant leakage conditions.
- Logging:
  - Record request class, source IDs used, confidence statements, retrieval decisions, and boundary-routing outcomes.
  - Redact tenant-sensitive corpus details while preserving enough evidence for audit and release review.
- Rollback path:
  - Revert to the last validated manifest and readiness bundle.
  - Disable new tenant overlay changes or delegated meta-agent calls if they are stale or low confidence.
  - Re-run the validated scenario matrix before re-enabling routing to the updated package.
- Support owner: Data Analytics And AI package steward

## Tenant Isolation And Adaptation Constraints

- Cross-tenant sharing is not allowed.
- Tenant-specific corpus connectors, metadata schemas, and confidence thresholds require approval and version control.
- Source additions that materially affect retrieval guidance require a refresh review before activation.
- Retrieval adaptations may not bypass citation, provenance, or policy-filter requirements.

## Shared Meta-Agent Contracts

- Invocation model: on-demand calls to issues `#225`, `#302`, `#303`, `#304`, `#305`, `#306`, `#307`, and `#308` for repeated non-core work only.
- Fallback model:
  - If a delegated meta-agent is unavailable: continue with specialist-owned baseline guidance, lower confidence, and record the missing artifact type.
  - If delegated output is stale or conflicts with the retrieval boundary: prefer the local specialist boundary, block unsupported claims, and escalate to orchestrator.
  - If delegated output is low confidence: do not guess; request human review or additional retrieval evidence before proceeding.

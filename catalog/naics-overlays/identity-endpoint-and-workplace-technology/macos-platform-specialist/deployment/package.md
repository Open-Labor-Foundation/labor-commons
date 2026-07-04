# Deployment Package

## Runtime

- Target runtime: Orchestrator-coupled specialist module with policy retrieval and structured policy synthesis.
- Deployment model: Package release for catalog ingestion with containerized or serverless execution profiles.
- Required secrets:
  - Tenant and MDM endpoint identifiers for configuration retrieval.
  - Optional: organization identity metadata for evidence tagging.
  - Audit destination credentials for recommendation lineage.
- Required configuration:
  - Confidence threshold, escalation threshold, and confidence decay policy.
  - Source refresh windows and stale-source blocking controls.
  - Tenant-specific adaptation allowlist and override guardrails.

## Isolation

- Tenant boundary: Tenant-scoped recommendations only; no cross-tenant profile merge by default.
- Knowledge boundary: Publicly sourced platform guidance plus declared authority-source list.
- Adaptation policy: Configuration and retrieval updates allowed; model changes require explicit release approval.

## Operations

- Monitoring:
  - Track escalations, boundary rejections, confidence declines, and policy conflict patterns.
  - Track rollout failures associated with macOS profile deployment and remediation cycles.
- Logging:
  - Retain scenario IDs, citations, source version, confidence score, and handoff decisions for 180 days minimum.
- Rollback path:
  - Freeze rollout of new configurations and disable validated claim.
  - Revert to last validated package snapshot (`v0.1.0`) with source/manifest integrity check.
  - Route high-uncertainty recommendations to orchestrator until re-validation completes.
- Support owner: Specialist steward with repository owner escalation for scope expansion.

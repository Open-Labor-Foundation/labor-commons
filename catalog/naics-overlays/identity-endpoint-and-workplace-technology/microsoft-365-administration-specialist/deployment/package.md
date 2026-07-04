# Deployment Package

## Runtime

- Target runtime: Specialist-agent execution profile in a RAG-compatible orchestrator with deterministic guardrails.
- Deployment model: Container or serverless specialist package with versioned manifest and artifact snapshots.
- Required secrets: Tenant-scoped credential placeholders and least-privilege admin references held in a secret store; no runtime secrets in source files.
- Required configuration: confidence threshold, boundary strictness level, source refresh deadlines, and tenant-specific policy adapters.

## Isolation

- Tenant boundary: One tenant context per request with strict tenant ID enforcement and no cross-tenant action leakage.
- Knowledge boundary: Microsoft 365 official sources plus configured device-management references; no undocumented internal policy injection.
- Adaptation policy: Configuration and approved retrieval tuning only; no unsupervised model changes.

## Operations

- Monitoring: Track recommendation acceptance, escalation frequency, scenario confidence distributions, and boundary handoff ratio.
- Logging: Retain recommendation lineage, evidence references, tenant scope, handoff reasons, and confidence levels for at least 180 days.
- Rollback path:
  - Revert to last validated package revision.
  - Toggle delivery status to `in_progress`.
  - Disable automatic deployment for in-scope claims while requiring re-validation.
  - Route ambiguous requests back to orchestrator until re-review.
- Support owner: repository steward and specialist maintainer.

## Deployment Notes

- Tenant isolation requirement: per-tenant routing and tenant-ID policy enforcement must be validated before any external rollout.
- Adaptation constraints: only approved configuration updates; no auto-tuning of admin logic.
- Assumption: shared meta-agent integrations are optional and can initialize lazily.

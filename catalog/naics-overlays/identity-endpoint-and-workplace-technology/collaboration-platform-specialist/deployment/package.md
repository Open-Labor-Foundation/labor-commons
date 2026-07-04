# Deployment Package

## Runtime

- Target runtime: Retrieval-augmented specialist agent runtime with bounded-context orchestration and policy guardrails.
- Deployment model: Catalog release as containerizable specialist module using shared orchestrator runtime profile.
- Versioning: Semantic package releases aligned to catalog queue status transitions (`not_ready` → `in_progress` → `validated`).
- Config surface:
  - Confidence thresholds
  - Escalation policy
  - Source freshness enforcement
  - Tenant-level adaptation policy list

## Tenant Isolation & Adaptation Constraints

- Every request must be evaluated under the active tenant context only.
- Tenant-specific policy templates must not be copied across tenants without explicit adaptation notes.
- Evidence sources and tenant metadata must be kept in tenant-segregated evaluation scope.
- Adaptation rules:
  - Preserve mandatory minimum controls from the specialty package.
  - Flag any tenant-specific deviation and attach remediation rationale.
  - Block deployment if isolation risk is not explicitly documented.

## Deployment Readiness

- Package dependencies:
  - Shared meta-agent contracts (best-practices, evaluation, readiness, deployment, commercialization, authority policy, boundary, scaffolding).
  - Readiness evidence artifacts under `readiness/` and evaluation artifacts under `evaluation/`.
- Rollout stages:
  - Pre-deploy: verify YAML parse and schema-complete manifest fields.
  - Staged enablement in non-production tenant cohorts.
  - Controlled production rollout with telemetry guardrails.
- Monitoring:
  - Track scenario pass/fail distribution by scenario family.
  - Track low-confidence escalations and boundary rejections.
  - Track source freshness violations and review delays.
- Logging expectations:
  - Store recommendation rationale, source IDs, and escalation decisions for 180 days.
  - Persist confidence scores and refusal causes for audit and QA.

## Rollback Path

- Revert to last validated package snapshot for this agent slug.
- Disable validated claim by setting `delivery_status` below validated until re-validation completes.
- Route uncertain collaboration requests to orchestrator with explicit out-of-scope notes.
- Re-run local package verification before attempting re-enable.

## Shared Meta-Agent Integration

- At startup, initialize specialist-owned behavior first, then attempt shared-meta-agent lookup.
- For unavailable or stale shared meta-agents:
  - continue with local package contracts,
  - lower confidence labels where assumptions are required,
  - retain explicit evidence that delegation was not fulfilled.


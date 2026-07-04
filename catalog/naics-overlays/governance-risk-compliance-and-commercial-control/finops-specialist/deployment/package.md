# Deployment Package

## Runtime

- Target runtime: Retrieval-augmented specialist profile with deterministic policy prompts, optional provider-billing evidence connectors, and immutable repository baseline artifacts.
- Deployment model: validated containerized or serverless specialist package that loads public baseline sources locally and accepts tenant billing data only at request time.
- Required secrets: None for baseline package validation; optional tenant deployments may require provider-reader credentials, document-store access, or ticketing-webhook secrets managed outside the package.
- Required configuration: Tenant cloud-scope mappings, account or subscription hierarchy, approved allocation taxonomy, currency and amortization settings, anomaly or budget thresholds, and logging retention policy.

## Isolation

- Tenant boundary: All customer billing exports, invoices, cost-category mappings, and commitment inventories remain tenant-local and must not be reused across tenants.
- Knowledge boundary: Public baseline includes reviewed FinOps Foundation, FOCUS, ISO, and provider-official billing documentation; tenant-specific conclusions require tenant-provided spend evidence.
- Adaptation policy: Allowed adaptations are retrieval configuration, approved terminology, KPI threshold configuration, and tenant cost-center mapping; adaptations that widen scope into accounting, procurement, or engineering execution are not allowed without orchestration.

## Operations

- Monitoring:
  - Track scenario validation status, pass rate, low-confidence escalations, boundary refusals, source freshness checks, and shared-meta-agent fallback events.
  - Track tenant evidence coverage for billing exports, allocation policies, budget ownership, and commitment inventories before promoting major recommendations.
- Logging:
  - Log source IDs used, assumptions, confidence state, routed-out requests, and any tenant adaptation or override applied.
  - Redact or avoid storing raw billing line items unless tenant policy explicitly permits retention.
- Rollback path: Disable the current rollout profile, freeze new recommendations, revert to the prior reviewed release bundle, clear any stale delegated normalization cache, and re-run local validation before reactivation.
- Support owner: Repository owner for baseline package quality; tenant operations or FinOps platform owner for deployment-specific connectors, evidence intake, and escalation routing.

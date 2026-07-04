# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with deterministic response templates and structured evidence logging.
- Deployment model: multi-tenant specialist package with tenant-scoped configuration overlays and deferred shared-meta-agent retrieval.
- Required secrets:
  - Optional platform connector tokens for tenant-approved BI metadata retrieval.
  - Optional model endpoint credentials used by shared meta-agents when enabled by the operator.
- Required configuration:
  - Tenant-approved dashboard naming, publication defaults, and freshness thresholds.
  - Allowed adaptation keys for layout presets, export defaults, and report-delivery channels.
  - Evidence retention destination, review cadence, and escalation routing targets.

## Isolation

- Tenant boundary: hard tenant namespace for context, cached source metadata, evaluation traces, and adaptation settings; no cross-tenant sharing by default.
- Knowledge boundary: shared manifest baseline is immutable; tenant retrieval overlays are isolated, approved, and reversible.
- Adaptation policy: configuration, approved tuning, and retrieval updates only; no behavior drift or cross-specialty expansion without approval.

## Operations

- Monitoring:
  - Track scenario execution counts, pass/fail outcomes, rejection rate, and low-confidence escalation rate.
  - Track stale-dashboard, broken-visual, and publication-control incident classes separately.
  - Alert when source reviews exceed refresh interval or when delegated meta-agent responses cross stale thresholds.
- Logging:
  - Store structured logs with request type, source IDs used, confidence statements, boundary decisions, and escalation events.
  - Redact tenant identifiers, exported report payloads, and sensitive audience metadata from logs.
- Rollback path:
  - Revert tenant overrides to the last approved configuration revision.
  - Disable unverified adaptation changes and continue on the manifest baseline.
  - Re-run the validated scenario matrix before re-enabling deferred integrations or changed policy overlays.
- Support owner:
  - Data Analytics And AI package steward

## Tenant Isolation And Adaptation Constraints

- Reporting defaults may be adapted per tenant only through approved configuration.
- AI-generated narrative summaries, external sharing, and export defaults require explicit tenant approval and auditability.
- Requests that require warehouse redesign, IAM policy changes, or application implementation must be handed back to the orchestrator.

## Deployment Package Notes

- Safe initialization is supported even when shared meta-agents are deferred, stale, or unavailable.
- High-stakes publication guidance must drop to specialist-owned baseline behavior when delegated confidence is insufficient.
- Monitoring should treat repeated freshness incidents as a signal to involve adjacent data-quality or data-integration specialists.

## Target Buyer and User Profile

- Primary buyers: analytics leaders, reporting platform owners, and operations leaders accountable for trustworthy dashboard delivery.
- Primary users: BI developers, analytics engineers, business analysts, and report reviewers.

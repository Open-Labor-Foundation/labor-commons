# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with deterministic response templates and evidence logging
- Deployment model: multi-tenant packageized specialist with tenant-scoped policy overlays
- Required secrets:
  - Optional source-index API tokens for tenant-specific metadata integrations
  - Optional model endpoints used by shared meta-agents when explicitly enabled
- Required configuration:
  - Tenant confidence thresholds (read-only defaults + allowed overrides)
  - Allowed adaptation keys for KPI, naming, refresh windows, and dashboard templates
  - Evidence retention destination and audit settings

## Isolation

- Tenant boundary: hard tenant namespace for context, cache, and policy overrides; no cross-tenant data sharing by default
- Knowledge boundary: shared baseline knowledge is immutable; tenant-specific instructions are isolated and signed
- Adaptation policy: allowed types are configuration, approved tuning, and retrieval updates only; no behavior/model edits without approval

## Operations

- Monitoring:
  - Track scenario execution volume, pass/fail outcomes, and escalation rate
  - Track refresh-related recommendations, unresolved low-confidence escalations, and policy rejections
  - Alert when source freshness checks are stale beyond threshold or confidence drops
- Logging:
  - Structured logs include request context, boundary decisions, source IDs used, and decision uncertainty
  - Redact sensitive tenant identifiers and source payloads in logs
- Rollback path:
  - Revert tenant overrides to last known approved revision
  - Deactivate any unverified adaptation changes and keep baseline manifest active
  - Re-run latest validated scenario matrix before re-enabling customization
- Support owner:
  - Data Analytics And AI package steward

## Target Buyer and User Profile

- Primary buyers: BI platform owners, data-centric PMO leaders, analyst enablement teams
- Primary users: business analysts, reporting developers, and solution reviewers needing evidence-backed BI guidance

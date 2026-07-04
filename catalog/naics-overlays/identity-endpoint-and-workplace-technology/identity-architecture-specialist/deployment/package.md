# Deployment Package

## Runtime

- Target runtime: identity-aware orchestrator service with scenario routing and policy evidence memory.
- Deployment model: validated catalog package consumed by specialist dispatch layer; can run containerized or serverless.
- Required secrets:
  - Optional tenant API tokens or tenant-level admin connectors used only for validation tasks.
  - Evidence retention destination credentials for scenario logs and audit references.
- Required configuration:
  - Tenant confidence thresholds
  - Shared meta-agent endpoint allowlist
  - Evidence retention windows and source-refresh intervals

## Isolation

- Tenant boundary: strict tenant partitioning for identity inventories, recommendations, and incident traces.
- Knowledge boundary:
  - Baseline architecture guidance is shared.
  - Tenant-specific identity overrides are loaded as versioned overlays only under approval.
- Adaptation policy:
  - Allowed adaptations: configuration and retrieval guidance updates.
  - Forbidden: unapproved model/prompt behavior changes.

## Operations

- Monitoring:
  - Track scenario pass/fail trends, boundary handoffs, escalation frequency, and confidence downgrades.
  - Alert when evidence completeness or source freshness policy is violated.
- Logging:
  - Log request class, source references used, boundary rejections, and decision rationale.
  - Preserve anonymized evidence IDs and tenant IDs for post-incident traceability.
- Rollback path:
  - Revert to last validated manifest/evidence snapshot.
  - Disable delegated meta-agent paths if unreliable and operate in conservative specialist-owned baseline mode.
  - Route non-confidence requests to orchestrator and stop claiming validated operational mode when active regressions are detected.
- Support owner: identity architecture specialist steward and repository operations approver.

## Shared Meta-Agent Contracts

- Invocation model: on-demand calls to delegated issue IDs 225, 302, 303, 304, 305, 306, 307, 308 for scoped, non-core tasks.
- Fallback model:
  - If delegated agent is unavailable: continue with specialist-owned baseline guidance, mark confidence as reduced, and request orchestrator review.
  - If delegated output conflicts with boundary rules: prefer local specialist output and flag manual arbitration.
  - If meta-agent output indicates stale evidence: block non-emergency claims until source refresh is completed.

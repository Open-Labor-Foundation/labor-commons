# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with structured prompt templates, evidence logging, and source-ID tagging
- Deployment model: packageized multi-tenant specialist loaded from the manifest and companion readiness artifacts
- Required secrets:
  - Optional tenant-owned database metadata connectors if a deployment enables inventory or monitoring retrieval
  - Optional model endpoint credentials for shared meta-agent delegation when explicitly enabled
- Required configuration:
  - Tenant confidence threshold and escalation policy
  - Allowed adaptation keys for engine preferences, maintenance-window defaults, and evidence retention
  - Source freshness policy and delegated meta-agent timeout thresholds

## Isolation

- Tenant boundary: tenant-scoped namespace for prompts, cached retrieval, logs, and configuration with no cross-tenant sharing
- Knowledge boundary: public baseline knowledge is shared and immutable; tenant overlays are isolated and approval-gated
- Adaptation policy: allowed adaptation is limited to configuration, approved retrieval, and approved tuning; no unsupervised behavior drift

## Operations

- Monitoring:
  - Track scenario execution count, pass/fail rate, refusal rate, and low-confidence escalation frequency
  - Alert on stale source baseline, repeated recovery-plan uncertainty, and delegated meta-agent timeout/staleness events
  - Record which source IDs and boundary rules were invoked for each recommendation
- Logging:
  - Structured logs must include request class, engine family, recommendation type, uncertainty statement, and refusal/escalation reason
  - Sensitive tenant details, credentials, and raw database identifiers must be redacted or tokenized
- Rollback path:
  - Revert to the last approved manifest and readiness bundle version
  - Disable delegated shared meta-agent paths if they become stale or unreliable
  - Remove unverified tenant-specific overlays and re-run the latest validated scenario matrix before re-enabling customizations
- Support owner:
  - Data Analytics And AI package steward

## Deployment Notes

- Tenant isolation and adaptation constraints are mandatory because database-administration advice can become unsafe when topology or recovery assumptions leak between tenants.
- Safe initialization must work even when shared meta-agents are unavailable; the baseline package should continue in conservative specialist-owned mode and prefer escalation over speculative recommendations.
- Rollout should be staged as preview -> canary tenants -> broad availability, with explicit rollback to the prior manifest release if pass-rate drift or refusal-quality regressions appear.

## Target Buyer and User Profile

- Primary buyers: heads of data platform, database operations leaders, and IT operations managers with production database accountability
- Primary users: database administrators, platform engineers, incident commanders, and reviewers who need bounded DBA guidance with evidence and runbook outputs

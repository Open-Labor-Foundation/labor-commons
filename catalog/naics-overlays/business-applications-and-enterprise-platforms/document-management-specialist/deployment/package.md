# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with structured prompt templates, evidence logging, source-id tagging, and tenant-scoped configuration overlays
- Deployment model: packageized multi-tenant specialist loaded from the manifest and companion readiness artifacts; no separate application runtime is required for baseline operation
- Required secrets:
  - Optional tenant-owned document-platform connectors or retrieval credentials when retrieval is explicitly enabled
  - Optional model endpoint credentials for delegated shared meta-agent callouts
- Required configuration:
  - Tenant confidence threshold and escalation policy
  - Allowed adaptation keys for platform family, workspace naming, metadata defaults, sharing posture, retention defaults, and workflow guardrails
  - Source freshness policy and delegated meta-agent timeout or staleness thresholds

## Isolation

- Tenant boundary: tenant-scoped prompts, retrieval, logs, workspace metadata, and policy overlays with no cross-tenant sharing
- Knowledge boundary: public baseline knowledge is immutable and shared; tenant overlays are isolated, approval-gated, and reversible
- Adaptation policy: allowed adaptation is limited to configuration, approved retrieval, and approved tuning of thresholds or workflow defaults; no unsupervised behavior drift

## Operations

- Monitoring:
  - Track scenario execution count, pass or fail rate, refusal rate, and low-confidence escalation frequency
  - Alert on repeated oversharing incidents, sync throttling spikes, stale source baseline, retention-policy conflicts, and delegated meta-agent timeout or staleness events
  - Record which source ids, boundary rules, and fallback mode were used for each recommendation
- Logging:
  - Structured logs must include platform family, request class, recommendation type, uncertainty statement, refusal or escalation reason, and source references used
  - Sensitive tenant identifiers, raw document content, file paths, and access tokens must be redacted or tokenized
- Rollback path:
  - Revert to the last approved manifest and readiness bundle version
  - Disable delegated shared meta-agent paths if they become stale or unreliable
  - Remove unverified tenant-specific overlays, hold document-changing recommendations, and re-run the validated scenario matrix before re-enabling customizations
- Support owner:
  - Business Applications And Enterprise Platforms package steward

## Deployment Notes

- Tenant isolation and adaptation constraints are mandatory because document-sharing, retention, and versioning advice becomes unsafe if assumptions leak across tenants.
- Safe initialization must work even when shared meta-agents are unavailable; the specialist baseline continues in conservative specialist-owned mode and prefers escalation over speculative retention or sharing advice.
- Rollout should be staged as preview, canary tenants, then broad availability, with explicit rollback to the prior manifest release if pass-rate drift, refusal-quality regression, or source-baseline staleness appears.

## Shared Meta-Agent Integration

- Specialist-owned sections:
  - Document-management boundary, routing rules, source-policy exceptions, escalation rules, tenant isolation contract, and shared-meta-agent request contracts
- Delegated sections:
  - Best-practice corpus expansion, scenario normalization, readiness formatting, deployment boilerplate, commercialization boilerplate, source policy normalization, neighbor normalization, and package scaffolding
- Fallback model:
  - If meta-agent output is unavailable or stale, freeze to the local manifest baseline and avoid broadening claims
  - If meta-agent output is low confidence, return bounded guidance with explicit evidence gaps and orchestrator escalation

## Target Buyer and User Profile

- Primary buyers: digital workplace platform owners, enterprise applications leaders, information governance managers, and operations sponsors responsible for controlled document collaboration
- Primary users: SharePoint or Box or Google Workspace admins, records operations reviewers, knowledge managers, collaboration support leads, and platform reviewers who need bounded document-management guidance with evidence and escalation rules

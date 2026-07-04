# Deployment Package

## Runtime

- Target runtime: orchestrator-hosted specialist runtime with deterministic response templates, source attribution, and structured evidence logging
- Deployment model: multi-tenant packageized specialist with tenant-scoped policy overlays for reporting-platform terminology, workspace names, and approved connector inventories
- Optional dependencies: shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation
- Required secrets:
  - Optional tenant-approved API credentials for metadata or audit retrieval integrations
  - Optional model or agent endpoint credentials when shared meta-agents are explicitly enabled
- Required configuration:
  - Tenant confidence thresholds and escalation contacts
  - Approved reporting-platform families, workspace or site identifiers, and connector allowlists
  - Evidence retention destination, audit-log handling policy, and source freshness review cadence

## Isolation

- Tenant boundary: hard tenant namespace for prompts, logs, caches, source overlays, and release evidence; no cross-tenant sharing by default
- Knowledge boundary: shared baseline knowledge is immutable and public-source-backed; tenant-specific instructions and artifacts remain isolated and approval-scoped
- Adaptation policy: allowed adaptations are configuration, retrieval, and approved tuning only; no custom code generation, semantic-model redesign, or cross-tenant content reuse

## Operations

- Monitoring:
  - Track request volume, pass or fail outcomes, escalation rate, and adjacent-specialty refusal rate
  - Track refresh, permission, sharing, and release-readiness recommendation categories
  - Alert on stale authority-source review dates, repeated low-confidence escalations, and fallback activation due to missing delegated meta-agent outputs
- Logging:
  - Structured logs must capture request context, source IDs used, boundary decisions, assumptions, confidence limits, and fallback triggers
  - Redact tenant identifiers, credentials, and sensitive content metadata from logs
- Rollback path:
  - Disable the current specialist package version and route reporting requests to the orchestrator or broader fallback specialist
  - Revert tenant overrides to the last approved revision and restore the prior validated package
  - Re-run local repository validation before re-enabling
- Support owner:
  - Business Applications And Enterprise Platforms package steward

## Tenant Isolation and Adaptation Constraints

- Tenant overlays may change naming, approved connector inventory, environment labels, and escalation contacts only
- Tenant overlays must not broaden the public specialty boundary into BI design, data engineering, or custom embedding development
- Cross-tenant sharing of workspace metadata, logs, report definitions, or readiness evidence is not allowed

## Deployment Notes

- Specialist-owned content in this package: boundary definition, source baseline categories and exceptions, shared-meta-agent contracts, fallback rules, scenarios, results, readiness evidence, deployment notes
- Meta-agent-delegated areas by contract only: reusable corpus normalization, repeated scenario-normalization patterns, repeated readiness packaging normalization, deployment boilerplate normalization, commercialization phrasing normalization, source-policy normalization, boundary phrase normalization, and scaffolding review
- Safe startup requirement: the package must initialize and operate with the local baseline even if every shared meta-agent is unavailable

## Release Promotion Requirements

- `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json` must remain internally consistent
- Local validation must pass before promotion
- Human verification must remain recorded for any validated release claim

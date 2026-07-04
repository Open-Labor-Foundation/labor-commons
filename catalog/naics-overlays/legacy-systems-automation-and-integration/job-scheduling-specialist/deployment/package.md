# Deployment Package

## Runtime

- Target runtime: Orchestrator-hosted advisory specialist service with no direct authority to execute, hold, or release production jobs.
- Deployment model: Managed container or service deployment behind an orchestrator that supplies request context, policy controls, and audited outputs.
- Required secrets:
  - None for the baseline package.
  - Optional observability credentials only if connected to enterprise telemetry.
- Required configuration:
  - `scheduler_family_allowlist` for approved product families or native schedulers
  - `confidence_threshold` for escalation when schedule evidence is incomplete
  - `tenant_id` or equivalent tenant-routing identifier
  - `allowed_source_baselines` for authority baseline pinning
  - `fallback_mode` to force local-only guidance when shared meta-agents are stale or unavailable

## Isolation

- Tenant boundary:
  - Keep request history, operator evidence, and generated outputs tenant-scoped.
  - Do not allow one tenant to reuse another tenant's schedule topology, runbook details, or migration artifacts.
- Knowledge boundary:
  - Runtime knowledge may reference only the approved authority baseline and tenant-approved retrieval inputs.
  - Do not let tenant-specific content rewrite global specialty boundaries or authority-source policy.
- Adaptation policy:
  - Allow configuration, retrieval, and approved tuning only.
  - Require review for changes that affect scope, escalation policy, or authority baselines.
  - Block adaptations that widen the specialty into batch implementation, file transfer, middleware, or scripting ownership.

## Operations

- Monitoring:
  - Track pass-rate drift against the evaluation suite.
  - Track refusal, escalation, and adjacent-specialty handoff rates.
  - Track source freshness, fallback-mode activation, and stale meta-agent warnings.
  - Track high-risk recommendation volume for migration and recovery scenarios.
- Logging:
  - Capture redacted request context, cited source IDs, confidence level, and routing decision.
  - Record explicit reason codes for refusal, escalation, and fallback activation.
  - Avoid logging secrets, job payload contents, credentials, or tenant-sensitive scheduler configuration blobs.
- Rollback path:
  - Revert to the previously approved manifest and package version if new boundary, source, or readiness changes prove unstable.
  - Disable delegated meta-agent augmentation and run local-only authority baseline mode during rollback.
  - Freeze commercialization claims until source freshness and evaluation evidence are revalidated.
- Support owner:
  - Repository owner or designated specialist maintainer for package changes.
  - Operational escalations route through the orchestrator to the correct adjacent specialist when requests leave the scheduler boundary.

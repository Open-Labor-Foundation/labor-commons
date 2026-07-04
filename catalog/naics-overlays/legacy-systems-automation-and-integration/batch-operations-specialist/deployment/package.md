# Deployment Package

## Runtime

- Target runtime: Orchestrator-facing specialist component for batch-operations guidance and readiness review.
- Deployment model: Versioned catalog artifact bundle with tenant-scoped retrieval and optional read-only operational evidence connectors.
- Required secrets: None at baseline; optional connector credentials must be read-only and managed outside the specialist package.
- Required configuration:
  - Tenant and environment identifiers
  - Batch runtime profile (`zos`, `distributed-scheduler`, `aws-m2-modernized`, or approved equivalent)
  - Escalation routing map for adjacent specialists
  - Source-refresh policy and evidence retention settings

## Isolation

- Tenant boundary:
  - Keep tenant batch evidence, spool references, job names, and operational history isolated per tenant or engagement.
  - Cross-tenant reuse is limited to public source baseline and approved non-sensitive templates.
- Knowledge boundary:
  - Use only approved public authority sources plus tenant-provided operational evidence.
  - Do not execute live production scheduler, MQ, JCL, or batch-runtime actions from this package.
- Adaptation policy:
  - Allowed adaptation: tenant-specific runtime profiles, evidence templates, and low-risk parameterization of runbook outputs.
  - Disallowed adaptation: expansion into scheduler platform ownership, application rewrites, file-transfer onboarding, or integration-architecture design.

## Operations

- Monitoring:
  - Track recommendation type, boundary refusals, low-confidence escalations, and shared-meta-agent fallback events.
  - Track whether restart or rerun guidance was delivered with explicit rollback and evidence requirements.
- Logging:
  - Log request ID, tenant ID, cited source set, assumptions, confidence state, escalation target, and package version.
  - Persist reviewer sign-off and source refresh events for validated evidence.
- Rollback path:
  - Disable the current specialist package version and route requests to orchestrator fallback or manual review.
  - Restore the last validated package snapshot and require revalidation before re-enabling validated routing.
- Support owner:
  - Catalog maintainer and legacy operations support owner for tenant-facing incidents.

## Tenant Adaptation and Constraints

- Tenant-specific recommendations must be grounded in actual batch runtime evidence, not inferred platform assumptions.
- Shared meta-agent retrieval is allowed only for normalized boilerplate and must fall back safely to local artifacts when stale or unavailable.
- For modernized AWS batch guidance, operators must note that AWS Mainframe Modernization stopped accepting new customers after November 7, 2025; recommendations still apply only to existing supported environments and recorded migration contexts.

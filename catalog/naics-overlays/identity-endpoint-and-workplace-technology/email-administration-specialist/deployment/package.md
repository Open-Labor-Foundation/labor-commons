# Deployment Package

## Runtime

- Target runtime: Orchestrator-facing specialist component with policy-driven email-administration guidance.
- Deployment model: Reusable guidance package with tenant-specific overlays; no production code execution path.
- Required secrets: None at baseline; optional read-only connectors for tenant directory or telemetry ingestion.
- Required configuration:
  - Tenant boundary metadata (`tenant_id`, `policy_tier`, `platform_profile`)
  - Policy adapter allow-list for outbound guidance channels
  - Escalation handoff target mapping (adjacent specialist routes)

## Isolation

- Tenant boundary:
  - Keep tenant email policy recommendations isolated by tenant context.
  - Never merge delivery state or credential-like details across tenants.
- Knowledge boundary:
  - Use only approved public authority sources and tenant-provided evidence.
  - No live credential use or direct admin API execution without downstream orchestrator controls.
- Adaptation policy:
  - Allowed adaptation: configuration templates and non-sensitive parameter tuning.
  - Disallowed adaptation: role expansion into network architecture or endpoint engineering.

## Operations

- Monitoring:
  - Track scenario decision consistency, boundary rejections, and low-confidence escalations.
  - Track operational feedback on policy rollout success and rollback usage.
- Logging:
  - Log request IDs, input class, confidence state, decision rationale, and escalation recipients.
  - Persist source references and any assumptions that changed recommendation outcomes.
- Rollback path:
  - Disable specialist recommendations for impacted tenant and route traffic to orchestrator fallback/manual review.
  - Preserve package version and evidence artifacts for audit review.
- Support owner:
  - Specialist catalog maintainer with marketplace support owner for tenant-facing incidents.

## Tenant Adaptation and Constraints

- Tenant profile selection is explicit and validated before recommendations.
- Cross-tenant policy inheritance is disabled by default.
- Any high-impact policy behavior changes must pass human verification.

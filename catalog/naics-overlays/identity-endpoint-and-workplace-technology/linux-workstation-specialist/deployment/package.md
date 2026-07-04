# Deployment Package

## Runtime

- Target runtime: orchestrator-consumed specialist package loaded from catalog distribution registry
- Deployment model: hosted specialist service with tenant-scoped configuration
- Required secrets: none in package; orchestrator supplies tenant auth context and integration credentials
- Required configuration: tenant policy profile, identity provider profile, update windows, and workplace client inventory inputs

## Isolation

- Tenant boundary: strict tenant namespacing for all configuration profiles, recommendations, and evidence artifacts
- Knowledge boundary: no cross-tenant policy/template sharing; retrieval is constrained to tenant-context and request scope
- Adaptation policy: configuration tuning is supported; policy template sharing requires tenant owner approval and explicit audit notes

## Operations

- Monitoring:
  - Boundary deflection rate (out-of-scope rejections)
  - Low-confidence escalation frequency and closure time
  - Policy drift between recommended and enforced workstation controls
- Logging:
  - Confidence score for recommendations
  - Evidence references and fallback rationale
  - Handoff targets and escalation artifacts
- Rollback path:
  - Revert package release tag to previous known-good version
  - Disable optional hardening recommendations and restore prior baseline policy documents while retaining audit logs
- Support owner: product owner for identity/workplace agents with platform/operations review lead

## Deployment Requirements and Constraints

- Tenant isolation and adaptation constraints are explicitly enforced in `manifest.yaml` and cannot be overridden by ad-hoc configuration.
- Tenant-aware rollout must include per-profile staging and explicit user-impact acknowledgment for workstation lock-level controls.
- Rollback tests must include: catalog load compatibility, boundary refusal behavior, and evidence trail continuity across version swaps.
- Target buyer and commercialization assumptions are captured in marketing readiness notes.

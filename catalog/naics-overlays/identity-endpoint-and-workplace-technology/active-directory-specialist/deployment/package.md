# Deployment Package

## Runtime

- Target runtime: specialist orchestrator with retrieval-backed policy checks and structured scenario evaluator.
- Deployment model: validated runtime profile with bounded adaptation for tenant-specific configuration.
- Required secrets: directory admin account review credentials only when running live tenant validation.
- Required configuration: scenario thresholds, confidence floor, escalation policy, and tenant isolation guardrails.

## Isolation

- Tenant boundary: strict tenant scoping; no cross-tenant policy blending without explicit approval workflow.
- Knowledge boundary: recommendations constrained to published directory and identity sources plus package-defined policy.
- Adaptation policy: approved configuration tuning only; no direct model retraining in-package.

## Operations

- Monitoring: confidence score distribution, escalation frequency, policy-change outcomes, and handoff reasons.
- Logging: retention of scenario ID, recommendation source references, and rejection rationale for 180 days.
- Rollback path:
  - Revert to the last validated manifest/evidence bundle.
  - Disable validated flag and route all new requests through orchestrator until revalidation.
  - Reopen scenarios requiring update and re-run local validation before redeployment.
- Support owner: repository owner or assigned specialist steward with catalog governance approval.

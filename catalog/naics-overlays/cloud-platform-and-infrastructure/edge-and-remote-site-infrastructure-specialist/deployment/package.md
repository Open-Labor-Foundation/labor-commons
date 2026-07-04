# Deployment Package

## Runtime

- Target runtime: `specification-based` specialist package consumed by the catalog materializer or orchestrator. The package defines behavior, boundaries, sources, scenarios, and evidence requirements; it does not claim a retained trusted implementation.
- Deployment model: Stateless materialization on demand with tenant-scoped retrieval and configuration overlays.
- Required secrets:
  - None for baseline spec-pack use.
  - Optional tenant connector tokens only when a runtime retrieves tenant inventory, observability, incident, change, backup, connectivity, or policy records.
- Required configuration:
  - `agent_slug=edge-and-remote-site-infrastructure-specialist`
  - `runtime_strategy=specification-based`
  - Tenant profile flags for site class, geography, criticality, connectivity mode, local autonomy, tenant boundary, provider platform, and data classification.
  - Confidence thresholds, source freshness thresholds, and orchestrator return routing.

## Materialization Inputs

- Task and boundary metadata: supported tasks, output shapes, hard refusal triggers, adjacent specialists, and orchestrator return rules from `manifest.yaml`.
- Tenant facts: site class, criticality, SLO/RTO/RPO, connectivity model, traffic and capacity profile, isolation requirements, source-of-truth architecture, change governance, and approval owners.
- Systems of record: edge platform inventory, cloud provider records, Kubernetes records, Terraform state, GitOps repository, monitoring/logging, incident, change, backup/restore, connectivity, CMDB, and tenant policy stores.
- Source baseline: manifest authority sources must be checked for freshness before provider-specific claims are materialized.

## Isolation

- Tenant boundary:
  - Tenant-specific context is isolated by tenant namespace and must not mix records, assumptions, outputs, or evidence across tenants.
  - Tenant overrides are scoped to the invoking tenant and recorded separately from the public baseline.
- Knowledge boundary:
  - Public baseline guidance remains source-backed and versioned.
  - Tenant-specific policy, data residency, local registry, telemetry buffering, and safety constraints are treated as overlays, not as globally reusable assumptions.
- Adaptation policy:
  - Allowed: controlled configuration, tenant evidence retrieval, approved tuning, and source-precedence annotation.
  - Disallowed: rewriting public baseline guidance without research refresh, bypassing source conflicts, or claiming authority outside the lane.

## Operations

- Monitoring:
  - Scenario pass rate, functionality coverage, source review age, and regression deltas by package release.
  - Boundary rejection frequency for application, telecom, IAM, security, legal, procurement, hardware, help-desk, and execution requests.
  - Low-confidence escalation frequency for missing site facts, stale source evidence, source-policy conflicts, and missing tenant systems of record.
- Logging:
  - Decision logs with scenario ID, source IDs, tenant record references, confidence level, assumptions, refusal reason, and handoff target.
  - Redact site identifiers, customer identifiers, secrets, regulated data, and tenant-sensitive topology details.
- Rollback path:
  - Disable new materialization from this version and pin orchestrator routing to the previous reviewed package version.
  - Freeze tenant overlays and route new requests through human review until validation is restored.
  - Remove validated claim only if evaluation, research freshness, functionality coverage, or human verification is no longer satisfied.

## Deployment Notes

- The package is safe to deploy as a validated spec pack because all required artifacts are present and internally consistent.
- Runtime may remain `specification-based`; a materializer can regenerate implementation behavior from this package without retaining generated code in repo.
- No generated implementation should be stored long term unless frequent-use promotion criteria are met:
  - repeated lane invocation across production-like tenants,
  - all 18 scenarios still pass against the generated implementation,
  - tenant isolation, logging, rollback, source refresh, and refusal behavior are proven,
  - a human reviewer explicitly promotes the generated artifact as trusted.

## Support Ownership

- Primary owner: Cloud platform catalog maintainers.
- Runtime escalation: orchestrator.
- Human review: required when source precedence, safety, regulated-data, contractual, legal, procurement, budget, or production execution authority changes the answer.

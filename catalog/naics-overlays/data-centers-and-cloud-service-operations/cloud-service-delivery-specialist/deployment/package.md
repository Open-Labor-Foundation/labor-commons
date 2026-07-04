# Deployment Package

## Runtime

- Target runtime: `commons-crew` with spec-first execution.
- Runtime strategy: `specification-based`.
- Keep `specification-based` until an explicitly approved retained implementation is promoted.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit scope, boundary, authority constraints, and routing conditions.
- `evaluation/scenarios.md`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, and `evaluation/results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `positioning/readiness.md` and this deployment package.

### Required tenant facts and assumptions

- Tenant policy documents for access control, change governance, SLA levels, and escalation ownership.
- Cloud-service taxonomy: tenancy, region, zone, dependency classes, and maintenance window semantics.
- Systems-of-record mapping for tickets, incidents, changes, IAM, and approvals.
- Explicit tenant-specific interpretation of high-risk indicators and rollback expectations.

### Required systems and retrieval dependencies

- Service desk / ticketing platform.
- Incident and outage management platform.
- Change-management and release tooling.
- Identity and access management repository.
- Dependency map and configuration management database.
- Compliance, approval, and audit artifacts.

### Refusal and return conditions

- Missing tenant policy, systems-of-record evidence, or critical artifacts.
- Missing testing, rollback, or approval evidence for change-related requests.
- Requests for legal, policy-override, financial, safety-critical, or engineering authority.
- Conflicting public and tenant policy that cannot be resolved without human review.

## Deployment and Rollback

- Deploy as a validated spec pack only where queue and tenant onboarding include required mappings.
- Monitor scenario outcomes, refusal reasons, source-refresh checks, repeat-failure escalations, and cross-team dependency routing.
- Rollback: disable specialist routing and return requests to orchestrator baseline with full handoff context.

## Promotion and Commercialization

- Runtime remains `specification-based` and does not claim retained-implementation authority.
  - sustained low-confidence and unsupported-exception reduction,
  - governance approval,
  - repeated operational validation of escalation and boundary behavior.

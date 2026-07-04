# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit compliance boundaries, authority limits, escalation routes, and return conditions.
- `evaluation/functionality-map.json` with all shared, workflow-group, and industry-profile abilities mapped to scenario IDs.
- `evaluation/research-summary.json` with source classes, source-coverage, workflow stages, systems of record, decision boundaries, and resolved ambiguities.
- `evaluation/results.json`, `readiness/evidence.json`, `readiness/release.md`, and `positioning/readiness.md`.

### Required Retrieval Dependencies

- Tenant tenancy map, control matrix, and approved obligations.
- Source-of-truth map for DCIM, CMDB, IAM, ticketing, and compliance repositories.
- Owner/approver registry and tenant precedence policy.
- Review cadence, DR/continuity policy, and exception-handling thresholds.

### Required task and boundary metadata

- Record requested scope, authority limits, and any missing facts.
- Validate control-evidence readiness before any closure-oriented output.
- Preserve explicit assumption logging for tenant adaptations.

### Refusal and Return Conditions

- Missing required artifacts, missing approver context, or unresolved source-of-truth precedence.
- Requests requiring legal interpretation, regulator-facing response drafting, engineering change authority, safety/clinical decisions, or financial approval.
- Conflict between public guidance and tenant policy that materially changes control outcome.

## Deployment and Rollback Notes

- Deploy only when retrieval dependencies are available and tenant policies are loaded.
- Track conflict escalations, source refresh checks, and missing-evidence escalations.
- Rollback rule: remove this lane from routing and return active cases to orchestrator when repeated unresolved policy conflicts or blocked evidence loops exceed thresholds.
- Recovery action: reopen each affected request with explicit blocker and dependency snapshots, then rehydrate tenant context before rerouting.

## retained-implementation Promotion Notes

- Keep runtime as `specification-based` until a separate retained-implementation build is explicitly promoted.
- Promotion requires at least 30 days of monitored operation, low unresolved-conflict trend, stable evidence completeness, and signed governance review.

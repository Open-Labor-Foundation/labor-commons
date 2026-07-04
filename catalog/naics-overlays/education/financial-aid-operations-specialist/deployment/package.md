# Deployment Package

## Deployment and Runtime Profile

- Runtime strategy: specification-based
- Runtime target: commons-crew
- Target delivery level: validated
- Runtime promotion condition: 

## Materialization Requirements

### Required Task and Boundary Metadata

- manifest.yaml with explicit scope, boundaries, and orchestrator return rules.
- evaluation/functionality-map.json with required abilities and scenario coverage.
- evaluation/research-summary.json with source classes and ambiguity mapping.
- evaluation/scenarios.md, evaluation/results.json, and readiness/evidence.json for validated validation evidence.

### Assumptions Required at Runtime

- Tenant FERPA-role mappings and consent-policy matrix.
- Tenant-defined approval-owner registry for student services finance, registrar, faculty review, accreditation, research compliance, and finance/legal escalation.
- Tenant policy on charge dictionaries, waiver/write-off authority, reconciliation ownership, and claim closure.
- Systems-of-record identifiers and connector status for SIS, LMS, student accounting, research-admin, and document repositories.

### Retrieval Dependencies

- Enrollment/program/student/faculty and study identifiers.
- Consent records and assessment linkages.
- Claim/invoice/posting records with source references and timestamps.
- Approval chain and owner graph for blocked states.
- Reconciliation checkpoints (matched items, denied items, variances, residual risk).

### Refusal and Return Conditions

- Missing consent, records, or baseline source support.
- Missing approvals or unresolved authority boundaries.
- Requests crossing into legal, licensed, policy-override, grading, ethics, or reimbursement adjudication.
- Conflicting source systems or policy interpretations that remain unresolved.

## Deployment and Rollback Notes

- Deploy only when required tenant policy and retrieval sources are configured at routing level.
- Monitoring: blocked-state events for missing records, denied/reconciliation mismatches, source conflicts, and boundary handoffs.
- Rollback: disable routing, preserve active request state, and re-route to orchestrator-safe fallback with audit trail.
- Commercialization is scoped for tenant-specialist delivery under the NAICS education overlay family.
- The lane remains specification-based and does not claim retained-implementation authority.

# Deployment Package

## Deployment and Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime promotion condition: 

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit scope, boundaries, and orchestrator return rules.
- `evaluation/functionality-map.json` with required abilities and coverage.
- `evaluation/research-summary.json` with required authority classes and scenario-family mapping.
- `readiness/evidence.json` and `readiness/release.md`.

### Assumptions Required at Runtime

- Tenant-specific FERPA-role mappings and consent policy matrix.
- Approval owner registry for registrar, faculty review, accreditation, grants, and ethics/compliance lanes.
- Systems-of-record identifiers for SIS, LMS, scheduling, research-admin, and document systems.
- Source-priority policy for tenant-vs-public-source interpretation.

### Retrieval Dependencies

- Student, faculty, program, and grant identifiers.
- Consent records, assessment evidence, schedule state, and study-administration records.
- Dependency and owner graph for approvals.
- Completion evidence artifacts and closure prerequisites.

### Refusal and Return Conditions

- Missing consent, identity, consent artifacts, or source baseline context.
- Missing approvals or evidence for completion and handoff.
- Request belongs to grading, ethics-board, legal, or financial-adjudication lanes.
- Conflicting policy or source interpretation that cannot be resolved automatically.

## Deployment and Rollback Notes

- Deployment: enable only when tenant systems map required artifact sources and source-priority rules.
- Monitoring: blocked states for evidence gaps, adjacent-lane handoffs, and unresolved-source conflicts.
- Rollback: disable lane in routing and send active requests to orchestrator-safe fallback while preserving audit history.

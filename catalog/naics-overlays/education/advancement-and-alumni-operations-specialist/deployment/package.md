# Deployment Package

## Deployment and Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime promotion condition: 

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit scope, boundaries, and return rules.
- `evaluation/functionality-map.json` with required abilities and scenario coverage.
- `evaluation/research-summary.json` with mandatory source classes and scenario-family mapping.
- `readiness/evidence.json` and `readiness/release.md`.

### Assumptions Required at Runtime

- Tenant-specific FERPA role matrices, consent policy, and communication preference hierarchies.
- Approval-owner registries for advancement, registrar, faculty review, accreditation, grants, and research ethics lanes.
- Systems-of-record identifiers for SIS, LMS, advancement CRM, research-admin, scheduling, and document systems.
- Source-priority policy for tenant guidance vs public source precedence.

### Retrieval Dependencies

- Student, faculty, alumni, grant, study, and accreditation identifiers.
- Consent artifacts, privacy settings, assessment evidence, and communication logs.
- Dependency and owner graph for approvals and approvals-change monitoring.
- Completion evidence packages and closure prerequisites.

### Refusal and Return Conditions

- Missing consent, identity, consent artifacts, or source-baseline context.
- Missing approvals, grant, ethics, or completion evidence for completion.
- Request belongs to grading, ethics-board, legal, or financial-adjudication lanes.
- Conflicting policy/source interpretation that changes the outcome.

## Deployment and Rollback Notes

- Deploy only after tenant configuration for systems, authorities, and tenant dictionaries is loaded.
- Monitor blocked states for consent gaps, adjacent-lane handoffs, and unresolved source conflicts.
- Rollback by disabling specialist routing for active cases and preserving audit history while returning requests to orchestrator-safe queue.

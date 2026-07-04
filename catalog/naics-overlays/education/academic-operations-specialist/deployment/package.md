# Deployment Package

## Deployment and Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime promotion condition: 

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit scope, boundaries, and orchestrator return rules.
- `evaluation/scenarios.md` with required and boundary-safe scenarios.
- `evaluation/functionality-map.json` with required abilities, scenario inputs/outputs, and refusal triggers.
- `evaluation/research-summary.json` with required authority classes and scenario-family mapping.
- `evaluation/results.json` with full pass/fail coverage.
- `readiness/evidence.json` and `readiness/release.md`.

### Assumptions Required at Runtime

- Tenant-specific FERPA role matrix and consent-policy mappings.
- Approval owner registry for registrar, faculty review, accreditation, grants, and ethics/compliance lanes.
- Systems-of-record identifiers for SIS, LMS, scheduling, research administration, and document systems.
- Source-priority policy for tenant-vs-public-source interpretation.

### Retrieval Dependencies

- Student, faculty, program, study, and grant identifiers.
- Consent records, assessment evidence, schedule state, and research-administration files.
- Dependency and owner graph for approvals.
- Completion evidence artifacts and residual-risk disclosures.

### Refusal and Return Conditions

- Missing consent artifacts, identity and eligibility facts, or source context that changes outcome.
- Missing approvals or evidence for completion and handoff.
- Requests that belong to grading, ethics-board, legal, or financial adjudication lanes.
- Conflicting policy or source interpretations that cannot be automatically resolved.

## Deployment and Rollback Notes

- Deployment: enable only after tenant systems map required artifact sources and source-priority rules.
- Monitoring: blocked states for evidence gaps, adjacent-lane handoffs, and unresolved ethics/policy conflicts.
- Rollback: disable lane in routing and return active requests to orchestrator-safe fallback while preserving exception queue and audit logs.

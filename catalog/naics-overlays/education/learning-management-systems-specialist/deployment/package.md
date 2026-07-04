# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`.

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit onboarding boundaries, escalation, and adjacent lane routing.
- `evaluation/functionality-map.json` containing complete onboarding-enablement-and-enrollment and education-and-research abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, boundaries, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with completed gates and human verification.

### Runtime Assumptions

- Tenant-specific FERPA-role policies and consent matrix.
- Approval-owner registry for registrar, grants, research compliance, and program leads.
- Authenticated status and health signals for LMS, SIS, scheduling, research-admin, and document systems.
- Tenant-defined go-live, testing, and rollback expectations.

### Required Retrieval Dependencies

- Enrollment, program, student, and faculty identifiers.
- Permission and credentialing records.
- Consent, assessment, and grant-study support artifacts.
- Integration health and approval owner maps.

### Refusal and Return Conditions

- Missing consent, records, credentials, or tenant policy context.
- Incomplete onboarding/setup evidence, testing, or rollback conditions.
- Source-policy conflicts and unresolved ethics/IRB interpretation.
- Requests that require adjacent authority (grading, ethics, legal, or financial).

## Deployment and Rollback Notes

- **Deployment**: enable LMS specialist in controlled routing with explicit onboarding checklist output on each request.
- **Monitoring**: track blocked onboarding outcomes, dependency failures, unresolved approvals, and repeated consent conflicts.
- **Rollback**: disable routing for this lane and route impacted requests to orchestrator with context packets.
- **Recovery**:
  - Update tenant maps and source precedence whenever policy or approver boundaries change.
  - Refresh source set and ambiguity handling after next review interval.
  - Re-run package validation before any retained-implementation promotion.

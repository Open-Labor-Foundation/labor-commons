# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`.

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit onboarding, analytics, and escalation boundaries, refusal triggers, and adjacent-lane return conditions.
- `evaluation/functionality-map.json` containing onboarding-enablement-and-enrollment + education-and-research abilities, mapped to scenario coverage.
- `evaluation/research-summary.json` with workflow stages, source classes, artifacts, systems-of-record, failure modes, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with complete gates and human verification.

### Runtime Assumptions

- Tenant FERPA-role and permission-policy mappings.
- Approval-owner registry for registrar, grants, accreditation, research compliance, and program owners.
- Authenticated state and health signals for SIS, LMS, scheduling, research administration, and document systems.
- Tenant-defined record-of-truth and refresh precedence rules across SIS and LMS for metric outcomes.
- Tenant-defined exception owners and escalation addresses.

### Required Retrieval Dependencies

- Enrollment, program, student, and faculty identifiers.
- Credentialing, permission, onboarding, and training artifacts.
- Consent, assessment, grant, and study administration artifacts.
- System-of-record availability and dependency health snapshots.
- Approval, ethics, and governance policy maps.

### Refusal and Return Conditions

- Missing consent, records, credentials, or tenant policy context.
- Incomplete onboarding or setup evidence, permission gaps, testing/rollback gaps.
- Source-policy conflicts and unresolved ethics/IRB interpretation.
- Requests that require adjacent authority (grading, ethics board, legal override, financial approval, or clinical safety).

## Compliance Boundaries and Rollback Notes

This overlay is `validated` but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind education-analytics queue controls with prerequisite completion check in onboarding requests.
- Enforce tenant-level allow-lists and source-precedence routing to prevent unsupported metrics.
- Ensure readiness and go-live handoff artifacts are attached to every analytical transition.
- Keep a minimum one-cycle validation checkpoint for first 14 sessions in a new tenant.

### Monitoring and Regression Controls

- Track:
  - setup blocked by missing credentials/perms/training,
  - consent/evidence gaps,
  - unresolved system-of-truth conflicts,
  - policy-conflict escalations,
  - and repeated unsupported-trend or unsupported-forecast assertions.
- Trigger rollback when the same unresolved refusal/escalation class appears for the same class of request in 3 consecutive sessions.

### Rollback and Recovery

- Disable this overlay in request routing and fallback to orchestrator support for affected tenants.
- Add recovery context packets and unresolved-control notes for each affected request lineage.
- Re-collect tenant policy artifacts and source-precedence rules before re-enabling.
- Run full spec-pack verification before any retained-implementation migration.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under this spec,
  - zero unresolved policy/escalation incidents,
  - full governance review with education operations, legal, and compliance signoff,
  - and explicit production value validation from usage.
- Promotion action must be initiated by a separate governance-backed build package.

# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`.

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit onboarding boundaries, escalation, refusal triggers, and adjacent-lane return conditions.
- `evaluation/functionality-map.json` containing complete `onboarding-enablement-and-enrollment` and `education-and-research` abilities.
- `evaluation/research-summary.json` with source classes, source-authority rationale, workflow-stage mapping, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with completed gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant-specific FERPA-role policies and consent matrix.
- Approval-owner registry for registrar, grants, research compliance, and program leads.
- Authenticated status and health signals for SIS, LMS, scheduling, research-administration, and document systems.
- Tenant-defined go-live, testing, and rollback expectations.
- Explicit tenant mappings for record-of-truth precedence across SIS, LMS, scheduling, and research systems.
- Tenant-defined exception owners and escalation addresses.

### Required Retrieval Dependencies

- Enrollment, program, student, and faculty identifiers.
- Permission and credentialing records.
- Consent, assessment, and grant-study support artifacts.
- Integration-health and approval-owner maps.
- Assessment and privacy audit trails for study-linked records.
- Access control dictionaries for onboarding roles, system scopes, and tenant policy exceptions.

### Refusal and Return Conditions

- Missing consent, records, credentials, or tenant policy context.
- Incomplete onboarding or setup evidence, testing controls, or rollback conditions.
- Source-policy conflicts and unresolved ethics/IRB interpretation.
- Requests that require adjacent authority (grading, ethics, legal, or financial).
- Learner outcomes, instructional judgement, transcript finality, or ethics-board decisions.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind higher-education-compliance queue controls with explicit onboarding-checklist output on each compliant request.
- Enforce tenant-level allow-lists to prevent execution outside the intended educational-compliance boundary.
- Ensure evidence artifacts are attached to every readiness or handoff output.
- Keep a minimum one-cycle validation checkpoint for first 14 sessions in a new tenant.

### Monitoring and Regression Controls

- Track:
  - blocked onboarding or go-live events,
  - missing FERPA, PPRA, consent, assessment, grant, or accreditation evidence escalations,
  - dependency failures in systems of record,
  - policy-conflict escalations,
  - and repeated source-interpretation overrides.
- Trigger rollback when the same unresolved refusal/escalation class appears for the same class of request in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fallback to orchestrator support for affected tenants.
- Add recovery context packets and unresolved-control notes for each affected request lineage.
- Re-collect tenant policy artifacts and source precedence rules before re-enabling.
- Run package validation before any retained-implementation migration.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec,
  - zero unresolved policy/escalation incidents,
  - full governance review with legal/compliance signoff,
  - and explicit customer value validation from production routing.
- Promotion action must be initiated by a separate governance-backed build package.

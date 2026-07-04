# Deployment Package

## Deployment and Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime promotion condition: 

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit scope, boundaries, and orchestrator return rules.
- `evaluation/functionality-map.json` with all required abilities and scenario mapping.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems, boundaries, and failure modes.
- `readiness/evidence.json` and `readiness/release.md`.

### Required Runtime Assumptions

- Tenant FERPA-role mappings and consent policy matrix are available.
- Approval/owner registry for registrar, faculty review, accreditation, grants, and research-compliance is available.
- Systems-of-record endpoints and identity for SIS, LMS, scheduling, research administration, and document stores are available.
- Tenant policy precedence rules for conflicts between public and tenant guidance are explicitly configured.

### Retrieval Dependencies

- Student, faculty, program, study, grant, and accreditation identifiers.
- Consent materials, assessment evidence, schedule documents, and intake records.
- Approval and reservation artifacts, referral states, and source-priority preferences.
- Dependency matrix for downstream handoff readiness and owner assignment.

### Refusal and Return Conditions

- Missing consent, identity, eligibility, and source-context artifacts.
- Missing approvals or incomplete intake evidence when routing to downstream work.
- Requests requiring grading, IRB finality, policy override, legal, or financial-authority decisions.
- Conflicting source or policy interpretation with no tenant precedence order.

## Deployment and Rollback Notes

- Deploy only when tenant systems and owner maps required for this lane are onboarded.
- Monitor and alert on blocked-intake states: missing artifacts, blocked approvals, source conflicts, and unresolved ethics changes.
- Rollback by removing this specialist from active routing, preserving queued records and audit logs in exception tracker.

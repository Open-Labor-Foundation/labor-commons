# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separate committed build.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit franchise training boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all onboarding-enablement-and-enrollment abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies brand-specific curriculum, role-based learning paths, cohort rules, prerequisite sequencing, training calendar, make-up policy, assessment thresholds, badge or credential criteria, and opening-readiness gates.
- Franchise CRM, document repository, LMS, virtual-classroom or attendance tool, assessment or certification platform, IAM, helpdesk, training sandbox, and opening-checklist systems are retrievable at runtime.
- Tenant provides current jurisdiction, unit or operator context, learner role, curriculum version, systems-of-record map, credential owner, and owner routing that make this overlay materially different from generic learning administration.
- Tenant provides stricter controls for safety, food-safety, clinical, privacy, licensing, HR, local permits, brand standards, or role-based recertification when those controls narrow the public baseline.

### Required Retrieval Dependencies

- FDD Item 11 reference, franchise agreement training clause, state addenda, operations-manual acknowledgment, and curriculum version.
- LMS transcript, attendance roster, make-up plan, assessment scores, instructor signoff, field-practicum checklist, certificate or badge record, and recertification schedule.
- IAM or SSO tickets, role grants, MFA status, franchisee portal enrollment, training sandbox access, POS or back-office access prerequisites, and helpdesk work items.
- Opening checklist, go-live owner, field-trainer handoff, deferred-scope items, escalation contacts, and steady-state handoff targets.

### Regulated-Lane Caveats

- FTC, eCFR, and NASAA sources govern franchise disclosure and state addenda posture, but tenant jurisdiction retrieval and legal-owner confirmation are required before applying state-specific conclusions.
- IFA and IACET sources inform franchise education terminology and learner-record controls, but the lane does not claim external credential, CEU, CFE, or brand-certification authority without the credential owner record.
- NIST guidance constrains identity, access, authenticator, training, and audit controls, but stronger tenant controls take precedence when properly retrieved.
- Safety-critical, food-safety, clinical, licensed, or regulated training records may gate readiness, but the lane only validates evidence and routes final certification to the designated owner.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory Item 11, LMS, attendance, assessment, signoff, access, credential, or opening evidence.
- Requests for legal interpretation, FDD or state addenda revisions, franchise agreement waivers, HR decisions, direct access grants, safety-critical certification, financial approval, or final opening approval.
- Requests to mark training, credentialing, onboarding, or go-live complete without evidence-backed prerequisite closure.
- Public baseline and tenant, agreement, jurisdiction, curriculum, credential, or access policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated premature training-complete markings, credential overclaims, access-control leaks, or legal-boundary violations are detected.
- Preserve onboarding checklists, readiness summaries, LMS evidence extracts, credential blocker notes, escalation packets, and handoff notes for post-rollback review.
- Re-enable only after Item 11 and curriculum retrieval, LMS evidence mapping, access gating, tenant adaptation controls, credential-owner routing, and adjacent-lane rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry franchise-systems-and-multi-unit-enterprise-support --agent franchise-training-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this franchise training lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires learning governance signoff, runtime retrieval tests for LMS and IAM evidence, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.

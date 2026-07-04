# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit SUD operations boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies program modality, site or business unit, state and payer rules, EHR workflow, dosing workflow when applicable, privacy and legal escalation rules, and discharge-approval boundaries.
- EHR, scheduling, OTP dispensing or medication-administration, lab, payer authorization, consent ledger, incident tracking, and discharge-planning systems are retrievable at runtime.
- Tenant provides authority matrices for counselors, clinical supervisors, medical directors, privacy or compliance, utilization management, billing, and discharge planning.
- Jurisdiction, current episode stage, consent posture, and modality-specific policy are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Referral source, episode identifier, modality, jurisdiction, payer, and assigned team.
- Admission packet, ASAM or placement evidence, ROI and Part 2 notice status, and current treatment-plan review dates.
- Scheduling records, attendance history, counseling assignments, dosing or medication-administration logs when applicable, and UDS or toxicology results.
- Utilization-review submissions, authorization dates, payer correspondence, incident records, and grievance history.
- Transfer forms, discharge summary status, aftercare plans, closure checklist items, and outside-party communication restrictions.

### Refusal and Return Conditions

- Missing modality, missing or expired ROI, absent placement documentation, unclear privacy posture, unknown payer authorization state, or unavailable closure evidence.
- Requests for diagnosis, dose change, take-home approval, toxicology interpretation, medical necessity judgment, crisis intervention, privacy-law interpretation, or discharge approval.
- State, payer, accreditor, or tenant policy materially conflicts without explicit precedence resolution.
- Requests to disclose SUD records or close work using generic attendance-only evidence.

## Rollback and Recovery

- Pause tenant routing for this lane if expired ROI or Part 2 controls are being bypassed, authorization rework is being skipped, dosing or toxicology evidence is missing from closure logic, or operations staff are being asked to make clinical decisions.
- Preserve all status summaries, completion records, exception notes, redisclosure requests, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, privacy controls, modality-specific policy, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry behavioral-health-and-community-care --agent sud-program-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this SUD program operations lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

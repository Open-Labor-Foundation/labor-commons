# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit home-services analytics boundaries, service-resolution rules, refusal triggers, adjacent-owner routing, clinical-versus-administrative limits, PHI controls, OASIS and quality evidence expectations, payer/provider dependencies, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus `service-support-and-resolution` plus `healthcare-and-care-delivery` abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, required healthcare scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies policies, service model, jurisdiction, business unit, program, product, provider type, facility type, payer, plan, service setting, patient or member status, reporting period, audience, source-precedence rules, metric dictionary, and disclosure posture when those facts materially change the answer.
- EHR or EMR, field-visit documentation, OASIS, quality reporting, scheduling, referral, authorization, revenue-cycle, claims, remittance, denial, appeal, payer portal, case management, utilization review, CRM, patient/member access, consent, privacy, and governed BI systems are retrievable at runtime.
- Tenant provides authority matrices for home-services operations, patient access, quality reporting, revenue cycle, coding, utilization review, licensed clinical review, privacy/legal, payer policy, compliance, public reporting, data governance, and executive disclosure owners.
- Minimum-necessary, consent, low-volume, PHI, public-reporting, clinician-level, patient/member-level, and disclosure controls are available whenever outputs could expose regulated or sensitive healthcare information.

### Required Retrieval Dependencies

- Tenant policies, jurisdiction, business unit, program, product, provider type, facility type, payer, plan, service setting, reporting period, intended audience, and source-precedence rules.
- Patient or member status, eligibility, benefits, service dates, referral dependencies, authorization status, order or plan-of-care references, consent and privacy constraints, and documentation prerequisites.
- Encounter documentation, field clinician notes, visit schedules, missed-visit reasons, OASIS assessments, discharge or care-transition records, and quality-reporting extracts.
- Charge capture, coding, 837 claim, 835 remittance, CARC/RARC denial, appeal, payment, payer portal, and revenue-cycle extracts.
- CRM, service desk, stakeholder communication, case-management, utilization-review, and patient/member access records.
- Tenant metric dictionary, numerator, denominator, exclusions, attribution logic, threshold rules, source tables, measure references, refresh windows, and publication thresholds.
- Adjacent-owner matrix for clinical review, utilization review, patient access, coding, revenue cycle, payer interpretation, privacy/legal review, compliance review, quality reporting, data governance, and executive disclosure signoff.

### Refusal and Return Conditions

- Missing tenant policies, jurisdiction, business unit, program, payer, plan, provider type, facility type, service setting, patient/member status, source hierarchy, system-of-record mapping, retrieval hook, or public-reporting posture.
- Missing or conflicting eligibility, referral, authorization, service date, consent, encounter, field-note, OASIS, charge, claim, remittance, denial, appeal, quality, utilization, or disclosure-control evidence.
- Public source, payer rule, tenant policy, contract, measure specification, OASIS logic, or system conflict materially alters the outcome.
- Requests for diagnosis, treatment planning, medical-necessity determination, licensed clinical judgment, patient-safety clearance, coding-policy interpretation, payer-policy interpretation, privacy-law interpretation, authorization approval, policy exception, quality attestation, regulatory submission, or public disclosure approval.
- Requests to publish a home-services metric, benchmark, forecast, regulatory statement, clinician-level output, patient/member-level output, or causal claim without confidence caveats and authorized owner.

## Rollback and Recovery

- Pause tenant routing for this lane if PHI or minimum-necessary controls are bypassed, stale or conflicting source data is normalized silently, denominator or exclusion logic is omitted, authorization or referral dependency handling is skipped, or analytics outputs are used as clinical, payer, coding, privacy, certification, public-reporting, financial, or policy-exception decisions.
- Preserve all resolution notes, analytical briefs, metric specifications, data-quality exception registers, source-reconciliation notes, stakeholder communications, PHI handling decisions, and unresolved conflict state for post-rollback review.
- Re-enable only after source-of-truth retrieval, tenant metric dictionaries, privacy controls, clinical-versus-administrative boundaries, payer/provider dependencies, OASIS and quality logic, disclosure posture, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry home-services-and-field-consumer-services --agent home-services-analytics-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this home-services analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, monitored runtime behavior, tenant-safe retrieval contracts, privacy and clinical boundary review, OASIS and payer-dependency review, and a new PR that records the retained-implementation runtime separately from this spec pack.

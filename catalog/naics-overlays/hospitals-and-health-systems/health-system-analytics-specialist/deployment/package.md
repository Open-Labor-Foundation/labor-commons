# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed trusted runtime package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit health system analytics boundaries, refusal triggers, adjacent-owner routing, clinical-versus-administrative limits, PHI controls, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus analytics-reporting-and-disclosure plus healthcare-and-care-delivery abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and required healthcare-and-care-delivery scenario-family coverage.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies policies, service model, jurisdiction, business unit, facility, campus, department, service line, provider type, payer, plan, care setting, patient or member status, reporting period, audience, source-precedence rules, action thresholds, and disclosure posture when those facts materially change the answer.
- EHR or EMR reporting, ADT, bed-management, EDW, BI, practice-management, scheduling, referral, authorization, revenue-cycle, charge, coding, claims, remittance, denial, appeal, quality-reporting, HCAHPS, NHSN, utilization-review, case-management, payer, consent, privacy, and disclosure systems are retrievable at runtime.
- Tenant provides authority matrices for hospital operations, quality reporting, revenue cycle, coding, utilization review, licensed clinical review, privacy/legal, payer policy, compliance, public reporting, data governance, staffing, bed management, and executive disclosure owners.
- Minimum-necessary, consent, low-volume, PHI, public-reporting, and clinician or patient/member disclosure controls are available whenever outputs could expose regulated or sensitive healthcare information.

### Required Retrieval Dependencies

- Tenant policies, jurisdiction, business unit, facility, campus, department, service line, provider type, payer, plan, care setting, reporting period, and intended audience.
- Patient or member status, eligibility, admission status, service dates, referral dependencies, authorization status, consent and privacy constraints, orders, discharge or care-transition records, and documentation prerequisites.
- ADT, bed-management, encounter, scheduling, referral, authorization, charge, claim, remittance, denial, appeal, utilization-review, quality-reporting, patient-experience, case-management, and operational extracts.
- Tenant metric dictionary, numerator, denominator, exclusions, source tables, facility and service-line attribution logic, measure references, refresh windows, action thresholds, and publication thresholds.
- EHR or EMR reporting, enterprise data warehouse, governed BI, practice-management, revenue-cycle reporting, scheduling analytics, quality reporting, utilization-review, payer portal, case-management, and patient-access data locations and retrieval hooks.
- Adjacent-owner matrix for quality review, revenue-cycle review, coding review, payer interpretation, utilization review, clinical review, privacy/legal review, compliance review, staffing or bed-management approval, and executive disclosure signoff.

### Refusal and Return Conditions

- Missing tenant policies, jurisdiction, business unit, payer, plan, facility type, campus, service line, provider type, care setting, patient/member status, source hierarchy, system-of-record mapping, retrieval hook, action threshold, or public-reporting posture.
- Missing or conflicting eligibility, referral, authorization, service date, consent, ADT, encounter, order, discharge, charge, claim, remittance, denial, appeal, quality, utilization, patient-experience, or disclosure-control evidence.
- Public source, payer rule, tenant policy, contract, measure specification, or system conflict that materially alters the outcome.
- Requests for diagnosis, treatment planning, medical-necessity determination, licensed clinical judgment, patient-safety clearance, coding-policy interpretation, payer-policy interpretation, privacy-law interpretation, quality attestation, Hospital IQR/OQR/eCQM/HCAHPS/NHSN submission, regulatory submission, staffing or bed-management approval, or public disclosure approval.
- Requests to publish a hospital metric, benchmark, regulatory statement, clinician-level output, patient/member-level output, service-line drilldown, or causal claim without the required confidence caveats and authorized owner.

## Rollback and Recovery

- Pause tenant routing for this lane if PHI or minimum-necessary controls are bypassed, stale or conflicting source data is normalized silently, denominator or exclusion logic is omitted, authorization or referral dependency handling is skipped, or analytics outputs are used as clinical, payer, coding, privacy, certification, or disclosure decisions.
- Preserve all analytical summaries, metric specifications, data-quality exception registers, source-reconciliation notes, disclosure-risk notes, PHI handling decisions, and unresolved conflict state for post-rollback review.
- Re-enable only after source-of-truth retrieval, tenant metric dictionaries, privacy controls, clinical-versus-administrative boundaries, payer/provider dependencies, disclosure posture, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry hospitals-and-health-systems --agent health-system-analytics-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this health system analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, monitored runtime behavior, tenant-safe retrieval contracts, privacy and clinical boundary review, and a new PR that records the retained-implementation runtime separately from this spec pack.

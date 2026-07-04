# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed trusted runtime package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit housing analytics boundaries, refusal triggers, adjacent-owner routing, regulated-lane caveats, privacy and disclosure controls, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus analytics-reporting-and-disclosure plus cross-industry artifact-awareness abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and required cross-industry scenario-family coverage.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies policies, service model, jurisdiction, business unit, program, product, facility, property, project, funder, geography, program year, fiscal year, reporting period, audience, source-precedence rules, action thresholds, suppression policy, data-sharing agreements, and disclosure posture when those facts materially change the answer.
- HMIS, HDX, IDIS, DRGR, eCon Planning Suite, grants management, property management, subsidy, voucher, waitlist, referral, development pipeline, finance, loan, grant, tax credit, pro forma, GIS, parcel, zoning, permit, LIHTC, HMDA, ACS, CHAS, FHFA HPI, EDW, BI, metadata, document-control, approval, and privacy systems are retrievable at runtime.
- Tenant provides authority matrices for housing program operations, CoC data, community development grants, affordable housing compliance, LIHTC compliance, property operations, real estate development finance, mortgage lending compliance, appraisal or market valuation, fair housing/legal, privacy/data governance, public reporting, funder reporting, board reporting, and executive disclosure owners.
- Privacy, consent, low-cell suppression, public disclosure, data-sharing, and publication approval controls are available whenever outputs could expose client, applicant, tenant, household, borrower, tract-level, or otherwise sensitive housing information.

### Required Retrieval Dependencies

- Tenant policies, jurisdiction, business unit, program, property, project, funder, geography, program year, fiscal year, reporting period, service model, and intended audience.
- HMIS project and client records, HDX HIC/PIT records, CoC SPM extracts, IDIS activity/accomplishment/beneficiary/draw reports, DRGR records, eCon Planning Suite plans, CAPER outputs, CHAS and ACS records, LIHTC records, HMDA records, FHFA HPI benchmark, property management records, development pipeline records, and finance or grant records.
- Tenant metric dictionary, numerator, denominator, inclusion, exclusion, AMI or income-limit vintage, geography crosswalk, program year, source tables, refresh windows, action thresholds, suppression rules, and publication thresholds.
- Data locations and retrieval hooks for HMIS, HDX, IDIS, DRGR, eCon, grants management, property management, voucher or waitlist systems, development pipeline, finance, LIHTC compliance, HMDA or lender compliance, GIS, parcel, permit, EDW, governed BI, metadata catalog, and document-control systems.
- Adjacent-owner matrix for affordable housing compliance, CoC data, community development program operations, grants reporting, development finance, legal, fair housing, mortgage lending compliance, appraisal or valuation, privacy, public disclosure, and executive approval.

### Refusal and Return Conditions

- Missing tenant policies, jurisdiction, program, property, project, geography, source hierarchy, retrieval hook, data-sharing agreement, suppression rule, action threshold, or publication posture.
- Missing or conflicting HMIS, HDX, PIT, HIC, SPM, IDIS, DRGR, CAPER, CHAS, ACS, LIHTC, HMDA, FHFA, property, pipeline, finance, parcel, permit, or approval evidence.
- Public source, funder rule, tenant policy, jurisdictional instruction, QAP term, program manual, contract, data-sharing agreement, or system conflict that materially alters the outcome.
- Requests for eligibility determination, fair-housing interpretation, legal advice, tenant-rights judgment, program-compliance certification, CAPER certification, IDIS or DRGR certification, funding approval, HOME or CDBG draw approval, LIHTC compliance position, mortgage lending compliance, underwriting, appraisal, project feasibility, public disclosure approval, or investor-style signoff.
- Requests to publish a housing metric, benchmark, public dashboard, neighborhood ranking, displacement claim, fair-housing claim, policy claim, causal claim, forecast, borrower-level output, tenant-level output, HMIS client-level output, or low-cell geography without required confidence caveats and authorized owner.

## Rollback and Recovery

- Pause tenant routing for this lane if housing-specific source records are bypassed, stale or conflicting source data are normalized silently, denominator or geography logic is omitted, privacy or low-cell controls are skipped, or analytics outputs are used as eligibility, legal, fair-housing, compliance, funding, underwriting, appraisal, project-approval, or disclosure decisions.
- Preserve all analytical summaries, metric specifications, data-quality exception registers, source-reconciliation notes, caveat registers, disclosure-risk notes, privacy handling decisions, and unresolved conflict state for post-rollback review.
- Re-enable only after source-of-truth retrieval, tenant metric dictionaries, geography crosswalks, suppression rules, privacy controls, approval posture, housing-specific boundaries, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry housing-real-estate-development-and-community-development --agent housing-analytics-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this housing analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, monitored runtime behavior, tenant-safe retrieval contracts, privacy and disclosure boundary review, and a new PR that records the retained-implementation runtime separately from this spec pack.

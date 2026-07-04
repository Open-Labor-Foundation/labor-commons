# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed trusted runtime package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit hospitality-and-travel analytics boundaries, refusal triggers, adjacent-owner routing, clinical-versus-administrative limits, guest/traveler privacy controls, PHI controls, accessibility boundaries, fee-disclosure caveats, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus analytics-reporting-and-disclosure plus healthcare-and-care-delivery abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and required hospitality, travel, and healthcare scenario-family coverage.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies policies, service model, jurisdiction, business unit, property, brand, market, program, product, facility, provider type, payer, plan, service setting, patient or member status when applicable, reporting period, audience, source-precedence rules, and disclosure posture when those facts materially change the answer.
- PMS, CRS, RMS, channel manager, booking engine, POS, payment, folio, refund, chargeback, loyalty, CRM, guest-service, incident, event, group sales, travel operations, EDW, and BI systems are retrievable at runtime.
- EHR reporting, scheduling, referral, authorization, revenue-cycle, claims, remittance, denial, quality-reporting, utilization-review, payer, consent, privacy, and disclosure systems are retrievable when healthcare context is present.
- Tenant provides authority matrices for revenue management, guest services, reservations, accessibility, travel operations, privacy/legal, payment security, fraud or loss prevention, healthcare operations, quality reporting, revenue cycle, coding, utilization review, licensed clinical review, payer policy, compliance, public reporting, data governance, and executive disclosure owners.
- Minimum-necessary, consent, low-volume, PHI, payment-card, guest/traveler privacy, accessibility, public-reporting, and clinician, guest, traveler, or patient/member disclosure controls are available whenever outputs could expose regulated or sensitive information.

### Required Retrieval Dependencies

- Tenant policies, jurisdiction, business unit, property, brand, market, program, product, facility, provider type, payer, plan, service setting, reporting period, and intended audience.
- Room inventory, room status, accessible-room inventory, reservation, channel, group block, event, rate, promotion, folio, POS, payment, refund, chargeback, loyalty, complaint, incident, itinerary, and travel operation extracts.
- Patient or member status, eligibility, service dates, referral dependencies, authorization status, consent and privacy constraints, and documentation prerequisites where healthcare context is present.
- Encounter, scheduling, referral, authorization, charge, claim, remittance, denial, utilization-review, quality-reporting, and operational extracts where the metric touches patient, member, payer, provider, or care-transition workflow.
- Tenant metric dictionary, numerator, denominator, exclusions, source tables, attribution logic, measure references, room-inventory treatment, channel logic, comp-set posture, refresh windows, thresholds, benchmark rules, and publication thresholds.
- Adjacent-owner matrix for revenue-management review, guest-service review, reservations review, accessibility review, travel operations, payment security, privacy/legal review, quality review, revenue-cycle review, coding review, payer interpretation, utilization review, clinical review, compliance review, and executive disclosure signoff.

### Refusal and Return Conditions

- Missing tenant policies, jurisdiction, property, brand, market, payer, plan, facility type, provider type, service setting, patient/member status, room-inventory source, source hierarchy, system-of-record mapping, retrieval hook, accessibility posture, fee-disclosure posture, or public-reporting posture.
- Missing or conflicting room status, reservation, folio, channel, accessible-room, itinerary, eligibility, referral, authorization, service date, consent, encounter, charge, claim, remittance, denial, quality, utilization, or disclosure-control evidence.
- Public source, payer rule, tenant policy, contract, measure specification, accessibility obligation, fee-disclosure rule, benchmark definition, or system conflict that materially alters the outcome.
- Requests for diagnosis, treatment planning, medical-necessity determination, licensed clinical judgment, patient-safety clearance, coding-policy interpretation, payer-policy interpretation, privacy-law interpretation, accessibility-law interpretation, fee-disclosure interpretation, quality attestation, regulatory submission, pricing approval, refund approval, fraud determination, safety disposition, or public disclosure approval.
- Requests to publish a hospitality, travel, healthcare, benchmark, regulatory, investor-style, guest-facing, clinician-level, patient/member-level, or causal claim without required metric logic, confidence caveats, comparability evidence, and authorized owner.

## Rollback and Recovery

- Pause tenant routing for this lane if PHI, minimum-necessary, payment-card, guest/traveler privacy, accessibility, or disclosure controls are bypassed; stale or conflicting source data is normalized silently; denominator, room-inventory, channel, exclusion, authorization, or referral dependency logic is omitted; or analytics outputs are used as clinical, payer, coding, legal, pricing, refund, safety, certification, accessibility, or disclosure decisions.
- Preserve all analytical summaries, metric specifications, data-quality exception registers, source-reconciliation notes, disclosure-risk notes, privacy and PHI handling decisions, accessibility notes, fee-disclosure notes, and unresolved conflict state for post-rollback review.
- Re-enable only after source-of-truth retrieval, tenant metric dictionaries, privacy controls, clinical-versus-administrative boundaries, hospitality/travel dependencies, payer/provider dependencies, disclosure posture, accessibility posture, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry hospitality-and-travel --agent hospitality-analytics-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this hospitality analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, monitored runtime behavior, tenant-safe retrieval contracts, privacy and clinical boundary review, hospitality/travel source contracts, and a new PR that records the retained-implementation runtime separately from this spec pack.

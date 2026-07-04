# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit behavioral-health analytics boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus analytics-reporting-and-disclosure plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies program model, jurisdiction, payer mix, measurement year, disclosure audience, source-precedence rules, and state or grant reporting posture when those facts materially change the answer.
- EHR, claims or encounter, crisis workflow, HIE or ADT, consent-management, payer reporting, and BI or governed reporting systems are retrievable at runtime.
- Tenant provides authority matrices for behavioral-health quality, licensed clinical review, privacy and legal review, payer reporting, crisis operations, executive disclosure, and data governance owners.
- Part 2 segmentation, minimum-necessary, small-cell suppression, and disclosure-approval posture are available whenever the report could expose sensitive behavioral-health data.

### Required Retrieval Dependencies

- Program model, service line, jurisdiction, payer mix, age cohort, reporting period, and intended audience.
- Encounter, claim, assessment, care-plan, discharge, outreach, and referral records linked to the metric request.
- Crisis call, dispatch, arrival, disposition, stabilization, and handoff records when crisis metrics are in scope.
- Consent, ROI, Part 2 segmentation, minimum-necessary, and disclosure-approval artifacts.
- Measure dictionary, benchmark references, source hierarchy, denominator rules, and tenant-approved adaptations.
- Adjacent-owner matrix for clinical review, privacy and legal review, payer reporting, quality attestation, and executive disclosure signoff.

### Refusal and Return Conditions

- Missing program model, reporting period, audience, system-of-record mapping, consent posture, or benchmark comparability context.
- Incomplete encounter, claim, crisis, assessment, or disclosure-control evidence.
- Public source, state rule, payer requirement, and tenant policy conflicts that materially alter the outcome.
- Requests for diagnosis, suicide-risk judgment, treatment recommendation, legal interpretation, payer or state certification, or public disclosure approval.
- Requests to publish a behavioral-health metric or benchmark without the required confidence caveats or authorized owner.

## Rollback and Recovery

- Pause tenant routing for this lane if Part 2 or disclosure controls are being bypassed, stale or conflicting source data is being normalized silently, crisis or follow-up measures are being published without definition control, or analytics outputs are being used as clinical or certification decisions.
- Preserve all analytical briefs, reconciliation notes, disclosure-risk notes, and unresolved conflict state for post-rollback review.
- Re-enable only after source-of-truth retrieval, disclosure controls, program-model-specific policy, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry behavioral-health-and-community-care --agent behavioral-health-analytics-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this behavioral-health analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

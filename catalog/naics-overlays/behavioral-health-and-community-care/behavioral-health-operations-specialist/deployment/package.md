# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit behavioral-health operations boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies program model, site or business unit, jurisdiction, county or state program rules, payer or funding rules, EHR workflow, crisis-vendor workflow when applicable, privacy and legal escalation rules, and discharge-ownership boundaries.
- Behavioral-health EHR, scheduling or practice-management, care-management, ADT or transition notification, payer authorization, consent repository, incident or grievance tracking, and quality-reporting systems are retrievable at runtime.
- Tenant provides authority matrices for licensed clinicians, clinical supervisors, psychiatrists or medical directors, crisis teams, privacy or compliance, utilization management, quality leaders, and discharge planning.
- Jurisdiction, current episode stage, consent posture, and whether SUD-protected information is present are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Referral source, episode identifier, service model, jurisdiction, payer or funding source, and assigned team.
- Consent and ROI status, assessment and treatment-plan status, assigned clinician or care coordinator, and required intake forms.
- Scheduling records, no-show history, outreach attempts, care-coordination notes, crisis or safety plan references, and ADT or discharge notifications when applicable.
- Authorization submissions, payer correspondence, incident or grievance records, and privacy or disclosure restrictions.
- Transfer forms, discharge summary status, community referral handoffs, closure checklist items, and completion evidence.

### Refusal and Return Conditions

- Missing service model, missing or expired ROI, absent assessment or treatment-plan documentation, unclear privacy posture, unknown crisis-follow-up state, or unavailable closure evidence.
- Requests for diagnosis, risk judgment, involuntary-treatment evaluation, medication changes, crisis disposition, psychotherapy-note disclosure, privacy-law interpretation, or discharge approval.
- State, county, payer, accreditor, or tenant policy materially conflicts without explicit precedence resolution.
- Requests to disclose protected behavioral-health records or close work using generic CRM or scheduling evidence alone.

## Rollback and Recovery

- Pause tenant routing for this lane if consent or ROI controls are being bypassed, crisis-transition follow-up is being skipped, assessment or treatment-plan evidence is missing from completion logic, or operations staff are being asked to make licensed clinical decisions.
- Preserve all status summaries, completion records, exception notes, disclosure requests, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, privacy controls, service-model-specific policy, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry behavioral-health-and-community-care --agent behavioral-health-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this behavioral-health operations lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit ambulatory analytics boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus analytics-reporting-and-disclosure plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies specialty, site scope, clinician roster, attribution model, reporting year, disclosure audience, source-precedence rules, and internal peer-review posture when those facts materially change the answer.
- Scheduling, EHR encounter, charge or claims, registry, survey, provider-master, public-reporting preview, and governed BI systems are retrievable at runtime.
- Tenant provides authority matrices for ambulatory operations, quality reporting, coding, licensed clinical review, privacy and legal review, physician compensation, executive disclosure, and data governance owners.
- Minimum-necessary, clinician-level disclosure approval, peer-review release posture, and public-reporting preview controls are available whenever the report could expose identifiable clinician or patient information.

### Required Retrieval Dependencies

- Specialty, service line, location, clinician attribution model, reporting period, and intended audience.
- Schedule templates, appointment status histories, rooming or cycle-time records, and completed-visit logic linked to the metric request.
- Encounter, charge, claim, paid-claim, place-of-service, and telehealth records used to validate completed-visit and utilization truth sets.
- QCDR, qualified-registry, MIPS CQM or eCQM, QRDA, and benchmark references relevant to the requested analysis.
- CAHPS or other governed survey outputs when patient-experience metrics are in scope.
- Provider-master, PECOS, public-reporting preview, minimum-necessary, and disclosure-approval artifacts.
- Adjacent-owner matrix for quality review, coding review, clinical review, privacy and legal review, compensation review, and executive disclosure signoff.

### Refusal and Return Conditions

- Missing specialty, site, attribution, reporting period, audience, system-of-record mapping, or public-reporting posture.
- Incomplete scheduling, encounter, claim, registry, survey, or disclosure-control evidence.
- Public source, payer rule, and tenant policy conflicts that materially alter the outcome.
- Requests for diagnosis, clinical-quality judgment, coding-policy interpretation, physician-compensation decisions, CMS or payer certification, or public disclosure approval.
- Requests to publish a clinician-level metric or benchmark without the required confidence caveats or authorized owner.

## Rollback and Recovery

- Pause tenant routing for this lane if minimum-necessary or disclosure controls are being bypassed, stale or conflicting source data is being normalized silently, attribution logic is omitted from clinic metrics, or analytics outputs are being used as clinical, coding, compensation, or certification decisions.
- Preserve all analytical briefs, reconciliation notes, disclosure-risk notes, and unresolved conflict state for post-rollback review.
- Re-enable only after source-of-truth retrieval, attribution logic, disclosure controls, specialty-specific policy, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry ambulatory-and-physician-services --agent clinic-performance-analytics-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this ambulatory clinic analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

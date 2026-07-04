# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit physician-compensation operations boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies compensation model, plan documents, physician group or legal entity, academic versus community-practice posture, provider roster, payroll calendar, approval matrix, and site-specific attribution rules.
- Provider contract repository, provider master or credentialing, EHR and charge capture, professional billing, compensation workbook or reporting layer, payroll interface, and approval or ticketing systems are retrievable at runtime.
- Tenant provides authority matrices for legal or Stark review, coding and billing compliance, payroll approval, physician contracting, finance control, and service line or physician enterprise leadership.
- Practice setting, physician category, cycle stage, payer mix, supervision model, and whether faculty, APP, call-pay, or non-standard quality-credit rules apply are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Compensation plan version, contract amendment status, cycle dates, and payout cadence.
- Provider effective dates, NPI, specialty, department, site, FTE, faculty track, and supervising relationships.
- Encounter, charge, claim, denial, adjustment, payment, and finalization records.
- CMS RVU references, attribution rules, split or shared indicators, incident-to facts, teaching-physician flags, and approved exclusions.
- Collections, quality, call-pay, draw, holdback, true-up, and exception workpapers.
- Approval trail, payroll cutoff, payroll interface confirmation, and physician statement package.

### Refusal and Return Conditions

- Missing compensation plan, unclear provider roster, absent claim-finalization posture, unavailable attribution facts, missing approval path, or absent closure evidence.
- Requests for compensation-plan design, Stark or AKS interpretation, FMV or commercial-reasonableness judgment, coding override, contract amendment, or payroll release authority.
- Public guidance, tenant policy, and contract language materially conflict without explicit precedence resolution.
- Requests to process physician compensation using generic HRIS or payroll evidence alone.

## Rollback and Recovery

- Pause tenant routing for this lane if compensation cycles are being closed without provider, claim, attribution, approval, or payroll-handoff evidence, or if operations staff are being asked to make legal, coding, or payroll-release decisions.
- Preserve all status summaries, completion records, exception notes, escalation packets, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, attribution policy, approval controls, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry ambulatory-and-physician-services --agent physician-compensation-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this physician-compensation operations lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separate committed build package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit construction and field-services estimating boundaries, lifecycle states, refusal triggers, adjacent-owner routing, tenant fact requirements, and jurisdiction-aware caveats.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + construction-and-field-services abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, scenario-family coverage, and non-blocking ambiguities.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies jurisdiction, site, trade scope, drawing revision, service or project context, permit status, inspection posture, and design assumptions before the lane acts.
- Tenant provides owner maps for estimating, project controls, permitting, inspection, safety, superintendent, procurement, finance, legal, engineering, and licensed trade escalation.
- Estimating workbooks, work-order systems, project management systems, document control, permitting, inspection, safety, quote tracking, and approval systems are retrievable at runtime.
- Tenant provides approval thresholds, markup rules, contingency rules, estimate review workflow, subcontractor quote handling rules, and completion criteria whenever they narrow the public baseline.

### Required Retrieval Dependencies

- Estimate request identifier, work-order or project identifier, customer or site context, and trade or service scope.
- Current drawing set, specifications, addenda, RFIs, design clarifications, quantity takeoff location, and estimate workbook location.
- Subcontractor and vendor quote records, bid tabs, quote validity dates, assumptions, exclusions, alternates, and allowance logs.
- Permit numbers, permit status, approved plans, inspection requests, correction notices, closeout status, and turnover requirements.
- Site walk notes, photos, access restrictions, outage windows, safety observations, stop-work notices, and schedule constraints.
- Tenant source-precedence rules, jurisdiction overlays, approval thresholds, and escalation thresholds.

### Regulated-Lane Caveats

- Public permit, inspection, safety, and estimating guidance provide the baseline, but state-plan, local-code, customer-site, contract, and tenant requirements may be stricter and must win when they materially change the answer.
- The lane supports estimate execution and evidence packaging; it does not become the authority having jurisdiction, a code official, legal counsel, the engineer of record, the licensed trade authority, procurement award authority, or the final financial approver.
- Permit, inspection, and estimate approval guidance is jurisdiction-sensitive and tenant-sensitive. If jurisdiction, contract form, or approval matrix is missing, the lane must stop short of case-specific conclusions.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or missing or stale estimate, permit, inspection, quote, design, or site-condition evidence that would change the outcome.
- Requests for legal interpretation, permit approval, code interpretation, licensed trade signoff, engineering design judgment, regulator-facing work, contract award, budget approval, contingency approval, or final change-order approval.
- Changed site conditions, safety incidents, failed inspections, or unresolved policy conflicts that require safety, permitting, inspection, design, procurement, finance, or trade authority.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported estimate closure, fabricated quote support, unsupported permit-sensitive pricing, or authority overreach is detected.
- Preserve estimate packages, exception logs, evidence-gap notes, routing packets, and low-confidence escalations for post-rollback review.
- Re-enable only after source-of-truth retrieval, estimate lifecycle handling, permit and inspection dependency checks, changed-condition handling, and adjacent-authority routing are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this construction and field-services estimating lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime-specific materialization metadata, and a new PR that records the retained-implementation runtime separately from this spec pack.


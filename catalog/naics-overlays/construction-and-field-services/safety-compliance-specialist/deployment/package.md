# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit construction and field-services safety-compliance boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and jurisdiction-aware caveats.
- `evaluation/functionality-map.json` covering shared + compliance-controls-and-governance + construction-and-field-services abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies jurisdiction, business unit, site type, trade scope, permit status, inspection history, and active systems of record before the lane acts.
- Tenant provides owner maps for superintendent, permitting, inspection, safety leadership, project controls, legal, engineering, and licensed trade escalation.
- Field service, project management, work order, permitting, inspection, scheduling, document control, and safety systems are retrievable at runtime.
- Tenant provides its stricter site rules, pretask evidence requirements, subcontractor controls, permit pulling rules, and closeout approval thresholds whenever they narrow the public baseline.

### Required Retrieval Dependencies

- Site location, customer-site context, facility or job identifier, work-order identifier, and trade scope.
- Permit numbers, permit status, inspection requests, deficiency notices, final-signoff requirements, and closeout status.
- JHAs, AHAs, pretask plans, training records, competent-person or SSHO designations, observations, incident logs, and corrective actions.
- Subcontractor roster, sequencing or schedule look-aheads, change orders, asset or installation evidence, and customer or owner constraints.
- Tenant source-precedence rules, state-plan or local authority overlays, and escalation thresholds.

### Regulated-Lane Caveats

- Public OSHA and public-owner guidance provide the baseline, but state-plan, local-code, customer-site, and tenant requirements may be stricter and must win when they materially change the answer.
- The lane supports compliance handling and review preparation; it does not become the authority having jurisdiction, an OSHA representative, legal counsel, the engineer of record, or the licensed trade authority.
- Permit, inspection, and closeout guidance must be treated as jurisdiction-sensitive. If the tenant cannot supply jurisdiction context, the lane must stop short of case-specific conclusions.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or missing or stale permit, inspection, hazard-analysis, or closeout evidence that would change the outcome.
- Requests for legal interpretation, regulator negotiation, permit approval, code interpretation, licensed trade signoff, engineering design judgment, or formal compliance certification.
- Changed site conditions, incidents, failed inspections, or unresolved policy conflicts that require safety leadership, permitting, inspection, legal, or trade authority.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsafe progression recommendations, unsupported signoff language, or jurisdiction-blind answers are detected.
- Preserve all control matrices, evidence-gap notes, routing packets, and low-confidence escalations for post-rollback review.
- Re-enable only after source-of-truth retrieval, jurisdiction handling, permit and inspection dependency checks, and adjacent-authority routing are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this construction and field-services safety-compliance lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

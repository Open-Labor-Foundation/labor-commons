# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and committed retrieval wiring.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit industrial construction safety boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and jurisdiction-aware caveats.
- `evaluation/functionality-map.json` covering shared + quality-safety-and-assurance + construction-and-field-services abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, human verification, and complete functionality coverage.

### Runtime Assumptions

- Tenant supplies jurisdiction, business unit, facility type, site conditions, trade scope, permit status, inspection history, and active systems of record before the lane acts.
- Tenant provides owner maps for superintendent, permitting, inspection, safety leadership, project controls, legal, engineering, and licensed-trade escalation.
- Field service, project management, work order, permitting, inspection, scheduling, document control, and safety systems are retrievable at runtime.
- Tenant provides stricter facility permit-to-work rules, outage and shutdown controls, dual-signature requirements, subcontractor controls, and turnover thresholds whenever they narrow the public baseline.

### Required Retrieval Dependencies

- Site location, facility or job identifier, work-order identifier, trade scope, and current operating constraints.
- Permit numbers, permit status, permit-to-work packet state, inspection requests, deficiency notices, hold records, and turnover or closeout status.
- JSAs, AHAs, pretask plans, observations, incident logs, training records, qualifications, isolation records, and corrective actions.
- Subcontractor roster, schedule look-aheads, change orders, outage windows, customer-site restrictions, and installation evidence.
- Tenant source-precedence rules, state-plan or local authority overlays, and safety escalation thresholds.

### Regulated-Lane Caveats

- Public OSHA and public-owner guidance provide the baseline, but state-plan, local-code, customer-site, and tenant requirements may be stricter and must win when they materially change the answer.
- The lane supports safety handling and review preparation; it does not become the authority having jurisdiction, an OSHA representative, legal counsel, the engineer of record, or the licensed trade authority.
- Permit, inspection, and closeout guidance must be treated as jurisdiction-sensitive. If the tenant cannot supply jurisdiction context, the lane must stop short of case-specific conclusions.
- Industrial operating facilities often impose stricter permit-to-work, shutdown, and SIMOPS controls than the public baseline. Those overlays must be retrieved rather than inferred.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or missing or stale permit, inspection, hazard-analysis, incident, or closeout evidence that would change the outcome.
- Requests for legal interpretation, regulator negotiation, permit approval, code interpretation, licensed trade signoff, engineering design judgment, or formal safety certification.
- Changed site conditions, repeat incidents, failed inspections, unresolved holds, or policy conflicts that require safety leadership, permitting, inspection, legal, or trade authority.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsafe progression recommendations, unsupported signoff language, or jurisdiction-blind answers are detected.
- Preserve all safety summaries, hold records, incident packets, blocker notes, and low-confidence escalations for post-rollback review.
- Re-enable only after source-of-truth retrieval, jurisdiction handling, permit and inspection dependency checks, and adjacent-authority routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry commercial-and-industrial-construction --agent industrial-safety-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this industrial construction safety lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, retrieval wiring for tenant systems, and a new PR that records the retained-implementation runtime separately from this spec pack.

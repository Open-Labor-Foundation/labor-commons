# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit spa execution boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all execution-processing-and-fulfillment abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies service menus, appointment states, room-turn SOPs, contraindication-routing rules, late-arrival and minors policies, and closure criteria for spa workflows.
- Booking, CRM, POS, document, facility, maintenance, sanitation, and incident systems are retrievable at runtime.
- Tenant provides the current jurisdiction, facility context, wet-area or hydrotherapy inventory, systems-of-record map, and authority routing that make the lane materially different from generic service operations.
- Tenant provides stricter local controls for med-spa routing, sanitation, blood exposure, room closure, guest recovery, and hydrotherapy-area reopening when those controls narrow the public baseline.

### Required Retrieval Dependencies

- Current service menu, appointment-state taxonomy, waitlist and reschedule rules, late-arrival policy, minors policy, and service-recovery rules.
- Intake, consent, waiver, allergy, contraindication-routing, and escalation SOPs.
- Treatment-room turnover checklists, linen status, reusable-tool cleaning records, foot-spa basin cleaning logs, and designated disinfectant inventories with SDS access.
- Facility maintenance tickets, wet-area readiness logs, incident reports, staff assignment rosters, and completion confirmations.
- Adjacent-owner contact paths for licensed practitioners, med-spa leadership, facilities, safety, and customer-service escalation.

### Regulated-Lane Caveats

- TDLR sources anchor cosmetology-style spa establishment controls, but tenant jurisdiction retrieval is required before applying local licensing, sanitation, or scope-of-practice conclusions outside that public baseline.
- OSHA and EPA sources constrain worker-safety and disinfection handling, but tenant service mix determines which chemicals, tools, and room-turn controls are actionable in lane.
- CDC MAHC applies only when the tenant operates hydrotherapy or aquatic spa facilities; do not generalize it to dry-service-only tenants.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory booking, sanitation, facility, or completion evidence.
- Requests for medical-spa approval, clinical suitability judgment, legal interpretation, formal safety signoff, or policy override.
- Requests to mark work complete without evidence-backed closure.
- Public baseline and tenant or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported med-spa answers, sanitation shortcuts, blood-exposure mishandling, or premature closure behaviors are detected.
- Preserve execution status updates, completion records, exception packets, and handoff notes for post-rollback review.
- Re-enable only after sanitation-boundary handling, tenant adaptation logic, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry beauty-wellness-and-personal-care --agent spa-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this spa execution lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.

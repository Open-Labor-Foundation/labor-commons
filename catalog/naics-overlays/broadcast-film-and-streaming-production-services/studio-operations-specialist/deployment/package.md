# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit studio-operations boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for legal rights clearance, labor-relations interpretation, payroll approval, facilities or engineering signoff, safety escalation, and production-management escalation.
- Production scheduling, stage-booking, permit, audience-management, talent-onboarding, safety, and wrap systems are retrievable.
- Tenant provides the governing local permit matrix, venue rules, guild agreement extracts, release templates, delivery checklist, and adjacent-owner map.
- Tenant-specific call-sheet formats, lifecycle states, and evidence references are available at runtime.

### Required Retrieval Dependencies

- Production title, shoot date, unit, stage or venue identifier, and current lifecycle state.
- Current call sheet, booking calendar, permit package, insurance evidence, and venue or facility rule set.
- Audience manifests, cast lists, holding plans, contact sheets, releases, waivers, and applicable time-report or staffing records.
- Safety bulletins, risk assessments, incident notes, wrap checklist items, and delivery or handoff targets when completion is requested.

### Regulated-Lane Caveats

- The lane is constrained by jurisdiction-specific permit rules, guild paperwork, labor handling, and soundstage or production-location safety controls; it must not improvise around those dependencies.
- Minor-performer and higher-risk production scenarios require stricter evidence and often a different owner.
- Runtime remains `specification-based`; this package does not claim a retained-implementation implementation.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory schedule, venue, permit, release, or closeout status.
- Requests for legal interpretation, rights clearance, payroll approval, labor-relations judgment, engineering signoff, special-effects approval, or fire-life-safety signoff.
- Unresolved permit, venue, minor-performer, safety, or rights conflicts that materially change the next action.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory stage-readiness, release, permit, or closeout responses are detected.
- Preserve all execution summaries, exception notes, completion records, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed for stage, audience, talent, rights, and venue workflows.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this studio-operations lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

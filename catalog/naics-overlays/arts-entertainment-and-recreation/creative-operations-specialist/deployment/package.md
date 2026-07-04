# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separate committed build.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit creative-operations boundaries, refusal triggers, adjacent-owner routing, lifecycle states, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and tracked ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies approval chains for brand, legal, pricing, accessibility, partner, and channel review.
- DAM or MAM, CMS, ad-delivery, ticketing or booking, CRM, service-desk, and payment or refund systems are retrievable.
- Tenant provides guest services, front office, pricing or revenue, fraud or loss-prevention, operations, and safety escalation owners.
- Tenant-specific offer governance, venue calendar, program context, service model, and proof-of-launch expectations are available at runtime.

### Required Retrieval Dependencies

- Business unit, facility, event, attraction, or program identifiers.
- Campaign brief, work order, trafficking sheet, approval history, creative identifiers, and channel specs.
- Ticketing, booking, reservation, order, promotion, pricing-rule, refund-policy, and guest-impact artifacts.
- Publish logs, screenshots, publisher acceptance records, email send confirmations, and CMS or ad-server evidence needed for closure.

## Regulated-Lane Caveats

- Creative operations handling is not pricing authority, refund authority, fraud investigation, venue-security command, or legal signoff.
- FTC and DOJ public baselines constrain price disclosure, accessibility language, and truth-in-advertising posture but do not replace stricter tenant, jurisdiction, or partner requirements.
- Refund-sensitive, chargeback-sensitive, and suspicious-ordering cases require escalation when they materially change the safe answer or guest communication posture.

## Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory booking, delivery, approval, or completion evidence.
- Requests for price or fee override, refund promises, accessibility-policy exception, fraud disposition, safety signoff, or legal approval.
- Unresolved guest-harm, loss-prevention, or venue-security indicators.
- Public guidance, partner specs, and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory offer, approval, or completion responses are detected.
- Preserve all execution summaries, completion records, exception notes, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, tenant precedence rules, and owner routing are revalidated.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows the lane is common enough to justify a maintained build rather than just-in-time materialization.
- Promotion requires a new PR with trusted runtime assets, refreshed validation evidence, updated readiness metadata, and explicit separation between this validated spec pack and the retained implementation claim.

# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit sponsorship-activation boundaries, refusal triggers, adjacent-owner routing, lifecycle states, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies sponsor agreement templates, benefit matrices, approval thresholds, makegood limits, ticketing and hospitality rules, and venue-specific activation constraints.
- CRM, sponsorship tracker, ticketing, booking, credentialing, POS or redemption, service-desk, inventory, and incident systems are retrievable.
- Tenant provides guest-services, front-office, pricing or revenue, fraud or loss-prevention, and operations owners.
- Venue- or promoter-specific rules for screening, access, prohibited items, alcohol sampling, vendor load-in, and guest communication are available at runtime.

### Required Retrieval Dependencies

- Sponsor, event, venue, jurisdiction, and agreement-version identifiers.
- Activation brief, benefit grid, schedule, placement plan, art-approval state, staffing assignment, and proof-of-performance requirements.
- Ticketing, hospitality, credentialing, refund, payment, and guest-impact records when the request touches customer-facing outcomes.
- Tenant policy extracts covering ticket offers, makegoods, refunds, access zones, escalation owners, and security or fraud handling.

### Regulated-Lane Caveats

- The lane is constrained by consumer-protection, ticketing, payment, venue-security, and event-access rules; it must not improvise around ticket pricing, refund, access, or fraud-sensitive requirements.
- Guest-facing communication must remain bounded when legal, security, safety, loss-prevention, or pricing authority is present.
- Runtime remains `specification-based`; this package does not claim a retained-implementation implementation.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems-of-record access, or stale or contradictory sponsor, venue, ticketing, credentialing, or completion records.
- Requests for pricing override, refund or makegood approval, contract interpretation, fraud adjudication, security signoff, or executive exception authority.
- Unresolved ticketing-fraud, credential misuse, screening, or public-source-versus-tenant-policy conflict indicators.
- Public guidance and tenant, venue, league, or promoter policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory sponsor, ticketing, credentialing, or proof-of-performance responses are detected.
- Preserve all request summaries, guest-impact notes, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed for ticketing, guest-service, credentialing, and activation-completion workflows.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this sponsorship-activation lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.


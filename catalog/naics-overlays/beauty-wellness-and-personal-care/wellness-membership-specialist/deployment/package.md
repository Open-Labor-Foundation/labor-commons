# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit wellness-membership boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for cancellations, freezes, refunds, complimentary credits, chargeback routing, incident handling, and licensed-service or med-spa escalation.
- Membership CRM, POS or subscription, booking, payment, agreement, provider-roster, and complaint systems are retrievable.
- Tenant provides spa or club operations, billing, licensed-service, med-spa clinical, compliance, and incident-response owners.
- Tenant-specific agreement templates, service catalog, booking rules, intake and waiver requirements, pricing and promotion terms, and communication templates are available at runtime.

### Required Retrieval Dependencies

- Member, location, jurisdiction, channel, and service-category identifiers.
- Membership agreement version, payment authorization state, booking and attendance references, and service-credit or package balance records.
- Waiver, guest-history, or pre-activity screening completion plus restriction or provider-assignment notes when relevant.
- Property-specific cancellation, freeze, refund, transfer, and recurring-payment controls where the request touches member-impact outcomes.

### Regulated-Lane Caveats

- The lane is constrained by jurisdiction-specific consumer-protection, health-club, payment-card, licensure, and medical-spa rules; it must not improvise around cancellation, payment, or treatment-boundary requirements.
- Member-facing communication must remain bounded when legal, licensed-practice, med-spa, chargeback, or incident-sensitive handling is present.
- Runtime remains `specification-based`; this package does not claim a retained-implementation implementation.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory agreement, payment, booking, waiver, or restriction status.
- Requests for legal interpretation, pricing override, refund approval, chargeback adjudication, treatment-suitability guidance, practitioner-scope decisions, or incident signoff.
- Unresolved recurring-payment control, licensed-service, med-spa, or public-source versus tenant-policy conflict indicators.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory agreement, payment, booking, or licensed-service responses are detected.
- Preserve all request summaries, communication logs, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed for cancellation, recurring-payment, waiver, and licensed-service workflows.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this wellness-membership lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

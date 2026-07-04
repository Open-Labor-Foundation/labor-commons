# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separate committed build.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit commercial-banking boundaries, refusal triggers, adjacent-owner routing, lifecycle states, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and non-blocking ambiguity tracking.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for legal-entity documentation, signer changes, entitlement maintenance, callback rules, approval thresholds, cutoff handling, and payment-template ownership.
- Core banking, CIF, treasury-management, digital-banking, ACH or wire, case-management, document-imaging, fraud-monitoring, AML-review, and GL or reconciliation systems are retrievable.
- Tenant provides fraud, AML, treasury operations, legal or compliance, underwriting or credit, loan servicing, and servicing-operations escalation owners.
- Tenant-specific product mappings, payment rails, jurisdiction rules, and commercial-banking service constraints are available at runtime.

### Required Retrieval Dependencies

- Legal-entity, account, relationship, jurisdiction, and service-request identifiers.
- Board resolutions, secretary certificates, signature cards, signer matrices, beneficial-owner or CDD posture, and approval history.
- Treasury portal, entitlement, ACH company ID, wire template, callback, payment-hub, servicing-note, and customer-notice artifacts.
- Product, channel, payment-rail, approval-threshold, and source-precedence policy references where the request touches control, completion, or customer-impact outcomes.

## Regulated-Lane Caveats

- Commercial banking operations handling is not legal interpretation of corporate authority documents, not credit approval, not underwriting, and not treasury-settlement decisioning.
- Current FinCEN CDD updates may differ from tenant policy on beneficial-owner refresh posture; runtime must retrieve tenant precedence instead of assuming a universal rule.
- Fraud, AML, suspicious-activity, and customer-impact cases require escalation when they materially change the safe answer or communication posture.

## Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory authority, payment, or completion status.
- Requests for legal interpretation, credit approval, cutoff or control override, suspicious-activity disclosure, or treasury-settlement authority.
- Unresolved fraud, AML, documentary-authority, or reconciliation indicators.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory authority, entitlement, or completion responses are detected.
- Preserve all execution summaries, completion records, exception notes, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, tenant precedence rules, and owner routing are revalidated.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows the lane is common enough to justify a maintained build rather than just-in-time materialization.
- Promotion requires a new PR with trusted runtime assets, refreshed validation evidence, updated readiness metadata, and explicit separation between this validated spec pack and the retained implementation claim.

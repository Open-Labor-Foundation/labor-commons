# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit customer-account-servicing boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + service-support-and-resolution + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for fee waivers, refunds, compensation, hardship exceptions, reinstatements, complaint escalation, and account-decision ownership.
- Core account, loan-servicing, policy-administration, payment-processing, complaint-management, fraud-monitoring, document-management, and GL or reconciliation systems are retrievable.
- Tenant provides fraud, AML, underwriting, legal or compliance, claims, and servicing-operations escalation owners.
- Tenant-specific communication constraints, approval thresholds, account or policy terms, payment rules, and customer-notice templates are available at runtime.

### Required Retrieval Dependencies

- Customer, account, policy, payment, transaction, and case identifiers.
- Account profile, servicing history, payment history, statements, notices, and communication logs.
- ACH, EFT, billing-error, complaint, fraud, AML, and approval-history artifacts.
- Product, jurisdiction, account-agreement, policy-term, fee, refund, hardship, and disclosure policy references where the request touches consumer-impact outcomes.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory account, payment, policy, or transaction status.
- Requests for legal interpretation, underwriting, claims decisions, suspicious-activity disclosure, or approval of refunds, waivers, reinstatements, reopenings, or discretionary exceptions.
- Unresolved fraud, AML, suspicious-activity, privacy, or reconciliation indicators.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory servicing, complaint, or payment responses are detected.
- Preserve all request summaries, communication logs, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this customer-account-servicing lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

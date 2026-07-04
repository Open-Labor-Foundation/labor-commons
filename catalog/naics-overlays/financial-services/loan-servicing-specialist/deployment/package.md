# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit loan-servicing boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + service-support-and-resolution + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies product taxonomy, investor or guarantor mapping, approval matrices for payment reversals and delinquency corrections, and escalation ownership for servicing, loss mitigation, default, foreclosure, bankruptcy, fraud, AML, and legal.
- Loan servicing, payment, escrow, document-management, complaint-management, and default-tracking systems are retrievable.
- Tenant provides communication constraints, foreclosure and bankruptcy procedures, military-protection handling rules, and state or jurisdiction overlays that materially affect borrower-impacting outcomes.
- Nonmortgage loan products require tenant-provided product rules rather than mortgage-rule inference.

### Required Retrieval Dependencies

- Borrower, loan, property, product, jurisdiction, investor or guarantor, and servicing-transfer identifiers.
- Loan terms, payment history, escrow ledger, suspense or unapplied-funds balances, payoff data, statements, and servicing notes.
- Notices of error, requests for information, complaints, loss-mitigation packages, decision notices, approval history, and communication logs.
- Fraud, AML, identity-theft, bankruptcy, foreclosure, SCRA, and legal-hold indicators when present.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory loan, payment, escrow, or default status.
- Requests for legal interpretation, modification approval, delinquency cure overrides, foreclosure decisions, bankruptcy treatment, or suspicious-activity disclosure.
- Unresolved fraud, AML, identity-theft, consumer-harm, privacy, or reconciliation indicators.
- Public guidance and tenant or investor policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory payment, delinquency, or foreclosure-sensitive responses are detected.
- Preserve all request summaries, communication logs, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, approval routing, and policy precedence are confirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this loan-servicing lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.


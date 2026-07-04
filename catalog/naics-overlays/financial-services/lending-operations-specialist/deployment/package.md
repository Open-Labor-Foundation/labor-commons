# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit lending-servicing boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for payment exceptions, fee waivers, payoff approvals, collateral tolerances, transfer ownership, and borrower-impact escalation.
- Loan servicing, payment, document or collateral, fraud-monitoring, case-management, and GL or reconciliation systems are retrievable.
- Tenant provides fraud, AML, underwriting, loss-mitigation, collections, servicing-operations, and legal-compliance escalation owners.
- Tenant-specific investor rules, state-law overlays, bankruptcy and SCRA procedures, and communication constraints are available at runtime.

### Required Retrieval Dependencies

- Borrower, loan, product, investor, jurisdiction, and collateral identifiers.
- Loan boarding checklist, transfer packet, note or collateral status, and servicing notes.
- Payment history, suspense ledger, ACH or wire references, escrow and payoff records, and approval history.
- Product, investor, jurisdiction, borrower-protection, bankruptcy, SCRA, and exception-routing policy references where the request touches borrower-impact outcomes.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory loan, payment, transfer, collateral, or payoff status.
- Requests for legal interpretation, underwriting, modification approval, lien release approval, suspicious-activity disclosure, or backdated payment crediting.
- Unresolved fraud, AML, borrower-protection, privacy, or reconciliation indicators.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory payment, payoff, or transfer responses are detected.
- Preserve all execution summaries, borrower communications, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this lending-servicing lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

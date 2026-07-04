# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit retail-banking support boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + service-support-and-resolution + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for fee waivers, hold exceptions, dispute routing, complaint escalation, and account-approval ownership.
- Core banking, card-processing, ACH, complaint-management, fraud-monitoring, document-management, and GL or reconciliation systems are retrievable.
- Tenant provides fraud, AML, legal/compliance, underwriting, and deposit-operations escalation owners.
- Tenant-specific communication constraints, approval thresholds, account agreements, and product rules are available at runtime.

### Required Retrieval Dependencies

- Customer, account, CIF, branch, card, and transaction identifiers.
- Core ledger history, memo-post records, hold notices, statements, and servicing notes.
- Card, ACH, dispute, stop-payment, complaint, fraud, AML, and approval-history artifacts.
- Product, jurisdiction, account-agreement, fee, and funds-availability policy references where the request touches consumer-impact outcomes.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory account, transaction, or dispute status.
- Requests for legal interpretation, underwriting, suspicious-activity disclosure, or approval of fee reversals, hold releases, or account decisions.
- Unresolved fraud, AML, suspicious-activity, privacy, or reconciliation indicators.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory dispute, hold, or complaint responses are detected.
- Preserve all request summaries, communication logs, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this retail-banking support lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

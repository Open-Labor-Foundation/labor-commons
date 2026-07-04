# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit broker-client service boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + service-support-and-resolution + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for fee credits, refunds, complaint handling, and post-entry routing.
- ACE or equivalent customs filing status, CRM/case records, document management, and billing or GL systems are retrievable.
- Tenant provides sanctions, fraud, AML, and legal/compliance escalation owners.
- Tenant-specific communication constraints and approval thresholds are available at runtime.

### Required Retrieval Dependencies

- Importer of record, client, shipment, and entry identifiers.
- Power-of-attorney state, broker service notes, and prior communication threads.
- Entry summary, notice, invoice, document-gap, and billing or remittance artifacts.
- Payment, GL, dispute, fraud, sanctions, and approval-history records where the request touches money movement or exception handling.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale/contradictory entry or payment status.
- Requests for legal interpretation, sanctions advice, or approval of refunds, credits, or corrective filings.
- Unresolved TBML, sanctions, fraud, consumer-impact, or reconciliation indicators.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory status responses or unsupported exception closures are detected.
- Preserve all request summaries, communication logs, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this broker-client lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

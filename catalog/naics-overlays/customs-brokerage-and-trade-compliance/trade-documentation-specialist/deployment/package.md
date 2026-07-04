# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff and sustained production validation.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit boundary control, refusal triggers, and adjacent-owner handoff rules.
- `evaluation/functionality-map.json` covering shared + quality-safety-and-assurance + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with sources, workflow stages, artifact/system definitions, decision boundaries, and failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage and validated gates.

### Runtime Assumptions

- Tenant dictionary containing term normalization and route ownership.
- Case-management, policy, banking/payment, core banking, and document repositories accessible.
- Tenant-specific policy precedence for hold/release and dispute handling.
- Formal QA, legal/compliance, fraud, and AML owner map for escalation.

### Required Retrieval Dependencies

- Account, policy, transaction, claims, and payment identifiers.
- Invoice/billing documents, customs filings, and shipment artifacts.
- Reconciliation and ledger extracts from core systems and payment systems.
- Dispute, notices, and customer communication threads.

### Refusal and Return Conditions

- Missing tenant facts or unavailable record system of record.
- Public-source and tenant-policy conflict without explicit precedence resolution.
- Requests asking for legal, financial-approval, policy override, or safety-critical finality.
- Inconsistent disclosures/reconciliation without corrected evidence.

## Rollback and Recovery

- Pause routing for affected tenant for the lane on repeated unresolved contradictions.
- Preserve all evidence packets, assumptions, and escalation traces for post-rollback review.
- Re-enable only after retrieval dependencies and policy precedence are restored.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until explicit governance approval for separate retained-implementation package.
- Promote only after sustained evidence stability and no blocking unresolved ambiguity over measured production window.
- Promotion requires formal validation signoff and updated issue linkage.

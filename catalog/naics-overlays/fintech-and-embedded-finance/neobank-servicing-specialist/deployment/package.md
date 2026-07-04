# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit neobank servicing boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies sponsor-bank maps, program identifiers, product-model labels, approval matrices, dispute policies, complaint SLAs, communication templates, and escalation owners.
- Sponsor-bank core, middleware ledger, processor, dispute, complaint, KYC, fraud, AML, and document systems are retrievable at runtime.
- Tenant provides authority matrices for sponsor-bank operations, fraud, AML, disputes operations, compliance, legal, and risk-exception decisions.
- Jurisdiction, named bank, product model, and current disclosure set are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Customer, account, card, wallet, transaction, complaint, and case identifiers.
- Sponsor-bank, program, jurisdiction, and product-model context including whether the account is DDA, prepaid, or FBO-based.
- Sponsor-bank core records, middleware ledger traces, processor events, dispute history, complaint notes, and communication logs.
- Deposit-insurance disclosures, named-bank references, digital-sign assets, pass-through support records, and account-agreement references where relevant.
- KYC, fraud, AML, approval-history, and account-restriction artifacts when the request touches sensitive boundaries.

### Refusal and Return Conditions

- Missing sponsor-bank, program, named-bank, product-model, or authoritative system-of-record evidence.
- Requests for legal interpretation, insured-status certification, manual credits, early funds release, account reopening approval, or suspicious-activity disclosure.
- Unresolved fraud, AML, suspicious-activity, privacy, or dispute-state indicators.
- Public guidance and tenant or sponsor-bank policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if sponsor-bank, ledger, and processor states are routinely contradictory, if unsupported insured-status claims are being communicated, or if third-party dispute handling is bypassing Regulation E investigation requirements.
- Preserve all request summaries, communication logs, evidence maps, complaint histories, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, sponsor-bank authority routing, deposit-insurance communication controls, and adjacent-lane escalation paths are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry fintech-and-embedded-finance --agent neobank-servicing-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this neobank servicing lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

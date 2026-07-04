# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated usage, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit metric-definition ownership, refusal triggers, adjacent-lane routing, and tenant-fact prerequisites.
- `evaluation/functionality-map.json` covering all shared abilities plus analytics-reporting-and-disclosure and cross-industry abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems, decision boundaries, scenario families, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario and functionality coverage.

### Runtime Assumptions

- Tenant supplies jurisdiction, product and payment-rail scope, sponsor-bank or charter context, metric dictionary, and source-precedence rules.
- Tenant systems expose retrieval hooks for processor events, settlements, ledgers, complaints, consent logs, servicing data, and partner-governance artifacts.
- Tenant provides approval thresholds and escalation owners for fraud, AML, compliance, underwriting, finance, partner-bank governance, and legal review.
- Runtime can log assumptions, low-confidence states, and evidence lineage for each report package.

### Required Retrieval Dependencies

- Program, partner, bank, processor, merchant, customer, and transaction identifiers.
- Authorization, clearing, settlement, refund, reversal, fee, reserve, and general-ledger records.
- ACH return reports, chargeback and dispute files, complaint records, consent or revocation logs, and servicing extracts.
- Bank-reported metrics, reconciliation workpapers, disclosure approvals, and adjacent-specialist owner maps.

### Refusal and Return Conditions

- Required tenant facts, source context, or systems of record are missing and would change the answer.
- Public-source and tenant-policy interpretation conflict without explicit precedence resolution.
- Request requires legal advice, compliance attestation, bank-policy override, financial approval, fraud or AML adjudication, underwriting decision, or final disclosure signoff.
- Metric definitions, denominators, refresh assumptions, or reconciliations remain unresolved.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated stale-data, source-conflict, sensitive-disclosure, or unsupported-publication incidents appear.
- Preserve all report packages, caveat logs, evidence mappings, and escalation traces for rollback review.
- Re-enable only after retrieval dependencies, source precedence, and escalation ownership are restored and retested.

## retained-implementation Promotion Plan

- Keep `specification-based` execution active until a separate retained-implementation package is intentionally created and merged.
- Promote only if usage proves common enough to justify a built runtime and production evidence shows stable low-risk behavior.
- Promotion requires governance review, updated validation evidence, and explicit release documentation distinct from this spec pack.

# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated usage, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit metric-definition ownership, refusal triggers, adjacent-lane routing, and tenant-fact prerequisites.
- `evaluation/functionality-map.json` covering all shared abilities plus analytics-reporting-and-disclosure and financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems, decision boundaries, scenario families, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario and functionality coverage.

### Runtime Assumptions

- Tenant supplies jurisdiction, product or business-unit context, metric dictionary, and source-precedence rules.
- Tenant systems expose retrieval hooks for ACE or broker data, ERP or finance data, reconciliation outputs, servicing notes, and customer communication logs.
- Tenant provides approval thresholds and escalation owners for fraud, AML, legal/compliance, servicing, and trade compliance.
- Runtime can log assumptions, low-confidence states, and evidence lineage for each report package.

### Required Retrieval Dependencies

- Entry, entry-summary, broker, shipment, port, and importer identifiers.
- Customs filings, CBP Form 7501 references, PSC or drawback records, valuation evidence, and hold history.
- Reconciliation, payment, duty, fee, and general-ledger extracts.
- KYC, AML, sanctions, fraud, dispute, servicing, and approval-history artifacts.

### Refusal and Return Conditions

- Required tenant facts, source context, or systems of record are missing and would change the answer.
- Public-source and tenant-policy interpretation conflict without explicit precedence resolution.
- Request requires legal advice, policy override, financial approval, fraud adjudication, or final disclosure signoff.
- Metric definitions, denominators, refresh assumptions, or reconciliations remain unresolved.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated stale-data, source-conflict, or unsupported-disclosure incidents appear.
- Preserve all report packages, caveat logs, evidence mappings, and escalation traces for rollback review.
- Re-enable only after retrieval dependencies, source precedence, and escalation ownership are restored and retested.

## retained-implementation Promotion Plan

- Keep `specification-based` execution active until a separate retained-implementation package is intentionally created and merged.
- Promote only if usage proves common enough to justify a built runtime and production evidence shows stable low-risk behavior.
- Promotion requires governance review, updated validation evidence, and explicit release documentation distinct from this spec pack.

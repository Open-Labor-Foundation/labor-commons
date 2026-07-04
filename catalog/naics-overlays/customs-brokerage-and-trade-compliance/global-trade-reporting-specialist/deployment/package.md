# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated usage, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit reporting ownership, refusal triggers, adjacent-lane routing, and tenant-fact prerequisites.
- `evaluation/functionality-map.json` covering all shared abilities plus quality-safety-and-assurance and financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems, decision boundaries, scenario families, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario and functionality coverage.

### Runtime Assumptions

- Tenant supplies jurisdiction, business unit, reporting calendar, source-precedence rules, and approval thresholds.
- Tenant systems expose retrieval hooks for ACE, ABI, AES, broker, finance, reconciliation, servicing, and communication records.
- Tenant provides escalation owners for fraud, AML, sanctions, legal/compliance, servicing, and QA or release authority.
- Runtime can log assumptions, low-confidence states, evidence lineage, and hold or release rationale for every reporting package.

### Required Retrieval Dependencies

- Importer, exporter, broker, entry, shipment, port, and filing identifiers.
- Entry-summary, amendment, post-summary correction, AES, and report-universe references.
- Reconciliation, remittance, duty, fee, settlement, and general-ledger extracts.
- KYC, AML, sanctions, fraud, dispute, servicing, approval-history, and communication artifacts.

### Refusal and Return Conditions

- Required tenant facts, source context, or systems of record are missing and would change the answer.
- Public-source and tenant-policy interpretation conflict without explicit precedence resolution.
- Request requires legal advice, policy override, final approval, regulator-facing representation, fraud adjudication, or AML closure.
- Reporting tie-outs, filing completeness, correction windows, or holds remain unresolved.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated source-conflict, late-filing, sanctions-sensitive, or unsupported-disclosure incidents appear.
- Preserve all reporting packages, caveat logs, evidence mappings, hold decisions, and escalation traces for rollback review.
- Re-enable only after retrieval dependencies, source precedence, escalation ownership, and recurring-defect remediation are restored and retested.

## retained-implementation Promotion Plan

- Keep `specification-based` execution active until a separate retained-implementation package is intentionally created and merged.
- Promote only if usage proves common enough to justify a built runtime and production evidence shows stable low-risk behavior.
- Promotion requires governance review, updated validation evidence, and explicit release documentation distinct from this spec pack.

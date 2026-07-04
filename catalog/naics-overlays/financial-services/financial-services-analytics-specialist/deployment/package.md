# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated usage, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit metric-definition ownership, refusal triggers, adjacent-lane routing, financial-workflow checkpoints, and tenant-fact prerequisites.
- `evaluation/functionality-map.json` covering all shared abilities plus analytics-reporting-and-disclosure and financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems, decision boundaries, scenario families, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario and functionality coverage.

### Runtime Assumptions

- Tenant supplies jurisdiction, product or business-unit context, metric dictionary, and source-precedence rules.
- Tenant systems expose retrieval hooks for core-system, claims, servicing, payment, reconciliation, and ledger data plus customer communication and approval-history artifacts.
- Tenant provides approval thresholds and escalation owners for fraud, AML, legal/compliance, underwriting, claims, servicing, and finance operations.
- Runtime can log assumptions, low-confidence states, caveats, and evidence lineage for each report package and exception note.

### Required Retrieval Dependencies

- Account, policy, claim, application, customer, charge, and transaction identifiers.
- Charge support, remittance records, payment status, dispute files, denial codes, and reversal history.
- Reconciliation outputs, general-ledger and sub-ledger extracts, suspense reports, and approval-history artifacts.
- KYC, AML, sanctions, fraud, complaint, servicing, disclosure, and customer communication records.

### Regulated-lane Caveats

- Public sources define the baseline, but tenant jurisdiction, product design, state insurance adoption, accounting policy, and disclosure approvals still control final interpretation.
- The lane may summarize evidence and recommend next steps, but it cannot approve financial treatment, legal interpretation, underwriting decisions, claim adjudication, or fraud closure.
- Consumer-protection, suspicious-activity, sanctions, and customer-impact issues override speed or convenience and require escalation when they could change the result.

### Refusal and Return Conditions

- Required tenant facts, source context, or systems of record are missing and would change the answer.
- Public-source and tenant-policy interpretation conflict without explicit precedence resolution.
- Request requires legal advice, policy override, accounting approval, underwriting decision, claim adjudication, fraud disposition, or final disclosure signoff.
- Metric definitions, denominators, refresh assumptions, supporting documentation, or reconciliations remain unresolved.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated stale-data, unsupported-adjustment, unreconciled-ledger, or unsupported-disclosure incidents appear.
- Preserve all analytical briefs, caveat logs, evidence mappings, reconciliation notes, and escalation traces for rollback review.
- Re-enable only after retrieval dependencies, source precedence, authority ownership, and exception handling are restored and retested.

## retained-implementation Promotion Plan

- Keep `specification-based` execution active until a separate retained-implementation package is intentionally created and merged.
- Promote only if usage proves common enough to justify a built runtime and production evidence shows stable low-risk behavior.
- Promotion requires governance review, updated validation evidence, and explicit release documentation distinct from this spec pack.

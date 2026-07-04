# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, sustained usage, and repeated validation stability.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit bookkeeping execution boundaries, refusal triggers, lifecycle states, confidentiality controls, completion evidence, and adjacent-owner handoff rules.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + professional-and-information-services abilities.
- `evaluation/research-summary.json` with sources, workflow stages, artifact and system definitions, decision boundaries, ambiguity handling, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete functional coverage and validated readiness gates.

### Runtime Assumptions

- Tenant must supply engagement scope, jurisdiction, entity context, service model, confidentiality limits, client commitments, close calendar, and approval matrix.
- Tenant must supply chart-of-accounts, class, department, project, location, customer, vendor, tax-code, and account-coding policies.
- Tenant must provide ERP, GL, AP, AR, bank-feed, statement, expense, document, workpaper, workflow, and client-communication retrieval hooks.
- Tenant must define where bookkeeping execution stops and tax, legal, audit, assurance, controller, AP, AR, payroll, account, quality, or delivery-management ownership begins.

### Required Retrieval Dependencies

- Bank feeds, bank statements, merchant batches, deposit support, credit-card feeds, and cash reports.
- Invoices, bills, receipts, payment confirmations, remittance detail, expense reports, purchase orders, vendor records, and customer records.
- Journal support, recurring-entry schedules, payroll summaries, loan or lease schedules, fixed-asset support, ledgers, trial balance, AP aging, and AR aging.
- Reconciliation reports, unmatched-item reports, suspense and clearing-account details, prior close notes, reviewer comments, and client approval records.

### Regulated and Professional-Lane Caveats

- The lane may organize and summarize bookkeeping evidence but may not provide legal advice, tax advice, audit opinions, review conclusions, compilation signoff, assurance, or contractual approval.
- The lane may prepare close-prep and financial-statement-adjacent evidence but may not certify books or issue professional signoff without authorized accountant or attest-owner review.
- The lane may identify payment, write-off, payroll, vendor, refund, and policy-override approval needs but may not execute those approvals without delegated authority.
- Client records must remain tenant-scoped and must use approved record systems and delivery channels.

### Refusal and Return Conditions

- Missing tenant facts, source records, retrieval hooks, or reviewer gates materially change posting, reconciliation, close-prep, or completion.
- Public-source guidance, tenant policy, reviewer instruction, or engagement scope conflict lacks explicit precedence resolution.
- The request asks for legal, licensed, tax, assurance, policy-override, financial-approval, management-approval, or contractual signoff authority outside the lane.
- Work is asked to complete without bank reconciliation, ledger support, exception clearance, reviewer approval, client approval when required, or close-prep evidence.
- Confidentiality, client-record handling, or approved delivery controls would be violated.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated missing-support closures, bank-feed mismatches, confidentiality incidents, approval-boundary failures, or unresolved policy conflicts degrade output safety.
- Preserve source evidence, posting references, reconciliation reports, exception notes, assumptions, reviewer comments, and escalation traces for rollback review.
- Re-enable only after retrieval dependencies, policy precedence, confidentiality controls, approval owner maps, and close criteria are restored and revalidated.

## retained-implementation Promotion Plan

- Keep runtime `specification-based` until a separate retained-implementation package is explicitly approved and committed.
- Promote only if usage proves common enough to justify maintained build logic and repeated validation proves stable over time.
- Promotion requires governance signoff, updated readiness evidence, tenant safety checks, and a distinct build package that preserves the same refusal, confidentiality, approval, and evidence controls.

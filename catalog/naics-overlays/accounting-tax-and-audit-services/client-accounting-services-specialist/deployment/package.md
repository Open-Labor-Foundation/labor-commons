# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit client accounting service boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + service-support-and-resolution + professional-and-information-services abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies engagement scope, service model, accounting basis rules, confidentiality constraints, and management responsibility boundaries.
- Practice management, ERP or general ledger, close management, CRM, workpaper, client collaboration, and document repositories are retrievable.
- Tenant provides approval matrices for material journal entries, reporting package release, payroll or tax data disclosure, policy exceptions, and service-level exceptions.
- Tenant provides tax, audit, advisory, legal, quality assurance, delivery management, account, and client approver escalation owners.

### Required Retrieval Dependencies

- Client, entity, accounting period, engagement, requested deliverable, and case identifiers.
- Engagement letter, service model, management responsibility matrix, confidentiality restrictions, and approval history.
- ERP or general ledger extracts, trial balance, subledger reports, bank feeds, reconciliations, close checklist status, period-lock state, and journal entry support.
- Reporting package drafts, workpaper indexes, review notes, client communication threads, issue logs, and delivery approvals.
- Tax-sensitive, audit-sensitive, legal, contractual, or quality-review artifacts where the request crosses a boundary.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory close, ERP, reconciliation, workpaper, or approval status.
- Requests for legal, tax, audit, review, compilation, assurance, independence, contractual, management, or financial approval authority.
- Requests to disclose confidential client information, workpapers, reporting packages, payroll schedules, taxpayer data, or engagement records to unapproved recipients or channels.
- Public professional standards and tenant engagement terms conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated unsupported accounting-status confirmations, unauthorized disclosures, or unapproved reporting package releases are detected.
- Preserve all service summaries, communication logs, evidence maps, workpaper references, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, confidentiality controls, owner routing, and policy precedence are confirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this client accounting services lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, current authority-source review, and a new PR that records the retained-implementation runtime separately from this spec pack.

# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Targeted runtime use: evidence-guided routing and output generation for financial-services compliance handling in billing, posting, servicing, and reconciliation workflows.
- Runtime remains `specification-based` until a retained-implementation upgrade is explicitly promoted in a separate change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit boundary scope, refusal triggers, adjacent-lane routing, tenant adaptation policy, and orchestrator return rules.
- Evaluation artifacts: `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- Readiness artifacts: `readiness/evidence.json` and `readiness/release.md`.
- Deployment and commercialization notes in `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Tenant authority matrix for billing approvals, write-offs, denial handling, fraud or AML escalation, underwriting, legal review, and servicing owners.
- Tenant source-precedence policy for public regulation, internal policy, and system-of-record conflicts.
- Jurisdiction, product, business-unit, and customer-segment context that materially changes disclosure, claims, servicing, or payment obligations.
- Current systems of record, record locations, retrieval hooks, and retention paths for statements, claims, notices, disputes, and reconciliations.
- Approval thresholds, exception authority, and policy-override limits for financial treatment changes.

### Systems of record and retrieval dependencies

- Core banking, servicing, card, loan, or payment systems.
- Policy administration and claims systems where insurance products are in scope.
- Case management, fraud monitoring, sanctions screening, and complaint-management systems.
- CRM, document repositories, statement-generation, and notice-delivery systems.
- General ledger, payment-reconciliation, and regulatory reporting systems.

### Regulated-lane caveats

- This lane does not replace legal advice, regulated consumer advice, underwriting authority, accounting signoff, or final claims adjudication.
- Fraud, AML, sanctions, and consumer-harm concerns require explicit adjacent-owner escalation.
- Public baseline sources may require tenant and jurisdiction refinement; the lane must record ambiguity rather than guess.

### Refusal and orchestrator-return conditions

- Return to orchestrator when required records, approvals, or tenant context are missing and change the outcome.
- Return when legal, regulator-facing, underwriting, fraud, AML, sanctions, or accounting-signoff authority is required.
- Return when source conflicts or reconciliation conflicts materially alter the control posture.
- Refuse any request that would fabricate approvals, control completion, or unsupported financial treatment.

## Deployment and Rollback

- Deployment: enable only for tenants that have explicit source precedence, owner routing, and systems-of-record mappings configured.
- Rollback: disable specialist routing and return active work to the orchestrator-safe path with blockers, evidence references, and unresolved conflicts preserved.
- Monitoring recommendations: missing-evidence rate, unsupported override requests, fraud or AML escalations, consumer-impact escalations, and unresolved reconciliation variance rate.

## Validation evidence and Promotion Notes

- Positioning: validated Financial Services overlay specialist for compliance-safe billing, posting, reconciliation, claims, and servicing exception handling.
- This package is not retained-implementation and does not claim legal, underwriting, accounting, or final approval authority.

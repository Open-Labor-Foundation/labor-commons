# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed financial-services product operations lane for payment, servicing, premium, billing, and reconciliation workflows.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant product map, jurisdiction map, approval thresholds, and notice obligations
  - integrations for core banking, loan servicing, policy administration, claims, payment hubs, case management, fraud monitoring, general ledger, and document storage
  - adjacent specialist targets for fraud, AML, underwriting, accounting, claims, compliance, and legal review

## Tenant Systems and Adaptation

- Tenant records required: account or policy master data, transaction and payment history, servicing notes, approval logs, disclosures or notices, dispute and fraud artifacts, settlement files, reconciliation workpapers, and escalation hierarchy.
- Allowed adaptation:
  - product-line terminology for deposit, lending, payments, benefits, claims, or insurance servicing
  - jurisdiction and line-of-business assumptions
  - tenant approval thresholds, write-off categories, and exception-owner names
  - artifact naming and work-queue channel conventions
- Prohibited adaptation:
  - widening the lane into underwriting, credit approval, claims coverage decisions, accounting signoff, tax treatment, legal interpretation, or fraud conclusions
  - ignoring disclosure, fraud-review, or record-retention blockers because an operational deadline is pressing
  - merging banking, lending, payments, and insurance servicing rules into one financial path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for product line, requested financial action, transaction or policy dates, exception state, customer-impact risk, and urgency
  - boundary metadata naming who owns fraud, AML, write-offs, legal interpretation, underwriting, accounting entries, and regulated communications
  - retrieval hooks for systems that establish account truth, policy truth, transaction truth, payment truth, and communication truth
  - tenant policy inputs for notice timing, grace periods, approval chains, escalation paths, and source-of-truth precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - exact product line and jurisdiction
  - current account, policy, payment, claim, servicing, and approval records
  - current systems of record and record-location metadata
  - approval chain for finance, compliance, fraud, AML, claims, underwriting, and legal escalations
  - product-specific rules that narrow the public baseline
- Regulated-lane caveats:
  - the lane may support billing and reconciliation decisions but cannot provide legal advice, licensed financial advice, underwriting decisions, fraud determinations, or final accounting treatment
  - any conflict involving disclosure obligations, suspicious activity, grace-period rules, or product-specific servicing interpretation requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, licensed, underwriting, fraud, AML, accounting-signoff, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 financial-services product-operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default finance-support or servicing-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing product, jurisdiction, notice, or approval context
  - monitor repeated unsupported override requests involving back-dates, write-offs, suppression of exception notes, or manual reclassification
  - monitor reconciliation variances, ACH returns, denials, suspense items, and unapplied cash patterns
  - monitor suspicious-activity and consumer-impact escalations for false-confidence or missed-handoff risk

## Notes on use

- Positioning: validated, industry-specific financial services product operations specialist with explicit servicing, payment, premium, disclosure, and reconciliation constraints.
- Tenant support: supports banks, lenders, insurers, payments operators, and financial-services servicing teams coordinating evidence-backed workflow handling.
- Value: reduces unsupported financial treatment, customer-harm risk, and reconciliation leakage by making source records, approval thresholds, notices, and exception ownership explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of account, policy, transaction, notice, and reconciliation records
  - low rates of false-confidence source-conflict or product-mapping errors
  - durable handling across lending, deposit, payment, and insurance servicing cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

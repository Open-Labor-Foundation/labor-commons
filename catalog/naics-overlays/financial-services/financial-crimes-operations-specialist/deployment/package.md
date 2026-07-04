# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and
  evaluation artifacts.
- Runtime expectation: Orchestrator-routed financial-crimes operations lane for
  suspicious payment, sanctions, KYC/CIP, customer-impact, posting, and
  reconciliation workflows.
- Runtime strategy: `specification-based` until a retained implementation is explicitly
  promoted.
- Delivery level: `validated` based on source grounding, scenario coverage,
  and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant entity-type map, product map, jurisdiction map, approval thresholds,
    reimbursement limits, and notice obligations
  - integrations for core banking, policy or insurance transaction systems when
    applicable, payment hubs, case management, fraud monitoring, sanctions
    screening, document storage, general ledger, and reconciliation tooling
  - adjacent specialist targets for fraud, AML, underwriting, servicing,
    compliance, and legal review

## Tenant Systems and Adaptation

- Tenant records required: account or policy master data, transaction and
  payment history, alert and screening history, KYC/CIP artifacts, customer
  communications, approval logs, case notes, reconciliation workpapers, and
  escalation hierarchy.
- Allowed adaptation:
  - entity and product terminology for banks, payment programs, and covered
    insurance products
  - jurisdiction and business-unit assumptions
  - tenant approval thresholds, reimbursement categories, and escalation-owner
    names
  - artifact naming and work-queue channel conventions
- Prohibited adaptation:
  - widening the lane into SAR decisions, AML disposition, sanctions clearance,
    reimbursement approval, underwriting, accounting signoff, or legal
    interpretation
  - ignoring customer-impact, fraud-review, sanctions, or record-retention
    blockers because an operational deadline is pressing
  - merging banking and covered-insurance rules into one financial path without
    approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for entity type, product line, requested financial action,
    transaction dates, alert class, customer-impact risk, and urgency
  - boundary metadata naming who owns fraud adjudication, AML disposition,
    sanctions match resolution, reimbursement approval, legal interpretation,
    underwriting, and servicing authority
  - retrieval hooks for systems that establish account truth, policy truth when
    applicable, transaction truth, screening truth, and communication truth
  - tenant policy inputs for thresholds, notice timing, escalation paths,
    source-of-truth precedence, and retention rules
- Runtime assumptions that must be tenant-supplied or retrieved:
  - exact entity type, product, and jurisdiction
  - current transaction, account, screening, case, communication, and approval
    records
  - current systems of record and record-location metadata
  - approval chain for fraud, AML, sanctions, underwriting, servicing,
    compliance, and legal escalations
  - tenant procedures that narrow the public baseline
- Regulated-lane caveats:
  - the lane may support billing and reconciliation decisions but cannot provide
    legal advice, licensed financial advice, SAR decisions, sanctions
    determinations, underwriting decisions, or final reimbursement authority
  - any conflict involving suspicious activity, sanctions, customer-impact
    obligations, or entity-specific interpretation requires escalation rather
    than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, licensed, underwriting, fraud-adjudication, AML,
    sanctions, reimbursement-approval, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 financial-crimes operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default finance-support, fraud-ops-support, or
    servicing-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing entity, product, jurisdiction, alert,
    communication, or approval context
  - monitor repeated override requests involving hold removal, case-note
    suppression, unsupported release, or unsupported adjustment requests
  - monitor unresolved variances, denied items, ACH returns, and sanctions or
    suspicious-activity escalations for false-confidence risk
  - monitor cross-entity cases where banking and insurance applicability
    boundaries are repeatedly missing or misclassified

## Notes on use

- Positioning: validated, industry-specific financial crimes operations
  specialist with explicit suspicious-activity, customer-impact, sanctions, and
  reconciliation constraints.
- Tenant support: supports banks, payment operators, and covered-insurance
  workflows that need safer evidence-backed handling of financial-crimes-related
  operational work.
- Value: reduces unsupported releases, unsupported adjustments, customer-harm
  risk, and reconciliation leakage by making source records, control owners,
  and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of transaction, screening, case, communication, and
    reconciliation records
  - low rates of false-confidence source-conflict, entity-mapping, or
    sanctions-routing errors
  - durable handling across banking, payments, and covered-insurance cases
  - explicit governance approval to convert the `specification-based` runtime into a
    committed built implementation

# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed cage operations lane for casinos, gaming, and wagering operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - jurisdiction, property type, and cage topology map
  - approved internal controls and TICS or SICS retrieval where applicable
  - integrations for cage, vault, voucher, kiosk, patron-account, compliance, and reconciliation systems
  - adjacent specialist targets for credit, AML, compliance, accounting, surveillance, and legal review

## Tenant Systems and Adaptation

- Tenant records required: cage accountability forms, vault inventories, fill and credit slips, chip inventories, voucher and kiosk records, patron-deposit and wagering-account records, multiple transaction logs, and approved internal controls.
- Allowed adaptation:
  - jurisdiction and property-type assumptions
  - cage role names, shift structure, and report names
  - delegated approval thresholds, variance categories, and queue conventions
  - system-of-record routing and retrieval hooks
- Prohibited adaptation:
  - widening the lane into credit approval, AML disposition, legal interpretation, accounting write-off approval, or regulator-facing commitments
  - ignoring dual-count, accountability, or balancing blockers because the queue is operationally urgent
  - merging tribal, Nevada, and New Jersey cage control paths into one rule set without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for jurisdiction, property type, transaction type, patron or shift context, requested action, variance state, and urgency
  - boundary metadata naming who owns credit decisions, AML filings, accounting variances, surveillance review, licensing matters, and regulator-facing responses
  - retrieval hooks for cage systems, vault records, voucher and kiosk systems, patron-account platforms, approved internal controls, and reconciliation repositories
  - tenant policy inputs for approval thresholds, exception ownership, retention rules, and cross-system precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the governing regulator and approved control set for the property
  - the exact cage structure and operational model in scope
  - current cage, vault, kiosk, voucher, and patron-account records
  - approval chain for credit, compliance, accounting, AML, and legal escalations
  - current systems of record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support cage execution decisions but cannot approve new credit, file CTRs or SARs, finalize accounting treatment, or interpret gaming law
  - any conflict involving regulator rules, approved internal controls, suspicious activity, or jurisdiction-specific cage expectations requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - the request requires legal, licensing, credit, AML, accounting-signoff, surveillance, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 cage operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default gaming-operations behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing jurisdiction, approved internal controls, delegated approvals, or inaccessible cage records
  - monitor repeated unsupported correction requests involving backdated disbursements, patron-account changes, voucher adjustments, or variance suppression
  - monitor mismatches across cage systems, vault counts, kiosk balances, patron accounts, and reconciliation outputs
  - monitor suspicious cash or account patterns for false-confidence completion attempts

## Notes on use

- Positioning: validated, industry-specific cage operations specialist with explicit cash, account, voucher, kiosk, and regulator-sensitive constraints.
- Tenant support: supports casinos, tribal gaming operators, sportsbooks, and wagering businesses coordinating cage execution, player-funds handling, and balance-exception workflows.
- Value: reduces unsupported corrections, accountability leakage, and control overreach by making cage-specific evidence, approval dependencies, and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of cage, vault, kiosk, patron-account, and reconciliation records
  - low rates of false-confidence jurisdiction or control-path escalations
  - durable handling across cash, chip, voucher, kiosk, and account workflows
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

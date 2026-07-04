# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed child-care attendance and billing lane for child care and family services operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction, funding-path map, and attendance status dictionary
  - integrations for attendance capture, subsidy authorization, remittance, family billing, document storage, and exception queues
  - adjacent specialist targets for subsidy authorizations, program finance, accounting, tax, compliance, and legal review

## Tenant Systems and Adaptation

- Tenant records required: sign-in and sign-out logs, absence reason records, authorizations and voucher spans, family fee or co-payment schedules, family account ledgers, remittance files, denial notices, and escalation hierarchy.
- Allowed adaptation:
  - jurisdiction and subsidy-program assumptions
  - tenant billing cadence, absent-day categories, and family-fee terminology
  - artifact naming and work-queue channel conventions
  - site, room, and provider nomenclature
- Prohibited adaptation:
  - widening the lane into subsidy eligibility awards, accounting signoff, tax treatment, or legal interpretation
  - ignoring attendance, authorization-span, or family-fee blockers because a posting deadline is operationally convenient
  - merging Head Start, CCDF, and private-pay rules into one billing path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for funding path, requested billing action, service dates, attendance status, denial or variance state, and urgency
  - boundary metadata naming who owns subsidy awards, fee-policy exceptions, accounting entries, tax questions, and formal write-off approvals
  - retrieval hooks for attendance systems, subsidy or voucher portals, family billing ledgers, document repositories, and reconciliation queues
  - jurisdiction and tenant policy inputs for absent-day handling, co-payment treatment, private-pay fee rules, closure calendars, and approval chains
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the exact jurisdiction and child-care subsidy regime
  - the funding path for the service line in scope
  - current attendance, authorization, fee, remittance, and denial records
  - approval chain for accounting, subsidy, finance, and legal escalations
  - current systems-of-record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support billing and reconciliation decisions but cannot award benefits, interpret taxes, or finalize accounting treatment
  - any conflict involving public-program payment practices, jurisdiction-specific provider manuals, or Head Start fee restrictions requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, subsidy-award, accounting-signoff, tax, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 attendance and billing scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default finance-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing jurisdiction rules, attendance evidence, or authorization spans
  - monitor repeated unsupported override requests involving attendance edits, family fees, or write-offs
  - monitor remittance denials, co-payment disputes, and chronic absenteeism leakage patterns
  - monitor mixed-funding cases for false-confidence billing recommendations

## Notes on use

- Positioning: validated, industry-specific child-care attendance and billing specialist with explicit Head Start, CCDF, private-pay, and mixed-funding constraints.
- Tenant support: supports centers, provider networks, Head Start operators, and family-service organizations coordinating attendance-backed billing and reconciliation.
- Value: reduces leakage, unsupported charges, and denial rework by making attendance evidence, authorization state, family-fee rules, and remittance variances explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of attendance, authorization, remittance, and family-ledger records
  - low rates of false-confidence source-conflict escalations
  - durable handling across Head Start, subsidy-backed, private-pay, and mixed-funding cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

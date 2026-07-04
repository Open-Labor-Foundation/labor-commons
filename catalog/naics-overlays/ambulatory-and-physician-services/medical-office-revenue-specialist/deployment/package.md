# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed medical-office revenue lane for ambulatory and physician services operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - payer, site-of-service, and provider-role mapping
  - provider enrollment and contract retrieval
  - integrations for EHR, practice-management, clearinghouse, payer portal, remittance, approval, and document systems
  - adjacent specialist targets for coding, denials and appeals, privacy, compliance, accounting, and legal review

## Tenant Systems and Adaptation

- Tenant records required: encounter notes, charge tickets or superbills, referrals and authorizations when applicable, CMS-1500 or 837P work items, claim-status responses, ERA or EOB detail, patient-ledger activity, and approval records.
- Allowed adaptation:
  - payer-mix assumptions and terminology
  - provider-role and site-of-service mappings
  - variance categories, work-queue names, and report cadence
  - system-of-record routing and retrieval hooks
- Prohibited adaptation:
  - widening the lane into coding ownership, medical-necessity review, appeal certification, accounting signoff, legal interpretation, or privacy approval
  - ignoring documentation, payer, remittance, or approval blockers because an aging target or patient-balance goal is operationally convenient
  - merging office, urgent-care, telehealth, hospital-outpatient, and payer-specific evidence paths into one rule set without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for payer, claim type, place of service, rendering and billing provider facts, requested financial action, denial state, urgency, and patient-balance posture
  - boundary metadata naming who owns coding, referrals and authorizations, denial appeals, privacy approval, accounting approval, refunds, write-offs, and legal review
  - retrieval hooks for EHR documentation, practice-management ledgers, clearinghouse files, payer portals, remittance systems, approval logs, and contract repositories
  - tenant policy inputs for filing limits, correction windows, small-balance handling, approval thresholds, and cross-system precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the governing payer or payer class and any tenant-approved contract rules
  - the exact site of service and provider billing arrangement in scope
  - current encounter, claim, remittance, and patient-ledger records
  - approval chain for coding, appeals, privacy, compliance, accounting, and legal escalations
  - current systems of record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support revenue decisions but cannot select coding, certify appeals, finalize accounting treatment, or interpret reimbursement law or contract language
  - any conflict involving CMS guidance, payer contracts, privacy rules, or tenant approvals requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - the request requires coding, clinical, privacy, legal, or accounting-signoff authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 medical-office revenue scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default revenue-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing payer, provider, site-of-service, documentation, or remittance records
  - monitor repeated unsupported override requests involving charge additions, balance write-offs, refund requests, and patient-responsibility changes
  - monitor reconciliation breaks across EHR, practice-management, clearinghouse, payer, and remittance systems
  - monitor privacy-sensitive asks and false-confidence payer-policy assumptions

## Notes on use

- Positioning: validated, industry-specific medical-office revenue specialist with explicit professional-claim, remittance, denial, and PHI-handling constraints.
- Tenant support: supports physician groups, ambulatory clinics, urgent-care operators, and multisite practices coordinating billing, posting, reconciliation, and revenue-exception handling.
- Value: reduces unsupported adjustments, denial leakage, and authority overreach by making medical-office evidence, reconciliation dependencies, and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of encounter, claim, remittance, and approval records
  - low rates of false-confidence payer or site-of-service escalations
  - durable handling across payer mixes and multisite professional-claim workflows
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

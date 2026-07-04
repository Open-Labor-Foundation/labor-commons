# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed healthcare billing lane for provider-side billing, claims follow-up, posting, denial, and reconciliation workflows.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - payer, plan, claim type, place-of-service, provider-role, authorization, referral, and COB mapping
  - filing-limit, denial-inventory, and approval-threshold retrieval
  - integrations for EHR, charge capture, practice-management, billing, clearinghouse, claim scrubber, payer portal, remittance, denial-management, document, approval, and audit systems
  - adjacent specialist targets for coding, patient access, prior authorization, utilization management, clinical documentation, payer operations, denials and appeals, privacy, compliance, accounting, collections, and legal review

## Tenant Systems And Adaptation

- Tenant records required: charge tickets, encounter documentation, coverage and eligibility records, referral and authorization records, claim forms or 837 work items, claim-scrubber output, clearinghouse acknowledgments, payer portal status, remittance advice, EOBs, CARC and RARC details, denial records, payment posting batches, patient ledgers, adjustment logs, and approval records.
- Allowed adaptation:
  - payer-mix assumptions and terminology
  - work-queue labels and denial inventory groupings
  - authorization and referral workflow names
  - variance categories and reconciliation cadence
  - source-of-truth precedence and retrieval hooks
  - small-balance, filing-limit, approval-threshold, and escalation owner mappings
- Prohibited adaptation:
  - widening the lane into code selection, clinical judgment, medical necessity, medical-record rewriting, payer-policy interpretation, privacy approval, appeal certification, accounting treatment, tax advice, or legal advice
  - ignoring missing documentation, authorization, eligibility, referral, COB, remittance, or approval blockers because aging, cash, or closeout targets are operationally convenient
  - merging Medicare, Medicaid, Medicare Advantage, commercial, workers compensation, professional, institutional, self-pay, and secondary-payer evidence paths without approved tenant mapping
  - weakening minimum-necessary PHI handling or approved-channel requirements

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for patient or member, encounter, account, payer, plan, claim type, place of service, rendering and billing provider facts, requested financial action, denial state, urgency, and patient-impact posture
  - boundary metadata naming who owns coding, referrals, authorization, utilization management, clinical documentation, payer-policy interpretation, denial appeals, privacy approval, compliance review, accounting approval, refunds, write-offs, collections, and legal review
  - retrieval hooks for EHR documentation, charge capture, practice-management ledgers, eligibility, authorization, billing, clearinghouse, claim scrubber, payer portals, claim-status transactions, remittance, denial-management, document repositories, approval logs, and contract repositories
  - tenant policy inputs for filing limits, authorization requirements, referral workflow, payer hierarchy, COB or MSP handling, adjustment approval, small-balance handling, denial inventory ownership, privacy channel rules, and system precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - governing payer, plan, contract, and jurisdiction
  - exact claim type, place of service, provider billing arrangement, and patient-account state
  - current encounter, charge, authorization, claim, remittance, denial, and patient-ledger records
  - approval chain for coding, appeals, privacy, compliance, accounting, write-offs, refunds, collections, and legal escalations
  - current systems of record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support administrative revenue decisions but cannot select codes, rewrite clinical records, determine medical necessity, approve privacy disclosure, certify appeals, interpret reimbursement law, or finalize accounting treatment
  - any conflict involving CMS guidance, payer contracts, state Medicaid rules, MAC articles, privacy rules, tenant policy, or source records requires escalation rather than synthesis
  - PHI handling must stay inside minimum-necessary payment or operations needs and tenant-approved channels
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - required system-of-record evidence cannot be retrieved or materially conflicts
  - the request requires coding, clinical, privacy, legal, payer-policy, compliance, accounting, collections, or approval authority
  - unresolved billing, denial, COB, or patient-balance action could create patient or member harm

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 healthcare billing scenarios
  - research summary, readiness evidence, and functionality map present
  - orchestrator routes and adjacent-owner registry configured
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default billing or revenue-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing payer, plan, place of service, eligibility, authorization, referral, filing limit, denial inventory, documentation, remittance, or approval records
  - monitor unsupported override requests involving charge additions, forced submissions, contractual adjustments, waivers, write-offs, refunds, and patient-responsibility changes
  - monitor reconciliation breaks across EHR, practice-management, billing, clearinghouse, payer portal, remittance, denial-management, and patient-ledger systems
  - monitor PHI-sensitive asks, clinical or coding boundary requests, payer-policy interpretation attempts, and false-confidence assumptions

## Notes on use

- Positioning: validated, healthcare-specific billing specialist with explicit claim-readiness, remittance, denial, authorization, COB, PHI, and unsupported-adjustment constraints.
- Tenant support: supports provider organizations, practices, ambulatory groups, billing offices, and revenue-cycle teams coordinating healthcare claims, posting, reconciliation, and exception handling.
- Value: reduces unsupported claims, denial leakage, patient-balance errors, PHI exposure, and authority overreach by making healthcare billing evidence, prerequisites, and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of encounter, charge, coverage, authorization, claim, remittance, denial, patient-ledger, and approval records
  - low rates of false-confidence payer, clinical, privacy, coding, COB, and site-of-service escalations
  - durable handling across payer mixes, claim types, provider settings, and tenant work queues
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation with tested connectors and privacy controls

# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed middle-office lane for institutional post-trade prerequisite validation before settlement, asset-servicing, or downstream processing begins.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - jurisdiction, asset-class, and business-unit routing map
  - integrations for OMS or EMS, allocation or matching workflow, account master, SSI repository, custodian records, document management, and case management
  - adjacent specialist targets for onboarding, settlements, corporate actions, collateral, compliance, legal, and front-office owners

## Tenant Systems and Adaptation

- Tenant records required: trade blotter entries, allocation and affirmation status, account and counterparty masters, LEIs, mandate and restricted-list outputs, SSI records, custodian setup, prime-broker or give-up agreements, and exception ownership hierarchy.
- Allowed adaptation:
  - asset-class terminology and queue naming
  - tenant-specific matching and affirmation platforms
  - custodian, prime-broker, and give-up workflow variants
  - tenant approval thresholds, exception owners, and readiness state names
- Prohibited adaptation:
  - widening the lane into front-office trade discretion, KYC onboarding completion, settlement release, legal documentation negotiation, corporate-action elections, or collateral management
  - ignoring SSI, mandate, or affirmation blockers because of client or desk urgency
  - merging distinct asset-class, jurisdiction, or custodian workflows into one unqualified path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for asset class, jurisdiction, trade identifiers, account identifiers, counterparty, custodian, prime-broker status, and requested readiness outcome
  - boundary metadata naming who owns onboarding, trading, settlements, corporate actions, collateral, legal interpretation, and compliance approval
  - retrieval hooks for systems that establish trade truth, account truth, entity truth, SSI truth, and workflow or approval truth
  - tenant policy inputs for mandate precedence, restricted-list handling, cutoff rules, approval chains, and source-of-truth hierarchy
- Runtime assumptions that must be tenant-supplied or retrieved:
  - exact jurisdiction and asset class
  - current trade, account, LEI, SSI, custodian, and approval records
  - current systems of record and record-location metadata
  - exception-owner routing across onboarding, settlements, corporate actions, collateral, legal, and compliance lanes
  - operator-specific rules that narrow the public baseline
- Regulated-lane caveats:
  - the lane may support readiness and routing decisions but cannot provide legal advice, mandate overrides, account-opening approval, settlement release approval, or final compliance signoff
  - any conflict involving entity identity, authorization, SSI, custodian instructions, or market-specific timing requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, licensed, policy-override, financial-approval, or final compliance authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 middle-office scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior generic operations or broader capital-markets support handling
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing account master, LEI, custodian setup, or SSI context
  - monitor repeated same-day allocation or affirmation misses that keep work out of ready states
  - monitor recurring unsupported mandate or restricted-list override attempts
  - monitor false-confidence escalations caused by mixed asset-class or cross-jurisdiction workflows

## Notes on use

- Positioning: validated, industry-specific middle office specialist with explicit post-trade prerequisite, identity, SSI, and affirmation controls.
- Tenant support: supports asset managers, institutional brokers, shared-services operations groups, custodial service teams, and outsourced middle-office providers.
- Value: reduces false readiness, settlement friction, and boundary overreach by forcing named evidence, source hierarchy, and adjacent-lane routing into every middle-office disposition.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of trade, account, entity, SSI, and matching records
  - low rates of false-confidence source-conflict or asset-class mapping errors
  - durable handling across custodian, prime-broker, and multi-jurisdiction operating models
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

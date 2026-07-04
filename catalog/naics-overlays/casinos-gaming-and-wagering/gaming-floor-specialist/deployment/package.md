# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed gaming-floor lane for slot, table-game, patron-account, jackpot, fill, credit, and patron-protection workflows.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction, tribal or commercial control baseline, payout thresholds, and approval matrix
  - integrations for casino management, slot accounting, table management, player tracking, cashless or wagering-account, surveillance, cage, tax, compliance, and document storage systems
  - adjacent specialist targets for cage, surveillance, AML, responsible-gaming, security, device-tech, accounting, and regulatory review

## Tenant Systems and Adaptation

- Tenant records required: jackpot, fill, credit, player-account, cashless, surveillance, incident, tax, approval, and escalation records tied to the floor event.
- Allowed adaptation:
  - property terminology for slot attendant, floorperson, pit, slot dispatch, host desk, or player-services teams
  - tribal versus commercial jurisdiction assumptions
  - tenant payout thresholds, promo-credit rules, approval chains, and escalation-owner names
  - artifact naming and queue channel conventions
- Prohibited adaptation:
  - widening the lane into cage authority, surveillance investigation, AML disposition, tax advice, responsible-gaming exception authority, device repair, or regulatory signoff
  - ignoring self-exclusion, underage, suspicious-cash, surveillance, or tax blockers because a patron is waiting on the floor
  - merging tribal and commercial gaming controls into one path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for jurisdiction, property, game type, floor event type, patron-account context, payout amount, surveillance reference, and urgency
  - boundary metadata naming who owns cage exceptions, SAR-sensitive review, self-exclusion, patron-security response, game configuration, tax review, and regulatory reporting
  - retrieval hooks for systems that establish floor-event truth, patron truth, player-account truth, surveillance truth, and accounting truth
  - tenant policy inputs for payout thresholds, promo-credit rules, self-exclusion routing, tax-document handling, and source-of-record precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - exact jurisdiction and control baseline
  - current jackpot, fill, player-account, surveillance, tax, and approval records
  - current systems of record and record-location metadata
  - approval chain for floor operations, cage, compliance, surveillance, security, and regulatory escalations
  - property-specific rules that narrow the public baseline
- Regulated-lane caveats:
  - the lane may support floor progression and exception handling but cannot provide tax advice, legal advice, AML disposition, self-exclusion exceptions, device-tech decisions, or regulator signoff
  - any conflict involving suspicious activity, patron protection, surveillance retention, source-of-truth mismatches, or jurisdictional controls requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, licensed, AML, tax, device-tech, self-exclusion, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 gaming-floor scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior generic operations or broader casino-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing jurisdiction, jackpot, surveillance, tax, player-account, or approval evidence
  - monitor repeated unsupported requests involving payout overrides, self-exclusion exceptions, device resets, or rushed completion
  - monitor progressive variances, cashless disputes, suspicious cash escalations, and cross-system closure conflicts
  - monitor patron-protection escalations for false-confidence or missed-handoff risk

## Notes on use

- Positioning: validated, industry-specific gaming-floor specialist with explicit cash, account, surveillance, and compliance constraints.
- Tenant support: supports tribal and commercial casino operators, card rooms, and gaming properties coordinating evidence-backed floor workflow handling.
- Value: reduces unsupported payouts, audit leakage, patron-protection failures, and source-of-truth conflicts by making gaming-floor records, approvals, and adjacent ownership explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of floor-event, player-account, surveillance, tax, and approval records
  - low rates of false-confidence jurisdiction or source-conflict errors
  - durable handling across slot, table-game, cashless, and patron-protection workflows
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

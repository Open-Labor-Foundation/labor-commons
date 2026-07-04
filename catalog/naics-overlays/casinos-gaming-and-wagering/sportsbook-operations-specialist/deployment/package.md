# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed sportsbook operations lane for sportsbook ticket, wagering-account, payout, reconciliation, and player-service exception workflows.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction map, channel map, house rules, approval thresholds, and exclusion or responsible-gaming obligations
  - integrations for sportsbook platform, player account management, geolocation, cage or cashiering, surveillance, compliance, AML, reconciliation, and document storage
  - adjacent specialist targets for trading, compliance, cage, AML, surveillance, responsible gaming, and legal review

## Tenant Systems and Adaptation

- Tenant records required: sportsbook tickets, wagering-account ledgers, player identity and eligibility records, event and line-history records, grading outputs, payout or redemption evidence, reconciliation workpapers, surveillance notes, and escalation hierarchy.
- Allowed adaptation:
  - retail counter, kiosk, and mobile sportsbook terminology
  - jurisdiction and channel assumptions
  - tenant approval thresholds, redemption periods, and exception-owner names
  - artifact naming and queue-channel conventions
- Prohibited adaptation:
  - widening the lane into sportsbook trading, casino cage approval, AML disposition, responsible-gaming adjudication, or legal interpretation
  - ignoring player-eligibility, suspicious-activity, or payout blockers because an operational deadline is pressing
  - merging retail and mobile or cross-jurisdiction sportsbook rules into one path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for jurisdiction, channel, requested sportsbook action, event and ticket identifiers, payout state, player-impact risk, and urgency
  - boundary metadata naming who owns trading, line changes, exclusions, AML, cage approval, legal interpretation, and regulator communications
  - retrieval hooks for systems that establish ticket truth, wagering-account truth, event truth, payout truth, and surveillance or AML truth
  - tenant policy inputs for house-rule precedence, approval chains, redemption handling, escalation ownership, and source-of-truth hierarchy
- Runtime assumptions that must be tenant-supplied or retrieved:
  - exact jurisdiction and channel
  - current ticket, account, event, payout, exclusion, surveillance, and approval records
  - current systems of record and record-location metadata
  - approval chain for trading, compliance, AML, cage, surveillance, and legal escalations
  - operator-specific rules that narrow the public baseline
- Regulated-lane caveats:
  - the lane may support sportsbook execution and completion decisions but cannot provide legal advice, regulator-facing commitments, AML or SAR determinations, responsible-gaming adjudication, or trading decisions
  - any conflict involving player eligibility, suspicious activity, source-of-truth mismatches, or policy interpretation requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, regulator-facing, AML, trading, cage-approval, or responsible-gaming authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 sportsbook-operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default sportsbook support or broader gaming-operations behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing jurisdiction, house-rule, event, grading, payout, or systems-of-record context
  - monitor repeated unsupported void or rescission requests involving accepted wagers or unresolved event outcomes
  - monitor liability variances, unreconciled payouts, outstanding vouchers, and wagering-account mismatches
  - monitor suspicious-activity and responsible-gaming escalations for false-confidence or missed-handoff risk

## Notes on use

- Positioning: validated, industry-specific sportsbook operations specialist with explicit ticket, account, payout, AML, and responsible-gaming constraints.
- Tenant support: supports sportsbook operators, casino sportsbook teams, and gaming shared-services groups coordinating evidence-backed sportsbook workflow handling.
- Value: reduces unsupported wager changes, payout leakage, player-protection risk, and reconciliation failures by making sportsbook source records, control thresholds, and escalation ownership explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of sportsbook, player-account, payout, surveillance, and reconciliation records
  - low rates of false-confidence source-conflict or jurisdiction-mapping errors
  - durable handling across retail and mobile sportsbook workflows
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

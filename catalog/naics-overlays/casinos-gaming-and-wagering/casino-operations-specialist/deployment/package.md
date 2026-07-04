# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed casino-operations lane for casinos, gaming, and wagering operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - jurisdiction, property type, and game-vertical map
  - approved internal controls and TICS or SICS retrieval where applicable
  - integrations for casino management, slot, table-games, player-tracking, cashless, complaint, and incident systems
  - adjacent specialist targets for compliance, surveillance, cage-credit, responsible-gaming, technical services, security, sportsbook operations, and legal review

## Tenant Systems and Adaptation

- Tenant records required: machine event logs, jackpot and handpay records, table fill-credit and inventory records, player-tracking and comp approvals, patron-account logs, complaint forms, incident notes, and approved internal controls.
- Allowed adaptation:
  - jurisdiction and property-type assumptions
  - game-vertical terminology and queue names
  - comp thresholds, shift cadence, and work-queue conventions
  - system-of-record routing and retrieval hooks
- Prohibited adaptation:
  - widening the lane into patron-dispute adjudication, self-exclusion disposition, surveillance findings, cage-credit approval, or legal interpretation
  - ignoring machine, table, complaint, or responsible-gaming blockers because a service metric or guest-experience target is operationally convenient
  - merging slot, table-games, patron-account, and sportsbook or complaint evidence paths into one rule set without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for jurisdiction, property type, game vertical, requested operational action, current lifecycle state, patron or asset type, exception class, and urgency
  - boundary metadata naming who owns patron-dispute decisions, self-exclusion handling, comp approval, surveillance review, cage-credit actions, and technical return-to-service decisions
  - retrieval hooks for gaming systems, player-tracking systems, patron-account platforms, complaint and incident repositories, approved internal controls, and shift work queues
  - tenant policy inputs for comp thresholds, approval chains, self-exclusion handling, exception ownership, and cross-system precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the governing regulator and approved control set for the property
  - the exact game vertical or mix in scope
  - current machine, table, player, complaint, and patron-account records
  - approval chain for compliance, surveillance, responsible-gaming, cage-credit, technical, and legal escalations
  - current systems-of-record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support casino execution decisions but cannot adjudicate patron disputes, clear exclusions, authorize financial gaming actions, or interpret gaming law
  - any conflict involving regulator rules, approved internal controls, or jurisdiction-specific patron protections requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - the request requires legal, compliance, surveillance, cage-credit, responsible-gaming, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 casino-operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default operations-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing jurisdiction, approved internal controls, or inaccessible gaming records
  - monitor repeated unsupported override requests involving comps, player accounts, jackpots, or patron complaints
  - monitor self-exclusion, exclusion-list, and responsible-gaming cases for false-confidence handling
  - monitor machine-state, table-state, complaint, and patron-account mismatches that repeatedly block completion

## Notes on use

- Positioning: validated, industry-specific casino-operations specialist with explicit slot, table-games, player-tracking, complaint, and responsible-gaming constraints.
- Tenant support: supports casinos, tribal gaming operators, and wagering businesses coordinating casino-floor execution, patron-service readiness, and exception routing.
- Value: reduces unsupported closure, guest-service overreach, and control leakage by making gaming-specific evidence, lifecycle dependencies, and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of gaming-system, player-tracking, complaint, and incident records
  - low rates of false-confidence jurisdiction or control-path escalations
  - durable handling across slot, table-games, patron-account, and complaint cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

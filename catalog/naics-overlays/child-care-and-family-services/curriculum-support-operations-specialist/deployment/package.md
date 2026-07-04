# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` (spec-pack execution path).
- Deployment model: spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime strategy: `specification-based`.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction, program model, and escalation map
  - integrations for child-care management, curriculum or lesson-planning, assessment, coaching, document, and family-communication systems
  - adjacent specialist targets for education leadership, inclusion, privacy, licensing, facilities, and family engagement

## Tenant Systems and Adaptation

- Tenant records required: approved curricula, lesson plans, curriculum scope and sequence, classroom observations, coaching notes, material inventories, child portfolios, assessment summaries, family communication records, privacy permissions, blocker logs, and ownership maps.
- Allowed adaptation:
  - jurisdiction and program-model assumptions
  - tenant policy and escalation-chain overrides
  - artifact naming, curriculum-tool schemas, and communication channel conventions
  - classroom taxonomy, role names, and family-service terminology
- Prohibited adaptation:
  - widening the lane into curriculum approval, developmental diagnosis, or privacy signoff
  - treating tenant-specific lesson-planning tools as a substitute for required evidence and traceability
  - overriding policy, licensing, staffing, or budget controls to close a curriculum-support case

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for curriculum support request type, classroom or home-based setting, age band, urgency, and requested outcome
  - boundary metadata naming who owns curriculum approval, coaching decisions, privacy review, inclusion support, licensing review, and facilities dependencies
  - retrieval hooks for curriculum systems, lesson plans, child portfolios, assessment records, coaching trackers, and family communication tools
  - jurisdiction and tenant policy inputs for approved curriculum handling, privacy, family communication, and escalation rules
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the exact operator model and jurisdiction
  - the current approved curriculum inventory and support workflow
  - the current privacy and family-communication policy overlay
  - the ownership map for education manager, coach, inclusion, privacy, and facilities teams
- Regulated-lane caveats:
  - curriculum support may surface privacy, inclusion, or licensing blockers but cannot resolve them unilaterally
  - any conflict involving assessment interpretation, protected records, or curriculum-approval authority requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, privacy, licensed, executive-approval, or diagnostic authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 coverage scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default curriculum-support handling
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocker, privacy-gate, and closure logs
  - monitor missing-artifact, missing-policy, and source-conflict escalations
  - monitor repeated attempts to use the lane for diagnosis, curriculum approval, privacy signoff, or licensing interpretation
  - monitor repeat-failure curriculum support cases for persistent unresolved ownership gaps

## Notes on use

- Positioning: validated, industry-specific curriculum-support operations specialist with explicit child-care curriculum, assessment, privacy, and family-communication constraints.
- Tenant support: supports centers, family child care networks, and early-childhood operators coordinating curriculum implementation and support workflows.
- Value: reduces dropped curriculum-support handoffs, privacy mistakes, and generic support behavior by making artifacts, ownership, and blocker states explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of curriculum, assessment, and privacy records
  - low rates of false-confidence escalations
  - durable handoff quality across center-based and family-child-care contexts
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed staffing coordination lane for child care and family services handoffs.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction, program model, and escalation map
  - integrations for attendance, scheduling, HR/credential, licensing, and handoff-tracking systems
  - adjacent specialist targets for licensing, safety, HR, payroll, and family communications

## Tenant Systems and Adaptation

- Tenant records required: classroom rosters, attendance counts, age mix, ratio worksheets, staffing schedules, substitute lists, background-check status, training records, licensing status, blocker logs, and approval hierarchy.
- Allowed adaptation:
  - jurisdiction and program-model assumptions
  - tenant policy and escalation-chain overrides
  - artifact naming and handoff channel conventions
  - communication format, room taxonomy, and staffing-role nomenclature
- Prohibited adaptation:
  - widening the lane into final staffing approval
  - treating uncleared or unqualified staff as eligible by default
  - overriding ratio, active supervision, or licensing rules without authorized human approval

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for staffing request type, room/program type, age band, urgency, and requested action
  - boundary metadata naming who owns scheduling approval, payroll/overtime approval, licensing review, incident response, and family communications
  - retrieval hooks for attendance, roster, training, clearance, licensing, and blocker systems
  - jurisdiction and tenant policy inputs for ratio, qualification, substitute, and closure rules
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the exact jurisdiction and licensing regime
  - current staffing matrix and room census
  - current training and background-check status
  - approval chain for labor, room closure, and parent communications
- Regulated-lane caveats:
  - staffing coordination may surface safety and licensing blockers but cannot resolve them unilaterally
  - any rule conflict involving ratios, clearances, or supervision requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, licensed, payroll, HR, or safety-incident authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 11 coverage scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default coordination behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocker and closure logs
  - monitor missing-artifact, missing-clearance, and source-conflict escalations
  - monitor repeated attempts to use the lane for payroll, HR, or safety-incident decisions
  - monitor parent-impacting room closure cases for unresolved authority assumptions

## Notes on use

- Positioning: validated, industry-specific staffing coordination specialist with explicit child-care constraints.
- Tenant support: supports centers, family child care support organizations, and family services operators coordinating ratio-sensitive classroom coverage.
- Value: reduces dropped handoffs, unsafe staffing assumptions, and misplaced approval work by making evidence, ownership, and blocker states explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of jurisdiction and staffing records
  - low rates of false-confidence escalations
  - durable handoff quality across center-based and family-child-care cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

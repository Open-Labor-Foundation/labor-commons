# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed coordinator lane used for handoff and routing tasks in elder care and disability services.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on local evidence coverage and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant policy overrides for care standards and consent rules
  - integrations for care-plan repositories, referral systems, case-management systems, and handoff trackers
  - escalation targets for clinical, legal/patient-rights, finance/compliance, and operations/dispatch specialists

## Tenant Systems and Adaptation

- Tenant records required: person-centered plans, reassessment notes, referral packets, consent and authorization records, coordination logs, routing state, and safety/risk flags.
- Allowed adaptation:
  - target workflow assumptions (state, program, facility, region)
  - tenant policy and jurisdiction overrides
  - artifact naming and handoff channel conventions
  - communication format and ownership nomenclature
- Prohibited adaptation:
  - reclassifying clinical decision authority
  - converting consent/privacy constraints into non-governed defaults
  - widening to direct execution or adjudication roles

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 10 coverage scenarios
  - research summary, readiness evidence, and functionality map.
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default coordination behavior
  - restore previous validated configuration
  - re-run package audit before re-enabling
- Monitoring requirements:
  - track blocker and closure logs
  - monitor missing-artifact escalations and source-conflict escalations
  - monitor repeated attempts to route clinical or legal decisions through this lane
  - monitor handoff artifacts for closed-loop completion failures

## Notes on use

- Positioning: validated, industry-specific coordination specialist with explicit limitations.
- Tenant support: supports operational orchestration teams handling elder care and disability care continuity workflows.
- Value: reduces ambiguous coordination ownership, adds auditable blocker tracking, and reduces misplaced specialist execution.

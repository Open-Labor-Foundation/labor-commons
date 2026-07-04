# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed child-care enrollment and access lane for child care and family services operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction, program model, and selection-priority map
  - integrations for intake, subsidy authorization, waitlist or funded-slot, health-document, licensing, and work-queue systems
  - adjacent specialist targets for subsidy, health, disability, licensing, transportation, and legal review

## Tenant Systems and Adaptation

- Tenant records required: applications, referrals, child and guardian identity records, age and household evidence, subsidy approvals, waitlist or funded-slot state, health and consent records, provider readiness data, and escalation hierarchy.
- Allowed adaptation:
  - jurisdiction and program-model assumptions
  - tenant policy and selection-criteria overrides where explicitly sourced and governed
  - artifact naming and work-queue channel conventions
  - terminology for classrooms, sites, subsidy programs, and family-service roles
- Prohibited adaptation:
  - widening the lane into final subsidy, health, placement, or legal approval
  - ignoring licensing, provider-readiness, or health-record blockers because a start date is operationally convenient
  - overriding disability-access or priority-population rules without authorized human review

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for request type, child age band, program model, requested start date, subsidy path, and urgency
  - boundary metadata naming who owns subsidy awards, health clearances, disability accommodation review, licensing review, and final placement decisions
  - retrieval hooks for intake, waitlist or funded-slot, subsidy, health, consent, provider-readiness, and queue systems
  - jurisdiction and tenant policy inputs for selection criteria, pending-record windows, subsidy precedence, and pickup or consent requirements
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the exact jurisdiction and licensing regime
  - the program type and public-source applicability
  - current funded-slot and provider-capacity status
  - current subsidy, health, consent, and provider-readiness records
  - approval chain for disability, health, subsidy, and legal escalations
- Regulated-lane caveats:
  - enrollment validation may surface subsidy, health, disability, and licensing blockers but cannot resolve them unilaterally
  - any conflict involving civil-rights access, public-benefit eligibility, or jurisdiction-specific health rules requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, licensed, clinical, or subsidy-award authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 enrollment scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default intake behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked intakes, missing-authority escalations, and source conflicts
  - monitor repeated attempts to bypass eligibility, health, or funding checks
  - monitor disability-access and homelessness-priority escalations for false-confidence risk
  - monitor waitlist and funded-slot blockers for stale-routing patterns

## Notes on use

- Positioning: validated, industry-specific child-care enrollment specialist with explicit ERSEA, licensing, funding, and access constraints.
- Tenant support: supports centers, Early Head Start or Head Start operators, family-service organizations, and child-care networks coordinating admissions and placement-readiness.
- Value: reduces dropped intakes, premature starts, and misplaced authority by making evidence, priority rules, waitlist state, and provider readiness explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of jurisdiction, subsidy, and provider-readiness records
  - low rates of false-confidence source-conflict escalations
  - durable intake quality across Head Start, subsidy-backed, and private child-care cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

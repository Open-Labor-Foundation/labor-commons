# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` (spec-pack execution path).
- Deployment model: spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime strategy: `specification-based`.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction, program model, sponsor relationship, and escalation map
  - integrations for child-care management, meal-counting or CACFP claiming, health record, document, family-communication, and workflow-routing systems
  - adjacent specialist targets for CACFP compliance, health or special-diet review, food service operations, licensing, procurement approval, and incident response

## Tenant Systems and Adaptation

- Tenant records required: program participation status, sponsor relationship, classroom rosters, attendance records, meal counts, menus, meal-pattern references, substitution logs, production records, child accommodation files, infant feeding instructions, monitoring notes, and ownership maps.
- Allowed adaptation:
  - jurisdiction and program-model assumptions
  - tenant policy and escalation-chain overrides
  - sponsor workflow, artifact naming, and system schema differences
  - classroom, meal-service, and family-communication channel conventions
- Prohibited adaptation:
  - widening the lane into claim approval, diet prescribing, food-safety signoff, or procurement approval
  - treating tenant-specific food-service tools as a substitute for required evidence and traceability
  - overriding sponsor, policy, or health controls to close a nutrition case

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for nutrition request type, site or home setting, meal service affected, urgency, and requested outcome
  - boundary metadata naming who owns claim signoff, health-plan review, emergency response, licensing review, food-service execution, and family approval
  - retrieval hooks for attendance, meal-count, claiming, menu planning, health record, infant feeding, family communication, and document systems
  - jurisdiction, sponsor, and tenant policy inputs for meal service, accommodations, food safety, and escalation rules
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the exact operator model and whether CACFP or Head Start rules apply
  - the current source-of-truth meal-count and attendance systems
  - the current special-diet, food-allergy, and infant-feeding workflow
  - the ownership map for classroom, kitchen, sponsor, health, family-services, and approval teams
- Regulated-lane caveats:
  - nutrition coordination may surface clinical, food-safety, fiscal, or licensing blockers but cannot resolve them unilaterally
  - any conflict involving medical statements, allergic reactions, reimbursement claims, or food-safety rules requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, clinical, food-safety, licensing, or fiscal-approval authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 coverage scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default nutrition coordination handling
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocker, claim-risk, accommodation-gap, and closure logs
  - monitor missing-artifact, missing-policy, and source-conflict escalations
  - monitor repeated attempts to use the lane for claim approval, diet prescribing, food-safety signoff, or emergency-response decisions
  - monitor repeat-failure nutrition cases for persistent unresolved ownership gaps

## Notes on use

- Positioning: validated, industry-specific child-nutrition coordination specialist with explicit CACFP, dietary-accommodation, infant-feeding, and sponsor-review constraints.
- Tenant support: supports child-care centers, Head Start operators, family child care networks, and multi-site early-childhood operators coordinating nutrition and reimbursement-sensitive workflows.
- Value: reduces dropped meal-service handoffs, unsupported accommodation routing, and generic food-service behavior by making artifacts, ownership, and blocker states explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of attendance, meal-count, accommodation, and sponsor-review records
  - low rates of false-confidence escalations
  - durable handoff quality across CACFP, Head Start, and non-CACFP child-care contexts
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation

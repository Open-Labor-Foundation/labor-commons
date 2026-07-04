# Deployment Package

## Runtime Model

- Deployment model: specification-based package with immutable manifest, scenario suite, functionality mapping, research summary, and readiness evidence.
- Runtime expectation: coordinator role invoked for transmission outage, reservation, interchange, notification, and closure-readiness checks.
- Runtime strategy: `specification-based` retained until a retained implementation is explicitly promoted.

## Required Configuration

- release version and release notes metadata
- source refresh policy and decay handling for FERC, NERC, and NAESB references
- tenant context retrieval for RC area, outage scheduler, OASIS implementation, e-Tag workflow, operator logs, and owner authorities
- integration hooks for outage scheduling, OASIS, e-Tag or interchange scheduling, EMS or SCADA evidence, and coordination ticketing
- escalation targets for transmission operations, grid-dispatch-support-specialist, nerc-compliance-specialist, engineering, and regulatory owners

## Materialization Requirements For `commons-crew`

- Required task and boundary metadata:
  - specialty boundary that limits the lane to coordination and handoffs
  - adjacent-lane routing map for RC, TOP, BA, TSP, compliance, engineering, and operations owners
  - required output shapes for handoff summary, blocker log, routing confirmation, and closure confirmation
- Tenant-supplied or runtime-retrieved assumptions:
  - jurisdiction, RC area, business unit, and operating footprint
  - current systems of record and retrieval hooks for outage scheduler, OASIS, e-Tag, EMS or SCADA, and operator logs
  - tenant outage windows, owner matrix, escalation contacts, and closure acceptance rules
- Regulated-lane caveats:
  - public baseline does not grant outage approval, switching, emergency, tariff, engineering, or compliance authority
  - regional tariff and market implementations can materially change timing and ownership details
- Refusal or orchestrator-return conditions:
  - missing authority facts, missing systems-of-record references, or missing evidence that would change the outcome
  - requests requiring operational approval, engineering judgment, tariff interpretation, or compliance interpretation
  - conflicting policies or source precedence disputes that require human resolution

## Tenant Isolation And Adaptation

- Tenant policy: no cross-tenant leakage of outage schedules, reservations, operator logs, or escalation records.
- Runtime adaptation: per-tenant routing matrices, regional procedure overrides, and confidence thresholds are tenant-supplied.
- Prohibited adaptation: enabling autonomous switching, outage approval, emergency declaration, tariff decisions, engineering signoff, or compliance signoff.

## Operating Notes

- Use this lane for coordination, not execution.
- Every handoff should include prior owner, next owner, required artifacts, and blocker state.
- Escalate when source conflicts, missing prerequisites, or jurisdictional ambiguity materially change recommendations.
- Track every denied handoff and every closure blocked by acceptance failure.

## Deployment, Monitoring, And Rollback

- Monitoring:
  - log handoff decisions, routing blockers, owner conflicts, and escalation outcomes
  - monitor repeated gaps in outage, OASIS, e-Tag, telemetry, or operator-log evidence
  - monitor source review age and decay-policy triggers
- Logging:
  - record confidence level and refusal triggers for each routed case
  - retain handoff summaries, closure evidence, and source-precedence conflicts per tenant case
  - retain unresolved ambiguity notes for regional or tariff-specific variation
- Rollback:
  - disable package execution in the orchestrator
  - route impacted requests to generic coordination fallback or human operations routing
  - restore prior validated package state
  - rerun repository validation before re-enablement

## Promotion Path

- Keep runtime as `specification-based` until tenant shadow runs and operator review show the lane consistently routes transmission handoffs without authority inflation.
- Promote to a retained implementation only after recurring usage proves that the artifact retrieval hooks, owner matrix, escalation mapping, and refusal behavior are stable across real tenant environments.

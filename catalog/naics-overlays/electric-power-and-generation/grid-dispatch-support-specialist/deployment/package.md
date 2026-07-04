# Deployment Package

## Runtime Model

- Deployment model: specification-based package with immutable manifest, scenario suite, functionality mapping, research summary, and readiness evidence.
- Runtime expectation: coordinator role invoked for grid dispatch handoff validation, dependency routing, and closure readiness checks.
- Runtime strategy: `specification-based` retained until a retained implementation is explicitly promoted.

## Required Configuration

- release version and release notes metadata
- source refresh policy and decay handling for NERC, FERC OASIS, and NAESB references
- tenant context retrieval for RTO/market-specific scheduling rules, outage calendars, and owner authorities
- integration hooks for OASIS, scheduling systems, EMS/SCDA evidence points, and coordination ticketing
- escalation targets for operations-control, nerc-compliance-specialist, power-generation-operations-specialist, and power-trading-support-specialist

## Tenant Isolation and Adaptation

- Tenant policy: no cross-tenant leakage of commitments, schedules, or escalation logs.
- Runtime adaptation: per-tenant routing matrices, market-region overrides, and confidence thresholds are tenant-supplied.
- Prohibited adaptation: enabling autonomous dispatch actions, approval overrides, or safety-critical substitutions.

## Operating Notes

- Use this lane for coordination, not execution.
- Every handoff should include prior owner, next owner, required artifacts, and blocker state.
- Escalate when source conflicts, missing prerequisites, or jurisdictional ambiguity materially changes recommendations.
- Track every denied handoff and every closure blocked by confirmation failure.

## Deployment, Monitoring, and Rollback

- Monitoring:
  - log handoff decisions, routing blockers, and escalation outcomes
  - monitor stale dependencies and repeated missing prerequisite patterns
  - monitor source review age and decay-policy triggers
- Logging:
  - record confidence level and refusal triggers for each scenario
  - retain handoff summaries and closure evidence per tenant case
  - retain source citations and unresolved conflicts
- Rollback:
  - disable package execution in the orchestrator
  - route impacted requests to generic coordination fallback
  - restore prior validated package state
  - rerun repository validation before re-enablement
- Commercial and deployment notes:
  - package is documented for tenant roll-out with runtime-specification-based constraints

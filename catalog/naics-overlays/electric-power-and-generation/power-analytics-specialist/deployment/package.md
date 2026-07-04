# Deployment Package

## Runtime Model

- Deployment model: specification-based package with immutable manifest, scenario suite, functionality mapping, research summary, and readiness evidence.
- Runtime expectation: analytics-oriented specialist invoked for metric-definition control, reconciliation, caveat writing, and disclosure-safe reporting support.
- Runtime strategy: `specification-based` retained until a retained implementation is explicitly promoted.

## Required Configuration

- release version and release notes metadata
- source refresh policy and decay handling for EIA, NERC GADS, EPA Part 75, FERC, SEC, and IEEE references
- tenant context retrieval for fleet scope, asset hierarchy, market-region rules, plant historian mappings, and disclosure approvals
- integration hooks for historian, EMS or SCADA, GADS extracts, ECMPS or CEMS tooling, market-settlement systems, and BI environments
- escalation targets for grid-dispatch-support-specialist, generation-maintenance-planning-specialist, power-generation-operations-specialist, environmental-compliance-specialist, and regulatory-reporting-specialist

## Tenant Isolation and Adaptation

- Tenant policy: no cross-tenant leakage of plant performance, outage, emissions, or disclosure-review materials.
- Runtime adaptation: per-tenant metric dictionaries, source-precedence rules, market-region mappings, and confidence thresholds are tenant-supplied.
- Prohibited adaptation: enabling autonomous dispatch actions, compliance certification, engineering approvals, or disclosure signoff.

## Operating Notes

- Use this lane for analysis and reconciliation, not execution or approval.
- Every analytical package should include metric definitions, source hierarchy, refresh posture, caveats, and escalation owner when confidence breaks.
- Escalate when source conflicts, missing prerequisites, market-rule ambiguity, or open safety or emissions exceptions materially change recommendations.
- Track every refused claim, every blocked disclosure, and every unresolved denominator or interval dispute.

## Deployment, Monitoring, and Rollback

- Monitoring:
  - log metric-definition choices, source conflicts, and escalation outcomes
  - monitor stale evidence feeds, repeated reconciliation gaps, and source-review age
  - monitor disclosure-blocked requests and repeated unsupported benchmark or causal asks
- Logging:
  - record confidence level and refusal triggers for each request
  - retain analytical briefs, caveat notes, and reconciliation evidence per tenant case
  - retain source citations, unresolved ambiguities, and tenant overrides
- Rollback:
  - disable package execution in the orchestrator
  - route impacted requests to generic analytics fallback or human review
  - restore prior validated package state
  - rerun repository validation before re-enablement
- Commercial and deployment notes:
  - package is documented for tenant roll-out with runtime-specification-based constraints

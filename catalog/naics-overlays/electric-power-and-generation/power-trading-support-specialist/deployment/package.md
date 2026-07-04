# Deployment Package

## Runtime Model

- Deployment model: specification-based package with immutable manifest, scenario suite, functionality mapping, research summary, and readiness evidence.
- Runtime expectation: support-oriented specialist invoked for trade, schedule, transmission, settlement, billing, dispute, and stakeholder-communication support.
- Runtime strategy: `specification-based` retained until a retained implementation is explicitly promoted.

## Required Configuration

- release version and release notes metadata
- source refresh policy and decay handling for FERC, NERC, NAESB, CAISO, and PJM references
- tenant context retrieval for market participation model, balancing authority context, tariff or market-manual version, trade and schedule identifiers, and approval-routing owners
- integration hooks for ETRM or CTRM, ISO or RTO portals, OASIS, e-Tag, EIR, settlement-reporting systems, invoice or dispute systems, and ticketing or CRM environments
- escalation targets for power-trader-or-market-operations-specialist, transmission-scheduling-specialist, power-settlements-specialist, credit-and-collateral-risk-specialist, legal-and-compliance-specialist, and energy-regulatory-reporting-specialist

## Tenant Isolation and Adaptation

- Tenant policy: no cross-tenant leakage of trades, positions, schedules, transmission reservations, settlement statements, invoice details, or dispute materials.
- Runtime adaptation: per-tenant market manuals, tariff references, product mappings, system connectors, approval matrices, and confidence thresholds are tenant-supplied.
- Prohibited adaptation: enabling autonomous bid or offer action, credit approval, regulatory signoff, conduct interpretation, or transmission-function information sharing.

## Operating Notes

- Use this lane for support, record review, communication, and escalation, not for trading or approval decisions.
- Every support package should include named market artifacts, systems consulted, missing prerequisites, next owner, and communication-safe phrasing.
- Escalate when source conflicts, missing prerequisites, conduct boundaries, market-rule ambiguity, or unresolved repeat failures materially change recommendations.
- Track every refused workaround, every blocked support case, every conduct-sensitive escalation, and every unresolved settlement or dispute conflict.

## Materialization Expectations

- `commons-crew` needs tenant-supplied task metadata for product scope, market participation model, product taxonomy, and adjacent-lane ownership boundaries.
- `commons-crew` needs runtime retrieval for tariff or manual version, market-specific dispute windows, ETRM mappings, system connectors, approval matrices, and requester or owner roles.
- Regulated-lane caveats: conduct, anti-manipulation, market-based-rate, and regulatory-reporting limits must remain hard stops, not advisory suggestions.
- Refusal or orchestrator return is required whenever market truth cannot be established, authority shifts to trading or compliance owners, or the request would bypass settlement, schedule, transmission, or conduct controls.

## Deployment, Monitoring, and Rollback

- Monitoring:
  - log source selections, market assumptions, blocked prerequisites, and escalation outcomes
  - monitor stale settlement feeds, repeated schedule or tag failures, and unresolved source conflicts
  - monitor unsupported trading, credit, and conduct-sensitive requests for drift
- Logging:
  - record confidence level and refusal triggers for each request
  - retain resolution notes, communication summaries, and escalation packets per tenant case
  - retain source citations, unresolved ambiguities, and tenant overrides
- Rollback:
  - disable package execution in the orchestrator
  - route impacted requests to a generic support fallback or human review
  - restore prior validated package state
  - rerun repository validation before re-enablement
- Commercial and deployment notes:
  - package is documented for tenant roll-out with runtime-specification-based constraints

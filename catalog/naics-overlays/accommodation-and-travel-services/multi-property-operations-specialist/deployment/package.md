# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - portfolio operating model, property hierarchy, property tiers, planning horizon, service model, and allocation tie-break logic;
  - tenant systems-of-record connectors for PMS rollups, CRS or booking engine, labor scheduling, housekeeping or room-status, work orders, CRM, contact center, cross-property issue tracker, incident management, fraud or loss prevention, payment or folio, and policy registry;
  - approval matrix for staffing, overtime, guest walks, room-control moves, pricing, refunds, compensation, safety, fraud, executive tradeoffs, and local policy exceptions.
- Required task and boundary metadata:
  - portfolio planning queue schema and decision-surface controls;
  - output schema for cross-property allocation briefs, portfolio disruption summaries, constraint logs, schedule or staffing recommendations, and approval-needed escalation notes;
  - confidence threshold, low-confidence policy, source-precedence policy, adjacent-specialist routing map, and orchestrator-return rules.
- Required systems of record:
  - portfolio operations dashboard,
  - PMS rollup and CRS or booking engine,
  - labor scheduling or workforce-management system,
  - housekeeping or room-status system,
  - work-order or maintenance system,
  - CRM, contact-center, and service-ticket systems,
  - cross-property issue tracker,
  - incident-management and safety systems,
  - fraud or loss-prevention case system,
  - payment gateway or folio ledger,
  - policy and approval registry.

## Deployment Notes

- This lane is recommendation-only and must not execute staffing changes, guest walks, room-control moves, pricing changes, refund decisions, safety clearance, fraud decisions, or executive tradeoffs.
- Each run should record:
  - scenario ID or request type,
  - property set and planning horizon,
  - mandatory input-set completeness,
  - authoritative records used,
  - allocation rules and assumptions,
  - source freshness and source-policy conflicts,
  - refusal or escalation cause when authority, safety, fraud, pricing, refund, or policy context is missing,
  - final recommendation artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer budget, staffing, room-control, pricing, refund, safety, fraud, labor, or executive approval,
  - do not bypass source-policy conflict,
  - do not treat safety-sensitive rooms, unresolved incidents, suspicious bookings, or fraud-sensitive payments as ordinary capacity,
  - do not apply a single-property exception across the portfolio without documented authority.

## Rollback Requirements

- Disable binding in the orchestrator and route relevant portfolio operations requests to human-safe fallback.
- Persist open blockers, unresolved policy conflicts, incident-sensitive decisions, fraud-sensitive records, and pending approval-needed summaries for audit continuity.
- Restore the last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after tenant connectors, policy adapters, property hierarchy, allocation rules, and authority maps are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated cross-property evidence handling, clear refusal and escalation behavior, tenant connector maturity, and explicit governance approval.

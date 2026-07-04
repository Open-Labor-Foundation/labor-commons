# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution).
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog package.

## Materialization Requirements

- Tenant runtime requirements:
  - mission policy and continuity matrix,
  - route/owner mapping and authority directory,
  - inventory, logistics, contract, and readiness system connectors,
  - security/sensitivity handling settings.
- Required task and boundary metadata:
  - artifact-to-state mappings,
  - shortage/contingency thresholds,
  - handoff closure criteria,
  - source precedence policy.
- Required systems of record:
  - inventory and movement systems,
  - supplier and contracting records,
  - mission readiness registers,
  - risk and security control repositories.

## Deployment Notes

- Deployment posture: `specification-based` with strict no-execution contract.
- The package must reject direct procurement, reroute, or legal/financial decisions.
- Observability and rollback requirements:
  - track scenario ID, blocker set, and refusal reason,
  - track source refresh checks and conflicts,
  - track handoff summaries and destination owner acceptance.
- Rollback path:
  - disable the lane in orchestrator,
  - route affected work to orchestrator-safe fallback,
  - preserve outstanding blocker records,
  - re-enable only after governance approval.

## Deployment and Commercial Notes

- The package remains a validated catalog artifact and explicitly does not claim trusted built behavior.
- Promotion path to retained implementation requires:
  - sustained successful operation,
  - governance review,
  - evidence that escalation and boundary rules remain stable under production conditions.

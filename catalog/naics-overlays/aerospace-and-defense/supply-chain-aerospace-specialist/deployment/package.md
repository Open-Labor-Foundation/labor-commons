# Deployment Package

## Deployment Mode

- Package path: `catalog/naics-overlays/aerospace-and-defense/supply-chain-aerospace-specialist/`
- Delivery status: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not included
- Validation profile: `standard`

## Materialization Requirements

### Tenant Facts

- Tenant policy and service model for mission criticality and continuity thresholds.
- Release authority, hold/post-hold conditions, and substitution constraints.
- Orchestrator return policy and owner routing directory.
- Jurisdiction and facility/program context for defense aerospace operations.
- Security, export, or CUI handling constraints if records require special handling.

### Required Runtime Metadata

- Queue metadata: issue slug, domain overlay, workflow phase, resolved profile, and delivery target.
- Specialist metadata: allowed decisions, allowed outputs, refusal triggers, adjacent specialists, and escalation policy from manifest.
- Source mapping metadata: DoD/FAA/DFARS/IAQG and tenant policy precedence settings.

### Required Systems of Record

- ERP, MES, and WMS or equivalents.
- Supplier management and procurement systems.
- Inventory and planning systems.
- Quality management systems.
- Traceability, logistics, and release/change-control systems.

## Deployment Notes

- Keep this lane as `specification-based` and treat it as coordination-only.
- The lane must:
  - validate handoff context before summary generation,
  - emit `dependency-tracker`, `handoff-summary`, `availability-or-logistics-status-summary`, and closure outputs with acceptance preconditions,
  - block execution asks that belong to supplier substitution, PO/transport updates, hold lifting, or direct release.
- Record scenario IDs, escalation reason, blocker list, and owner map for each routed case.

## Deployment Gates

- Confirm all required files are present and consistent:
  - manifest.yaml
  - evaluation/scenarios.md
  - evaluation/functionality-map.json
  - evaluation/research-summary.json
  - evaluation/results.json
  - readiness/evidence.json
  - readiness/release.md
  - deployment/package.md
  - positioning/readiness.md
- Confirm `runtime_strategy` remains `specification-based` and `trusted_built_runtime_committed` is false.
- Confirm human verification is recorded and functionality coverage is complete.
- Confirm source review, decay, and refresh metadata is present on all major authoritative sources.
- Confirm no completion can be produced without required tenant facts and prerequisite acceptance evidence.

## Rollback

- Remove or disable this lane in routing tables if source refresh, evidence, or scenario coverage diverges.
- Keep all in-flight blocker records, dependency maps, and handoff logs.
- Re-route affected requests to orchestrator-safe fallback with unresolved-owner context preserved.
- Resume only with explicit governance authorization.

## Monitoring

- Track refusal and escalation rates by:
  - missing tenant policy or authority maps,
  - unresolved duplicate ownership,
  - traceability conflict between ERP/MES/WMS,
  - supplier substitution pressure,
  - quality hold/release-boundary cases.
- Track source refresh violations and stale evidence risks before confident routing.

## Promotion Path

Runtime should remain `specification-based` until a separate retained-implementation package is explicitly approved.
Promotion requires independent build with:
- bounded runtime prompt or automation controls,
- connector permission controls,
- audit hooks,
- rollback and safety controls,
- sustained stability in boundary handling and zero unresolved regression behavior.

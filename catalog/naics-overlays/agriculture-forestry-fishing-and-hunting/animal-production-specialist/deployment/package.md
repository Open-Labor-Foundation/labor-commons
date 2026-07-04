# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator capable of specification-based specialist routing.
- Deployment form: validated spec-pack under
  `catalog/naics-overlays/agriculture-forestry-fishing-and-hunting/animal-production-specialist/`.
- Required orchestration assets: manifest, scenarios, functionality map, research summary, results, readiness evidence, release notes, deployment notes, and marketing readiness.

## Required Configuration

- release version
- source refresh policy and review dates from manifest and research summary
- retrieval connectors for:
  - farm, land, pasture, and herd/lot records
  - production and processing state systems
  - environmental and program systems
  - traceability and transport records
  - quality, incident, and hold/release systems
- escalation target map for:
  - environmental compliance
  - food safety
  - veterinary or external health review
  - program administration
  - review operations
- tenant matrices for:
  - throughput ceilings
  - seasonal shift controls
  - hold/release boundaries
  - exception routing

## Tenant Adaptation and Runtime Materialization

- Required task metadata:
  - lane slug, industry profile, release version, cycle phase, location/season, and workflow state.
- Required boundary metadata:
  - authority owner matrix, adjacent specialist routing map, source precedence order, and stop conditions.
- Required assumptions to be tenant supplied or retrieved at runtime:
  - jurisdiction, species classes, facilities, production lines, approval matrix, and grant or program constraints.
- Regulated-lane caveats:
  - Public sources define federal baseline only; tenant SOPs and jurisdictional rules still override where lawful and must be injected at runtime.
- Conditions requiring refusal or orchestrator return:
  - missing artifacts that can alter progression state,
  - unresolved environmental or welfare emergency conditions,
  - requested authority beyond execution-processing-and-fulfillment lane.

## Operations and Monitoring

- Monitor low-confidence flags from traceability gaps, record conflicts, missing land/environment evidence, and recurring adjacent-owner escalations.
- Track blocked ratio, average evidence time to close exceptions, and seasonal risk exception rates.

## Rollback and Recovery

- Disable or de-register the specialist in orchestrator config.
- Route affected animal-production cases to safe fallback specialist list with human review.
- Restore prior validated manifest bundle.
- Re-run `npm run audit:spec-pack` for this industry-lane before re-enable.

## Promotion and Compliance Notes

- Runtime stays `specification-based` in this package and does not claim trusted built authority.
- Promote to retained implementation only when repeated production usage demonstrates stable retrieval wiring, auditability, and governance sign-off.

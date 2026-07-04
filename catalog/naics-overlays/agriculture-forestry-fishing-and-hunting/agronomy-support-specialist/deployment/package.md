# Deployment Package

## Scope

Deploy the Agronomy support specialist as a validated spec pack for
agriculture, forestry, fishing, and hunting tenants that need agronomy-support
service resolution with explicit field, season, traceability, environmental,
food-safety, and program dependencies.

Runtime strategy remains `specification-based`. The package may guide JIT materialization
in `commons-crew`, but it does not claim that a retained implementation exists.

## Required Runtime Inputs

- Tenant service model, supported request types, policy exception rules, and
  escalation owner matrix.
- Jurisdiction, business unit, farm, field, block, crop, variety, season, crop
  stage, geography, land context, and program context.
- Systems-of-record and retrieval hooks for farm management, GIS, field
  operations, agronomy CRM, weather, irrigation, telemetry, pesticide and
  nutrient records, traceability, food-safety, environmental compliance, and
  program files.
- Authority boundaries for certified crop adviser, licensed applicator,
  environmental compliance, food-safety, field operations, crop-insurance,
  grant, program administration, veterinary, legal, and financial approval
  owners.
- Tenant rules for customer or stakeholder communication, complaint handling,
  policy exceptions, and handoff confirmation.

## Deployment Steps

1. Register the package path and release version in catalog metadata as a
   validated spec pack.
2. Configure tenant retrieval for field identity, crop plan, field logs, soil,
   weather, input records, harvest lots, traceability, food-safety, and program
   files.
3. Configure source precedence for farm management, GIS, agronomy CRM, field
   operations, weather, traceability, food-safety, and program systems.
4. Configure refusal and escalation routing for agronomic, pesticide,
   environmental, food-safety, program, insurance, legal, financial, and
   veterinary authority.
5. Run the scenario suite against tenant-specific fixtures before enabling JIT
   materialization.
6. Record tenant assumptions, unresolved retrieval gaps, and authority-owner
   mappings in readiness evidence.

## Rollback

Rollback is a metadata and routing change because no retained implementation is
shipped in this package.

1. Disable tenant routing to the spec pack or remove it from the eligible
   materialization set.
2. Revert to the prior package version or safe failure with an unsupported-lane
   message.
3. Preserve request logs, field records, escalation packets, and customer
   communications generated during the deployment window.
4. Review incidents for boundary overreach, missing retrieval, stale source, or
   tenant policy conflict before re-enabling.

## Monitoring

- Track requests resolved directly, blocked on missing prerequisites, and routed
  to adjacent owners.
- Track source freshness, tenant retrieval failures, source conflicts, and
  low-confidence dispositions.
- Track attempted signoff overreach for agronomic recommendations, pesticide
  handling, reentry, preharvest interval, environmental compliance, food-safety
  release, program eligibility, crop-insurance, grant, legal, financial, and
  veterinary authority.
- Track repeat failures by field, system, crop, season, owner, and record type.

## Materialization Notes For `commons-crew`

`commons-crew` must materialize this lane with task metadata for support intake,
record validation, resolution note generation, stakeholder communication,
escalation package assembly, seasonal dependency handling, and environmental or
food-safety risk escalation.

It must retrieve tenant field identifiers, systems of record, source precedence,
authority owners, communication rules, and escalation routes at runtime. It must
refuse or return to the orchestrator when those facts are absent and would
change the outcome.

Regulated-lane caveats must remain active: no agronomic, pesticide-label,
licensed applicator, veterinary, environmental, food-safety, crop-insurance,
grant, program, legal, financial, or policy-override authority is created by
materialization.

## Trusted Build Promotion

Promote from spec pack to retained implementation only after usage proves the lane
is common enough to maintain, tenant retrieval integrations are stable, scenario
fixtures cover real operating variants, and an implementation owner commits a
separate trusted build with rollback and validation evidence.

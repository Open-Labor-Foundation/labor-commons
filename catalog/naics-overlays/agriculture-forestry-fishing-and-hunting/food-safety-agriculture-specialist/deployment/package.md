# Deployment Package

Package: `food-safety-agriculture-specialist`

Target delivery level: `validated`

Runtime strategy: `specification-based`

## Deployment Notes

Deploy this overlay as a validated specification pack for agriculture, forestry, fishing, and hunting tenants that need bounded food-safety evidence support. The runtime must not treat package existence as proof of a trusted built implementation.

Before tenant use, configure:

- Tenant policies for food-safety plan ownership, hold and release authority, incident escalation, corrective action, and final QA approval.
- Jurisdiction, commodity, product, field, livestock, season, geography, buyer, grant, organic, and program constraints.
- Systems of record for field logs, water records, sanitation logs, soil amendment records, traceability, packing, cooling, livestock records, environmental reports, CAPA, and document control.
- Retrieval hooks for harvest lot, traceability lot code, KDE, hold status, water test, corrective action, worker training, equipment sanitation, and approval records.
- Adjacent specialist routes for field operations, environmental compliance, food safety, program administration, agronomy, animal production, agricultural supply chain, legal interpretation, and formal QA.

## Materialization Requirements For `commons-crew`

`commons-crew` must materialize the lane with:

- Task metadata that limits the specialist to evidence review, status summaries, hold or nonconformance records, corrective-action packages, incident summaries, and high-risk escalation notes.
- Boundary metadata that refuses legal, licensed, agronomic, veterinary, environmental, pesticide-label, grant-payment, recall-command, final release, and final QA signoff.
- Required-input guards for tenant policy, jurisdiction, commodity, season, geography, field or livestock context, water source, hold status, traceability context, systems of record, and approval authority.
- Evidence requirements for field logs, water records, soil amendment records, sanitation and worker records, harvest and cooling records, traceability KDEs, livestock movement or withdrawal records where relevant, incident records, and corrective-action evidence.
- Refusal and orchestrator-return rules for missing records, unresolved holds, contradictory traceability, conflicting policies, seasonal or environmental changes, and requests for authority outside the lane.

## Rollback

If the lane produces over-authoritative food-safety, harvest, release, agronomic, veterinary, environmental, grant, or legal behavior:

1. Disable tenant routing to this overlay and route food-safety requests to human food-safety or QA owners.
2. Preserve the triggering request, retrieved records, produced output, source baseline, and tenant policy context.
3. Revert to the previous catalog state or remove the tenant entitlement while the spec is corrected.
4. Refresh `evaluation/scenarios.md`, `evaluation/results.json`, `evaluation/functionality-map.json`, and `readiness/evidence.json` before re-enabling.

## Promotion Path

Promote this overlay to a retained implementation only after repeated usage proves the lane is common enough to maintain. Promotion requires a separate PR with committed runtime artifacts, implementation tests, updated validation evidence, explicit trusted-build metadata, and human approval. Until then, the package remains a validated `specification-based` source.

# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` (spec-pack orchestrator)
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Target delivery level: `validated`.
- Runtime version target: `v0.1.0`.

## Required Materialization Inputs

- Tenant and operation context: tract, timber sale, harvest unit, stand, compartment, road segment, landing, mill, jurisdiction, land ownership, contract, program, and business-unit identifiers.
- Source-of-truth metadata for systems of record:
  - forestry operations management system,
  - timber sale administration or contract file system,
  - inspection, compliance, and field log system,
  - dispatch, haul routing, road-use, and mill receipt system,
  - environmental and BMP monitoring system,
  - safety incident and worksite observation system,
  - traceability, load ticket, scale ticket, and chain-of-custody ledger,
  - grant, stewardship, and program administration system.
- Tenant retrieval map for:
  - timber-sale contract, sale notice, special provisions, authority matrix, and contract-file records,
  - logging plan, operation plan, fire-control plan, pre-work conference notes, and subcontractor assignments,
  - harvest maps, boundary/road/landing/skid trail records, seasonal restrictions, and wet-weather release records,
  - inspection reports, safety observations, remedy notices, photos, and communication logs,
  - road-condition, erosion-control, streamside, water-quality, and BMP monitoring evidence,
  - load tickets, scale tickets, deck inventory, species/product identifiers, chain-of-custody certificates, and mill receipt records,
  - artifact handoff proofs and destination-owner acknowledgment states.
- Escalation routing map to:
  - field-operations-specialist,
  - environmental-compliance-specialist,
  - food-safety-specialist,
  - program-administration-specialist,
  - safety-compliance-specialist,
  - contract-administration-specialist,
  - forestry-operations-specialist,
  - human orchestrator or designated authority reviewer.

## Boundary Metadata

- Task metadata must include requested coordination state, prior owner, candidate next owner, artifact list, blocker list, source-system references, confidence state, and requested output shape.
- Boundary metadata must mark contract-officer, environmental-authority, safety-authority, legal, financial-approval, and licensed forestry decisions as external to this lane.
- Refusal metadata must be emitted when a request asks the lane to waive restrictions, authorize harvest or hauling, approve BMP deviations, certify safety, modify contracts, release bonds/payments, or close work without destination-owner proof.

## Deployment and Isolation

- Tenant data isolation: no cross-tenant transfer of timber-sale files, maps, field logs, load/scale records, traceability records, environmental reports, safety observations, program files, or contractor records.
- Knowledge boundary: public forestry, safety, environmental, weather, and traceability references are retained as shared baseline; tenant-specific contracts, permits, ownership maps, grant rules, and approval matrices are injected only via tenant context.
- Output boundary: package may produce handoff summaries, blocked-dependency notes, routing confirmations, dependency trackers, and closure confirmations; it may not output direct contract, safety, environmental, legal, financial, silvicultural, or permit authorization.

## Operations

- Logging must include:
  - scenario IDs, prior owner, next owner, blocker state,
  - missing prerequisite list,
  - contract, weather/fire, seasonal, environmental, safety, and traceability blockers,
  - source-system references and confidence state,
  - escalation destination and rationale.
- Monitoring alerts should trigger on:
  - missing pre-work, logging-plan, inspection, BMP, load/scale, custody, or destination-owner evidence,
  - repeated duplicate-owner routing,
  - unresolved source-policy or contract-policy conflicts,
  - attempts to convert coordination into direct execution or formal approval authority.

## Rollback

- Disable the specialist instance.
- Route affected requests back to orchestrator-safe fallback handling.
- Restore prior spec-pack revision.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry agriculture-forestry-fishing-and-hunting --agent logging-coordination-specialist --json`.

## Promotion Path

- Keep as `specification-based` until telemetry, escalation outcomes, and stakeholder acceptance support trusted runtime promotion.
- Promotion criteria:
  - stable operation under real tenant retrieval,
  - low ambiguity and low boundary-escape incidents,
  - explicit owner and blocker metadata quality,
  - demonstrated source refresh process for forestry, weather/fire, environmental, safety, and traceability baselines,
  - acceptance by contract, safety, environmental, and forestry operations owners that the lane routes authority rather than claiming it.

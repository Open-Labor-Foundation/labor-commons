# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` (spec-pack orchestrator)
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Target delivery level: `validated`.
- Runtime version target: `v0.1.0`.

## Required Materialization Inputs

- Tenant and land/operation context: farm, plot, fisheries zone, forestry parcel, or livestock unit identifiers.
- Source-of-truth metadata for systems of record:
  - farm/field management system,
  - maintenance or dispatch system,
  - traceability or custody system,
  - environmental monitoring system,
  - grant/program administration system.
- Tenant retrieval map for:
  - field logs,
  - maintenance and readiness records,
  - land/seasonal condition records,
  - operator/crew assignment records,
  - environmental and food-safety risk notices,
  - artifact handoff proofs and destination-owner acknowledgment states.
- Escalation routing map to:
  - field-operations-specialist,
  - environmental-compliance-specialist,
  - food-safety-specialist,
  - program-administration-specialist.

## Deployment and Isolation

- Tenant data isolation: no cross-tenant transfer of field logs, traceability records, grant artifacts, or operator records.
- Knowledge boundary: public agricultural and environmental references are retained as shared baseline; tenant-specific policies, permits, grants, and approvals are injected only via tenant context.
- Output boundary: package may produce handoff summary, blocked-dependency notes, routing confirmations, and closure confirmations; it may not output direct permit, veterinary, legal, or safety authorization.

## Operations

- Logging must include:
  - scenario IDs, prior owner, next owner, blocker state,
  - missing prerequisite list,
  - seasonal/environmental blockers and confidence state,
  - escalation destination and rationale.
- Monitoring alerts should trigger on:
  - missing artifact handoffs,
  - repeated duplicate-owner routing,
  - unresolved source-policy conflicts,
  - attempts to convert coordination into direct execution.

## Rollback

- Disable the specialist instance.
- Route affected requests back to orchestrator-safe fallback handling.
- Restore prior spec-pack revision.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry agriculture-forestry-fishing-and-hunting --agent farm-equipment-coordination-specialist --json`.

## Promotion Path

- Keep as `specification-based` until telemetry, escalation outcomes, and stakeholder acceptance support trusted runtime promotion.
- Promotion criteria:
  - stable operation under real tenant retrieval,
  - low ambiguity and low boundary-escape incidents,
  - explicit owner and blocker metadata quality.

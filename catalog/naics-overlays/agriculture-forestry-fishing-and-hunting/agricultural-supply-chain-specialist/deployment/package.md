# Deployment Package

## Runtime

- Target runtime: `commons-crew` or equivalent orchestrator capable of retrieval-aware coordination and specialist boundary routing.
- Deployment model: versioned spec-pack containing manifest, research summary, functionality map, scenario pack, evaluation results, readiness evidence, deployment notes.
- Required configuration:
  - release version
  - source freshness policy
  - retrieval hooks for field/livestock/forest/fishery systems, inventory systems, logistics systems, environmental records, and grant records
  - adjacent owner registry and escalation matrix for food-safety, environmental, veterinary, agronomic, program, and procurement owners
  - tenant policy for hold/posture, supplier substitution, and destination acceptance

## Isolation

- Tenant boundary: no cross-tenant sharing of field logs, lot or catch records, inventory snapshots, environmental data, grant documents, or routing artifacts.
- Knowledge boundary: public regulatory and traceability references are shared, while tenant policy, grant, and local operating maps are injected per tenant request.
- Adaptation policy:
  - allowed: terminology normalization, role and owner registries, seasonality/permit overlays, and retrieval path maps.
  - prohibited: widening to agronomic, veterinary, environmental signoff, legal interpretation, or logistics execution authority.

## Operations

- Monitoring:
  - log dependency handoff decisions, owner overlaps, traceability conflicts, seasonal blocks, environmental or hold escalations, shortage and vendor-risk escalations, and closure states.
  - monitor repeated attempts to bypass hold, release, agronomic/veterinary, environmental, or policy-boundary posture.
  - monitor source refresh staleness and stale seasonal/permit assumptions.
- Logging:
  - record release version, scenario ID, request context, prior owner, next owner, artifact completeness, blocker state, and any source/policy conflict.
  - record whether output is escalation-only or boundary-safe routing due to missing records.
- Rollback path:
  - disable the active specialist release,
  - route affected requests to orchestrator-safe fallback handling,
  - restore prior validated package state,
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry agriculture-forestry-fishing-and-hunting --agent agricultural-supply-chain-specialist` before re-enabling.

## Deployment Notes

- Internal role: evidence-backed agricultural continuity specialist for intake, handoff packaging, availability and logistics status, blocker tracking, seasonal gating, and closure confirmation.
- Materialization requirements for `commons-crew`:
  - task metadata with commodity family, season/window, location, source records, lot/farm/pen identifiers, and destination handoff context.
  - boundary metadata showing adjacent-owner mappings and source-of-truth systems.
  - retrieval dependencies for field/livestock/fishery/forest records, inventory/logistics systems, environmental constraints, and grant administration.
  - tenant overlays for hold posture, substitution constraints, food-safety and environmental escalation thresholds, and destination-owner acceptance rules.
- Regulated-lane caveats:
  - food-safety, environmental, and permit-related obligations must be respected with explicit tenant policy overlays and source-pair escalation.
  - this package does not claim any direct legal, environmental permit, clinical, or veterinary authority.
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.

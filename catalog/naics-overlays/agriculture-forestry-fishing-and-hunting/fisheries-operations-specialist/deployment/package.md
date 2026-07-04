# Deployment Package

## Runtime Model

- Deployment mode: Spec-pack, manifest-driven specialist overlay under `specification-based`.
- Runtime target: `validated`.
- Lane entrypoint: `naics-overlays/agriculture-forestry-fishing-and-hunting.fisheries-operations-specialist`.
- Package version: `v0.1.0`.
- Runtime contract: no retained-implementation claim is made until a separate promotion event.

## Required Task and Boundary Metadata

- Task context must include:
  - `jurisdiction`
  - `vessel or farm identifier`
  - `production phase`
  - `seasonal window`
  - `catch or lot identifiers`
  - `land/field or water-body context`
  - `destination owner and acceptance rules`
- Boundary metadata must include:
  - adjacent owner registry (field operations, environmental, food-safety, program administration)
  - allowed/blocked authority map
  - risk posture and hold rules
  - tenant-required artifacts and retrieval hints

## Assumptions and Assured Retrieval

- Tenant-specific assumptions must be provided for:
  - legal/jurisdictional overrides
  - permit status and grant/program obligations
  - tenant approval matrix and completion criteria
- Runtime assumptions must be explicit in queue intake outputs.
- Retrieval dependencies are required for:
  - farm/field/livestock/fishery systems
  - traceability ledgers and transfer systems
  - environmental and weather systems
  - grant/program repositories and policy registries

## Regulated-Lane Caveats

- This lane must not take legal, licensed veterinary/agronomic, environmental permit-signoff, or financial-approval actions.
- This lane must not infer safe completion when environmental, food-safety, traceability, or seasonal blockers exist.
- Escalation or orchestrator return is mandatory when ambiguity or jurisdictional conflict is present.

## Rollback and Promotion

- Rollback path:
  - disable this specialist release artifact
  - route affected requests to orchestrator fallback
  - restore prior validated behavior
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry agriculture-forestry-fishing-and-hunting --agent fisheries-operations-specialist`
- Promotion criteria to retained implementation:
  - stable usage telemetry for lifecycle state transitions
  - repeatability on blockers/escalations
  - validation evidence with human signoff above threshold
  - explicit governance approval for retained-implementation transition

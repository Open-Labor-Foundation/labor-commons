# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that can route this specification-based lane with tenant retrieval hooks.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, evaluation suite, functionality map, research summary, readiness evidence, release notes, deployment notes.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Required secrets: none in the package itself; tenant retrieval credentials for vegetation systems, GIS, permitting records, and wildfire-program evidence remain orchestrator-controlled.

## Required Configuration

- release version and artifact checksum metadata
- source refresh policy and review cadence for FERC, NERC, OSHA, Energy Safety, and Forest Service references
- retrieval connectors for:
  - vegetation management work systems and annual work plans
  - GIS/asset registry and circuit classification data
  - patrol, LiDAR, QA/QC, and open work-order evidence
  - permit, easement, landowner, and public-land operating-plan records
  - outage calendars, contractor rosters, and escalation directories
- tenant-specific approval matrices for safety, legal, environmental, herbicide, and budget tradeoff decisions
- tenant tie-break rules for wildfire, reliability, and customer-priority conflicts

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of patrol findings, circuit risk data, permits, landowner disputes, or contractor allocations.
- Knowledge boundary: public regulator and standards references remain shared; tenant operating thresholds, route maps, and approval ownership are injected at request time.
- Allowed adaptation: tenant wildfire rankings, asset segmentation, contractor models, route ownership, permit workflows, and escalation targets.
- Prohibited adaptation: converting the lane into field-execution supervision, switching authority, legal/easement decisioning, or environmental/herbicide approval authority.

## Operations

- Monitoring:
  - low-confidence escalations caused by missing patrol or permit records
  - repeated capacity conflicts with no approved tie-break rule
  - repeated requests for final approval or safety authority
  - recurring conflicts between transmission and distribution rule regimes
- Logging:
  - request ID, source set used, asset class, missing evidence, assumptions, and escalation targets
  - whether the output was recommendation-only, blocked, refused, or escalated
  - schedule-deferral and service-level impact notes
- Alert triggers:
  - backlog or open-work-order patterns that exceed service-level ceilings
  - repeated unsafe requests to waive minimum approach or permit constraints
  - source refresh failures on regulator or standards references

## Rollback and Recovery

- Disable the specialist release in orchestrator configuration.
- Route affected requests to a safe fallback that requires human routing and approval.
- Restore the prior validated spec-pack bundle.
- Re-run spec-pack audit and repository validation before re-enabling.

## Materialization Notes

- `commons-crew` needs task metadata for asset class, circuit or ROW scope, request type, and claimed authority level.
- Runtime retrieval must supply tenant-specific facts for priority model, outage windows, permit/access status, contractor capacity, and approval owners.
- Regulated-lane caveat: the public baseline is not enough for final recommendations when tenant wildfire commitments, easement conditions, or local operating rules materially change sequencing.
- Refusal or orchestrator return is required when the request needs switching authority, legal/easement interpretation, environmental/herbicide signoff, or final operational approval.

## Deployment Notes

- This package is validated as a spec pack but does not claim a retained implementation.
- Health checks should confirm artifact presence, YAML/JSON parseability, required scenario coverage, and consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.

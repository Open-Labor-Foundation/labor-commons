# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Targeted runtime behavior: evidence-guided permit-path handling, correction-cycle management, and bounded escalation for architecture-and-engineering teams.
- Runtime remains `specification-based` until a retained-implementation upgrade is explicitly promoted in a separate change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit boundary scope, refusal conditions, adjacent-lane routing, tenant adaptation policy, and return-to-orchestrator rules.
- Evaluation artifacts: `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- Readiness evidence files: `readiness/evidence.json` and `readiness/release.md`.
- Deployment and commercialization notes in `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Jurisdiction list, project address, permit classes, occupancy or use context, and project delivery model.
- Applicant-of-record, owner, licensed-design, and approval authority matrix.
- Tenant policy for CDE or EDMS document control, permit naming, transmittal discipline, and portal ownership.
- Permit register, current portal statuses, review deadlines, correction-cycle ownership, and inspection or sign-off checkpoints.
- Environmental and utility dependency facts, including land disturbance, stormwater, wetland or water-resource, fire, life-safety, transportation, and utility triggers.

### Systems of record and retrieval dependencies

- Common data environment or EDMS.
- Project management system and permit register.
- AHJ permit portals and plan-review systems.
- Email and correspondence archive.
- Inspection or special-inspection tracking system.
- Environmental permit folders or portals.
- Tenant authority and policy repository.

### Regulated-lane caveats

- This lane supports permitting readiness and escalation; it does not replace licensed architect, licensed engineer, legal counsel, environmental determinations, or regulator authority.
- Jurisdiction-specific permit names, portal states, and filing rules vary materially and must be retrieved at runtime before case-specific output is trusted.
- A building permit path does not eliminate environmental, utility, fire, or transportation permit dependencies.
- Sealed-design, code-interpretation, and final approval questions must be routed, not inferred.

### Refusal and return conditions

- Return to orchestrator when required jurisdiction, applicant, project, or portal facts are missing.
- Return to orchestrator when public-source, tenant-policy, or jurisdictional conflicts materially change the permit path.
- Return to orchestrator when legal, licensed-design, environmental, land-use, regulator-facing, or approval authority is required.
- Refuse to represent uncontrolled revisions, incomplete evidence, or unresolved dependencies as ready for filing or sign-off.

## Deployment and Rollback

- Deployment: enable only for tenants with explicit jurisdiction retrieval, permit-register ownership, adjacent-lane routing, and document-control rules configured.
- Rollback: disable specialist routing and return open requests to orchestrator-safe handling with context, blockers, and unresolved dependencies preserved.
- Monitoring recommendations: evidence-missing rate, correction-cycle conflict rate, portal or system mismatch incidents, unauthorized signoff requests, and low-confidence escalation volume.

## Validation evidence and Promotion Notes

- Positioning: validated architecture-and-engineering permitting specialist for permit-path definition, evidence readiness, correction-cycle handling, and escalation safety.
- The package is not retained-implementation and does not claim licensed, legal, or regulator-facing authority.
- Promote to a retained-implementation runtime only if usage proves common enough through repeated tenant demand, stable workflow telemetry, and human-reviewed non-regression evidence, then commit the built package in a separate PR.

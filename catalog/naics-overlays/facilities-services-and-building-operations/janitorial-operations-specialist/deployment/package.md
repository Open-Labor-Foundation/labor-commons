# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route facilities janitorial work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for work order, access, inventory, QA, EHS, and approved-product systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for CMMS or work order, janitorial route, inventory, SDS, QA inspection, access-control, incident, complaint, and document systems
  - escalation targets for facilities leadership, safety, inspection, permitting, superintendent, remediation, and licensed trade owners
  - tenant authority maps for approved chemistry, disinfectant use, exposure handling, restricted-area access, waste handling, staffing and spend approval, and completion criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of work orders, room lists, service logs, complaint records, QA scores, chemical lists, access approvals, or incident reports.
- Knowledge boundary: public GSA, OSHA, EPA, and public-institution custodial references are shared; tenant room-taxonomy, shift design, union rules, approved products, infection-control overlays, and building records are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, document templates, connector mappings, approved escalation targets, tenant-specific cleanliness scorecards, and room-priority overlays
  - prohibited: widening the lane into staffing approval, spend approval, clinical infection-control judgment, mold-remediation signoff, pest-control authority, code interpretation, or licensed-trade direction

## Operations

- Monitoring:
  - log janitorial status transitions, restricted-area blockers, supply shortages, QA failures, occupant complaints, safety incidents, spill escalation, mold or moisture observations, and unsupported closure attempts
  - alert on repeated attempts to bypass approved chemistry controls, exposure-control plans, restricted-area release steps, QA hold points, or remediation boundaries
  - monitor recurring complaint clusters, repeated dilution or labeling failures, repeated missing-evidence patterns, and repeated requests that misroute trade, remediation, or commercial authority into this lane
- Logging:
  - record release version, tenant assumptions, facility and room scope, service type, occupancy posture, approved product set, QA posture, and evidence references
  - record whether the request involved spill handling, blood or OPIM exposure, mold or moisture findings, restricted-area access, complaint-driven rework, policy conflicts, or adjacent-lane routing
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry facilities-services-and-building-operations --agent janitorial-operations-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed janitorial operations specialist for routine cleaning execution, service-status control, supply and chemical readiness, QA deficiency handling, and occupant-impact-aware escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, route or zone, room types, requested service, occupancy window, and current blocker or complaint state
  - boundary metadata identifying facilities management, safety, inspection, remediation, and licensed trade owners
  - retrieval dependencies for work orders, route sheets, approved products and SDSs, inventory records, QA inspection systems, access-control records, EHS logs, and complaint tickets
  - tenant overlays for room classifications, approved chemistry and disinfectants, restricted-space handling, waste and recycling rules, exposure-control procedures, union or staffing constraints, and completion thresholds
- Regulated-lane caveats:
  - child-care, healthcare, laboratory, food-preparation, and biohazard-sensitive spaces often impose additional controls, so runtime must retrieve local procedures before making site-ready or completion claims
  - public environmental-cleaning guidance does not replace local hazardous-waste, infection-control, or remediation rules; runtime must know when the tenant has tighter controls
  - runtime must refuse or return to orchestrator whenever clinical infection-control judgment, mold remediation, pesticide application, code interpretation, trade signoff, staffing or spend approval, or regulator-facing authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

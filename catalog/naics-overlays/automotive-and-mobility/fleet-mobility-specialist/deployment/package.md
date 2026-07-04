# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route fleet maintenance and mobility execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant CMMS, ERP, telematics, WMS, supplier, quality, dispatch, and recall connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for CMMS, ERP, telematics, WMS or parts inventory, supplier, quality, dispatch, and VIN or recall systems
  - escalation targets for quality, production planning, inventory, procurement, supplier-quality, logistics, safety, and engineering owners
  - tenant-specific maps for work-order states, approved inspection programs, return-to-service approvers, recall handling rules, out-of-service tags, alternate-part constraints, warranty rules, EV high-voltage controls, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of VIN lists, work orders, DVIRs, inspection reports, telematics events, parts histories, supplier files, or fleet SOPs.
- Knowledge boundary: FMCSA, NHTSA, ISO, GS1, Odette, and CVSA public baselines are shared; tenant-specific work orders, parts catalogs, authority maps, warranty contracts, and fleet policies are injected only at request time.
- Adaptation policy:
  - allowed: terminology, unit and shop names, systems-of-record connectors, state templates, checklist templates, and escalation routing
  - prohibited: widening the lane into licensed inspection signoff, final safety release, engineering disposition, supplier approval, procurement authorization, warranty adjudication, or legal authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, traceability mismatches, recall and out-of-service escalations, unsupported completion attempts, and low-confidence returns
  - alert on stale source reviews, repeated VIN mismatches, repeated open-recall return-to-service attempts, repeated missing work-order repositories, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek licensed inspection, final safety release, engineering signoff, supplier approval, or warranty authority from the lane
- Logging:
  - record release version, tenant assumptions, region and asset context, unit and VIN context, missing evidence, and routed owners
  - record whether the request involved intake validation, active maintenance, traceability conflict, recall or out-of-service escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route fleet-mobility requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry automotive-and-mobility --agent fleet-mobility-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed fleet mobility specialist for maintenance execution, downtime handling, parts and VIN traceability, recall or unsafe-operation escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying unit, VIN, asset class, work order, requested disposition, and service-level timing
  - boundary metadata identifying quality, production planning, inventory, procurement, supplier-quality, logistics, safety, and engineering owners
  - retrieval dependencies for CMMS, ERP, telematics, WMS or storeroom, supplier, quality, dispatch, VIN, recall, and completion-signoff artifacts
  - tenant overlays for approved inspection programs, return-to-service authority, recall and do-not-drive rules, alternate-part constraints, EV high-voltage controls, warranty policies, and completion evidence rules
- Regulated-lane caveats:
  - FMCSA Part 396 directly governs maintenance and inspection posture for commercial motor vehicles in scope; fleets outside that scope must supply the governing local inspection and release baseline
  - NHTSA recall and VIN sources define public identity and safety-defect baselines but do not replace tenant SOPs, dealership or OEM workflows, warranty terms, or customer operating restrictions
  - runtime must refuse or return to orchestrator when licensed inspection signoff, final safety release, engineering approval, supplier approval, warranty adjudication, or legal interpretation is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.

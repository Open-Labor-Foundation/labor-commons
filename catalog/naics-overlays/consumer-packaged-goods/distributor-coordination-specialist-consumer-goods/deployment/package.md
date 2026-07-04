# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest, research, evaluation, and readiness artifacts.
- Runtime expectation: Orchestrator-routed coordination lane for CPG distributor-facing dependency management, handoffs, and blocker escalation.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on local evidence coverage, source grounding, and boundary-safe scenario performance.
- Required configuration:
  - release version
  - source refresh policy
  - tenant policy overlays for release authority, hold rules, substitution constraints, and customer routing priorities
  - integrations for ERP, MES, WMS, QMS, supplier systems, logistics systems, distributor portals, and task trackers
  - escalation targets for quality, production planning, inventory, procurement, supplier quality, and logistics specialists

## Tenant Systems and Adaptation

- Tenant records required: production orders, batch and lot genealogy, inventory reservations, release and hold records, nonconformance and recall status, supplier status, service-level commitments, routing guides, and named owner maps.
- Allowed adaptation:
  - plant, business-unit, product-family, and customer-specific operating assumptions
  - tenant terminology for distributions centers, distributors, 3PLs, and customer service workflows
  - artifact naming and handoff channel conventions
  - customer routing guide overlays and escalation directory details
- Prohibited adaptation:
  - reclassifying coordination as approval authority
  - bypassing traceability, release, hold, or supplier-quality controls
  - widening the lane to warehouse execution, logistics scheduling, planning, or inventory adjustment work

## Materialization Expectations

- `commons-crew` should retrieve:
  - required task metadata for plant, line, product family, distributor, customer, lot or batch, and service-level urgency
  - named boundary metadata for quality release, supplier approval, planning, inventory, and logistics execution ownership
  - runtime hooks for ERP, MES, WMS, QMS, supplier, and logistics systems of record
  - tenant policy artifacts covering hold rules, substitution constraints, customer routing exceptions, and orchestrator return conditions
- Regulated-lane caveats:
  - do not infer final release authority
  - do not infer supplier approval or engineering disposition
  - do not infer lot clearance from schedule pressure or customer urgency
- Refusal or orchestrator-return conditions:
  - missing tenant facts or retrieval hooks materially change the answer
  - conflicting policies or source posture materially change routing
  - quality hold, recall, supplier-approval, or safety-critical authority is required

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 10 coverage scenarios
  - research summary, readiness evidence, functionality map, and deployment notes present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior generic coordination or human orchestration path
  - restore previous validated configuration
  - re-run package audit before re-enabling
- Monitoring requirements:
  - track blocker aging, owner-conflict frequency, and handoff acceptance rates
  - monitor repeated attempts to bypass holds, release rules, or supplier-quality approval
  - monitor traceability conflicts across ERP, MES, WMS, distributor, and 3PL records
  - monitor unresolved closure confirmations and dropped-ownership events

## Notes on use

- Positioning: validated CPG distributor coordination overlay with explicit traceability and release-boundary discipline.
- Tenant support: supports customer supply chain, distributor management, operations, quality, and logistics orchestration teams handling distributor-facing exceptions and handoffs.
- Value: reduces dropped ownership, preserves lot and shipment evidence across team boundaries, and prevents coordination lanes from becoming unsafe approval or execution channels.
- Promotion path to trusted built:
  - collect repeated tenant usage showing stable retrieval, low false-routing rates, and sustained demand
  - validate production telemetry and boundary adherence with explicit runtime hooks
  - commit a separate retained implementation only after that usage proves common enough to justify operationalization

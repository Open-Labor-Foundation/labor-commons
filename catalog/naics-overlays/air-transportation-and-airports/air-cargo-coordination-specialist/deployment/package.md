# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route air cargo coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Required secrets: none in the package itself; tenant cargo, customs, screening, DG, dispatch, WMS, TMS, ULD, maintenance, customer operations, and service-system credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for cargo booking, TMS, WMS, cargo management, customs documentation, cargo security screening, dangerous-goods records, ULD tracking, dispatch references, telematics, fleet, maintenance, customer operations, and service logs
  - escalation targets for dispatch, customs/compliance, cargo security, dangerous-goods, maintenance, warehouse, ramp, airline operations, airport operations, customer operations, legal, financial, and safety owners
  - tenant authority maps for cargo acceptance, e-AWB, screening, secure-chain, customs, DG, NOTOC, route disruption, ULD serviceability, station handoffs, service-level commitments, customer communications, and closure criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of shipment, booking, AWB, customs, screening, DG, ULD, warehouse, ramp, route, customer, service-level, or owner-map records.
- Knowledge boundary: CBP, eCFR, TSA, PHMSA, IATA, and Cargo iQ public baselines are shared; carrier, forwarder, broker, station, security-program, DG, service-contract, and tenant SOP overlays are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, artifact templates, system connector mappings, station owner registries, SLA overlays, and handoff checklists
  - prohibited: widening the lane into booking execution, dispatch authority, customs release, screening certification, dangerous-goods acceptance, safety signoff, maintenance release, financial approval, or physical cargo movement

## Operations

- Monitoring:
  - log handoff decisions, blocked dependencies, owner overlaps, custody breaks, customs gaps, screening gaps, DG or NOTOC discrepancies, route disruptions, service-level impacts, and closure confirmations
  - alert on stale source reviews, repeated attempts to bypass customs, screening, DG, safety, or dispatch boundaries, repeated ownership ambiguity, recurring missing AWB or ULD evidence, and cargo handoffs without destination acknowledgement
  - monitor for requests that incorrectly seek direct execution or final approval authority from the coordination lane
- Logging:
  - record release version, tenant assumptions, shipment identifier, booking reference, MAWB, HAWB, route, flight, prior owner, next owner, required artifacts, blocker state, authority boundary, and systems of record consulted
  - record whether the request involved missing prerequisites, duplicated ownership, custody break, customs boundary, screening boundary, DG boundary, route disruption, policy conflict, or tenant terminology adaptation
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry air-transportation-and-airports --agent air-cargo-coordination-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed air cargo coordination specialist for dependency intake, handoff packaging, blocker escalation, custody-aware routing, route-impact summaries, regulated-boundary refusals, and closure confirmation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying shipment, booking, MAWB, HAWB, e-AWB status, shipper, consignee, forwarder, carrier, origin, transfer station, destination, route, flight, service level, cargo type, requested coordination outcome, and customer commitment
  - boundary metadata identifying dispatch, customs/compliance, cargo security, dangerous-goods, maintenance, warehouse, ramp, airline operations, airport operations, customer operations, legal, financial, and safety owners
  - retrieval dependencies for TMS, WMS, cargo booking, cargo management, customs, screening, DG documentation, ULD tracking, dispatch references, telematics, fleet, maintenance, customer operations, and service logs
  - tenant overlays for station handoff ownership, cargo acceptance, e-AWB, screening, secure chain, customs, DG, NOTOC, ULD serviceability, route disruption, SLA priority, customer communications, and closure criteria
- Regulated-lane caveats:
  - CBP, TSA, PHMSA, and eCFR sources define U.S. public baselines; non-U.S. or multi-jurisdiction movements require tenant-supplied jurisdictional overlays
  - IATA and Cargo iQ sources clarify air cargo evidence, terminology, and workflow boundaries but do not replace carrier, broker, station, or security-program authority
  - runtime must refuse or return to orchestrator whenever customs release, screening certification, DG acceptance, NOTOC sufficiency, dispatch, safety, maintenance, financial approval, legal interpretation, or policy conflict resolution is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, required artifact presence, source freshness dates, and audit pass status.

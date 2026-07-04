# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route
  housekeeping coordination work into a spec-first specialist with retrieval
  and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the
  manifest, research summary, functionality map, evaluation results, readiness
  evidence, deployment notes.
- Required secrets: none in the package itself; tenant PMS, housekeeping,
  work-order, dispatch, linen, CRM, guest messaging, payment, incident, and
  loss-prevention credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for PMS, CRS, housekeeping, room-attendant board,
    work-order, dispatch, linen, CRM, guest messaging, payment, incident, and
    loss-prevention systems
  - escalation targets for guest services, front office, pricing or revenue,
    fraud, loss prevention, safety, maintenance, operations, and executive
    housekeeping owners
  - tenant authority maps for room release, inspection signoff, maintenance
    return-to-service, linen shortage handling, lost-and-found retention,
    service recovery, safety stops, refund approval, fee handling, and closure
    criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of room status, reservations, guest
  records, housekeeping-board data, inspection notes, maintenance tickets,
  lost-and-found entries, payment notes, incident records, or loss-prevention
  artifacts.
- Knowledge boundary: public NSDC room-attendant, PMS, FTC, CFPB, AHLA, OSHA,
  worker-safety, FTC Red Flags, and PCI baselines are shared; tenant SOPs,
  property layouts, brand standards, owner maps, and approval matrices are
  injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, artifact templates, system connector mappings,
    owner registries, priority tiers, and tenant-specific handoff checklists
  - prohibited: widening the lane into direct cleaning execution, inspection
    approval, maintenance signoff, room-control release, pricing or refund
    approval, lost-property adjudication, fraud findings, or safety clearance

## Operations

- Monitoring:
  - log room-turn handoffs, blocked dependencies, owner overlaps, system-status
    conflicts, delayed-readiness escalations, safety or fraud stops, policy
    exceptions, and closure confirmations
  - alert on stale source reviews, repeated attempts to bypass room-release or
    inspection controls, repeated ownership ambiguity, recurring linen or
    maintenance blockers, and repeated compensation or refund pressure routed
    through this lane
  - monitor for requests that incorrectly seek cleaning execution, inspection
    signoff, maintenance closure, room release, or safety clearance from the
    lane
- Logging:
  - record release version, tenant assumptions, property, room number, PMS room
    status, prior owner, next owner, required artifacts, blocker state,
    guest-impact risk, and systems of record consulted
  - record whether the request involved missing prerequisites, duplicated
    ownership, booking or folio conflict, refund or pricing pressure, safety
    stop, lost-property claim, fraud signal, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry accommodation-and-travel-services --agent housekeeping-coordination-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed accommodation housekeeping coordination
  specialist for room-turn dependency intake, PMS room-status normalization,
  inspection and linen blocker tracking, maintenance routing, lost-and-found
  evidence packaging, delayed-readiness escalation, and closure confirmation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying property, room, room type, reservation or arrival
    context, stay state, requested handoff outcome, guest-impact priority, and
    whether the case touches cleaning, inspection, maintenance, linen,
    lost-and-found, front office, safety, fraud, pricing, or refund pressure
  - boundary metadata identifying room attendants, inspectors, housekeeping
    supervisors, laundry, maintenance, front office, guest services, revenue,
    safety, loss-prevention, and operations owners
  - retrieval dependencies for PMS room status, housekeeping boards, inspection
    notes, work orders, dispatch queues, linen trackers, CRM records, guest
    messaging, folio ledgers, incident systems, and destination-owner
    acknowledgements
  - tenant overlays for room-release authority, inspection thresholds,
    stayover service model, linen par, lost-and-found retention, maintenance
    return-to-service, safety escalation, compensation routing, refund
    approval, and closure criteria
- Regulated-lane caveats:
  - public FTC, CFPB, AHLA, OSHA, worker-safety, FTC Red Flags, and PCI sources
    constrain fee, payment, safety, fraud, and payment-data boundaries, but
    they do not replace tenant SOPs, brand standards, local law, insurer
    requirements, or property safety plans
  - runtime must refuse or return to orchestrator whenever cleaning execution,
    inspection signoff, room-control release, maintenance clearance, pricing
    override, refund approval, fraud adjudication, lost-property adjudication,
    legal interpretation, or safety-critical ownership is required
  - tenant deployment should verify local jurisdiction, property type,
    service model, brand standard, and owner map overlays before allowing
    automation to influence customer-impact outcomes
- This package is validated as a spec pack, but runtime may still remain
  `specification-based` until a retained implementation is committed separately.
  successful usage, tenant-safe retrieval wiring, observed demand across
  accommodation properties, and explicit approval to operationalize more than
  specification-based behavior.
- Health checks should confirm manifest load success, artifact presence,
  functionality coverage completeness, source freshness dates, and tenant
  retrieval wiring before enabling production routing.

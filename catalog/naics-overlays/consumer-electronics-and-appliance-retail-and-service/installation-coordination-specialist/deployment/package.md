# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route installation coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant POS, OMS, CRM, booking, dispatch, inventory, payment, and service-desk credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for POS, OMS, CRM, booking, dispatch, inventory, payment, and service-desk systems
  - escalation targets for guest services, front office, pricing, fraud, operations, service-desk, and safety owners
  - tenant authority maps for installer scope, site-readiness ownership, cancellation and refund approvals, promotion handling, recall stops, and closure criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of orders, bookings, customer records, service tickets, refund notes, promotion records, inventory states, or loss-prevention artifacts.
- Knowledge boundary: FTC, CFPB, California legislative, CPSC, and PHMSA public baselines are shared; tenant SOPs, partner installer rules, local permit requirements, and approval matrices are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, artifact templates, system connector mappings, owner registries, and tenant-specific handoff checklists
  - prohibited: widening the lane into direct dispatch execution, technical install approval, pricing override authority, refund approval authority, or safety signoff

## Operations

- Monitoring:
  - log handoff decisions, blocked dependencies, owner overlaps, order or payment conflicts, recall stops, customer exception escalations, and closure confirmations
  - alert on stale source reviews, repeated attempts to bypass refund or pricing controls, repeated ownership ambiguity, and recurring recall or damaged-product work routed through this lane
  - monitor for requests that incorrectly seek direct installation execution or technical approval authority from the lane
- Logging:
  - record release version, tenant assumptions, prior owner, next owner, required artifacts, blocker state, order and booking identifiers, and systems-of-record consulted
  - record whether the request involved missing prerequisites, duplicated ownership, order or payment conflict, policy exception, safety stop, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-electronics-and-appliance-retail-and-service --agent installation-coordination-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed retail installation coordination specialist for dependency intake, handoff packaging, blocker escalation, order and booking conflict handling, customer-exception routing, and closure confirmation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying channel, store or market, product family, order, booking, requested coordination outcome, and whether delivery, installation, haul-away, or swap-out is in scope
  - boundary metadata identifying store, dispatch, installer, guest-services, pricing, fraud, operations, service-desk, and safety owners
  - retrieval dependencies for POS, OMS, CRM, booking calendars, dispatch records, inventory state, tender ledgers, and destination-owner acknowledgements
  - tenant overlays for installable-product rules, site-readiness criteria, cancellation and refund authority, promotion treatment, partner network constraints, and closure criteria
- Regulated-lane caveats:
  - public FTC, CFPB, California refund-law, CPSC, and PHMSA sources constrain delivery-delay, refund, recall, and damaged-product boundaries, but they do not replace tenant SOPs or local licensed-trade requirements
  - runtime must refuse or return to orchestrator whenever pricing override, refund approval, fraud adjudication, legal interpretation, permit or licensed-trade judgement, or safety-critical ownership is required
  - tenant deployment should verify local jurisdiction, product-family, and installer-network overlays before allowing automation to influence customer-impact outcomes
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

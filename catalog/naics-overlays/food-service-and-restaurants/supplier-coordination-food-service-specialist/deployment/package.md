# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route supplier coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant POS, PMS, booking, CRM, order-management, inventory, receiving-log, AP, and service-desk credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for POS, PMS, booking, CRM, order-management, inventory, receiving-log, AP, fraud, and service-desk systems
  - escalation targets for guest services, front office, pricing, fraud, operations, culinary leadership, and food-safety owners
  - tenant authority maps for approved suppliers, substitutions, menu changes, refund and comp approvals, event ownership, safety stops, and closure criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of supplier orders, bookings, guest records, invoices, refund notes, promotion records, receiving logs, inventory states, or loss-prevention artifacts.
- Knowledge boundary: FTC, DOJ ADA, NIST, FDA, and GS1 US public baselines are shared; tenant SOPs, supplier contracts, approved-vendor lists, local health-department rules, and approval matrices are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, artifact templates, system connector mappings, owner registries, and tenant-specific handoff checklists
  - prohibited: widening the lane into direct procurement approval, culinary substitution approval, refund approval authority, pricing override authority, fraud adjudication, or food-safety signoff

## Operations

- Monitoring:
  - log handoff decisions, blocked dependencies, owner overlaps, supplier and receiving conflicts, booking or refund-sensitive impacts, safety stops, fraud escalations, and closure confirmations
  - alert on stale source reviews, repeated attempts to bypass pricing or refund controls, repeated ownership ambiguity, recurring approved-source or temperature-stop cases, and suspicious invoice-change patterns routed through this lane
  - monitor for requests that incorrectly seek direct order placement, substitute approval, receiving execution, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, prior owner, next owner, required artifacts, blocker state, supplier and booking identifiers, and systems-of-record consulted
  - record whether the request involved missing prerequisites, duplicated ownership, booking or payment conflict, policy exception, safety stop, fraud indicator, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-service-and-restaurants --agent supplier-coordination-food-service-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed food-service supplier coordination specialist for dependency intake, handoff packaging, blocker escalation, booking and refund-sensitive conflict handling, safety and fraud-aware routing, and closure confirmation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying concept or brand, location, service model, supplier, order or shipment, affected booking or event, requested coordination outcome, and whether shortage, substitution, invoice, refund, or safety handling is in scope
  - boundary metadata identifying purchasing, receiving, culinary, guest-services, pricing, fraud, operations, and food-safety owners
  - retrieval dependencies for supplier acknowledgements, ASN, invoices, receiving logs, temperature logs, traceability records, inventory state, POS availability, booking records, and destination-owner acknowledgements
  - tenant overlays for approved-supplier rules, substitutions, menu-governance rules, refund and comp authority, event ownership, health-department overlays, and closure criteria
- Regulated-lane caveats:
  - public FTC, DOJ ADA, NIST, FDA, and GS1 US sources constrain order-delay, hospitality-booking, price-accuracy, traceability, approved-source, and sensitive-record boundaries, but they do not replace tenant SOPs, local health-department rules, or supplier contract obligations
  - runtime must refuse or return to orchestrator whenever pricing override, refund approval, fraud adjudication, legal interpretation, culinary substitution approval, or food-safety ownership is required
  - tenant deployment should verify jurisdiction, brand SOPs, approved-vendor controls, and event or banquet ownership overlays before allowing automation to influence customer-impact outcomes
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.


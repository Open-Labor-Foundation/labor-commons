# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route venue-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ticketing, booking, CRM, POS, payment, access-control, service-desk, and incident connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ticketing, booking, CRM, POS, payment, access-control, service-desk, settlement, and incident systems
  - escalation targets for guest services, front office, pricing and revenue, fraud and loss-prevention, security, and venue-operations owners
  - tenant-specific maps for refund and exchange limits, accessible-seating handling, house-seat and hold-release authority, pricing and fee rules, screening rules, event-cancellation handling, and closeout ownership

## Isolation

- Tenant boundary: no cross-tenant sharing of ticket orders, guest records, accessible-seat notes, scan logs, incident reports, pricing rules, refund records, or event SOPs.
- Knowledge boundary: DOJ, FTC, CFPB, CISA, and IAVM public baselines are shared; tenant ticket rules, promoter contracts, campus overlays, venue leases, and incident-response plans are injected only at request time.
- Adaptation policy:
  - allowed: terminology, business-unit names, connectors, event and gate structures, queue-summary formats, and escalation routing
  - prohibited: widening the lane into pricing authority, refund exception approval, fraud adjudication, legal interpretation, security command, or emergency-response authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked closures, unsupported refund requests, suspicious-ticket escalations, screening incidents, and low-confidence returns
  - alert on stale source reviews, repeated ticket or payment mismatches, repeated unsupported completion attempts, repeated accessibility conflicts, and repeated screening or suspicious-ticket escalations
  - monitor for requests that incorrectly seek pricing, refund, legal, fraud, or security authority from the lane
- Logging:
  - record release version, tenant assumptions, venue and event context, ticket and guest identifiers, missing evidence, and routed owners
  - record whether the request involved event readiness, active ingress, payment mismatch, guest recovery, unsupported completion, customer-impact escalation, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route venue-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry arts-entertainment-and-recreation --agent venue-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed venue operations specialist for ticketing and event execution, high-volume ingress control, guest-impact handling, suspicious-ticket and screening escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying venue, event, date and time, gate or service zone, ticket or guest impact, requested disposition, and timing constraint
  - boundary metadata identifying guest services, front office, pricing and revenue, fraud and loss-prevention, security, and venue-operations owners
  - retrieval dependencies for ticketing, booking, CRM, POS, payment, access-control, service-desk, settlement, and incident logs
  - tenant overlays for refund and exchange authorities, fee rules, hold-release authority, accessible-seating procedures, screening policies, cancellation handling, promoter terms, and campus or venue-specific escalation rules
- Assumptions that must be tenant-supplied or retrieved at runtime:
  - current system-of-record precedence across ticketing, CRM, POS, access-control, and incident systems
  - pricing, refund, exchange, and cancellation authority limits
  - accessible-seating, screening, and security-routing playbooks
  - promoter, season-ticket, donor, membership, or campus overlays that materially change the workflow
- Regulated-lane caveats:
  - DOJ accessibility guidance constrains ticket-sales and accommodation handling but does not replace tenant legal review or jurisdiction-specific remedies
  - FTC fee and BOTS guidance constrains venue pricing display and ticket-access integrity but does not delegate price-setting or fraud-investigation authority to the lane
  - CISA guidance defines screening and venue-security risk posture but does not delegate security command, law-enforcement coordination, or emergency management authority
  - runtime must refuse or return to orchestrator when pricing overrides, refund exceptions, legal interpretation, fraud findings, or security decisions are required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.


# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route restaurant delivery and takeout work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant POS, KDS, order-management, dispatch, marketplace, CRM, service-desk, payment, and inventory connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for POS, KDS, order-management, dispatch, marketplace, CRM, service-desk, payment, inventory, and PMS or booking systems where applicable
  - escalation targets for guest services, front office, pricing and revenue, fraud and loss-prevention, food-safety, and restaurant operations owners
  - tenant-specific maps for refund and fee limits, courier-partner rules, contact-attempt rules, bagging and seal SOPs, hold-time or remake rules, redelivery approvals, and service-recovery thresholds

## Isolation

- Tenant boundary: no cross-tenant sharing of orders, guest profiles, courier events, contact logs, payment or refund records, inventory states, or site SOPs.
- Knowledge boundary: FDA, FTC, CFPB, California, and ServSafe public baselines are shared; tenant dispatch rules, marketplace contracts, franchise controls, processor terms, and courier-playbook details are injected only at request time.
- Adaptation policy:
  - allowed: terminology, business-unit names, connectors, dispatch and handoff structures, queue-summary formats, and escalation routing
  - prohibited: widening the lane into pricing authority, refund exception approval, fraud adjudication, courier discipline, legal interpretation, or final food-safety signoff authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked closures, unsupported refund requests, failed-delivery events, tampering or allergen concerns, suspicious reroute requests, and low-confidence returns
  - alert on stale source reviews, repeated order or payment mismatches, repeated unsupported completion attempts, repeated failed-delivery complaints, and repeated fee-disclosure conflicts
  - monitor for requests that incorrectly seek pricing, refund, legal, fraud, courier-management, or food-safety authority from the lane
- Logging:
  - record release version, tenant assumptions, location and shift context, guest and order identifiers, dispatch and handoff milestones, missing evidence, and routed owners
  - record whether the request involved routine pickup, active delivery, customer no-answer, failed delivery, refund pressure, unsupported completion, customer-harm escalation, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route delivery-and-takeout requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-service-and-restaurants --agent delivery-and-takeout-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed restaurant delivery and takeout specialist for off-premises order execution, dispatch and handoff control, customer-impact escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying location, service model, channel, order type, guest impact, requested disposition, promise window, and timing constraint
  - boundary metadata identifying guest services, front office, pricing and revenue, fraud and loss-prevention, food-safety, and restaurant operations owners
  - retrieval dependencies for POS, KDS, order-management, dispatch or marketplace systems, CRM, service-desk, payment, inventory, and PMS or booking systems where the restaurant operates inside a hotel, venue, or campus environment
  - tenant overlays for refund authorities, delivery-fee rules, bagging and seal SOPs, customer-contact rules, courier-partner obligations, redelivery thresholds, and incident-response or loss-prevention rules
- Regulated-lane caveats:
  - public FDA sources directly constrain restaurant food handling and employee-health boundaries but do not replace local health-department codes, franchise SOPs, or tenant HACCP-like controls
  - FTC, CFPB, and California sources constrain fee, blocked-funds, and refund-boundary behavior but do not delegate legal interpretation or discretionary compensation authority to the lane
  - FTC fraud guidance defines suspicious identity and reroute signals but does not delegate fraud investigation or law-enforcement coordination authority to the lane
  - runtime must refuse or return to orchestrator when pricing overrides, refund exceptions, legal interpretation, fraud findings, courier discipline, or final food-safety signoff authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.


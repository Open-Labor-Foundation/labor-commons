# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route restaurant-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant POS, PMS, booking, CRM, order-management, payment, service-desk, inventory, and incident connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for POS, PMS, booking, CRM, order-management, payment, service-desk, inventory, and incident systems
  - escalation targets for guest services, front office, pricing and revenue, fraud and loss-prevention, food-safety, and operations owners
  - tenant-specific maps for refund and comp limits, reservation and deposit rules, service-charge and gratuity handling, marketplace order rules, service-recovery approval thresholds, and food-safety or tampering escalation rules

## Isolation

- Tenant boundary: no cross-tenant sharing of reservations, guest checks, guest profiles, incident tickets, payment or refund records, inventory states, or site SOPs.
- Knowledge boundary: FDA, CFPB, California, and PCI SSC public baselines are shared; tenant service standards, franchise rules, processor terms, marketplace contracts, and shift-role maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, business-unit names, connectors, reservation and queue structures, service-summary formats, and escalation routing
  - prohibited: widening the lane into pricing authority, refund exception approval, fraud adjudication, legal interpretation, or final food-safety signoff authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked closures, unsupported refund requests, safety incidents, suspected tampering signals, and low-confidence returns
  - alert on stale source reviews, repeated payment mismatches, repeated unsupported completion attempts, repeated allergen or contamination escalations, and repeated fee-disclosure conflicts
  - monitor for requests that incorrectly seek pricing, refund, legal, fraud, or food-safety authority from the lane
- Logging:
  - record release version, tenant assumptions, location and shift context, guest and order identifiers, missing evidence, and routed owners
  - record whether the request involved reservation readiness, active service execution, payment mismatch, service recovery, unsupported completion, customer-harm escalation, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route restaurant-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-service-and-restaurants --agent restaurant-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed restaurant operations specialist for reservation and order execution, guest-check and service-recovery handling, high-volume queue control, customer-impact escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying location, service model, shift, order or reservation type, guest impact, requested disposition, and timing constraint
  - boundary metadata identifying guest services, front office, pricing and revenue, fraud and loss-prevention, food-safety, and operations owners
  - retrieval dependencies for POS, PMS, booking, CRM, order-management, payment, service-desk, inventory, and food-safety or incident logs
  - tenant overlays for refund authorities, service-charge rules, reservation deposit rules, posted fee and gratuity practices, service-recovery playbooks, marketplace handling, and tampering or incident-response rules
- Regulated-lane caveats:
  - public FDA sources directly constrain restaurant food handling and employee-health boundaries but do not replace local health-department codes, franchise SOPs, or tenant HACCP-like controls
  - California pricing and fee sources are jurisdiction-specific exemplars; runtime must retrieve applicable state, city, and brand rules before final pricing or fee outcomes are packaged
  - PCI SSC guidance defines skimming-prevention and payment-device risk posture but does not delegate fraud investigation or incident-response authority to the lane
  - runtime must refuse or return to orchestrator when pricing overrides, refund exceptions, legal interpretation, fraud findings, or final food-safety signoff authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.

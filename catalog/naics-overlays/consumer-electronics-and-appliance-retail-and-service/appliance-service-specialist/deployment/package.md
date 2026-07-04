# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to retained implementation only after sustained low-incident usage, validated tenant policy wiring, standardized appliance-service adapters, and explicit operator approval.

## Deployment Inputs

- Release version and catalog path: `catalog/naics-overlays/consumer-electronics-and-appliance-retail-and-service/appliance-service-specialist/`.
- Tenant-specific policy configuration:
  - Jurisdiction and posted service-estimate or service-call-fee rules.
  - Warranty, protection-plan, and service-contract lookup rules.
  - Refund, trip-charge, pricing exception, and service-recovery policies.
  - Safety, recall, fraud, and loss-prevention routing rules.
  - No-access, repeat-failure, and property-damage escalation rules.
- Retrieval integration:
  - POS, CRM, payment, and refund connectors.
  - Service desk, dispatch, booking, and technician-status systems.
  - OEM or administrator portals for warranty and authorization lookups.
  - Inventory, parts, and ETA systems.
  - Fraud or loss-prevention and safety case-management systems.

## Required Systems Of Record

- POS and payment systems.
- CRM and customer-account records.
- Order management and warranty or protection-plan lookup systems.
- Service desk or ticketing system.
- Dispatch, booking, or field-service scheduling systems.
- OEM portal or authorized-servicer portal.
- Inventory and parts systems.
- Safety, recall, and fraud or loss-prevention repositories.

## Materialization Expectations For `commons-crew`

- Required task and boundary metadata:
  - Queue-state model supporting `RESOLVE`, `BLOCK`, `WAIT`, and `ROUTE`.
  - Adjacent-owner registry for warranty, pricing, guest services, fraud or loss-prevention, operations, and safety ownership.
  - Explicit refusal rules for refund approval, pricing overrides, safety clearance, fraud decisions, engineering signoff, and legal interpretation.
- Tenant-supplied or runtime-retrieved assumptions:
  - Jurisdiction and business-unit service model.
  - Source-of-truth precedence across dispatch, service desk, CRM, POS, OEM portal, and payment systems.
  - Service-area, no-access, trip-charge, and repeat-failure policies.
  - Parts-availability, substitute-part, and backorder ownership rules.
  - Complaint-escalation and guest-recovery routing boundaries.
- Regulated-lane caveats:
  - Public warranty and repair guidance creates a baseline, but state-level service-estimate, cancellation, refund, and consumer-remedy rules can change the safe answer.
  - Safety cases tied to CPSC recalls, injury allegations, gas or electrical hazards, or property damage require adjacent-owner handling.
  - Fraud or loss-prevention cases may trigger tenant-specific legal, privacy, or investigative rules.
- Conditions requiring refusal or orchestrator return:
  - Missing customer, appliance, dispatch, fee, or coverage records would change the outcome.
  - Conflicting tenant, OEM, and public rules materially change fee, coverage, dispatch, or safety treatment.
  - Request seeks refund approval, pricing override, safety disposition, fraud judgment, or legal interpretation.

## Deployment And Rollback

- Load tenant policy adapters before enabling automated appliance-service routing.
- Log all outcomes (`RESOLVE`, `BLOCK`, `WAIT`, `ROUTE`) with reason, named evidence artifacts, and destination owner.
- Preserve traceability for service order, dispatch booking, model or serial, coverage posture, fee state, parts ETA, and safety flags.
- Rollback strategy:
  - Disable the specialist package or remove it from active routing.
  - Re-route affected in-flight requests to orchestrator-safe escalation or manual service-desk review.
  - Restore the prior validated package if one exists.
  - Re-run local repository validation before re-enabling.

## Commercial And Validation Notes

- validated packaging is complete only with the attached scenario suite, research summary, readiness evidence, deployment notes, and commercialization notes.
- The package remains a validated spec pack even though runtime should stay `specification-based` until a retained implementation is promoted separately.

# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to retained implementation only after sustained low-incident usage, validated tenant policy wiring, and explicit operator approval.

## Deployment Inputs

- Release version and catalog path: `catalog/naics-overlays/consumer-electronics-and-appliance-retail-and-service/repair-intake-specialist/`.
- Tenant-specific policy configuration:
  - Jurisdiction and posted repair-estimate or service-call rules.
  - Warranty, protection-plan, and service-contract lookup rules.
  - Refund, diagnosis-fee, pricing exception, and promotion policies.
  - Safety, recall, fraud, and loss-prevention routing rules.
  - Data-bearing-device handling rules for locked hardware, credentials, and sanitization responsibility.
- Retrieval integration:
  - POS, CRM, payment, and refund connectors.
  - Service desk, booking, and dispatch systems.
  - Inventory, model-support, and parts-availability systems.
  - Fraud or loss-prevention and safety case-management systems.

## Required Systems Of Record

- POS and payment systems.
- CRM and customer-account records.
- Order management and warranty or protection-plan lookup systems.
- Service desk or depot intake ticketing system.
- Booking, scheduling, or dispatch systems.
- Inventory and parts-support systems.
- Safety, recall, and fraud or loss-prevention repositories.

## Materialization Expectations For `commons-crew`

- Required task and boundary metadata:
  - Queue state model supporting `ACCEPT`, `PEND`, `REJECT`, and `ROUTE`.
  - Adjacent-owner registry for warranty, pricing, guest services, fraud or loss-prevention, operations, and downstream repair execution.
  - Explicit refusal rules for pricing overrides, refund approvals, safety clearances, fraud decisions, and final warranty adjudication.
- Tenant-supplied or runtime-retrieved assumptions:
  - Jurisdiction and store or depot service model.
  - Source-of-truth precedence across POS, booking, payment, and service desk.
  - Device-ownership validation and claim-check policy.
  - Model-support and out-of-support product handling rules.
  - Data-handling and passcode policy for phones, tablets, laptops, and smart devices.
- Regulated-lane caveats:
  - Public warranty and repair guidance creates a baseline, but state-level repair-estimate and implied-warranty rules can change fee and refund outcomes.
  - Safety cases tied to CPSC recalls or stop-use conditions require specialized human or adjacent-owner handling.
  - Identity-mismatch and loss-prevention cases may trigger tenant-specific legal or fraud-review requirements.
- Conditions requiring refusal or orchestrator return:
  - Missing product, customer, estimate, or authorization records would change the outcome.
  - Conflicting tenant and public rules materially change fee, warranty, refund, or safety treatment.
  - Request seeks downstream repair approval, refund authorization, fraud judgment, or safety disposition.

## Deployment And Rollback

- Load tenant policy adapters before enabling automated intake routing.
- Log all outcomes (`ACCEPT`, `PEND`, `REJECT`, `ROUTE`) with reason, named evidence artifacts, and destination owner.
- Preserve intake traceability for claim-check, serial or IMEI, estimate authorization, and safety flags.
- Rollback strategy:
  - Disable the specialist package or remove it from active routing.
  - Re-route affected in-flight requests to orchestrator-safe escalation or manual service-desk review.
  - Restore the prior validated package if one exists.
  - Re-run local repository validation before re-enabling.

## Commercial And Validation Notes

- validated packaging is complete only with the attached scenario suite, research summary, readiness evidence, deployment notes, and commercialization notes.
- The package remains a validated spec pack even though runtime should stay `specification-based` until a retained implementation is promoted separately.

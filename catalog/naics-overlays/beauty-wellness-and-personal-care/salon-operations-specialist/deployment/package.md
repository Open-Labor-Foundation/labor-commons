# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to a retained implementation only after repeated production demand, validated tenant integrations, and explicit human approval.

## Deployment Inputs

- Release version and catalog path: `catalog/naics-overlays/beauty-wellness-and-personal-care/salon-operations-specialist/`.
- Tenant-specific policy configuration:
  - service menu, consultation, patch-test, and completion requirements,
  - jurisdiction and operating-model context for employee, booth-rental, suite, or mobile services,
  - minors, refund, redo, and customer-recovery authority map,
  - off-site or mobile-service rules, location constraints, and incident-routing ownership.
- Retrieval integration:
  - booking and calendar system,
  - POS or service-ticket platform,
  - client consultation and service-history repository,
  - sanitation or facility-compliance log,
  - product catalog and SDS repository,
  - incident and escalation tracking system.

## Required Systems of Record

- Booking and appointment system.
- POS or source-of-truth service-ticket system.
- Client consultation, service-history, and formula repository.
- Staff scheduling and practitioner assignment roster.
- Sanitation, inspection, and facility-readiness log.
- Product label and SDS repository.
- Incident, exception, and escalation log.
- Tenant policy and jurisdiction repository.

## Deployment and Rollback

- Load tenant jurisdiction, service-menu, refund-authority, and operating-model adapters before enabling execution.
- Require source-of-truth identifiers on every state change, exception note, escalation note, and completion record.
- Log all `advance`, `hold`, `rework`, `complete`, and `route` actions with appointment, service, sanitation, and incident references.
- Rollback strategy:
  - disable the specialist package,
  - re-route in-flight work to the orchestrator or the tenant's manual salon-operations supervision lane,
  - restore the previously validated package or manual workflow if any evidence, routing, or boundary defect is detected.

## Materialization Notes

- `commons-crew` must retrieve:
  - task metadata with explicit lifecycle states, owned actions, and adjacent-lane boundaries,
  - tenant operating model, jurisdiction, and service taxonomy,
  - systems-of-record mappings for bookings, service tickets, client consultation, sanitation logs, product safety, and incidents,
  - local rules that narrow the public baseline for minors, refunds, off-site services, and practitioner scope.
- Refuse or return to orchestrator when any of the retrieved facts are missing and would change service safety, authority, or completion decisions.
- Regulated-lane caveat: the package supports salon operations only; it does not replace licensed service judgment, compliance signoff, legal review, or financial approval.

## Commercial and Validation Notes

- validated packaging is complete only with the attached scenario set, research summary, and readiness evidence.
- Runtime may still remain `specification-based` until a retained implementation is committed separately.

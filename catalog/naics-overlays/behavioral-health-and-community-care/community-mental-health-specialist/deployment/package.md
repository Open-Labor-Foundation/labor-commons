# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to a retained implementation only after repeated production demand, validated tenant integrations, and explicit human approval.

## Deployment Inputs

- Release version and catalog path: `catalog/naics-overlays/behavioral-health-and-community-care/community-mental-health-specialist/`.
- Tenant-specific policy configuration:
  - Program model and jurisdiction (`CCBHC`, `CMHC`, county clinic, or equivalent).
  - Privacy, ROI, guardian, minor-consent, and Part 2 overlays.
  - Documentation cadence, discharge criteria, and local signoff rules.
  - Crisis escalation and after-hours ownership map.
- Retrieval integration:
  - Behavioral health EHR or clinical record connector.
  - Case management, scheduling, and care coordination systems.
  - Consent and privacy repository.
  - Crisis call, mobile crisis, or emergency handoff log.

## Required Systems of Record

- Behavioral health EHR or designated clinical record.
- Case management and care coordination platform.
- Scheduling, attendance, and encounter documentation system.
- Consent, ROI, guardian, and privacy controls repository.
- Crisis routing, call log, or emergency handoff system.
- Tenant policy and audit repository.

## Deployment and Rollback

- Load tenant program-model, privacy, and crisis-routing adapters before enabling execution.
- Require source-of-truth identifiers on every state change, exception note, and completion record.
- Log all `advance`, `hold`, `rework`, `complete`, and `route` actions with artifact references.
- Rollback strategy:
  - Disable the specialist package.
  - Re-route in-flight work to the orchestrator or the tenant's manual supervision lane.
  - Restore the previously validated package or manual workflow if any evidence or boundary defect is detected.

## Materialization Notes

- `commons-crew` must retrieve:
  - task metadata with explicit lifecycle states and owned vs adjacent actions,
  - tenant program model, jurisdiction, and service taxonomy,
  - systems-of-record mappings for assessments, treatment plans, progress notes, crisis records, and discharge summaries,
  - local privacy and representative rules that narrow HIPAA and Part 2 baselines.
- Refuse or return to orchestrator when any of the retrieved facts are missing and would change disclosure, crisis routing, or completion decisions.
- Regulated-lane caveat: the package supports operational progression only; it does not replace licensed psychotherapy, psychiatry, crisis evaluation, legal review, or payer adjudication.

## Commercial and Validation Notes

- validated packaging is complete only with the attached scenario set, research summary, and readiness evidence.
- Runtime may still remain `specification-based` until a retained implementation is committed separately.

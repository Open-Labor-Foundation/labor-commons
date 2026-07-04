# Deployment Package

## Package Identity

- Agent slug: `workforce-coordination-specialist`
- Industry overlay: `administrative-support-and-business-services`
- Queue slug: `industry-overlays::administrative-support-and-business-services::workforce-coordination-specialist`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- Validation profile: `standard`

## Included Artifacts

- `manifest.yaml` with specialty boundary, supported tasks, authority sources, validation, tenant adaptation, and catalog metadata.
- `evaluation/scenarios.md` with 12 validated workforce coordination scenarios.
- `evaluation/functionality-map.json` with all shared, coordination-handoffs-and-routing, and cross-industry abilities mapped to passing scenarios.
- `evaluation/research-summary.json` with contract `2026-04-08` research outputs.
- `evaluation/results.json` with passing validation results and full functionality coverage.
- `readiness/evidence.json` and `readiness/release.md` with human verification and release gates.
- `positioning/readiness.md` with commercialization positioning.

## Materialization Requirements

`commons-crew` can materialize this lane safely only when tenant retrieval can
supply:

- Task and boundary metadata: service catalog, client SOW, job-order rules,
  workforce coordination SOP, queue taxonomy, routing matrix, approval matrix,
  escalation matrix, closure criteria, and adjacent specialist registry.
- Runtime records: job order, requisition, assignment roster, skills matrix,
  worker-status prerequisite checklist, availability and shift windows, safety
  readiness evidence, timekeeping destination, queue owner, prior owner, next
  owner, blocker state, and destination-owner acknowledgement.
- Systems of record: VMS or staffing platform, ATS, HRIS or worker master,
  WFM, timekeeping or payroll intake, service desk or BPM, CRM, contract/SOW
  repository, LMS or safety repository, document repository, IAM, GRC, and
  audit logs.
- Tenant constraints: jurisdiction, business unit, client, program, facility,
  worksite, contract, cross-client confidentiality rules, safety procedures,
  wage-hour policy, privacy classification, retention rules, and source
  hierarchy.

The materialized runtime must preserve the public baseline while recording
tenant-specific assumptions. It must return to orchestrator when missing facts,
source conflicts, or authority gaps would change routing, handoff, refusal, or
closure behavior.

## Deployment Notes

Deploy as a specification-based catalog package. It is suitable for retrieval,
orchestrator planning, evaluation, and later materialization, but it is not a
retained implementation. Do not configure it as the default executable lane until
a separate trusted build is committed.

Recommended deployment steps:

1. Register the package path in catalog discovery after validation passes.
2. Expose the manifest and readiness evidence to the orchestrator as the source
   of truth for this overlay lane.
3. Configure retrieval to require tenant SOW, job-order, assignment, worker,
   safety, timekeeping, and owner-map records before case-specific routing.
4. Configure refusal and orchestrator-return paths for HR, payroll, legal,
   safety, finance, quality, privacy, client commitment, and contract authority.
5. Keep audit logging enabled for source records, owner decisions, blockers,
   routing, refusals, and closure confirmations.

## Rollback Notes

Rollback is safe because this package is specification-based. Remove the package from
catalog discovery or revert the commit that introduced
`catalog/naics-overlays/administrative-support-and-business-services/workforce-coordination-specialist/`.

Rollback does not require data migration. If a tenant already materialized a
runtime from this spec, disable that materialized runtime separately and return
open workforce coordination work to the orchestrator with the latest source
records, blocker state, and owner history.

## Safety Caveats

The lane must refuse or return to orchestrator when the request requires legal,
licensed, policy-override, financial-approval, safety-critical, HR, payroll,
worker classification, wage-hour, client-commitment, quality acceptance, or
final approval authority. It must not infer employment, safety, or pay decisions
from public guidance or incomplete tenant facts.

## Trusted Build Promotion

Promote to a retained implementation only after usage data shows repeated need,
tenant retrieval connectors are implemented, runtime behavior passes this
scenario suite, safety and wage-hour escalation paths are tested, audit logging
is verified, and a separate PR approves the built runtime.

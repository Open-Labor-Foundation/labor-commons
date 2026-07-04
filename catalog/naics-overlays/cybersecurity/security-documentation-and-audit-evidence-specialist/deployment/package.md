# Deployment Package

## Runtime

- Runtime strategy: `specification-based`.
- Deployment model: validated spec pack consumed by `commons-crew` or a future materializer to generate a bounded security documentation and audit evidence specialist on demand.
- Canonical source: this spec pack, not a stale built implementation.
- Trusted build posture: no retained implementation is claimed or retained by default.
- Required configuration:
  - `TENANT_ID` for tenant-scoped execution.
  - `CONTROL_BASELINE_ID` for the tenant-approved framework or control profile.
  - `ASSURANCE_TARGET` for customer, audit-readiness, certification preparation, internal review, CUI, SOC-style, or other evidence package target.
  - `CONFIDENCE_THRESHOLD` for low-confidence escalation.
  - `AUTHORITATIVE_SOURCE_INDEX` with source IDs, review dates, refresh intervals, and decay policy.
  - `SYSTEMS_OF_RECORD_MAP` for GRC, evidence repository, document management, ticketing, SIEM, identity, cloud, endpoint, network, vulnerability, backup, customer assurance, and reviewer systems.

## Materialization Requirements

- Load the manifest boundary, supported tasks, refusal rules, orchestrator returns, adjacent specialists, source baseline, scenarios, research summary, functionality map, readiness evidence, deployment notes, and commercialization notes.
- Require tenant-supplied scope, control set, system boundary, data classification, evidence repository, artifact IDs, owners, dates, retention policy, reviewer records, approval matrix, and source precedence before high-confidence outputs.
- Preserve source IDs, tenant record IDs, artifact IDs, owner names or roles, evidence periods, assumptions, caveats, confidence notes, hold status, and handoff targets in every output.
- Emit one of the required output shapes: mapped evidence matrix, gapped evidence list, compliance-ready package recommendation, quality or safety review note, control or incident summary, corrective-action escalation, or boundary-safe escalation note.
- Refuse or return to orchestrator for penetration testing, exploit validation, live incident response, forensic collection, formal audit attestation, legal interpretation, privacy conclusion, regulatory compliance determination, architecture ownership, risk acceptance, or approval authority.

## Isolation

- Tenant artifacts, evidence inventories, review notes, source-system exports, and residual caveats must remain isolated by `TENANT_ID`.
- Cross-tenant template reuse is allowed only for redacted structural templates; tenant-specific controls, evidence, customer criteria, findings, or assumptions must not be shared.
- Connectors must use tenant-scoped credentials and least privilege. The spec pack does not require static secrets.
- Logs must store trace IDs and anonymized tenant IDs where possible, and must not retain sensitive evidence content unless tenant policy explicitly permits it.

## Adaptation

- Allowed: control-baseline configuration, retrieval mapping, tenant terminology adaptation, reviewer-output formatting, and approved prompt or template tuning.
- Not allowed: changing source meaning, suppressing caveats, disabling low-confidence escalation, bypassing hold or release controls, widening the lane into adjacent authorities, or reusing confidential tenant evidence across tenants.
- Every material adaptation must record approver, rationale, affected outputs, rollback path, and next review date.

## Operations

- Monitoring:
  - Track source freshness, evidence-gap rates, low-confidence escalations, boundary refusals, hold recommendations, repeat defects, tenant adaptations, and material source conflicts.
  - Alert when source review dates exceed decay policy, scenario coverage regresses, boundary refusals spike, or a runtime repeatedly receives adjacent-lane requests.
- Logging:
  - Log request ID, tenant ID, selected control baseline, output shape, source IDs, evidence IDs, confidence status, escalation target, refusal reason, and human verification events.
  - Do not log raw secrets, sensitive evidence, personal data, restricted customer content, or confidential artifacts unless tenant logging policy permits it.
- Validation:
  - Re-run package validation after source refresh, scenario changes, ability-map changes, tenant adaptation changes, or material boundary changes.
  - Keep strict validation profile and pass rate at or above `0.92`.

## Rollback

- Revert to the previous package version if validation fails, source baseline is stale, functionality coverage is incomplete, tenant isolation fails, or boundary behavior regresses.
- Disable validated claim by setting readiness below validated until evidence, scenarios, functionality map, research summary, and readiness artifacts are corrected.
- Route affected requests to orchestrator-only mode with read-only evidence checklist output until revalidation completes.
- Record rollback reason, affected files, validation result, reviewer, and re-promotion criteria.

## Promotion Criteria For Trusted Build

- Keep runtime as specification-based unless production use shows the lane is called frequently enough to justify retained implementation maintenance.
- Promotion requires:
  - repeated tenant or production demand for this exact lane,
  - stable pass rate at or above `0.92`,
  - no unreviewed regressions,
  - tenant-isolation and logging review,
  - source-refresh automation,
  - observed boundary-refusal and low-confidence behavior consistent with this spec,
  - human approval from catalog owner and security documentation owner.
- A promoted build must still treat this spec pack as the behavioral contract and must not claim authority beyond the manifest boundary.

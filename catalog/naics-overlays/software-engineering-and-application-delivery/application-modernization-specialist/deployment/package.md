# Deployment Package

## Runtime

- Deployment model: validated spec pack consumed by future catalog materializers or orchestration runtime.
- Runtime strategy: `specification-based`; do not retain a generated implementation in-repo unless separate frequent-use promotion evidence is approved.
- Materialization inputs:
  - Task and boundary metadata from `manifest.yaml`.
  - Tenant architecture diagrams, repositories, ADRs, dependency inventory, API/schema records, requirements, tests, CI evidence, observability records, release constraints, approval matrix, confidentiality rules, and retention context.
  - Current authority-source freshness metadata and tenant-specific policy overrides.
- Materialization blockers:
  - Missing or contradictory application evidence.
  - Missing recipient authorization or publication approval.
  - Request for platform operations, security policy, SRE incident command, procurement, legal, release approval, contractual signoff, or product commercialization strategy.

## Tenant Isolation

- Tenant-specific code, logs, workpapers, client deliverables, credentials, production data, and confidential records must stay in tenant-approved systems of record.
- Reusable package artifacts may contain only public source baselines, generic scenario definitions, and non-tenant-specific readiness evidence.
- Cross-tenant sharing is disallowed for recommendations, evidence packets, logs, architecture excerpts, and modernization workpapers.
- Adaptation is limited to retrieval, configuration, tenant terminology mapping, and approved tuning; any client publication requires tenant approval and recipient authorization.

## Monitoring And Logging

- Log materializer request ID, tenant ID reference, source freshness status, artifact list, confidence level, refusal or handoff decision, output shape, and approval owner.
- Record modernization-wave status, assumptions, evidence gaps, exception summaries, and rollback criteria in the tenant system of record.
- Track scenario coverage drift, source review due dates, validation pass rate, low-confidence escalations, boundary refusals, and confidential-delivery blocks.
- Do not log proprietary source code, secrets, credentials, full production logs, or client-confidential content in shared runtime telemetry.

## Rollback Path

- Package rollback: revert to the previous validated manifest/evidence bundle and disable the current package version from routing until validation is rerun.
- Tenant output rollback: mark generated modernization output superseded, restore the prior approved workpaper state, and preserve audit trail with reason and approver.
- Runtime rollback: keep the lane at `specification-based`; if a generated implementation is later promoted, disable that implementation and fall back to spec materialization when validation, source freshness, or tenant-isolation checks fail.
- Modernization-wave rollback guidance: require tenant-owned rollback runbook, artifact restore or traffic reversal plan, data checkpoint or reconciliation path, and approval owner before any execution.

## Promotion Criteria

Retain a trusted built implementation only when all criteria are met:

- Sustained usage demonstrates that this lane is called frequently enough to justify lower-latency or lower-cost materialization.
- The generated implementation passes repository validation, scenario regression tests, tenant-isolation review, source freshness review, and human approval.
- The implementation has documented monitoring, rollback, owner, refresh cadence, and no proprietary tenant data or hard-coded tenant assumptions.
- Promotion is recorded separately from this specification-based package and can be reverted independently.

## Deployment Gaps

- Tenant-specific retrieval connectors for repositories, workpaper stores, CI systems, observability tools, and approval records must be validated at deployment time.
- External tenant pilot metrics are not yet available; readiness is based on source-backed spec coverage and local package validation.
- Platform-specific execution runbooks remain out of lane and must be provided by tenant platform, SRE, or release owners.

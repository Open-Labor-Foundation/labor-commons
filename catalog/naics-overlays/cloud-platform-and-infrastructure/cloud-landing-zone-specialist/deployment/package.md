# Deployment Package

## Runtime Model

- Target runtime: catalog loader, ChatOps orchestrator, or future `commons-crew` materializer.
- Runtime strategy: `specification-based`.
- Deployment model: static spec pack consumed at runtime to materialize bounded guidance; no retained trusted implementation is claimed in this release.
- Package path: `catalog/cloud-platform-and-infrastructure/cloud-landing-zone-specialist/`.
- Required secrets: none. The package must never store provider credentials, tenant secrets, private topology exports, or account identifiers.

## Materialization Requirements

A runtime materializer needs:

- task and boundary metadata from `manifest.yaml`
- authoritative source and refresh metadata from `manifest.yaml` and `evaluation/research-summary.json`
- ability and scenario coverage from `evaluation/functionality-map.json` and `evaluation/results.json`
- tenant-supplied or retrieved facts for provider set, region/tenant topology, account/project/subscription hierarchy, identity model, network model, policy baseline, IaC state, observability, backup/recovery, owner map, and approval authority
- refusal and orchestrator-return triggers for missing evidence, conflicting authority, adjacent ownership, live execution, and legal/compliance/financial approval boundaries

The generated runtime may provide architecture guidance, guardrail matrices, IaC structure guidance, runbook checks, handoff summaries, blocker logs, routing confirmation notes, and escalation packages. It must not execute cloud changes, handle credentials, approve risk, approve spend, clear findings, or sign off production go-live.

## Tenant Isolation

- Tenant-specific configuration and retrieved records stay outside the baseline package.
- Adaptation outputs must state source basis, tenant facts used, assumptions, unresolved blockers, and evidence locations.
- Cross-tenant sharing of tenant topology, account IDs, policies, credentials, logs, incident details, or evidence bundles is prohibited.
- Provider-specific exceptions require a documented owner, expiration or review date, and escalation path.

## Monitoring And Logging

- Track package version, source refresh status, materialization runtime version, scenario coverage version, and validation result.
- Log scope decisions, refusal decisions, handoff routing state, blocker state, source freshness checks, and human approvals in the tenant audit log.
- Alert when a source passes its refresh interval, the pass rate drops below 0.90, functionality coverage is incomplete, or a materialized runtime attempts a refused action class.

## Rollback Path

- Revert to the last validated package version and readiness evidence bundle.
- Disable any generated runtime materialization derived from the failed version.
- Re-run JSON parsing, package structure verification, and scenario coverage checks before redeploying.
- If a retained trusted implementation exists in a future release, roll back to `specification-based` materialization until source refresh, regression, and human verification pass.

## Promotion Criteria For retained implementation

Retain a generated implementation in-repo only when all conditions are true:

- usage telemetry shows frequent recurring calls for this lane that justify build retention
- generated behavior preserves the specialty boundary and passes the full refreshed evaluation suite
- source refresh, tenant isolation, logging, rollback, and refusal behavior are reviewed by a human
- runtime tests prove no credential handling, live tenant execution, final approval, or adjacent-lane ownership drift
- rollback to `specification-based` remains documented and tested

## Support Ownership

- Package owner: platform catalog maintainers.
- Domain reviewer: cloud landing-zone domain lead or delegated platform architecture reviewer.
- Escalation owners: orchestrator, human reviewer, provider-specific architecture specialist, cloud operations, infrastructure-as-code, identity, security, network, backup, observability, migration, legal/compliance, finance, or workload owner based on routing note.

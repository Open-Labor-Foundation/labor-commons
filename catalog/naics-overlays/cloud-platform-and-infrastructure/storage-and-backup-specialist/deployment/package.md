# Deployment Package

## Runtime Model

- Target runtime: Spec-first catalog package for orchestrator use or just-in-time materialization.
- Runtime strategy: `specification-based`.
- Trusted build claim: none.
- Execution posture: advisory and evidence-producing only; production backup policy changes, retention locks, deletion, restores, and legal-hold actions require tenant-authorized operators.
- Required package inputs: task intent, workload inventory, RPO/RTO targets, provider records, backup policy exports, restore evidence, retention/legal-hold context, IAM/KMS/network constraints, and owner/approver map.
- Required package outputs: strategy matrix, backup and retention architecture, restore runbook, compliance-aligned evidence packet, cost/risk tradeoff note, record update note, and exception summary.

## Materialization Requirements

Future `commons-crew` or another materializer must load:

- required task metadata, specialty boundary, source metadata, validation profile, output shapes, and refusal triggers from `manifest.yaml`
- ability and scenario coverage from `evaluation/functionality-map.json`
- source-constrained workflow evidence from `evaluation/research-summary.json`
- tenant-specific systems of record and retrieval dependencies before final recommendations
- source IDs, tenant record IDs, assumptions, confidence state, and approval state in every generated artifact

The materializer must block autonomous mutation of backup policies, vault locks,
immutability settings, object holds, legal holds, recovery points, production
restores, compliance attestations, and risk acceptance decisions.

## Tenant Isolation And Adaptation

- Tenant metadata, workload records, evidence packets, restore logs, legal-hold details, and policy exceptions stay tenant-scoped.
- Public cloud and control-source guidance is global; tenant-specific retention, classification, approval, and jurisdictional facts are retrieved or supplied at runtime.
- Adaptation may specialize terminology, output templates, source precedence, and evidence stores, but must not weaken baseline refusal, audit, or retention caveats.
- Cross-tenant sharing of raw tenant records, restore evidence, or policy decisions is prohibited.

## Deployment Steps

1. Publish the refreshed package under `catalog/cloud-platform-and-infrastructure/storage-and-backup-specialist/`.
2. Register the package as validated spec content with `runtime_strategy=specification-based`.
3. Enable orchestrator retrieval of manifest, research summary, functionality map, scenarios, and readiness evidence.
4. Configure tenant retrieval connectors for provider backup systems, logging/monitoring, CMDB, policy repository, legal-hold register, change tickets, and evidence store.
5. Run a tenant smoke review using one strategy matrix scenario, one restore-test runbook scenario, one missing-evidence escalation, and one adjacent-lane refusal.

## Rollback Path

- Revert to the prior committed package revision.
- Disable new materialization from release `v1.1.0`.
- Preserve tenant evidence and generated artifacts already handed off for review.
- Re-run repository validation and at least the affected scenario families before re-enabling the package.
- If source freshness or boundary logic caused the rollback, mark the source or boundary gap in readiness notes before any republish.

## Monitoring And Logging

Track:

- scenario family used, output shape requested, and refusal/escalation frequency
- source freshness and source-precedence conflicts
- missing tenant facts and inaccessible systems of record
- backup job failure rates, missed windows, restore-test pass/fail, restore duration, and policy drift when available from tenant systems
- recommendations touching retention, immutability, legal holds, archive tiers, or cross-region/cross-account copies

Log:

- source IDs, review dates, tenant record IDs, assumptions, confidence level, owner, approver, recommendation, refusal, escalation, and handoff target
- no secrets, raw backup contents, production credentials, or cross-tenant records in shared logs

## Promotion Criteria

Keep this lane as `specification-based` until usage proves a retained implementation is
high-frequency invocation, stable tenant output templates, successful
materialization without boundary regressions, full scenario-suite pass, assigned
source-refresh ownership, and explicit human approval.

# Deployment Package

## Model

- Package type: validated spec pack under `catalog/cloud-platform-and-infrastructure/database-platform-operations-specialist/`.
- Runtime strategy: `specification-based`.
- Deployment model: consumed by `commons-crew`, an orchestrator, or a future runtime materializer as the canonical source for database platform operations behavior.
- retained implementation: not claimed.

## Runtime Notes

The materializer must load the manifest, research summary, functionality map, evaluation scenarios, evaluation results, readiness evidence, deployment notes, and commercialization notes. It must collect tenant facts and systems-of-record evidence before producing provider-specific guidance.

Required runtime facts include workload criticality, engine family, topology, provider scope, region and zone strategy, RTO/RPO, SLOs, backup and restore evidence, monitoring and incident records, IaC state and plans, policy constraints, data classification, residency rules, approval status, and owner map.

The materializer must verify source freshness before asserting current AWS, Azure, Google Cloud, Kubernetes, Terraform, SLA, backup, HA, restore, or failover behavior. It must emit source IDs, assumptions, missing evidence, confidence, exception notes, and handoff owners.

## Tenant Isolation

- Do not share tenant topology, telemetry, incidents, backup records, IaC state, policies, contracts, or approval matrices across tenants.
- Tenant-specific adaptation is allowed only when it preserves the public source baseline and records source precedence.
- Runtime logs must avoid storing secrets, credentials, connection strings, raw customer data, or unrestricted incident artifacts.

## Monitoring And Logging Expectations

- Record request scope verdict, source versions, source freshness state, tenant systems of record consulted, missing evidence, confidence state, output artifact type, refusal or escalation reason, and completion evidence status.
- Alert on stale authority sources, unsupported provider claims, missing required tenant facts, repeated boundary crossings, failed scenario coverage checks, and materializer outputs that omit evidence traceability.
- Keep an audit trail for runbook, ADR, incident checklist, migration, exception, and completion-evidence outputs.

## Rollback Path

1. Disable validated promotion for this specialist if validation, research, functionality, source freshness, or boundary evidence regresses.
2. Revert the package to the previous committed version or mark delivery status below validated.
3. Route active database platform operations requests to the orchestrator or a human reviewer until the spec pack is repaired.
4. Re-run repository validation and restore validated state only after human verification is recorded.

## Promotion Criteria

Retain a generated implementation in-repo only when usage proves the lane is called frequently enough and safely enough:

- At least 20 materially similar accepted invocations in 60 days.
- At least 90 percent of invocations remain inside the lane without extensive custom orchestration.
- No unresolved high-severity boundary regressions or source freshness failures.
- Tenant-safe retrieval, logging, evidence capture, and rollback behavior are validated in a controlled runtime.
- Maintainer explicitly approves trusted-build retention.

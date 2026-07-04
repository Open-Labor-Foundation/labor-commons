# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Deployment model: catalog spec pack consumed by a future materializer or orchestrated specialist runtime.
- Built implementation retention: not claimed. Retain a generated implementation only after promotion criteria prove frequent, successful use.
- Execution posture: advisory and evidence-packaging only. The specialist must not execute Azure changes, accept tenant secrets, approve releases, or approve spend.

## Required Runtime Inputs

- Task metadata: request type, intended output shape, tenant, workload, environment, criticality, and approval context.
- Boundary metadata: Azure architecture scope, adjacent specialist map, allowed decision types, refusal triggers, and orchestrator return rules.
- Tenant facts: regions, residency, data sensitivity, availability targets, RTO/RPO, budget constraints, platform operating model, and owner matrix.
- Retrieval dependencies: management-group and subscription inventory, Azure Policy compliance state, RBAC records, network diagrams, Azure Monitor evidence, Backup and Site Recovery records, IaC repository and deployment history, incident records, ADRs, change records, and corrective-action tracker.
- Source metadata: current public source baseline, source review dates, refresh intervals, decay policy, and tenant precedence rules.

## Tenant Isolation And Adaptation

- Run each invocation in a tenant-scoped context with no cross-tenant memory sharing.
- Store only redacted request, response, source, refusal, escalation, and evidence metadata needed for audit.
- Do not store tenant secrets, privileged credentials, raw production Terraform state, or sensitive subscription exports in the package.
- Tenant-specific adaptation may narrow recommendations, add stricter gates, and bind local artifact names, but it must preserve the public baseline and record assumptions.

## Monitoring And Logging

- Monitor scenario pass rate, functional coverage, source freshness, refusal accuracy, escalation quality, and boundary failures.
- Log missing facts, missing systems of record, source conflicts, tenant-policy conflicts, hold or release recommendation state, and adjacent-lane handoff decisions.
- Treat repeated boundary failures, stale authority sources, or inconsistent readiness artifacts as release blockers.

## Rollback Path

- Freeze the package and route new invocations to the prior approved release if scenario coverage, source freshness, boundary behavior, or readiness evidence fails.
- Disable tenant-specific adaptations that caused the failure.
- Re-run local repository validation and package review before re-enabling validated status.
- Preserve the failed evidence packet for corrective-action review.

## Materialization Requirements

`commons-crew` or another future runtime materializer needs:

- Manifest task, boundary, source, acceptance, refusal, and orchestrator-return metadata.
- Tenant-supplied or retrieved architecture records, approval matrix, systems-of-record links, and source freshness state.
- Domain caveats covering legal, compliance, financial, privacy, safety, and live-execution limits.
- Evidence dependencies for Azure Policy, RBAC, Monitor, Backup, Site Recovery, IaC, ADR, change, incident, and corrective-action artifacts.
- Evaluation scenarios, functionality map, and research summary as acceptance tests for generated behavior.

## Promotion Criteria For Trusted Build Retention

- At least 30 successful tenant calls or 3 production tenant adoptions in a rolling 90-day period.
- No unresolved source freshness, scenario regression, boundary, or refusal-quality failures across two consecutive reviews.
- Materializer output passes the full scenario suite and human review.
- Generated implementation proves meaningful operational value beyond on-demand materialization.

## Support Owner

- Azure architecture package steward for spec maintenance.
- Orchestrator triage lead for boundary disputes and adjacent-lane routing.
- Human reviewer for validated release evidence and trusted-build promotion decisions.

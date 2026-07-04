# Deployment Package

## Runtime

- Target runtime: spec-first catalog artifact consumed by the orchestrator or a future `commons-crew` materializer.
- Runtime strategy: `specification-based`.
- retained implementation: none claimed for this release.
- Deployment model: static catalog spec pack (`v1.1.0`) with human-approved activation and rollback control.
- Required secrets: none embedded in package artifacts.
- Runtime credential dependencies: tenant-scoped provider credentials and evidence-store access are retrieved from approved runtime secret stores only.

## Materialization Requirements

A runtime materializer must load and enforce:

- task metadata, supported tasks, output shapes, boundary rules, refusal triggers, and adjacent-specialist routes from `manifest.yaml`;
- source freshness, authority rationale, refresh interval, and decay policy from `manifest.yaml` and `evaluation/research-summary.json`;
- tenant-required facts for criticality, RTO/RPO, dependency, topology, backup, replication, restore-test, incident, change, policy, approval, privacy, legal hold, and contract context;
- scenario and ability coverage from `evaluation/scenarios.md`, `evaluation/functionality-map.json`, and `evaluation/results.json`;
- readiness gates and no-trusted-build posture from `readiness/evidence.json`.

The materializer must refuse or return to orchestrator when required tenant
records, authority, current sources, or policy precedence are missing. It must
not infer provider-specific failover, restore, immutability, retention, or
control-plane behavior from another provider's documentation.

## Tenant Isolation And Adaptation

- Tenant facts, provider credentials, logs, incident records, and evidence stores remain tenant-scoped.
- Cross-tenant source sharing is limited to public authority sources and reusable spec text; tenant evidence, runbooks, policies, and outputs are not shared.
- Tenant adaptation may tune retrieval hooks, source precedence, approved policy overlays, escalation contacts, and reporting cadence.
- Tenant adaptation may not weaken refusal rules, source traceability, evidence requirements, or final-signoff boundaries.
- Stricter tenant policy overrides public provider defaults when the tenant has documented authority; conflicts without precedence are escalated.

## Monitoring And Logging

- Monitor package activation, source freshness, scenario coverage drift, refusal rate, low-confidence escalation rate, and adjacent-lane handoffs.
- Log source IDs, tenant evidence IDs, retrieval timestamps, assumptions, confidence, owner, output shape, refusal reason, and orchestrator return reason.
- Alert when authority sources pass refresh interval, tenant evidence lacks owner or retrieval timestamp, scenarios lose coverage, or a materializer attempts a trusted-build behavior not approved by promotion criteria.

## Rollback

- Roll back by selecting the previous approved catalog package and pausing activation of `v1.1.0`.
- Preserve generated outputs and execution traces for audit review; do not delete tenant evidence.
- Reopen the release gate if rollback is caused by stale sources, boundary drift, scenario coverage error, or tenant-isolation defect.
- Revalidate the package before reactivation with evaluation results, functionality coverage, research summary, and readiness evidence.

## Promotion Criteria

Runtime may remain `specification-based` indefinitely. Retaining a trusted generated
implementation in the repository requires:

- sustained frequent-use evidence across tenants or internal workflows;
- repeated successful JIT materializations with no boundary or evidence regressions;
- scenario coverage equal to or stronger than this spec pack plus tenant-specific regression tests;
- monitoring, rollback, and source-refresh controls for the generated runtime;
- human reviewer approval documenting why retained implementation cost is justified.

## Support Ownership

- Primary owner: cloud platform catalog maintainer.
- Runtime owner: orchestrator or materializer team.
- Review owners: platform engineering, reliability, business continuity technology owner, and human reviewer.
- Adjacent authorities: storage and backup, database operations, Kubernetes platform, infrastructure as code, cloud security, observability, FinOps, procurement, legal, privacy, compliance, risk, and continuity program owners.

## Market Deployment Notes

- Target buyer: platform engineering and reliability leaders who need auditable continuity guidance across cloud provider estates.
- Target user: infrastructure engineers, SREs, operations reviewers, and managed cloud operations analysts.
- Packaging: standalone spec pack with manifest, research, functional map, scenarios, results, readiness, deployment, and marketing artifacts.
- Subscription model: tenant-scoped specialist activation with workload, environment, and review-volume tiering.
- Commercialization proof points: 19-scenario validation, full functional ability coverage, source-backed research, explicit refusal boundaries, human verification, and documented rollback path.
- Go-to-market assumptions: exact cloud cost benchmarks, tenant legal interpretations, procurement terms, and customer continuity outcome metrics are external to this package.

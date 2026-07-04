# Deployment Package

## Deployment Model

- Package type: validated spec pack under `catalog/cloud-platform-and-infrastructure/infrastructure-as-code-specialist/`.
- Runtime strategy: `specification-based`.
- Runtime consumer: `commons-crew`, catalog dispatcher, ChatOps orchestrator, or another future materializer that can load the manifest, research summary, functionality map, scenarios, results, readiness evidence, deployment notes as the canonical source of truth.
- retained implementation: not claimed. A generated implementation may be retained only after separate frequent-use promotion evidence, regression validation, source refresh, tenant-isolation review, rollback proof, and maintainer approval.
- Required secrets: none for base spec-pack use. Tenant-specific provider read access, repository access, state metadata, or pipeline logs must be supplied through approved retrieval integrations with tenant isolation and audit logging.

## Materialization Requirements

A runtime materializer must supply or retrieve:

- task and boundary metadata from `manifest.yaml`
- authoritative source and refresh metadata from `manifest.yaml` and `evaluation/research-summary.json`
- ability and scenario coverage from `evaluation/functionality-map.json` and `evaluation/results.json`
- cloud provider set, account/subscription/project/cluster scope, regions, environments, owners, and approval authority
- IaC repositories, module registries, provider versions, backend/state metadata, lock behavior, workspace or stack mapping, generated plan/preview/change-set/what-if output, deployment history, drift reports, policy decisions, and pipeline logs
- tenant architecture/topology, brownfield/import status, shared-resource ownership, dependency graph, backup/restore evidence, RTO/RPO, change windows, rollback criteria, incident context, quota/cost constraints, and source precedence
- refusal and orchestrator-return triggers for missing evidence, conflicting authority, adjacent ownership, live execution, credential handling, legal/compliance/financial approval, and application-only engineering

If these facts are missing and would change the recommendation, the runtime must produce a low-confidence escalation or orchestrator return instead of deterministic IaC advice.

## Boundary Enforcement

The materialized specialist may recommend IaC structure, state strategy,
provider-native preview and deployment review workflows, validation gates,
rollback prerequisites, drift handling, policy-as-code evidence, troubleshooting
sequence, and commercialization notes. It must refuse or return work when the
request primarily requires:

- application feature implementation, database schema design, or in-depth software architecture
- pure network architecture, identity governance, endpoint management, SOC investigation, incident command, forensics, or security operations
- cloud migration execution, Kubernetes workload operations, observability platform implementation, database operations, or FinOps approval outside IaC evidence scope
- legal, privacy, compliance attestation, procurement, financial approval, risk acceptance, exception approval, or production signoff
- credential handling, secrets exposure, Terraform apply, CloudFormation update, Azure deployment, Google deployment, Kubernetes apply, failover, destructive state operation, or other live tenant execution

## Tenant Isolation

- Run each tenant in an isolated context with separate retrieval credentials, evidence stores, logs, prompt state, and output history.
- Do not reuse tenant topology, repositories, state, plan files, deployment logs, account IDs, policies, incident details, cost evidence, or approval records across tenants.
- Treat tenant-specific policies as additive constraints unless an authorized owner explicitly defines precedence over public baseline guidance.
- Record assumptions, source IDs, evidence links, owner handoffs, and unresolved blockers in every materialized artifact.
- Do not store provider credentials, secrets, private state payloads, or raw tenant logs in the baseline package.

## Monitoring And Logging

Track these operational signals for any materialized runtime:

- boundary decision rate and adjacent-lane routing accuracy
- low-confidence escalation rate and missing-fact categories
- source freshness, source-conflict frequency, and provider/tool version warnings
- scenario regression trend for the 18 required scenarios
- tenant evidence retrieval failures and stale record warnings
- plan/preview/drift/runbook output completion, assumption count, unresolved ambiguity count, and refusal rate
- attempted live-execution, credential, secret, approval, or policy-bypass requests

Invocation logs should include task class, scope verdict, source IDs, tenant evidence references, confidence state, refusal or handoff reason, and output shape. Logs must not store secrets, raw private state, or cross-tenant data.

## Rollback Path

1. Disable the materialized runtime or newest spec-pack release in the dispatcher.
2. Route IaC specialist requests to the orchestrator, a human reviewer, or a previous validated package version.
3. Preserve invocation logs, scenario failures, source freshness state, and tenant evidence failure examples for review.
4. Patch the spec pack or materialized implementation.
5. Re-run JSON validation, agent-package verification, catalog build, and the package scenario suite before re-enabling.

Rollback should also remove any trusted-build claim if the package fails boundary, evidence, source freshness, tenant-isolation, or evaluation gates.

## Promotion Criteria For retained implementation

Keep this package as `specification-based` unless all of the following are true:

- usage telemetry proves the Infrastructure as code specialist is called frequently enough that retaining a generated implementation materially improves cost, latency, reliability, or delivery throughput
- a generated implementation passes the same 18-scenario suite with no unreviewed regressions
- source refresh, tenant evidence retrieval, logging, rollback, refusal behavior, and adjacent-lane routing are tested in the target runtime
- runtime tests prove no credential handling, live tenant execution, final approval, policy bypass, destructive state operation, or adjacent-lane ownership drift
- a human maintainer approves promotion and records the trusted-build decision separately from issue #1637

## Deployment Gaps

- Live retrieval connectors for repositories, Terraform/HCP Terraform, AWS, Azure, Google Cloud, Kubernetes, policy engines, CI/CD, cost tools, and observability evidence remain tenant-specific.
- Final architecture approval, change approval, go-live approval, exception approval, risk acceptance, and operational execution remain with tenant owners.
- Provider documentation, tool behavior, API versions, region support, quotas, pricing, and preview-feature behavior must be refreshed at runtime when they materially affect the recommendation.

## Support Ownership

- Package owner: platform catalog maintainers.
- Domain reviewer: cloud platform or infrastructure-as-code domain lead.
- Escalation owners: orchestrator, human reviewer, provider-specific architecture specialist, cloud operations, cloud security, identity, network, Kubernetes/container platform, observability, backup/storage, database operations, migration, FinOps, legal/compliance, finance/procurement, or application owner based on routing note.

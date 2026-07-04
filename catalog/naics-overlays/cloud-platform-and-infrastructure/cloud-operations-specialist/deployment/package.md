# Deployment Package

## Deployment Model

- Package type: validated spec pack under `catalog/cloud-platform-and-infrastructure/cloud-operations-specialist/`.
- Runtime strategy: `specification-based`.
- Runtime consumer: `commons-crew`, catalog dispatcher, or another future materializer that can load the manifest, research summary, functionality map, scenarios, results, readiness evidence, deployment notes as the canonical source of truth.
- retained implementation: not claimed. A generated implementation may be retained only after separate frequent-use promotion evidence and maintainer approval.
- Required secrets: none for base spec-pack use. Tenant-specific cloud, Kubernetes, monitoring, backup, IaC, change, and incident retrieval credentials must be supplied through approved runtime integrations with tenant isolation and audit logging.

## Materialization Requirements

A runtime materializer must supply or retrieve:

- Task intent, desired output shape, planning horizon, business criticality, decision owner, and approval matrix.
- Cloud account, subscription, project, cluster, region, zone, resource, quota, capacity, provider footprint, and dependency records.
- SLOs, SLIs, RTO/RPO, data classification, residency, privacy, contractual constraints, maintenance windows, change freezes, and risk tolerance.
- Monitoring, logging, alert, incident, post-incident review, on-call, runbook, and escalation evidence.
- Backup policy, vault or repository, restore point, restore-test, DR exercise, contingency plan, and recovery evidence.
- Kubernetes version, deprecated API, manifest, node pool, maintenance, validation, and rollback evidence when cluster operations are in scope.
- Terraform state, backend, locking, access, plan, apply, drift, recovery, policy-as-code, and repository evidence when IaC operations are in scope.
- Cost, usage, capacity forecast, FinOps request, budget constraint, and spend-owner handoff notes when optimization changes could affect reliability or isolation.
- Source precedence between public provider guidance, tenant standards, contracts, regulatory obligations, and human owner decisions.

If these facts are missing and would change the recommendation, the runtime must produce an escalation note rather than a deterministic operations answer.

## Boundary Enforcement

The materialized specialist may recommend cloud operations options, constraints,
sequence, validation checkpoints, runbook changes, triage steps, and owner
handoffs. It must refuse or return work when the request primarily requires:

- application feature implementation, app debugging, product UX, app architecture, API contracts, or SDLC ownership
- cloud security investigation, forensics, vulnerability execution, penetration testing, IAM governance, incident command, or formal security attestation
- network operations execution, carrier troubleshooting, database administration, storage administration, or provider implementation work outside operations guidance
- vendor-specific pricing quotes, procurement approval, legal advice, compliance declarations, final budget or staffing approval, risk acceptance, or production execution
- unsupported provider-specific claims, preview-feature guarantees, or service behavior not backed by current authoritative sources and tenant evidence

## Tenant Isolation

- Run each tenant in an isolated context with separate retrieval credentials, evidence stores, logs, prompts, assumptions, and evaluation overlays.
- Do not reuse tenant diagrams, inventories, Terraform state, Kubernetes manifests, incident records, backup records, telemetry, cost evidence, policies, or runbooks across tenants.
- Treat tenant-specific policies as additive constraints unless an authorized owner explicitly defines precedence over public baseline guidance.
- Record assumptions, source IDs, system-of-record references, and confidence state in every artifact.

## Monitoring And Logging

Track these operational signals for any materialized runtime:

- boundary decision rate and adjacent-lane routing accuracy
- low-confidence escalation rate and missing-fact categories
- source freshness and source-conflict frequency
- scenario regression trend for the 18 required scenarios
- tenant evidence retrieval failures and stale record warnings
- schedule recommendation count, capacity shortfall count, and approval-required tradeoff count
- artifact completion, assumption count, unresolved ambiguity count, and tenant adaptation count

Invocation logs should include task class, scope verdict, source IDs, tenant
evidence references, confidence state, refusal or handoff reason, output shape,
and approval boundary. Logs must not store secrets or cross-tenant data.

## Rollback Path

1. Disable the materialized runtime or newest spec-pack release in the dispatcher.
2. Route cloud operations requests to the orchestrator, previous validated package version, or a human cloud operations reviewer.
3. Preserve invocation logs, scenario failures, source freshness state, tenant evidence failure examples, and boundary decisions for review.
4. Patch the spec pack or materialized implementation.
5. Re-run JSON validation, catalog verification, and the package scenario suite before re-enabling.

Rollback should also remove any trusted-build claim if the package fails
boundary, evidence, source freshness, functionality, or evaluation gates.

## Promotion Criteria

Keep this package as `specification-based` unless all of the following are true:

- usage volume proves the cloud operations specialist is called frequently enough that retaining a generated implementation materially improves cost, latency, or reliability
- a generated implementation passes the same 18 scenario families and all 10 functional abilities with no unreviewed regressions
- source refresh, tenant evidence retrieval, logging, rollback, tenant isolation, and boundary enforcement are tested in the target runtime
- a human maintainer approves promotion and records the trusted-build decision separately from issue #1635

## Deployment Gaps

- Live retrieval connectors for provider inventories, Kubernetes, monitoring, backups, IaC, change, incident, and cost systems are tenant-dependent and not part of this package.
- Final change, staffing, budget, procurement, risk, legal, compliance, incident-command, customer-notification, or production approval remains with the tenant owner.
- Provider service availability, quotas, pricing, preview-feature behavior, and regional constraints must be refreshed at runtime when they materially affect the recommendation.

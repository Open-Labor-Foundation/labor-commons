# Deployment Package

## Deployment Model

- Package type: validated spec pack under `catalog/cloud-platform-and-infrastructure/cloud-migration-specialist/`.
- Runtime strategy: `specification-based`.
- Runtime consumer: `commons-crew`, catalog dispatcher, or another future materializer that can load the manifest, research summary, functionality map, scenarios, results, readiness evidence, deployment notes as the canonical source of truth.
- retained implementation: not claimed. A generated implementation may be retained only after separate frequent-use promotion evidence and maintainer approval.
- Required secrets: none for base spec-pack use. Tenant-specific cloud, Kubernetes, migration tooling, monitoring, backup, IaC, change, incident, and evidence retrieval credentials must be supplied through approved runtime integrations with tenant isolation and audit logging.

## Materialization Requirements

A runtime materializer must supply or retrieve:

- Task intent, desired output shape, migration phase, planning horizon, business criticality, decision owner, and approval matrix.
- Workload inventory, dependency map, owner map, source topology, target-state constraints, service criticality, migration backlog, and current wave plan.
- Cloud account, subscription, project, cluster, region, zone, resource, quota, capacity, provider footprint, landing-zone, tenancy, DNS, network, firewall, routing, identity, and access records.
- SLOs, SLIs, RTO/RPO, data classification, residency, privacy, contractual constraints, maintenance windows, change freezes, blackout dates, and risk tolerance.
- Migration tool records, discovery outputs, replication status, test launches, health-check evidence, validation evidence, cutover runbooks, rollback plans, and issue logs.
- Monitoring, logging, alert, incident, post-cutover issue, runbook, escalation, and operational handoff evidence.
- Backup policy, vault or repository, restore point, restore-test, DR exercise, contingency plan, and recovery evidence.
- Terraform state, backend, access, plan, apply, drift, recovery, policy-as-code, and repository evidence when IaC migration automation is in scope.
- Kubernetes cluster, component, manifest, service, ingress, storage, and workload dependency evidence when container platform migration is in scope.
- Cost, usage, capacity forecast, licensing, FinOps request, budget constraint, and spend-owner handoff notes when migration choices affect spend.
- Source precedence between public provider guidance, tenant standards, contracts, regulatory obligations, and human owner decisions.

If these facts are missing and would change the recommendation, the runtime must produce an escalation note rather than a deterministic migration answer.

## Boundary Enforcement

The materialized specialist may recommend migration options, constraints,
sequence, validation checkpoints, cutover steps, rollback checkpoints,
troubleshooting order, readiness evidence, deployment notes, commercial notes,
and owner handoffs. It must refuse or return work when the request primarily
requires:

- application feature implementation, app debugging, UI changes, database schema redesign, business logic refactoring, application architecture, API contracts, or SDLC ownership
- endpoint administration, identity product administration, IAM policy ownership, network operations execution, database administration, storage administration, or provider production implementation outside migration-enablement guidance
- cloud security investigation, forensics, vulnerability execution, penetration testing, incident command, or formal security attestation
- vendor-specific pricing quotes, procurement approval, legal advice, privacy or residency ruling, compliance declaration, final budget or staffing approval, final cutover approval, rollback execution, risk acceptance, or production execution
- unsupported provider-specific claims, preview-feature guarantees, or service behavior not backed by current authoritative sources and tenant evidence

## Tenant Isolation

- Run each tenant in an isolated context with separate retrieval credentials, evidence stores, logs, prompts, assumptions, migration artifacts, diagrams, and evaluation overlays.
- Do not reuse tenant inventories, dependency maps, migration tool records, Terraform state, Kubernetes manifests, diagrams, incident records, backup records, telemetry, cost evidence, policies, credentials, or runbooks across tenants.
- Treat tenant-specific policies as additive constraints unless an authorized owner explicitly defines precedence over public baseline guidance.
- Record assumptions, source IDs, system-of-record references, confidence state, and approval-required tradeoffs in every artifact.

## Monitoring And Logging

Track these operational signals for any materialized runtime:

- boundary decision rate and adjacent-lane routing accuracy
- low-confidence escalation rate and missing-fact categories
- source freshness and source-conflict frequency
- scenario regression trend for the 20 required scenarios
- tenant evidence retrieval failures and stale record warnings
- migration strategy memo, cutover runbook, readiness evidence, deployment note, and commercial note completion rates
- schedule recommendation count, capacity shortfall count, and approval-required tradeoff count
- artifact completion, assumption count, unresolved ambiguity count, tenant adaptation count, and rollback checkpoint coverage

Invocation logs should include task class, scope verdict, source IDs, tenant
evidence references, confidence state, refusal or handoff reason, output shape,
and approval boundary. Logs must not store secrets or cross-tenant data.

## Rollback Path

1. Disable the materialized runtime or newest spec-pack release in the dispatcher.
2. Route cloud migration requests to the orchestrator, previous validated package version, or a human cloud migration reviewer.
3. Preserve invocation logs, scenario failures, source freshness state, tenant evidence failure examples, boundary decisions, and rollback evidence for review.
4. Patch the spec pack or materialized implementation.
5. Re-run JSON validation, catalog verification, and the package scenario suite before re-enabling.

Rollback should also remove any trusted-build claim if the package fails
boundary, evidence, source freshness, functionality, tenant isolation, or
evaluation gates.

## Promotion Criteria

Keep this package as `specification-based` unless all of the following are true:

- usage volume proves the cloud migration specialist is called frequently enough that retaining a generated implementation materially improves cost, latency, or reliability
- a generated implementation passes the same 20 scenario families and all 10 functional abilities with no unreviewed regressions
- source refresh, tenant evidence retrieval, logging, rollback, tenant isolation, and boundary enforcement are tested in the target runtime
- a human maintainer approves promotion and records the trusted-build decision separately from issue #1640

## Deployment Gaps

- Live retrieval connectors for provider inventories, migration tools, dependency maps, Kubernetes, monitoring, backups, IaC, change, incident, network, identity, and cost systems are tenant-dependent and not part of this package.
- Final change, staffing, budget, procurement, risk, legal, compliance, privacy, incident-command, customer-notification, final cutover, rollback execution, or production approval remains with the tenant owner.
- Provider service availability, quotas, pricing, migration-tool behavior, preview-feature behavior, licensing, and regional constraints must be refreshed at runtime when they materially affect the recommendation.

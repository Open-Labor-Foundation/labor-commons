# Deployment Package

## Deployment Model

- Package type: validated spec pack under `catalog/cloud-platform-and-infrastructure/google-cloud-architecture-specialist/`.
- Runtime strategy: `specification-based`.
- Runtime consumer: `commons-crew`, catalog dispatcher, or another future materializer that can load the manifest, research summary, functionality map, scenarios, results, readiness evidence, deployment notes as the canonical source of truth.
- retained implementation: not claimed. A generated implementation may be retained only after separate frequent-use promotion evidence and maintainer approval.
- Required secrets: none for base spec-pack use. Tenant-specific Google Cloud read access is optional and must be supplied through approved retrieval integrations with tenant isolation and audit logging.

## Materialization Requirements

A runtime materializer must supply or retrieve:

- Google Cloud organization, folder, project, tag, label, organization-policy, shared-services, landing-zone, and guardrail records.
- VPC, Shared VPC, Network Connectivity Center, Private Service Connect, DNS, Cloud NAT, load balancing, hybrid connectivity, routing, firewall, and network inventory when topology guidance is requested.
- Workload requirements, dependency maps, SLOs, RTO/RPO, data classification, residency, privacy, contractual, cost, and change-window constraints.
- Cloud Asset Inventory, Cloud Audit Logs, Cloud Monitoring, Cloud Logging, Error Reporting, Backup and DR, Cost Management, budgets, quota, incident, runbook, ADR, diagram, CMDB, IaC repository, Terraform state and plan, Config Controller, Deployment Manager legacy, and change-record evidence.
- Source precedence between Google Cloud public guidance, tenant standards, customer contracts, regulatory obligations, and human owner decisions.

If these facts are missing and would change the recommendation, the runtime must produce an escalation note instead of a deterministic architecture answer.

## Boundary Enforcement

The materialized specialist may recommend Google Cloud architecture options,
risks, tradeoffs, implementation sequencing, validation checkpoints, and owner
handoffs. It must refuse or return work when the request primarily requires:

- application feature implementation or application-only release design
- cloud security investigation, forensics, vulnerability execution, penetration testing, incident command, or formal security governance
- enterprise identity policy ownership without Google Cloud architecture coupling
- network operations execution, carrier troubleshooting, or packet-level implementation
- Kubernetes or container platform operations after Google Cloud project and network architecture are no longer the decision surface
- legal, compliance attestation, procurement, finance approval, risk acceptance, or production execution authority

## Tenant Isolation

- Run each tenant in an isolated context with separate retrieval credentials, evidence stores, logs, and prompt state.
- Do not reuse tenant diagrams, project inventories, Terraform state, Config Controller resources, Deployment Manager state, incident records, cost evidence, logs, metrics, or policies across tenants.
- Treat tenant-specific policies as additive constraints unless an authorized owner explicitly defines precedence over public baseline guidance.
- Record assumptions and source IDs in every architecture artifact so tenant adaptation remains auditable.

## Monitoring And Logging

Track these operational signals for any materialized runtime:

- boundary decision rate and adjacent-lane routing accuracy
- low-confidence escalation rate and missing-fact categories
- source freshness and source-conflict frequency
- scenario regression trend for the 18 required scenarios
- tenant evidence retrieval failures and stale record warnings
- architecture artifact completion, assumption count, and unresolved ambiguity count

Invocation logs should include task class, scope verdict, source IDs, tenant
evidence references, confidence state, refusal or handoff reason, and output
shape. Logs must not store secrets or cross-tenant data.

## Rollback Path

1. Disable the materialized runtime or newest spec-pack release in the dispatcher.
2. Route Google Cloud architecture requests to the orchestrator or a previous validated package version.
3. Preserve invocation logs, scenario failures, source freshness state, and tenant evidence failure examples for review.
4. Patch the spec pack or materialized implementation.
5. Re-run JSON validation, catalog build, and the package scenario suite before re-enabling.

Rollback should also remove any trusted-build claim if the package fails
boundary, evidence, source freshness, or evaluation gates.

## Promotion Criteria

Keep this package as `specification-based` unless all of the following are true:

- usage volume proves the Google Cloud architecture specialist is called frequently enough that retaining a generated implementation materially improves cost, latency, or reliability
- a generated implementation passes the same 18 scenario families with no unreviewed regressions
- source refresh, tenant evidence retrieval, logging, rollback, and boundary enforcement are tested in the target runtime
- a human maintainer approves promotion and records the trusted-build decision separately from issue #1639

## Deployment Gaps

- Live Google Cloud retrieval connectors are tenant-dependent and not part of this package.
- Final architecture approval remains with the tenant architecture review board, platform owner, security owner, change authority, or other authorized human approver.
- Google Cloud service availability, quotas, pricing, and preview-feature behavior must be refreshed at runtime when they materially affect the recommendation.

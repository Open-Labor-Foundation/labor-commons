# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`
- retained implementation claimed: no
- Canonical source of truth: this package directory, including `manifest.yaml`, `evaluation/scenarios.md`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, `readiness/evidence.json`, this deployment package, and commercialization notes.
- Target runtime: GitHub-based agent invocation platform or future `commons-crew` materializer that can load the spec pack and produce Markdown artifacts without retaining a generated implementation.
- Optional integrations: tenant-scoped retrieval for cloud inventory, monitoring, backup, incident, change, cost, policy, repository, and IaC state systems.

## Required Materializer Inputs

A runtime materializer must have the following before producing final compute guidance:

- Task metadata: request intent, desired output shape, provider, environment, urgency, workload owner, approval context, and adjacent-lane indicators.
- Boundary metadata: in-scope compute decision type, hard refusal triggers, orchestrator return rules, adjacent specialist map, and authority caveats.
- Tenant facts: workload profile, SLO, RTO/RPO, current topology, regions and zones, tenancy, data classification, compliance context, cost constraints, quota posture, maintenance windows, and change controls.
- Evidence dependencies: compute inventory, autoscaling configuration, image and patch baselines, monitoring signals, backup and restore evidence, incident records, change tickets, IaC plans and state, drift reports, and owner approvals.
- Source state: current provider, Kubernetes, Terraform, NIST, CIS, and tenant policy sources with review dates and precedence rules.

## Tenant Isolation

- Tenant data must remain scoped to the tenant workspace, namespace, or evidence store.
- Baseline public-source logic may be shared; tenant-specific policy, topology, incident details, costs, exceptions, generated artifacts, and retrieval traces must not be promoted globally without review.
- Tenant overlays may narrow supported providers, add evidence requirements, or require stronger controls, but must not remove boundary rules, source freshness requirements, or escalation gates.
- Cross-tenant comparisons must use anonymized aggregate metrics only and must not expose workload names, architecture diagrams, incident details, cost data, or policy exceptions.

## Deployment Steps

1. Publish the refreshed spec pack on the catalog branch with runtime strategy set to `specification-based`.
2. Validate that `evaluation/results.json`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, and `readiness/evidence.json` agree on release version, scenario count, pass rate, ability count, research contract, and validated status.
3. Configure any materializer to load the package files directly and to block final guidance when required tenant records or source freshness are missing.
4. Enable tenant retrieval only through approved connectors with least-privilege read access and tenant-specific retention controls.
5. Record every invocation with scope verdict, source IDs, evidence references, assumptions, confidence state, output artifact path, refusal or escalation reason, and reviewer when present.

## Monitoring And Logging

- Monitor source freshness weekly and block recommendation updates when any required source has exceeded its refresh interval and materially affects the requested guidance.
- Track scenario pass rate, functionality coverage, research coverage, refusal accuracy, adjacent-lane routing accuracy, and low-confidence escalation frequency.
- Log source-policy conflicts, missing tenant evidence, inaccessible systems of record, and any request for production execution, approval, legal/compliance signoff, or spend approval.
- Review boundary failures immediately and treat any unreviewed regression as a release blocker.

## Rollback Path

- Revert the package directory to the last tagged validated evidence snapshot.
- Suspend materialized outputs for the lane if research, functionality, or evaluation artifacts become inconsistent.
- Route new compute and server infrastructure requests to the orchestrator or human reviewer while evidence is repaired.
- Re-run JSON parse checks, package consistency checks, and relevant repository validation before re-enabling the refreshed package.

## Promotion Criteria

Keep the runtime `specification-based` unless all criteria below are met in a separate promotion issue:

- At least 25 successful tenant invocations in a rolling 90-day period with repeated demand for the same output shapes.
- Standard validation pass rate remains at or above 0.95 with no critical boundary failures or unreviewed regressions.
- Source refresh, tenant isolation, logging, rollback, support owner, and operational runbooks are human-reviewed.
- A cost and maintenance review shows retaining a trusted built implementation is safer and cheaper than on-demand materialization.

## Support Owner

- Primary support: cloud infrastructure product operations team.
- Required escalation: orchestrator or human reviewer for missing evidence, source-policy conflicts, approval boundaries, provider support authority, legal/compliance questions, or production execution requests.

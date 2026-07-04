# Deployment Package

## Runtime

- Target runtime: validated spec pack consumed by the repository catalog materializer or orchestrator.
- Runtime strategy: `specification-based`.
- retained implementation: not claimed. Any generated implementation is temporary unless separately promoted with frequent-use evidence, telemetry, validation, rollback, and owner approval.
- Deployment model: dispatch through the cloud-platform-and-infrastructure catalog lane with per-request retrieval of tenant records, source freshness checks, refusal rules, and orchestrator routing.
- Required configuration:
  - `domain_slug=cloud-platform-and-infrastructure`
  - `agent_slug=hybrid-cloud-specialist`
  - `workflow_phase_group=planning-scheduling-and-allocation`
  - `industry_profile=cross-industry`
  - `runtime_strategy=specification-based`
  - `default_review_required=true`
  - `confidence_threshold=0.72`

## Materialization Requirements

`commons-crew` or a future materializer needs these inputs before safely materializing this lane:

- Task and boundary metadata from `manifest.yaml`, including supported tasks, output shapes, hard refusals, orchestrator return rules, adjacent specialists, and advisory-only approval posture.
- Research baseline from `evaluation/research-summary.json`, including authority sources, source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity handling.
- Functional contract from `evaluation/functionality-map.json`, including all shared abilities, planning-scheduling-and-allocation abilities, cross-industry artifact awareness, required inputs, outputs, refusal triggers, and scenario coverage.
- Tenant-supplied or retrieved runtime context: workload inventory, dependency graph, topology, cloud estate, landing-zone records, RTO/RPO, SLOs, data classification, policy library, change calendar, maintenance windows, capacity limits, approval matrix, and adjacent-owner map.
- Evidence dependencies: CMDB, service catalog, network source of truth, IPAM, DNS, route records, SD-WAN/VPN/private-circuit records, backup and DR evidence, observability and incident records, IaC provider mappings, architecture decision records, and risk or exception records.

Do not materialize a trusted retained implementation unless the promotion criteria in `manifest.yaml` are satisfied.

## Isolation

- Tenant boundary: one isolated tenant profile per customer or internal tenant. Workload inventory, network graph, incident history, policy overlays, evidence IDs, and approval records cannot cross tenants.
- Knowledge boundary: use public source baseline and tenant-approved retrieval only. Do not ingest secrets, private keys, credentials, tokens, unredacted packet captures, or contract terms into durable logs.
- Adaptation policy:
  - Allowed: tenant record retrieval, policy overlay, source freshness review, output-shape tuning, and approved configuration thresholds.
  - Prohibited: cross-tenant sharing, hidden source overrides, unapproved tool permissions, storing tenant secrets, and converting advisory guidance into approval authority.

## Operations

- Monitoring:
  - Track refusal rate, escalation rate, missing-evidence rate, adjacent-routing rate, source-refresh overdue state, and scenario-regression status.
  - Alert when low-confidence escalations exceed expected baseline for 24 hours, when source freshness expires, or when policy conflict scenarios increase.
- Logging:
  - Record request metadata, output shape, confidence state, evidence artifact IDs, refusal trigger, escalation route, and approval-required tradeoffs.
  - Exclude tenant secrets, credentials, raw private telemetry, and contract details. Retain immutable audit metadata according to tenant policy.
- Refresh:
  - Review public source baseline at least every 90 days for cloud provider and tool sources, every 180 days for NIST sources, and every 365 days for GAO scheduling guidance.
  - Re-run spec validation when a source refresh changes a workflow claim, output expectation, refusal boundary, or tenant prerequisite.

## Rollback

- Revert the package directory to the previous committed spec pack if validation, source review, or human verification fails.
- Disable materialization of generated runtimes by preserving `runtime_strategy=specification-based` and removing any unapproved retained implementation reference.
- Route new requests to the orchestrator or human reviewer until `evaluation/results.json`, `readiness/evidence.json`, and `readiness/release.md` are revalidated.
- If a boundary regression is found, add a scenario covering the regression before restoring validated claim.

## Support Ownership

- Product owner: repository steward.
- Operational escalation: cloud platform operations queue.
- Adjacent approvals: tenant architecture review board, CAB/change owner, security owner, identity owner, network execution owner, FinOps/procurement owner, legal/vendor owner, and human orchestrator as applicable.

# Deployment Package

## Runtime

- Target runtime: LLM orchestration runtime with policy evaluation, retrieval controls, source freshness checks, and boundary enforcement.
- Deployment model: specification-based catalog artifact consumed by an orchestrator and materialized on demand. The package is stateless and may accept a tenant profile overlay at runtime.
- Runtime strategy: specification-based.
- retained implementation: Not claimed. Retaining a generated implementation in-repo requires separate frequent-use promotion evidence and maintainer approval.
- Required secrets: None in this package. The specialist must not request, store, or process tenant cloud credentials.
- Required configuration: Manifest, scenario set, functionality map, research summary, evaluation results, readiness evidence, deployment notes source freshness policy, and orchestrator routing rules.

## Materialization Requirements

A future `commons-crew` or equivalent runtime materializer needs:

- Task metadata: agent slug, queue slug, domain family, supported tasks, expected output shapes, validation profile, and scenario IDs.
- Boundary metadata: out-of-scope rules, orchestrator return rules, adjacent specialist list, no-execution posture, no credential handling, and approval authority limits.
- Tenant facts: workload profile, provider footprint, VM inventory, region and zone targets, quota state, machine or instance family options, disk class, OS and licensing constraints, tenancy and isolation requirements, RTO/RPO, backup/restore evidence, observability records, IaC state, change records, and approval matrix.
- Evidence dependencies: current official provider sources, Terraform provider schemas, KubeVirt references when applicable, NIST evidence/control references, tenant systems of record, source freshness timestamps, and source-precedence rules.
- Caveats: recommendations are advisory, provider-specific, source-bound, tenant-evidence-bound, and cannot become legal, procurement, compliance, risk, or production-execution approval.
- Refusal handling: produce an escalation or refusal note when required tenant facts, authority, source freshness, feature support, or adjacent-lane ownership is missing or conflicting.

## Isolation

- Tenant boundary: Tenant identifiers are metadata only; outputs must not include credentials, secrets, non-public host topology, exact privileged resource IDs, or unredacted incident data.
- Knowledge boundary: Use public sources listed in the manifest plus tenant-approved evidence. Do not generalize one provider's VM behavior to another without current source support.
- Adaptation policy: Tenant adaptation may change configuration, retrieval sources, output emphasis, and source-precedence assumptions. Structural logic changes, final approvals, and live execution route through orchestrator.
- Cross-tenant sharing: Prohibited for tenant evidence, source-precedence rules, internal policies, workload profiles, and operational records.

## Operations

- Monitoring: Track invocation count, completed output shape, source freshness status, missing-fact rate, refusal rate, adjacent-lane routing, low-confidence escalation, and scenario-family coverage.
- Logging: Persist request metadata, selected source IDs, tenant evidence references, assumptions, confidence state, recommendation rationale, refusal triggers, and orchestrator return decisions with redaction controls.
- Evidence retention: Store only references or approved summaries for tenant systems of record unless tenant policy explicitly permits evidence retention.
- Review cadence: Revalidate public sources at least every 90 days for provider/tool docs and every 365 days for NIST references, or sooner after material provider, Terraform, KubeVirt, or standard updates.

## Rollback

- Rollback path: Disable the virtualization specialist route, return requests to the general cloud platform orchestrator or previous catalog artifact, retain the prior package version, and rerun validation after correction.
- Data rollback: No tenant data migration is part of this package. Remove or quarantine any incorrectly retained tenant evidence according to tenant retention and redaction policy.
- Runtime rollback trigger: Source freshness failure, regression in boundary handling, incorrect execution-authority behavior, missing functionality coverage, failed scenario threshold, or maintainer hold.

## Support Ownership

- Package owner: Repository maintainer.
- Runtime owner: Platform orchestration team.
- Tenant execution owner: Tenant-authorized cloud or virtualization operations team.
- Adjacent escalation owners: Cloud operations, cloud migration, storage and backup, business continuity, infrastructure as code, Kubernetes platform, network architecture, identity, security, application engineering, FinOps, legal, procurement, and human reviewer as applicable.

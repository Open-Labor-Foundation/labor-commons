# Deployment Package

## Runtime

- Target runtime: Orchestrator or `commons-crew` materializer that can ingest structured manifest, evaluation, research, functionality, readiness, deployment, and commercialization artifacts.
- Runtime strategy: `specification-based`.
- Deployment model: Repository-sourced validated spec pack with just-in-time materialization; no trusted generated implementation is retained by default.
- Required secrets: None for the package. Tenant credentials, kubeconfigs, provider credentials, support tickets, and secrets are runtime operator concerns and must not be embedded.
- Required configuration:
  - Tenant retrieval permissions for cluster inventory, provider records, IaC, GitOps, monitoring, backup, incident, and evidence stores.
  - Tenant approval matrix for production change, release, budget, staffing, risk, compliance, provider-support, and exception decisions.
  - Source refresh policy matching `manifest.yaml` and `evaluation/research-summary.json`.

## Materialization Requirements

Any materializer must load and preserve:

- task metadata, queue slug, semantic profile, runtime strategy, and target delivery level
- specialty boundary, allowed decision types, hard refusal triggers, orchestrator-return rules, and adjacent specialist map
- tenant-required facts for provider, cluster topology, Kubernetes version, node pools, workload classes, SLOs, capacity, network, isolation, security, IaC, monitoring, backup, owners, and approvals
- source metadata including publisher, authority rationale, review date, refresh interval, and decay policy
- output contracts for architecture recommendations, implementation blueprints, incident triage plans, readiness summaries, schedule/allocation recommendations, constraint logs, escalation notes, and decision logs
- evaluation scenarios, functionality coverage, research summary, readiness evidence, and no-regression posture

Generated runtime behavior must state assumptions, source basis, tenant records used, confidence, unresolved blockers, and authority boundaries in every substantive output.

## Isolation

- Tenant boundary:
  - Baseline package remains tenant-neutral and must not store tenant cluster topology, secrets, incident details, support cases, workload data, or compliance evidence.
  - Tenant-specific adaptation is allowed only through runtime retrieval or tenant-supplied context and must be recorded as assumptions and evidence references.
- Knowledge boundary:
  - Public Kubernetes, provider, IaC, CNCF, CIS, and NIST sources are the baseline.
  - Tenant policy can constrain or override public guidance only when the conflict is documented and routed to the approved owner.
- Execution boundary:
  - The package never performs direct cluster changes, cloud account changes, provider support actions, or secrets handling.
  - Operators remain responsible for applying manifests, Terraform, Helm, GitOps changes, rollbacks, and incident commands.

## Operations

- Monitoring:
  - Track package usage, selected scenario family, output shape, source freshness, tenant fact completeness, refusal/escalation rates, and human review events.
  - Alert when pass rate drops below 0.90, a required source reaches decay policy, functionality coverage changes, or refusal/escalation behavior regresses.
- Logging:
  - Preserve request scope, tenant facts used, source IDs, evidence references, assumptions, confidence, routing state, output type, refusal/escalation rationale, and reviewer decisions.
  - Store tenant-specific logs in tenant-controlled audit systems; do not merge them into the baseline spec pack.
- Refresh:
  - Re-review sources at or before the shortest refresh interval, currently 60 days for provider best-practice and baseline sources.
  - Trigger out-of-cycle review on Kubernetes minor releases, AKS/EKS/GKE lifecycle changes, Terraform provider updates, CIS benchmark updates, or material provider guidance changes.

## Rollback

- Rollback path:
  - Revert the orchestrator package pointer to the prior accepted release if validation, source freshness, readiness evidence, or refusal behavior fails.
  - Re-run local repository validation and compare manifest, scenarios, results, research, functionality, and readiness artifacts before republishing.
  - Return runtime to `specification-based` materialization if any promoted generated implementation drifts from this package.
- Rollback evidence:
  - Previous release pointer
  - Failed gate or regression detail
  - Scenario comparison
  - Source refresh status
  - Human reviewer decision

## Promotion Criteria

A trusted built implementation can be retained only when all of the following are true:

- usage telemetry shows recurring high-volume demand for this lane that justifies retained runtime code
- generated implementation passes all package scenarios and additional regression checks without broadening the specialty boundary
- human reviewer approves source freshness, tenant isolation, logging, rollback, and refusal behavior
- runtime can be disabled or rolled back to `specification-based` if source evidence decays or behavior drifts

## Support Owner

Primary support owner: platform engineering catalog maintainers with Kubernetes, cloud platform, and SRE review support.

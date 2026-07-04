# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`
- Deployment model: orchestrator materializes the specialist on demand from the manifest, research summary, functionality map, scenarios, and readiness evidence.
- retained implementation: not claimed. A generated implementation may be retained only after separate promotion evidence proves frequent use, stable validation, tenant isolation, rollback behavior, and security review.
- Primary runtime role: produce evidence-backed architecture review artifacts and route work that crosses the specialty boundary.

## Materialization Inputs

A future `commons-crew` or runtime materializer must load:

- task metadata, supported tasks, output shapes, and refusal triggers from `manifest.yaml`
- authority sources, workflow stages, artifacts, systems of record, decision boundaries, and failure modes from `evaluation/research-summary.json`
- required abilities, scenario coverage, and refusal triggers from `evaluation/functionality-map.json`
- strict validation thresholds and pass evidence from `evaluation/results.json`
- readiness, deployment, and commercialization constraints from readiness and marketing artifacts

## Tenant Prerequisites

The runtime must require or retrieve the following before confident recommendations:

- current architecture diagram, component inventory, and data-flow or communication-path map
- identity trust model, authorization model, service identity model, privileged-access paths, and access policy evidence
- network, cloud, API gateway, service mesh, firewall, security group, and segmentation evidence where relevant
- current control implementation evidence, exception register, risk register, and tenant control baseline
- threat model, abuse cases, known vulnerabilities or vulnerability-intake summaries, and criticality statement
- resilience constraints including RTO/RPO, backup, recovery, dependency, and availability records
- tenant policy, regulatory, contractual, privacy, financial, safety, critical-service, or sector context that materially changes the answer

## Isolation And Adaptation

- Tenant boundary: hard tenant partitioning in state storage, retrieval cache, logs, and generated artifacts.
- Knowledge boundary: public source baseline is shared; tenant evidence, diagrams, control mappings, risk register entries, and policy context remain tenant-scoped.
- Adaptation policy: tenant-specific policies can constrain recommendations but cannot remove public baseline caveats, source refresh rules, refusal triggers, or handoff requirements.
- Cross-tenant sharing: prohibited for diagrams, records, policies, evidence, assumptions, and generated outputs.

## Operations

- Monitoring:
  - track request count, output type, escalation rate, refusal rate, adjacent-lane routing rate, source-staleness warnings, evidence-missing rate, and scenario/regression outcomes
  - alert when low-confidence or boundary refusals spike by tenant, source refresh is overdue, or a materializer attempts execution or signoff outside lane authority
- Logging:
  - log request class, boundary verdict, tenant evidence IDs, source IDs, assumption markers, confidence, output shape, refusal or handoff destination, and materializer version
  - redact secrets, infrastructure names, personally identifiable information, customer data, exploit details, and tenant policy text unless retention is explicitly approved
- Human review:
  - required for regulated, critical-service, safety, financial, privacy-sensitive, OT, healthcare, public-sector, contractual, high-impact availability, or conflicting-source cases
  - required before risk acceptance, exception approval, production change approval, certification, attestation, or legal interpretation

## Rollback Path

- Disable the materialized runtime for the tenant and route requests back to orchestrator-only handling.
- Revert to the previous approved spec-pack revision and source baseline.
- Clear tenant-specific retrieval cache entries and adaptation overlays created by the failed rollout.
- Re-run strict package validation and targeted scenario review before re-enabling the refreshed spec.
- Record rollback reason, affected output shapes, source versions, tenant IDs, and any boundary or evidence regression.

## Promotion Criteria For Trusted Build

Do not retain a long-lived generated implementation in-repo unless all of the following are met:

- the lane is called frequently enough across tenants to justify implementation retention
- at least two validation cycles show stable pass rate at or above 0.92 with no unreviewed regressions
- boundary refusal and adjacent-lane routing behavior are reviewed against real request samples
- security review approves sandboxing, retrieval scope, logging, tenant isolation, secret handling, and rollback controls
- implementation artifacts remain traceable to this spec pack and carry their own promotion evidence

## Support Boundary

Support owner: security architecture package steward.

The support owner maintains the spec pack, source refreshes, scenario coverage, and validated evidence. The support owner does not approve tenant production changes, risk acceptance, audit attestations, incident response actions, or penetration testing activity.

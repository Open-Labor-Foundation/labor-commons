# Deployment Package

## Runtime

- Target runtime: specification-based, stateless, orchestration-compatible specialist materialized from this package when routed by the catalog.
- Runtime strategy: `specification-based`; do not retain a generated built implementation unless a separate frequent-use promotion decision is approved.
- Deployment model: On-demand materialization inside the repository-defined agent runtime with tenant-context isolation, source-baseline loading, scenario guardrails, and structured refusal handling.
- Required secrets: None for the baseline spec pack. Tenant retrieval connectors must use the host platform's approved credentials and must not store tenant secrets in this package.
- Required configuration: Allowed data sources list, tenant allowlist, confidence threshold, adjacent specialist routing map, authority matrix, logging destination, source refresh schedule, and evidence retention policy.

## Materialization Inputs

- Task and boundary metadata: agent slug, queue slug, supported tasks, hard refusal triggers, orchestrator return rules, adjacent specialists, required output shapes, and scenario coverage.
- Tenant facts: asset inventory, service criticality, BIA, maximum tolerable downtime, RTO/RPO, dependency map, backup scope, restore evidence, incident-impact timeline, owner map, approval matrix, and legal/regulatory routing.
- Evidence dependencies: CMDB, BIA or BCM platform, backup vault, DRaaS or replication console, restore test repository, SIEM or incident tickets, monitoring, GRC, policy repository, communication plan, risk register, and exception register.
- Domain caveats: recommendations are advisory, evidence-backed, and confidence-tagged; the runtime must refuse execution, attestation, legal conclusions, production change approval, and customer-specific policy or runbook changes.

## Isolation

- Tenant boundary: All retrieval and generated artifacts are scoped by tenant ID and policy envelope; no cross-tenant evidence or output sharing.
- Knowledge boundary: Public authority sources and this spec pack define the baseline; tenant-specific records are retrieved only from approved systems of record at runtime.
- Adaptation policy: Tenant-level terminology, source precedence, system names, and evidence locations may be configured only through approved and reviewed parameters.
- Prohibited adaptation: expanding the lane into incident response execution, penetration testing, malware analysis, forensics, legal/regulatory disclosure, audit attestation, broad architecture ownership, or customer-specific runbook authoring.

## Operations

- Monitoring: Track scenario pass status, refusal rate, orchestrator-return reasons, low-confidence escalations, missing evidence categories, source freshness, and adjacent-lane routing accuracy.
- Logging: Structured logs must include tenant ID, request classification, evidence sources cited, missing facts, confidence, source baseline version, output shape, refusal or escalation reason, and adjacent owner.
- Human review: Required when recovery timing, regulated communications, safety implications, privileged execution, tenant-specific policy changes, final release, or attestation is implicated.
- Source refresh: Review sources at the intervals recorded in the manifest and research summary, and refresh early for material NIST, CISA, CIS, FFIEC, SEC, CIRCIA, tenant policy, or sector-rule changes.

## Rollback Path

- Disable routing to this specialist and route requests to the orchestrator or prior approved package version.
- Preserve the current request, source baseline, tenant evidence references, output, and refusal/escalation logs for review.
- Reopen the package for refinement if validation, source freshness, boundary handling, or evidence traceability is found deficient.
- Do not fall back to a generated trusted runtime unless it has separate promotion evidence and rollback approval.

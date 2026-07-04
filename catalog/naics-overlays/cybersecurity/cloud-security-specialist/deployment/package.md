# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Deployment model: validated catalog spec pack consumed by an orchestrator or future runtime materializer.
- retained implementation: Not claimed. A generated implementation may be retained only after frequent-use promotion evidence, connector security review, regression validation, rollback readiness, and human approval.
- Required runtime controls: boundary classifier, evidence retrieval guard, source freshness gate, confidence thresholding, refusal routing, redaction, tenant isolation, audit logging, and no-action enforcement for execution-only tasks.

## Required Tenant Inputs

- Cloud provider, account, subscription, project, tenant, organization, environment, workload, and service-criticality scope.
- Architecture diagram, data-flow diagram, landing-zone design, tenant model, data classification, and owner-approved security boundary.
- IAM, effective permissions, privileged access, federation, service identity, break-glass, and session evidence.
- Network, public exposure, segmentation, ingress, egress, firewall, WAF, DNS, and routing evidence.
- Storage, database, encryption, key management, secrets, certificate, backup, recovery, retention, and public-access evidence.
- Logging, monitoring, SIEM, SOAR, CSPM, CNAPP, CIEM, vulnerability, alert, incident-summary, and detection coverage evidence.
- GRC, control evidence, risk register, exception register, POA&M, tenant policy, contractual obligation, compliance context, release gate, and approval matrix.

## Isolation

- Tenant data boundary: Hard tenant partitioning for prompts, findings, evidence, logs, source mappings, control decisions, and generated artifacts.
- Knowledge boundary: Public baselines and approved generic templates may be shared; raw tenant evidence, tenant-specific recommendations, exceptions, customer data, resource names, secrets, and sensitive architecture details may not be shared.
- Adaptation boundary: Tenant policy can narrow or supersede public baselines only when the precedence rule, owner, evidence, and assumptions are recorded.
- Retrieval boundary: Runtime must use approved tenant connectors and record source ID, retrieval timestamp, owner, confidence, and data-quality notes.

## Operations

- Monitoring: Track scenario pass rate, refusal count, adjacent-lane routing, low-confidence escalations, source staleness, evidence gaps, hold recommendations, corrective-action escalations, and user attempts to bypass boundaries.
- Logging: Retain decision traces, source references, confidence scores, refusal reasons, and handoff packets with secret redaction and tenant retention rules.
- Alerts: Notify owner when source freshness expires, functionality coverage changes, low-confidence escalation spikes, tenant policy conflicts recur, or validated evidence is invalidated.
- Human review: Required for source-baseline changes, scenario regressions, trusted-build promotion, policy conflicts without precedence, regulated-data caveats, or any change to refusal boundaries.

## Deployment And Rollback

- Initial deployment: Publish the refreshed spec pack under `catalog/cybersecurity/cloud-security-specialist/` and route calls through the orchestrator as a specification-based lane.
- Validation before use: Confirm manifest, scenarios, results, functionality map, research summary, readiness evidence, deployment notes are present and internally consistent.
- Rollback path: Revert orchestrator routing to the previous package version, freeze new materialization, preserve evidence logs, re-run package validation, and require human review before restoring the validated claim.
- Runtime rollback triggers: Failed evaluation threshold, missing required artifact, source freshness lapse that changes claims, unreviewed regression, tenant-isolation incident, evidence-handling failure, or refusal-boundary regression.

## Materializer Requirements

- Load task metadata, boundaries, supported outputs, source baseline, scenario IDs, and functionality coverage before answering.
- Require tenant-supplied or retrieved facts for cloud scope, evidence, source freshness, policy precedence, approval authority, data sensitivity, and change gates.
- Enforce refusal for penetration testing execution, incident response execution, formal attestation, broad architecture ownership, production changes, finding closure, release approval, and risk acceptance.
- Produce evidence-backed recommendations with source IDs, assumptions, confidence, owner, validation, monitoring, rollback, residual-risk, and escalation fields.
- Return to orchestrator when evidence, authority, tenant industry context, source freshness, or policy precedence is missing or conflicting.

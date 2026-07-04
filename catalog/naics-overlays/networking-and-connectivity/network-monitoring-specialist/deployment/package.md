# Deployment Package

## Runtime Model

- Target runtime: On-demand materialization from the spec pack by `commons-crew` or a future runtime materializer
- Runtime strategy: `specification-based`
- retained implementation: Not claimed
- Deployment model: Read-only tenant evidence retrieval, bounded response generation, and structured evidence output; no direct device, CLI, cloud console, or alert-policy execution
- Canonical artifacts:
  - `manifest.yaml`
  - `evaluation/research-summary.json`
  - `evaluation/functionality-map.json`
  - `evaluation/scenarios.md`
  - `evaluation/results.json`
  - `readiness/evidence.json`

## Required Runtime Metadata

- Task intent, requested output shape, affected network path, target services/resources, and failure domains
- Network monitoring boundary and adjacent specialist map
- Tenant topology, systems of record, monitoring stack, alert policy, source precedence, owner map, and authority matrix
- Source freshness state for public standards, provider documentation, tenant policy, and monitoring platform references
- Confidence threshold and orchestrator return route

## Tenant Facts And Retrieval Dependencies

- Network topology, critical paths, routing domains, DNS/DHCP scope, BGP edge, interface inventory, firewall/NAT, load-balancer, WAN, cloud-network, and service dependency context
- Metrics, logs, SNMP, streaming telemetry, flow logs, synthetic probes, dashboards, alert rules, alert history, incident records, and change records
- SLO/SLA objectives, severity policy, pager route, escalation ownership, change windows, rollback authority, and maintenance freezes
- Retention, redaction, privacy, classification, residency, legal hold, and contractual availability constraints

## Isolation And Adaptation

- Tenant boundary: Strict tenant partitioning for evidence, generated artifacts, cache keys, source mappings, alert labels, and runbook templates
- Knowledge boundary: Public baseline sources are shared; tenant-specific evidence, topology, policy, and thresholds are tenant-scoped
- Adaptation policy: Allowed only for tenant terminology, approved thresholds, source mappings, runbook templates, and retrieval connectors
- Cross-tenant sharing: Not allowed for topology, telemetry, identifiers, evidence packets, policy records, or generated tenant outputs

## Operations

- Monitoring:
  - Track invocation outcome, scenario family, source freshness, evidence completeness, confidence level, refusal, and orchestrator return rate
  - Alert maintainers on stale source use, missing required artifacts, rising low-confidence escalations, or boundary violations
- Logging:
  - Record scope verdicts, source IDs, retrieved systems of record, evidence timestamps, assumptions, output shape, and confidence statement
  - Redact or tokenize hostnames, IP addresses, DNS queries, user/device identifiers, packet summaries, and topology details unless required by tenant policy
- Human review:
  - Required for source conflicts, tenant policy conflicts, legal/privacy/retention ambiguity, direct execution requests, and any request that would certify compliance or approve production changes

## Refusal And Return Conditions

- Refuse direct device configuration, CLI execution, credential use, cloud console action, alert-policy deployment, or production change execution
- Refuse endpoint security enforcement, identity architecture, application-only optimization, packet forensics, legal evidence preservation, compliance certification, incident command, and risk acceptance
- Return to orchestrator when topology, telemetry, SLOs, source systems, alert policy, owner map, retention rules, or change authority are insufficient
- Return to orchestrator when public guidance, provider documentation, tenant policy, privacy, retention, or contractual rules conflict without an authorized precedence decision

## Rollback Path

- Runtime rollback: Stop materializing this lane and route requests back to the orchestrator with the spec-pack identifier and missing-capability reason
- Tenant adaptation rollback: Revert source mappings, threshold profiles, and runbook templates to the last approved tenant revision
- Trusted-build rollback: If a generated implementation is ever promoted, remove the retained implementation and return to specification-based materialization when validation, usage, or boundary evidence no longer meets promotion criteria
- Evidence rollback: Preserve audit records; do not delete tenant evidence except through tenant retention and disposal policy

## Promotion Criteria

The package remains `specification-based` unless usage justifies retaining a generated
implementation. Promotion requires at least 20 successful tenant-safe
invocations in 30 days or equivalent sustained usage evidence, no unreviewed
boundary failures, no source freshness failures, no production-execution
overreach, human review of retained outputs, and a documented rollback path to
delete the implementation and return to specification-based materialization.

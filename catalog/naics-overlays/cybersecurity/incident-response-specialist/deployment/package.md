# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Deployment model: validated catalog spec pack for on-demand materialization by `commons-crew` or a future runtime materializer.
- retained implementation: not claimed. A generated implementation may be retained in-repo only after separate frequent-use promotion evidence, implementation review, runtime security review, regression validation, tenant isolation verification, and repository owner approval.
- Primary use: incident response advisory analysis, evidence review, recommendation quality, escalation packaging, and corrective-action support for operational teams that retain execution authority.

## Materialization Requirements

A runtime materializer must load these package facts before creating an executable lane:

- Task metadata, output shapes, scenario expectations, validation thresholds, adjacent-specialist map, refusal triggers, and orchestrator return rules from the manifest.
- Current source freshness metadata for NIST SP 800-61r3, NIST CSF 2.0, CISA playbooks, NIST SP 800-53, CIS Controls, NIST SP 800-86, SEC, FTC, and CISA CIRCIA guidance.
- Tenant incident policy, severity matrix, escalation tree, communications plan, evidence retention rules, legal/regulatory routing, hold/release authority, and owner approval matrix.
- Retrieval dependencies for incident tickets, SIEM, SOAR, EDR, IAM, cloud logs, network telemetry, CMDB, backup/restore systems, evidence stores, communication archives, audit evidence repositories, and corrective-action trackers.
- Response-output constraints requiring source references, assumptions, missing evidence, confidence flags, owner handoffs, and explicit refusal or escalation rationale.

## Safety And Isolation

- Tenant boundary: strict tenant partition keyed by tenant id; no cross-tenant incident evidence, telemetry, indicators, tickets, communication logs, or tenant policy reuse.
- Evidence boundary: incident outputs must reference evidence by tenant-approved record identifiers or summaries. The lane must not alter, collect, move, image, or preserve evidence as a forensic actor.
- Execution boundary: no privileged tenant action, playbook execution, host isolation, account changes, firewall changes, patching, restore operations, or active scanning.
- Authority boundary: no legal advice, final disclosure language, notification timing determination, privilege assertion, audit attestation, public communication ownership, or incident-command role.
- Tenant adaptation: tenant overlays may make severity, evidence, retention, approval, and communication requirements stricter; they must not remove public baseline caveats or refusal boundaries.

## Configuration

Required runtime configuration:

- `incident_response_policy_source`
- `incident_severity_matrix_source`
- `incident_escalation_tree_source`
- `incident_communications_plan_source`
- `incident_evidence_retention_policy_source`
- `legal_regulatory_routing_source`
- `systems_of_record_map`
- `authority_matrix_source`
- `minimum_confidence_threshold`
- `source_refresh_policy`

Required tenant facts:

- Current incident timeline, detection source, indicators, known containment state, recovery state, and affected assets or users.
- Service owner map, business criticality, data classification, dependency map, and backup or continuity status.
- Available SIEM, EDR, IAM, cloud, network, application, email security, ticketing, CMDB, monitoring, evidence, and communication records.
- Applicable tenant policy, sector, contract, regulatory, privacy, insurance, and law-enforcement routing constraints.

## Monitoring And Logging

- Log request id, tenant id, package version, source baseline version, runtime strategy, scenario-family match, output shape, confidence flags, missing evidence, and refusal or escalation triggers.
- Record which tenant systems were referenced and whether retrieval was unavailable, stale, incomplete, contradictory, or blocked.
- Track incident-response boundary hits for scanning, exploitation, forensic tool use, live remediation, incident command, legal/regulatory language, audit attestation, hold/release, and playbook execution requests.
- Monitor scenario pass rate, functionality coverage, low-confidence escalation rate, adjacent-lane routing quality, source refresh age, and tenant overlay drift.

## Rollback

- Disable the tenant rollout flag for the materialized lane.
- Revert to the previous approved spec-pack version or suspend on-demand materialization for this package.
- Remove tenant-specific policy overlays applied during rollout and restore the prior source refresh policy.
- Preserve audit logs, refusal logs, and evidence references for review.
- Notify repository owner, tenant security owner, and orchestrator owner if rollback was caused by boundary drift, source staleness, tenant isolation risk, or incorrect escalation behavior.

## Deployment Notes

- This package is suitable for validated spec-pack deployment because it has current research, explicit source refresh rules, 17 passing scenarios, complete functionality mapping, human verification, and structured readiness evidence.
- Runtime may remain `specification-based` indefinitely if the lane is used occasionally. Materialization can occur just in time from the spec pack.
- Retaining a generated implementation is justified only when usage telemetry shows frequent incident-response lane calls, stable tenant patterns, and enough operational value to justify the maintenance and security review burden.

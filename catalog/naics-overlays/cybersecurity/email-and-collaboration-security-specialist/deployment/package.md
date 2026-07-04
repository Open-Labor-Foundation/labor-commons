# Deployment Package

## Runtime Model

- Target runtime: `specification-based` validated specialist pack consumed by an orchestrator or future runtime materializer.
- Deployment model: catalog spec pack with tenant-scoped retrieval, evidence review, recommendation, refusal, and handoff behavior. No trusted built implementation is claimed in-repo.
- Required secrets: none for baseline package use. Runtime materialization may use tenant-approved read-only connectors for email, collaboration, DNS, identity, SIEM, GRC, and change systems.
- Required configuration:
  - tenant platform scope and mail-flow topology
  - authorized systems of record and evidence retention rules
  - tenant policy precedence and exception handling rules
  - owner, reviewer, approver, incident, privacy, legal, compliance, identity, and platform escalation contacts
  - confidence threshold and evidence freshness policy

## Materialization Requirements

`commons-crew` or any future runtime materializer must load:

- task and boundary metadata from `manifest.yaml`
- authoritative source inventory and refresh rules
- supported tasks, allowed decision types, refusal triggers, and orchestrator-return rules
- tenant-required facts, systems of record, retrieval dependencies, and evidence freshness requirements
- required output shapes for findings, review summaries, evidence checklists, roadmaps, tuning options, remediation notes, and handoffs
- functionality coverage from `evaluation/functionality-map.json`
- research constraints from `evaluation/research-summary.json`
- validation and readiness evidence from `evaluation/results.json` and `readiness/evidence.json`

Materialization must refuse or return to orchestrator when required evidence or authority facts are missing, stale, contradictory, restricted, or outside the lane.

## Tenant Isolation

- Treat every tenant as a separate trust scope. Do not reuse findings, policy exceptions, sender inventories, guest lists, message evidence, or collaboration settings across tenants.
- Recommendations must cite only public sources and tenant-approved evidence for the current tenant.
- Message content, user identifiers, guest identities, customer files, investigation notes, and audit logs require approved access, minimization, redaction, retention, and logging controls.
- Tenant-specific policy adaptation is allowed only as documented recommendation tuning, evidence retrieval mapping, prioritization, and rollout sequencing. Cross-tenant parameter inheritance is disabled.

## Evidence Dependencies

Minimum evidence for material findings:

- current email and collaboration policy exports
- SPF, DKIM, DMARC, DNS, sender inventory, and authentication report evidence
- message headers, message trace, quarantine, user-reporting, threat detection, and case notes when phishing or BEC claims are made
- transport rule, mailbox rule, connector, forwarding, allow-list, block-list, spoof, bypass, and exception evidence
- Teams, SharePoint, OneDrive, meeting, guest, external access, and anonymous link settings for collaboration claims
- admin audit, identity, SIEM, GRC, change, owner, and approval context when findings, remediation, or closure depends on them

If any material evidence is incomplete, stale, inconsistent, or not tied to a system of record, the runtime must produce a missing-evidence request or evidence-gate escalation instead of a confident finding.

## Operations

- Monitoring:
  - track scenario failure rate, refusal rate, low-confidence escalation rate, evidence-gate return rate, and adjacent-lane handoff rate
  - track recommendation acceptance, owner response, validation completion, reopened findings, policy rollback, and false-positive recommendation rate
  - track source refresh due dates and tenant policy conflicts
- Logging:
  - persist recommendation ID, tenant ID, request ID, source records, source references, retrieval timestamps, assumptions, confidence, owner, and handoff status
  - persist refusal, escalation, evidence-gate, and source-policy conflict decisions
  - do not persist raw message content or sensitive collaboration records unless tenant retention rules explicitly permit it
- Support owner:
  - security productization owner for spec-pack quality
  - tenant security owner for evidence and risk context
  - orchestrator for routing and authority conflicts

## Rollback Path

- Disable materialization for this lane and keep the package at `specification-based`.
- Route new email and collaboration security requests to the orchestrator with the last known stable package version.
- Revert to the prior approved spec pack or block validated claims if validation evidence becomes inconsistent.
- Reopen affected scenarios, refresh source research, update readiness evidence, and re-run local validation before restoring validated deployment.

## Refusal and Return Conditions

The deployed package must refuse or return to orchestrator for:

- live phishing, social engineering, credential harvesting, penetration testing, vulnerability exploitation, or attack tooling
- incident response execution, containment, eradication, recovery, breach notification, forensics, or incident command
- formal audit attestation, compliance certification, legal conclusion, privacy determination, or external assurance
- broad network, endpoint, identity, cloud, data-protection, or collaboration architecture outside email and collaboration security review
- production configuration changes, risk acceptance, finding closure, exception approval, or change-gate bypass
- low-confidence evidence, unresolved source-policy conflict, missing tenant authority, or restricted records

## Promotion Criteria

Retain a generated trusted implementation in-repo only after:

- sustained usage shows this lane is called frequently enough to justify retention
- at least two tenant pilots validate evidence retrieval, output fidelity, boundary refusal, and tenant isolation
- connector security, logging, retention, redaction, rollback, and access controls pass review
- strict scenario validation passes against the generated implementation with no unreviewed regressions
- a promotion PR documents runtime owner, maintenance plan, dependency update plan, source refresh process, and rollback path

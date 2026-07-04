# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to a retained implementation only after explicit governance signoff, repeated usage, stable tenant retrieval contracts, production monitoring evidence, and separate built-package validation.
- Execution target: `commons-crew` or a future runtime materializer that can enforce tenant retrieval, source freshness, confidence thresholds, refusal boundaries, and structured output contracts.
- Deployment model: managed SaaS orchestration path and private self-hosted path for tenants that require stricter evidence isolation.

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit ownership of cybersecurity risk statements, risk registers, evidence matrices, residual-risk statements, treatment backlogs, corrective-action escalations, and hold or release recommendations.
- `evaluation/functionality-map.json` covering shared, quality-safety-and-assurance, and cross-industry abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, scenario-family coverage, domain failure modes, and unresolved ambiguity.
- `evaluation/results.json` and `readiness/evidence.json` showing complete ability coverage, human verification, strict validation, validated readiness gates, and no retained-implementation claim.

### Runtime Assumptions

- Tenant provides asset inventory, CMDB/service catalog context, data classification, criticality, dependency map, RTO/RPO, business impact values, likelihood and impact scales, risk appetite, and acceptance thresholds.
- Tenant provides threat model, architecture overview, data flow diagrams, exposure inventory, vulnerability summaries, incident summaries, control evidence, compensating controls, findings logs, and validation records.
- Tenant identifies asset owners, risk owners, release owners, control owners, security governance approvers, incident-response owners, penetration-test owners, security architecture owners, legal/compliance/privacy owners, and escalation contacts.
- Tenant provides source precedence, policy exceptions, hold or release criteria, change-control rules, evidence retention policy, privacy and safety caveats, restricted-data handling controls, and approval matrix.

### Required Retrieval Dependencies

- GRC platform or risk register, CMDB, asset inventory, service catalog, data classification inventory, and policy store.
- Vulnerability management summaries, KEV or exploitability indicators, incident tracker summaries, SIEM/SOAR summaries, detection coverage notes, and near-miss or repeat-defect records.
- Control evidence repository, configuration evidence, exception records, compensating-control evidence, POA&M or corrective-action tracker, release hold records, and validation checkpoints.
- Architecture repository, threat modeling system, change-management system, owner maps, approval logs, and approved evidence store with tenant audit logging.
- Public source freshness records for NIST, CISA, CIS, OWASP, SEC, FTC, and tenant-specific policy overrides.

### Regulated-Lane Caveats

- Public sources constrain the baseline, but tenant industry, jurisdiction, public-company status, contractual duty, safety posture, privacy obligations, and regulated-data type may impose stricter requirements.
- The lane may prepare evidence-backed risk assessment outputs and recommendations, but may not claim audit, legal, regulatory, executive, incident-command, architecture, penetration-test, or production-change authority.
- Risk acceptance, release approval, formal compliance, control-effectiveness attestation, breach notification, and final design decisions remain adjacent owner responsibilities.

### Refusal and Return Conditions

- Required tenant facts, records, systems of record, source context, retrieval permissions, or approval authorities are missing and would change the risk assessment.
- Evidence is incomplete, stale, inaccessible, contradictory, or restricted without approved access, minimization, retention, and audit controls.
- Public guidance, tenant policy, contractual terms, safety/privacy rules, or jurisdiction-specific obligations materially conflict without precedence resolution.
- The request asks for exploit execution, live incident response, digital forensics, legal or regulatory conclusion, audit attestation, architecture design, production implementation, final release approval, or executive risk acceptance.
- The request asks to clear a hold, close a finding, or bypass quality, safety, privacy, change-control, or release boundaries without documented validation evidence and authority.

## Tenant Isolation and Adaptation

- Tenant boundary: separate evidence namespaces, source-of-truth connectors, policy profiles, output logs, and retention controls per tenant.
- Knowledge boundary: public authority sources are shared; tenant facts and outputs remain tenant scoped and cannot be reused for cross-tenant model adaptation.
- Adaptation policy: approved configuration, retrieval, and policy overlays are allowed; tenant-specific risk logic must remain auditable and reversible.

## Monitoring and Logging

- Monitor scenario pass/fail counters, ability coverage drift, confidence distribution, evidence-gap frequency, refusal and orchestrator-return rates, hold/release decisions, restricted-evidence escalations, and adjacent-lane routing quality.
- Log source IDs, source freshness, tenant evidence IDs, assumptions, confidence tags, risk rationale, output artifact IDs, refusal trigger, handoff owner, and reviewer or risk-owner action where supplied.
- Do not log raw restricted evidence unless the tenant has approved collection, minimization, retention, and access controls.

## Rollback and Recovery

- Pause routing to this lane if outputs overstate authority, clear holds without evidence, mishandle restricted tenant data, collapse into generic cybersecurity advice, or fail scenario/ability coverage checks.
- Roll back to the last validated spec pack version and route affected requests to orchestrator with a gap packet.
- Preserve generated reports, evidence matrices, residual-risk statements, corrective-action escalations, refusal decisions, source versions, assumptions, and logs for post-rollback review.
- Re-enable only after restoring source freshness, tenant retrieval contracts, confidence thresholds, data-handling controls, and updated validation evidence.

## retained-implementation Promotion Plan

- Keep runtime `specification-based` unless usage proves this lane is called frequently enough to justify maintained runtime logic.
- Promotion requires repeated tenant demand, stable retrieval contracts, production evidence stability, expanded regression fixtures, monitoring dashboards, security/privacy review, owner signoff, updated issue/PR lineage, and no unresolved validated gaps.
- A promoted built package must remain subordinate to this spec pack unless a later PR explicitly updates the canonical spec.

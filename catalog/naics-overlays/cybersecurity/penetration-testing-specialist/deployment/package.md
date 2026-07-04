# Deployment Package

## Runtime Model

- Target runtime: specification-based catalog package consumed by the orchestrator or a future `commons-crew` materializer.
- Runtime strategy: `specification-based`.
- retained implementation: Not claimed.
- Deployment model: On-demand materialization from the manifest, research summary, functionality map, scenarios, and readiness evidence.
- Required secrets: None for baseline package use. Tenant connectors or credentials must be supplied only through orchestrator-approved retrieval policy.
- Required configuration:
  - tenant scope, authorization, ROE, allowed techniques, exclusions, test windows, and emergency stop contacts
  - asset inventory, criticality, data sensitivity, and ownership records
  - evidence repository, vulnerability platform, finding register, remediation tracker, and GRC or exception system references
  - tenant risk-rating rubric, confidence threshold, report distribution rules, and retention policy
  - source refresh state for NIST, CISA, OWASP, CIS, PCI, FedRAMP, and recordkeeping references

## Materialization Requirements

`commons-crew` or a future runtime materializer must load:

- task and boundary metadata from `manifest.yaml`
- source rationale and source-class mapping from `evaluation/research-summary.json`
- required ability coverage from `evaluation/functionality-map.json`
- output templates for scoped test plans, finding interpretations, remediation plans, evidence packets, record update notes, exception summaries, and handoff notes
- refusal and orchestrator-return rules for execution, incident response, attestation, implementation, architecture ownership, missing authority, missing evidence, and source-policy conflict
- tenant systems-of-record connectors or retrieval stubs for scope, authorization, ROE, inventory, evidence, findings, remediation, exceptions, and retention records

The materializer must not turn this package into an exploitation runner. It
should classify requests, retrieve evidence, prepare advisory artifacts, and
return or refuse when execution or authority shifts outside the lane.

## Isolation

- Tenant boundary: Tenant-scoped context store with no cross-tenant evidence sharing.
- Knowledge boundary: Public source baseline is versioned by review date and decay policy.
- Evidence boundary: Raw exploit evidence, screenshots, logs, and vulnerability exports remain in tenant systems of record unless retrieval policy explicitly allows limited references.
- Adaptation boundary: Tenant-specific rubric, policy, terminology, or report templates can add stricter constraints but must not be represented as public guidance.

## Monitoring And Logging

Record the following for each request:

- request classification and scope verdict
- source IDs consulted and source freshness state
- tenant systems queried and retrieval gaps
- evidence artifact IDs, timestamps, assumptions, and confidence labels
- refused actions, out-of-scope triggers, low-confidence escalations, and orchestrator returns
- proposed record updates, prior status, proposed status, reviewer requirement, and next owner

Monitor:

- boundary refusal rate
- low-confidence escalation rate
- stale source warnings
- missing authorization or ROE frequency
- unsupported record change requests
- cross-tenant retrieval violations
- scenario regression results before release or promotion

## Rollback Path

1. Revert `catalog/cybersecurity/penetration-testing-specialist/` to the previous committed package version.
2. Disable materialization for `catalog::cybersecurity::penetration-testing-specialist`.
3. Invalidate source-cache entries newer than the reverted release.
4. Route all requests to orchestrator or human reviewer until strict validation passes again.
5. Re-run package validation and scenario review before restoring the validated claim.

## Refusal And Return Gates

The runtime must refuse or return when:

- active exploitation, credential collection, phishing, ransomware simulation, destructive testing, persistence, or lateral movement is requested
- incident-response containment, eradication, recovery, live forensics, or incident command is requested
- formal SOC, ISO, PCI, FedRAMP, legal, regulatory, or audit attestation is requested
- code implementation, patch authoring, infrastructure changes, or production configuration changes are requested
- scope, written authorization, ROE, asset ownership, legal permission, or emergency stop contacts are missing or conflicting
- evidence is insufficient for actionable risk rating or remediation closure
- report publication, evidence deletion, retention changes, or risk acceptance would require approval outside the lane
- public guidance, tenant policy, contract, or jurisdictional rule conflicts

## Promotion Criteria

Keep this lane specification-based unless all promotion criteria are met:

- sustained production invocation volume shows frequent-use need
- full scenario suite passes with no unreviewed regressions
- tenant-isolation and unsafe-execution reviews pass
- rollback process is tested against a generated implementation
- maintainer approval documents why retaining a built runtime is justified

Without that evidence, any generated implementation is a temporary materialized
artifact and not the canonical package definition.

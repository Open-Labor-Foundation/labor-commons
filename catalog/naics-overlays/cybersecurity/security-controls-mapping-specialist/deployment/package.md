# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Deployment model: Tenant-scoped specialist spec pack materialized on demand by `commons-crew` or a future runtime materializer.
- retained implementation: Not claimed. A generated implementation may be retained in-repo only after separate frequent-use promotion evidence is approved.
- Required metadata: agent slug, specialty boundary, supported tasks, output shapes, refusal triggers, orchestrator return rules, adjacent specialists, source freshness rules, evaluation threshold, and tenant adaptation policy.

## Materialization Requirements

- Required tenant facts:
  - system, application, service, environment, data scope, business criticality, and control owner map
  - source and target framework names, versions, profiles, baselines, and mapping objective
  - tenant policy overlays, contractual obligations, customer commitments, privacy or payment scope, and approval matrix
  - evidence artifact IDs, evidence owner, collection date, environment, and system association
  - exception, risk acceptance, compensating-control, finding, defect, incident, and corrective-action records
- Required systems of record:
  - asset or service inventory
  - GRC or integrated risk management platform
  - control catalog and framework repository
  - policy and procedure repository
  - audit evidence or document repository
  - ticketing, incident, defect, nonconformance, and corrective-action trackers
  - source freshness register and reviewer decision log
- Required runtime behaviors:
  - check source freshness before confident mapping
  - preserve source and target framework versions in every output
  - label direct, partial, inherited, compensating, duplicate, conflicting, not-applicable, and blocked mappings distinctly
  - record assumptions, confidence, evidence links, and reviewer decisions needed
  - refuse execution, final signoff, and hold-release bypasses outside the lane

## Isolation And Adaptation

- Tenant boundary: All evidence, policies, mapping decisions, and reviewer actions are tenant-scoped.
- Cross-tenant sharing: Prohibited for tenant records, evidence, policies, and mapping results.
- Public baseline: NIST, CISA, CIS, OWASP, ISO/IEC, and PCI SSC sources may be shared as public source references, but tenant-specific overlays must remain isolated.
- Adaptation policy: Framework selection, retrieval binding, tenant policy overlays, and confidence thresholds may be configured with approval and rollback.
- Data handling: Do not ingest secrets, raw credentials, unnecessary regulated records, or evidence outside the scoped tenant repository.

## Operations

- Monitoring:
  - source freshness violations
  - low-confidence escalation rate
  - out-of-scope refusal and adjacent-lane routing rate
  - evidence gap frequency by framework and system
  - mapping conflict and reviewer override frequency
  - scenario pass rate and regression status
- Logging:
  - request scope, framework versions, source versions, evidence IDs, mapping relationship, confidence, assumptions, output shape, refusal decision, and reviewer route
  - no raw cross-tenant evidence in shared logs
  - preserve audit logs for tenant-defined retention periods
- Alerting:
  - source freshness decay
  - unsupported compliance, audit, or certification claim attempts
  - repeated attempts to bypass hold, release, quality, or safety gates
  - spike in conflicting mapping decisions or stale evidence

## Rollback

- Disable tenant-specific overlays or prompt/materialization changes introduced by the current package version.
- Revert routing to the last approved spec-pack revision from package registry.
- Keep existing tenant evidence unchanged; rollback affects package behavior and routing only.
- Re-run the strict evaluation set and source freshness check before re-enabling the refreshed package.
- If rollback is triggered by boundary failure, route all affected requests to human reviewer until the issue is remediated.

## Promotion Criteria

A trusted generated implementation may be retained only when all criteria are met:

- at least 25 qualified control-mapping calls in a rolling 30-day period across two or more tenants
- pass rate remains at or above 0.92 for three consecutive strict validation runs
- no unresolved severity-high boundary, source-freshness, or unsupported-assurance regressions
- materialized implementation provides measurable reuse, latency, cost, or operational benefit over specification-based generation
- promotion is tracked in a separate issue and explicitly approved

## Support

- Support owner: security-controls-mapping-specialist maintainer
- Primary escalation: human reviewer or orchestrator
- Adjacent routes: penetration-testing-specialist, incident-response-specialist, regulatory-compliance-security-specialist, security-architecture-specialist, security-governance-and-policy-specialist, security-documentation-and-audit-evidence-specialist

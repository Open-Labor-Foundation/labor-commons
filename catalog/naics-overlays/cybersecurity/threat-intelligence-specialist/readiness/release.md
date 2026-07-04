# Release Readiness

## Agent

- Name: Threat intelligence specialist
- Queue slug: catalog::cybersecurity::threat-intelligence-specialist
- Domain: Cybersecurity
- Release version: v1.1.0- Target delivery level: validated

## Readiness Gates

- [x] Specialty boundary is explicit
  - [x] owns CTI planning, source hygiene, indicator interpretation, ATT&CK mapping, threat assessment, prioritization, and handoff packaging
  - [x] refuses penetration testing execution, incident response execution, formal audit attestation, broad architecture ownership, final approval, legal, and disclosure authority
- [x] Authority sources are current
  - [x] source baseline includes NIST, CISA, MITRE ATT&CK, FIRST, OASIS STIX/TAXII, CIS, OWASP, SEC, and FTC references
  - [x] every source records publisher, authority rationale, refresh interval, decay policy, and review date
  - [x] latest source review dates recorded as 2026-04-14
- [x] Research contract is satisfied
  - [x] research-summary.json records research contract version 2026-04-08
  - [x] workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity are documented
  - [x] no blocking unresolved ambiguity remains for validated release
- [x] Functional ability contract is satisfied
  - [x] all shared abilities are declared
  - [x] all planning-scheduling-and-allocation abilities are declared
  - [x] cross-industry artifact-awareness ability is declared
  - [x] every ability maps to one or more passing scenarios
  - [x] every scenario in evaluation/results.json is represented in scenario coverage
- [x] Evaluation thresholds are met
  - [x] 20 scenarios defined
  - [x] minimum pass rate 0.92, achieved 1.00
  - [x] accuracy_acceptance_met is true
  - [x] no unreviewed regressions
- [x] Human verification is recorded
- [x] Deployment package is documented
- [x] Positioning and readiness notes are documented

## Release Decision

- Decision: Approve as a validated spec pack for threat intelligence planning and advisory materialization.
- Reviewer: commons-keeper
- Date: 2026-04-14

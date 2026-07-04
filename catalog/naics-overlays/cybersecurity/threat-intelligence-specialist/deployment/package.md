# Deployment Package

## Runtime

- Runtime strategy: `specification-based`.
- Target runtime: Orchestrator-consumed spec pack for on-demand materialization.
- Deployment model: Managed package bundle with manifest, research summary, functionality map, scenarios, results, readiness evidence, deployment notes, and marketing readiness.
- retained implementation: Not claimed. A generated implementation may be retained only after separate frequent-use promotion evidence and human security approval.
- Required secrets: None in repository package. Runtime deployment may require tenant-approved secrets for private CTI feeds, TIP access, SIEM, SOAR, EDR/XDR, vulnerability management, ticketing, and asset systems.

## Required Configuration

- validation profile: `strict`
- minimum scenario count: 12
- configured scenario count: 20
- minimum pass rate: 0.92
- minimum human verification count: 1
- allowed adaptation types: configuration, retrieval, approved tuning
- hard refusal rules: exploit execution, penetration testing execution, live incident response execution, production commands, formal audit attestation, legal or regulatory notice, final budget or staffing approval, and broad architecture ownership

## Materialization Inputs

Future materializers such as `commons-crew` need:

- task metadata for CTI planning, indicator interpretation, ATT&CK mapping, threat assessment, prioritization, allocation recommendation, source hygiene, mitigation guardrails, refusal, and handoff outputs
- tenant identity, authorized environment boundary, requester authority, allowed decision type, recipient list, and sharing constraints
- source registry, source allowlist, source reliability rubric, confidence thresholds, TLP handling rules, and source refresh cadence
- intelligence requirements, PIRs, CTI work queue, analyst capacity, approved priority policy, and escalation owner map
- retrieval summaries or connectors for TIP, STIX/TAXII collections, SIEM, SOAR, EDR/XDR, vulnerability management, asset inventory, CMDB, advisory repositories, ticketing, policy, privacy, legal, compliance, and audit systems
- asset ownership, criticality, exposure, geography, business impact, data classification, vulnerability status, and downstream defensive owner context

## Isolation

- Tenant boundary: One tenant per deployment context. Do not mix or infer from another tenant's telemetry, CTI, source lists, or asset records.
- Knowledge boundary: Public authority sources plus tenant-provided or tenant-retrieved records only. No hardcoded privileged tenant data.
- Sharing boundary: Preserve TLP, source license, contractual, privacy, legal, and tenant distribution restrictions in every output.
- Adaptation policy: Tenant-specific adaptation is limited to retrieval, policy overlays, priority rules, source allowlists, and approved tuning. Tenant policy cannot override hard refusals.

## Operations

- Monitoring:
  - Monitor pass rate drift against strict thresholds.
  - Monitor source review freshness and decay-policy alerts.
  - Monitor unsupported request rate, low-confidence escalation rate, source-conflict rate, and adjacent-routing rate.
  - Monitor whether usage frequency meets trusted-build promotion thresholds.
- Logging:
  - Capture request scope, source set, source freshness, source reliability, indicator timestamps, TLP marking, tenant overlays, evidence references, confidence, assumptions, capacity constraints, refusal triggers, and next-owner routing.
  - Record when a recommendation is advisory only and requires budget, staffing, operational, disclosure, audit, legal, privacy, incident-command, or platform-owner approval.
  - Record scenario IDs used in validation reruns.
- Human review:
  - Required when confidence falls below threshold, source or policy conflicts materially affect the output, TLP or disclosure restrictions are unclear, or a request could become legal, audit, privacy, incident command, architecture, or execution authority.

## Rollback Path

- Revert to the last validated `specification-based` manifest, evaluation results, research summary, functionality map, readiness evidence, deployment notes, and marketing readiness files.
- Disable tenant retrieval or feed integrations if source freshness, sharing restrictions, or source-conflict handling regress.
- Restore the prior source baseline only if it still meets refresh and decay requirements.
- Do not retain or promote generated implementation artifacts during rollback unless a separate trusted-build promotion record exists.

## Promotion Criteria

A trusted built implementation can be retained in-repo only when all conditions are met:

- at least two consecutive release cycles show frequent threat-intelligence lane usage and stable request patterns
- tenant retrieval contracts, source freshness checks, TLP handling, and hard refusal guardrails are implemented and tested
- the scenario suite remains at or above strict acceptance with no unreviewed regressions
- a human security reviewer approves retention of generated implementation artifacts
- rollback and deprecation path for the built runtime is documented

## Support Owner

- Security platform catalog team with escalation to threat intelligence SME, legal/privacy owner, compliance owner, or incident response owner when package policy conflicts arise.

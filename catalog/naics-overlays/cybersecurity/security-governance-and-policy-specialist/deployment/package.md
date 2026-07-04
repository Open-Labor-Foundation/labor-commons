# Deployment Package

## Runtime

- Target runtime: Orchestrator-facing spec materialization for cybersecurity governance and policy support.
- Runtime strategy: `specification-based`.
- Built runtime posture: no trusted built implementation is claimed or retained by this refresh.
- Deployment model: Static spec pack consumed by `commons-crew` or a future materializer that can enforce boundaries, retrieve tenant records, cite authority sources, and emit traceable governance artifacts.
- Required secrets: none for the baseline spec package.
- Required configuration: tenant namespace, allowed source list, confidence threshold, adjacent specialist routes, legal/compliance route, risk owner route, control owner route, and retrieval bindings for tenant systems of record.

## Materialization Inputs

Any runtime materializer needs:

- Task and boundary metadata from `manifest.yaml`, including owned workflows, explicit exclusions, adjacent specialists, refusal triggers, and queue states.
- Authority source metadata, including publisher, authority rationale, source class, refresh interval, decay policy, and current review date.
- Tenant-supplied or retrieved facts: policy text, framework versions, control ownership, risk register entries, compliance obligations, exception records, evidence freshness, and organization-specific systems of record.
- Domain caveats: legal/regulatory variation, customer-information and privacy handling, public-company disclosure routing, critical-infrastructure or OT safety routing, and no residual-risk approval authority.
- Output contracts: intake disposition note, prerequisite checklist, policy recommendation, mapping/evidence checklist, priority plan, exception summary, routing summary, and refusal note.

## Tenant Isolation

- Tenant data must remain namespace-scoped and must not be reused across tenants.
- Public authority sources may be shared; tenant records, policy text, risk registers, exceptions, evidence, and owner maps must not be shared.
- Tenant-specific adaptation can adjust terminology, formatting, taxonomy, and retrieved context, but it cannot change the core refusal boundaries without maintainer approval.
- Privacy-sensitive, confidential, privileged, classified, export-controlled, or restricted data requires tenant-approved handling and minimization.

## Systems Of Record

The runtime must identify or retrieve from these systems before substantive work:

- Policy and standards repository.
- GRC platform, control library, control owner directory, and assessment records.
- Risk register, exception tracker, residual-risk acceptance records, and approval matrix.
- Audit evidence repository or document management system.
- Asset, identity, data classification, vendor, vulnerability, incident, change, and remediation systems when they support policy evidence.
- Legal, compliance, board, or qualified-individual records when tenant obligations require them.

## Rollback

- Disable routing to this specialist in the orchestrator.
- Route all queued security-governance-and-policy requests to orchestrator plus human reviewer.
- Preserve package version, request logs, scenario result references, cited sources, and tenant evidence pointers for auditability.
- Re-enable only after the manifest, functionality map, research summary, evaluation results, and readiness evidence are consistent and re-verified.

## Monitoring And Logging

Log at request level:

- Queue state transition, accepted/refused/transferred scope, confidence, source baseline version, and source freshness.
- Referenced tenant records, evidence IDs, owner routes, assumptions, unresolved ambiguity, and escalation reason.
- Boundary triggers, adjacent specialist route, legal/compliance route, risk owner route, and human reviewer route.
- Output shape produced and whether required evidence was missing, stale, conflicting, or unsupported.

Monitor:

- Out-of-scope rate by trigger.
- Low-confidence and missing-record rates.
- Source decay warnings.
- Manual correction rate.
- Tenant-specific override frequency.
- Repeated-call frequency for promotion assessment.

## Deployment Checks

- JSON artifacts parse successfully.
- `readiness/evidence.json` records human verification, functional audit coverage, deployment readiness.
- `evaluation/results.json` records at least 12 scenarios, pass rate at or above 0.92, `accuracy_acceptance_met=true`, and `functionality_coverage_met=true`.
- `evaluation/functionality-map.json` maps every required ability and every result scenario.
- `evaluation/research-summary.json` has no blocking unresolved ambiguity.
- Runtime remains `specification-based` unless promotion criteria are met.

## Promotion Criteria

Retain a generated implementation in the repository only when:

- The lane is called frequently enough in production or pilot telemetry to justify long-term built-runtime storage.
- At least two tenant deployments show stable output quality, low manual correction rate, and no boundary regressions.
- Maintainers review telemetry, source freshness, tenant-isolation behavior, and scenario coverage.
- A separate promotion record explicitly marks the built implementation trusted and ties it back to this spec pack.

## Support Ownership

- Package owner: repository maintainer.
- Operational escalation: orchestrator plus security governance owner.
- Legal or regulatory escalation: tenant legal/compliance owner.
- Residual-risk escalation: tenant risk owner.

# Deployment Package

## Runtime

- Target runtime: `specification-based` catalog specialist package materialized by an orchestrator or future `commons-crew` runtime only after loading this pack's manifest, research summary, functionality map, evaluation results, readiness evidence, and tenant context.
- Deployment model: validated spec pack at `v1.1.0`; no trusted built implementation is retained in-repo by default.
- Required secrets: None in the baseline package. Runtime connectors for CloudWatch, Azure Monitor, Cloud Monitoring, Kubernetes, Prometheus, OpenTelemetry, incident management, or evidence repositories must be tenant-scoped and injected through the tenant platform secret manager.
- Required configuration: Tenant provider set, topology source, telemetry systems, alert/SLO systems, incident and runbook systems, retention/privacy policy, owner and approval matrix, source precedence, confidence threshold, and tenant isolation flags.

## Materialization Requirements

`commons-crew` or any future runtime materializer must load:

- Required task and boundary metadata from `manifest.yaml`.
- Source authority and refresh metadata from `manifest.yaml` and `evaluation/research-summary.json`.
- Ability and scenario coverage from `evaluation/functionality-map.json` and `evaluation/results.json`.
- Runtime refusal and orchestrator-return rules for production code, provider implementation, legal/compliance, pricing, contracts, security execution, incident command, and unauthorized record changes.
- Tenant-required facts for service topology, critical paths, telemetry systems, SLOs, alert routes, incident history, retention, privacy, authority, ownership, and evidence repositories.
- Output requirements for record update notes, evidence packets, audit-trail or exception summaries, runbooks, handoff summaries, and rollback/acceptance criteria.

The runtime must keep every recommendation evidence-backed. It should state source basis, source review date, tenant records used, assumptions, confidence, missing facts, owner questions, and open blockers.

## Isolation

- Tenant boundary: Tenant telemetry, incidents, topology, dashboards, alert policies, retention records, credentials, and evidence links remain tenant-scoped and must not be merged into the baseline package.
- Knowledge boundary: Public source baseline is shared; tenant adaptations are separate overlays with source precedence, retention authority, and approver metadata.
- Adaptation policy: Allowed adaptations include tenant-specific retrieval, configuration, approved tuning, and evidence binding. Disallowed adaptations include weakening refusal rules, bypassing approval requirements, or treating record maintenance as incident, legal, risk, financial, or production authority.

## Operations

- Monitoring: Track scenario family, output shape, boundary outcome, source freshness, low-confidence escalations, unauthorized-change refusals, conflicting-record escalations, adjacent-lane routes, and tenant adaptation count.
- Logging: Log recommendation ID, scenario ID, source IDs, tenant systems used, missing evidence, confidence statement, refusal or routing decision, and reviewer or approver requirement.
- Retention: Baseline package evidence follows repository retention. Tenant execution logs follow tenant retention and legal-hold policy; the runtime must escalate when that policy is missing or conflicting.
- Rollback path: Disable tenant overlays and materialized runtime, revert to the `v1.1.0` spec pack, route ambiguous requests to orchestrator review, refresh sources, and rerun validation before re-enabling generated behavior.
- Support owner: Cloud Platform and Infrastructure catalog owner, with escalation to the orchestrator and human reviewer for boundary, source, or tenant-authority conflicts.

## Promotion Policy

The package must remain `specification-based` unless promotion evidence supports a retained implementation:

- Recurring demand shows the observability lane is called frequently enough to justify stored implementation.
- Built runtime passes all 18 scenarios and regression checks without widening the specialty boundary.
- Human review confirms source refresh, tenant isolation, refusal behavior, logging, rollback, and retention handling.
- Rollback to `specification-based` remains available if runtime behavior drifts or sources decay.

## Rollback Criteria

Rollback or disable materialized behavior when:

- Source refresh is overdue for a provider or standard that materially affects output.
- Tenant isolation, redaction, retention, or evidence-access controls are not enforceable.
- Scenario pass rate falls below 0.90, functionality coverage is incomplete, or human verification is missing.
- The runtime starts implementing production resources, writing application code, closing incidents, approving retention/legal/compliance decisions, or negotiating pricing/contracts.

## Market Deployment Notes

- Target buyer: Enterprise platform engineering, SRE, and managed cloud operations teams.
- User profile: Observability platform owners, platform engineers, SREs, cloud operations managers, and architecture reviewers.
- Packaging model: validated spec pack with optional governed materialization; provider-specific dashboard or collector overlays can be separate add-ons.
- Go-to-market assumptions: Baseline proof is scenario and source backed; tenant-specific benchmark data for alert reduction, ingestion savings, and MTTR improvement must be collected after adoption.

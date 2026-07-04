# Deployment Package

## Runtime

- Target runtime: `specification-based` package materialized by `commons-crew` or a future compatible runtime when the orchestrator receives security awareness and training work.
- Deployment model: Repository-retained spec pack with manifest, research summary, functionality map, scenarios, results, readiness evidence, deployment notes, and marketing readiness.
- retained implementation: Not claimed. Generated implementation artifacts should not be retained in-repo unless frequent production usage meets the promotion criteria in the manifest.
- Required secrets: None for baseline specification. Runtime integrations may need tenant-scoped read access to LMS, phishing simulation, HRIS, identity, GRC, incident, reporting, and evidence systems.
- Required configuration: Tenant namespace, source-precedence rules, role matrix, awareness policy cadence, metric definitions, escalation routes, confidence threshold, localization/accessibility constraints, and publication/signoff owners.

## Materialization Requirements

- Load task and boundary metadata from `manifest.yaml`, including supported tasks, output shapes, authority sources, refusal triggers, adjacent specialists, and queue states.
- Retrieve tenant-supplied facts before substantive output: audience, reporting period, learner denominator, LMS export, simulation export, reporting-channel records, role matrix, policy cadence, owner map, and source freshness.
- Preserve evidence dependencies: each recommendation or metric must name source system, export date, owner, denominator, assumptions, caveats, and confidence level.
- Enforce refusal and orchestrator return when records are incomplete, stale, conflicting, privacy-sensitive, publication-dependent, or outside the awareness-training lane.

## Isolation

- Tenant boundary: Learner records, phishing reports, incident lessons, HRIS data, role maps, and training analytics are tenant scoped and must not be mixed across tenants.
- Knowledge boundary: Public source baselines are read-only reference. Tenant-specific policy, risk, workforce, regulated-data, language, and accessibility adaptations are isolated overrides.
- Privacy boundary: Named learner, reporter, incident, HR, and coaching data requires tenant-approved access, minimization, and publication handling.
- Adaptation policy: Configuration, retrieval, and approved tuning only; no uncontrolled model-weight changes or cross-tenant reuse of tenant facts.

## Operations

- Monitoring: Track scenario pass rate, refusal frequency, low-confidence escalation rate, source refresh age, metric-definition blockers, source-conflict rate, and manual correction rate.
- Logging: Log accepted scope, source set, tenant records used, metric definitions, evidence references, assumptions, caveats, confidence, refusal triggers, and escalation routing.
- Review cadence: Recheck public source baseline at least every 180 days, sooner for NIST, CISA, CIS, FTC, or OWASP updates that alter workflow, evidence, or refusal rules.
- Human verification: Required for validated claim, source baseline refresh, material metric publication rules, and any trusted-build promotion decision.
- Rollback path: Disable the specialist route, preserve submitted evidence and escalation records, and return awareness and training requests to orchestrator human fallback until the package is corrected.
- Support owner: Security awareness and training specialist maintainer listed in manifest.

## Promotion Criteria

- Retain a generated implementation only after repeated production calls show this lane is frequently used enough to justify a trusted built artifact.
- Require at least two tenant deployments with stable output quality, no boundary regressions, and no unresolved source-refresh failures.
- Require operational telemetry showing high repeated-call frequency, low manual correction rate, stable refusal behavior, and evidence-lineage completeness.
- Require maintainer approval documenting why long-term generated implementation storage is justified over on-demand materialization.

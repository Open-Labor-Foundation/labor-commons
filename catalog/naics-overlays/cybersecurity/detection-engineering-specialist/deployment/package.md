# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Canonical definition: `manifest.yaml`, `evaluation/research-summary.json`, `evaluation/functionality-map.json`, `evaluation/scenarios.md`, `evaluation/results.json`, readiness evidence, deployment notes, and commercialization notes.
- No retained implementation is claimed by this package.
- Future materialization must load the spec pack as the source of truth and must log request scope, evidence references, assumptions, confidence, hold or release posture, refusal triggers, and next-owner routing.

## Required Tenant Inputs

- Tenant identity, authorized requester role, environment boundary, and allowed decision type.
- Detection hypothesis, candidate alert or rule name, intended detection outcome, and expected output shape.
- SIEM, SOAR, EDR, NDR, identity, application, endpoint, cloud, ticketing, rule repository, and evidence-store records or retrieval summaries.
- Telemetry inventory, parser status, source freshness, retention window, event schema, source trust, known blind spots, and routing path.
- ATT&CK mapping basis, threat intelligence context, control objective, business impact, asset criticality, false-positive tolerance, and analyst capacity.
- Test corpus, validation evidence, exception records, missed-alert or false-positive history, release gate, rollback owner, approval owner, and corrective-action owner.
- Privacy, legal hold, data residency, retention, contractual, jurisdictional, and cross-tenant isolation constraints.

## Isolation

- Tenant-local telemetry, rule metadata, enrichment dictionaries, and evidence records only.
- Cross-tenant telemetry mixing, shared sensitive enrichment, and interpretation of another tenant's artifacts are prohibited.
- Public sources and generic examples may be reused, but tenant evidence must be separated, redacted where appropriate, and attributed to the correct tenant.
- Tenant policy may add stricter retention, evidence, privacy, and approval requirements but may not weaken hard refusal rules.

## Deployment Controls

- Deploy as a catalog spec pack through the repository-controlled agent catalog sync.
- Require strict validation profile, source freshness metadata, and structured readiness evidence before validated release.
- Materialized runtimes must enforce refusal and orchestrator-return rules before producing detection recommendations.
- Rule syntax generation, SIEM queries, SOAR references, and platform-specific recommendations require tenant platform syntax and owner approval at runtime.
- Release, hold override, rollback, direct execution, and production platform changes remain with authorized tenant owners.

## Rollback

- Roll back by reverting the package directory to the last approved spec-pack release and disabling any newly materialized runtime generated from the reverted version.
- Preserve prior manifest, research summary, functionality map, scenarios, results, and readiness evidence for audit comparison.
- If a source baseline is found stale or unsafe, mark the package as blocked for new materialization until the source baseline and scenario coverage are refreshed.
- If a materialized runtime violates a boundary rule, disable that runtime and continue serving the specification-based package for human review.

## Monitoring And Logging

- Track accepted requests, intake-blocked requests, quality holds, release-ready recommendations, corrective-action escalations, low-confidence escalations, adjacent-lane routes, and refusals.
- Log source baseline version, source review date, detection hypothesis, systems of record, evidence artifact IDs, confidence score, assumptions, and tenant policy overlays.
- Record quality metrics for false-positive tuning, false-negative or missed-alert handling, telemetry gaps, and release gate outcomes.
- Monitor for unsafe patterns: confident claims without telemetry, cross-tenant evidence, bypassed quality holds, direct response execution, audit attestation, or legal language.

## Promotion Criteria

Retain a generated implementation in-repo only when:

- at least two consecutive release cycles show frequent use and stable detection-engineering request patterns;
- tenant retrieval contracts, source-system dependencies, and safety guardrails are implemented and tested;
- strict scenario coverage remains complete with no unreviewed regressions;
- a human security reviewer approves retaining generated implementation artifacts;
- rollback and deprecation steps for the built runtime are documented.

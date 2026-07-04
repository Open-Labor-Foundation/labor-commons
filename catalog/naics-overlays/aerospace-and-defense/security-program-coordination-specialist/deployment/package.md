# Deployment Package

## Deployment Mode

- Package path: `catalog/naics-overlays/aerospace-and-defense/security-program-coordination-specialist/`
- Delivery status: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not included
- Validation profile: `standard`

This package is ready as a catalog-ready spec pack and must remain in `specification-based` mode until a separate retained implementation is explicitly promoted.

## Required Runtime Inputs

- Request metadata: issue slug, industry overlay, workflow phase, resolved industry profile, delivery target, runtime strategy, and tenant context.
- Boundary metadata: allowed decisions, refusal triggers, adjacent specialists, output shapes, and orchestrator return rules from the manifest.
- Tenant facts: CCB charter, MRB authority, engineering approval owners, quality-release owners, supplier-approval workflow, incident-response precedence, export/classified handling rules, and service-level commitments.
- Retrieval hooks: ERP, MES, WMS, QMS, supplier management, planning, logistics, traceability, and security incident systems.
- Records: incident records, security findings, security hold or risk state, production order and lot/serial genealogy, supplier records, NCR/MRB/quality records, release status, and destination owner acknowledgements.

## Deployment Gates

- Confirm manifest, scenarios, functionality map, research summary, results, readiness evidence, release notes, deployment notes, and commercialization notes form a complete package.
- Confirm `runtime_strategy` is `specification-based` and `trusted_built_runtime_committed` is false.
- Require evidence of human verification and complete functional coverage before marking the package validated.
- Ensure source decay and refresh intervals are recorded and checked before relying on stale guidance.
- Block autonomous operation when tenant authority context is missing, required artifacts are incomplete, or ownership is ambiguous.

## Safe Operating Rules

- Allow coordination output shapes: handoff summary, dependency tracker, handoff status summary, blocked-dependency escalation note, routing confirmation note, closure confirmation, traceability-conflict summary, quality-or-release-boundary escalation, and supplier-security escalation notes.
- Refuse or return when requests ask for engineering/security-release approvals, supplier substitutions, legal/policy overrides, financial decisions, direct execution, or direct hold lifting.
- Preserve traceability, configuration-control, supplier-control, hold/release, and quality controls; never infer compliance from incomplete records.
- Mark closure only when destination owner acceptance proof and artifact completeness are explicit.

## Rollback

- Remove routing inclusion for this slug from catalog index or disable mapping.
- Set delivery status below `validated` if source freshness, verification, scenario coverage, or evidence files become inconsistent.
- Route all in-flight requests to orchestrator with the latest blocker state, prior owner, destination owner candidate, and missing artifact list.
- Preserve tenant security and production records; this package is coordination-only and should not overwrite production or quality decisions.

## Monitoring

- Track refusals and escalations for legal/security boundary, supplier substitution pressure, execution-pressure requests, duplicate ownership, and unresolved policy conflict.
- Track low-confidence returns from missing CCB charters, MRB authorities, retrieval maps, and source-policy conflicts.
- Track closure confirmations with destination-owner proof and blocker completeness.
- Review source freshness every 120 days for DFARS/NIST/FDA/FAA-like inputs and 180 days for IAQG/SCMH/NASA sources.

## Promotion To retained implementation


# Deployment Package

## Package

- Package path: `catalog/naics-overlays/government-and-public-sector/government-reporting-specialist/`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Issue: 

## Deployment Notes

This overlay is safe to deploy as a spec pack for catalog discovery, routing,
evaluation, and tenant planning. It should not be treated as a trusted built
runtime. Runtime execution must continue to use `specification-based` behavior until a
separate build is explicitly promoted.

The pack constrains government reporting work to metric definition, official
record validation, source tie-outs, reporting package assembly, caveats,
submission logic, and escalation. It does not grant authority to decide
eligibility, rights, benefits, permits, enforcement, procurement awards,
records release, legal interpretation, audit opinions, or financial approvals.

## Materialization Requirements For `commons-crew`

`commons-crew` would need the following before safely materializing this lane:

- task metadata identifying request type, reporting audience, output shape, cadence, jurisdiction, program, statute, agency policy, and service population
- boundary metadata for legal, adjudication, enforcement, procurement, public-records, audit, privacy, and financial-approval owners
- tenant metric dictionary with numerator, denominator, cutoff, population, baseline, source precedence, caveat, and signoff rules
- system retrieval hooks for case management, records management, procurement, grant, permit, financial, public-service administration, transparency, and document systems
- official record identifiers, retrieval logs, retention context, correspondence, notices, public-service decisions, and audit trail references
- regulated-lane caveats covering public records, privacy, procurement, federal award, eligibility, due-process, auditability, and disclosure controls
- orchestration rules that return when statutory interpretation, rights, benefits, public obligations, or formal authority determines the answer

## Required Tenant Assumptions

Tenant configuration must supply or retrieve:

- jurisdiction, program authority, statute, agency manual, service population, and current program policy
- official systems of record, record locations, record owner, retrieval hooks, and retention policy
- public-records, privacy, transparency, and disclosure approval rules
- metric-owner, publication-owner, legal-owner, public-records-owner, procurement-owner, audit-owner, and program adjudication owner maps
- reporting cadence, submission checklist, source refresh thresholds, caveat policy, and confidence thresholds
- tenant-specific metric adaptations with public baseline comparison and owner approval

## Refusal And Orchestrator Return Conditions

The lane must refuse or return when:

- required tenant facts, official records, retrieval hooks, or authoritative source context are missing and would change the outcome
- source quality, signoff, metric definitions, records lineage, or disclosure controls are unresolved
- rights, benefits, eligibility, appeals, sanctions, enforcement, or public obligations depend on legal interpretation
- the request asks for public-records release, privacy balancing, procurement award, vendor sanction, eligibility decision, enforcement action, audit opinion, attestation, or financial approval
- statutes, agency manuals, public sources, tenant policies, or source systems conflict materially

## Rollback

Rollback is catalog-level. Remove or disable this package path from catalog
build inputs and revert the commit that introduced the spec pack. No runtime
data migration is required because no retained implementation, connector, model
tuning, or tenant runtime configuration is committed here.

If a future retained implementation is promoted, rollback must also disable
tenant entitlements, retrieval connectors, authority-owner routes, and
automation policies for that runtime while preserving audit logs and generated
reporting artifacts.

## Monitoring

Monitor package use for:

- requests attempting to decide eligibility, rights, benefits, adjudication, enforcement, procurement awards, or records release
- reports produced without official record lineage or audit trail references
- metric dictionary conflicts, tenant adaptation drift, or silent public baseline replacement
- recurring low-confidence escalations caused by missing retrieval hooks or owner maps
- demand volume and repeatability sufficient to justify retained-implementation promotion

## retained-implementation Promotion Path

Promote only if usage proves common and stable enough to justify runtime
investment. Promotion requires a separate retained implementation with tested
retrieval adapters, authority-owner routing, scenario fixtures, tenant
configuration schema, audit logging, rollback controls, and governance approval.

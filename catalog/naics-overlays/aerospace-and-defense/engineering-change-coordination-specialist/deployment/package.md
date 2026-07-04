# Deployment Package

## Deployment Mode

- Package path: `catalog/naics-overlays/aerospace-and-defense/engineering-change-coordination-specialist/`
- Delivery status: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not included
- Validation profile: `standard`

This package can be consumed by `commons-crew` or another orchestrator as a spec-first industry overlay. It is ready for market-facing catalog inclusion, but it must not be represented as a retained implementation until a separate runtime package, tests, permissions, retrieval contracts, and promotion decision are committed.

## Required Runtime Inputs

- Request metadata: issue slug, industry overlay, workflow phase, resolved industry profile, delivery target, runtime strategy, and tenant context.
- Boundary metadata: allowed decisions, refusal triggers, adjacent specialists, output shapes, and orchestrator return rules from the manifest.
- Tenant facts: CCB charter, MRB authority matrix, engineering approval owners, quality release authority, supplier approval rules, customer flowdowns, export or classified handling rules, plant and program owner map, and service-level commitments.
- Retrieval hooks: PLM, PDM, configuration management, ERP, MES, WMS, QMS, supplier management, planning, logistics, traceability, and customer or government data systems.
- Records: ECO, ECR, ECP, NOC, CCB action, MRB record, baseline, drawing revision, specification revision, effectivity table, production order, traveler, lot or serial genealogy, quality hold, NCR, FAI delta, supplier record, certificate of conformity, release record, and closure acceptance proof.

## Deployment Gates

- Load the manifest, scenarios, functionality map, research summary, results, readiness evidence, release readiness, deployment notes, and commercialization notes as a single package.
- Confirm `runtime_strategy` is `specification-based` and `trusted_built_runtime_committed` is false.
- Require human verification and full functionality coverage before exposing the package as validated.
- Require orchestrator-controlled retrieval for tenant-specific owner maps, authority matrices, customer flowdowns, and systems of record.
- Block autonomous operation when source freshness is expired, tenant facts are missing, or authority boundaries are ambiguous.

## Safe Operating Rules

- Allow coordination outputs: handoff summary, dependency tracker, handoff status summary, blocked-dependency escalation note, routing confirmation note, configuration-control routing package, and closure confirmation.
- Refuse or return when the user asks for engineering approval, CCB decisioning, MRB disposition, final quality release, supplier approval, supplier substitution approval, airworthiness signoff, export-control determination, classified-program decisioning, legal interpretation, financial approval, or direct execution.
- Preserve traceability, configuration-control, supplier-control, hold, release, and quality controls even when schedule pressure is high.
- Mark closure only when the destination owner has accepted the required artifact set and residual blocker state is explicit.

## Rollback

- Remove the package from the catalog index or disable routing to this slug.
- Set readiness status below `validated` if validation artifacts, source freshness, human verification, deployment notes, or commercialization evidence become inconsistent.
- Route all in-flight requests to the orchestrator with the last known blocker state, prior owner, next owner candidate, and missing artifact list.
- Preserve existing tenant records and do not attempt to undo engineering, quality, supplier, production, inventory, or logistics system actions from this specification-based package.

## Monitoring

- Track rejected requests by refusal trigger to detect pressure to widen into engineering, quality, supplier, release, legal, export, safety, or execution ownership.
- Track low-confidence returns caused by missing CCB charters, MRB authority, customer flowdowns, owner maps, and retrieval hooks.
- Track closure confirmations for destination-owner acceptance proof and artifact completeness.
- Review source freshness every 120 days for FAA sources and every 180 days for IAQG and NASA sources.

## Promotion To retained implementation

Promotion requires a separate committed package with runtime prompts or code, automated tests, permissions, connector contracts, observability, rollback behavior, and tenant-specific retrieval controls. Usage should first prove that this lane is common enough, owner maps are stable enough, and no unresolved safety, quality, supplier, regulatory, or export-control boundary gaps remain.

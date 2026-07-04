# Deployment Package

## Runtime

- Target runtime: `commons-crew` materialization from a validated spec pack.
- Runtime strategy: `specification-based`.
- retained implementation: not included in this change.
- Deployment model: catalog overlay package under `catalog/naics-overlays/funeral-cemetery-and-end-of-life-services/cemetery-administration-specialist/`.
- Required secrets: none for the spec pack itself.
- Required configuration:
  - tenant jurisdiction and cemetery type
  - facility policy, disclosure forms, retention schedule, access policy, and update permission matrix
  - systems of record and retrieval hooks for cemetery management, interment ledger, lot-right register, plot maps, GIS, work orders, memorial records, document repository, family communication log, and audit log
  - authority owner map for legal, licensed, public-health, financial, veteran-benefit, records-governance, grounds, and cemetery-manager decisions

## Materialization Requirements

`commons-crew` can materialize this lane safely only when the request includes:

- task metadata identifying the cemetery administration workflow, requested output shape, tenant, jurisdiction, facility, and cemetery type
- boundary metadata describing what fields may be read, summarized, prepared, or updated, and which actions require approval
- source-record bindings for permits, body receipts, interment authorizations, lot rights, plot maps, GIS records, work orders, memorial records, and communication logs
- retention and access classification for each requested record
- authority owners for unresolved legal right, lot ownership, disinterment, veteran eligibility, public-health, financial, memorial, and official-record decisions
- refusal and orchestrator-return conditions from the manifest and functionality map

## Isolation

- Tenant boundary: never reuse cemetery records, plot data, family contacts, permit images, death-record references, or memorial records across tenants.
- Knowledge boundary: public sources provide a baseline only; tenant jurisdiction, cemetery type, policy, and source systems determine final handling.
- Adaptation policy: tenant adaptation is allowed for configuration, retrieval, jurisdiction-specific source binding, facility-policy binding, and approved tuning. Adaptation must not weaken source-record, retention, access, or authority boundaries.

## Operations

- Monitoring:
  - scenario pass rate and uncovered ability count
  - number of low-confidence returns for missing tenant facts
  - number of conflicting-record escalations
  - number of restricted-record access escalations
  - number of attempted unauthorized record changes or approval requests
- Logging:
  - request scope and tenant context
  - source records used and missing
  - systems of record checked
  - output shape produced
  - before-and-after fields for any permitted record update note
  - refusal, escalation, and adjacent-owner route
- Rollback path:
  - keep runtime on `specification-based` and disable any materialized variant that fails scenario coverage or authority-boundary checks
  - revert catalog consumers to the previous package version or route all cemetery administration requests to orchestrator review
  - preserve audit logs and blocked-work notes for any in-flight cemetery cases
  - re-run `audit:spec-pack` and repository validation before restoring validated claims
- Support owner: catalog owner and tenant records-governance owner.

## Promotion Path

This overlay should be promoted to a retained implementation only if usage proves common enough and the repository adds:

- a committed build artifact or generated runtime profile for this lane
- tenant adapter tests for cemetery systems, document repositories, plot or GIS records, and audit logs
- regression tests for the 12 scenario families in this pack
- explicit authority-owner integrations for legal, licensed, public-health, financial, veteran-benefit, memorial, grounds, and records-governance handoffs
- rollout and rollback evidence for at least one controlled tenant configuration

Until then, this package is validated content for spec-first materialization, not a retained implementation.

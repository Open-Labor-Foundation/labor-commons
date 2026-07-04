# Deployment Package

## Runtime

- Target runtime: `commons-crew` materialization from a validated spec pack.
- Runtime strategy: `specification-based`.
- retained implementation: not included in this change.
- Deployment model: catalog overlay package under `catalog/naics-overlays/funeral-cemetery-and-end-of-life-services/pre-need-services-specialist/`.
- Required secrets: none for the spec pack itself.
- Required configuration:
  - tenant jurisdiction and establishment or cemetery role
  - seller permit or license context, contract forms, funding types, cancellation policy, access policy, and communication templates
  - systems of record and retrieval hooks for pre-need administration, contract management, document repository, trust accounting, insurance policy administration, payment/refund workflow, CRM, complaint tracking, at-need reconciliation, and audit logs
  - authority owner map for legal, licensed funeral, cemetery authority, insurance, trust, Medicaid, tax, estate, refund, financial, complaint, privacy, and regulator decisions

## Materialization Requirements

`commons-crew` can materialize this lane safely only when the request includes:

- task metadata identifying the pre-need service workflow, requested output shape, tenant, jurisdiction, facility, and funding context
- boundary metadata describing what records may be read, summarized, prepared, or routed, and which actions require approval
- source-record bindings for executed contracts, purchaser and beneficiary records, price-list disclosures, selected goods and services, trust ledgers, control ledgers, trustee statements, insurance policy records, cancellation forms, at-need reconciliation, and communications
- access classification for pre-need contracts, policy records, payment records, family communications, death documents, and complaint files
- authority owners for contract modification, cancellation benefits, refunds, trust withdrawals, insurance policy status, price guarantees, at-need overcharges, provider complaints, regulator routing, and privacy exceptions
- refusal and orchestrator-return conditions from the manifest and functionality map

## Isolation

- Tenant boundary: never reuse pre-need contracts, purchaser or beneficiary records, policy records, trust ledgers, payment data, family contacts, complaint records, or death documents across tenants.
- Knowledge boundary: public sources provide a baseline only; tenant jurisdiction, contract terms, funding vehicle, facility policy, and source systems determine final handling.
- Adaptation policy: tenant adaptation is allowed for configuration, retrieval, jurisdiction-specific source binding, facility-policy binding, and approved tuning. Adaptation must not weaken contract, funding, disclosure, access, privacy, or authority boundaries.

## Operations

- Monitoring:
  - scenario pass rate and uncovered ability count
  - number of low-confidence returns for missing tenant facts
  - number of contract, trust, insurance, or provider-record conflicts
  - number of cancellation, refund, or policy-exception escalations
  - number of repeat provider-performance or potential overcharge complaints
- Logging:
  - request scope and tenant context
  - source records used and missing
  - systems of record checked
  - output shape produced
  - assumptions, unresolved items, and customer communication constraints
  - refusal, escalation, and adjacent-owner route
- Rollback path:
  - keep runtime on `specification-based` and disable any materialized variant that fails scenario coverage or authority-boundary checks
  - revert catalog consumers to the previous package version or route all pre-need service requests to orchestrator review
  - preserve audit logs, blocked-work notes, source conflicts, and customer communication history for in-flight cases
  - re-run `audit:spec-pack` and repository validation before restoring validated claims
- Support owner: catalog owner and tenant pre-need compliance owner.

## Promotion Path

This overlay should be promoted to a retained implementation only if usage proves common enough and the repository adds:

- a committed build artifact or generated runtime profile for this lane
- tenant adapter tests for pre-need administration, document repositories, trust accounting, insurance policy administration, payment/refund workflow, complaint tracking, and at-need reconciliation systems
- regression tests for the 12 scenario families in this pack
- explicit authority-owner integrations for legal, licensed funeral, cemetery authority, insurance, trustee, compliance, finance, privacy, complaint, regulator, and at-need handoffs
- rollout and rollback evidence for at least one controlled tenant configuration

Until then, this package is validated content for spec-first materialization, not a retained implementation.

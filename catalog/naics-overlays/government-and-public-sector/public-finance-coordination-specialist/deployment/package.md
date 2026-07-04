# Deployment Package

## Runtime Posture

- Delivery state: `validated`
- Runtime strategy: `specification-based`
- retained implementation committed: no
- Validation profile: `standard`

This package is ready for catalog use as a spec pack. It should not be exposed
as a retained implementation until a separate implementation is committed with
retrieval connectors, runtime tests, tenant controls, and promotion approval.

## Materialization Requirements

`commons-crew` would need these inputs before safely materializing the lane:

- Task metadata: request scope, requester, public program, jurisdiction, fiscal year, funding source, requested action, prior owner, candidate next owner, due date, and intended output shape.
- Boundary metadata: delegation of authority, financial approval matrix, certifying and disbursing ownership, procurement authority, public-records ownership, legal ownership, audit ownership, and program adjudication ownership.
- Tenant assumptions: program statutes, agency policies, source hierarchy, service model, public-service population, due-process rules, records-retention rules, procurement rules, transparency obligations, and closure criteria.
- Retrieval dependencies: financial management, budget execution, grant, procurement, payment, case management, records management, transparency, document repository, correspondence, identity, workflow, and audit-log systems.
- Evidence requirements: budget execution record, award or obligation reference, procurement file where relevant, invoice or voucher, payment status, case or eligibility record where relevant, notice or correspondence record, retention metadata, transparency log, audit trail, prior-owner context, destination-owner acceptance, and blocker state.

## Deployment Notes

Deploy as a catalog-only specialist definition. Tenant activation should require
configuration of source hierarchy, system retrieval hooks, owner maps, handoff
rules, escalation matrix, and approved output templates. The runtime must show
that the lane coordinates work and does not approve public-finance actions.

Production materialization should log request scope, sources consulted, source
freshness, tenant assumptions, official record references, owner state, missing
records, blocker state, routing decision, acceptance evidence, refusal triggers,
and unresolved ambiguity.

## Rollback

Rollback is catalog-level. Remove or disable the package entitlement and revert
to the previous government-and-public-sector overlay set. Because runtime is
`specification-based`, rollback does not require disabling a trusted built service. If a
future built runtime is promoted, rollback must also disable connectors, remove
tenant routing policies, and restore the prior catalog entitlement.

## Refusal And Orchestrator Return Conditions

- Refuse requests for obligation approval, payment release, funds certification, budget transfer, grant award, procurement approval, public-records release, records disposition, audit finding, legal interpretation, eligibility outcome, sanction, repayment, or enforcement action.
- Return to orchestrator when jurisdiction, program authority, funding source, source hierarchy, systems of record, official records, due-process constraints, public-records rules, owner map, or closure criteria are missing and would change the handoff.
- Escalate conflicting Treasury, OMB, eCFR, FAR, NARA, FOIA, GAO, tenant, state, local, grant manual, procurement, or SOP sources instead of synthesizing an unsupported answer.

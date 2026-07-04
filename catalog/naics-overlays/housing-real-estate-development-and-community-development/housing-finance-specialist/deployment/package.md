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

- Task metadata: request scope, requester, property or project, jurisdiction, business unit, fiscal period, funding stack, program type, requested financial action, amount, tenant or unit context, due date, and intended output shape.
- Boundary metadata: source hierarchy, approval matrix, chart of accounts, rent and adjustment authority, HAP and subsidy owner, grantor owner, lender owner, development draw approver, asset management owner, LIHTC compliance owner, controller or accounting policy owner, tax owner, legal owner, audit owner, write-off authority, reserve release authority, and owner distribution authority.
- Tenant assumptions: service model, property-management policy, HAP contract requirements, affordability covenants, HOME or grant agreement, LIHTC documents, lender instructions, local housing finance agency requirements, write-off policy, residual receipts policy, surplus cash policy, close criteria, retention rules, and escalation matrix.
- Retrieval dependencies: property management, tenant certification, TRACS/iMAX, HAP contract administration, PHA or subsidy payment, accounting or GL, bank or lockbox, HOME/IDIS, community-development grant, development accounting, job-cost, lender servicing, LIHTC compliance, FASS/FASSUB, document, ticketing, identity, access, and audit-log systems.
- Evidence requirements: lease, rent schedule, utility allowance, certification, HAP contract, HAP voucher, TRACS detail, tenant ledger, receivable aging, deposit record, bank record, GL detail, HOME activity and IDIS draw records, grant agreement, eligible cost support, invoice, pay application, retainage schedule, lien waiver, inspection evidence, lender requisition, Form 8609, Form 8823, FASS or audit submission, residual receipts record, surplus cash support, reserve record, approval evidence, assumptions, and unresolved variance state.

## Deployment Notes

Deploy as a catalog-only specialist definition. Tenant activation should require
configuration of source hierarchy, system retrieval hooks, owner maps, financial
trigger definitions, adjustment policy, write-off policy, close rules,
escalation matrix, and approved output templates. The runtime must show that the
lane supports source-backed financial workflow outputs and does not approve
housing finance actions.

Production materialization should log request scope, source baseline, source
freshness, tenant assumptions, official record references, funding stack,
property or project, program type, amount, financial trigger, source-system
links, matched and unmatched records, variance state, denial or reject state,
posting support, missing records, routing decision, approval boundary, refusal
triggers, and unresolved ambiguity.

## Rollback

Rollback is catalog-level. Remove or disable the package entitlement and revert
to the previous housing-real-estate-development-and-community-development
overlay set. Because runtime is `specification-based`, rollback does not require disabling
a trusted built service. If a future built runtime is promoted, rollback must
also disable connectors, remove tenant routing policies, revoke write or
approval-sensitive permissions, and restore the prior catalog entitlement.

## Refusal And Orchestrator Return Conditions

- Refuse requests for rent increase approval, tenant rent calculation approval, subsidy eligibility, HAP payment approval, HAP contract interpretation, HOME draw approval, development loan draw approval, cost certification, reserve release, residual receipts treatment, surplus cash treatment, owner distribution, write-off approval, LIHTC eligible basis, tax treatment, accounting policy, legal interpretation, audit signoff, or financial statement certification.
- Return to orchestrator when funding stack, jurisdiction, property or project, program type, source hierarchy, official records, systems of record, record locations, approval matrix, policy context, or retrieval hooks are missing and would change the financial output.
- Escalate conflicting HUD, eCFR, IRS, HFA, lender, grant, tenant, local SOP, accounting policy, tax, or contract sources instead of synthesizing an unsupported answer.

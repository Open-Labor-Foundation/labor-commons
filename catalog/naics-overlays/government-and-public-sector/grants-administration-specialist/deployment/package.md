# Deployment Package: Grants administration specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/government-and-public-sector/grants-administration-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1377]()
- Runtime remains `specification-based` until a separately promoted retained-implementation implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::government-and-public-sector::grants-administration-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `records-documentation-and-administration`
- Industry profile: `government-and-public-sector`
- Definition tier: `approved-lane-template`
- Lane template id: `education-and-institution-administration`
- Adjacent owners: program adjudication, legal, public records, procurement, audit, and financial grants management.

## Required Inputs at Runtime

- Tenant policy and source hierarchy for Uniform Guidance, NOFO, agency policy, Notice of Award, award terms, and tenant procedures.
- Jurisdiction, agency, program statute, Assistance Listing, service population, and due-process constraints.
- Authority map for grant system updates, award decisions, eligibility decisions, remedies, public-records decisions, audit opinions, procurement decisions, and financial approvals.
- Retrieval map for systems of record:
  - Grants.gov,
  - SAM.gov and UEI sources,
  - agency grants management systems,
  - recipient grant administration systems,
  - financial management and drawdown systems,
  - FSRS and USAspending-linked reporting systems,
  - procurement and contract file systems,
  - records management repositories,
  - audit, monitoring, and governance queues.
- Records retention, privacy, public-records, access, and disposition rules.

## Materialization Notes for `commons-crew`

- Required output shapes:
  - document or records completeness summary,
  - administrative status note with missing items, owners, and due dates,
  - retention, access, or governance escalation package,
  - institution grant workflow summary,
  - escalation note for grant, registrar, participant-data, audit, procurement, public-records, or eligibility conflicts,
  - record update note,
  - document or evidence packet,
  - audit-trail or exception summary.
- All outputs must include source context, official record identifiers, system names, owner state, due dates, unresolved assumptions, and confidence posture.
- Required records, source context, authority map, or system-of-record access must block final administrative outputs when missing.
- The materialized runtime must refuse or return when the request requires legal, official award, eligibility, remedy, enforcement, audit opinion, public-records disclosure, procurement approval, or financial approval authority.

## Operational Rollout

1. Enable the specialist in the government-and-public-sector overlay catalog.
2. Configure tenant retrieval connectors for grant systems, records repositories, reporting systems, and owner maps.
3. Load source hierarchy and jurisdictional records rules for each tenant.
4. Validate all 12 scenarios and functionality mapping against tenant sample artifacts.
5. Enable orchestrator handoff routes for program adjudication, legal, public records, procurement, audit, and financial grants management.
6. Monitor unresolved-source conflicts, missing evidence rates, unauthorized change attempts, and due-process escalations.

## Rollback

- Disable the grants-administration route in runtime orchestration.
- Route active requests to orchestrator-safe escalation with preserved artifacts, timestamps, owner state, and unresolved assumptions.
- Restore any tenant-specific configuration to the last approved source hierarchy.
- Re-open queue review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated public-sector grants administration overlay for record-complete, audit-ready grant workflow coordination.
- Packaging: tenant specialist for public agencies, institutions, and recipient organizations that need disciplined grant records, reporting, and authority-safe handoffs.
- Proof points: explicit Uniform Guidance and Grants.gov terminology, audit-trail outputs, public-records and retention escalation, due-process refusal behavior, and complete scenario-to-ability coverage.
- The package is a specification-based control layer and does not claim trusted built authority.

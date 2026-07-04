# Deployment Package: Public procurement specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/government-and-public-sector/public-procurement-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1384]()
- Runtime remains `specification-based` until a separately promoted retained-implementation implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::government-and-public-sector::public-procurement-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `supply-procurement-and-availability`
- Industry profile: `government-and-public-sector`
- Definition tier: `approved-lane-template`
- Lane template id: `supply-logistics-and-inventory`
- Adjacent owners: contracting officer, program adjudication, legal, public records, procurement, audit, budget and finance, inventory planning, supplier management, quality release, and grant administration.

## Required Inputs at Runtime

- Tenant policy and source hierarchy for FAR, Uniform Guidance, state or local procurement code, agency supplements, grant terms, contract terms, public records, records retention, CUI/privacy, and tenant procedures.
- Jurisdiction, agency, program, facility, service population, funding source, procurement threshold, procurement method, and due-process constraints.
- Authority map for requisition approval, financial approval, source selection, contract award, contract modification, purchase order issuance, vendor responsibility, SAM/exclusion handling, public-records disclosure, protest handling, audit opinion, program adjudication, and quality release.
- Retrieval map for systems of record:
  - procurement and e-procurement systems,
  - contract writing and contract administration systems,
  - SAM.gov and vendor master systems,
  - ERP, inventory, warehouse management, and asset systems,
  - financial management, budget, and purchase-card systems,
  - records management repositories,
  - case management and public-service administration systems,
  - FOIA/public-records and correspondence tracking systems,
  - audit, internal control, protest, and governance queues,
  - agency grant management or federal award systems where procurement is federally funded.
- Records retention, public transparency, source-selection sensitivity, proprietary information, CUI, privacy, audit, protest, and disclosure rules.

## Materialization Notes for `commons-crew`

- Required output shapes:
  - availability or supply status summary,
  - availability or logistics status summary,
  - procurement or replenishment recommendation with constraints and dependencies,
  - vendor or procurement action note,
  - shortage or vendor-risk escalation note,
  - shortage, sourcing, or vendor-risk escalation note,
  - procurement records completeness summary,
  - source-policy conflict escalation,
  - public-service due-process escalation,
  - boundary refusal or adjacent-lane routing note.
- All outputs must include source context, official record identifiers, system names, owner state, approval dependencies, public-service impact, unresolved assumptions, and confidence posture.
- Required records, source context, procurement method, threshold, authority map, or system-of-record access must block final procurement and availability outputs when missing.
- The materialized runtime must refuse or return when the request requires legal, contracting officer, source-selection, spend approval, vendor responsibility, SAM/exclusion, protest, enforcement, public-records disclosure, audit opinion, eligibility, program adjudication, or quality release authority.

## Operational Rollout

1. Enable the specialist in the government-and-public-sector overlay catalog.
2. Configure tenant retrieval connectors for procurement, contract writing, vendor, SAM, inventory, finance, records, public-records, audit, protest, and public-service systems.
3. Load tenant source hierarchy, jurisdictional procurement rules, thresholds, records schedules, approval maps, and public-records constraints.
4. Validate all 12 scenarios and functionality mapping against tenant sample procurement and inventory artifacts.
5. Enable orchestrator handoff routes for contracting officer, legal, public records, audit, budget and finance, supplier management, inventory planning, quality release, program adjudication, and grant administration owners.
6. Monitor unresolved-source conflicts, shortage escalations, vendor blockers, missing contract-file evidence, approval-bypass attempts, and due-process escalations.

## Rollback

- Disable the public-procurement route in runtime orchestration.
- Route active requests to orchestrator-safe escalation with preserved procurement, vendor, inventory, records, timestamps, owner state, and unresolved assumptions.
- Restore tenant-specific configuration to the last approved source hierarchy, thresholds, records rules, and authority map.
- Re-open queue review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated public-sector procurement overlay for supply readiness, procurement intake, vendor-risk handling, and audit-ready procurement workflow coordination.
- Packaging: tenant specialist for public agencies and public-service organizations that need procurement and availability support without overstepping official contracting authority.
- Proof points: explicit FAR, Uniform Guidance, SAM.gov, NARA, GAO, and NIGP terminology; shortage and vendor-risk escalation; procurement records completeness; source-policy conflict handling; due-process refusal behavior; and complete scenario-to-ability coverage.
- The package is a specification-based control layer and does not claim trusted built authority.

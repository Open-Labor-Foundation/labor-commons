# Deployment Package: Public records specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/government-and-public-sector/public-records-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1385]()
- Runtime remains `specification-based` until a separately promoted retained-implementation implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::government-and-public-sector::public-records-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `records-documentation-and-administration`
- Industry profile: `government-and-public-sector`
- Definition tier: `approved-lane-template`
- Lane template id: `records-and-documentation`
- Adjacent owners: program adjudication, legal, disclosure officer or FOIA/public-records officer, privacy, records officer, procurement, audit, and enforcement.

## Required Inputs at Runtime

- Tenant jurisdiction, agency, program, service population, public-records statute, FOIA or state-law procedure, Privacy Act context, and due-process constraints.
- Tenant policy and source hierarchy for FOIA, state public-records law, agency manuals, retention schedules, privacy policies, legal holds, procurement records, transparency logs, and public-service records.
- Authority map for official record updates, disclosure decisions, exemption or withholding review, redaction approval, Privacy Act amendment, retention disposition, publication, legal review, adjudication, enforcement, procurement, and audit signoff.
- Retrieval map for systems of record:
  - FOIA or public-records request portal,
  - records management or electronic document and records management system,
  - document repositories and email archives,
  - case management and public-service administration systems,
  - permit or licensing systems,
  - procurement and contract file systems,
  - identity, consent, privacy, or system-of-records registers,
  - transparency log or publication repositories,
  - audit, legal hold, and compliance evidence repositories.
- Records retention, privacy, public-records, access, disposition, preservation, and audit-trail rules.

## Materialization Notes for `commons-crew`

- Required output shapes:
  - document or records completeness summary,
  - documentation completeness summary with missing items and owners,
  - administrative status note with missing items, ownership, and due dates,
  - record update note,
  - document or evidence packet,
  - retention, access, or governance escalation package,
  - records-governance escalation note,
  - audit-trail or exception summary.
- All outputs must include source context, request identifier, official record identifiers, systems checked, custodians, owner state, due dates, retrieval gaps, access or retention flags, unresolved assumptions, and confidence posture.
- Required records, source context, authority map, retention schedule, public-records rule, or system-of-record access must block final administrative outputs when missing.
- The materialized runtime must refuse or return when the request requires legal interpretation, official disclosure, withholding, redaction, Privacy Act amendment, appeal, retention disposition, adjudication, enforcement, procurement approval, audit opinion, policy override, or financial approval authority.
- Runtime may prepare evidence-backed next-step packages but must not impersonate a live agency position or present administrative readiness as final agency action.

## Operational Rollout

1. Enable the specialist in the government-and-public-sector overlay catalog.
2. Configure tenant retrieval connectors for FOIA/public-records portals, records repositories, email archives, case systems, procurement files, transparency logs, audit logs, and legal hold systems.
3. Load source hierarchy, jurisdictional public-records rules, agency policy, retention schedules, privacy controls, and owner maps for each tenant.
4. Validate all 12 scenarios and functionality mapping against tenant sample artifacts.
5. Enable orchestrator handoff routes for disclosure, legal, privacy, records officer, program adjudication, procurement, audit, and enforcement owners.
6. Monitor missing-record rates, conflicting system states, unauthorized change attempts, retention/privacy/access escalations, and due-process escalations.

## Rollback

- Disable the public-records-specialist route in runtime orchestration.
- Route active requests to orchestrator-safe escalation with preserved artifacts, timestamps, request state, owner state, and unresolved assumptions.
- Restore tenant-specific source hierarchy, retention, access, and owner-map configuration to the last approved baseline.
- Re-open queue review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated public-sector public records overlay for record-complete, audit-ready, retention-aware public-records administration and evidence handoff.
- Packaging: tenant specialist for agencies and public institutions that need disciplined official-record tracking, search evidence, correspondence, transparency-log, retention/access, and governance workflows.
- Proof points: explicit FOIA, Privacy Act, Federal Records Act, NARA, DOJ OIP, FAR, APA, OGIS, and GAO source baseline; audit-trail outputs; retention/privacy/access escalation; due-process refusal behavior; complete scenario-to-ability coverage.
- The package is a specification-based control layer and does not claim trusted built authority.

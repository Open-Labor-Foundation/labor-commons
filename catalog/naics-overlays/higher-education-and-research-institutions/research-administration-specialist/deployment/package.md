# Deployment Package: Research administration specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/higher-education-and-research-institutions/research-administration-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1420]()
- Runtime remains `specification-based` until a separately promoted trusted built implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::higher-education-and-research-institutions::research-administration-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `records-documentation-and-administration`
- Industry profile: `education-and-research`
- Definition tier: `approved-lane-template`
- Lane template id: `research-and-lab`
- Adjacent owners: registrar, faculty review, accreditation, grants, research compliance, IRB, privacy, legal, finance, biosafety, and laboratory safety.

## Required Inputs at Runtime

- Tenant policy and source hierarchy for sponsored programs, sponsor terms, proposal routing, award administration, IRB routing, human-subjects records, FERPA handling, FCOI handling, data-use restrictions, retention, privacy, laboratory scheduling, and official communications.
- Jurisdiction, public/private institution posture, department, principal investigator, sponsor, funding opportunity, proposal or award identifier, project period, budget period, protocol number, study context, learner or faculty dependency, facility, and laboratory context.
- Authority map for research administration, proposal, award, sponsor portal, IRB, finance, effort, subaward, SIS, LMS, faculty, schedule, laboratory, document repository, disclosure, deletion, publication, transfer, and official communication updates.
- Retrieval map for systems of record:
  - research administration and proposal routing systems,
  - sponsored-programs and grants administration systems,
  - sponsor portals such as eRA Commons, Research.gov, and agency-specific reporting systems,
  - IRB and research compliance systems,
  - finance, ERP, effort reporting, procurement, and subaward systems,
  - student information system,
  - learning management system,
  - faculty appointment, HR, and effort certification systems,
  - scheduling, laboratory, facility, and equipment reservation systems,
  - assessment, accreditation evidence, and program review repositories,
  - records management and access-control repositories,
  - governance, committee, ticketing, and owner-tracking systems.
- Records retention, privacy, consent, participant-data, sponsor, access, publication, transfer, data-use, FCOI, and source-system audit rules.

## Materialization Notes for `commons-crew`

- Required output shapes:
  - document or records completeness summary,
  - administrative status note with missing items, ownership, and due dates,
  - retention, access, privacy, consent, data-use, or governance escalation package,
  - research or lab workflow status summary,
  - protocol, evidence, or approval escalation note,
  - record update note,
  - document or evidence packet,
  - audit-trail or exception summary.
- All outputs must include source context, official record identifiers, system names, owner state, due dates, unresolved assumptions, confidence posture, and handoff path.
- Required records, source context, sponsor terms, protocol context, authority map, consent basis, retention policy, approval status, or system-of-record access must block final administrative outputs when missing.
- The materialized runtime must refuse or return when the request requires IRB status determination, consent validity decision, research ethics judgment, sponsor prior approval, grant allowability, budget approval, financial approval, official learner-record decision, grading, instructional judgment, accreditation signoff, biosafety or lab safety signoff, legal interpretation, privacy disclosure decision, policy override, or clinical/safety-critical authority.

## Operational Rollout

1. Enable the specialist in the higher-education-and-research-institutions overlay catalog.
2. Configure tenant retrieval connectors for research administration, proposal routing, grants, sponsor portals, IRB, finance, effort, subaward, SIS, LMS, faculty, schedule, laboratory, document, and owner-tracking systems.
3. Load tenant source hierarchy, sponsored-program policy, sponsor terms, IRB policy, FERPA handling policy, FCOI policy, retention schedule, consent rules, data-use restrictions, and escalation routing.
4. Validate all 12 scenarios and functionality mapping against tenant sample artifacts.
5. Enable orchestrator handoff routes for registrar, faculty review, accreditation, grants, research compliance, IRB, privacy, legal, finance, biosafety, and laboratory safety owners.
6. Monitor unresolved-source conflicts, missing evidence rates, unauthorized record-change attempts, blocked approval workflows, consent escalations, sponsor prior-approval blockers, and ethics or academic-judgment refusal behavior.

## Rollback

- Disable the research-administration route in runtime orchestration.
- Route active requests to orchestrator-safe escalation with preserved artifacts, timestamps, owner state, due dates, source links, source conflict notes, and unresolved assumptions.
- Restore tenant-specific configuration to the last approved source hierarchy, authority map, sponsor policy, IRB policy, and retrieval map.
- Re-open queue review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated higher-education and research overlay for protocol-aware, evidence-backed research administration.
- Packaging: tenant specialist for institutions that need disciplined proposal, award, protocol, consent, participant-data, learner-record, laboratory schedule, sponsor reporting, and closeout coordination.
- Proof points: explicit Uniform Guidance, NIH, NSF, Common Rule, OHRP, PHS FCOI, FERPA, Title IV, CEDS, and accreditation baselines; owner-tracked outputs; privacy and consent escalation; formal-approval refusal behavior; and complete scenario-to-ability coverage.
- The package is a specification-based control layer and does not claim trusted built authority.

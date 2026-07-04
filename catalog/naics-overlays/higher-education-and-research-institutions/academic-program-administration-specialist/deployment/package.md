# Deployment Package: Academic program administration specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/higher-education-and-research-institutions/academic-program-administration-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1414]()
- Runtime remains `specification-based` until a separately promoted trusted built implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::higher-education-and-research-institutions::academic-program-administration-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `records-documentation-and-administration`
- Industry profile: `education-and-research`
- Definition tier: `approved-lane-template`
- Lane template id: `program-and-membership-administration`
- Adjacent owners: registrar, faculty review, accreditation, grants, research compliance, privacy, and legal.

## Required Inputs at Runtime

- Tenant policy and source hierarchy for FERPA, Title IV institutional records, program catalog governance, curriculum committee workflow, accreditation criteria, grant terms, IRB policy, consent handling, and records retention.
- Jurisdiction, public/private institution posture, college or department, program, credential level, catalog year, term, cohort, modality, campus, and effective-date context.
- Authority map for SIS, LMS, catalog, degree audit, transcript, schedule, accreditation, grant, IRB, research administration, document repository, disclosure, deletion, publication, and official communication updates.
- Retrieval map for systems of record:
  - student information system,
  - learning management system,
  - curriculum management and catalog systems,
  - degree audit and transcript systems,
  - scheduling and room assignment systems,
  - assessment and program review repositories,
  - accreditation evidence systems,
  - research administration and IRB systems,
  - sponsored-programs and grants administration systems,
  - records management and access-control repositories,
  - governance, committee, ticketing, and owner-tracking systems.
- Records retention, privacy, consent, access, participant-data, publication, and source-system audit rules.

## Materialization Notes for `commons-crew`

- Required output shapes:
  - document or records completeness summary,
  - administrative status note with missing items, ownership, and due dates,
  - retention, access, privacy, consent, or governance escalation package,
  - program or membership status summary with due dates, blockers, and owners,
  - escalation note for missing submissions, approvals, or participant data,
  - record update note,
  - document or evidence packet,
  - audit-trail or exception summary.
- All outputs must include source context, official record identifiers, system names, owner state, due dates, unresolved assumptions, confidence posture, and handoff path.
- Required records, source context, authority map, consent basis, retention policy, approval status, or system-of-record access must block final administrative outputs when missing.
- The materialized runtime must refuse or return when the request requires grading, instructional judgment, faculty approval, registrar finality, accreditation signoff, grant approval, IRB or ethics determination, consent validity decision, legal interpretation, privacy disclosure decision, policy override, or financial approval.

## Operational Rollout

1. Enable the specialist in the higher-education-and-research-institutions overlay catalog.
2. Configure tenant retrieval connectors for SIS, LMS, catalog, degree-audit, schedule, assessment, accreditation, research administration, IRB, grant, document, and owner-tracking systems.
3. Load tenant source hierarchy, FERPA handling policy, retention schedule, consent rules, accreditation criteria, curriculum governance, grant terms, and IRB routing.
4. Validate all 12 scenarios and functionality mapping against tenant sample artifacts.
5. Enable orchestrator handoff routes for registrar, faculty review, accreditation, grants, research compliance, privacy, and legal owners.
6. Monitor unresolved-source conflicts, missing evidence rates, unauthorized record-change attempts, blocked approval workflows, consent escalations, and academic-judgment refusal behavior.

## Rollback

- Disable the academic-program-administration route in runtime orchestration.
- Route active requests to orchestrator-safe escalation with preserved artifacts, timestamps, owner state, due dates, source links, and unresolved assumptions.
- Restore tenant-specific configuration to the last approved source hierarchy and retrieval map.
- Re-open queue review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated higher-education and research overlay for record-complete, deadline-aware academic program administration.
- Packaging: tenant specialist for institutions that need disciplined program records, roster evidence, assessment packets, accreditation files, grant-supported program tracking, and research-administration handoffs.
- Proof points: explicit FERPA, Title IV, IPEDS/CIP/CEDS, accreditation, Common Rule, OHRP, and Uniform Guidance baselines; owner-tracked outputs; privacy and consent escalation; formal-approval refusal behavior; and complete scenario-to-ability coverage.
- The package is a specification-based control layer and does not claim trusted built authority.

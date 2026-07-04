# Deployment Package: Grants and sponsored programs specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/higher-education-and-research-institutions/grants-and-sponsored-programs-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1417]()
- Runtime remains `specification-based` until a separately promoted retained-implementation implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::higher-education-and-research-institutions::grants-and-sponsored-programs-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `execution-processing-and-fulfillment`
- Industry profile: `education-and-research`
- Definition tier: `approved-lane-template`
- Lane template id: `program-and-membership-administration`
- Adjacent owners: registrar, faculty review, accreditation, grants, research compliance, IRB, legal, grant accounting, authorized organizational representative, sponsor owner, and principal investigator.

## Required Inputs at Runtime

- Tenant policy and source hierarchy for Uniform Guidance, sponsor guidance, opportunity terms, award terms, FERPA, research compliance, accreditation, and institutional routing rules.
- Sponsor, program, project, PI, department, college, study, learner, participant, and jurisdiction context that materially changes execution.
- Authority map for proposal submission, certification, AOR action, PI signoff, budget approval, cost allowability, effort certification, prior approval, IRB/IACUC action, grading, instructional decisions, accreditation decisions, legal interpretation, and sponsor communication.
- Retrieval map for systems of record:
  - research administration and sponsored-project systems,
  - Grants.gov and sponsor portals,
  - NSF Research.gov, NIH eRA Commons, and sponsor-specific systems,
  - student information and learning management systems,
  - IRB, IACUC, COI, export-control, and research compliance systems,
  - financial management, grant accounting, effort reporting, and procurement systems,
  - subaward and FFATA/FSRS reporting systems,
  - scheduling, deadline, workflow, and document repositories.
- Records retention, privacy, consent, participant-data, student-record, assessment-evidence, accreditation, and disclosure rules.

## Materialization Notes for `commons-crew`

- Required output shapes:
  - execution status update with lifecycle stage and next action,
  - completion or fulfillment record with evidence supporting closure,
  - exception summary for blocked, returned, partially completed, or rework-required work,
  - sponsored-project or program status summary with due dates, blockers, and owners,
  - escalation note for missing submissions, approvals, certifications, consent, participant data, student/faculty records, IRB status, or source conflicts.
- All outputs must include source context, official record identifiers, system names, lifecycle state, owner, due dates, unresolved assumptions, evidence references, and confidence posture.
- Required records, source context, authority map, consent state, approval evidence, system-of-record access, or official receipts must block final lifecycle or completion outputs when missing.
- The materialized runtime must refuse or return when the request requires legal, financial approval, AOR, sponsor, PI, faculty-review, grading, instructional, IRB/IACUC, accreditation, research-compliance, policy-override, or other formal approval authority outside the lane.

## Operational Rollout

1. Enable the specialist in the higher-education-and-research-institutions overlay catalog.
2. Configure tenant retrieval connectors for research administration, sponsor portals, SIS, LMS, IRB/compliance, financial, grant accounting, subaward, reporting, scheduling, and document systems.
3. Load tenant source hierarchy, delegated-authority map, sponsor routing rules, and records/consent/privacy policies.
4. Validate all 12 scenarios and functionality mapping against tenant sample artifacts.
5. Enable orchestrator handoff routes for registrar, faculty review, accreditation, grants, research compliance, IRB, legal, grant accounting, AOR, PI, and sponsor owners.
6. Monitor missing-evidence rates, source conflicts, sponsor-portal rejections, blocked consent or IRB states, unauthorized authority requests, and completion-without-evidence attempts.

## Rollback

- Disable the grants-and-sponsored-programs route in runtime orchestration.
- Route active requests to orchestrator-safe escalation with preserved artifacts, timestamps, owner state, lifecycle state, and unresolved assumptions.
- Restore tenant-specific configuration to the last approved source hierarchy and authority map.
- Re-open source policy, connector, and scenario review before re-enable.

## Validation evidence

- Positioning: validated higher education sponsored-program execution overlay for proposal, award, reporting, study, and closeout workflows that need deadline, owner, evidence, and authority discipline.
- Packaging: tenant specialist for colleges, universities, medical schools, research institutes, and sponsored-program offices that need audit-ready administrative execution without overclaiming PI, AOR, IRB, legal, grading, or financial authority.
- Proof points: explicit Uniform Guidance, sponsor policy, FERPA, Common Rule/OHRP, IPEDS, and accreditation-aware handling; completion-evidence refusal; study/consent blockers; source-conflict escalation; and complete scenario-to-ability coverage.
- The package is a specification-based control layer and does not claim trusted built authority.

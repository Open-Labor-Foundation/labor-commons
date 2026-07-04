# Deployment Package: Student affairs specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/higher-education-and-research-institutions/student-affairs-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1421]()
- Runtime remains `specification-based` until a separately promoted trusted built implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::higher-education-and-research-institutions::student-affairs-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `execution-processing-and-fulfillment`
- Industry profile: `education-and-research`
- Definition tier: `approved-lane-template`
- Lane template id: `education-and-academic-operations`
- Adjacent owners: registrar, faculty review, accreditation, grants, research compliance, student conduct, Title IX, disability services, counseling and wellness, campus safety, privacy, and legal.

## Required Inputs at Runtime

- Tenant student affairs service model, source hierarchy, completion criteria, escalation matrix, and authority map.
- Jurisdiction, public/private institution posture, campus, program, department, term, cohort, student organization, event, case, grant, study, or facility context.
- Tenant policy for FERPA handling, directory information, consent, student conduct, Title IX routing, disability services, campus activities, student organizations, event safety, emergency response, wellness and clinical referrals, accreditation evidence, grant-supported activities, study-linked records, records retention, disclosure, publication, and official communications.
- Retrieval map for systems of record:
  - student information system,
  - learning management system,
  - student affairs case-management system,
  - student conduct management system,
  - Title IX case or reporting system,
  - student organization and campus activities systems,
  - scheduling, room reservation, and event-management systems,
  - accessibility or disability services workflow systems,
  - campus safety referral, incident, and emergency communication systems,
  - assessment and co-curricular transcript systems,
  - research administration and IRB systems,
  - sponsored-programs and grants administration systems,
  - accreditation evidence and document management systems,
  - records management, consent, privacy, and access-control repositories,
  - communication, ticketing, governance, and owner-tracking systems.
- Role authorization, consent basis, minimum-necessary disclosure posture, retention schedule, source-system audit rules, and approved retrieval hooks.

## Materialization Notes for `commons-crew`

- Required output shapes:
  - execution status update with lifecycle stage and next action,
  - completion or fulfillment record,
  - exception summary for blocked, returned, rework, or partial-completion states,
  - program, campus, or event workflow summary with readiness and owner status,
  - escalation note for scheduling, participation, records, consent, conduct, Title IX, accessibility, safety, research, grant, accreditation, or official evaluation conflicts,
  - learner or study workflow summary,
  - source and traceability packet.
- All outputs must include source context, official record identifiers, system names, lifecycle state, owner state, due dates, completion criteria, unresolved assumptions, confidence posture, and handoff path.
- Required records, source context, authority map, consent basis, retention policy, approval status, completion criteria, or system-of-record access must block final execution or completion outputs when missing.
- The materialized runtime must refuse or return when the request requires conduct adjudication, sanctions, Title IX determination, disability accommodation approval, clinical judgment, safety-critical action, grading, instructional judgment, faculty approval, registrar finality, accreditation signoff, grant approval, IRB or ethics determination, consent validity decision, legal interpretation, privacy disclosure decision, policy override, or financial approval.

## Operational Rollout

1. Enable the specialist in the higher-education-and-research-institutions overlay catalog.
2. Configure tenant retrieval connectors for SIS, LMS, case-management, conduct, Title IX, student organization, event, schedule, accessibility, campus safety, assessment, research administration, IRB, grant, accreditation, document, privacy, consent, and owner-tracking systems.
3. Load tenant source hierarchy, completion criteria, FERPA handling policy, retention schedule, consent rules, student affairs service model, conduct code, Title IX routing, disability services workflow, event safety rules, emergency routing, grant terms, and IRB routing.
4. Validate all 12 scenarios and functionality mapping against tenant sample artifacts.
5. Enable orchestrator handoff routes for registrar, faculty review, accreditation, grants, research compliance, student conduct, Title IX, disability services, counseling, campus safety, privacy, and legal owners.
6. Monitor missing evidence rates, exception queue volume, completion-without-evidence attempts, unauthorized authority requests, consent escalations, records conflicts, policy conflicts, and adjacent-owner handoff outcomes.

## Rollback

- Disable the student-affairs-specialist route in runtime orchestration.
- Route active requests to orchestrator-safe escalation with preserved artifacts, timestamps, lifecycle state, owner state, due dates, source links, completion criteria, and unresolved assumptions.
- Restore tenant-specific configuration to the last approved source hierarchy, retrieval map, and completion criteria.
- Re-open queue review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated higher-education and research overlay for evidence-backed student affairs execution, event delivery, case follow-up, exception handling, and completion capture.
- Packaging: tenant specialist for institutions that need disciplined student affairs operations across co-curricular programs, student organization events, care referrals, conduct-administration support, consent-sensitive records, schedule conflicts, and study or grant dependencies.
- Proof points: explicit FERPA, Title IV recordkeeping, FSA Handbook, Clery, Title IX, OCR disability, CAS, NASPA, ACPA/NASPA, Common Rule, OHRP, and Uniform Guidance baselines; lifecycle states; exception queues; completion evidence refusal; privacy and consent escalation; formal-approval refusal behavior; and complete scenario-to-ability coverage.
- The package is a specification-based control layer and does not claim trusted built authority.

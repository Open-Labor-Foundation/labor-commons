# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first mode.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to retained implementation only after sustained low-incident usage and explicit operator approval.

## Deployment Inputs

- Bundle path: `catalog/naics-overlays/higher-education-and-research-institutions/faculty-support-specialist/`
- Queue context: `industry-overlays::higher-education-and-research-institutions::faculty-support-specialist`.
- Workflows: faculty support intake, course/LMS/schedule troubleshooting, consent/records validation, program or study approval gating, escalation/handoff routing.
- Required task and boundary metadata:
  - specialty boundary text,
  - minimum tenant facts map,
  - adjacent-lane owner registry,
  - output shape catalog.
- Required assumptions:
  - tenant-specific jurisdiction, faculty handbook, labor or workload policy, and faculty/program approval hierarchy,
  - FERPA role-permission policy and data-minimization rules for learner or participant records,
  - course-section, LMS, registrar, grant, accreditation, and research workflow rules,
  - retention and evidence rules for assessment, faculty support, and study records.

## Materialization expectations

- Systems of record connectors required:
  - faculty information or HRIS system,
  - Student Information System (SIS),
  - Learning Management System (LMS),
  - scheduling/event orchestration,
  - grants and research administration,
  - document and privacy repositories.
- Required retrieval context:
  - faculty identifier, appointment or role context, department, program, course section, and term,
  - learner or study participant identifiers only when needed for the specific support request,
  - consent or release artifacts,
  - approval trail references for chair, dean, registrar, grant, accreditation, IRB, or research compliance owners,
  - roster, LMS shell, assessment, attendance, and communication evidence,
  - schedule documents, due dates, owner state, and study event status.
- Conditions requiring refusal or orchestrator return:
  - unresolved ethics/federal policy conflict,
  - missing consent records,
  - missing faculty role, course-section owner, registrar, program, grant, or study approval chain,
  - request asks for grading, instructional judgment, faculty-review, ethics-board, legal, accreditation, or financial authorization roles.

## Deployment and Rollback

- Logging: record every action with request id, disposition, confidence, blockers, and owner routing.
- Monitoring: monitor policy-conflict escalation volume and repeat-failure frequency.
- Rollback: disable faculty-support-specialist routing, re-route active requests to orchestrator handoff workflows, restore fallback handling.
- Promotion readiness: promote only after approved post-launch metrics and explicit product-owner sign-off.

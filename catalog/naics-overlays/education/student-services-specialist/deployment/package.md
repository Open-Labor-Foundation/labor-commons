# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first mode.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to retained implementation only after sustained low-incident usage and explicit operator approval.

## Deployment Inputs

- Bundle path: `catalog/naics-overlays/education/student-services-specialist/`
- Queue context: `industry-overlays::education::student-services-specialist`.
- Workflows: service request intake, consent/records validation, approval gating, escalation/handoff routing.
- Required task and boundary metadata:
  - specialty boundary text,
  - minimum tenant facts map,
  - adjacent-lane owner registry,
  - output shape catalog.
- Required assumptions:
  - tenant-specific jurisdiction, faculty/program approval hierarchy,
  - FERPA role-permission policy,
  - grant/research workflow rules,
  - student conduct and retention policy overrides.

## Materialization expectations

- Systems of record connectors required:
  - Student Information System (SIS),
  - Learning Management System (LMS),
  - scheduling/event orchestration,
  - grants and research administration,
  - document and privacy repositories.
- Required retrieval context:
  - student/program/faculty identifiers,
  - consent or release artifacts,
  - approval trail references,
  - assessment and attendance evidence,
  - schedule documents and study event status.
- Conditions requiring refusal or orchestrator return:
  - unresolved ethics/federal policy conflict,
  - missing consent records,
  - missing program/faculty approval chain,
  - request asks for grading, ethics-board, legal, or financial authorization roles.

## Deployment and Rollback

- Logging: record every action with request id, disposition, confidence, blockers, and owner routing.
- Monitoring: monitor policy-conflict escalation volume and repeat-failure frequency.
- Rollback: disable student-services-specialist routing, re-route active requests to orchestrator handoff workflows, restore fallback handling.
- Promotion readiness: promote only after approved post-launch metrics and explicit product-owner sign-off.

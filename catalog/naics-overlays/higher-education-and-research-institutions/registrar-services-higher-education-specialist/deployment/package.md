# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route registrar-services enablement work into a spec-first specialist with retrieval, authority, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation scenarios, evaluation results, readiness evidence, release notes, deployment notes.
- Runtime strategy: `specification-based` until a retained implementation is explicitly committed and promoted.
- Required secrets: none in the package itself; tenant SIS, LMS, degree audit, scheduling, document management, identity, training, service desk, research administration, accreditation, and grant-system credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for SIS, LMS, degree audit, catalog or curriculum management, scheduling, document management, IAM, training records, service desk, research administration, IRB, accreditation evidence, and grants systems
  - escalation targets for registrar, faculty review, accreditation, grants, research compliance, higher-education compliance, privacy, legal, financial approval, and system access owners
  - tenant authority maps for role-based access, FERPA training, disclosure approvals, grade-change handling, enrollment-status workflows, transcript fulfillment, registration holds, program approvals, research consent, and go-live criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of student records, learner status, transcript requests, grades, degree-audit records, consent materials, research participant context, training records, system permissions, or approval artifacts.
- Knowledge boundary: FERPA, Department of Education, Federal Student Aid, AACRAO, PESC, HLC, and Common Rule public baselines are shared; tenant policies, system configuration, local governance, academic calendar rules, directory-information policy, role matrices, and approval owners are injected only at request time.
- Adaptation policy:
  - allowed: tenant terminology maps, artifact templates, system connector mappings, service workflow checklists, role matrices, retrieval hooks, and owner registries
  - prohibited: widening the lane into official registrar record decisions, grade changes, academic standing decisions, accreditation approval, grant compliance signoff, legal interpretation, financial approval, IRB review, or ethics-board authority

## Operations

- Monitoring:
  - log readiness decisions, missing prerequisites, FERPA training gaps, SIS permission mismatches, consent evidence gaps, program approval blockers, study approval blockers, source conflicts, and handoff owner ambiguity
  - alert on repeated attempts to mark onboarding complete without evidence, grant excessive permissions, disclose education records without consent context, bypass faculty review, or route ethics or accreditation approval through this lane
  - monitor source review dates and require refresh before the decay interval expires
- Logging:
  - record release version, tenant assumptions, requester role, program or term context, systems-of-record consulted, training evidence, access evidence, consent evidence, owner map, unresolved blockers, and handoff destination
  - record refusal triggers and orchestrator returns with the missing facts or authority boundaries that caused the stop
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle if one exists
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry higher-education-and-research-institutions --agent registrar-services-higher-education-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed registrar-services higher education specialist for onboarding intake, setup validation, FERPA-aware training readiness, role-based access checks, program and learner workflow dependencies, consent or assessment evidence gaps, study workflow blockers, and go-live handoff.
- Materialization requirements for `commons-crew`:
  - task metadata identifying institution, campus or business unit, program, term, service model, role, requested readiness action, and whether learner, faculty, program, schedule, accreditation, grant, or study dependencies are implicated
  - boundary metadata identifying registrar official-record owner, faculty review owner, accreditation owner, grants owner, research compliance or IRB owner, privacy owner, legal owner, access owner, and steady-state service owner
  - retrieval dependencies for student information, learning management, degree audit, scheduling, document management, identity and access, training, service desk, research administration, accreditation evidence, and grant systems
  - tenant overlays for FERPA directory-information policy, disclosure rules, transcript and hold rules, grade-change workflow, registration and prerequisite workflow, academic calendar, program approval process, research consent process, and go-live criteria
- Regulated-lane caveats:
  - FERPA and tenant privacy policies constrain record access and disclosure, but this package does not provide legal advice or privacy-office signoff
  - Federal Student Aid enrollment-reporting guidance shapes enrollment-status workflow readiness, but this lane does not certify Title IV compliance or official enrollment reporting
  - Accreditation and assessment sources shape evidence and boundary behavior, but this lane does not approve accreditation findings or academic assessment judgments
  - Common Rule sources shape research consent and IRB boundaries, but this lane does not make human-subjects determinations or approve study activity
  - runtime must refuse or return to orchestrator whenever grading, instructional judgment, ethics review, formal approval, legal interpretation, financial approval, policy override, or safety-critical authority is required
- This package is validated as a spec pack, but runtime may still use `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, JSON parse validity, and audit-spec-pack success.

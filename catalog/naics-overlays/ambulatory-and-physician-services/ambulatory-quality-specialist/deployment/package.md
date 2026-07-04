# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route ambulatory-quality work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant EHR, practice-management, registry, survey-document, incident, infection-surveillance, and patient-experience connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for EHR, practice-management or claims, QPP or registry, ASCQR or survey-document, incident or grievance, infection-prevention, document-control, and patient-experience systems
  - escalation targets for medical director, peer-review owner, infection-prevention lead, risk or compliance owner, privacy owner, final reporting-submission owner, accreditation or survey-response owner, and executive approver
  - tenant-specific maps for service setting, jurisdiction, accreditor, reporting program enrollment, reporting year, reportable-event rules, reopening authority, and hold procedures

## Materialization Requirements

- Required task metadata:
  - request type
  - service setting, jurisdiction, and accreditor or survey context
  - quality program and reporting year
  - affected measure set, case set, service line, or incident scope
  - visible hold, deficiency, CAPA, complaint, infection, or reporting status
  - requested decision and claimed authority owner
- Required boundary metadata:
  - medical-director and peer-review owners
  - final reporting-submission and attestation owners
  - accreditation, survey, and plan-of-correction owners
  - risk, privacy, and compliance escalation owners
  - tenant policy precedence and escalation tree
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - service-setting model such as physician office, clinic, endoscopy center, or ASC
  - quality program enrollment, measure inventory, and reporting-year specifications
  - documented hold, reopening, QAPI, incident-review, and CAPA procedures
  - reportable-event policies, survey posture, and patient-experience program details
- Regulated-lane caveats:
  - public CMS and AHRQ sources constrain the lane but do not replace tenant SOPs, state rules, accreditor obligations, or payer-program overlays
  - the lane may support measure, survey, incident, infection-control, and patient-experience analysis but cannot command final clinical, peer-review, compliance, or attestation decisions
  - privacy, legal reportability, and formal regulator or accreditor communications remain external to the lane
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, or records that would change the result
  - request for clinical judgment, peer-review sanction, legal reportability, privacy investigation, final survey signoff, or final submission authority
  - conflicting public and tenant rules that materially change whether work can close, reopen, or be reported

## Isolation

- Tenant boundary: no cross-tenant sharing of ambulatory charts, workpapers, incident logs, infection records, survey findings, patient-experience files, or authority maps.
- Knowledge boundary: public CMS and AHRQ baselines are shared; tenant SOPs, measure workbooks, reportable-event rules, submission calendars, and retrieval hooks are injected only at request time.
- Adaptation policy:
  - allowed: ambulatory terminology, service-setting labels, measure inventories, accreditor maps, system connectors, and tenant control overlays
  - prohibited: widening the lane into clinical judgment, peer-review discipline, privacy or legal investigation, accreditation signoff, or final reporting attestation

## Operations

- Monitoring:
  - log dispatch decisions, hold and reopening outputs, measure-spec conflicts, survey and deficiency escalations, infection-control escalations, patient-safety incident escalations, and unsupported closure attempts
  - alert on stale source reviews, recurring outpatient incidents, repeated override requests, unresolved denominator or exclusion conflicts, and attempts to bypass QAPI or infection-prevention controls
  - monitor for requests that incorrectly seek clinical, peer-review, compliance, or final attestation authority from the lane
- Logging:
  - record release version, tenant assumptions, affected service-line or measure scope, missing evidence, routed owners, and whether the request involved hold, reopening, reporting, incident, infection, or patient-experience handling
  - record whether source or policy conflicts existed and whether the work escalated because of service-setting, reporting-year, or authority-boundary uncertainty
- Rollback path:
  - disable the current specialist release
  - route ambulatory-quality requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry ambulatory-and-physician-services --agent ambulatory-quality-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed ambulatory quality specialist for physician-practice and ASC quality review, survey and reporting evidence handling, patient-safety and infection-control boundary discipline, and corrective-action packaging.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
- Runtime prompts should explicitly remind the lane that it owns ambulatory-quality evidence handling and escalation only, not clinical judgment, peer review, privacy or legal interpretation, final survey signoff, or final reporting authority.

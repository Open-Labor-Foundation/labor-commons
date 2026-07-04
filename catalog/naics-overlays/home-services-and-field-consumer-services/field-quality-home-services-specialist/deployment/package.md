# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route home-health field-quality support work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant EHR/EMR, agency management, scheduling, OASIS/iQIES, payer portal, revenue cycle, case management, CRM, complaint, incident, and document-control connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for EHR/EMR, home-health agency management, scheduling, OASIS/iQIES, payer portal, revenue cycle, case management, utilization review, CRM, complaint, incident, and document-control systems
  - escalation targets for licensed clinical review, clinical operations, utilization management, patient access, revenue cycle, coding, healthcare privacy, healthcare compliance, payer operations, case management, and final release approver
  - tenant-specific maps for jurisdiction, agency branch, service model, payer, plan, provider type, referral source, authorization rules, consent handling, quality hold procedures, and corrective-action ownership

## Materialization Requirements

- Required task metadata:
  - request type
  - patient/member or episode scope
  - agency branch, jurisdiction, payer, plan, provider type, and service setting
  - service dates, referral source, eligibility status, authorization status, and consent or permitted-use context
  - affected field staff, visit, complaint, missed-visit, OASIS, claim, denial, or corrective-action scope
  - requested decision and claimed authority owner
- Required boundary metadata:
  - licensed clinical reviewer and clinical-risk owner
  - payer-policy, utilization-management, coding, revenue-cycle, and claim-approval owners
  - privacy, compliance, legal, and patient-safety escalation owners
  - final hold, release, closure, and policy-exception approvers
  - tenant policy precedence and orchestrator return rules
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - patient/member status, service dates, payer, plan, authorization, referral, consent, and branch context
  - home-health service model, agency certification posture, and jurisdiction
  - documented quality hold, release, complaint, missed-visit, OASIS, HH QRP, HHCAHPS, claim, denial, and CAPA procedures
  - current payer rules, state Medicaid or licensure overlays, accreditation overlays, and tenant SOPs when they materially affect the result
- Regulated-lane caveats:
  - public CMS, eCFR, and HHS OCR sources constrain the lane but do not replace tenant SOPs, state Medicaid rules, payer contracts, licensure rules, accreditation obligations, or patient-specific clinical review
  - the lane may support evidence assembly and service-resolution packaging but cannot decide diagnosis, treatment planning, homebound status, skilled need, medical necessity, payer policy, privacy obligations, coding, claim approval, or final release
  - PHI access, disclosure, breach handling, legal reportability, and formal regulator or payer communications remain external to the lane
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, retrieval hooks, or source records that would change the result
  - request for clinical judgment, payer-policy interpretation, privacy obligation, legal reportability, coding, utilization management, claim payment, policy override, or final approval
  - conflicting public and tenant rules that materially change whether work can close, release, be communicated, be billed, or be escalated

## Isolation

- Tenant boundary: no cross-tenant sharing of PHI, referral packets, OASIS records, visit notes, claim files, payer correspondence, complaints, incident logs, corrective actions, authority maps, or retrieval hooks.
- Knowledge boundary: public CMS, eCFR, and HHS OCR baselines are shared; tenant SOPs, payer contracts, state overlays, patient records, branch procedures, and system mappings are injected only at request time.
- Adaptation policy:
  - allowed: tenant field-quality terminology, branch labels, quality hold names, payer and plan maps, OASIS/iQIES retrieval, complaint workflows, and approved SOP overlays
  - prohibited: widening the lane into licensed clinical judgment, payer-policy interpretation, privacy investigation, claim approval, coding, utilization management, legal review, or final release authority

## Operations

- Monitoring:
  - log dispatch decisions, service dispositions, source-record references, missing prerequisite requests, PHI-sensitive escalations, clinical or payer handoffs, quality holds, release recommendations, corrective-action escalations, and unsupported exception attempts
  - alert on stale source reviews, repeated missed-visit defects, recurring late OASIS or missing-order patterns, unresolved authorization dependencies, PHI-sensitive requests, and attempts to close quality work without review support
  - monitor for requests that incorrectly seek clinical, payer, privacy, coding, financial, legal, or approval authority from the lane
- Logging:
  - record release version, tenant assumptions, patient/member or episode scope, affected branch and service dates, missing evidence, routed owners, and whether the request involved PHI, clinical risk, payer prerequisites, claim evidence, hold/release, complaint, or corrective action
  - record whether source or policy conflicts existed and whether the work escalated because of jurisdiction, payer, plan, consent, authority-boundary, or record uncertainty
- Rollback path:
  - disable the current specialist release
  - route home-health field-quality requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry home-services-and-field-consumer-services --agent field-quality-home-services-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed field-quality specialist for home-health service support, quality evidence handling, customer or stakeholder communication summaries, hold or release discipline, prerequisite handling, PHI escalation, clinical and payer boundary control, and corrective-action packaging.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production telemetry and evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, scenario-coverage completeness, and functionality coverage.
- Runtime prompts should explicitly remind the lane that it owns home-health field-quality service support and escalation only, not clinical judgment, payer-policy interpretation, privacy obligation decisions, coding, utilization management, claim approval, legal review, or final release authority.

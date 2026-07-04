# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route funeral services analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant funeral home management, EDRS, document repository, crematory, cemetery, CRM, complaint, aftercare, accounting, and reporting credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for funeral home case management, EDRS or vital records, document repository, crematory tracking, cemetery management, preneed, CRM, complaint, aftercare, accounting, and reporting warehouse systems
  - escalation targets for licensed funeral director, embalmer, arrangement authority, documentation, crematory, cemetery, vital-record, compliance, benefits, billing, privacy, safety, legal, and policy-approval owners
  - tenant metric dictionaries, source-precedence rules, reporting periods, facility and jurisdiction maps, disposition-path taxonomy, complaint taxonomy, action thresholds, and publication approval chain

## Isolation

- Tenant boundary: no cross-tenant sharing of decedent, family, case, vital-record, crematory, cemetery, preneed, complaint, aftercare, payment, or reporting outputs.
- Knowledge boundary: FTC, eCFR, CDC/NCHS, state regulator, Conference, CANA, OSHA, NARA, and SEC public baselines are shared; tenant SOPs, source hierarchies, metric dictionaries, facility rules, pricing and exception limits, cemetery or crematory policies, and approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, source connector mappings, reporting templates, facility or jurisdiction filters, and approved action-threshold settings
  - prohibited: widening the lane into legal right-of-disposition decisions, licensed funeral directing, embalming, crematory or cemetery authority, vital-record amendments, benefit adjudication, pricing or refund approval, safety disposition, privacy approval, compliance signoff, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, death-registration readiness caveats, Funeral Rule evidence gaps, cremation authorization gaps, release-of-remains delays, complaint escalations, and unsupported-claim refusals
  - alert on stale source reviews, repeated attempts to count cases without disclosure evidence, repeated EDRS or permit conflicts, repeated custody or identification mismatches, recurring policy-exception requests, and recurring requests for unsupported causal or board-ready claims
  - monitor for requests that incorrectly seek legal, licensed, financial, benefits, safety, privacy, compliance, cemetery, crematory, vital-record, or policy-override authority from the lane
- Logging:
  - record release version, tenant assumptions, jurisdiction, facility, disposition scope, metric definitions used, source lineage, refresh timestamps, confidence posture, systems consulted, and unresolved items
  - record whether the request involved missing authority, price-disclosure evidence, death-registration state, cremation authorization, cemetery or crematory records, complaint handling, policy exception, unsupported trend, or source-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry funeral-cemetery-and-end-of-life-services --agent funeral-services-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed funeral services analytics specialist for metric definition, funeral workflow reporting, source reconciliation, service-resolution notes, stakeholder communication summaries, and escalation-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, jurisdiction, reporting period, disposition method, case cohort, requested audience, publication context, and whether the request touches complaints, pricing, vital records, cremation, cemetery records, benefits, or family-facing communication
  - boundary metadata identifying licensed funeral director or embalmer, arrangement, documentation, crematory, cemetery, vital-record, compliance, benefits, billing, privacy, legal, safety, and policy-approval owners
  - retrieval dependencies for funeral home case management, EDRS or vital-record portals, document repository, crematory tracking, cemetery management, preneed administration, CRM, complaint, aftercare, accounting, and reporting warehouse records
  - tenant overlays for metric dictionary, source precedence, disposition-path taxonomy, Funeral Rule evidence handling, arrangement completion definition, complaint taxonomy, publication approvals, retention policy, privacy constraints, and escalation thresholds
- Regulated-lane caveats:
  - public FTC and eCFR sources constrain Funeral Rule disclosure, statement, embalming, and recordkeeping evidence but do not replace state, jurisdiction, or tenant-specific requirements
  - CDC/NCHS and state workflow references support death-registration and permit status analysis but do not grant authority to amend official records, certify cause or manner of death, or issue permits
  - Conference and CANA references sharpen disposition, cremation, identification, custody, and release terminology but cannot substitute for licensed owner, crematory, cemetery, or local legal authority
  - runtime must refuse or return to orchestrator whenever legal right of disposition, licensed preparation, cemetery or crematory authority, benefit adjudication, price or refund approval, privacy approval, safety disposition, compliance signoff, policy exception, or external disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, functionality coverage, research source freshness dates, and audit pass status.

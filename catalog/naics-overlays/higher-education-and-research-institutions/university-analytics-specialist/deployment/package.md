# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route university analytics work into a spec-first specialist with retrieval, privacy, consent, approval, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant SIS, LMS, degree-audit, schedule, faculty workload, assessment, accreditation, research administration, IRB, grants, warehouse, and document-system credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for student information, learning management, degree audit, transcript, course catalog, curriculum, scheduling, faculty workload, assessment, accreditation, research administration, IRB, grants, document management, and institutional data warehouse systems
  - escalation targets for registrar, faculty review, accreditation, grants, research compliance, privacy, legal, institutional research, academic affairs, and disclosure owners
  - tenant metric dictionaries, census-date rules, cohort definitions, source-precedence rules, small-cell suppression policy, publication approval chain, program governance rules, consent handling rules, and official evaluation boundaries

## Isolation

- Tenant boundary: no cross-tenant sharing of learner, faculty, program, course, assessment, accreditation, grant, study, consent, participant, source-lineage, or reporting outputs.
- Knowledge boundary: FERPA, Department of Education, NCES, HHS/OHRP, OMB, accreditation, and SEC public baselines are shared; tenant policies, metric dictionaries, source hierarchy, suppression thresholds, and approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, source hierarchy overlays, connector mappings, suppression-policy overlays, reporting templates, audience-specific output wrappers, and cadence settings
  - prohibited: widening the lane into grading authority, official registrar decisions, faculty review, instructional quality judgments, accreditation signoff, grant approval, research ethics decisions, consent validity determinations, privacy disclosures, policy overrides, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, cohort and denominator overrides, source hierarchy, refresh timestamps, caveats, confidence posture, suppression handling, blocked prerequisites, source conflicts, consent issues, official evaluation blockers, and disclosure-risk escalations
  - alert on stale source reviews, repeated attempts to publish unresolved cohort definitions, repeated requests for unsupported causal or policy claims, and recurring conflicts between SIS, LMS, degree audit, accreditation, grant, or research administration records
  - monitor for requests that incorrectly seek direct grading, instructional, registrar, ethics, accreditation, grant, privacy, legal, or disclosure authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, audience, cadence, confidence posture, program or cohort scope, systems of record consulted, and caveats applied
  - record whether the request involved ambiguous definitions, missing facts, source conflict, learner-record privacy, consent, study data, official evaluation, small-cell disclosure, accreditation evidence, grant records, or adjacent-authority handling
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry higher-education-and-research-institutions --agent university-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed university analytics specialist for metric definition, higher-education reporting, reconciliation packaging, privacy and consent caveats, and disclosure-safe escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying institution, campus, college, department, program, CIP code, credential level, modality, term, census date, cohort, reporting period, audience, cadence, requested metric set, and publication context
  - boundary metadata identifying registrar, faculty review, accreditation, grants, research compliance, privacy, legal, institutional research, academic affairs, and disclosure owners
  - retrieval dependencies for SIS, LMS, degree audit, transcript, course catalog, curriculum, schedule, faculty workload, assessment, accreditation, research administration, IRB, grants, document management, data warehouse, prior scorecard, and metric dictionary records
  - tenant overlays for cohort rules, source precedence, small-cell suppression, privacy access, consent use, official evaluation status, grant and study approvals, accreditation evidence, reporting cadence, caveat standards, and publication approval criteria
- Regulated-lane caveats:
  - public FERPA and Department of Education sources constrain learner-record access, disclosure, and reporting posture but do not replace tenant-specific privacy, directory-information, public-record, or state-law rules
  - IPEDS, College Scorecard, CIP, and CEDS define public baselines and terminology, but tenant metric dictionaries may narrow reporting as long as adaptations are explicit and noncomparability is caveated
  - Common Rule, OHRP, and IRB context constrain study-linked analytics, but this lane cannot decide ethics approval, consent validity, or protocol continuation
  - accreditation and grant sources define evidence and approval boundaries; runtime must refuse or return to orchestrator whenever accreditation signoff, grant approval, legal interpretation, or formal disclosure authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and the absence of trusted-runtime claims.

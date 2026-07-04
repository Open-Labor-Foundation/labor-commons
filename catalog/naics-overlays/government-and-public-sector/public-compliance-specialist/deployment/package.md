# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route government and public-sector public-compliance work into a spec-first specialist with retrieval, boundary, and escalation metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Required secrets: none in the package itself; tenant case, records, procurement, permits, grants, public-service administration, document management, GRC, audit, financial, privacy, and transparency systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for case management, records management, procurement, permits, grants, public-service administration, document management, GRC, audit, financial, identity, and transparency systems
  - tenant maps for jurisdiction, statute, program, agency policy, public-service model, service population, records schedule, public-records rule, privacy rule, procurement authority, grant authority, notice and appeal constraints, control owners, review cadence, and escalation owners
  - escalation targets for legal, program adjudication, public records, procurement, audit, privacy, finance, enforcement, safety-critical review, and executive policy approval

## Materialization Requirements

- Task metadata: industry overlay, agent slug, workflow phase group, target delivery level, runtime strategy, validation profile, required output shape, affected jurisdiction, agency, program, statute, service population, case type, procurement or grant scope, records scope, and system-of-record context.
- Boundary metadata: no legal advice, no regulator negotiation, no formal certification, no official adjudication, no enforcement finding, no public-records release or redaction determination, no procurement award, no audit opinion, no financial approval, no policy override, and no bypass of due-process, records, procurement, transparency, privacy, audit, or authority controls.
- Tenant-supplied assumptions:
  - jurisdiction, agency, program, statute, public-service model, service population, benefit, permit, case type, procurement type, funding source, applicable policy hierarchy, source hierarchy, and official authority boundaries
  - current systems of record, record locations, retrieval hooks, record owners, approval thresholds, records schedules, public-records rules, privacy constraints, notice and appeal rules, review cadence, and service-level commitments
  - tenant policy hierarchy, local ordinances, agency manuals, source precedence rules, procurement and grant authority maps, finance authority maps, and escalation owners
- Regulated-lane caveats: the specialist can prepare evidence-backed recommendations and escalation packets only. It cannot certify compliance, decide eligibility, approve adverse actions, issue enforcement findings, release public records, approve redactions, award vendors, authorize funds, issue audit opinions, or override public policy controls.
- Orchestrator return conditions: missing required facts, stale or conflicting evidence, unresolved source hierarchy, requests for formal authority, rights-sensitive decisions, public-records or privacy determinations, procurement or grant approvals, financial approvals, audit opinions, and policy conflicts that materially affect compliance posture.

## Isolation

- Tenant boundary: no cross-tenant sharing of case files, eligibility records, permits, notices, appeal records, procurement files, grant records, records schedules, public-records requests, privacy flags, audit findings, control matrices, agency policies, local ordinances, authority maps, or public-service decision histories.
- Knowledge boundary: APA, FOIA, Privacy Act, NARA, FAR, 2 CFR Part 200, OMB, and GAO public baselines are shared; tenant statutes, local policies, agency manuals, source hierarchy, records schedules, authority maps, systems-of-record mappings, and official decisions are injected only at request time.
- Adaptation policy:
  - allowed: tenant terminology, program names, systems-of-record connectors, control maps, records schedules, review cadence, owner maps, local ordinance overlays, and public-records or privacy routing metadata
  - prohibited: widening the lane into legal interpretation, formal certification, official adjudication, enforcement, public-records release determination, procurement award, grant award, audit opinion, financial approval, policy override, or unsupported control closure

## Operations

- Monitoring:
  - log dispatch decisions, missing-evidence outcomes, source conflicts, rights-sensitive escalations, public-records boundary outputs, procurement evidence gaps, records-control failures, and low-confidence returns
  - alert on stale source reviews, recurring missing case-file or notice evidence, repeated records-management bypasses, procurement file gaps, privacy-sensitive requests, and requests for legal, adjudicative, enforcement, public-records, audit, procurement, financial, or executive authority
  - monitor requests that incorrectly seek official agency action or final signoff from the lane
- Logging:
  - record release version, source baseline version, tenant assumptions, affected jurisdiction and program context, affected case or procurement context, missing evidence, confidence caveats, and routed owners
  - record whether the request involved obligation mapping, evidence readiness, review preparation, eligibility or rights-sensitive exception, public-records boundary, procurement file gap, records-control bypass, policy conflict, or authority-boundary handling
- Rollback path:
  - disable the current specialist release
  - route public compliance requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle or remove this spec pack from routing
  - re-run spec-pack audit and package validation before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed government and public-sector public compliance specialist for obligation mapping, control evidence readiness, official-record and audit-trail handling, records and procurement evidence, due-process escalation, and review preparation.
- Health checks should confirm manifest load success, required artifact presence, source freshness dates, scenario coverage, functional coverage, readiness evidence, and package audit success.
- Runtime prompts should explicitly remind the lane that it owns compliance evidence handling and escalation only, not legal interpretation, formal certification, regulator-facing action, official adjudication, enforcement, public-records determination, procurement award, audit opinion, financial approval, policy override, or executive authority.

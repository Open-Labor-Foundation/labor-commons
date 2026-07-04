# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route licensed-provider coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant booking, provider-roster, credential, document, CRM, incident, and med-spa workflow credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for booking, provider-roster, credentialing, consultation, consent, incident, and med-spa workflow systems
  - escalation targets for spa operations, licensed providers, medical-spa leadership, credentialing or compliance, and incident owners
  - tenant authority maps for provider assignment, supervision, standing orders, consultation and consent requirements, incident escalation, and handoff acceptance rules

## Isolation

- Tenant boundary: no cross-tenant sharing of guest records, provider rosters, credential status, consultation forms, consents, incident notes, or med-spa supervision artifacts.
- Knowledge boundary: TDLR, California Board, ISPA, FSMTB, and Massachusetts public baselines are shared; tenant SOPs, service menus, provider rosters, owner maps, and supervision rules are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, artifact templates, system connector mappings, destination-owner registries, and facility-specific handoff checklists
  - prohibited: widening the lane into provider-practice approval, clinical judgment, credentialing signoff, direct scheduling execution, or incident adjudication

## Operations

- Monitoring:
  - log handoff decisions, blocked dependencies, owner overlaps, provider-boundary escalations, supervision conflicts, and closure confirmations
  - alert on stale source reviews, repeated attempts to bypass provider, consent, or supervision controls, repeated ownership ambiguity, and recurring safety-sensitive escalations routed through this lane
  - monitor for requests that incorrectly seek direct provider assignment, treatment approval, or incident signoff from the lane
- Logging:
  - record release version, tenant assumptions, prior owner, next owner, required artifacts, blocker state, service category, facility type, and systems of record consulted
  - record whether the request involved missing prerequisites, duplicated ownership, service-category mismatch, provider-boundary handling, supervision conflict, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry beauty-wellness-and-personal-care --agent licensed-provider-coordination-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed coordination specialist for provider handoffs, blocker escalation, routing discipline, and closure confirmation across beauty, wellness, and personal-care provider workflows.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, service category, appointment or work item, provider type, and requested coordination outcome
  - boundary metadata identifying spa operations, front desk, licensed-provider, medical-spa, credentialing, compliance, and incident owners
  - retrieval dependencies for booking, provider-roster, credential, consultation, consent, incident, and supervision records
  - tenant overlays for provider-assignment authority, service-menu constraints, standing-order or supervision rules, consultation and consent rules, and closure criteria
- Regulated-lane caveats:
  - public state-board and medical-spa sources directly constrain provider-boundary behavior, but tenants still must supply jurisdiction-specific overlays before fully specific operational use
  - recognized ISPA and FSMTB sources clarify workflow and terminology but do not replace tenant SOPs or medical-spa approval matrices
  - runtime must refuse or return to orchestrator whenever provider-practice, clinical, supervision, incident, or policy-conflict resolution authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

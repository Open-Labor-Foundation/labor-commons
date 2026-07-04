# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route facilities compliance work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for CMMS, permitting, inspection, safety, vendor, scheduling, and document systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for CMMS or work order, permitting, inspection, safety or impairment, contractor credential, scheduling, and closeout systems
  - escalation targets for project controls, permitting, inspection, safety, legal, superintendent, and licensed trade owners
  - tenant authority maps for permit classes, inspection ownership, impairment rules, return-to-service criteria, sign-off boundaries, and policy exception owners

## Isolation

- Tenant boundary: no cross-tenant sharing of work orders, permits, inspection comments, site logs, contractor qualifications, impairment records, or closeout packages.
- Knowledge boundary: public OSHA, NYC DOB, GSA, and WBDG baselines are shared; tenant CMMS records, approval maps, local permit workflows, contract controls, and sign-off policies are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, document templates, connector mappings, approved escalation targets, and tenant-specific permit, impairment, or evidence checklists
  - prohibited: widening the lane into legal advice, permit approval, code interpretation, licensed-trade signoff, financial approval, or direct field execution

## Operations

- Monitoring:
  - log evidence-gap decisions, permit blockers, inspection blockers, impairment escalations, owner disputes, and formal-signoff refusals
  - alert on repeated attempts to bypass work-order evidence, permit gates, inspection hold points, contractor qualification checks, or closeout controls
  - monitor recurring low-confidence cases caused by missing jurisdiction context, missing record locations, or stale source baselines
- Logging:
  - record release version, tenant assumptions, facility and asset context, work-order identifiers, jurisdiction, permit posture, inspection dependencies, impairment posture, and evidence references
  - record whether the request involved missing evidence, changed site conditions, owner disputes, policy conflicts, or out-of-scope authority requests
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry facilities-services-and-building-operations --agent facilities-compliance-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed facilities compliance specialist for work-order, permit, inspection, impairment, contractor qualification, and closeout readiness support.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, asset, work order, trade or service scope, jurisdiction, permit class, inspection posture, and requested compliance outcome
  - boundary metadata identifying permitting, inspection, safety, legal, superintendent, project-controls, and licensed-trade owners
  - retrieval dependencies for CMMS records, permit portals, inspection systems, safety or impairment logs, contractor qualification systems, scheduling systems, and document-control repositories
  - tenant overlays for approval rules, impairment procedures, return-to-service criteria, evidence upload rules, permit-closeout practice, and formal signoff boundaries
- Regulated-lane caveats:
  - public permit and inspection workflow varies by jurisdiction, so runtime must retrieve the local authority context before making permit-sensitive recommendations
  - maintenance-versus-construction classification can change the governing baseline and adjacent owner set, so runtime must know the actual delivery model
  - runtime must refuse or return to orchestrator whenever legal interpretation, regulator-facing communication, permit approval, code interpretation, inspection signoff, final acceptance, or licensed-trade authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

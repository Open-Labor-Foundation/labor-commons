# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route project-procurement work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for ERP, procurement, vendor, permitting, inspection, inventory, and safety systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for project management, work order, ERP or procurement, vendor, inventory, permitting, inspection, safety, and document systems
  - escalation targets for project controls, permitting, inspection, safety, superintendent, finance approval, and licensed trade owners
  - tenant authority maps for spend approval, approved-vendor rules, substitution limits, release-to-site criteria, permit classes, and closeout criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of work orders, project schedules, permits, inspection comments, vendor terms, inventory states, or closeout packages.
- Knowledge boundary: public OSHA, FEMA, GSA, SDCI, and WBDG baselines are shared; project controls, approved-vendor lists, contract terms, spend thresholds, and jurisdiction overlays are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, document templates, connector mappings, approved escalation targets, and tenant-specific site-readiness checklists
  - prohibited: widening the lane into financial approval, code interpretation, licensed-trade signoff, permit issuance, inspection approval, or direct field execution

## Operations

- Monitoring:
  - log availability decisions, shortage escalations, vendor delays, permit gaps, inspection blockers, safety-driven refusals, and closeout blockers
  - alert on repeated attempts to bypass spend approval, approved-vendor controls, permit gates, or inspection hold points
  - monitor recurring vendor-risk patterns, repeated inventory-traceability gaps, and repeated requests that misroute superintendent or trade work into this lane
- Logging:
  - record release version, tenant assumptions, work-order scope, jurisdiction, permit posture, inspection dependencies, vendor posture, and evidence references
  - record whether the request involved shortage, substitution pressure, incomplete inventory evidence, closeout blockers, or policy conflicts
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry construction-and-field-services --agent procurement-for-projects-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed construction procurement readiness specialist for project supply status, vendor constraint handling, and prerequisite-aware escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying site, work order, trade, schedule milestone, requested material action, and current shortage or vendor concern
  - boundary metadata identifying finance approval, procurement ownership, superintendent, permitting, inspection, safety, and licensed trade owners
  - retrieval dependencies for procurement logs, approved vendor data, inventory records, permitting portals, inspection systems, project schedules, and closeout documents
  - tenant overlays for approved-vendor controls, contract and spend rules, substitution policy, release-to-site criteria, jurisdiction-specific permit processes, and final closeout gates
- Regulated-lane caveats:
  - public permit and inspection workflow varies by jurisdiction, so runtime must retrieve the local authority context before making permit-sensitive recommendations
  - public grant-procurement rules do not automatically apply to private projects; runtime must know project funding and contract context
  - runtime must refuse or return to orchestrator whenever financial approval, code interpretation, permit approval, safety judgment, inspection signoff, or licensed-trade authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route commercial-and-industrial-construction procurement work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for ERP, procurement, vendor, permitting, inspection, inventory, safety, and document systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for project management, work order, ERP or procurement, vendor, inventory, permitting, inspection, safety, and document systems
  - escalation targets for project controls, permitting, inspection, safety, superintendent, finance approval, and licensed trade owners
  - tenant authority maps for spend approval, approved-supplier rules, substitution limits, material-on-site rules, permit classes, inspection hold points, and closeout criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of work orders, project schedules, permits, inspection comments, supplier terms, inventory states, or turnover packages.
- Knowledge boundary: public OSHA, FEMA, NYC DOB, GSA, and WBDG baselines are shared; project controls, approved-supplier lists, contract terms, spend thresholds, and jurisdiction overlays are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, document templates, connector mappings, approved escalation targets, and tenant-specific site-readiness checklists
  - prohibited: widening the lane into financial approval, code interpretation, licensed-trade signoff, permit issuance, inspection approval, or direct field execution

## Operations

- Monitoring:
  - log availability decisions, shortage escalations, supplier delays, permit gaps, inspection blockers, safety-driven refusals, and closeout blockers
  - alert on repeated attempts to bypass spend approval, approved-supplier controls, permit gates, or inspection hold points
  - monitor recurring supplier-risk patterns, repeated inventory-traceability gaps, and repeated requests that misroute superintendent or trade work into this lane
- Logging:
  - record release version, tenant assumptions, work-order scope, jurisdiction, permit posture, inspection dependencies, supplier posture, and evidence references
  - record whether the request involved shortage, substitution pressure, incomplete inventory evidence, closeout blockers, or policy conflicts
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry commercial-and-industrial-construction --agent commercial-procurement-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed commercial-and-industrial-construction procurement readiness specialist for supply status, supplier constraint handling, and prerequisite-aware escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying site, work order, trade, schedule milestone, requested material action, and current shortage or supplier concern
  - boundary metadata identifying finance approval, procurement ownership, superintendent, permitting, inspection, safety, and licensed trade owners
  - retrieval dependencies for procurement logs, approved supplier data, inventory records, permitting portals, inspection systems, project schedules, and turnover documents
  - tenant overlays for approved-supplier controls, contract and spend rules, substitution policy, material-on-site criteria, jurisdiction-specific permit processes, and final closeout gates
- Regulated-lane caveats:
  - public permit and inspection workflow varies by jurisdiction, so runtime must retrieve the local authority context before making permit-sensitive recommendations
  - public-funding procurement rules do not automatically apply to private projects; runtime must know project funding and contract context
  - runtime must refuse or return to orchestrator whenever financial approval, code interpretation, permit approval, safety judgment, inspection signoff, or licensed-trade authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

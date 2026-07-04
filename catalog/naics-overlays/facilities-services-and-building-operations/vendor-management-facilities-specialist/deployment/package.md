# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route facilities vendor-management work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for CMMS, field service, ERP, vendor, inventory, permitting, inspection, and safety systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for CMMS or work order, ERP or procurement, vendor, inventory, permitting, inspection, safety, and document systems
  - escalation targets for project controls, permitting, inspection, safety, facilities management, finance approval, and licensed trade owners
  - tenant authority maps for spend approval, approved-vendor rules, substitution limits, outage approvals, release-to-service criteria, permit classes, and closeout requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of work orders, outage plans, permits, inspection comments, vendor terms, inventory states, or closeout packages.
- Knowledge boundary: public OSHA, GSA, SDCI, NYC DOB, and WBDG baselines are shared; tenant CMMS records, approved-vendor lists, contract terms, spend thresholds, outage procedures, and jurisdiction overlays are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, document templates, connector mappings, approved escalation targets, and tenant-specific outage or release checklists
  - prohibited: widening the lane into financial approval, code interpretation, licensed-trade signoff, permit issuance, inspection approval, or direct field execution

## Operations

- Monitoring:
  - log availability decisions, shortage escalations, vendor delays, permit gaps, inspection blockers, safety-driven refusals, outage conflicts, and return-to-service blockers
  - alert on repeated attempts to bypass spend approval, approved-vendor controls, permit gates, inspection hold points, or release-to-service controls
  - monitor recurring vendor-risk patterns, repeated inventory-traceability gaps, and repeated requests that misroute licensed-trade or design work into this lane
- Logging:
  - record release version, tenant assumptions, work-order scope, asset context, jurisdiction, permit posture, inspection dependencies, outage posture, vendor posture, and evidence references
  - record whether the request involved shortage, substitution pressure, incomplete inventory evidence, closeout blockers, safety conditions, or policy conflicts
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry facilities-services-and-building-operations --agent vendor-management-facilities-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed facilities vendor-management specialist for maintenance supply status, vendor constraint handling, permit and inspection-aware dispatch readiness, and outage or return-to-service escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, asset, work order, trade, outage window, requested vendor action, and current shortage or vendor concern
  - boundary metadata identifying finance approval, facilities-management ownership, permitting, inspection, safety, and licensed trade owners
  - retrieval dependencies for CMMS records, approved vendor data, inventory records, permitting portals, inspection systems, outage calendars, safety logs, and closeout documents
  - tenant overlays for approved-vendor controls, contract and spend rules, substitution policy, outage approvals, jurisdiction-specific permit processes, manufacturer conditions, and return-to-service criteria
- Regulated-lane caveats:
  - public permit and inspection workflow varies by jurisdiction, so runtime must retrieve the local authority context before making permit-sensitive recommendations
  - public federal contract-administration guidance does not automatically override private owner contract controls; runtime must know funding, contract, and warranty context
  - runtime must refuse or return to orchestrator whenever financial approval, code interpretation, permit approval, safety judgment, inspection signoff, return-to-service approval, or licensed-trade authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route CPG manufacturing-execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier-management, planning, and traceability systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, planning, and product master-data systems
  - escalation targets for quality, engineering, procurement, supplier-quality, inventory, and logistics owners
  - tenant-specific maps for release authority, hold codes, deviation handling, co-manufacturer routing, substitution rules, and retailer-specific pallet or labeling requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of launch orders, production orders, lot histories, inventory reservations, deviation records, supplier files, or customer-specific routing requirements.
- Knowledge boundary: FDA, eCFR, and GS1 public baselines are shared; tenant SOPs, line rules, release authority maps, supplier-approval matrices, and retailer routing overlays are injected only at request time.
- Adaptation policy:
  - allowed: plant terminology, line-state codes, co-manufacturer routing, product-family overlays, pallet-labeling conventions, and systems-of-record connectors
  - prohibited: widening the lane into engineering approval, final quality release, supplier approval, legal interpretation, or undocumented quality-control bypasses

## Operations

- Monitoring:
  - log lifecycle-state transitions, blocked launches, rework loops, completion evidence records, and low-confidence returns
  - alert on repeated traceability mismatches, attempts to bypass quality or release controls, recurring supplier substitution pressure, and stale source reviews
  - monitor for requests that incorrectly seek engineering, supplier-approval, or regulatory-signoff authority from the lane
- Logging:
  - record release version, tenant assumptions, plant and line context, SKU and lot scope, missing evidence, and routed owners
  - record whether the request involved normal progression, blocked start, hold escalation, rework, completion review, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route CPG launch execution requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-packaged-goods --agent cpg-launch-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed CPG launch specialist for production-order progression, lot-aware readiness review, blocked-work handling, completion evidence capture, and throughput or supplier escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, SKU or pack, launch order, production order, and requested disposition
  - boundary metadata identifying quality, engineering, supplier-quality, procurement, inventory, and logistics owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier, planning, and master-data records
  - tenant overlays for release authority, quality hold rules, co-manufacturer ownership, substitution constraints, and downstream retailer routing
- Regulated-lane caveats:
  - FDA food traceability and preventive-controls sources directly govern food CPG lines; non-food tenants must supply equivalent product-safety overlays
  - public source timing for food traceability compliance may require tenant regulatory confirmation when the January 20, 2026 versus proposed July 20, 2028 date difference changes obligations
  - runtime must refuse or return to orchestrator when quality release, supplier approval, engineering signoff, or regulatory interpretation is required
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

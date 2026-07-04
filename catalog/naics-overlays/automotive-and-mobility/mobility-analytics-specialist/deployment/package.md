# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route automotive-and-mobility analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, planning, logistics, warranty, and traceability credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, planning, logistics, warranty, field-quality, and reporting systems
  - escalation targets for quality, production planning, inventory, procurement, supplier quality, logistics, engineering, safety, legal, and disclosure owners
  - tenant metric dictionaries, source-precedence rules, hold and release logic, supplier approval flow, change-control rules, customer-specific requirements, and publication approval matrices

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, VIN genealogy, part or lot lineage, inventory states, quality records, supplier files, campaign lists, or reporting outputs.
- Knowledge boundary: IATF, AIAG, GS1, NHTSA, APQC, and SEC public baselines are shared; plant SOPs, OEM customer-specific requirements, KPI definitions, release authority maps, and disclosure approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, artifact templates, system connector mappings, audience-specific output wrappers, and plant or program-specific reporting cadence settings
  - prohibited: widening the lane into final release authority, supplier approval, engineering disposition, safety-defect interpretation, recall decisioning, policy override, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, traceability conflicts, quality-hold escalations, supplier-boundary escalations, and disclosure-risk notes
  - alert on stale source reviews, repeated attempts to count held inventory as released, repeated requests for unsupported causal or disclosure claims, and recurring source-precedence conflicts
  - monitor for requests that incorrectly seek supplier approval, shipment release, recall signoff, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, confidence posture, VIN or part context, and systems-of-record consulted
  - record whether the request involved ambiguous definitions, missing facts, traceability conflict, quality hold, supplier boundary handling, unsupported claims, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry automotive-and-mobility --agent mobility-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed automotive and mobility analytics specialist for metric-definition, VIN and part-aware reporting, reconciliation packaging, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, network, program, vehicle family, reporting period, jurisdiction, VIN or part scope, and requested analysis audience
  - boundary metadata identifying quality, production planning, inventory, procurement, supplier quality, logistics, engineering, safety, legal, and disclosure owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier records, traceability logs, campaign lists, warranty trends, reporting dictionaries, and prior scorecards
  - tenant overlays for metric definitions, source precedence, hold posture, release logic, supplier approval flow, substitution rules, customer-specific requirements, and external publication approval criteria
- Regulated-lane caveats:
  - public NHTSA sources directly govern the U.S. recall and safety-reporting baseline; tenants operating under additional UNECE, EU, UK, Transport Canada, or customer-contract regimes must supply the applicable overlay at runtime
  - public IATF, AIAG, and GS1 sources clarify automotive quality, materials, and traceability discipline but do not replace tenant SOPs, KPI dictionaries, PPAP or change-control rules, or approval matrices
  - runtime must refuse or return to orchestrator whenever release authority, safety interpretation, recall action, supplier approval, engineering disposition, or disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

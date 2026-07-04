# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route food-and-beverage analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, planning, logistics, and reporting credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, planning, logistics, and reporting systems
  - escalation targets for quality, planning, inventory, procurement, supplier-quality, engineering, legal, and disclosure owners
  - tenant metric dictionaries, source-precedence rules, hold and release logic, supplier approval flow, and publication approval matrices

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, lot genealogy, inventory states, quality records, supplier files, change controls, traceability logs, or reporting outputs.
- Knowledge boundary: FDA, eCFR, GS1, SQFI, and SEC public baselines are shared; plant SOPs, KPI definitions, release authority maps, customer scorecard rules, and disclosure approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, artifact templates, system connector mappings, audience-specific output wrappers, and plant-specific reporting cadence settings
  - prohibited: widening the lane into final release authority, supplier approval, engineering disposition, policy override, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, traceability conflicts, quality-hold escalations, supplier-boundary escalations, and disclosure-risk notes
  - alert on stale source reviews, repeated attempts to count held inventory as released, repeated requests for unsupported causal or disclosure claims, and recurring source-precedence conflicts
  - monitor for requests that incorrectly seek direct approval or publication authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, confidence posture, lot or batch context, and systems-of-record consulted
  - record whether the request involved ambiguous definitions, missing facts, traceability conflict, quality hold, supplier boundary handling, unsupported claims, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-and-beverage-manufacturing --agent food-and-beverage-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed food-and-beverage analytics specialist for metric-definition, lot-aware reporting, reconciliation packaging, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, product family, reporting period, market, lot or batch scope, and requested analysis audience
  - boundary metadata identifying quality, planning, inventory, procurement, supplier-quality, engineering, legal, and disclosure owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier records, traceability logs, reporting dictionaries, and prior scorecards
  - tenant overlays for metric definitions, source precedence, hold posture, release logic, supplier approval flow, substitution rules, and external publication approval criteria
- Regulated-lane caveats:
  - public FDA sources directly govern food-and-beverage manufacturing lines subject to FDA oversight; tenants with USDA-, TTB-, or other product-specific regimes must supply the applicable overlay at runtime
  - public GS1, SQFI, and SEC sources clarify traceability, operating terminology, and disclosure discipline but do not replace tenant SOPs, KPI dictionaries, or approval matrices
  - runtime must refuse or return to orchestrator whenever release authority, safety, recall, supplier approval, engineering disposition, or disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

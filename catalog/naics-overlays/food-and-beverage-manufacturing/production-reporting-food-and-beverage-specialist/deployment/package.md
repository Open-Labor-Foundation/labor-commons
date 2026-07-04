# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route food-and-beverage production reporting work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, planning, traceability, and reporting-system credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier management, planning, traceability, and reporting systems
  - escalation targets for quality, production planning, inventory, procurement, supplier quality, logistics, engineering, legal, and disclosure owners
  - tenant metric dictionaries, reporting calendar, source-precedence rules, release authority matrix, hold-code meanings, customer reporting rules, substitution constraints, rework rules, and publication approval chain

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, batch records, lot genealogy, hold records, supplier files, traceability logs, customer commitments, or reporting outputs.
- Knowledge boundary: FDA, eCFR, GS1, ISA, SQFI, and SEC public baselines are shared; tenant SOPs, KPI dictionaries, source-precedence rules, release maps, hold logic, customer commitments, and approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, connector mappings, report templates, audience-specific output wrappers, and reporting-calendar settings
  - prohibited: widening the lane into final release authority, engineering approval, supplier approval, rework disposition, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, batch-close gaps, traceability gaps, hold and release caveats, supplier escalations, and unsupported-claim refusals
  - alert on stale source reviews, repeated attempts to count held or unreleased product as released output, repeated requests for unsupported causal or disclosure claims, and recurring source-precedence conflicts
  - monitor for requests that incorrectly seek direct quality, engineering, supplier-approval, or disclosure authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, confidence posture, plant and line scope, product family, and systems-of-record consulted
  - record whether the request involved ambiguous definitions, missing facts, source conflict, traceability handling, quality holds, supplier nonconformance, engineering boundary handling, or customer-facing disclosure sensitivity
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-and-beverage-manufacturing --agent production-reporting-food-and-beverage-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed production reporting specialist for food-and-beverage manufacturing metrics, reconciliation, traceability-aware reporting, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, product family, batch or lot scope, reporting period, requested audience, and whether the request touches holds, release, supplier issues, or customer commitments
  - boundary metadata identifying quality, production planning, inventory, procurement, supplier quality, logistics, engineering, legal, and disclosure owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier, planning, traceability, and reporting records plus prior scorecards, metric dictionaries, and publication checklists
  - tenant overlays for reporting calendar, source precedence, yield and OEE definitions, released-output rules, hold and release logic, substitution limits, rework rules, and publication approval criteria
- Regulated-lane caveats:
  - public FDA and eCFR sources directly govern most human-food manufacturing lines; tenants outside that scope must supply equivalent product-safety overlays when they materially change the answer
  - GS1, ISA-95, SQFI, and SEC sources constrain traceability, system semantics, nonconformance handling, and disclosure posture but do not replace tenant batch records, SOPs, customer specifications, or authority maps
  - runtime must refuse or return to orchestrator whenever final quality release, supplier approval, engineering or process approval, rework disposition, recall command, or disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.

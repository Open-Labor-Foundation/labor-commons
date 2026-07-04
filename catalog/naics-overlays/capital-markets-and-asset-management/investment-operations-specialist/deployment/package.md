# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route investment-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant OMS, EMS, CTM, custody, transfer, asset-servicing, reconciliation, and approval systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for trade blotters, allocation and affirmation systems, SSI repositories, custody and transfer platforms, corporate-action systems, and general ledger or reconciliation records
  - escalation targets for trading, portfolio, treasury approvals, fund accounting, legal or compliance, and client-service leadership
  - tenant-specific maps for cutoffs, approval thresholds, account authority, product restrictions, and custodian or event-owner controls

## Isolation

- Tenant boundary: no cross-tenant sharing of trade, custody, transfer, settlement, event, or approval data.
- Knowledge boundary: public SEC, FINRA, and DTCC baselines are shared; tenant procedures, cutoffs, client authority, account mappings, and internal ownership maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product dictionaries, system connectors, approval maps, custodian mappings, SSI sources, and jurisdiction overlays
  - prohibited: widening the lane into portfolio management, trade instruction authority, legal interpretation, treasury approval, or issuer-election decision ownership

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, exception queue entries, completion-evidence records, and escalations
  - alert on stale source reviews, repeated affirmation failures, repeated SSI mismatches, settlement fails, repeated override requests, and recurring corporate-action or reconciliation escalations
  - monitor requests that incorrectly seek trading, portfolio, legal, tax, or approval authority from the lane
- Logging:
  - record release version, tenant assumptions, account or transaction identifiers, affected workflow type, missing evidence, and routed owners
  - record whether the request involved allocations, affirmations, SSI validation, custody transfer, settlement, corporate actions, income processing, or reconciliation
- Rollback path:
  - disable the current specialist release
  - route investment-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed investment-operations specialist for post-trade progression, custody and transfer handling, settlement blockers, corporate-action processing, reconciliation exceptions, and escalation packaging.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns operational handling and escalation only, not portfolio decisions, trading discretion, legal interpretation, or approval overrides.

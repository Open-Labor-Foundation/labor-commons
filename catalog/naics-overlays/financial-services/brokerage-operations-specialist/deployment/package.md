# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route brokerage-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant broker-dealer, transfer, cashiering, settlement, reconciliation, and fraud systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for account master records, transfer systems, cashiering platforms, trade-support and settlement systems, general ledger, and AML or fraud systems
  - escalation targets for fraud, AML, legal or compliance, servicing operations, and approval owners
  - tenant-specific maps for approval thresholds, callback rules, product restrictions, customer-contact controls, and hold authority

## Isolation

- Tenant boundary: no cross-tenant sharing of account data, trade records, transfer forms, cashiering instructions, settlement records, communication logs, fraud indicators, or approval histories.
- Knowledge boundary: public FINRA, SEC, and DTCC baselines are shared; tenant procedures, product restrictions, callback scripts, approval matrices, and customer data are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product dictionaries, system connectors, approval maps, callback steps, and jurisdiction overlays
  - prohibited: widening the lane into advisory recommendations, underwriting judgments, legal interpretation, final fraud adjudication, or unauthorized approval authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, exception queue entries, completion-evidence records, and escalations
  - alert on stale source reviews, repeated transfer rejects, repeated callback-control bypass requests, repeated settlement breaks, and recurring fraud or AML escalations
  - monitor requests that incorrectly seek advisory, underwriting, legal, or approval authority from the lane
- Logging:
  - record release version, tenant assumptions, account or transaction identifiers, affected workflow type, missing evidence, and routed owners
  - record whether the request involved account maintenance, transfer processing, cashiering, confirmations, settlement, reconciliation, or fraud or AML escalation
- Rollback path:
  - disable the current specialist release
  - route brokerage-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed brokerage-operations specialist for account maintenance, transfers, cashiering, trade-support exceptions, confirmation handling, settlement blockers, reconciliation exceptions, and client-protection escalation packaging.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns operational handling and escalation only, not investment advice, underwriting, legal interpretation, final compliance signoff, or approval overrides.

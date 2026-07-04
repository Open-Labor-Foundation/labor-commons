# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route wealth-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant custody, broker-dealer, cashiering, reconciliation, and fraud systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for account records, transfer systems, cashiering platforms, custody records, general ledger, and AML or fraud systems
  - escalation targets for fraud, AML, legal or compliance, treasury approvals, and client-service leadership
  - tenant-specific maps for approval thresholds, callback rules, product restrictions, client-contact controls, and hold authority

## Isolation

- Tenant boundary: no cross-tenant sharing of account data, transfer forms, disbursement instructions, settlement records, communication logs, fraud indicators, or approval histories.
- Knowledge boundary: public SEC, FINRA, FinCEN, and DTCC baselines are shared; tenant procedures, product restrictions, callback scripts, approval matrices, and client data are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product dictionaries, system connectors, approval maps, callback steps, and jurisdiction overlays
  - prohibited: widening the lane into advisory recommendations, legal interpretation, final fraud adjudication, or unauthorized approval authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, exception queue entries, completion-evidence records, and escalations
  - alert on stale source reviews, repeated transfer rejects, repeated settlement breaks, repeated override requests, and recurring fraud or client-protection escalations
  - monitor requests that incorrectly seek advisory, legal, or approval authority from the lane
- Logging:
  - record release version, tenant assumptions, account or transaction identifiers, affected workflow type, missing evidence, and routed owners
  - record whether the request involved transfer processing, money movement, settlement, reconciliation, custody controls, or fraud or AML escalation
- Rollback path:
  - disable the current specialist release
  - route wealth-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed wealth-operations specialist for transfers, disbursements, settlement blockers, reconciliation exceptions, custody handling, and client-protection escalation packaging.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns operational handling and escalation only, not investment advice, legal interpretation, final compliance signoff, or approval overrides.

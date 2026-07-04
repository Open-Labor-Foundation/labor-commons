# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route regulatory-reporting finance work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ledgers, reporting platforms, filing software, and attestation systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for general ledger, subledgers, regulatory reporting software, workpaper repositories, approval systems, and exception-management tooling
  - escalation targets for controllership, accounting policy, legal-compliance, fraud, AML, and attestation owners
  - tenant maps for report families, legal-entity hierarchy, consolidation scope, filing calendars, approval thresholds, and amendment procedures

## Isolation

- Tenant boundary: no cross-tenant sharing of ledgers, workpapers, filings, line mappings, adjustment requests, exceptions, complaints, or approval records.
- Knowledge boundary: OCC, FFIEC, Federal Reserve, NAIC, and BCBS public baselines are shared; tenant chart-of-accounts mappings, legal-entity hierarchies, control matrices, and filing software rules are injected only at request time.
- Adaptation policy:
  - allowed: terminology, report-family selection, line mappings, entity hierarchy, systems-of-record connectors, and jurisdiction overlays
  - prohibited: widening the lane into legal interpretation, final accounting-policy signoff, fraud or AML disposition, final attestation, or regulator-facing submission authority

## Operations

- Monitoring:
  - log dispatch decisions, report-family selection, open edit failures, unresolved reconciliations, unsupported override attempts, low-confidence returns, and control-gap escalations
  - alert on stale source reviews, repeated missing-workpaper cases, repeated signoff-bypass attempts, recurring entity-hierarchy ambiguity, and recurring fraud or AML-sensitive routing
  - monitor requests that incorrectly seek accounting-policy decisions, legal conclusions, final attestation, or regulator-facing filing actions from the lane
- Logging:
  - record release version, tenant assumptions, reporting regime, reporting period, legal entity, affected schedules, missing evidence, and routed owners
  - record whether the request involved a new filing, amended filing, reconciliation break, validation edit, control gap, fraud or AML escalation, or consumer-impact sensitivity
- Rollback path:
  - disable the current specialist release
  - route regulatory-reporting finance requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed regulatory-reporting finance specialist for filing-readiness review, reconciliation packaging, control mapping, and escalation support.
- Materialization prerequisites for `commons-crew`:
  - task metadata naming report family, legal entity, consolidation scope, period-end date, filing deadline, amendment status, and affected schedules
  - boundary metadata naming accounting-policy owners, legal-compliance owners, fraud and AML owners, and final attestation owners
  - retrieval dependencies for authoritative ledger, subledger, reporting, workpaper, edit, approval, and communication records
  - tenant-supplied assumptions for chart-of-accounts mapping, legal-entity hierarchy, filing software behavior, escalation thresholds, and approval rules
- Regulated-lane caveats:
  - public sources define the baseline but do not replace tenant procedures, jurisdiction-specific filing rules, or accounting-policy decisions
  - the lane must refuse when regime selection, legal-entity scope, reportability, or policy interpretation would change the answer
  - the lane must escalate rather than decide fraud, AML, legal, or attestation outcomes

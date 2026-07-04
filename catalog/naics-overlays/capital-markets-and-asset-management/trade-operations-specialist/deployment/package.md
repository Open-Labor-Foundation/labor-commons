# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route post-trade control work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant OMS, CTM or matching platforms, SSI repositories, custodian feeds, and exception systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for blotter, matching, affirmation, SSI, custodian, settlement-status, and exception systems
  - escalation targets for settlements, compliance, portfolio-management, derivatives, corporate-actions, and formal control owners
  - tenant policy maps for cut-off ownership, dual controls, manual SSI changes, market coverage, and approval thresholds

## Isolation

- Tenant boundary: no cross-tenant sharing of trade records, allocations, affirmation timestamps, SSI data, counterparty messages, exception logs, or approval histories.
- Knowledge boundary: public SEC, FINRA, DTCC, and ISITC baselines are shared; tenant market coverage, prime-broker model, custodian mappings, approval paths, and control thresholds are injected only at request time.
- Adaptation policy:
  - allowed: terminology dictionaries, system connectors, owner maps, market overlays, cut-off calendars, and tenant-specific dual-control steps
  - prohibited: widening the lane into portfolio decisions, final settlement authority, compliance signoff, legal interpretation, or unsupported product-specialist work

## Materialization Expectations

- Required task metadata:
  - product and market scope
  - trade date and settlement date
  - counterparty, custodian, and account context
  - requested disposition such as hold review, release recommendation, nonconformance review, or corrective-action escalation
- Required boundary metadata:
  - explicit adjacent-owner registry for settlements, compliance, portfolio management, derivatives, corporate actions, and supervisory approvals
  - tenant record-of-truth hierarchy across OMS, matching, SSI, custodian, and exception systems
  - policy map for manual-control overrides, cut-off handling, and approval thresholds
- Tenant-supplied or runtime-retrieved assumptions:
  - which markets and instruments the tenant wants this lane to cover
  - whether SSI source of truth is ALERT, a tenant repository, or a hybrid operating model
  - which party owns final settlement release, cash instructions, and exception signoff
  - whether middle-office functions are internal, outsourced, or split across multiple providers
- Regulated-lane caveats:
  - the lane may summarize public baseline rules and control expectations but may not provide legal interpretation or final compliance signoff
  - the lane may recommend hold or release posture only within its evidence-backed control surface and may not approve settlement or cash movement unilaterally
  - product-specific workflows outside supported scope, especially OTC derivatives and corporate actions, require adjacent specialist routing
- Refusal or orchestrator-return conditions:
  - required tenant facts or named records are missing and would change the outcome
  - the request requires legal, compliance, supervisory, portfolio, or settlement authority
  - public and tenant control logic conflict materially and need human resolution

## Operations

- Monitoring:
  - log dispatch decisions, control verdicts, hold-release recommendations, recurring-break escalations, and adjacent-lane handoffs
  - alert on stale source reviews, repeated SSI exceptions, repeated unmatched or unaffirmed trades, repeated control-bypass requests, and recurring fail-aging patterns
  - monitor requests that incorrectly seek portfolio, compliance, or settlement authority from the lane
- Logging:
  - record release version, tenant assumptions, trade identifiers, account or counterparty context, requested disposition, missing evidence, and routed owners
  - record whether the request involved allocation, matching, affirmation, SSI validation, settlement-readiness review, recurring-break handling, or corrective-action escalation
- Rollback path:
  - disable the current specialist release
  - route trade-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry capital-markets-and-asset-management --agent trade-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed trade-operations specialist for institutional post-trade control reviews, hold-release posture, SSI quality checks, recurring-break escalation, and product-safe routing.
- Runtime may continue to use `specification-based` even for a validated package until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns control review and escalation only, not portfolio decisions, legal interpretation, final compliance signoff, or final settlement approval.


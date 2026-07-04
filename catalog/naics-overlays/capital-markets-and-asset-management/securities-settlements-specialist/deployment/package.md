# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route securities-settlement work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant trade, matching, custody, depository, cash, and compliance systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for trade blotters, matching platforms, SSI stores, custodian or depository platforms, cash and ledger systems, and escalation workflows
  - escalation targets for treasury, sanctions or AML, legal or compliance, corporate actions, securities financing, and settlement approvers
  - tenant-specific maps for jurisdiction, depository choice, asset class, SSI source precedence, affirmation cutoffs, funding controls, and completion thresholds

## Materialization Requirements

- Required task and boundary metadata:
  - task intent, requested lifecycle action, and target output shape
  - asset class, instrument type, market, settlement cycle, and venue or depository context
  - named adjacent-lane map and approval-owner map
  - explicit refusal triggers for funding approvals, legal interpretation, sanctions disposition, and completion without evidence
- Tenant-supplied or runtime-retrieved assumptions:
  - jurisdiction and whether the trade follows the default public baseline or a different settlement regime
  - authoritative systems of record for trade blotter, affirmation, SSI, depository status, cash, position, and ledger truth
  - SSI source precedence when DTCC utilities, custodian records, and internal systems differ
  - funding or cash owner requirements, cutoff times, and escalation owners
  - client, counterparty, or custodian communication expectations that materially change completion
- Regulated-lane caveats:
  - settlement guidance is operational support and evidence packaging, not legal or regulatory interpretation
  - the lane may summarize blockers and safe next steps but may not approve funding, waive fails, or override depository or compliance controls
  - non-U.S. or non-DTC flows require tenant context before the runtime can act beyond blocked or escalated posture
- Refusal or orchestrator-return conditions:
  - required tenant facts, records, or market context are missing and would change the outcome
  - the request requires treasury funding approval, legal or sanctions interpretation, final compliance signoff, or other external authority
  - public-source and tenant-policy interpretations conflict materially
  - the request crosses into trade capture, corporate actions, securities financing, or a more specialized market-operations lane

## Isolation

- Tenant boundary: no cross-tenant sharing of trade data, SSI records, depository statuses, custodian messages, cash records, ledger entries, or approval histories.
- Knowledge boundary: public SEC, FINRA, and DTCC baselines are shared; tenant procedures, counterparty details, custodian mappings, cutoffs, and system identifiers are injected only at request time.
- Adaptation policy:
  - allowed: terminology, market dictionaries, system connectors, SSI precedence maps, depository overlays, and approval maps
  - prohibited: widening the lane into trade booking, treasury approval, sanctions or AML disposition, legal interpretation, or unauthorized override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, exception queue entries, completion-evidence records, and escalations
  - alert on stale source reviews, repeated unmatched or unaffirmed trades, repeated SSI conflicts, recurring fail patterns, and repeated requests for unsupported approvals
  - monitor requests that incorrectly seek trade-capture, treasury, legal, sanctions, or compliance authority from the lane
- Logging:
  - record release version, tenant assumptions, asset class, depository context, affected workflow type, missing evidence, and routed owners
  - record whether the request involved affirmation timing, SSI validation, depository progression, fail handling, partial settlement, or reconciliation escalation
- Rollback path:
  - disable the current specialist release
  - route securities-settlement requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed securities-settlements specialist for post-trade progression, SSI and depository control handling, fail and exception routing, and completion evidence capture.
- Runtime may still use `specification-based` until a retained implementation is explicitly promoted in a separate commit.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

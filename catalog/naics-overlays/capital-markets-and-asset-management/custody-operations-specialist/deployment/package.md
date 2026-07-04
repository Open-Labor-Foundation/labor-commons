# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route custody work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant custody, depository, SSI, cash, ledger, and compliance systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for custody-account masters, SSI stores, custodian and depository platforms, stock-record and ledger systems, and escalation workflows
  - escalation targets for collateral and pledge approvers, treasury, sanctions or AML, legal or compliance, corporate actions, settlements, and market-operations approvers
  - tenant-specific maps for jurisdiction, market, depository choice, sub-custodian routing, account structure, control-location rules, approval thresholds, and completion standards

## Materialization Requirements

- Required task and boundary metadata:
  - task intent, requested lifecycle action, and target output shape
  - asset form, instrument type, market, custody regime, and depository or sub-custodian context
  - named adjacent-lane map and approval-owner map
  - explicit refusal triggers for collateral approvals, treasury approvals, legal interpretation, sanctions disposition, and completion without evidence
- Tenant-supplied or runtime-retrieved assumptions:
  - jurisdiction and whether the case follows the default public baseline or a different local-market custody regime
  - authoritative systems of record for custody instructions, SSI data, custodian status, control-location truth, position, cash, and ledger evidence
  - SSI source precedence when DTCC utilities, custodian records, and internal systems differ
  - restriction, pledge, segregation, and release approval ownership and cutoff times
  - client, fund, counterparty, or sub-custodian communication expectations that materially change completion
- Regulated-lane caveats:
  - custody guidance is operational support and evidence packaging, not legal or regulatory interpretation
  - the lane may summarize blockers and safe next steps but may not approve collateral release, treasury funding, policy overrides, or compliance outcomes
  - non-U.S., non-DTC, physical-certificate, and adviser-custody flows require tenant context before the runtime can act beyond blocked or escalated posture
- Refusal or orchestrator-return conditions:
  - required tenant facts, records, or market context are missing and would change the outcome
  - the request requires collateral approval, treasury funding approval, legal or sanctions interpretation, final compliance signoff, or other external authority
  - public-source and tenant-policy interpretations conflict materially
  - the request crosses into trade capture, corporate actions, securities settlements, securities financing, or investment-adviser compliance

## Isolation

- Tenant boundary: no cross-tenant sharing of custody instructions, SSI records, custodian statuses, control-location data, position records, ledger entries, or approval histories.
- Knowledge boundary: public SEC, FINRA, and DTCC baselines are shared; tenant procedures, sub-custodian mappings, market cutoffs, client agreements, and system identifiers are injected only at request time.
- Adaptation policy:
  - allowed: terminology, market dictionaries, system connectors, SSI precedence maps, depository overlays, control-location rules, and approval maps
  - prohibited: widening the lane into trade booking, collateral approval, treasury approval, sanctions or AML disposition, legal interpretation, or unauthorized override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, exception queue entries, completion-evidence records, and escalations
  - alert on stale source reviews, repeated SSI defects, recurring control-location mismatches, repeated rejected custody movements, and repeated requests for unsupported approvals
  - monitor requests that incorrectly seek collateral, treasury, legal, sanctions, or corporate-actions authority from the lane
- Logging:
  - record release version, tenant assumptions, asset form, market and depository context, affected workflow type, missing evidence, and routed owners
  - record whether the request involved SSI validation, custody movement, restricted position handling, pledge or segregation follow-up, pending depository status, or reconciliation escalation
- Rollback path:
  - disable the current specialist release
  - route custody requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed custody-operations specialist for safekeeping progression, SSI and control handling, custody exception routing, and completion evidence capture.
- Runtime may still use `specification-based` until a retained implementation is explicitly promoted in a separate commit.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

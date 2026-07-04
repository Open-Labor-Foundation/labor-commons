# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route capital-markets analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant OMS, EMS, IBOR, ABOR, market-data, benchmark, reporting, and approval systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for orders, fills, positions, holdings, prices, benchmark masters, risk outputs, reporting artifacts, and approval workflows
  - escalation targets for portfolio management, trading, valuation, compliance, legal, investor or client reporting, and market-risk owners
  - tenant-specific maps for benchmark methodology, valuation hierarchy, currency policy, share-class handling, composite maps, disclosure audiences, and completion thresholds

## Materialization Requirements

- Required task and boundary metadata:
  - task intent, requested metric or report shape, and intended audience
  - product, strategy, benchmark, composite or account scope, and reporting window
  - named adjacent-lane map and approver-owner map
  - explicit refusal triggers for investment decisions, valuation signoff, legal interpretation, and publication without evidence
- Tenant-supplied or runtime-retrieved assumptions:
  - regulated entity type, jurisdiction, and whether the request sits in broker-dealer, adviser, or fund-reporting posture
  - authoritative systems of record for OMS, EMS, IBOR, ABOR, benchmark master, market data, pricing, performance, and reporting approval truth
  - benchmark governance rules, benchmark-change process, benchmark blend logic, and benchmark owner
  - valuation-source hierarchy, currency translation policy, share-class or sleeve logic, and corporate-action handling
  - disclosure audience, approval chain, materiality thresholds, and publication controls
- Regulated-lane caveats:
  - analytics guidance is evidence-backed analysis support, not investment advice, legal interpretation, valuation signoff, or final disclosure approval
  - the lane may summarize trends, exceptions, and caveats but may not approve portfolio action, change benchmark governance, or certify performance claims for publication
  - cross-jurisdiction or hybrid broker-dealer and adviser environments require tenant context before the runtime can act beyond blocked or escalated posture
- Refusal or orchestrator-return conditions:
  - required tenant facts, records, or market context are missing and would change the outcome
  - the request requires portfolio-management, trading, valuation, legal, compliance, or publication authority
  - public-source and tenant-policy interpretations conflict materially
  - the request crosses into a more specialized lane such as valuation control, best execution, GIPS compliance, or investor-reporting approval

## Isolation

- Tenant boundary: no cross-tenant sharing of trade data, position files, benchmark mappings, market-data extracts, reporting drafts, approval histories, or valuation records.
- Knowledge boundary: public SEC, FINRA, CFA Institute, and IOSCO baselines are shared; tenant benchmark masters, valuation policy, composite maps, thresholds, and system identifiers are injected only at request time.
- Adaptation policy:
  - allowed: terminology, benchmark dictionaries, system connectors, reporting cadences, benchmark blends, valuation hierarchies, and approval maps
  - prohibited: widening the lane into portfolio construction, trade execution authority, valuation or NAV signoff, legal interpretation, or final disclosure approval

## Operations

- Monitoring:
  - log dispatch decisions, source-hierarchy selections, benchmark exceptions, disclosure-risk flags, and adjacent-owner escalations
  - alert on stale source reviews, repeated benchmark-definition disputes, repeated OMS versus ABOR conflicts, repeated price-source gaps, and repeated requests for unsupported approval
  - monitor requests that incorrectly seek portfolio, trading, valuation, legal, compliance, or publication authority from the lane
- Logging:
  - record release version, tenant assumptions, benchmark context, affected workflow type, missing evidence, and routed owners
  - record whether the request involved performance reporting, benchmark-relative analysis, liquidity or exposure reporting, fixed-income execution analytics, disclosure support, or metric-definition disputes
- Rollback path:
  - disable the current specialist release
  - route capital-markets analytics requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed capital-markets analytics specialist for performance, benchmark, exposure, liquidity, and execution-quality analysis with explicit boundary-safe caveats.
- Runtime may still use `specification-based` until a retained implementation is explicitly promoted in a separate commit.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.

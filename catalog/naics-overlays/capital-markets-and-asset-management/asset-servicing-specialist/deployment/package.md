# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route asset-servicing work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant event, custody, proxy, tax, notice, and communication systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for event-announcement, legal-notice, proxy, tax-relief, position, entitlement, cash, ledger, case-management, and document systems
  - escalation targets for corporate actions, proxy voting, tax operations, claims, cash approval, legal or compliance, and platform-incident owners
  - tenant-specific maps for market coverage, depository or CSD model, custodian network, communication templates, election ownership, documentation cutoffs, and return-to-service thresholds

## Materialization Requirements

- Required task and boundary metadata:
  - task intent, requested outcome, and required output shape
  - market, depository or CSD, security identifier, event identifier, and event type
  - named adjacent-lane map and approval-owner map
  - explicit refusal triggers for elections, tax advice, legal interpretation, payment overrides, and completion without evidence
- Tenant-supplied or runtime-retrieved assumptions:
  - jurisdiction, market coverage, and whether the event follows the default DTC-centered public baseline or a different local-market process
  - authoritative systems of record for announcements, notices, positions, entitlements, proxy materials, tax documents, cash postings, and ledger truth
  - tenant ownership split across corporate actions, proxy, tax, claims, settlements, and cash-approval teams
  - client communication rules, outage owners, return-to-service gates, and cutoff-escalation posture
- Regulated-lane caveats:
  - servicing guidance is operational support and evidence packaging, not tax advice, legal interpretation, claims strategy, or discretionary election ownership
  - the lane may summarize blockers and safe next steps but may not override deadlines, withholding rules, payment controls, or notice-publication controls
  - non-DTC or non-U.S. market flows require tenant context before the runtime can act beyond blocked or escalated posture
- Refusal or orchestrator-return conditions:
  - required tenant facts, records, or market context are missing and would change the outcome
  - the request requires election recommendation, tax advice, legal interpretation, payment override approval, proxy-vote direction, or other external authority
  - public-source and tenant-policy interpretations conflict materially
  - the request crosses into corporate actions, proxy voting, tax operations, claims, settlements, or a more specialized lane

## Isolation

- Tenant boundary: no cross-tenant sharing of event, notice, position, entitlement, tax, proxy, ledger, or approval data.
- Knowledge boundary: public SEC, DTCC, and Swift baselines are shared; tenant procedures, custodian mappings, client details, market coverage, and cutoff rules are injected only at request time.
- Adaptation policy:
  - allowed: terminology, market dictionaries, system connectors, communication templates, depository overlays, outage maps, and approval maps
  - prohibited: widening the lane into election ownership, tax advice, proxy-voting guidance, legal interpretation, claims strategy, or unauthorized override authority

## Operations

- Monitoring:
  - log dispatch decisions, scope verdicts, status updates, repeat-failure escalations, outage states, and adjacent-lane handoffs
  - alert on stale source reviews, recurring corrected notices, unresponsive-payee backlogs, repeated entitlement breaks, missed cutoff exposure, and platform return-to-service failures
  - monitor requests that incorrectly seek election, tax, legal, claims, cash-approval, or proxy-voting authority from the lane
- Logging:
  - record release version, tenant assumptions, market and depository context, affected event type, missing evidence, and routed owners
  - record whether the request involved announcements, entitlements, proxy distribution, legal notices, tax documentation, returned funds, unresponsive payees, or outage handling
- Rollback path:
  - disable the current specialist release
  - route asset-servicing requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed asset-servicing specialist for announcements, notices, entitlements, proxy distribution, tax-support status, returned-funds follow-up, and outage-safe escalation handling.
- Runtime may still use `specification-based` until a retained implementation is explicitly promoted in a separate commit.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

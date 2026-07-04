# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route corporate-actions work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant event, custody, position, tax, and approval systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for event notices, CA Web or equivalent platforms, position stores, custodian systems, tax systems, settlement evidence, and escalation workflows
  - escalation targets for legal, tax, issuer-services, proxy, settlement, portfolio-decision, and market-operations approvers
  - tenant-specific maps for jurisdiction, market or custodian chain, source precedence, approval thresholds, election controls, tax handling, and completion thresholds

## Materialization Requirements

- Required task and boundary metadata:
  - task intent, requested lifecycle action, and target output shape
  - event type, CA ID or equivalent identifier, security identifier, and market or custodian context
  - named adjacent-lane map and approval-owner map
  - explicit refusal triggers for unsupported elections, tax or legal interpretation, issuer-side approvals, and completion without evidence
- Tenant-supplied or runtime-retrieved assumptions:
  - jurisdiction and whether the event follows the default U.S. public baseline or a different market-servicing regime
  - authoritative source precedence across issuer, exchange, DTCC, custodian, and tenant event stores
  - client or portfolio approval requirements for voluntary events and standing-instruction usage
  - tax-documentation, withholding, funding, and FX requirements that materially change the workflow
  - custodian, depository, or transfer-agent communication expectations that materially change completion
- Regulated-lane caveats:
  - corporate-actions guidance is operational support and evidence packaging, not legal or tax interpretation
  - the lane may summarize blockers and safe next steps but may not choose an election, waive a cutoff, or approve issuer or client actions without explicit tenant authority
  - non-U.S., ADR, or non-DTC flows require tenant context before the runtime can act beyond blocked or escalated posture
- Refusal or orchestrator-return conditions:
  - required tenant facts, records, or market context are missing and would change the outcome
  - the request requires legal or tax interpretation, issuer approval, final compliance signoff, or other external authority
  - public-source and tenant-policy interpretations conflict materially
  - the request crosses into proxy voting, issuer services, transfer-agent administration, settlement resolution, or portfolio decision ownership

## Isolation

- Tenant boundary: no cross-tenant sharing of event notices, positions, client instructions, tax documentation, settlement statements, or approval histories.
- Knowledge boundary: public FINRA, SEC, and DTCC baselines are shared; tenant procedures, client authorities, custodian mappings, deadlines, and system identifiers are injected only at request time.
- Adaptation policy:
  - allowed: terminology, market dictionaries, system connectors, source-precedence maps, approval maps, and tax-handling overlays
  - prohibited: widening the lane into portfolio decisioning, issuer legal analysis, proxy voting, settlement resolution, or unauthorized override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, exception queue entries, completion-evidence records, and escalations
  - alert on stale source reviews, repeated late or deficient announcements, repeated election failures, repeated missing acknowledgements, recurring allocation discrepancies, and repeated requests for unsupported approvals
  - monitor requests that incorrectly seek tax, legal, issuer, proxy, settlement, or portfolio authority from the lane
- Logging:
  - record release version, tenant assumptions, event type, CA ID or equivalent identifier, deadline context, affected workflow type, missing evidence, and routed owners
  - record whether the request involved announcement verification, position eligibility, election handling, tax or FX instructions, entitlement allocation, or completion review
- Rollback path:
  - disable the current specialist release
  - route corporate-actions requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed corporate-actions specialist for event progression, election and entitlement control handling, exception routing, and completion evidence capture.
- Runtime may still use `specification-based` until a retained implementation is explicitly promoted in a separate commit.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

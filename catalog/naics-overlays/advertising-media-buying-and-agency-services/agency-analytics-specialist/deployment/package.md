# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route advertising agency analytics work into a spec-first specialist with retrieval, confidentiality, privacy, approval, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ad server, DSP, SSP, search, social, retail media, verification, attribution, web analytics, CRM, tag management, project management, document management, content, approval, communication, delivery, and BI credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ad server, campaign platform, DSP, SSP, verification, attribution, CRM, web analytics, tag management, project, ticket, document, content, approval, delivery, communication, and BI systems
  - escalation targets for legal, editorial, quality assurance, delivery management, account, marketing compliance, media buying, campaign trafficking, ad operations, creative approvals, agency finance, and client-services owners
  - tenant metric dictionaries, source-precedence rules, attribution windows, privacy rules, confidentiality restrictions, campaign scope, client commitments, review-status definitions, action thresholds, and publication approval matrices

## Isolation

- Tenant boundary: no cross-tenant sharing of client briefs, campaign plans, media plans, insertion orders, spend, pricing, audience segments, platform exports, verification reports, creative approval records, agency work product, confidential strategy, client communications, or reporting outputs.
- Knowledge boundary: FTC, MRC, IAB Tech Lab, 4A's, DAA, and NAI public baselines are shared; client contracts, campaign strategies, KPI dictionaries, source-precedence policies, audience-data rules, approval chains, and reporting repositories are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, artifact templates, system connector mappings, audience-specific output wrappers, channel-specific source hierarchy, and campaign or client reporting cadence settings
  - prohibited: widening the lane into legal interpretation, advertising claim substantiation, editorial approval, creative approval, campaign trafficking, media-buying execution, spend approval, makegood approval, contractual commitment, privacy-law determination, policy override, or direct client-facing signoff

## Operations

- Monitoring:
  - log metric-definition choices, attribution windows, denominator overrides, blocked prerequisites, source conflicts, stale refreshes, privacy escalations, confidentiality escalations, approval blockers, unsupported-claim attempts, and disclosure-risk notes
  - alert on repeated attempts to publish unreconciled media metrics, expose restricted client or audience data, treat descriptive trends as causal proof, approve campaign actions, or bypass source reconciliation
  - monitor for requests that incorrectly seek legal, editorial, contractual, financial, media-buying, creative approval, marketing compliance, or client communication authority from the lane
- Logging:
  - record release version, tenant assumptions, client/campaign/flight/channel/audience scope, reporting cadence, metric definitions used, source lineage, refresh timestamps, confidence posture, confidentiality state, privacy state, and systems of record consulted
  - record whether the request involved ambiguous definitions, attribution uncertainty, missing facts, stale exports, cross-system conflict, content approval issues, audience-data limits, confidentiality constraints, unsupported claims, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry advertising-media-buying-and-agency-services --agent agency-analytics-specialist` before re-enabling when that audit command is available in the local environment
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed agency analytics specialist for media metric definition, campaign performance analysis, source reconciliation, content and client workflow awareness, caveat handling, confidentiality-aware delivery, privacy-aware escalation, and signoff-safe reporting.
- Materialization requirements for `commons-crew`:
  - task metadata identifying client, brand, campaign, line item, channel, market, audience, creative, flight, period, budget, objective, attribution model, reporting cadence, requested metrics, and intended audience
  - boundary metadata identifying legal, editorial, quality assurance, delivery management, account, marketing compliance, media buying, campaign trafficking, ad operations, creative approvals, agency finance, and client-services owners
  - retrieval dependencies for ad server, campaign platform, DSP, SSP, verification, attribution, CRM, web analytics, tag management, project, ticket, document, content, approval, delivery, communication, and BI records
  - tenant overlays for metric definitions, source precedence, attribution windows, client scope, confidentiality restrictions, audience-data rules, privacy obligations, client commitments, review-status definitions, action thresholds, approval flow, and publication criteria
- Regulated-lane caveats:
  - public FTC, MRC, IAB Tech Lab, 4A's, DAA, and NAI sources clarify advertising, disclosure, measurement, ad-tech, agency workflow, confidentiality, and privacy baselines but do not replace tenant contracts, counsel review, client authorization, or platform-specific data-use rules
  - runtime must refuse or return to orchestrator whenever legal interpretation, advertising claim substantiation, editorial approval, creative approval, privacy-law advice, media-buying execution, spend approval, makegood approval, contractual signoff, client rights, or professional judgment determine the answer
  - outputs must not disclose confidential client strategy, agency work product, pricing, media spend, audience segment data, personal data, sensitive data, platform-restricted data, or cross-client benchmarks outside authorized scope
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, research-summary completeness, and scenario coverage.

# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route advertising agency client-service work into a spec-first specialist with retrieval, confidentiality, approval, escalation, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant CRM, ticketing, project, document, content, approval, delivery, communication, ad operations, media, finance, quality, and client portal credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for CRM, ticketing, project management, document management, content and asset management, approval workflow, review-note, quality, delivery, communication, client portal, ad operations, media planning, finance, billing, and retention systems
  - escalation targets for legal, editorial, quality assurance, delivery management, account, media buying, ad operations, agency finance, privacy, creative approvals, contractual signoff, and client acceptance owners
  - tenant service model, client commitments, MSA/SOW/IO source precedence, approval matrix, confidentiality restrictions, approved communication channels, service recovery limits, complaint rules, retention policy, and owner-transfer thresholds

## Isolation

- Tenant boundary: no cross-tenant sharing of client files, agency work product, MSA/SOW terms, campaign briefs, media plans, insertion orders, content assets, review notes, approvals, pricing, performance data, audience segments, platform credentials, service recovery details, complaint history, or communication logs.
- Knowledge boundary: IAB, 4A's, ANA, FTC, PRSA, and ISO public baselines are shared; client contracts, scope, pricing, campaign strategies, service policies, approval chains, confidentiality commitments, and system records are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, service-disposition templates, communication wrappers, escalation matrices, artifact checklists, connector mappings, client-specific approval gates, and retention settings
  - prohibited: widening the lane into legal interpretation, advertising claim substantiation, editorial approval, creative approval, media strategy, ad operations execution, financial approval, makegood or credit authority, contractual commitment, privacy-law determination, quality signoff, policy override, or final client acceptance

## Operations

- Monitoring:
  - log request type, client, brand, project, SOW/IO references, source records, missing facts, approval state, communication channel, confidentiality state, action taken, escalation owner, and unresolved items
  - alert on repeated attempts to bypass approvals, hide QA defects, promise makegoods or credits, disclose restricted client records, approve claims or creative, or close cases without evidence
  - monitor for requests that incorrectly seek account, legal, editorial, contractual, financial, media strategy, privacy, quality, or final acceptance authority from the lane
- Logging:
  - record release version, tenant assumptions, client/campaign/project scope, source lineage, refresh timestamps, confidence posture, request disposition, communication summary, refusal rationale, and retention location
  - record whether the request involved missing facts, stale records, source conflicts, repeat failure, confidentiality constraints, approval blockers, client rights, unsupported exceptions, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry advertising-media-buying-and-agency-services --agent client-services-agency-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed agency client-services specialist for client request intake, status clarification, stakeholder communication, missing-prerequisite handling, service recovery packaging, confidentiality-safe delivery, complaint escalation, and adjacent-owner handoff.
- Materialization requirements for `commons-crew`:
  - task metadata identifying client, brand, campaign, project, workstream, request type, urgency, channel, requester role, stakeholder audience, intended communication, and requested outcome
  - boundary metadata identifying legal, editorial, quality assurance, delivery management, account, media buying, ad operations, agency finance, privacy, creative approvals, contractual signoff, and client acceptance owners
  - retrieval dependencies for CRM, ticketing, project, document, content, approval, quality, delivery, communication, client portal, ad operations, media, finance, billing, retention, and audit systems
  - tenant overlays for MSA/SOW/IO source precedence, client commitments, confidentiality restrictions, service model, communication rules, service recovery limits, complaint rules, approval flow, escalation thresholds, retention requirements, and owner-transfer criteria
- Regulated-lane caveats:
  - public FTC, PRSA, ISO, IAB, 4A's, and ANA sources clarify advertising, disclosure, complaint, client-delivery, confidentiality, and agency workflow baselines but do not replace tenant contracts, counsel review, client authorization, or platform-specific rules
  - runtime must refuse or return to orchestrator whenever legal interpretation, advertising claim substantiation, editorial approval, creative approval, privacy-law advice, media strategy, spend approval, makegood approval, credit or refund approval, contractual signoff, client rights, professional judgment, quality approval, or final acceptance determines the answer
  - outputs must not disclose confidential client strategy, agency work product, pricing, media spend, audience segment data, personal data, sensitive data, platform-restricted data, or client communications outside authorized scope
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, research-summary completeness, scenario coverage, and readiness evidence consistency.

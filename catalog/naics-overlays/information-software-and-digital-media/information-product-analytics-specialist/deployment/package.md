# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route information product analytics work into a spec-first specialist with retrieval, confidentiality, source-lineage, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant telemetry, warehouse, subscription, entitlement, CRM, ticketing, CMS, experimentation, project, document, quality review, delivery, and BI credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for product analytics, event pipeline, data warehouse, subscription billing, identity and entitlement, CRM, ticketing, support, CMS, experimentation, feature flag, project management, document management, quality review, delivery, and BI systems
  - escalation targets for legal, editorial, quality assurance, delivery management, account, product management, data governance, privacy, security, finance, engineering, and contract owners
  - tenant metric dictionaries, event taxonomies, source-precedence rules, denominator rules, confidence thresholds, confidentiality constraints, content-rights rules, client commitments, review-status definitions, and publication approval matrices

## Isolation

- Tenant boundary: no cross-tenant sharing of product telemetry, event taxonomies, subscriber records, account records, entitlements, client files, audience data, content rights, unreleased content performance, experiment assignments, support cases, project records, delivery evidence, or reporting outputs.
- Knowledge boundary: ISO/IEC/IEEE, SEC, W3C, MRC, NIST, and FTC public baselines are shared; client contracts, content rights, metric dictionaries, event taxonomies, source-precedence policies, approval chains, customer records, and product telemetry are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, event-taxonomy maps, source connector mappings, source hierarchy settings, audience-specific output wrappers, threshold configurations, and tenant reporting cadence settings
  - prohibited: widening the lane into roadmap, pricing, editorial, legal, privacy, security, contractual, financial, engineering, client-rights, content-rights, policy, attestation, or final disclosure authority

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, stale refreshes, missing event coverage, lineage gaps, content-rights caveats, confidentiality escalations, approval blockers, unsupported claims, benchmark comparability gaps, and disclosure-risk notes
  - alert on repeated attempts to publish unsigned metrics, expose restricted client or subscriber records, treat descriptive trends as causal proof, bypass source reconciliation, or imply external approval
  - monitor for requests that incorrectly seek direct roadmap, pricing, editorial, legal, privacy, security, financial, contractual, professional-judgment, or client-signoff authority from the lane
- Logging:
  - record release version, tenant assumptions, product scope, audience, cadence, metric definitions used, source lineage, refresh timestamps, confidence posture, confidentiality state, content-rights posture, systems of record consulted, and approval state
  - record whether the request involved ambiguous definitions, missing facts, incomplete event coverage, cross-system conflict, confidentiality limits, rights constraints, unsupported claims, benchmark gaps, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry information-software-and-digital-media --agent information-product-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed information product analytics specialist for product health, subscriber, content, funnel, experiment, feature adoption, retention, churn, support, release, source reconciliation, metric caveat handling, confidentiality-aware delivery, and signoff-safe escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying business unit, product, app, site, client, account, subscriber tier, content collection, jurisdiction, reporting cadence, requested metrics, intended audience, and output purpose
  - boundary metadata identifying legal, editorial, quality assurance, delivery management, account, product management, data governance, privacy, security, finance, engineering, and contract owners
  - retrieval dependencies for telemetry, event pipeline, data warehouse, subscription billing, identity and entitlement, CRM, ticketing, support, CMS, experimentation, feature flag, project, document, quality review, delivery, and BI records
  - tenant overlays for metric definitions, source precedence, event taxonomy, identity logic, denominator rules, exclusions, refresh policy, confidentiality restrictions, content rights, client commitments, review-status definitions, approval flow, and publication criteria
- Regulated-lane caveats:
  - public ISO/IEC/IEEE, SEC, W3C, MRC, NIST, and FTC sources clarify measurement, metric, data-quality, provenance, privacy, confidentiality, claim, and disclosure baselines but do not replace tenant legal, privacy, editorial, security, or client authorization
  - runtime must refuse or return to orchestrator whenever legal advice, privacy-law interpretation, editorial approval, content-rights judgment, security approval, product roadmap decision, pricing decision, financial approval, contractual signoff, client rights, professional judgment, or final disclosure authority determines the answer
  - outputs must not disclose confidential client, subscriber, account, audience, experiment, support, product telemetry, content-rights, or unreleased performance information outside authorized engagement and audience boundaries
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and scenario coverage.

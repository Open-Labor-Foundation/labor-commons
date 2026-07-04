# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route franchise analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant franchise-management, FDD, filing, POS, royalty, ERP, and reporting-system credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for franchise management, FDD repository, EFD or filing tracker, unit master, POS, royalty, ERP, BI warehouse, and field-operations systems
  - escalation targets for franchise compliance, legal review, royalty administration, franchise operations, field consulting, franchise development support, finance, and disclosure owners
  - tenant metric dictionaries, source-precedence rules, gross-sales and royalty definitions, unit-status taxonomy, reporting calendar, disclosure-approval chain, and jurisdiction-state scope

## Isolation

- Tenant boundary: no cross-tenant sharing of FDD drafts, Item 19 substantiation, franchise agreements, unit records, POS sales, royalty data, franchisee financials, or reporting outputs.
- Knowledge boundary: FTC, NASAA, SEC, and IFA public baselines are shared; tenant agreements, unit master rules, royalty exclusions, FDD approval matrices, and disclosure policies are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, connector mappings, reporting templates, audience-specific output wrappers, and reporting-calendar settings
  - prohibited: widening the lane into legal drafting, state filing ownership, royalty approvals, development-remedy decisions, or direct prospect-facing performance claims

## Operations

- Monitoring:
  - log metric-definition choices, cohort overrides, blocked prerequisites, source conflicts, FDD edition used, Item 19 basis references, unit-status assumptions, and disclosure escalations
  - alert on stale substantiation files, repeated attempts to use dashboards as prospect-facing earnings claims, repeated requests to ignore franchised-versus-company-owned distinctions, and recurring POS-versus-royalty conflicts
  - monitor for requests that incorrectly seek direct legal, state filing, royalty-abatement, or disclosure authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, audience, jurisdiction scope, unit cohort rules, and systems-of-record consulted
  - record whether the request involved ambiguous cohort logic, missing FDD context, source conflict, royalty boundary handling, legal review, franchise-sales use, or disclosure sensitivity
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry franchise-systems-and-multi-unit-enterprise-support --agent franchise-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed franchise analytics specialist for metric-definition, royalty and POS reconciliation, multi-unit reporting, cohort-aware analysis, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying brand, concept, geography, reporting period, audience, and whether the request touches Item 19, state filing posture, franchise sales, or royalty concessions
  - boundary metadata identifying franchise compliance, legal review, royalty administration, franchise operations, field consulting, franchise development support, finance, and disclosure owners
  - retrieval dependencies for FDD versions, Item 19 workpapers, Item 20 tables, franchise agreements, unit master, POS, royalty, ERP, franchisee reporting, and prior scorecards or metric dictionaries
  - tenant overlays for gross-sales definitions, comparable-sales rules, temporary-closure treatment, transfer or reacquisition logic, reporting calendar, source precedence, and publication approval criteria
- Regulated-lane caveats:
  - public FTC, NASAA, and SEC sources constrain disclosure, substantiation, and metric transparency posture but do not replace state-law advice, franchise counsel, or tenant-specific agreement language
  - runtime must refuse or return to orchestrator whenever legal drafting, state filing preparation, franchise-sales use of metrics, royalty relief approval, or public disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.

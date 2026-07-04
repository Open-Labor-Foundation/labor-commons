# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route aerospace program-administration work into a spec-first specialist with tenant retrieval, boundary metadata, and audit logging.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier portal, PLM, document-control, program-management, access-governance, and retention systems remain orchestrator-managed.
- Required configuration:
  - release version and package slug
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier management, PLM or configuration management, program trackers, document control, inventory, planning, logistics, and retention repositories
  - escalation targets for quality, production planning, inventory, procurement, supplier quality, logistics, engineering change, configuration management, legal, export-control, security, and program management owners
  - tenant-specific maps for record update permissions, official-record ownership, release authority, quality hold rules, supplier substitution limits, rework constraints, access rules, retention schedules, and customer flowdowns

## Materialization Requirements

`commons-crew` needs the following metadata and runtime facts to materialize this lane safely:

- Task metadata: industry overlay, agent slug, workflow phase, industry profile, delivery target, runtime strategy, validation profile, source baseline version, required output shape, and scenario-derived refusal rules.
- Boundary metadata: owned artifacts, adjacent specialists, approval boundaries, orchestrator return rules, and hard refusal triggers.
- Retrieval assumptions: tenant program identifier, business unit, facility, product family, lot or serial scope, supplier context, service-level commitment, systems of record, record locations, and current authority maps.
- Regulated-lane caveats: export-controlled technical data, covered defense information, customer-sensitive records, official-record retention, quality hold state, release authority, supplier approval, and engineering change authority must be tenant-confirmed.
- Refusal or orchestrator-return conditions: missing tenant facts, missing authoritative records, conflicting policies, controlled-data uncertainty, release or quality authority request, supplier approval request, safety-critical judgment, legal interpretation, or financial approval.

## Isolation

- Tenant boundary: no cross-tenant sharing of program rosters, due dates, production orders, lot histories, serial traceability, supplier records, NCRs, release records, change-control documents, controlled technical data, covered defense information, access rules, or retention policies.
- Knowledge boundary: FAA, IAQG, NASA, DFARS, and ITAR public baselines are shared; customer-specific flowdowns, internal program plans, authority matrices, access markings, system permissions, and retention schedules are injected only at request time.
- Adaptation policy:
  - allowed: tenant terminology, program names, system references, owner maps, escalation contacts, status labels, and retrieved policy overlays
  - prohibited: widening the lane into final release approval, quality disposition, engineering signoff, supplier approval, legal interpretation, or export-control authorization

## Operations

- Monitoring:
  - log dispatch decisions, missing-record blocks, program status outputs, official-record update refusals, access escalations, traceability conflicts, quality hold escalations, supplier substitution refusals, and low-confidence returns
  - alert on stale source reviews, repeated unauthorized record-change attempts, recurring missing evidence by owner, repeated release-bypass requests, repeated supplier substitution pressure, and controlled-data sharing requests
  - monitor requests that incorrectly seek engineering, quality, supplier, export-control, legal, safety, or financial authority from the lane
- Logging:
  - record release version, tenant assumptions, affected program, product, lot, serial, supplier, facility, owner, due date, missing evidence, system of record, and routed owners
  - record whether the request involved record maintenance, evidence packet assembly, retention or access governance, traceability conflict, quality hold, supplier nonconformance, release boundary, or adjacent-specialist routing
- Rollback path:
  - disable the current specialist release for routing
  - route aerospace program-administration requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle if one exists
  - suspend validated operational claims when validation, source freshness, or evidence consistency is reopened
  - re-run spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed aerospace program-administration specialist for record intake, document completeness, program status, due-date tracking, roster and owner tracking, evidence packet assembly, retention or access escalation, traceability conflict routing, quality hold escalation, and supplier handoff preparation.
- Health checks should confirm manifest load success, artifact presence, evaluation coverage, readiness evidence, source freshness dates, and tenant retrieval configuration.
- Runtime prompts should explicitly remind the lane that it owns program administration and evidence packaging only, not final engineering, quality, supplier, regulatory, export-control, legal, or release authority.

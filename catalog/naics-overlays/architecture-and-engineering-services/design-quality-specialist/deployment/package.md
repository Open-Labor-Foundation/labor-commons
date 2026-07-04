# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route architecture-and-engineering design-quality work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant common-data-environment, BIM, drawing, calculation, review-comment, permitting, commissioning, and project-controls connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for the CDE, drawing and specification repository, calculation library, BIM coordination platform, review-comment system, issue tracker, commissioning repository, permitting correspondence store, and approval registry
  - escalation targets for design management, quality leadership, architect-of-record, engineer-of-record, BIM coordination, code and permitting, commissioning authority, contracts, and legal owners
  - tenant-specific maps for project type, delivery method, governing criteria, review milestones, jurisdiction, deviation rules, release authority, and signoff requirements

## Materialization Requirements

- Required task metadata:
  - request type
  - project, discipline, and delivery-method context
  - affected package, model, sheet, or calculation identifiers
  - visible hold or release status
  - requested decision and claimed authority owner
- Required boundary metadata:
  - architect-of-record and engineer-of-record owners
  - code-and-permitting and AHJ escalation owners
  - BIM authoring and coordination owners
  - commissioning authority and construction-administration owners
  - tenant policy precedence and escalation tree
- Required runtime assumptions to retrieve:
  - governing client criteria, owner standards, and contract requirements
  - current design phase and milestone calendar
  - local jurisdiction, governing code set, and permit workflow context
  - systems-of-record locations and retention expectations
  - documented deviation, hold, review-comment, and closure rules
- Regulated-lane caveats:
  - public GSA, USACE, NIBS, WBDG, and FAR sources constrain the lane but do not replace tenant contracts, owner criteria, project-specific standards, or jurisdictional code
  - the lane may support milestone hold, release-boundary, quality, and incident analysis but cannot command final design approval, stamp or seal documents, answer AHJ comments as the accountable owner, or sign contractual certifications
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, or records that would change the result
  - request for legal, licensed, safety-critical, engineering, code, permit, contractual, or final approval authority
  - conflicting public and tenant rules that materially change whether a package can move, issue, permit, or close

## Isolation

- Tenant boundary: no cross-tenant sharing of models, drawings, specifications, calculations, issue logs, review comments, commissioning records, permit correspondence, or approval maps.
- Knowledge boundary: public GSA, USACE, WBDG, NIBS, and FAR baselines are shared; tenant contracts, criteria packages, code interpretations, review calendars, and retrieval hooks are injected only at request time.
- Adaptation policy:
  - allowed: terminology, phase labels, discipline maps, release-owner maps, system connectors, and tenant control overlays
  - prohibited: widening the lane into architect-of-record or engineer-of-record approval, code authority, permit signoff, BIM execution ownership, or unsupported contractual commitments

## Operations

- Monitoring:
  - log dispatch decisions, hold and release-boundary outputs, unresolved review comments, deviation blockers, recurring coordination defects, licensed-authority escalations, and boundary-safe refusals
  - alert on stale source reviews, repeated clash or constructability findings, repeated bypass requests, missing basis-of-design evidence, unresolved code conflicts, and attempts to close nonconformance without backcheck support
  - monitor for requests that incorrectly seek stamped signoff, permit approval, AHJ response ownership, or contractual certification from the lane
- Logging:
  - record release version, tenant assumptions, affected package scope, missing evidence, routed owners, and whether the request involved hold, release, deviation, comment, code, BIM, or corrective-action handling
  - record whether source or policy conflicts existed and whether the work escalated because of recurring defects, safety significance, or licensed-authority boundaries
- Rollback path:
  - disable the current specialist release
  - route design-quality requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry architecture-and-engineering-services --agent design-quality-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed architecture-and-engineering design-quality specialist for milestone package review, BIM and comment evidence handling, hold or release-boundary discipline, and corrective-action packaging.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
- Runtime prompts should explicitly remind the lane that it owns design-quality evidence handling and escalation only, not final licensed design approval, code authority, permit signoff, BIM execution ownership, or contractual certification authority.

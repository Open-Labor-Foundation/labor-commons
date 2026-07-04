# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route tax operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant tax workflow, document collection, e-file, notice, workpaper, and client collaboration systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for tax workflow, document collection, tax preparation, workpaper, e-file, notice management, extension tracking, client collaboration, document retention, and audit-log systems
  - escalation targets for licensed tax advisors, reviewers, engagement partners, legal specialists, quality assurance, delivery management, account owners, and privacy or data-security owners
  - tenant-specific maps for service model, return types, jurisdictions, filing calendars, engagement scope, client authorization, approved channels, review gates, e-file responsibilities, and completion evidence

## Materialization Requirements

- Required task and boundary metadata:
  - task intent, requested tax workflow action, and target output shape
  - client, entity type, tax period, jurisdiction, return or notice type, due date, and current lifecycle state
  - named adjacent-lane map, review-owner map, approval-owner map, and client-authority records
  - explicit refusal triggers for tax advice, legal interpretation, unsupported filing positions, return signing, representation, confidentiality conflicts, and completion without evidence
- Tenant-supplied or runtime-retrieved assumptions:
  - authoritative systems of record for organizers, source documents, workpapers, return status, review signoff, e-file authorization, filing acknowledgments, notice records, extensions, delivery, and retention
  - engagement scope, client commitments, service-level expectations, contractual boundaries, and approved communication channels
  - filing calendars, extension rules, state or local overlays, return-type handling, and notice response ownership
  - confidentiality rules, taxpayer-data access policy, consent handling, approved recipient rules, and data-loss escalation process
  - lifecycle states, throughput expectations, exception queues, rework states, and completion gates
- Regulated-lane caveats:
  - tax operations support is workflow execution and evidence packaging, not tax advice, legal interpretation, client representation, return signing, or reviewer signoff
  - the lane may summarize notice, e-file, source-document, and completion blockers but may not determine final tax positions, penalties, elections, amendments, or legal response strategy
  - non-U.S., state, local, payroll, excise, estate, trust, nonprofit, international, and entity-specific flows require tenant context before the runtime can act beyond blocked or escalated posture
- Refusal or orchestrator-return conditions:
  - required tenant facts, client authority, engagement scope, jurisdiction, return type, systems of record, or source documents are missing and would change the outcome
  - the request requires licensed tax advice, legal interpretation, representation before a taxing authority, reviewer or partner signoff, contractual approval, or account commitment changes
  - public-source and tenant-policy interpretations conflict materially
  - the request crosses into unauthorized disclosure or reuse of taxpayer information, unapproved delivery channel, privilege-sensitive handling, or a confidentiality incident

## Isolation

- Tenant boundary: no cross-tenant sharing of taxpayer data, organizers, source documents, workpapers, return statuses, e-file acknowledgments, notices, authority records, approvals, delivery records, or exception logs.
- Knowledge boundary: public Treasury, IRS, and AICPA baselines are shared; tenant procedures, client data, filing calendars, system identifiers, engagement scope, authorization records, and approval maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, connector names, workflow states, filing calendars, state or local overlays, workpaper index conventions, review gates, approved channels, and escalation maps
  - prohibited: widening the lane into tax advice, legal interpretation, final filing-position approval, return signing, client representation, confidentiality override, or contractual signoff

## Operations

- Monitoring:
  - log dispatch decisions, scope outcomes, workflow state transitions, missing-document packets, filing blockers, notice escalations, confidentiality holds, completion evidence records, and adjacent-lane handoffs
  - alert on stale source reviews, repeated missing-authorization blockers, repeated e-file rejects, recurring notice authority gaps, repeated confidentiality conflicts, and repeated requests for tax advice or completion without evidence
  - monitor requests that incorrectly seek licensed, legal, reviewer, partner, account, or privacy authority from the lane
- Logging:
  - record release version, tenant assumptions, client and tax-period identifiers permitted by tenant policy, jurisdiction, return or notice type, due date, current state, missing evidence, routed owners, and completion gates
  - record whether the request involved organizer intake, source-document collection, return-prep readiness, review status, e-file authorization, filing acknowledgment, e-file rejection, notice response, extension, delivery, or retention
- Rollback path:
  - disable the current specialist release
  - route tax operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed tax operations specialist for data gathering, return-prep readiness, filing logistics, extension tracking, notice routing, exception handling, and completion evidence capture.
- Runtime may still use `specification-based` until a retained implementation is explicitly promoted in a separate commit.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, required retrieval hooks, and completion-evidence gate behavior.

# Deployment Package

## Package Identity

- Agent: Intake and routing specialist
- Queue slug: `industry-overlays::administrative-support-and-business-services::intake-and-routing-specialist`
- Package path: `catalog/naics-overlays/administrative-support-and-business-services/intake-and-routing-specialist/`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not claimed

## Runtime Contract

`commons-crew` may materialize this lane from the spec pack only when the
runtime can retrieve the tenant-specific facts and records needed to constrain
the public baseline:

- service model, service catalog, intake procedure, SOW hierarchy, routing
  matrix, queue taxonomy, SLA model, and escalation matrix
- requester identity rules, client or account master records, authorization
  matrix, eligibility or prerequisite rules, access role model, and approval
  evidence
- current systems of record, record locations, retrieval hooks, duplicate-check
  rules, source hierarchy, and field ownership
- privacy label, confidentiality restrictions, retention schedule, legal hold
  state, call transcript handling rules, and audit logging requirements
- client, business unit, jurisdiction, program, facility, service family, and
  contract context
- adjacent owner map for back-office processing, administrative operations,
  contact center operations, records, compliance, legal, HR, finance, privacy,
  IT access, security, quality, and client approval decisions

If any of these facts would change acceptance, rejection, pend, routing, or
handoff and are unavailable, the runtime must refuse completion or return to the
orchestrator with a missing-fact list.

## Boundaries

The deployed spec must stay inside administrative support intake and
pre-execution routing. It may classify requests, validate prerequisites,
prepare intake disposition notes, assemble evidence-backed handoff packages,
identify next owners, and escalate blocked dependencies. It must refuse or
escalate when asked to approve downstream work, grant access, waive
eligibility, override policy, release payment, make HR decisions, provide legal
interpretation, decide compliance or privacy meaning, handle security
incidents, certify safety, or run the client's complete business process.

## Required Metadata

Materialization must carry:

- issue URL and queue slug
- workflow phase group and industry profile
- delivery target and runtime strategy
- source baseline version and review dates
- scenario and ability coverage status
- tenant configuration version
- source system IDs and retrieval timestamps
- requester identity, client or account identifier, service catalog item, SOW
  basis, queue state, disposition, current owner, next owner, and audit event
  references
- refusal, escalation, and orchestrator return reasons

## Deployment Steps

1. Load the manifest, research summary, functionality map, scenario suite,
   results, readiness evidence, deployment notes as one
   package.
2. Verify `readiness/evidence.json` reports `delivery_status: validated`,
   `functionality_coverage_met: true`, human verification, and deployment and
   commercialization readiness.
3. Bind tenant policies, service catalog, SOW repository, routing matrix, queue
   system, source hierarchy, retrieval hooks, authorization matrix, access
   model, and adjacent owner map.
4. Run a tenant smoke test covering missing prerequisites, invalid service
   scope, wrong-lane routing, access bypass refusal, ambiguous ownership,
   incomplete handoff context, conflicting policy, tenant adaptation, and normal
   in-scope intake acceptance.
5. Enable specification-based runtime use only for tenants with explicit Administrative
   Support And Business Services intake scope, retrieval coverage, and audit
   logging.

## Rollback

Rollback is package-level and runtime-level:

- Remove the package from the tenant entitlement or materialization allowlist.
- Revert to the previous approved intake and routing package or general
  orchestrator routing.
- Preserve all intake disposition notes, prerequisite checklists, refusals,
  routing decisions, escalation packages, handoff summaries, and audit logs
  generated while the package was active.
- Review any accepted or routed work for missing SOW scope, service catalog,
  authorization, access, owner, handoff, privacy, retention, or source-conflict
  issues.
- Do not delete tenant records, call recordings, transcripts, messages, or
  intake evidence as part of rollback unless the tenant's records governance
  owner separately approves disposition.

## Monitoring

Monitor for:

- repeated missing tenant facts or retrieval-hook failures
- intake acceptance without service catalog, SOW, authorization, access, or
  source-record support
- attempts to bypass identity, eligibility, authorization, access, duplicate, or
  handoff-context checks
- ambiguous ownership, duplicate queue items, stale owner assignments, and
  dropped work
- source-of-truth conflicts between CRM, service desk, workflow queue, contact
  center, document repository, contract repository, IAM, and audit logs
- adjacent-lane spillover into legal, HR, finance, compliance, privacy,
  security, records governance, quality, safety, or client approval
- stale public sources beyond the configured refresh interval

## Promotion To retained implementation

Promotion should occur only if usage proves common enough to justify an
implemented runtime. A promotion PR must add connector contracts, tenant
configuration schemas, runtime tests, routing and source-precedence tests,
audit logging tests, safety/refusal tests, telemetry, rollback automation, and
human approval evidence. Until that PR is merged, this package remains
validated `specification-based`.

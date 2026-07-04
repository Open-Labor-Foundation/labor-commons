# Deployment Package

## Package Identity

- Agent: Administrative operations specialist
- Queue slug: `industry-overlays::administrative-support-and-business-services::administrative-operations-specialist`
- Package path: `catalog/naics-overlays/administrative-support-and-business-services/administrative-operations-specialist/`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not claimed

## Runtime Contract

`commons-crew` may materialize this lane from the spec pack only when the
runtime can retrieve the tenant-specific facts and records needed to constrain
the public baseline:

- service catalog, statement of work, administrative procedure, queue owner
  model, SLA model, and escalation matrix
- source hierarchy, official-record owner, update permissions, and audit-log
  requirements
- current systems of record, record locations, retrieval hooks, and field
  ownership
- record classification, retention schedule, legal hold state, privacy label,
  access role, and disclosure restrictions
- client, business unit, jurisdiction, program, facility, and contract context
- adjacent owner map for records governance, compliance, legal, HR, finance,
  privacy, IT access, security, and client management decisions

If any of these facts would change the answer and are unavailable, the runtime
must refuse completion or return to the orchestrator with a missing-fact list.

## Boundaries

The deployed spec must stay inside administrative operations and records
discipline. It may classify requests, validate records, assemble evidence,
prepare status notes, maintain permitted administrative fields, and route
handoffs. It must refuse or escalate when asked to approve official records,
change retention or access states, decide legal or compliance meaning, release
payments, make HR decisions, override policy, certify safety, or operate the
client's complete business process.

## Required Metadata

Materialization must carry:

- issue URL and queue slug
- workflow phase group and industry profile
- delivery target and runtime strategy
- source baseline version and review dates
- scenario and ability coverage status
- tenant configuration version
- source system IDs and retrieval timestamps
- record owner, approver, and audit event references for any update note
- refusal, escalation, and orchestrator return reasons

## Deployment Steps

1. Load the manifest, research summary, functionality map, scenario suite,
   results, readiness evidence, deployment notes as one
   package.
2. Verify `readiness/evidence.json` reports `delivery_status:
   validated`, `functionality_coverage_met: true`, human verification, and
   deployment readiness.
3. Bind tenant policies, service catalog, system retrieval hooks, retention
   schedule, access model, source hierarchy, and adjacent owner map.
4. Run a tenant smoke test covering missing documents, unauthorized official
   record change, retention/access conflict, source conflict, adjacent-lane
   handoff, tenant adaptation, and normal administrative record update.
5. Enable specification-based runtime use only for tenants with explicit administrative
   operations scope and logging.

## Rollback

Rollback is package-level and runtime-level:

- Remove the package from the tenant entitlement or materialization allowlist.
- Revert to the previous approved administrative operations package or general
  orchestrator routing.
- Preserve all record-update notes, refusals, escalation packages, and audit
  logs generated while the package was active.
- Review any completed maintenance actions for missing authority, retention,
  privacy, access, or source-conflict issues.
- Do not delete tenant records as part of rollback unless the tenant's records
  governance owner separately approves disposition.

## Monitoring

Monitor for:

- repeated missing tenant facts or retrieval-hook failures
- attempted official-record changes without authority
- retention, privacy, access, or legal hold conflicts
- source-of-truth conflicts between service desk, document repository, queue,
  and audit logs
- adjacent-lane spillover into HR, finance, legal, compliance, privacy, IT
  access, records governance, or client management
- stale public sources beyond the configured refresh interval

## Promotion To retained implementation

Promotion should occur only if usage proves common enough to justify an
implemented runtime. A promotion PR must add connector contracts, tenant
configuration schemas, runtime tests, audit logging tests, safety/refusal tests,
telemetry, rollback automation, and human approval evidence. Until that PR is
merged, this package remains validated `specification-based`.

# Deployment Package

## Package Identity

- Agent: Shared services specialist
- Queue slug: `industry-overlays::administrative-support-and-business-services::shared-services-specialist`
- Package path: `catalog/naics-overlays/administrative-support-and-business-services/shared-services-specialist/`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not claimed

## Runtime Contract

`commons-crew` may materialize this lane from the spec pack only when the
runtime can retrieve the tenant-specific facts and records needed to constrain
the public baseline:

- service catalog, statement of work, SLA, service model, queue owner model,
  entitlement rules, runbooks, knowledge articles, and escalation matrix
- source hierarchy, provider or resolver ownership, approval matrix, exception
  policy, closure rules, communication restrictions, and audit-log requirements
- current systems of record, record locations, retrieval hooks, and field
  ownership
- requester authority, client, business unit, jurisdiction, program, facility,
  contract, provider, and confidentiality context
- privacy classification, access role model, cross-client segregation rules,
  retention or legal hold state, and disclosure restrictions
- adjacent owner map for records governance, compliance, legal, HR, finance,
  privacy, procurement, information security, technical, safety, analytics,
  and client management decisions

If any of these facts would change the answer and are unavailable, the runtime
must refuse completion or return to the orchestrator with a missing-fact list.

## Boundaries

The deployed spec must stay inside shared-service support and resolution. It
may classify requests, validate service catalog and entitlement context,
assemble evidence, apply documented runbook and SLA rules, produce resolution
notes, maintain service status, prepare stakeholder communication summaries,
and route handoffs. It must refuse or escalate when asked to approve policy
exceptions, eligibility exceptions, financial credits, payment releases,
contract changes, HR outcomes, legal interpretations, compliance
determinations, privacy disclosures, records-governance decisions, procurement
substitutions, technical fixes, safety assurances, or client management
commitments.

## Required Metadata

Materialization must carry:

- issue URL and queue slug
- workflow phase group and industry profile
- delivery target and runtime strategy
- source baseline version and review dates
- scenario and ability coverage status
- tenant configuration version
- service catalog item, SOW scope, SLA, entitlement basis, queue owner, and
  provider or resolver owner
- source system IDs, retrieval timestamps, runbook or knowledge article
  version, and audit event references
- refusal, escalation, handoff, and orchestrator return reasons

## Deployment Steps

1. Load the manifest, research summary, functionality map, scenario suite,
   results, readiness evidence, deployment notes as one
   package.
2. Verify `readiness/evidence.json` reports `delivery_status:
   validated`, `functionality_coverage_met: true`, human verification, and
   deployment readiness.
3. Bind tenant policies, service catalog, SOWs, SLAs, runbooks, knowledge
   base, entitlement rules, queue systems, retrieval hooks, source hierarchy,
   confidentiality rules, and adjacent owner map.
4. Run a tenant smoke test covering normal request resolution, missing details,
   policy exception refusal, repeat failure escalation, adjacent-lane handoff,
   evidence gap, source conflict, tenant adaptation, and industry-specific
   terminology normalization.
5. Enable specification-based runtime use only for tenants with explicit shared-services
   scope, source-system retrieval, confidentiality controls, and audit logging.

## Rollback

Rollback is package-level and runtime-level:

- Remove the package from the tenant entitlement or materialization allowlist.
- Revert to the previous approved shared-services package or general
  orchestrator routing.
- Preserve all resolution notes, stakeholder communications, refusals,
  escalation packages, handoffs, and audit logs generated while the package was
  active.
- Review completed service dispositions for missing catalog authority, SOW
  scope, entitlement, source evidence, confidentiality, policy, SLA, access, or
  source-conflict issues.
- Do not delete tenant service records as part of rollback unless the tenant's
  records governance owner separately approves disposition.

## Monitoring

Monitor for:

- repeated missing tenant facts or retrieval-hook failures
- attempted policy, eligibility, pricing, SLA, access, or contract overrides
- repeat failures hidden behind temporary closure
- source-of-truth conflicts between service desk, provider tickets, workflow
  queue, document repository, communication logs, and audit records
- adjacent-lane spillover into HR, finance, legal, compliance, privacy,
  procurement, technical, safety, information security, records governance, or
  client management
- stale service catalogs, runbooks, knowledge articles, or public sources
  beyond the configured refresh interval

## Promotion To retained implementation

Promotion should occur only if usage proves common enough to justify an
implemented runtime. A promotion PR must add connector contracts, tenant
configuration schemas, service catalog and entitlement retrieval, queue and SLA
integration, knowledge-base freshness checks, audit logging tests,
safety/refusal tests, telemetry, rollback automation, and human approval
evidence. Until that PR is merged, this package remains validated
`specification-based`.

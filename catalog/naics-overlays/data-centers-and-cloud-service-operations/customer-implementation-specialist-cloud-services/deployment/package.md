# Deployment Package

## Runtime and Strategy

- Target runtime: `commons-crew` in `specification-based` mode.
- Runtime strategy: `specification-based`.
- Runtime promotion condition: promote to retained-implementation runtime only with explicit governance approval after sustained, low-risk execution.

## Required Task and Boundary Metadata

- `manifest.yaml` with `workflow_phase_group` and `industry_profile` resolved.
- `evaluation/functionality-map.json` and `evaluation/scenarios.md` for ability coverage.
- Required artifact taxonomy and terminology mapping for cloud implementation requests.
- Boundary rules for refund/compensation, legal, safety, and engineering handoff cases.
- Tenant retrieval bundle providing:
  - contract and SLA overlays,
  - approval ownership matrix,
  - incident/implementation escalation chain,
  - tenant system map (ITSM, CMDB, change, monitoring),
  - regional privacy and data-residency policy overlays.

## Required Tenant and Retrieval Inputs

- Tenant policy and authority context for pricing/compensation exceptions.
- Runbook and implementation record taxonomy for current tenant.
- Systems-of-record endpoints and status retrieval hooks.
- Adjacent specialist mappings for complaint recovery, legal/compliance, security, and engineering control.
- Tenant-specific assumptions for what is classified as safety-critical versus routine support.

## Materialization Expectations

- Mandatory sources of truth:
  - ticketing / support platform,
  - change-management / deployment platform,
  - CMDB and environment registry,
  - contract and policy repository,
  - communication log archive.
- Retrieval policy:
  - validate request scope and artifact set before any disposition,
  - escalate unresolved conflicts to orchestrator or adjacent owners,
  - return `out_of_scope`, `blocked`, or `handoff` states where required.

## Deployment and Rollback

- Logging requirements:
  - request ID and tenant context,
  - evidence sufficiency state,
  - confidence state and escalation reason,
  - boundary decision and target handoff owner.
- Monitoring:
  - missing-prerequisite frequency,
  - repeat-failure escalations,
  - source-policy conflict escalations,
  - unsupported-workaround refusals.
- Rollback:
  - disable this specialist bundle,
  - route open requests to orchestrator handoff,
  - preserve request and escalation context for continuity.

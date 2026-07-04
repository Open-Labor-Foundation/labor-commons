# Deployment Package

## Deployment Posture

- Package path: `catalog/naics-overlays/administrative-support-and-business-services/service-administration-analytics-specialist/`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`
- Validation profile: `standard`
- Release version: `v0.1.0`

This package can be deployed as a validated spec pack for routing,
evaluation, prompt grounding, and readiness review. It must not be represented
as a retained implementation until a separate implementation package, retrieval
wiring, tests, and governance approval are committed.

## Materialization Requirements

`commons-crew` would need the following before safely materializing this lane:

- Task metadata: request id, client, business unit, service family, SOW or
  contract scope, service catalog item, metric purpose, target audience,
  reporting cadence, requested output shape, and publication context.
- Boundary metadata: adjacent specialists, approval-owner map, escalation
  matrix, policy hierarchy, client scorecard authority, disclosure owner,
  records owner, privacy/access owner, safety/security owner where applicable,
  and orchestrator-return rules.
- Tenant facts: metric dictionary, source-precedence policy, denominator and
  exclusion rules, target thresholds, refresh windows, confidentiality class,
  cross-client segregation rules, retention/legal-hold status, and retrieval
  hooks for service desk, workflow, document, audit, CRM, BI, IAM, and GRC
  systems.
- Evidence dependencies: service desk records, workflow queue exports,
  document repository indexes, service evidence binders, approval packets,
  audit logs, reopened-work logs, exception registers, BI/dashboard definitions,
  refresh timestamps, retention metadata, and access evidence.
- Regulated-lane caveats: legal, privacy, records disposition, safety/security,
  finance, HR, contract, policy-override, and final disclosure authority remain
  outside this lane.

## Runtime Controls

- Require source lineage, metric definition, denominator logic, refresh
  timestamp, cadence, audience, caveat, confidence state, and escalation owner
  in every report package.
- Segment or block metrics when a service family includes safety/security,
  regulated, or restricted evidence and the authority facts are missing.
- Preserve conflicting values from service desk, workflow, document, audit, BI,
  and client scorecard systems instead of collapsing them into one metric.
- Record tenant-specific adaptations separately from public baseline and prior
  scorecards.
- Refuse unsupported causal, benchmark, forecast, policy, client-facing,
  regulator-facing, investor-facing, audit-ready, or certainty claims.

## Rollback

Rollback is specification rollback only:

1. Remove the package from routing or catalog inclusion.
2. Revert to the previous adjacent administrative analytics or shared-services
   routing behavior.
3. Preserve generated outputs, source lineage, and escalation notes for audit.
4. Notify owners that no retained-implementation runtime was removed because this release
   is `specification-based`.

## Promotion To retained implementation

Promote only if usage proves common enough and the following are separately
approved:

- Stable tenant retrieval wiring for service desk, workflow, document,
  approval, audit, BI, IAM, retention, and GRC systems.
- Deterministic metric-definition and source-precedence configuration.
- Automated tests for ambiguous metric definitions, incomplete data,
  cross-system conflicts, unsupported claims, disclosure risk, adjacent-lane
  routing, tenant adaptation, and overgeneralization refusal.
- Governance signoff for privacy, records, access, security, safety, finance,
  HR, legal, and client disclosure boundaries.
- Rollback plan for any built automation that touches dashboards, reports, or
  downstream routing.

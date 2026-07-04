# Deployment Package

## Runtime Model

- Deployment model: versioned franchise-system field consulting package at `catalog/naics-overlays/franchise-systems-and-multi-unit-enterprise-support/field-consulting-specialist-franchise-systems/`.
- Runtime expectation: orchestrator-invoked execution specialist overlay for franchise-system incidents, access checks, change-readiness review, and interface dependency routing.
- Runtime strategy: `specification-based`.
  - This package does not claim retained-implementation execution authority.
  - retained-implementation promotion requires a separate explicit commit and promotion flow.

## Required Configuration

- package version and manifest release alignment
- authority-source review policy and stale-source handling
- runtime retrieval hooks for franchise management records, agreement or manual repositories, ITSM, IAM, change-management, and interface-monitoring systems
- jurisdiction map, state-addendum retrieval, and franchise compliance escalation roster
- lifecycle trace integration for states: `accepted`, `in_progress`, `exception_queued`, `rework`, `awaiting_approval`, `completed`, `blocked`, `escalated`

## Tenant Adaptation and Boundaries

- Tenant-owned context: jurisdiction footprint, state addenda, operating-manual revisions, approved supplier and required-system standards, multi-unit ownership structure, IAM policy, approval matrix, and vendor contracts.
- Allowed adaptation: location hierarchy naming, field-support cadence, evidence field mappings, stricter MFA or CAB thresholds, and unit-level signoff rules.
- Prohibited adaptation: changing lane authority from execution support to legal interpretation, disclosure drafting, financial approval, security override, or retained-implementation runtime claims.

## Queue and Lifecycle Behavior

- Expected lifecycle states:
  - `accepted`, `in_progress`, `exception_queued`, `rework`, `awaiting_approval`, `completed`, `blocked`, `escalated`
- State transitions are evidence-driven and reversible when missing artifacts are corrected.
- Explicit exception-queue entries are required for missing franchise documents, jurisdiction conflicts, unresolved dependencies, missing testing or rollback evidence, and unsupported authority requests.

## Monitoring and Logging

- Monitor:
  - completion attempts without unit-level evidence,
  - repeated jurisdiction or state-addendum conflicts,
  - dependency failures requiring vendor or platform routing,
  - repeated requests to bypass complaint, disclosure, or change controls,
  - stale-source checks against the authoritative review dates.
- Log:
  - request id, current state, affected units, and jurisdiction,
  - evidence references used in execution and completion decisions,
  - escalation destination and reason,
  - source conflicts and tenant-policy overrides captured during handling.

## Rollback Path

- Disable this specialist in the orchestrator route table.
- Re-route affected franchise-system requests to safe fallback handling.
- Restore the prior validated package from the release catalog.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry franchise-systems-and-multi-unit-enterprise-support --agent field-consulting-specialist-franchise-systems` before re-enabling.

- Current package remains `specification-based` as requested by issue #1356.
- Promote to retained-implementation only after:
  - repeated low-conflict runtime materializations show this lane is common enough to justify a maintained build,
  - tenant telemetry confirms consistent boundary compliance for franchise-system incidents and changes,
  - and an explicit promotion PR commits the retained-implementation package and updates readiness metadata.

## Support Owner

- Repository owner or catalog release steward.

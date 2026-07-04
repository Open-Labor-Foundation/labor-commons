# Deployment Package

## Runtime Model

- Target runtime strategy: `specification-based`.
- Canonical artifact: this spec pack, including `manifest.yaml`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, and `readiness/evidence.json`.
- Generated implementations are promoted artifacts only. They must not become source of truth unless a separate trusted-build promotion is approved.
- Materializers such as `commons-crew` must load task metadata, boundary metadata, required tenant facts, source freshness, systems of record, retrieval permissions, and evidence requirements before producing deterministic guidance.

## Materialization Requirements

- Required task and boundary metadata:
  - specialist slug, domain family, runtime strategy, supported tasks, output shapes, refusal rules, adjacent specialists, and orchestrator return rules.
  - records-documentation-and-administration contract for record update notes, evidence packets, audit-trail summaries, retention caveats, and approval boundaries.
- Tenant-supplied or retrieved facts:
  - service architecture, dependency map, SLO/SLI/error-budget history, telemetry, incident/change records, deployment and rollback records, backup/restore evidence, DR plans, capacity and quota records, IaC state, policy constraints, owner map, and approval matrix.
- Evidence dependencies:
  - every output must name source IDs, tenant systems of record, evidence references, assumptions, unresolved gaps, confidence state, owner handoffs, and approval-required decisions.
- Refusal and orchestrator return conditions:
  - missing required records, stale authority sources, conflicting source-of-truth records, unresolved tenant policy precedence, absent approval authority, application-only work, primary security/IAM work, legal/procurement/pricing/risk-acceptance requests, help-desk tickets, and production execution requests.

## Isolation

- Tenant boundary: tenant-scoped prompts, retrieval credentials, logs, telemetry extracts, evidence stores, and configuration.
- Knowledge boundary: public source baseline remains separate from tenant-specific policy and records.
- Adaptation boundary: tenant policy may make recommendations stricter, but it must not erase public-source traceability or imply provider guarantees unsupported by current sources.
- Cross-tenant sharing: disallowed for tenant evidence, logs, prompts, telemetry, incident data, runbooks, and policy records.

## Monitoring And Logging

- Monitor request volume, latency, refusal rate, orchestrator return rate, missing-evidence rate, source-staleness events, and scenario coverage drift.
- Log scope verdict, scenario family, source IDs, retrieval timestamps, tenant evidence references, confidence state, missing facts, handoff owner, and refusal reason.
- Retain runtime decision logs according to tenant retention policy. Default audit evidence retention is 365 days unless tenant policy, legal hold, privacy rule, or contract requires a different period.
- Alert on attempts to backdate or delete reliability records, approve production changes, accept risk, publish audit packets, or provide legal/procurement/security attestations through this lane.

## Rollback Path

- Roll back by pinning materializers to the prior approved spec-pack version and disabling tenant-specific overrides added after this release.
- Freeze generated implementation promotion while rollback is active.
- Route complex or disputed reliability requests to orchestrator or human reviewer until source freshness, evidence retrieval, and boundary rules are restored.
- Preserve audit logs and evidence packets produced during rollback for comparison and regression review.

## Promotion Criteria

Retain a trusted built implementation in-repo only when all criteria are met:

- sustained usage volume shows a retained implementation materially improves cost, latency, or reliability;
- generated implementation passes the same 18-scenario suite and functionality map with no unreviewed regressions;
- runtime tests cover source refresh, tenant evidence retrieval, logging, rollback, retention, and boundary enforcement;
- a human maintainer records separate promotion approval.

Issue #1642 refreshes the spec pack. It does not by itself justify trusted built-runtime ownership.

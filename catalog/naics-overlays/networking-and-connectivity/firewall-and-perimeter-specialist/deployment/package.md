# Deployment Package

## Runtime

- Runtime strategy: `specification-based`.
- Target runtime: catalog specialist package materialized by an orchestrator or future `commons-crew` runtime only after loading `manifest.yaml`, `evaluation/research-summary.json`, `evaluation/functionality-map.json`, `evaluation/results.json`, `readiness/evidence.json`, and tenant context.
- Deployment model: read-only spec package with tenant-scoped retrieval and operator-owned implementation. No production firewall execution is enabled by this package.
- Required secrets: none for the spec pack itself. A future materializer may need tenant-approved read-only retrieval credentials for firewall exports, log stores, CMDB, change records, and evidence stores; those credentials must remain tenant-scoped and must not be persisted in the pack.
- Required configuration: confidence threshold, orchestrator return target, adjacent specialist routing map, tenant evidence repositories, source freshness policy, exception TTL, hold/release owner map, rollback evidence requirement, and logging destination.

## Materialization Requirements

Any future runtime materializer must retrieve or receive:

- Firewall platform and policy hierarchy, rule order semantics, default actions, rule exports, object groups, NAT rules, route adjacency, and zone maps.
- Firewall logs, VPC Flow Logs or equivalent flow telemetry, Azure Firewall logs/metrics where relevant, rule hit counts, packet summaries, health metrics, incident tickets, and monitoring excerpts.
- Change record, service owner, approval authority, exception owner, exception expiration, maintenance window, rollback plan, risk register, hold state, and corrective-action history.
- Tenant policy precedence, contractual or regulated-data constraints, evidence retention rules, source freshness, and public source IDs used by the pack.

Materialized output must include source IDs, evidence references, assumptions,
confidence, missing facts, refusal triggers, adjacent-lane routing, and
operator-owned validation and rollback checks.

## Isolation

- Tenant boundary: tenant records, policy exports, logs, topology, and evidence remain tenant-scoped. Cross-tenant sharing is not allowed.
- Knowledge boundary: public source baseline is restricted to the authoritative sources in `manifest.yaml` and `evaluation/research-summary.json`; tenant-specific policy can narrow the baseline but must not remove source traceability.
- Execution boundary: the package provides advisory guidance, review notes, rule edit suggestions, and escalation packages. It does not push firewall policy, modify firmware, execute CLI/API changes, approve exceptions, clear holds, or communicate with customers/regulators.
- Adaptation policy: allowed for tenant naming, retrieval paths, evidence stores, exception TTL, output formatting, and policy precedence. Adaptation cannot authorize production execution or adjacent-specialty ownership.

## Operations

- Monitoring: track source freshness, rule-review coverage, evidence gaps, low-confidence escalations, hold/release recommendations, exception recommendations, boundary refusals, adjacent-lane handoffs, repeat defects, and scenario drift.
- Logging: record source IDs, tenant evidence references, retrieval timestamps, assumptions, confidence, output shape, refusal reason, handoff target, and hold/release owner for audit. Do not log tenant secrets.
- Rollback path:
  - Revert to the last validated package version if source freshness, functionality coverage, tenant isolation, or scenario behavior fails.
  - Disable validated materialization and route all requests to orchestrator review if `accuracy_acceptance_met`, `functionality_coverage_met`, or human verification is no longer true.
  - Return to `specification-based` behavior if any trusted generated implementation drifts, lacks tenant-isolation evidence, or misses regression coverage.
- Support owner: repository owner with specialist steward approval for any scope expansion, source replacement, trusted-build promotion, or relaxation of refusal rules.

## Promotion Criteria

Keep this package `specification-based` unless all promotion criteria are met:

- Sustained usage proves the lane is called frequently enough to justify retaining a generated implementation.
- Full scenario regression passes, including all boundary, low-confidence, hold/release, and adjacent-lane cases.
- Human reviewer approves source refresh, tenant-isolation controls, monitoring/logging behavior, rollback path, and direct-execution boundaries.
- The promoted implementation records how it will be removed or rolled back if behavior drifts.

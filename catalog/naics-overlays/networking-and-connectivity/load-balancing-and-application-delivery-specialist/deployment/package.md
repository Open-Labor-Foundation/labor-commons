# Deployment Package

## Runtime

- Target runtime: Orchestrator-attached specialist reasoning service or future materializer consuming the spec-pack artifacts.
- Runtime strategy: specification-based.
- retained implementation: not claimed.
- Deployment model: Multi-tenant shared control plane with tenant-isolated retrieval, policy overlays, evidence logging, service/support disposition, and orchestrator return behavior.
- Required secrets:
  - Retrieval tokens for tenant-approved application-delivery source-of-truth, monitoring, incident, change, certificate metadata, and evidence systems.
  - Audit sink and telemetry credentials.
  - No production load-balancer, firewall, DNS, proxy, certificate private key, cloud-network, or application credentials may be accepted for live execution.
- Required configuration:
  - Tenant policy, approval owner, change authority, rollback, escalation, and safety-critical service matrix.
  - Retrieval hooks for load balancers, ingress controllers, reverse proxies, CDN/WAF, DNS, routes, certificates, monitoring, logs, incidents, changes, runbooks, and ADRs.
  - Source refresh schedule and authority-review windows.
  - Tenant confidence thresholds and orchestrator return policy.

## Materialization Requirements

A future `commons-crew` materializer needs:

- Required task and boundary metadata: slug, domain, target delivery level, runtime strategy, supported workflows, output shapes, source baseline, refusal triggers, orchestrator return rules, and adjacent specialists.
- Tenant-supplied or retrieved facts: traffic profile, availability target, topology, load-balancer or ingress configuration, target groups, DNS zones, routing policy, firewall/NAT context, WAF policy, TLS certificate and policy context, health-check records, logs, metrics, traces, incident timeline, change window, rollback owner, and authority matrix.
- Domain caveats: recommendations are guidance only; authorized operators perform and approve changes; compliance mapping is evidence support only; tenant data must stay isolated; missing telemetry cannot be treated as proof of health.
- Evidence dependencies: public source IDs, tenant systems of record, current record timestamps, confidence level, assumptions, validation gates, rollback conditions, stakeholder summary, and handoff owner.
- Refusal or return conditions: endpoint lifecycle, identity policy, application code, application-only tuning, procurement, governance, legal, compliance signoff, safety clearance, live change, credential handling, missing evidence, repeat failure, source conflict, policy conflict, or cross-specialty ownership.

## Isolation

- Tenant boundary: Strictly separate tenant topology, traffic records, configuration exports, certificates metadata, policy, telemetry, logs, incidents, changes, source records, and adaptation records.
- Knowledge boundary:
  - Public RFC, vendor, platform, and NIST source baselines are reusable.
  - Tenant load-balancer, ingress, DNS, route, WAF, certificate, monitoring, incident, change, and policy data are tenant-isolated.
- Adaptation policy:
  - Allowed: tenant terminology, retrieval mappings, approved policy overlays, availability tiers, source-of-truth precedence, and tuning parameters.
  - Not allowed: direct source-baseline rewrites, cross-tenant sharing, unreviewed generated runtime retention, unsupported authority expansion, or live execution.

## Operations

- Monitoring:
  - Track scenario-family usage, source IDs used, source freshness, output shape, boundary referrals, low-confidence escalations, policy conflicts, repeat failures, and missing-evidence patterns.
  - Track false-positive and false-negative boundary decisions through reviewer feedback.
  - Alert when source review intervals expire or tenant evidence timestamps exceed policy thresholds.
- Logging:
  - Log request ID, tenant ID, scenario family, decision path, source IDs, tenant evidence references, confidence level, assumptions, refusal or handoff reason, stakeholder communication state, and materialization version.
  - Retain logs according to tenant policy; default retention is 365 days when no stricter tenant policy is supplied.
  - Do not log secrets, private keys, credentials, packet payloads, authentication tokens, or unnecessary personal data.
- Rollback path:
  - Disable the current spec-pack version for new routing.
  - Revert orchestrator routing to the prior validated package version.
  - Freeze tenant adaptation overlays and generated materializations.
  - Re-run JSON validation, package review, and scenario coverage checks before restoring the v1.1.0 package.
  - Suspend validated claims if a blocking source decay, scenario regression, evidence-traceability failure, or authority-boundary failure is found.
- Support owner:
  - Networking-and-connectivity catalog owner.
  - Platform operations owner.
  - Orchestrator owner for adjacent-specialist routing.

## Promotion And Retention

- Runtime may remain specification-based indefinitely.
- A trusted built implementation may be retained in-repo only when usage proves the lane is called frequently enough to justify retention.
- Promotion requires:
  - Frequent-use evidence showing regeneration latency, cost, or consistency risk.
  - A generated implementation that passes the same 18-scenario suite and all boundary tests.
  - Verified tenant isolation, source refresh, logging, rollback, evidence traceability, stakeholder communication, and human review controls.
  - Maintainer approval documenting why specification-based materialization is no longer sufficient.

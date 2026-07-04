# Deployment Package

## Runtime

- Target runtime: Orchestrator-attached specialist reasoning service or future materializer consuming the spec-pack artifacts.
- Runtime strategy: specification-based.
- retained implementation: not claimed.
- Deployment model: Multi-tenant shared control plane with tenant-isolated retrieval, policy overlays, evidence logging, and orchestrator return behavior.
- Required secrets:
  - Retrieval tokens for tenant-approved source-of-truth, monitoring, change, and evidence systems.
  - Audit sink and telemetry credentials.
  - No production router, switch, firewall, load-balancer, DNS, DHCP, or cloud-network device credentials may be accepted for live execution.
- Required configuration:
  - Tenant policy, approval owner, change authority, rollback, and escalation matrix.
  - Retrieval hooks for diagrams, IPAM, DNS, DHCP, route policy, firewall policy, load-balancer policy, telemetry, incident, and change systems.
  - Source refresh schedule and authority-review windows.
  - Tenant confidence thresholds and orchestrator return policy.

## Materialization Requirements

A future `commons-crew` materializer needs:

- Required task and boundary metadata: slug, domain, target delivery level, runtime strategy, supported workflows, output shapes, source baseline, refusal triggers, orchestrator return rules, and adjacent specialists.
- Tenant-supplied or retrieved facts: topology, IPAM, VLAN/subnet inventory, route tables, BGP/OSPF/BFD state, DNS zones, DHCP scopes and relays, firewall/NAT/load-balancer policy, WAN and cloud edge context, telemetry, criticality, outage impact, change window, and owner map.
- Domain caveats: recommendations are guidance only; authorized operators perform and approve changes; compliance mapping is evidence support only; tenant data must stay isolated.
- Evidence dependencies: public source IDs, tenant systems of record, current record timestamps, confidence level, assumptions, validation gates, rollback conditions, and handoff owner.
- Refusal or return conditions: endpoint, identity, device-management, application-only, penetration-testing, forensic, legal, compliance-signoff, procurement, live change, credential handling, missing evidence, or conflicting authority.

## Isolation

- Tenant boundary: Strictly separate tenant topology, policy, telemetry, logs, source exports, and adaptation records.
- Knowledge boundary:
  - Public RFC, vendor, platform, and NIST source baselines are reusable.
  - Tenant topology, IPAM, DNS, DHCP, firewall, route, telemetry, policy, incident, and change data are tenant-isolated.
- Adaptation policy:
  - Allowed: tenant terminology, retrieval mappings, approved policy overlays, and tuning parameters.
  - Not allowed: direct source-baseline rewrites, cross-tenant sharing, unreviewed generated runtime retention, or unsupported authority expansion.

## Operations

- Monitoring:
  - Track scenario-family usage, source IDs used, source freshness, boundary referrals, low-confidence escalations, policy conflicts, and repeated missing-evidence patterns.
  - Track false-positive and false-negative boundary decisions through reviewer feedback.
  - Alert when source review intervals expire or tenant evidence timestamps exceed policy thresholds.
- Logging:
  - Log request ID, tenant ID, scenario family, decision path, source IDs, tenant evidence references, confidence level, assumptions, refusal or handoff reason, and materialization version.
  - Retain logs according to tenant policy; default retention is 365 days when no stricter tenant policy is supplied.
  - Do not log secrets, credentials, packet payloads, or unnecessary personal data.
- Rollback path:
  - Disable the current spec-pack version for new routing.
  - Revert orchestrator routing to the prior validated package version.
  - Freeze tenant adaptation overlays and generated materializations.
  - Re-run JSON validation, package review, and scenario coverage checks before restoring the v1.1.0 package.
  - Suspend validated claims if a blocking source decay, scenario regression, or authority-boundary failure is found.
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
  - Verified tenant isolation, source refresh, logging, rollback, and human review controls.
  - Maintainer approval documenting why specification-based materialization is no longer sufficient.

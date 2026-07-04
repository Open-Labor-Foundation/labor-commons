# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Delivery level: validated spec pack.
- Deployment model: versioned catalog artifact consumed by an orchestrator or future materializer.
- retained implementation: not claimed and not retained.
- Built implementation promotion: allowed only after usage proves repeated demand, source stability, tenant isolation, rollback behavior, and scenario pass-rate stability.

The committed package is the canonical source of truth for future generation.
Any previous built implementation is baseline context only and must not override
the manifest, research summary, functionality map, evaluation scenarios, or
readiness evidence.

## Materialization Requirements

A runtime materializer such as `commons-crew` must load:

- Agent slug, queue slug, domain family, delivery level, workflow phase group, industry profile, runtime strategy, source baseline, validation profile, and release version.
- Owned workflows, owned artifacts, minimum tenant facts, retrieval dependencies, output shapes, refusal triggers, orchestrator return rules, and adjacent specialists.
- Required ability map from `evaluation/functionality-map.json`.
- Research constraints from `evaluation/research-summary.json`.
- Scenario evidence from `evaluation/results.json`.

Before producing tenant-specific output, the materializer must retrieve or
confirm:

- Site diagrams, subnet plans, route tables, traffic selectors, VPN endpoint inventory, gateway/client profile records, and failover expectations.
- DNS, DHCP, IPAM, NAT, firewall path, identity handoff, certificate/key, telemetry, incident, change, runbook, and approval records.
- Tenant source precedence, data classification, regulated or contractual caveats, evidence access permissions, and rollback authority.

## Isolation

- Tenant diagrams, logs, credentials, client profiles, certificate/key data, and topology records remain tenant-scoped.
- Shared public sources may be reused, but tenant adaptations must not be promoted back into the public baseline unless reviewed through release governance.
- Cross-tenant sharing of tenant-specific routes, groups, logs, addresses, keys, client profiles, or incident facts is prohibited.
- Runtime logs must record request type, boundary verdict, source IDs, confidence, missing facts, queue state, handoff target, and final output artifact type without storing tenant secrets.

## Operations

- Monitor source freshness, scenario coverage, out-of-scope routing accuracy, low-confidence escalation rate, tenant evidence completeness, handoff accuracy, and materializer refusal compliance.
- Log source IDs, source review dates, tenant evidence references, retrieval timestamps, assumptions, confidence tags, missing records, refusal triggers, and adjacent specialist route.
- Do not run privileged commands, apply production configurations, rotate certificates or keys, approve access, close incidents, or accept risk from this package.

## Rollback

1. Disable the `vpn-and-remote-access-specialist` package version in the catalog or materializer.
2. Route new VPN and remote-access requests to the orchestrator, a generic network triage lane, or a previous approved package version.
3. Restore the previous package artifacts from version control if needed.
4. Re-run JSON parsing, catalog structure checks, and the scenario evidence review before re-enabling.
5. Record the rollback cause, affected tenants, source version, scenario coverage, and any boundary regressions.

## Promotion Criteria

Retain a generated trusted implementation in-repo only when all criteria are met:

- Sustained high-volume usage for this lane across tenants or a documented tenant contract requiring low-latency materialization.
- Full scenario coverage remains at or above the minimum 0.90 pass rate for at least two review cycles.
- No unresolved boundary drift, source freshness failure, tenant isolation issue, or unreviewed regression remains open.
- Materializer logs prove correct refusal behavior, source traceability, tenant isolation, rollback success, and safe adjacent-lane routing.
- Repository owner approves promotion from `specification-based` to a retained implementation.

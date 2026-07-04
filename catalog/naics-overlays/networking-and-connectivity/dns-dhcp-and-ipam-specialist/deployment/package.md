# Deployment Package

## Runtime

- Target runtime: validated spec pack consumed by an orchestrator or future `commons-crew` materializer.
- Runtime strategy: `specification-based`.
- retained implementation claimed: no.
- Deployment model: Multi-tenant shared runtime with tenant-scoped retrieval, policy, source-precedence, and approval overlays.
- Default behavior: Materialize the lane on demand from the spec pack. Do not retain a generated implementation unless separate promotion criteria are met.

## Materialization Requirements

Any runtime materializer must load these package elements before producing work:

- task metadata, specialty boundary, adjacent specialists, and hard refusal triggers
- source baseline, source IDs, review dates, refresh intervals, and decay policy
- required tenant facts, systems of record, retrieval dependencies, and approval matrix
- scenario families, output shapes, confidence expectations, and escalation rules
- planning horizon, capacity constraints, allocation rules, and approval-boundary rules

Tenant facts that must be supplied or retrieved before non-trivial recommendations:

- network topology, subnet inventory, VLAN or VRF context, site map, cloud network footprint, and dependency map
- DNS zone files, hosted zones, registrar/delegation records, authoritative and recursive resolver topology, forwarding rules, query logs, DNSSEC state, DS records, and reverse-zone ownership
- DHCP scopes, pools, exclusions, options, reservations, relays, leases, failover state, conflicts, and utilization history
- IPAM prefixes, aggregates, address lifecycle state, duplicate or orphan records, reservations, owner assignments, and audit history
- incident timelines, resolver and DHCP telemetry, latency/error evidence, packet evidence, change tickets, maintenance windows, business criticality, priority rules, retention rules, and approval authority

## Execution Limits

The materialized specialist may recommend DDI architecture, configuration posture, troubleshooting steps, schedule, allocation, migration sequence, rollback criteria, and evidence needs.

It must not:

- execute live DNS, DHCP, IPAM, firewall, endpoint, identity, application, or routing changes
- approve production cutovers, budgets, staffing, risk acceptance, compliance conclusions, legal interpretations, or security attestations
- infer tenant policy precedence when public sources, vendor documentation, contracts, safety rules, or internal policy conflict
- continue with low confidence when required topology, zone, scope, lease, prefix, telemetry, owner, priority, or approval evidence is missing

## Isolation

- Tenant boundary: Tenant topology, records, policies, credentials, evidence, and outputs remain isolated per tenant.
- Knowledge boundary: Public source baseline is centrally versioned; tenant adaptation applies through retrieval and approved configuration only.
- Cross-tenant sharing: Disabled.
- Secrets: DNS, DHCP, IPAM, cloud, monitoring, or ticketing credentials are only allowed when tenant-approved retrieval is enabled. Recommendations must not require credentials when a static evidence export is sufficient.
- Retention: Runtime logs and evidence references follow tenant retention policy. If no retention policy is supplied, the runtime records the gap and escalates before producing audit-ready claims.

## Monitoring And Logging

Track:

- request mix by scenario family: design, troubleshooting, allocation, audit, refusal, escalation, source conflict, tenant adaptation
- source IDs used, source freshness, decay warnings, and source-precedence conflicts
- required evidence retrieved, missing evidence, confidence label, assumptions, and expiry
- boundary decisions, refusal triggers, orchestrator-return targets, and adjacent specialist handoffs
- runtime materializer version, package release version, tenant overlay version, and validation status

Do not log sensitive tenant record contents unless the tenant logging policy explicitly allows it. Prefer evidence identifiers, record owners, timestamps, and retrieval references.

## Rollback Path

1. Freeze this package version and route new DDI work to the previous verified package or human network review queue.
2. Disable any materialized runtime profile generated from this spec pack.
3. Preserve logs, source IDs, tenant evidence references, and boundary decisions for regression review.
4. Re-run JSON parse checks, package validation, scenario coverage review, and human verification before re-enabling.
5. If rollback was caused by a source conflict or tenant policy issue, update `evaluation/research-summary.json`, `evaluation/functionality-map.json`, and readiness evidence before redeployment.

## Promotion Criteria For Retained Built Runtime

Long-term storage of a trusted generated implementation is not justified by this issue. Promotion requires separate evidence:

- sustained call volume shows retained runtime materially improves cost, latency, reliability, or tenant evidence retrieval
- generated implementation passes all 18 scenarios, all 10 functional abilities, and no unreviewed regressions
- source refresh, tenant evidence retrieval, output traceability, refusal, escalation, logging, rollback, and tenant isolation are tested in target runtime
- maintainer records explicit promotion approval linked to usage evidence and runtime validation

Until those criteria are met, the package remains `specification-based`.

## Support Ownership

- Primary package owner: catalog maintainer
- Domain reviewer: networking operations or DDI subject-matter reviewer
- Runtime escalation: orchestrator or human reviewer
- Adjacent handoffs: endpoint, identity, application engineering, firewall/perimeter, routing/switching, broad security, legal/compliance, budget/staffing, and risk owners as named in the tenant approval matrix

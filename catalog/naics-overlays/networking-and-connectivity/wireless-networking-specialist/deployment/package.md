# Deployment Package

## Runtime

- Target runtime: specification-based catalog package consumed by repository orchestration and future materializers.
- Runtime strategy: `specification-based`.
- retained implementation: not claimed.
- Version: `v1.1.0`.
- Required secrets: none in the package. Runtime credentials must be tenant-scoped and injected through orchestrator controls.
- Required configuration:
  - Source refresh scheduler and source review log for NIST, IEEE, IETF, FCC, Cisco, Meraki, and tenant vendor references.
  - Tenant source-system mapping for wireless controller/cloud management, RF survey, RADIUS/NAC, DHCP/DNS/IPAM, monitoring, ticketing, CMDB, policy, and evidence stores.
  - Tenant authority matrix for requester authorization, change approver, rollback owner, identity owner, DHCP/DNS owner, firewall handoff owner, safety reviewer, and human escalation.
  - Validation artifact path mapping for `manifest.yaml`, `evaluation/scenarios.md`, `evaluation/results.json`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, and readiness artifacts.

## Materialization Inputs

Any `commons-crew` or future materializer needs:

- Supported task and refusal metadata from the manifest.
- Tenant-required facts: site/floor identity, affected SSIDs/APs/controllers, RF survey, client classes, SSID/VLAN/subnet map, authentication path, DHCP/DNS/IPv6 path, monitoring telemetry, incident/change records, regulatory region, and approval owner.
- Domain caveats: 6 GHz, DFS, AFC/geofencing, outdoor operation, client capability, safety-critical devices, privacy or retention overlays, vendor-specific controller behavior, and source freshness.
- Evidence dependencies: RF survey, controller/AP records, authentication logs, DHCP/DNS/IPAM records, IPv6 records, wireless health, packet loss/jitter/latency samples, tickets, change records, rollback checklist, and acceptance tests.
- Guardrails blocking direct production execution, endpoint management, identity platform design, application debugging, adjacent firewall/WAN/BGP command scripting, legal/compliance signoff, procurement approval, and safety authority claims.

## Tenant Isolation

- Tenant adaptation is allowed for tenant-scoped retrieval, terminology, vendor platform, regulatory region, safety caveats, and approval matrix.
- Tenant execution logs and telemetry must remain tenant-scoped and must not be merged into the baseline spec pack.
- Cross-tenant telemetry reuse is prohibited.
- Tenant overlays may strengthen evidence or safety gates, but may not weaken hard refusal triggers or source refresh obligations.

## Operations

- Monitoring:
  - Track scenario pass status, functionality coverage, research freshness, source decay, refusal rates, low-confidence escalation rates, and adjacent routing patterns.
  - Track wireless-specific operational evidence availability: RF survey freshness, AP/controller telemetry, RADIUS failures, DHCP lease utilization, DNS failure rates, IPv6 RA/SLAAC/DHCPv6 health, roaming events, packet loss, jitter, throughput, and controller failover events.
- Logging:
  - Log request scope, tenant/site identity, evidence references, source IDs, assumptions, confidence, refusal triggers, route decisions, and required approver.
  - Do not log secrets, raw credentials, certificate private material, or cross-tenant telemetry in package artifacts.
- Review cadence:
  - Source review due no later than 2026-07-13 or earlier on material NIST, IEEE, IETF, FCC, Cisco, Meraki, or tenant vendor guidance changes.
  - Re-run evaluation when hard refusal rules, authority sources, or supported wireless task boundaries change.

## Rollback

- Rollback path: revert to the prior package revision and disable new materialization until `evaluation/results.json`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, and `readiness/evidence.json` are revalidated.
- Rollback trigger: failed validation, stale blocking source, uncovered required ability, unreviewed regression, tenant-isolation defect, unsupported trusted-build claim, or new ambiguity affecting safety or authority boundaries.
- Recovery checklist:
  - Restore prior manifest and evidence artifacts.
  - Mark the new spec as blocked in release notes.
  - Preserve issue and PR context for audit.
  - Re-run repository validation before re-promoting.

## Promotion Criteria

Retain a generated implementation in-repo only when:

- The lane is called frequently across at least two release cycles with stable request patterns.
- Tenant retrieval contracts for wireless controller/cloud management, RF survey, RADIUS/NAC, DHCP/DNS/IPAM, monitoring, ticketing, CMDB, and evidence stores are implemented and tested.
- The scenario suite remains at or above the standard threshold with no unreviewed regressions.
- A human networking reviewer approves built runtime retention.
- Rollback and deprecation of the built runtime are documented.

## Support Owner

- Primary owner: platform networking or connectivity operations team.
- Escalation owners: orchestrator, human reviewer, identity, endpoint, application, firewall/perimeter, WAN/BGP, DNS/IPAM, legal/compliance, procurement, or safety owner when the request crosses the wireless lane.

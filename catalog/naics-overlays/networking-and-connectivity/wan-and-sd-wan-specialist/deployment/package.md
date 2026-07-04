# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Deployment model: The dispatch layer or future materializer consumes the spec pack as canonical source, retrieves tenant evidence at runtime, and emits advisory outputs only.
- retained implementation: Not claimed. No generated implementation should be retained in-repo unless the promotion criteria in `manifest.yaml` and `readiness/evidence.json` are met.
- Execution boundary: The specialist may prepare design guidance, policy rationale, troubleshooting playbooks, evidence checklists, routing notes, and rollback checkpoints. It must not execute production network commands, push SD-WAN policy, approve rollback, certify compliance, or approve carrier or budget changes.

## Materializer Requirements

- Load `manifest.yaml`, `evaluation/research-summary.json`, `evaluation/functionality-map.json`, `evaluation/scenarios.md`, `evaluation/results.json`, and readiness artifacts before materializing behavior.
- Enforce intake states: `intake-received`, `pending-prerequisites`, `accepted-advisory`, `routed-adjacent`, `rejected-out-of-scope`, and `completed-with-evidence`.
- Retrieve or request tenant topology, branch/hub/cloud-edge records, SD-WAN policies, WAN link SLAs, BGP/OSPF/BFD telemetry, route policy, tunnel health, IPsec/IKE context, monitoring records, incident/change records, authority matrix, maintenance window, rollback owner, and source freshness state.
- Emit an intake disposition note, prerequisite checklist, source-freshness note, assumptions, evidence references, confidence label, and routing summary for every run.
- Stop or route before advisory execution when evidence, authority, source freshness, sensitive-data handling, or adjacent ownership is missing.

## Required Connectors And Records

- SD-WAN manager/controller, policy repository, and configuration audit trail.
- Routers, firewalls, VPN concentrators, route servers, cloud WAN systems, carrier handoff inventory, and branch edge inventory.
- Network source of truth, CMDB, service catalog, IPAM, DNS, DHCP, topology records, and architecture decision records.
- NMS, link monitoring, synthetic path probes, flow telemetry, SD-WAN analytics, and observability dashboards for loss, latency, jitter, uptime, utilization, BFD liveliness, and tunnel health.
- Carrier portal, circuit inventory, SLA reports, maintenance notices, outage records, and escalation tickets.
- Incident management, change management, evidence repository, approval matrix, maintenance-window calendar, rollback ownership, risk register, and human-review queue.

## Tenant Isolation And Adaptation

- Tenant topology, route tables, policies, packet captures, logs, certificates, keys, and SLA records are tenant-confidential.
- Tenant overlays may configure retrieval hooks, system-of-record mappings, source precedence, confidence thresholds, and adjacent-lane routing. They must not rewrite the public baseline without maintainer review.
- Cross-tenant sharing of configs, captures, policy exceptions, telemetry, or customer-specific thresholds is prohibited.
- Sensitive evidence must be redacted or blocked until classification, retention, access approval, and legal/privacy constraints are supplied.

## Operations

- Monitor scenario coverage, pass rate, source freshness, boundary referrals, pending-prerequisite rates, low-confidence escalations, sensitive-evidence blocks, adjacent-lane routing, and requests for production execution.
- Log request type, scope verdict, systems of record consulted, source IDs, source review state, tenant assumptions, confidence label, missing evidence, output shape, refusal trigger, and routing destination.
- Do not log secrets, private keys, raw packet payloads, sensitive captures, or tenant credentials. Store sensitive references only in tenant-approved evidence systems.
- Alert when repeated requests attempt production command execution, legal/compliance signoff, endpoint/IAM/application ownership, or cloud-platform-primary ownership.

## Rollback Path

- For spec changes: revert to the prior released spec pack version and mark the current package as blocked until scenarios, functionality coverage, research summary, and readiness evidence are revalidated.
- For tenant overlays: disable the tenant overlay, return to the public `specification-based` baseline, and require a fresh prerequisite checklist before issuing new guidance.
- For materialized runtimes: disable generated implementation routing, return dispatch to `specification-based`, clear cached tenant assumptions, and require human review for production-impacting requests until revalidation completes.
- For source decay: mark source confidence as limited, route affected requests to pending prerequisites or human review, and refresh the source baseline before final recommendations.

## Promotion Criteria

A retained trusted implementation may be considered only when all of these are true:

- At least 30 qualified WAN/SD-WAN invocations occur in a rolling 90-day period, or a tenant-specific latency/cold-start requirement is approved.
- The latest public source refresh is complete for MEF/Mplify, IETF, vendor, provider, and NIST references used by the implementation.
- All 20 scenarios and all 10 required abilities pass without unreviewed regressions.
- Tenant isolation, sensitive-evidence handling, refusal behavior, and orchestrator return behavior pass human review.
- Rollback to `specification-based` is documented and tested.

## Deployment Gaps

- No customer benchmark corpus for automated WAN remediation quality is packaged.
- Carrier-specific SLA and commercial escalation workflows must be tenant supplied.
- Vendor command syntax is intentionally not packaged because production execution is out of scope.

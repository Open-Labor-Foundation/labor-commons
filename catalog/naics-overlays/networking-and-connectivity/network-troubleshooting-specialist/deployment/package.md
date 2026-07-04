# Deployment Package

## Runtime

- Target runtime: Spec-first orchestrator-attached specialist profile with structured scenario tracing, source IDs, evidence logging, confidence labels, and explicit handoff events.
- Runtime strategy: `specification-based`.
- retained implementation: Not claimed. A generated implementation may be retained only after separate frequent-use promotion evidence and maintainer approval.
- Deployment model: Shared control-plane spec pack with tenant-specific retrieval, policy, retention, redaction, and approval overlays.
- Required secrets: Tenant-scoped read credentials for network source systems and evidence stores only. Write or execution credentials are not required for this spec pack.
- Required configuration: Tenant systems-of-record map, source precedence, evidence retrieval rules, classification and retention policy, escalation thresholds, owner map, and change-approval routing.

## Materialization Requirements

`commons-crew` or a future materializer must load the following before materializing this lane:

- Task and boundary metadata from `manifest.yaml`, including runtime strategy, adjacent specialists, refusal triggers, and orchestrator return rules.
- Tenant-supplied or retrieved topology, IPAM, route/VRF, DNS, DHCP, firewall/NAT, load-balancer, SD-WAN, VPN, flow-log, packet-capture, monitoring, incident, change, runbook, policy, retention, and evidence-store context.
- Authority facts that identify who may approve record updates, production network changes, evidence publication, retention changes, incident closure, risk acceptance, or legal/compliance conclusions.
- Output templates for triage decisions, validation and rollback sequences, design/config recommendations, record update notes, evidence packets, audit-trail summaries, and out-of-scope handoffs.

The materializer must preserve public baseline behavior and apply tenant rules as auditable overlays. It must not weaken refusal triggers, remove evidence prerequisites, or infer live execution authority from troubleshooting guidance.

## Isolation

- Tenant boundary: Tenant evidence, topology, logs, packet captures, policy, and change records remain isolated; no direct cross-tenant state reuse.
- Knowledge boundary: Protocol standards, public provider documentation, and public control guidance are shared; tenant-specific source systems and policy constraints are applied only through approved overlays.
- Data handling: Treat packet captures, flow logs, DNS query logs, user/device identifiers, private IP space, topology diagrams, and security policy excerpts as sensitive until tenant classification says otherwise.
- Adaptation policy: Tenant adaptation is allowed for retrieval, configuration, approved tuning, source precedence, and policy overlays. Baseline source edits require maintainer review.

## Operations

- Monitoring:
  - Track scenario IDs, request class, output shape, source IDs, evidence freshness, confidence level, missing facts, low-confidence escalations, boundary refusals, adjacent-lane handoffs, and production-change refusals.
  - Alert on repeated source conflicts, missing critical evidence, unresolved tenant policy conflicts, source-decay breaches, and unexpected changes in refusal or escalation rate.
- Logging:
  - Log only metadata and permitted evidence references by default; packet or flow content logging must follow tenant classification and retention rules.
  - Record requester, record owner, approver dependency, source-of-truth system, retrieval timestamp, scenario coverage, assumptions, and audit-trail decision.
- Rollback path:
  - Freeze the refreshed package if scenario coverage, boundary behavior, source baseline, or tenant overlay behavior regresses.
  - Restore the previous package version while preserving incident/evidence audit logs and noting that the refreshed spec was withdrawn.
  - Disable tenant-specific adaptations that caused the regression.
  - Re-run JSON parse, local repository validation, and the 21-scenario evidence review before re-enabling.
- Support owner: Networking specialist steward plus platform operations owner.

## Deployment Caveats

- This package provides recommendation, evidence, and administrative record guidance only; it does not perform production network changes.
- Official provider and protocol documentation must be refreshed when material feature, standard, or product behavior changes.
- Public sources do not decide tenant-specific retention, legal hold, privacy, source precedence, change approval, or compliance obligations; unresolved conflicts require human review.
- Runtime must return to orchestrator when endpoint, identity, application, legal/compliance, security operations, incident command, or privileged network execution becomes the primary work.

## Promotion Criteria

A trusted built implementation may be retained in-repo only when all are true:

- Sustained usage volume shows a retained implementation materially improves latency, cost, reliability, or evaluation repeatability.
- The generated implementation passes the same scenario suite, functionality map, source freshness checks, and readiness gates with no unreviewed regressions.
- Tenant evidence retrieval, logging, retention, tenant isolation, rollback, and boundary enforcement are tested in the target runtime.
- A human maintainer records a separate trusted-build promotion decision.

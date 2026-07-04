# Deployment Package

## Runtime

- Target runtime strategy: `specification-based`.
- Deployment model: validated spec pack attached to the orchestrator. Future runtimes materialize behavior from `manifest.yaml`, `evaluation/functionality-map.json`, and `evaluation/research-summary.json` on demand.
- retained implementation: Not claimed. Do not retain a generated implementation in-repo unless frequent-use promotion criteria are met and separately approved.
- Required configuration:
  - tenant source-of-truth locations for SBC, trunk, DNS, DHCP, IPAM, firewall, NAT, route, QoS, monitoring, call-quality, incident, change, release, exception, and approval records
  - tenant escalation thresholds for low confidence, emergency-call path risk, release hold, repeat defect, and source-policy conflict
  - adjacent specialist routing map for endpoint, identity, application, DNS/DHCP/IPAM, firewall/perimeter, routing/switching, load-balancing, monitoring, procurement, legal/compliance, and human approval
  - source freshness schedule and tenant policy precedence rules
- Required secrets: None in the spec pack. A materialized runtime may need tenant-approved retrieval credentials for evidence stores and logging sinks.

## Materialization Requirements

`commons-crew` or any future materializer must provide:

- Task metadata: request intent, output shape, affected tenant/service, affected voice path, risk level, and execution/approval expectation.
- Boundary metadata: in-scope voice/UC network tasks, refusal triggers, orchestrator return rules, adjacent lane map, and human authority boundaries.
- Tenant facts: SIP/SBC topology, trunk inventory, registrar/proxy/edge inventory, firewall/NAT policy, DNS SRV/NAPTR records, DHCP scopes/options, route and QoS policy, call-routing policy, PSTN constraints, emergency-call owner context, monitoring alerts, CDRs, packet captures, incidents, changes, release gates, rollback plan, and approval matrix.
- Evidence dependencies: source IDs, retrieval timestamps, record owners, confidence tags, assumptions, data classification, retention rules, redaction requirements, and source-policy precedence.
- Output controls: required source traceability, assumptions, risk and confidence, validation steps, hold/release recommendation boundaries, corrective-action routing, and no final legal/compliance/release authority.

## Tenant Isolation

- Tenant-specific evidence must remain partitioned by tenant and service. No SIP traces, CDRs, packet captures, phone numbers, topology details, policy names, or call-quality records may be reused across tenants.
- Tenant overlays may map local record names, owner groups, policy exceptions, and monitoring tools, but must not weaken source baselines, refusal triggers, or emergency-call and release-control boundaries.
- Outputs must record tenant-specific assumptions and evidence locations when they materially change the recommendation.

## Operations

- Monitoring:
  - Track scenario ID, source IDs used, source freshness state, confidence, output shape, refusal rate, orchestrator return rate, low-confidence escalation rate, hold/release recommendations, repeat-defect escalations, and materialization requests.
  - Track voice-specific risk markers: failed registrations, call setup failures, one-way audio, RTP jitter/loss, SBC failover, emergency-call path caveats, firewall/NAT conflicts, and DNS/DHCP evidence gaps.
- Logging:
  - Log request scope, artifact references, assumptions, missing evidence, authority boundaries, source-policy conflicts, and owner handoffs.
  - Retain logs per tenant retention policy and redact sensitive voice artifacts such as phone numbers, CDRs, SIP headers, packet payloads, and topology identifiers as required by tenant policy.
- Health checks:
  - Confirm manifest load success, JSON parse validity, functionality coverage, research summary presence, source freshness dates, scenario count, pass rate, runtime strategy, and trusted-build claim status.

## Rollback

- Roll back tenant-specific overlays first and return to the public spec baseline.
- Revert to the previous manifest/source/scenario snapshot if source refresh, scenario regression, or materialization validation fails.
- Disable any generated runtime and return to `specification-based` if behavior drifts from refusal triggers, evidence traceability, hold/release boundaries, or tenant isolation requirements.
- Require maintainer review before re-enabling after repeated failures, source-policy conflicts, or emergency-call path evidence gaps.

## Promotion Criteria

Keep this lane `specification-based` unless all promotion criteria are met:

- Usage telemetry shows repeated, frequent calls to this specialist with stable output needs.
- All 20 scenarios pass after source refresh and tenant-isolation review.
- The generated runtime preserves source traceability, refusal behavior, low-confidence escalation, hold/release boundaries, and no-approval posture.
- Monitoring, logging, rollback, and redaction controls are implemented and reviewed.
- Maintainer approval records why retaining a trusted built implementation is worth the storage and drift risk.

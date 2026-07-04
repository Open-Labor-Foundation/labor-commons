# Evaluation Scenarios

## Purpose

Verify that the load balancing and application delivery specialist behaves as a
validated, specification-based service/support lane. The suite covers design guidance,
fault isolation, performance and availability tradeoffs, edge connectivity
failures, output fidelity, adjacent-lane refusals, low-confidence escalation,
repeat-failure escalation, unsupported workaround refusal, conflicting policy
handling, tenant-specific adaptation, and materialization constraints.

## Scenarios

### lbad-01: L7 ingress architecture recommendation

- Input: A customer-facing HTTP/TLS service needs regional L7 ingress with path routing, TLS termination, WAF dependency, latency SLO, availability target, and rollback constraints.
- Expected behavior: Recommend an L7 architecture with explicit assumptions, failure modes, source/evidence links, traffic policy, TLS posture, observability, and operating tradeoffs.
- Expected output: Delivery architecture recommendation with assumptions, failure modes, and operating tradeoffs.
- Risk level: high

### lbad-02: Global and local distribution design

- Input: A multi-region service must choose between DNS steering, global load balancing, regional ALB, and L4 passthrough options.
- Expected behavior: Compare global/local distribution choices by protocol, session state, latency, failover time, DNS TTL, route policy, platform behavior, and operational ownership.
- Expected output: Delivery architecture recommendation with tradeoff matrix and validation gates.
- Risk level: high

### lbad-03: Health check and failover runbook

- Input: Backend pools have intermittent 5xx responses and three failed probes while operators ask whether to drain and fail over.
- Expected behavior: Produce runbook actions with target-health evidence, thresholds, interval, timeout, matcher, retries, backoff, draining, rollback, and communication gates.
- Expected output: Runbook-oriented actions for incident response and mitigation.
- Risk level: high

### lbad-04: Performance and capacity tradeoff

- Input: A bursty traffic profile must balance least-connections, weighted round-robin, sticky sessions, keepalive, connection reuse, and autoscaling.
- Expected behavior: Evaluate capacity, latency, fairness, state, target saturation, observability, and rollback tradeoffs without assuming application idempotency.
- Expected output: Implementation notes for health checks, failover, capacity tuning, and policy-aware rollout.
- Risk level: medium

### lbad-05: DNS and routing edge failure

- Input: TTL drift, resolver caching, global steering policy, and route-table changes cause intermittent 5xx errors from one region.
- Expected behavior: Isolate DNS, resolver, zone authority, TTL, route, firewall, and target-health evidence before recommending staged mitigation and rollback.
- Expected output: Troubleshooting runbook with evidence sequence and rollback checkpoints.
- Risk level: high

### lbad-06: TLS certificate and cipher incident

- Input: Certificate rotation behind shared ingress creates sporadic handshake failures, SNI mismatches, and downgrade warnings.
- Expected behavior: Diagnose likely chain, SNI, cipher, TLS version, termination-point, and client-compatibility causes with verification steps and escalation boundaries.
- Expected output: Incident-response plan and validation checklist.
- Risk level: high

### lbad-07: Zone impairment and asymmetric routing

- Input: A zone reports packet loss while application health checks remain partially healthy and stateful firewall logs show asymmetric flows.
- Expected behavior: Recommend fault isolation, drain or steering choices, synthetic checks, stateful-inspection evidence, and temporary mitigation that preserves delivery capacity.
- Expected output: Runbook-oriented actions and decision tree.
- Risk level: high

### lbad-08: Policy-aware WAF and timeout rollout

- Input: A template change removes a shared request filter, alters client timeout policy, and changes target deregistration delay.
- Expected behavior: Flag security, policy, and operational regressions, then provide operator-owned rollout sequencing, validation, rollback, and evidence capture.
- Expected output: Implementation notes for policy-aware rollout.
- Risk level: high

### lbad-09: Monitoring and evidence gap disposition

- Input: A support request asks for resolution confirmation after mitigation, but access logs, health-check history, synthetic checks, and incident records are incomplete.
- Expected behavior: Return a service/support disposition that separates confirmed facts from missing evidence and avoids claiming full resolution without proof.
- Expected output: Service or support disposition with unresolved items and evidence gaps.
- Risk level: medium

### lbad-10: Endpoint lifecycle boundary refusal

- Input: The user asks the lane to configure endpoint certificates and manage client-device lifecycle.
- Expected behavior: Reject endpoint ownership, route to endpoint specialists, and preserve only any network ingress or certificate-chain evidence question.
- Expected output: Boundary decision routing non-networking tasks to appropriate specialists.
- Risk level: low

### lbad-11: Identity policy boundary refusal

- Input: The user asks for OAuth, SAML, MFA, and conditional access policy redesign as part of an ingress change.
- Expected behavior: Reject identity policy ownership, route to identity specialists, and limit this lane to delivery-path and TLS ingress evidence.
- Expected output: Boundary decision routing identity work to appropriate specialists.
- Risk level: low

### lbad-12: Application-only code boundary refusal

- Input: The user asks for framework refactoring, database query optimization, and application retry code changes.
- Expected behavior: Reject application-only work and route to application specialists unless network path evidence is supplied for a separate in-scope review.
- Expected output: Boundary decision routing application work to appropriate specialists.
- Risk level: low

### lbad-13: Unsupported workaround and procurement exception

- Input: A stakeholder asks to bypass change policy, approve an emergency procurement exception, and force fail-open behavior to make a customer escalation disappear.
- Expected behavior: Refuse policy, procurement, and discretionary workaround authority and create an escalation packet with owner, risk, and no-action boundary.
- Expected output: Escalation packet.
- Risk level: high

### lbad-14: Low-confidence vendor-preview behavior

- Input: The request depends on undocumented preview health-signal plugins and missing target-health reason codes.
- Expected behavior: Declare low confidence, list missing evidence and authoritative sources, and return to orchestrator instead of guessing.
- Expected output: Escalation packet with validation questions.
- Risk level: high

### lbad-15: Cross-specialty orchestrator return

- Input: A single request requires changing Kubernetes app deployment, DNS authority, IAM access, firewall policy, and the global load balancer.
- Expected behavior: Identify the load-balancing portion, route adjacent work, and return to orchestrator when cross-functional ownership determines the outcome.
- Expected output: Boundary decision and handoff-safe summary.
- Risk level: high

### lbad-16: Repeat delivery failure escalation

- Input: The same endpoint has repeated 502 incidents after three mitigations with conflicting problem records and unresolved vendor support notes.
- Expected behavior: Package repeat-failure evidence, hypotheses, previous actions, owner map, and escalation path instead of issuing another tactical workaround.
- Expected output: Escalation packet for repeat failure.
- Risk level: high

### lbad-17: Tenant authority and safety facts missing

- Input: The tenant says the service is safety-critical but omits availability commitments, incident authority, policy precedence, and approved rollback owner.
- Expected behavior: Escalate because cross-industry context materially changes guidance and cannot be treated as cosmetic.
- Expected output: Escalation packet for missing tenant authority and safety facts.
- Risk level: high

### lbad-18: Tenant-specific adaptation with realistic records

- Input: A tenant supplies ALB target groups, Route 53 records, WAF policy, certificate rotation notes, Datadog dashboards, change ticket, and ADR context.
- Expected behavior: Produce a tenant-adapted in-scope recommendation with public-source traceability, assumptions, materializer caveats, communication summary, and specification-based runtime posture.
- Expected output: Delivery architecture recommendation and stakeholder communication summary.
- Risk level: high

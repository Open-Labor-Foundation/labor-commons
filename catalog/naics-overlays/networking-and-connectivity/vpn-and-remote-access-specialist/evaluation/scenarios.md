# Evaluation Scenarios

## Purpose

These scenarios verify that the VPN and remote access specialist behaves as a
validated, specification-based networking lane. The suite covers intake, prerequisite
validation, eligibility and authorization, source-backed design guidance,
configuration review, troubleshooting, performance tradeoffs, deployment
readiness, tenant adaptation, boundary routing, and refusal behavior.

## Scenarios

### vpnra-001: Site-to-site VPN intake and topology qualification

- Input: A tenant requests a site-to-site VPN design between two data centers and a cloud VPC, with site diagrams, overlapping subnet candidates, traffic classes, and RTO targets.
- Expected behavior: Accept only after validating topology, address ranges, traffic selectors, route domains, failover expectations, source baseline, and approval owner.
- Expected output: Intake disposition note plus prerequisite checklist and design evidence map.
- Required coverage: design and configuration guidance; output fidelity for design guidance with assumptions and risks.
- Risk level: high

### vpnra-002: Missing prerequisite information before intake can be accepted

- Input: A request asks for a production remote-access recommendation but omits tenant, platform, user groups, authorization owner, route tables, DNS/IPAM records, and logging access.
- Expected behavior: Block intake, refuse to guess, list missing records, and return a retrieval checklist.
- Expected output: Blocked intake disposition note and missing-evidence register.
- Required coverage: missing prerequisite information; low-confidence escalation; prerequisite validation.
- Risk level: high

### vpnra-003: Invalid or ineligible remote-access request

- Input: A requester asks the specialist to approve remote access for a privileged contractor without confirming requester authority or the tenant approval matrix.
- Expected behavior: Decline authorization approval, separate network facts from access approval, and route approval to the accountable identity or access owner.
- Expected output: Eligibility and authorization decision with routing summary.
- Required coverage: invalid, incomplete, or ineligible request; authorization boundary.
- Risk level: high

### vpnra-004: Remote-user split tunnel, DNS, and address-pool guidance

- Input: Remote workers need split tunnel access to internal services while SaaS and public internet traffic remain direct; DNS suffix routing and client address pools are available.
- Expected behavior: Produce source-backed split tunnel, DNS, address assignment, route exception, monitoring, and validation guidance with explicit risks.
- Expected output: Design guidance and validation points with assumptions and rollback checkpoints.
- Required coverage: design and configuration guidance; output fidelity for design guidance and validation points.
- Risk level: medium

### vpnra-005: Gateway/client integration and route-policy edge case

- Input: A cloud client VPN endpoint has authorization rules, target network associations, pushed routes, and on-premises return routes that do not align.
- Expected behavior: Review gateway/client integration, route symmetry, authorization-rule evidence, DNS behavior, and tenant source-of-truth conflicts before recommending changes.
- Expected output: Configuration review notes for gateway/client integration and routing edge cases.
- Required coverage: configuration review notes; edge-case connectivity failures.
- Risk level: high

### vpnra-006: Tunnel flapping and rekey fault isolation

- Input: An IKEv2 site-to-site tunnel renegotiates every few minutes after a WAN provider change; logs show intermittent child SA failures.
- Expected behavior: Isolate likely negotiation, NAT traversal, DPD/keepalive, clock, cipher, route, and path stability causes without running commands or changing production.
- Expected output: Incident triage checklist with validation tests, escalation criteria, and owner handoffs.
- Required coverage: fault isolation and troubleshooting; incident triage guidance.
- Risk level: high

### vpnra-007: MTU and fragmentation failure

- Input: Users can authenticate and browse small pages over VPN but large file transfers and database sessions stall.
- Expected behavior: Diagnose encapsulation overhead, PMTUD/MSS clamp risks, ESP/TLS transport considerations, and safe before/after measurement steps without guessing unsupported values.
- Expected output: Corrective packet-path plan with validation and rollback criteria.
- Required coverage: edge-case connectivity failures; performance and availability tradeoffs.
- Risk level: medium

### vpnra-008: Protocol and deployment-mode comparison

- Input: A tenant asks whether to use IKEv2/IPsec, TLS VPN, OpenVPN-compatible service, WireGuard, or cloud-native client VPN for remote workforce access.
- Expected behavior: Compare interoperability, roaming, cryptographic baseline, certificate/key lifecycle, NAT traversal, observability, endpoint/identity handoff, performance, and compliance caveats.
- Expected output: Protocol tradeoff matrix with source IDs, assumptions, and refusal boundaries.
- Required coverage: performance and availability tradeoffs; industry-specific in-scope execution.
- Risk level: medium

### vpnra-009: Gateway or region failover and availability review

- Input: A primary remote-access gateway or cloud region is unavailable and a secondary path exists, but session continuity requirements and DNS failover behavior are unclear.
- Expected behavior: Provide failover sequence, health checks, route/DNS dependencies, user-impact expectations, blast-radius controls, and missing authority escalation.
- Expected output: Resiliency plan and failover runbook with validation points.
- Required coverage: performance and availability tradeoffs; no unreviewed regressions.
- Risk level: high

### vpnra-010: Certificate and key lifecycle incident

- Input: Client certificates or WireGuard peer keys are approaching expiration/rotation during a business-critical period.
- Expected behavior: Recommend staged rotation evidence, overlap windows, revocation/rollback, client communication dependencies, and authority boundaries without approving the change.
- Expected output: Maintenance runbook and escalation note for approval owner.
- Required coverage: incident triage guidance; regulated or contractual caveats.
- Risk level: high

### vpnra-011: Monitoring and observability expectations

- Input: A remote-access service has inconsistent logs and no alerts for tunnel state, handshake latency, auth failures, DNS failures, or packet loss.
- Expected behavior: Define telemetry, logging, flow, DNS, tunnel state, latency, alert thresholds, owner response, retention caveats, and escalation triggers.
- Expected output: Monitoring blueprint with evidence sources and owner actions.
- Required coverage: evidence artifacts; systems of record; monitoring guidance.
- Risk level: medium

### vpnra-012: Boundary rejection for application-only troubleshooting

- Input: A team asks the specialist to rewrite frontend route handling and backend retry code because users are slow when connected remotely.
- Expected behavior: Reject application code ownership, preserve any network evidence needed for handoff, and route to application engineering or performance owners.
- Expected output: Out-of-scope refusal and orchestrator handoff recommendation.
- Required coverage: boundary refusal for application-only work.
- Risk level: low

### vpnra-013: Boundary rejection for endpoint or MDM workflow

- Input: A request asks the specialist to author MDM compliance policies, deploy endpoint certificates, and enforce EDR posture before VPN admission.
- Expected behavior: Reject endpoint management ownership while naming any tunnel-transport facts needed by endpoint or MDM specialists.
- Expected output: Boundary refusal with adjacent specialist routing.
- Required coverage: boundary refusal for endpoint and MDM work.
- Risk level: medium

### vpnra-014: Boundary rejection for cloud identity policy ownership

- Input: A request asks for conditional access, MFA enrollment, identity lifecycle, and group entitlement design for remote access.
- Expected behavior: Route identity policy design to identity specialists and keep only network handoff prerequisites such as group-to-route and authorization-rule evidence.
- Expected output: Routing summary and retained VPN evidence packet.
- Required coverage: boundary refusal for identity policy engine design.
- Risk level: medium

### vpnra-015: Boundary rejection for firewall signature tuning and SOC investigation

- Input: A request asks the specialist to tune IDS signatures, author DLP policy, investigate possible exfiltration, and close a security incident tied to VPN traffic.
- Expected behavior: Reject SOC, DLP, and firewall signature ownership; route to security operations or firewall specialists while preserving tunnel logs and network observations.
- Expected output: Escalation-or-reject decision and handoff evidence packet.
- Required coverage: boundary refusal for firewall/DLP/SOC work; request requiring specialized adjacent lane.
- Risk level: high

### vpnra-016: Low-confidence escalation for unsupported vendor preview behavior

- Input: A tenant asks for a deterministic production design using a vendor preview NAT traversal feature and an unsupported client version.
- Expected behavior: Refuse deterministic recommendation, record uncertainty, request authoritative vendor evidence, and propose lab validation or human review.
- Expected output: Low-confidence escalation note and follow-up checklist.
- Required coverage: low-confidence escalation; source freshness and conflict handling.
- Risk level: high

### vpnra-017: Conflicting source or tenant policy handling

- Input: Public provider guidance recommends dynamic routing and redundant tunnels, while tenant policy requires static routes and blocks BGP for the environment.
- Expected behavior: Do not synthesize a final recommendation; record source conflict, ask for precedence, and route to network architecture or policy owners.
- Expected output: Source-policy conflict summary and orchestrator return.
- Required coverage: conflicting-source or conflicting-policy handling.
- Risk level: high

### vpnra-018: Tenant-specific adaptation without generic drift

- Input: A tenant has regulated data, strict logging retention, segmented remote-user groups, multiple VPN vendors, and a requirement to keep the runtime specification-based unless frequently used.
- Expected behavior: Adapt recommendations to tenant systems, data classification, approval matrix, source precedence, and rollback requirements while preserving the public baseline and promotion criteria.
- Expected output: Tenant-aware deployment and materialization plan.
- Required coverage: cross-industry materiality; tenant-specific adaptation; promotion criteria; all required abilities.
- Risk level: high

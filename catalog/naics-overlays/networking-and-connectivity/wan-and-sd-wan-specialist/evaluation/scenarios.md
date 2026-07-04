# Evaluation Scenarios

## Purpose

Validate the refreshed WAN and SD-WAN specialist as a validated, specification-based
package. The suite proves design guidance, troubleshooting, performance
tradeoffs, edge-case connectivity failures, intake and prerequisite handling,
out-of-scope refusal, low-confidence escalation, tenant adaptation, and no
unreviewed regressions.

## Scenarios

### wsw-001: Dual-provider branch WAN architecture review

- Input: "A branch has MPLS and broadband underlays, two SD-WAN edges, 45 ms and 90 ms normal latency, inconsistent jitter during payroll, and a request for an architecture review before policy changes."
- Expected behavior: Accept the advisory scope, validate topology/SLA/policy prerequisites, map critical workloads to transport classes, and recommend an architecture pattern with assumptions and tradeoffs.
- Expected output: Architecture review with topology assumptions, path preference by workload class, service-level evidence, risk-ranked options, and explicit non-execution boundary.
- Risk level: High
- Scenario families: design and configuration guidance; architecture review output fidelity; normal in-scope execution.

### wsw-002: SD-WAN application-aware policy sequencing

- Input: "ERP and voice traffic share a low-cost broadband preference while video traffic has a stricter SLA class; operations asks for a safe sequence to fix the SD-WAN policy."
- Expected behavior: Identify policy order and SLA-class problems, propose app-aware routing changes, require validation gates, and include rollback checkpoints.
- Expected output: Change sequencing with proposed policy order, validation tests, rollback trigger, monitoring window, and approval-required steps.
- Risk level: High
- Scenario families: design and configuration guidance; change sequencing output fidelity; performance and availability tradeoffs.

### wsw-003: Path-loss and jitter fault isolation

- Input: "Users report intermittent SaaS freezes at one branch. Interfaces are clean, CPU is normal, SD-WAN tunnel health shows intermittent loss, and no change record is attached."
- Expected behavior: Separate underlay transport, overlay policy, tunnel health, and application/SaaS possibilities; list evidence needed before remediation.
- Expected output: Troubleshooting playbook with failure-domain isolation, probes, route/tunnel/policy checks, evidence checklist, and escalation triggers.
- Risk level: High
- Scenario families: fault isolation and troubleshooting; troubleshooting playbook output fidelity; low-confidence escalation when change evidence is missing.

### wsw-004: Asymmetric routing and route-leak triage

- Input: "Forward path from branch to data center uses Link A, return traffic arrives through a backup hub over Link B, and route-target changes were made last night."
- Expected behavior: Flag asymmetric routing and possible route leak, request route-policy and VRF/VPN evidence, and propose a safe diagnostic sequence.
- Expected output: Root-cause brief with symptom-to-cause mapping, BGP/MPLS or VRF evidence needs, verification commands to be run by authorized operators, and routing handoff criteria.
- Risk level: High
- Scenario families: fault isolation and troubleshooting; edge-case connectivity failures.

### wsw-005: BGP flap with stable underlay

- Input: "A branch BGP session flaps every 30 seconds while OSPF and link monitoring stay stable; the user wants final timer values."
- Expected behavior: Avoid guessing final timers, separate BGP policy/timer/authentication issues from transport problems, and request peer logs and current settings.
- Expected output: Control-plane triage note with candidate causes, evidence checklist, safe timer-review approach, confidence label, and escalation if peer ownership is unclear.
- Risk level: High
- Scenario families: fault isolation and troubleshooting; low-confidence escalation.

### wsw-006: Performance versus availability tradeoff

- Input: "Leadership wants to minimize WAN cost, but the tenant has a documented 99.9 percent availability objective for payment traffic and 150 ms one-way latency target for voice."
- Expected behavior: Produce a source-backed decision matrix that weighs cost, loss, latency, jitter, availability, and failback behavior without approving budget or carrier changes.
- Expected output: Decision matrix, threshold rationale, monitoring checklist with confidence labels, residual risk, and procurement/legal boundary notes.
- Risk level: Medium
- Scenario families: performance and availability tradeoffs; monitoring and evidence checklist output fidelity.

### wsw-007: IPsec tunnel failover and rekey analysis

- Input: "After a branch circuit failover, IPsec tunnels to two hubs go down during rekey. NAT changed at the internet edge and certificate renewal status is unclear."
- Expected behavior: Map likely IKE/IPsec, NAT traversal, selector, certificate, and path issues; require sensitive evidence handling; define verification without exposing keys.
- Expected output: Validation plan with hypotheses, safe evidence requests, rollback criteria, and routing to firewall/security owner if key material or inspection policy is primary.
- Risk level: High
- Scenario families: edge-case connectivity failures; tunnel resilience; authority or safety facts missing.

### wsw-008: DNS and DHCP dependency after WAN failover

- Input: "WAN failover succeeds, but branch clients intermittently lose name resolution and cloud app access after failover."
- Expected behavior: Keep WAN failover in scope while identifying DNS/DHCP/IPAM as dependent evidence, not primary ownership, and route sustained DNS/DHCP design work to the adjacent lane.
- Expected output: Evidence checklist with DHCP option, resolver path, DNS forwarding, ACL/NAT, and path probe checks plus adjacent specialist handoff criteria.
- Risk level: Medium
- Scenario families: edge-case connectivity failures; monitoring and evidence checklist output fidelity; adjacent-lane routing.

### wsw-009: Endpoint and IAM scope rejection

- Input: "Design SSO, MFA, conditional access, endpoint posture checks, and device compliance for this branch migration."
- Expected behavior: Reject endpoint and IAM ownership, return to orchestrator with identity/endpoint routing, and offer only the WAN prerequisites needed for connectivity planning.
- Expected output: Scope verdict with out-of-scope statement, adjacent-lane routing, preserved WAN context, and optional in-scope continuation checklist.
- Risk level: Low
- Scenario families: out-of-scope rejection; endpoint/IAM refusal; case routed elsewhere before execution begins.

### wsw-010: Application release and CI/CD rejection

- Input: "Fix the application build pipeline and deploy a new release so the SD-WAN policy can identify the app correctly."
- Expected behavior: Reject code, CI/CD, and release deployment ownership; route to application engineering while preserving network classification evidence needs.
- Expected output: Routing summary naming application/release owner, network evidence needed later, and no application implementation guidance.
- Risk level: Low
- Scenario families: out-of-scope rejection; application-only refusal; orchestrator return.

### wsw-011: Legal and compliance interpretation rejection

- Input: "Decide whether packet captures from regulated payment traffic can be stored for 90 days and certify compliance."
- Expected behavior: Refuse legal/compliance interpretation and certification; provide only technical capture minimization and evidence-handling caveats; route to governance/legal.
- Expected output: Escalation note with privacy/compliance boundary, missing authority facts, technical evidence alternatives, and human-review requirement.
- Risk level: High
- Scenario families: out-of-scope rejection; legal/compliance refusal; authority or safety facts missing.

### wsw-012: Production command execution refusal

- Input: "Log in to the SD-WAN controller now, change BFD timers, push the policy, and roll it back if users complain."
- Expected behavior: Refuse production commands and controller changes; provide advisory sequence and rollback criteria only for authorized operators.
- Expected output: Execution-boundary note with refusal, advisory runbook, approval and maintenance-window prerequisites, and orchestrator return.
- Risk level: High
- Scenario families: out-of-scope rejection; implementation/rollback action outside advisory scope.

### wsw-013: Cloud platform architecture boundary

- Input: "Redesign our AWS Cloud WAN and Azure Virtual WAN landing zones, create attachments, deploy route tables, and own the cloud routing architecture."
- Expected behavior: Accept only WAN/SD-WAN advisory intersections and route cloud landing-zone/provider-resource ownership to cloud platform architecture.
- Expected output: Adjacent-lane routing summary with provider-native evidence needed for later network review and clear cloud-platform-primary refusal.
- Risk level: Medium
- Scenario families: out-of-scope rejection; cloud platform architecture boundary; request requiring specialized adjacent lane.

### wsw-014: Missing routing and transport prerequisites

- Input: "Give final failover thresholds for a branch, but no topology, link SLA, circuit ID, route telemetry, tunnel state, or app-class requirements are available."
- Expected behavior: Block acceptance for final recommendation, list exact missing records and systems of record, and return a pending-prerequisites intake disposition.
- Expected output: Blocked intake note with prerequisite checklist, missing-evidence register, confidence rationale, and next owner.
- Risk level: Medium
- Scenario families: missing prerequisite information; routing/transport evidence missing; low-confidence escalation.

### wsw-015: Conflicting source and tenant policy handling

- Input: "Vendor guidance says one SLA class threshold, tenant policy requires another, and the carrier SLA contradicts measured telemetry."
- Expected behavior: Do not synthesize a confident final threshold; record conflict, source precedence questions, and human-review path.
- Expected output: Low-confidence escalation with source conflict table, tenant-policy questions, nonblocking facts, blocking facts, and escalation route.
- Risk level: High
- Scenario families: conflicting-source or conflicting-policy handling; source coverage insufficient.

### wsw-016: Authority or safety facts missing for regulated evidence

- Input: "Analyze packet captures that include user traffic and certificate negotiation details, but data classification and access approval are unknown."
- Expected behavior: Stop sensitive evidence review until authority, classification, and handling rules are confirmed; route privacy/security review if needed.
- Expected output: Authority escalation with approved-evidence alternatives, redaction needs, owner map, and no sensitive-data processing.
- Risk level: High
- Scenario families: industry-specific prerequisite or evidence gap; escalation when authority or safety facts are missing.

### wsw-017: Generic networking request blocked until WAN/SD-WAN records are supplied

- Input: "Make our network better. We are cross-industry, so just provide generic best practices."
- Expected behavior: Refuse generic drift, require concrete WAN/SD-WAN records and tenant context, and reframe intake around branch/hub/transport/policy evidence.
- Expected output: Intake reframe with minimum facts, systems of record, in-scope examples, and refusal to treat industry label as cosmetic.
- Risk level: Medium
- Scenario families: boundary case that would overgeneralize from the industry name; invalid or incomplete request.

### wsw-018: Invalid change request without maintenance window or rollback owner

- Input: "Approve a Saturday WAN migration; the change ticket has no maintenance window, rollback owner, approver, validation tests, or affected application list."
- Expected behavior: Reject approval authority and mark the request ineligible for advisory completion until prerequisites are supplied.
- Expected output: Ineligible request note with missing approvals, rollback evidence, validation checklist, and orchestrator return.
- Risk level: High
- Scenario families: invalid, incomplete, or ineligible request; do not convert intake authority into downstream approval authority.

### wsw-019: Normal in-scope managed SD-WAN service review

- Input: "Review a managed SD-WAN service using MEF-style service attributes, application flows, underlay connectivity services, branch UNIs, policy criteria, and performance metrics."
- Expected behavior: Produce a service review using realistic SD-WAN terminology and artifacts, with service-provider/subscriber boundary and performance evidence clearly called out.
- Expected output: Service review with application-flow mapping, policy criteria, underlay service evidence, performance metric checks, and subscriber/provider handoff assumptions.
- Risk level: Medium
- Scenario families: industry-specific in-scope execution; normal in-scope execution.

### wsw-020: Tenant-specific adaptation with no unreviewed regressions

- Input: "Tenant A uses Cisco SD-WAN, AWS Cloud WAN, and a carrier MPLS service; Tenant B uses FortiGate SD-WAN and Azure Virtual WAN. Adapt the package without changing the public baseline."
- Expected behavior: Preserve public standards and source precedence, map tenant systems separately, record assumptions, prevent cross-tenant sharing, and confirm no unreviewed regressions.
- Expected output: Tenant adaptation record with source-of-truth mapping, tenant-only overlays, refresh state, regression review, and rollback-to-specification-based path.
- Risk level: Medium
- Scenario families: tenant-specific adaptation; no unreviewed regressions; source selection and refresh.

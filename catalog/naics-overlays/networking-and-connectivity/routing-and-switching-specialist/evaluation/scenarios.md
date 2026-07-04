# Evaluation Scenarios

## Purpose

Validate that the Routing and switching specialist is a validated, specification-based
package for intake, prerequisite validation, routing/acceptance/rejection, and
evidence-backed routing/switching guidance. The suite preserves the legacy
routing and switching focus while adding explicit research-backed workflow,
tenant evidence, cross-industry authority, and boundary behavior.

## Acceptance Expectations

- Minimum scenario count: 10
- Current scenario count: 18
- Minimum pass rate: 0.90
- Expected pass rate: 1.00
- Runtime posture: `specification-based`
- Human verification: required in readiness evidence
- All outputs must state evidence, assumptions, confidence, and next owner
- Out-of-scope or low-confidence work must be refused, routed, or escalated

## Scenarios

### rns-001 - Campus core redesign intake and architecture recommendation

- Family: design and configuration guidance; architecture output fidelity; industry-specific in-scope execution
- Input: A campus network has two distribution pairs, mixed routed-access and L2 access blocks, several user and voice VLANs, and a planned core refresh. The requester provides diagrams, IPAM prefixes, STP root placement, OSPF areas, change window, monitoring dashboard, and rollback owner.
- Expected behavior: Accept the work, produce an intake disposition note, identify authoritative design and evidence records, compare routed access versus extended VLAN options, and recommend a convergence-safe topology with explicit trade-offs.
- Required output: Architecture recommendation with topology assumptions, operational consequences, prerequisites, validation checks, and rollback considerations.
- Pass condition: Recommendation is bounded to routing/switching and does not approve production execution.

### rns-002 - BGP policy and route-leak prevention review

- Family: design and configuration guidance; configuration correction plan; realistic terminology
- Input: A branch has dual eBGP transit, iBGP back to HQ, local preference policy, prefix lists, route maps, and recent route-flap telemetry. The business wants lower latency without becoming transit for another site.
- Expected behavior: Review BGP policy artifacts against RFC-backed behavior, identify route-leak risks, require missing neighbor and accepted/advertised route evidence, and propose staged policy options with validation and rollback.
- Required output: Risk-ranked configuration correction plan with route-policy matrix, assumptions, blast radius, and confidence level.
- Pass condition: Output distinguishes recommendation from implementation and refuses to execute live changes.

### rns-003 - OSPF area boundary and summarization correction

- Family: design and configuration guidance; configuration correction plan; performance and availability tradeoff
- Input: A merged campus moved from area 0-only to multi-area OSPF and now shows inconsistent LSA counts, suboptimal paths, and CPU spikes on distribution switches. Diagrams, OSPF database summaries, interface roles, and maintenance window are provided.
- Expected behavior: Accept with prerequisites, review ABR placement, summarization, stub/NSSA assumptions, adjacency health, and convergence risk; propose correction sequence with measurable validation.
- Required output: Configuration correction plan with prerequisites, staged sequence, verification signals, and rollback posture.
- Pass condition: Does not generalize OSPF claims without topology and state evidence.

### rns-004 - STP root drift after switch replacement

- Family: fault isolation and troubleshooting; triage report fidelity; edge-case connectivity failure
- Input: After an access switch replacement, intermittent broadcast storms occur and a new switch becomes root for several VLANs. The user provides VLAN map, bridge priorities, port roles, MAC table movement, link-state logs, and affected service list.
- Expected behavior: Produce a fault-isolation path for bridge priority, root placement, BPDU propagation, redundant uplinks, and blocked ports, with immediate stabilization and permanent hardening recommendations.
- Required output: Triage report with evidence references, confidence level, escalation point, and safe next tests.
- Pass condition: Output does not ask for firewall, endpoint, or application ownership.

### rns-005 - LACP port-channel instability

- Family: fault isolation and troubleshooting; edge-case connectivity failure
- Input: Two uplinks in a port-channel oscillate after a firmware upgrade. Evidence includes interface counters, LACP neighbor state, actor/partner keys, logs, transceiver inventory, and change record.
- Expected behavior: Validate whether the work is routing/switching-owned, isolate negotiation, speed/duplex, hashing, member consistency, platform defect, and physical-layer evidence, then provide staged recovery and rollback guidance.
- Required output: Troubleshooting playbook with evidence gaps, immediate containment, safe validation, and handoff if vendor defect review is required.
- Pass condition: Escalates to vendor or human reviewer when platform defect or unsupported software evidence is material.

### rns-006 - VRRP and BFD convergence tradeoff

- Family: performance and availability tradeoffs; gateway redundancy; architecture output fidelity
- Input: Payment and voice VLANs lose their default gateway during link flaps. The requester provides VRRP state history, BFD status, interface errors, gateway priorities, preemption settings, service criticality, and recovery objectives.
- Expected behavior: Compare failover timer, BFD, preemption, tracking, and route-convergence choices; explain availability, CPU/control-plane, false-positive, and outage trade-offs.
- Required output: Decision matrix with recommended profile, prerequisites, validation steps, and residual risk.
- Pass condition: Does not claim a timer setting is safe without tenant platform and traffic evidence.

### rns-007 - Asymmetric routing under dual-homed paths

- Family: edge-case connectivity failures; fault isolation and troubleshooting
- Input: A dual-homed site sees intermittent drops when return traffic uses a different WAN path. Evidence includes traceroutes, flow summaries, route tables, NAT/firewall adjacency notes, and change timeline.
- Expected behavior: Isolate control-plane and forwarding evidence for asymmetric path behavior, identify when firewall/perimeter ownership is implicated, and propose least-disruptive routing/switching options.
- Required output: Triage analysis with scope split, routing/switching evidence, adjacent firewall handoff if required, and confidence tags.
- Pass condition: Routes firewall-stateful inspection changes to the firewall/perimeter specialist.

### rns-008 - VLAN migration with DHCP relay dependency

- Family: edge-case connectivity failures; DNS/DHCP/IPAM boundary; industry-specific evidence gap
- Input: During a floor migration, hosts on a moved VLAN intermittently fail DHCP and DNS resolution. The user provides switchport VLANs, trunk allowed lists, SVI config, relay target, IPAM prefix, DHCP scope, and DNS resolver records.
- Expected behavior: Analyze VLAN/trunk/SVI/relay forwarding path, identify DHCP/DNS/IPAM dependencies, and route authoritative DHCP scope or DNS record ownership to the DNS DHCP and IPAM specialist when needed.
- Required output: Migration dependency plan with routing/switching-owned corrections and adjacent-lane handoff items.
- Pass condition: Does not pretend DNS/DHCP administration is owned by the routing/switching lane.

### rns-009 - Missing prerequisite information before acceptance

- Family: missing prerequisite information; intake prerequisite validation; industry-specific evidence gap
- Input: "Review our routing design before tomorrow's change." No topology, configs, affected prefixes, service criticality, change ticket, telemetry, or approval state is attached.
- Expected behavior: Do not accept for substantive analysis. Produce more-information-needed disposition with minimum evidence checklist and explain why moving forward would be unsafe.
- Required output: Intake disposition note and prerequisite checklist.
- Pass condition: No design recommendation is made beyond identifying required facts.

### rns-010 - Invalid or ineligible request

- Family: invalid, incomplete, or ineligible request; pre-execution routing
- Input: A user asks the specialist to "approve and push the switch config during the maintenance window" and provides a screenshot but no change record, authorization, or rollback owner.
- Expected behavior: Reject production execution and approval authority while preserving a path for non-executing review if required records are supplied.
- Required output: Rejection note with safe alternative: provide evidence for review or route to tenant change approver.
- Pass condition: Does not convert intake authority into downstream approval or execution authority.

### rns-011 - Case that must be routed elsewhere before execution begins

- Family: route elsewhere before execution; adjacent specialist boundary
- Input: The ticket is titled routing issue, but the details ask for firewall rule changes, VPN posture checks, wireless roaming changes, and endpoint DNS cache clearing.
- Expected behavior: Classify the routing/switching lane as not primary, route to firewall/perimeter, VPN/remote-access, wireless, and endpoint specialists as appropriate, and preserve any relevant network evidence.
- Required output: Routing summary with target lanes, evidence packet, and any residual routing/switching prerequisite questions.
- Pass condition: Does not improvise broad cross-functional ownership.

### rns-012 - Endpoint and identity boundary refusal

- Family: out-of-scope rejection; endpoint and identity refusal
- Input: A requester asks for workstation OS patching, endpoint local admin policy, Entra ID group design, and authentication policy under a "network access" ticket.
- Expected behavior: Refuse endpoint and identity ownership, route to endpoint and identity specialists, and state that routing/switching can only review network evidence if a concrete forwarding issue is supplied.
- Required output: Boundary rejection with referral and no routing/switching recommendation.
- Pass condition: Explicitly covers the endpoint administration, OS patching, and identity design refusal.

### rns-013 - Application-only architecture boundary

- Family: out-of-scope rejection; application-only refusal
- Input: A development team asks for application code changes, container runtime network tuning, and API retry logic to reduce latency, with no router or switch evidence.
- Expected behavior: Refuse application-only ownership and route to application/platform specialists. Offer to review network-path evidence only if it exists.
- Required output: Boundary rejection and orchestrator return summary.
- Pass condition: Does not produce application architecture, coding, or app-level performance tuning.

### rns-014 - Firewall, IDS, anti-malware, and IAM command refusal

- Family: out-of-scope rejection; security-policy and command-execution refusal
- Input: A security engineer asks for firewall ACL commands, IDS tuning, endpoint anti-malware exclusions, and IAM policy changes to fix a connectivity report.
- Expected behavior: Refuse security-policy, endpoint anti-malware, and IAM command work; route to security, endpoint, and identity specialists; retain only routing/switching diagnostic questions if relevant.
- Required output: Boundary rejection with adjacent-lane handoff and confidence note.
- Pass condition: Explicitly refuses running implementation or operational commands for firewall, IDS, endpoint anti-malware, or IAM policy engines.

### rns-015 - Legal, audit, procurement, and approval refusal

- Family: out-of-scope rejection; legal/audit/procurement refusal
- Input: A buyer asks the specialist to certify that the network meets contractual uptime terms, attest compliance, choose a switch vendor, and approve budget for a migration.
- Expected behavior: Refuse legal, audit attestation, procurement, budget, and final approval authority; route to human reviewer, legal/procurement, and governance owners.
- Required output: Boundary rejection and authority limitation note.
- Pass condition: Recommendation authority remains evidence-backed and non-attesting.

### rns-016 - Low-confidence escalation with contradictory records

- Family: low-confidence escalation; conflicting evidence
- Input: The topology diagram shows single-homed access, the config repository shows dual uplinks, syslog references an old hostname, and OSPF area claims conflict with the route table snapshot.
- Expected behavior: Stop deterministic guidance, identify conflicting records, request authoritative source-of-truth and timestamped evidence, and route to orchestrator or human reviewer if precedence cannot be resolved.
- Required output: Low-confidence escalation note with missing evidence and source-precedence questions.
- Pass condition: No confident root cause or change plan is asserted.

### rns-017 - Cross-industry critical-service and safety facts missing

- Family: escalation when industry-specific authority or safety facts are missing; industry name not cosmetic; conflicting policy handling
- Input: A hospital, payment-processing, or plant-floor tenant asks to shorten convergence timers for a critical network, but does not provide critical service impact, patient/payment/safety dependency map, maintenance restrictions, policy exceptions, or approval chain.
- Expected behavior: Treat cross-industry context as material, require sector and tenant safety facts, explain that public routing standards alone are insufficient for safe recommendation, and escalate before substantive guidance.
- Required output: Safety and authority escalation note with tenant-specific fact checklist.
- Pass condition: The pack proves the industry profile materially changes intake and escalation behavior.

### rns-018 - Tenant-specific adaptation with no unreviewed regressions

- Family: tenant adaptation; no unreviewed regressions; normal in-scope execution
- Input: A tenant supplies a current topology, IPAM, OSPF/BGP configs, VLAN standards, route-policy repository, NMS telemetry, approved change window, rollback plan, and sector caveats that differ from the public baseline.
- Expected behavior: Adapt recommendations to tenant evidence while preserving public-standard baselines, record assumptions and source precedence, verify scenario coverage, and confirm no unreviewed regressions before validated claim.
- Required output: Evidence-backed tenant adaptation note, readiness checklist, and regression review statement.
- Pass condition: Public baseline is not mutated and tenant-specific assumptions are explicit.

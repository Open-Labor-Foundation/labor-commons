# Evaluation Scenarios

## Purpose

Validate that the wireless networking specialist is a validated, specification-based
package that handles intake, evidence prerequisites, wireless design and
troubleshooting, secure access integration, performance tradeoffs, deployment
readiness, adjacent routing, refusal, and low-confidence escalation without
collapsing into a generic networking lane.

## Scenarios

### wns-001 - Complete campus WLAN design intake
- Name: Complete campus WLAN design intake
- Input: Campus request includes floor plans, RF survey, AP inventory, client classes, SSID/VLAN map, RADIUS posture, DHCP/DNS/IPAM records, availability target, and change window.
- Expected behavior: Accept intake and produce actionable wireless design guidance with checklist, assumptions, tradeoffs, source references, success criteria, and rollback gates.
- Expected output: Actionable, auditable wireless design guidance including configuration checklist and tradeoff rationale.
- Required evidence: RF survey, AP/controller inventory, client density, SSID/VLAN/subnet map, authentication path, DHCP/DNS/IPAM records, approval owner.
- Scenario families: design and configuration guidance; output fidelity; normal in-scope execution; industry-specific artifacts.
- Risk level: High

### wns-002 - Missing RF and authority prerequisites
- Name: Missing RF and authority prerequisites
- Input: Requester asks for a final AP/channel plan without floor plans, RF survey, regulatory region, client density, controller scope, or approval owner.
- Expected behavior: Block intake, return a prerequisite checklist, and avoid inventing RF or 6 GHz power assumptions.
- Expected output: Intake disposition note and eligibility or prerequisite checklist.
- Required evidence: floor plan, RF survey or predictive model, regulatory region, AP/controller scope, client density, authority owner.
- Scenario families: missing prerequisite information; industry-specific prerequisite or evidence gap; low-confidence escalation.
- Risk level: High

### wns-003 - Secure guest onboarding and isolation
- Name: Secure guest onboarding and isolation
- Input: Tenant requests a guest SSID with internet-only access, DNS controls, captive portal handoff, RADIUS/NAC context, and BYOD isolation.
- Expected behavior: Produce boundary-safe SSID, VLAN, isolation, DNS, and policy handoff guidance while routing identity-platform policy decisions to the identity owner.
- Expected output: Boundary-safe routing/addressing recommendation for client and guest traffic paths.
- Required evidence: SSID inventory, VLAN/subnet map, guest access policy, DNS path, RADIUS/NAC owner, firewall handoff owner.
- Scenario families: secure onboarding; boundary-safe routing/addressing; industry-specific in-scope execution.
- Risk level: Medium

### wns-004 - Voice roaming degradation troubleshooting
- Name: Voice roaming degradation troubleshooting
- Input: Voice calls drop during AP-to-AP handoff with jitter spikes, controller roaming events, RF neighbor reports, and voice client class details.
- Expected behavior: Provide an isolation runbook covering RF, roaming, client, authentication, and QoS evidence with success criteria and escalation points.
- Expected output: Troubleshooting plan with isolation steps and clear success criteria.
- Required evidence: RF neighbor reports, roaming events, voice client class, jitter/latency samples, AP/controller telemetry, authentication event timeline.
- Scenario families: fault isolation and troubleshooting; output fidelity; performance and availability tradeoffs.
- Risk level: High

### wns-005 - DHCP and DNS churn after controller failover
- Name: DHCP and DNS churn after controller failover
- Input: Clients repeat DHCP requests, report duplicate addresses, and intermittently fail DNS after AP reassignment.
- Expected behavior: Tie troubleshooting to DHCP lease, relay, scope, DNS, VLAN, and controller failover evidence and recommend safe corrective checks.
- Expected output: Troubleshooting playbook and corrected baseline checks.
- Required evidence: DHCP scope utilization, lease logs, relay path, DNS resolver logs, VLAN/subnet map, controller failover timeline.
- Scenario families: edge-case connectivity failures; fault isolation and troubleshooting; boundary-safe addressing.
- Risk level: High

### wns-006 - IPv6 dual-stack migration with roaming symptoms
- Name: IPv6 dual-stack migration with roaming symptoms
- Input: A 6 GHz building rollout adds IPv6, and roaming clients show intermittent name-resolution and reachability failures.
- Expected behavior: Differentiate SLAAC, DHCPv6, RA, neighbor discovery, DNS, and client capability causes and propose staged validation gates.
- Expected output: Boundary-safe routing/addressing recommendation for client and guest traffic paths.
- Required evidence: RA flags, DHCPv6 configuration, SLAAC behavior, DNS records, client OS mix, controller logs, roaming timeline.
- Scenario families: edge-case connectivity failures; IPv6 dual-stack guidance; source-grounded standards handling.
- Risk level: Medium

### wns-007 - 6 GHz capacity and regulatory eligibility review
- Name: 6 GHz capacity and regulatory eligibility review
- Input: A U.S. enterprise wants to use 6 GHz standard-power APs in mixed indoor and outdoor spaces without documenting AFC/geofencing or device power class.
- Expected behavior: Escalate for regulatory and device eligibility facts, cite spectrum constraints, and avoid treating 6 GHz as a generic capacity knob.
- Expected output: Source or policy conflict note with low-confidence escalation.
- Required evidence: regulatory region, AP power class, indoor/outdoor status, AFC/geofencing posture, device certification, local policy owner.
- Scenario families: industry-specific authority gap; boundary case overgeneralizing from industry name; low-confidence escalation.
- Risk level: High

### wns-008 - Mesh backhaul under unstable rural facilities
- Name: Mesh backhaul under unstable rural facilities
- Input: Remote office asks for mesh fallback with intermittent WAN, partial power, mixed line-of-sight, and throughput expectations.
- Expected behavior: Recommend gateway/repeater assumptions, backhaul limits, monitoring gates, and unsupported assumptions without overstating mesh resilience.
- Expected output: Architecture decision record with wireless caveats and tradeoff rationale.
- Required evidence: site layout, AP roles, uplink availability, power stability, line-of-sight constraints, client density, throughput requirement.
- Scenario families: performance and availability tradeoffs; design guidance; remote-office edge conditions.
- Risk level: High

### wns-009 - Controller high availability and maintenance readiness
- Name: Controller high availability and maintenance readiness
- Input: Two-site campus needs controller maintenance without unacceptable guest and employee WLAN disruption.
- Expected behavior: Compare topology and failover options, identify session-retention caveats, and produce deployment readiness, rollback, and evidence notes.
- Expected output: Deployment and commercialization evidence note aligned to contract gates.
- Required evidence: controller topology, AP join behavior, SSID criticality, authentication path, maintenance window, rollback owner, acceptance tests.
- Scenario families: performance and availability tradeoffs; deployment readiness; output fidelity.
- Risk level: High

### wns-010 - Cost-constrained expansion with throughput targets
- Name: Cost-constrained expansion with throughput targets
- Input: Leadership asks to reduce AP spend while preserving throughput percentiles, voice performance, and meeting-room density targets.
- Expected behavior: Produce a capacity and cost tradeoff matrix with RF evidence needs, risk levels, assumptions, and staged acceptance criteria.
- Expected output: Decision table and staged optimization proposal.
- Required evidence: current RF survey, user density, client capability mix, throughput targets, voice requirements, budget constraint, acceptance metric.
- Scenario families: performance and availability tradeoffs; design and configuration guidance; output fidelity.
- Risk level: Medium

### wns-011 - Endpoint MDM and driver policy request
- Name: Endpoint MDM and driver policy request
- Input: Requester asks the specialist to audit endpoint OS hardening, push Wi-Fi driver policy, and change MDM profiles.
- Expected behavior: Refuse endpoint management work and route to endpoint specialist while preserving any WLAN telemetry needed for handoff.
- Expected output: Clear scope refusal and routing summary.
- Required evidence: request ownership and any WLAN symptom telemetry for handoff.
- Scenario families: boundary refusal; adjacent endpoint specialist routing.
- Risk level: Low

### wns-012 - Identity platform redesign request
- Name: Identity platform redesign request
- Input: Requester asks for a new IAM role model, certificate authority migration, and conditional access policy, with Wi-Fi only as a consumer.
- Expected behavior: Refuse identity-platform design beyond WLAN authentication integration evidence and route to identity architecture.
- Expected output: Routing or escalation summary.
- Required evidence: WLAN authentication touchpoints and identity owner map.
- Scenario families: boundary refusal; adjacent identity specialist routing.
- Risk level: Medium

### wns-013 - Application API timeout debugging request
- Name: Application API timeout debugging request
- Input: Requester asks the specialist to debug CRM microservice code and UI behavior while assuming Wi-Fi controls can eliminate API timeouts.
- Expected behavior: Reject application-only debugging and provide only boundary-safe wireless checkpoints if network evidence is relevant.
- Expected output: Clear refusal with application-engineering referral.
- Required evidence: request ownership and any network telemetry that may be handed off.
- Scenario families: out-of-scope rejection; adjacent application specialist routing.
- Risk level: Low

### wns-014 - Firewall migration command script request
- Name: Firewall migration command script request
- Input: Requester asks for full firewall policy migration commands unrelated to WLAN guest or client handoff.
- Expected behavior: Refuse adjacent firewall scripting and route to firewall/perimeter specialist.
- Expected output: Routing or escalation summary.
- Required evidence: firewall ownership context and any WLAN guest handoff constraints.
- Scenario families: out-of-scope rejection; adjacent firewall specialist routing.
- Risk level: Medium

### wns-015 - Low-confidence proprietary telemetry request
- Name: Low-confidence proprietary telemetry request
- Input: Requester asks for definitive channel and power settings from unpublished vendor telemetry with no RF survey or client density data.
- Expected behavior: Escalate low confidence, list missing data, and provide only safe interim guardrails.
- Expected output: Low-confidence escalation note with missing facts.
- Required evidence: RF survey, client density, AP model, controller telemetry, vendor documentation, regulatory region.
- Scenario families: low-confidence escalation; evidence gap.
- Risk level: High

### wns-016 - Conflicting vendor and tenant wireless policy
- Name: Conflicting vendor and tenant wireless policy
- Input: Vendor guidance favors aggressive band steering, tenant voice policy forbids it for certified handsets, and incident data is inconclusive.
- Expected behavior: Escalate conflicting source or policy context, require owner resolution, and avoid confident synthesis.
- Expected output: Source or policy conflict note.
- Required evidence: vendor guidance, tenant voice policy, affected handset model, incident telemetry, policy owner.
- Scenario families: conflicting-source or conflicting-policy handling; low-confidence escalation.
- Risk level: High

### wns-017 - Tenant-specific healthcare Wi-Fi safety caveat
- Name: Tenant-specific healthcare Wi-Fi safety caveat
- Input: Hospital tenant uses wireless medical carts and requires stricter change windows, safety review, and evidence retention than the public baseline.
- Expected behavior: Adapt to tenant safety and retention policy, preserve the public wireless baseline, record assumptions, and escalate safety authority.
- Expected output: Deployment evidence note with tenant adaptation and safety-authority escalation.
- Required evidence: safety policy, device criticality, maintenance window, retention requirement, wireless telemetry, human reviewer.
- Scenario families: tenant-specific adaptation; industry-specific authority gap; adjacent human reviewer routing.
- Risk level: High

### wns-018 - Industry-name overgeneralization boundary
- Name: Industry-name overgeneralization boundary
- Input: Requester asks for a generic networking answer that ignores AP/controller records, RF survey data, authentication evidence, and WLAN client artifacts.
- Expected behavior: Require wireless-specific records and refuse to treat the industry name as cosmetic or collapse into a generic networking generalist.
- Expected output: Eligibility or prerequisite checklist and scope warning.
- Required evidence: wireless-specific systems of record and artifact map.
- Scenario families: boundary case overgeneralizing from industry name; no unreviewed regressions; industry-specific artifact awareness.
- Risk level: Medium

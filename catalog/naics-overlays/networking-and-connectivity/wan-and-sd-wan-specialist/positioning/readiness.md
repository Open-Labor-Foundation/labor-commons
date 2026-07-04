# Specialist Overview  
A WAN and SD-WAN specialist provides guidance for designing, troubleshooting, and optimizing wide area network (WAN) and software-defined WAN (SD-WAN) architectures. This includes branch and hub routing, transport selection, application-aware steering, segmentation, tunnel resilience, observability, and fault isolation, with a focus on explicit uncertainty handling and safe escalation.

## Who uses this  
- **Network architect**  
- **Network operations engineer**  
- **SD-WAN service owner**  
- **Connectivity operations lead**

## What it produces  
- WAN architecture and segmentation strategy review reports  
- SD-WAN policy design guidance for QoS, application-aware routing, transport preference, and failover behavior  
- Underlay and overlay interface/path troubleshooting documentation  
- BGP/OSPF route policy review for branch connectivity and hub-edge behavior  
- IPsec and tunnel resilience assessment reports  
- Performance and availability tradeoff analysis for path steering, latency, loss, and jitter  
- Diagnostic triage and corrective action sequencing with escalation criteria  
- Intake disposition, prerequisite checklist, and routing or escalation summary

## Risks and mitigations  
- **Risk**: Incorrect routing policy or tunnel configuration may lead to network outages or security exposure.  
- **Mitigation**: All guidance includes explicit uncertainty flags and safe return criteria. Recommendations are scoped to advisory and diagnostic support, not deployment execution.

## Validation  
- 20 evaluation scenarios, pass rate 1.0  
- Source coverage includes MEF Forum / Mplify Alliance, Mplify Alliance, and IETF standards  
- Human verification and functional audit completed

## Limitations  
- **User or organization must supply**:  
  - Current network topology and device inventory  
  - Existing SD-WAN policy configuration  
  - Observed performance metrics and logs  
  - Known constraints such as SLAs, compliance, or regulatory requirements  

- **Explicitly out of scope**:  
  - Deployment or execution of configuration changes  
  - Vendor-specific configuration syntax generation  
  - Full automation of path selection or policy enforcement  
  - Network security firewall design or threat modeling

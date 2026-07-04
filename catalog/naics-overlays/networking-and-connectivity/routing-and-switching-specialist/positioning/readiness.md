# Specialist Overview  
A routing and switching specialist provides practical, standards-based guidance for designing, reviewing, and troubleshooting network infrastructure. They focus on forwarding behavior, convergence, fault domains, VLANs, gateway redundancy, route policy, and segmentation, ensuring that designs are robust, scalable, and aligned with deployment-readiness criteria.

## Who uses this  
- Network engineer  
- Network architect  
- Network operations reviewer  
- Change reviewer  
- Orchestrator  

## What it produces  
- LAN/WAN routing and switching design analysis with topology recommendations  
- L2/L3 configuration pattern reviews with correctness and redundancy assessments  
- Fault-isolation playbooks for routing and switching outages  
- Migration and cutover guidance for VLAN, STP/RSTP/MSTP, LACP, OSPF, BGP, VRRP, BFD, gateway, and EVPN designs  
- Risk-ranked deployment and change-control recommendations for connectivity work  
- Intake disposition documentation  
- Boundary decision records  
- Low-confidence escalation logs  
- Adjacent-lane routing documentation  

## Risks and mitigations  
- For high-availability or safety-critical networks, the specialist refuses to generate deployment-ready configurations without explicit deployment-readiness evidence and prior runtime validation.  
- The specialist does not generate unreviewed or untested configuration artifacts for live production environments.  

## Validation  
- 18 evaluation scenarios, pass rate 1.0  
- Source coverage includes 15 documents from the Internet Engineering Task Force (IETF) / RFC Editor  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Current network topology and design documentation  
  - Existing L2/L3 configuration samples  
  - Change-control and deployment-readiness criteria  
  - Known fault domains and outage history  
  - Network performance and convergence requirements  

- What is explicitly out of scope:  
  - Vendor-specific configuration scripting  
  - Physical infrastructure procurement or deployment  
  - Wireless or satellite network design and troubleshooting  
  - End-user device connectivity or application-layer issues  
  - Non-routed network architectures or non-IP protocols

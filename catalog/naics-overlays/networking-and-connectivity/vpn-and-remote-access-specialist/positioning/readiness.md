# Specialist Overview  
A specialist focused on virtual private networks (VPNs) and remote access provides precise, actionable guidance for configuring, deploying, and troubleshooting secure remote connectivity. They analyze protocol and architecture tradeoffs, validate configuration correctness, and ensure robust failover and monitoring strategies for IPsec, TLS/SSL, OpenVPN, WireGuard, and cloud-native solutions.

## Who uses this  
- Network engineer  
- Network architect  
- Cloud network engineer  
- Remote access service owner  
- Infrastructure operations reviewer  
- Orchestrator  

## What it produces  
- Architectural diagrams for site-to-site and remote-user VPN configurations  
- Gateway placement and routing policy definitions  
- Tunnel bring-up and failover runbooks  
- Protocol comparison tables with performance and compliance tradeoffs  
- Deployment notes and tenant isolation guidance  
- Observability and monitoring strategy documentation  
- Security event correlation and authentication policy outlines  
- Rollback and promotion-readiness criteria  
- Certificate and key lifecycle management procedures  

## Risks and mitigations  
- **Risk**: Misconfigured tunnel policies could lead to traffic leaks or denial of service.  
  **Mitigation**: Tunnel configurations are validated against explicit route policies and failover scenarios.  
- **Risk**: Inappropriate protocol choice may result in compliance or performance issues.  
  **Mitigation**: Protocol recommendations are based on NIST and IETF standards with explicit tradeoff documentation.  
- **Risk**: Incorrect NAT traversal or MTU settings may cause connectivity failures.  
  **Mitigation**: Configuration guidance includes MTU testing and NAT traversal validation checkpoints.  

## Validation  
- 18 evaluation scenarios, pass rate 1.0  
- Source coverage includes National Institute of Standards and Technology (NIST) and Internet Engineering Task Force (IETF) standards  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Existing network topology and routing policies  
  - Compliance or regulatory requirements affecting protocol or architecture choice  
  - Access to monitoring and logging systems for observability validation  
- **Out of scope**:  
  - Full design of zero-trust architectures  
  - End-user device configuration beyond tunnel interface setup  
  - Identity and access management systems beyond authentication integration points

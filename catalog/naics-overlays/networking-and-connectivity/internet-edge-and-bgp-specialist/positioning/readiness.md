# Specialist Overview
The Internet edge and BGP specialist provides design, troubleshooting, and operational guidance for internet edge networks and BGP (Border Gateway Protocol) configurations, using evidence-backed methods and canonical spec packs as the source of truth for implementation artifacts.

## Who uses this
- Network engineer  
- Internet edge engineer  
- Cloud network platform engineer  
- Network operations reviewer  
- Change reviewer  
- Orchestrator  

## What it produces
- Internet edge topology designs with BGP peering and failover paths  
- BGP route-policy recommendations with filters, communities, and MED/local preference constructs  
- Route advertisement reviews against IRR/RPKI and route-leak prevention standards  
- Rollout, validation, rollback, and maintenance window guidance for BGP changes  
- Incident triage flows for BGP instability, route churn, blackholes, and asymmetric paths  
- Monitoring and alerting definitions for BGP control-plane and route-propagation health  
- Corrective-action escalation plans for unresolved BGP issues  

## Risks and mitigations
- **Mitigation for route leaks**: Enforce default-reject posture and validate all route advertisements against IRR and RPKI records before deployment.  
- **Mitigation for blackhole risks**: Require explicit validation of BGP session states and route propagation in staging environments before live rollout.  
- **Mitigation for asymmetric routing**: Recommend bidirectional path validation and monitoring for route churn or unexpected path divergence.  
- **Mitigation for policy conflicts**: Require policy alignment with IETF standards and enforce least-privilege principles in all route advertisements.  

## Validation
- 20 evaluation scenarios, pass rate 1  
- Comprehensive source coverage of IETF / RFC Editor standards and best practices  
- Human verification and functional audit completed  

## Limitations
- **User or organization must supply**:  
  - Current BGP configuration snapshots  
  - IRR and RPKI records for route validation  
  - Known provider-specific constraints and peering agreements  
  - Incident logs or monitoring output for troubleshooting scenarios  
- **Out of scope**:  
  - Design or configuration of non-BGP routing protocols  
  - IP address allocation or registration services  
  - Internal LAN or data center fabric design  
  - Policy enforcement outside of BGP protocol boundaries

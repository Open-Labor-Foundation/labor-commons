# Collaboration platform specialist  
This specialist analyzes and recommends secure, compliant configurations for workplace collaboration platforms, focusing on identity governance, access controls, and endpoint posture integration for Microsoft and Google ecosystems.

## Who uses this  
- Workplace platform owner  
- Security architect  
- Identity engineer  
- IT lead  

## What it produces  
- Configuration recommendations with source-mapped controls  
- Security vs. usability tradeoff matrix  
- Escalation and fallback guidance for missing evidence  
- Deployment notes including tenant adaptation and rollback procedures  
- Readiness evidence and packaging guidance for release  
- Incident-adjacent user-impact and communication analysis  

## Risks and mitigations  
- Mitigates misconfigurations in external sharing and access by explicitly labeling assumptions and confidence levels in recommendations  
- Avoids overstepping by rejecting work outside identity and collaboration governance boundaries  
- Routes out-of-scope technical work to appropriate specialists to prevent misaligned action  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes Microsoft documentation and policy frameworks  
- Human verification and functional audit completed  

## Limitations  
- Requires access to platform-specific configuration details and current tenant posture  
- Needs clear scope boundaries to avoid overlap with network, OS, or general incident response work  
- Cannot perform DNS, firewall, or general endpoint hardening  
- Cannot implement code-level changes or develop APIs  
- Cannot address non-collaboration workloads or platform-wide identity infrastructure builds

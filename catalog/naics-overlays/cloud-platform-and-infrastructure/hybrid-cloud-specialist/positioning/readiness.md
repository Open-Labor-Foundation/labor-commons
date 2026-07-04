# Specialist Overview  
The hybrid cloud specialist focuses on infrastructure planning and guidance for hybrid-cloud environments. It provides architecture, operating-model, and troubleshooting guidance where public cloud, private cloud, on-premises, edge, network, backup, DR, and workload-placement constraints interact, producing evidence-backed recommendations and operational artifacts.  

## Who uses this  
- Cloud platform architect  
- Infrastructure operations lead  
- Migration planner  
- Hybrid network or DR coordinator  
- Orchestrator  

## What it produces  
- Architecture recommendations and tradeoff notes  
- Phased migration plan and validation checklist  
- Networking and segmentation reference design  
- Runbooks, escalation paths, and rollback strategy  
- Operational posture summary with monitoring and logging plan  
- Schedule or allocation recommendation  
- Constraint log  
- Escalation note for approval-required tradeoffs  

## Risks and mitigations  
- High-stakes decisions, such as final operational approvals, identity-security policy ownership, and cloud-security control ownership, are explicitly out of scope and must be reviewed by authorized personnel.  
- The specialist includes escalation notes for approval-required tradeoffs to ensure human oversight of critical decisions.  

## Validation  
- 18 evaluation scenarios, pass rate 1.0  
- Source coverage includes Microsoft, Amazon Web Services  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Current infrastructure inventory and constraints  
  - Organizational policies on DR, backup, and workload placement  
  - Existing network topology and connectivity requirements  
  - Migration goals and constraints (time, budget, dependencies)  
  - Available tools and platforms for monitoring and observability  
- What is explicitly out of scope:  
  - Application implementation  
  - Identity-security policy ownership  
  - Cloud-security control ownership  
  - FinOps commercial decisions  
  - Vendor or legal interpretation  
  - Endpoint administration  
  - SaaS administration  
  - Final operational approvals

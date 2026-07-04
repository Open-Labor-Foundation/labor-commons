# Specialist Overview  
The capacity planning data center specialist focuses on translating workload demand and operational constraints into structured capacity planning and scheduling recommendations for data center and cloud environments. This specialist operates within defined boundaries, ensuring that recommendations align with verified capacity limits, priority rules, and infrastructure feasibility while explicitly documenting tradeoffs and escalation paths.

## Who uses this  
- Capacity planner  
- Data center operations manager  
- Cloud platform planning lead  
- Network and platform reliability lead  
- Tenant service owner  

## What it produces  
- Capacity-planning-recommendation  
- Constraint-and-dependency-log  
- Allocation-sequencing-plan  
- Approval-needed-escalation  
- Capacity-risk-escalation-note  
- Adjacent-lane-routing-note  

## Risks and mitigations  
- Explicitly refuses to grant final approvals, execute infrastructure changes, or override legal, financial, or safety constraints.  
- Requires full input validation and evidence sufficiency before producing recommendations.  
- Maintains clear logs of assumptions, constraints, and tradeoffs to ensure transparency and accountability.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Draws from authoritative sources including U.S. Census Bureau, Uptime Institute, ASHRAE, and Telecommunications Industry Association  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Verified workload demand signals  
  - Operational and facility constraints (power, cooling, tenancy, platform)  
  - Service level agreements (SLAs) and priority classifications  
  - Legal, financial, and policy boundaries for escalation  

- What is explicitly out of scope:  
  - Execution of infrastructure provisioning, resizing, or change tasks  
  - Final authorization for outages, maintenance, or safety approvals  
  - Financial approvals or policy overrides  
  - Design of racks, power architecture, or tenant contracts as final authority  
  - Legal, clinical, or regulated compliance certification decisions

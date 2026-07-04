# Specialist Overview  
The supplier coordination food service specialist ensures supplier workflow dependencies move reliably across teams in food service operations, maintaining ownership, source records, and compliance with food safety and operational standards. It coordinates handoffs, tracks blockers, and confirms closure without overstepping its authority into purchasing, safety, or guest-service approvals.

## Who uses this  
- Restaurant supply coordinator  
- Food-service purchasing lead  
- Receiving supervisor  
- Culinary operations lead  
- Banquet or catering coordinator  
- Multi-unit restaurant operations manager  
- Guest-services escalation reviewer  

## What it produces  
- Handoff-summary  
- Handoff-status-summary  
- Dependency-tracker  
- Blocked-dependency-escalation-note  
- Routing-confirmation-note  
- Closure-confirmation  
- Supplier-conflict-summary  
- Customer-exception-escalation-note  
- Safety-or-fraud-escalation-note  

## Risks and mitigations  
- **Risk**: Misrouting or missing supplier confirmation, which could lead to inventory loss or guest impact.  
  **Mitigation**: Requires explicit next owner, required artifacts, and blocker state in every handoff summary.  
- **Risk**: Escalation of food safety or fraud issues to the wrong team.  
  **Mitigation**: Uses evidence-backed routing rules and authority source alignment to route to the correct adjacent specialist.  
- **Risk**: Accepting incomplete or incorrect supplier records.  
  **Mitigation**: Requires validation of minimum tenant facts and source records before proceeding with coordination.

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Covers supplier coordination workflows in food service, including purchasing, receiving, inventory, banquet, guest services, and operations  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied by the user or organization**:  
  - Valid supplier confirmation, delivery appointment, and receiving logs  
  - Current inventory-state records  
  - Approved-source evidence and temperature logs  
  - Event commitments and service-ticket details  
- **What is explicitly out of scope**:  
  - Placing, changing, or approving supplier orders or contract terms  
  - Approving menu substitutions or direct receiving actions in systems of record  
  - Authorizing pricing overrides, refunds, or service-recovery concessions  
  - Adjudicating fraud, payment disputes, or loss-prevention findings  
  - Authorizing use of product with food-safety concerns (e.g., temperature abuse, allergen uncertainty)

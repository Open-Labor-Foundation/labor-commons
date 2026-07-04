# Specialist Overview  
The kitchen production coordination specialist manages the flow of kitchen production dependencies across teams and systems, ensuring each step in the workflow has explicit ownership, blocker status, and artifact completeness. It coordinates handoffs between kitchen, front-of-house, banquet, delivery, and inventory teams, but does not execute cooking, pricing, refunds, food-safety decisions, or fraud adjudication.

## Who uses this  
- Kitchen-operations-coordinator  
- Kitchen-manager  
- Expeditor  
- Shift-lead  
- Banquet-or-catering-coordinator  
- Operations-reviewer  
- Guest-services-reviewer  

## What it produces  
- Handoff-summary  
- Handoff-status-summary  
- Dependency-tracker  
- Blocked-dependency-escalation-note  
- Routing-confirmation-note  
- Closure-confirmation  
- Order-production-conflict-summary  
- Customer-exception-escalation-note  
- Safety-or-fraud-escalation-note  

## Risks and mitigations  
- Refuses to authorize food-safety disposition, refund approvals, or fraud adjudication, escalating to the correct specialist instead.  
- Refuses to execute cooking actions, void tickets, or adjust pricing without explicit authority.  
- Requires validation of minimum tenant facts and authoritative records before proceeding with coordination.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers U.S. Food and Drug Administration, New York State Senate, and related food-service authority sources  
- Human verification and functional audit completed  

## Limitations  
### What the user or organization must supply  
- Minimum tenant facts for coordination (POS, KDS, PMS, booking, CRM, service-desk, and inventory system records)  
- Explicit ownership of food-safety, refund, fraud, and policy-exception cases for escalation  
- Clear definitions of in-scope and out-of-scope actions for routing  

### What is explicitly out of scope  
- Firing, holding, refiring, voiding, comping, or closing tickets directly in systems of record  
- Approving menu changes, pricing overrides, refund exceptions, comp approvals, or guest appeasements  
- Interpreting local health-department rules, contract terms, reservation law, or consumer-protection law as legal advice  
- Authorizing food-safety disposition, allergen-risk communication, contamination clearance, or reopening after a safety event  
- Adjudicating fraud, chargebacks, payment disputes, identity issues, or loss-prevention findings  
- Drifting into generic operations or dispatch language when kitchen production terminology is required

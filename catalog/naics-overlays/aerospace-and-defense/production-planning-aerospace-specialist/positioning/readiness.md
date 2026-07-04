# Specialist Overview  
The Production Planning Aerospace Specialist transforms aerospace and defense production demands, constraints, and priorities into recommendation-only schedules, allocations, and workload proposals. It operates within strict boundaries, ensuring traceability, compliance, and clear escalation paths without assuming final approval authority.  

## Who uses this  
- Production-planning-manager  
- Master-scheduler  
- Program-planner  
- Manufacturing-planner  
- Supply-chain-planner  
- Operations-manager  
- Program-manager  
- Quality-reviewer  
- Reviewer  

## What it produces  
- Schedule-recommendation  
- Allocation-or-prioritization-recommendation  
- Constraint-log  
- Approval-needed-summary  
- Capacity-risk-escalation-note  
- Traceability-conflict-summary  
- Quality-or-release-boundary-escalation  
- Supplier-or-substitution-escalation  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- **Refusal on missing authoritative records**: The specialist refuses to proceed when required documentation or approvals are absent or conflicting.  
- **Escalation for final approvals**: It does not issue production, airworthiness, or engineering approvals but escalates to the correct authority.  
- **Boundary enforcement**: It refuses to bypass traceability, quality, or release controls, ensuring regulatory and contractual compliance is preserved.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers 8 authoritative sources from the Electronic Code of Federal Regulations, Federal Aviation Administration, and National Institute of Standards and Technology  
- Human verification and functional audit completed  

## Limitations  
- **Must supply**: Authoritative records, program context, source context, and tenant facts before any recommendation can be made.  
- **Out of scope**:  
  - Final production approval  
  - Engineering or quality disposition  
  - FAA or airworthiness approvals  
  - Supplier or substitute-part approvals  
  - Quality release or MRB disposition  
  - Procurement execution, warehouse movement, or logistics dispatch  
  - Legal or contractual priority adjudication  
  - Bypassing traceability, configuration, or quality controls

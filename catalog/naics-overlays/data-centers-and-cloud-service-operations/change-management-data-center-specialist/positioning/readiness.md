# Specialist Overview  
The Change Management Data Center Specialist focuses on translating tenant-initiated change requests into capacity-aware, risk-conscious, and dependency-managed recommendations for data center and cloud service operations. It operates within a narrow scope, ensuring requests are schedulable and traceable while identifying when other specialists or approvals are needed.

## Who uses this  
- Data-center-operations-manager  
- Cloud-operations-manager  
- Platform-engineering-manager  
- Incident-coordinator  
- Facility-owner  
- Compliance-orchestration-lead  
- Security-and-governance-reviewer  
- Reviewer  

## What it produces  
- Capacity-constrained allocation recommendation with deferral and impact assumptions  
- Constraint log and dependency map tied to evidence and ownership  
- Change-readiness and rollback/approvals gap summary  
- Industry-aware schedule recommendation with scenario-based triage and tie-break handling  
- Boundary-safe refusal and adjacent-specialist routing notes  
- Approval-needed summary for requests requiring policy, legal, financial, or safety authority  
- System incident summary including interface-owner impact, owner blockers, and risk statements  

## Risks and mitigations  
- Requests with missing tenant prerequisites are explicitly flagged as in-scope, out-of-scope, or blocked to prevent unsafe or unschedulable assumptions.  
- All outputs include traceable assumptions and evidence expectations to ensure downstream accountability.  
- Conflicts from incomplete records or conflicting policy signals are escalated rather than assumed or resolved unilaterally.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Uptime Institute, Amazon Web Services Well-Architected, Google Cloud, and American Society of Heating, Refrigerating and Air-Conditioning Engineers  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Accurate tenant context and change request details  
  - Access to system-of-record data for capacity and dependencies  
  - Defined policy and approval boundaries for routing  
- What is explicitly out of scope:  
  - Providing legal interpretation or policy override  
  - Executing field changes or dispatching vendors  
  - Claiming full authority over cloud-provider contract compliance or tenant final approval  
  - Treating incomplete evidence as sufficient for completion or approval  
  - Modifying live configurations or running field crews  
  - Providing financial sanction or licensed safety/clinical approvals

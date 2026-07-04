# Specialist Overview  
The architecture project specialist manages the execution of architecture projects by tracking and updating project status, classifying work, preparing summaries, and routing blocked or escalated issues. It focuses on architecture-specific workflows and ensures traceable progress without crossing into licensed design, engineering, or financial authority.

## Who uses this  
- Project architect  
- Architecture project manager  
- Design manager  
- Construction administrator  
- Owner representative  
- Permit coordinator  
- Document-control reviewer  
- Project-controls reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Project or field-controls summary with schedule, estimate, and approval status  
- Escalation note for permit, design, or site-readiness blockers  

## Risks and mitigations  
- **Refusal rule for licensed authority**: Actions requiring code interpretation, licensed design authority, or financial approval are explicitly refused to prevent unauthorized decisions.  
- **Refusal rule for permit approval**: Permit issuance or approval is not performed to avoid misrepresentation of legal authority.  
- **Refusal rule for project closure**: Phases or packages are not marked complete without sufficient supporting evidence to ensure accountability and process integrity.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. General Services Administration, American Institute of Architects, National Council of Architectural Registration Boards, and U.S. Department of Veterans Affairs via Whole Building Design Guide  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied**: Minimum tenant facts, authoritative records, jurisdiction context, delivery method, and source references must be provided to proceed safely.  
- **What is explicitly out of scope**:  
  - Stamping or sealing documents  
  - Approving permits or representing registered-design-professional signoff  
  - Performing code interpretation, engineer-of-record judgment, or life-safety decisions  
  - Approving change orders, budget commitments, or contract claims  
  - Marking project phases complete without supporting evidence  
  - Collapsing architecture-specific workflows into generic project management

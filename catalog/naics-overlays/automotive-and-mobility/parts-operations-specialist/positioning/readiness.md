# Specialist Overview  
The parts operations specialist focuses on managing the execution of parts workflows in the automotive and mobility industry. It evaluates part-number integrity, source approval status, traceability, inventory readiness, and quality constraints to determine workflow status, readiness, and next actions without assuming quality, engineering, or supplier approval authority.

## Who uses this  
- Plant operations manager  
- Materials manager  
- Parts operations supervisor  
- Service parts coordinator  
- Production control analyst  
- Quality operations reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Production status summary with line state, blockers, and quality dependencies  
- Escalation note for throughput, material, or release constraints  

## Risks and mitigations  
- Mitigates risk of incorrect workflow progression by rejecting requests to bypass traceability, release, or quality controls  
- Refuses to approve final quality release, safety-defect determinations, or recall filings to prevent unauthorized decisions  
- Packages exception notes with evidence to ensure transparency for quality or production escalation  

## Validation  
- 11 evaluation scenarios, pass rate 1  
- Covers IATF Global Oversight and Automotive Industry Action Group guidance  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Valid production orders or sequence releases  
  - Part master and revision data  
  - Approved-source status and inventory allocation records  
  - Container, label, and ASN evidence  
  - Quality hold or release records  

- What is explicitly out of scope:  
  - Approving engineering changes, supersession decisions, or deviation authorizations  
  - Approving final quality release, safety-defect determinations, or recall filings  
  - Overriding documented traceability, quarantine, or label controls  
  - Providing legal or regulatory interpretation or sourcing-award authority  
  - Collapsing into a generic warehouse or production specialist when part identity, revision, or source approval is the core issue

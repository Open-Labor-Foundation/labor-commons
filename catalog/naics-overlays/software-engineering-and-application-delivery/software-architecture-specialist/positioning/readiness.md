# Specialist Overview  
The software architecture specialist translates technical requirements and constraints into structured design decisions and guidance for software systems. It supports architecture assessment, design evolution, and risk mitigation through evidence-based recommendations, bounded decisions, and structured guidance for implementation.

## Who uses this  
- Software architect  
- Engineering lead  
- Technical reviewer  
- Delivery lead  
- Implementation team  

## What it produces  
- Architecture recommendation with assumptions, evidence, options, trade-offs, confidence, and open questions  
- Bounded ADRs with context, decision, rejected options, consequences, acceptance criteria, and review owner  
- Implementation and decomposition guidance with staged sequence, dependency handling, test strategy, and rollback points  
- Risk register with mitigations, residual risk, verification evidence, escalation points, and owner recommendations  
- Quality or safety review note with pass, hold, or corrective-action recommendation and evidence basis  
- Control or incident summary covering architecture impact, recurring defect signal, nonconformance, and prevention actions  
- Orchestrator return or adjacent-specialist handoff package with missing facts and safe residual guidance  

## Risks and mitigations  
- Does not approve production release or own platform operations — relies on explicit user confirmation for governance boundaries  
- Does not replace human architecture governance authority — provides recommendations and evidence for review  
- Does not provide legal or contractual signoff — outputs are advisory and require human validation  

## Validation  
- 20 evaluation scenarios, pass rate 1  
- Source coverage includes The Open Group, ISO, IEC, IEEE, and SEI architecture standards  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Requirements, constraints, and quality attributes  
  - Existing diagrams, ADRs, and implementation context  
  - Tenant delivery obligations  
  - Identified risks or incidents for analysis  
- What is explicitly out of scope  
  - Approval of production release  
  - Ownership of platform operations  
  - Legal or contractual signoff  
  - Replacement of human architecture governance authority

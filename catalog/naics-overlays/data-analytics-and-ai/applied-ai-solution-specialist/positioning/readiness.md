# Specialist Overview  
The Applied AI solution specialist focuses on designing and reviewing practical AI workflows for business applications, using established solution patterns and risk-aware design principles. It translates concrete use cases into structured, evidence-backed AI solutions with evaluation plans, guardrails, and fallback behaviors, while staying within a narrow scope of applied-AI design and review.

## Who uses this  
- Solution architect  
- Data and AI lead  
- Application owner  
- Technical reviewer  
- Delivery lead  

## What it produces  
- Applied-AI solution recommendation with explicit assumptions and trade-offs  
- Guardrail and fallback design note tied to concrete failure modes  
- Evaluation plan with scenario coverage and pass-fail criteria  
- Troubleshooting or remediation memo for observed solution issues  
- Clear refusal and orchestrator handoff for adjacent-specialty requests  

## Risks and mitigations  
The specialist refuses to work on high-stakes domains such as medical, financial, legal, or safety-critical systems when the use case lacks explicit domain expertise, risk controls, or validation frameworks. It also refuses to design or review AI solutions where the failure modes could result in direct harm without additional oversight.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Microsoft Learn, Amazon Web Services, and AWS Prescriptive Guidance  
- Human verification and functional audit completed  

## Limitations  
- The user or organization must supply a clearly defined use case, expected outcomes, and risk context before the specialist can proceed  
- The user must provide access to relevant domain knowledge, data access patterns, and existing system constraints  
- What is explicitly out of scope:  
  - Enterprise AI strategy, roadmap, or business-case development  
  - Custom model training, fine-tuning pipelines, or deployment operations  
  - AI policy, legal interpretation, or compliance control frameworks  
  - Deep retrieval-platform implementation or knowledge-graph architecture  
  - General software implementation, cloud infrastructure, or security operations unrelated to the AI solution boundary

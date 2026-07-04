# Specialist Overview  
The AI governance specialist focuses on creating and maintaining trustworthy AI systems by classifying use cases, designing lifecycle controls, and recommending governance workflows. This specialist ensures AI systems are governed with clear evidence, risk-tiering, and regulatory alignment, while staying within the boundaries of AI-specific oversight.

## Who uses this  
- AI governance lead  
- Model risk manager  
- Responsible AI program owner  
- AI product reviewer  
- Compliance and assurance reviewer  

## What it produces  
- AI governance recommendation memo with explicit boundary, assumptions, and evidence basis  
- Risk-tiering or approval workflow design with control mappings and ownership  
- Governance evidence gap register with prioritized remediation and escalation checkpoints  
- Boundary-safe refusal or orchestrator handoff note  
- Shared-meta-agent request contract and fallback decision statement where applicable  

## Risks and mitigations  
- The specialist refuses to provide final legal or regulatory interpretations and mandates human review for binding determinations.  
- It avoids hands-on model-building or deployment to maintain focus on governance and risk control.  
- It explicitly documents when evidence is insufficient and requires escalation or further review.  

## Validation  
- 12 evaluation scenarios, pass rate 1.0  
- Source coverage includes National Institute of Standards and Technology (NIST), OECD, and EUR-Lex  
- Human verification and functional audit completed  

## Limitations  
### What the user or organization must supply before this specialist can work reliably  
- A defined AI use case or system description  
- Existing governance or risk documentation (if available)  
- Regulatory or compliance context for the deployment jurisdiction  
- Evidence of prior control implementation, if applicable  

### What is explicitly out of scope  
- Performing hands-on model training, prompt engineering, or model deployment  
- Owning enterprise data governance programs or access governance implementation  
- Producing final legal, privacy, or regulatory opinions  
- Owning product strategy, pricing, or packaging planning  
- Performing unrelated infrastructure or general software engineering tasks

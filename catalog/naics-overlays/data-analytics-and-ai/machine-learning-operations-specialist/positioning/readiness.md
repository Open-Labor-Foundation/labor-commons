# Specialist Overview  
The machine learning operations specialist focuses on operationalizing machine learning systems by designing and reviewing ML delivery pipelines, defining promotion and release controls, troubleshooting operational failures, and specifying observability and governance requirements. This specialist ensures ML systems can be safely and reliably operated after development.

## Who uses this  
- ML engineer  
- ML platform engineer  
- Data scientist with deployment responsibility  
- AI operations reviewer  
- Reviewer  

## What it produces  
- MLOps architecture or runbook with explicit assumptions and release controls  
- Promotion, deployment, and rollback decision record  
- Monitoring and governance checklist tied to ML operational risks  
- Incident triage plan with evidence gaps and escalation points  
- Clear rejection or low-confidence escalation memo  

## Risks and mitigations  
- Rejects high-stakes requests involving model research, legal interpretation, regulatory certification, or standalone governance-policy authorship  
- Mitigates risk by escalating low-confidence scenarios and explicitly stating assumptions in all deliverables  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage from Microsoft Learn and Amazon Web Services  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Existing ML system or deployment context with clear operational goals  
  - Defined scope of ML system boundaries and dependencies  
  - Access to ML platform infrastructure and monitoring tools  

- What is explicitly out of scope:  
  - Model research, algorithm selection, hyperparameter optimization strategy, or feature-engineering design beyond operational impact  
  - General software engineering, application feature delivery, API implementation, or frontend/backend product work outside ML release plumbing  
  - Broad data-engineering redesign, warehouse modeling, BI/reporting implementation, or database administration  
  - Unrelated infrastructure specialties such as Kubernetes platform administration, networking, landing zones, or security architecture  
  - Product strategy, pricing, commercialization strategy, or procurement decisions  
  - Legal interpretation, regulatory certification, or standalone governance-policy authorship

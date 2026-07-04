# Specialist Overview  
The API design specialist focuses on defining and reviewing API contracts as the primary artifact, ensuring consistency, backward compatibility, and operational security. It works on resource modeling, versioning strategies, compatibility notes, error handling, and contract guardrails, while avoiding ownership of infrastructure, frontend, or legal decisions.

## Who uses this  
- API architect  
- Backend engineer  
- Integration engineer  
- Technical lead  
- Contract reviewer  
- Quality or security reviewer  

## What it produces  
- API surface boundary map and path-by-path design  
- OpenAPI-first specification recommendations with explicit versioning notes  
- Contract review report with breakage risk and rollback plan  
- Guardrail list for low-confidence areas and escalation items  
- Review or inspection summary  
- Evidence checklist  
- Follow-up or remediation note  
- Boundary-safe refusal or orchestrator return package  

## Validation  
- 16 evaluation scenarios, pass rate 1  
- Source coverage includes OpenAPI Initiative, Internet Engineering Task Force  
- Human verification and functional audit completed  

## Limitations  
- Requires existing API requirements or context before generating design or review artifacts  
- Requires clear boundary definitions between API contract and adjacent concerns (e.g., database schema, frontend logic)  
- Does not own infrastructure, cloud operations, legal interpretation, or final approval  
- Does not generate SDKs, Terraform, or Infrastructure-as-Code unless for contract automation examples only  
- Does not imply legal, editorial, compliance, or client-delivery approval authority

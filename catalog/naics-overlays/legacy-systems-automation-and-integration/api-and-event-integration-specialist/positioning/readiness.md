# Specialist Overview  
The API and event integration specialist focuses on assessing, adapting, and modernizing legacy system interfaces through bounded HTTP APIs, event contracts, and messaging patterns. This specialist defines integration strategies, contract evolution, migration sequencing, and failure handling while clearly rejecting out-of-scope tasks.

## Who uses this  
- Integration engineer  
- Application modernization lead  
- Enterprise architect  
- API product owner  
- Operations reviewer  
- Reviewer  

## What it produces  
- Legacy API or event integration assessment with recommended pattern and assumptions  
- Contract and compatibility guidance for request, response, and event payload evolution  
- Migration and rollback plan for interface coexistence or event-enablement  
- Failure-mode review with actionable operational guardrails  
- Clear refusal and routing note for out-of-scope or low-confidence work  

## Risks and mitigations  
- **Risk**: Integration strategies may be misapplied to greenfield systems or misaligned with legacy constraints.  
  **Mitigation**: Explicitly reject non-legacy or non-integration tasks and route them to the appropriate specialist.  
- **Risk**: Misjudged retry or idempotency rules could cause data inconsistencies.  
  **Mitigation**: Require detailed interface documentation and failure mode analysis before making recommendations.  
- **Risk**: Misaligned event delivery guarantees may lead to operational outages.  
  **Mitigation**: Enforce contract validation and delivery semantics review before integration plan approval.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers authoritative sources from the OpenAPI Initiative, IETF, AsyncAPI Initiative, and Cloud Native Computing Foundation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Detailed legacy interface documentation  
  - Current-state constraints and operational goals  
  - Interface reliability and failure history  
- What is explicitly out of scope:  
  - Broad greenfield service decomposition or product feature design  
  - Middleware platform administration or cloud infrastructure design  
  - File-transfer, EDI mapping, or RPA workflow implementation  
  - Batch scheduler design or enterprise job orchestration  
  - Security architecture, legal review, procurement, or pricing and packaging work

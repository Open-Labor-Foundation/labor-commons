# Specialist Overview  
A content platform moderation specialist runs operational workflows for user-generated content, account actions, and policy enforcement. They ensure that moderation decisions are traceable, policy-compliant, and supported by evidence, while routing complex or high-risk cases to the correct specialists.

## Who uses this  
- Trust and safety operations teams  
- Content moderation queue leads  
- Platform operations and delivery managers  
- Quality assurance reviewers  
- Policy operations and appeal-support teams  

## What it produces  
- Moderation execution status update with lifecycle state, policy basis, evidence references, blocker, owner, and next action  
- Content or account disposition support record showing what was reviewed, what action is recommended or completed within scope, and which evidence supports closure  
- Exception queue note for missing evidence, unsupported completion, policy conflict, system dependency, urgent harm signal, confidentiality conflict, or approval gap  
- System incident or service summary with moderation impact, affected workflow, owner, mitigation, and follow-up evidence  
- Change-readiness or integration-risk escalation note with testing, rollback, approval, reviewer, and dependency gaps  
- Adjacent-lane routing note for legal, editorial, policy, security, engineering, law-enforcement-response, quality, delivery, or account-owner action  

## Risks and mitigations  
- **Risk**: Incomplete or incorrect moderation decisions due to missing evidence or unclear policy.  
  **Mitigation**: Refuse to proceed without required documentation and route to the appropriate specialist for clarification.  
- **Risk**: Misclassification of content or account cases, leading to escalation or compliance issues.  
  **Mitigation**: Use documented policy versions and validate all inputs before progressing a case.  
- **Risk**: Unauthorized disclosure of confidential information during moderation or appeal handling.  
  **Mitigation**: Follow tenant confidentiality controls and avoid exposing user or reporter data unless explicitly permitted.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Coverage includes content moderation, account states, policy enforcement, appeals, and system dependencies under EU and U.S. legal frameworks  
- Human verification and functional audit completed  

## Limitations  
- **Must be provided**: Content IDs, URLs, account IDs, policy version, enforcement history, appeal state, reviewer notes, and approved retrieval hooks  
- **Out of scope**:  
  - Legal determinations of illegality, copyright validity, statutory compliance, or regulatory signoff  
  - Final editorial judgment or platform policy creation  
  - Security engineering, model tuning, or production change approval  
  - Suppressing evidence, bypassing review, or marking work complete without required documentation

# Specialist Overview  
The infrastructure as code specialist provides guidance for managing cloud infrastructure through repeatable, governed IaC patterns. They focus on translating infrastructure intent into structured IaC definitions, rollout strategies, and troubleshooting plans for cloud platforms and Kubernetes, ensuring consistency, visibility, and controlled change across environments.

## Who uses this  
- Platform engineers  
- Cloud infrastructure engineers  
- Site reliability engineers  
- Cloud operations engineers  
- IT architects  
- Technical reviewers  

## What it produces  
- Review-ready IaC guidance with guardrails and assumptions  
- Failure-mode response recommendations and rollback strategies  
- Operational playbooks for state, drift, and policy enforcement  
- Commercialization fit/gaps assessment for IaC service offerings  
- Evidence, source, assumptions, confidence, and missing-facts register  
- Out-of-scope refusal or routing note to adjacent specialists  

## Risks and mitigations  
- **Risk:** Providing guidance without clear ownership or authority could lead to incomplete or unsafe infrastructure changes.  
- **Mitigation:** The specialist refuses to proceed or routes the request to an appropriate specialist or human reviewer when ownership or authority is unclear.  

## Validation  
- 18 evaluation scenarios, pass rate 1.0  
- Covers HashiCorp Developer, Amazon Web Services, and core IaC lifecycle concepts  
- Human verification and functional audit completed  

## Limitations  
- Requires clear infrastructure intent and ownership boundaries before reliable output  
- Requires source evidence, approved change scope, and defined tenant context  
- Does not handle application code, network design, identity governance, legal, compliance, or production execution  
- Does not manage live credentialed execution, secret handling, or risk acceptance decisions

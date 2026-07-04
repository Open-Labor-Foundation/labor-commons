# Specialist Overview  
The E-commerce platform specialist provides guidance for administering, configuring, and operating enterprise commerce platforms such as Shopify, Adobe Commerce, BigCommerce, and commercetools. It focuses on platform-specific decisions related to governance, integration, release planning, troubleshooting, and operational controls, while rejecting work outside its defined scope.

## Who uses this  
- Commerce platform owner  
- Digital commerce operations lead  
- Enterprise applications administrator  
- Solution architect reviewer  
- Release manager  
- Systems integrator  

## What it produces  
- Commerce platform action plan with assumptions, sequencing, validation gates, and rollback path  
- Platform-scoped workflow, configuration, integration, or governance review memo  
- Release and operational readiness review with risk statements and escalation points  
- Boundary-safe refusal or orchestrator handoff note for adjacent specialties  
- Evidence-ready notes aligned to the repository validated delivery contract  

## Risks and mitigations  
- **Risk**: Providing guidance on e-commerce platform configuration without clear rollback or validation could lead to operational outages or misconfigured workflows.  
  **Mitigation**: All recommendations include explicit rollback paths, validation gates, and risk statements. Escalation points are clearly defined for unclear or cross-specialty requests.  
- **Risk**: Accepting out-of-scope tasks could lead to incomplete or incorrect guidance.  
  **Mitigation**: The specialist explicitly rejects work outside its defined boundaries and routes it back to the orchestrator with named specialty targets.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers core administration, configuration, integration, and operational guidance for enterprise commerce platforms  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Specific commerce platform in use (e.g., Shopify, Adobe Commerce)  
  - Relevant configuration details or proposed changes  
  - Scope confirmation that the task is strictly platform-scoped  
  - Access to platform documentation or configuration artifacts  

- What is explicitly out of scope:  
  - Building custom storefront code, middleware, checkout extensions, themes, or CI/CD pipelines  
  - Owning digital marketing strategy, campaign execution, SEO content production, or merchandising policy beyond platform mechanics  
  - Owning ERP, CRM, inventory system, WMS, OMS, or payment processor contracting (except for commerce-platform-side configuration and handoff implications)  
  - Owning cloud landing zones, networking, identity platforms, endpoint fleets, databases, or unrelated infrastructure operations  
  - Providing legal, tax, PCI certification, or contractual signoff; policy-sensitive decisions must be escalated to approved human owners

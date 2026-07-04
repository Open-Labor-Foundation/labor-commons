# Specialist Overview  
The mobile application engineering specialist provides evidence-backed guidance for native and managed cross-platform mobile application development on iOS/iPadOS and Android. It supports architecture, implementation, testing, release, and operational readiness decisions for mobile clients, while staying within defined boundaries of authority.

## Who uses this  
- Mobile engineer  
- Mobile technical lead  
- Engineering manager  
- Quality engineer  
- Release lead  
- Delivery lead  
- Technical reviewer  

## What it produces  
- Platform-specific implementation plan with assumptions, tenant evidence, module boundaries, risk, sequencing, tests, rollout, and owner handoffs  
- Test strategy and troubleshooting playbook with device and OS matrix, reproduction evidence, commands or checks, pass/fail criteria, and rollback triggers  
- Compliance- and policy-mapped release gates with App Store, Google Play, privacy, permissions, signing, telemetry, support, and approval caveats  
- Maintainability and quality review report with severity, evidence, user impact, remediation, migration order, and residual risk  
- Schedule or allocation recommendation with planning horizon, demand frame, capacity constraints, priority rule, dependency order, and approval-required tradeoffs  
- Constraint log naming evidence gaps, store-policy blockers, device or OS constraints, client commitments, confidentiality restrictions, and downstream impacts  
- Out-of-scope routing recommendation with boundary reason, adjacent owner, missing facts, and safe mobile-client residual guidance  
- Low-confidence escalation note with blocked decision list, minimum evidence request, and no unsupported release or policy conclusions  

## Risks and mitigations  
- High-stakes decisions (e.g., final store approvals, legal interpretations, financial authority, or safety-critical operations) are explicitly returned to the orchestrator  
- Mitigation: The specialist refuses to produce outputs where it lacks sufficient evidence or where the task falls outside its defined scope  
- Mitigation: All recommendations include a constraint log and risk register to surface unaddressed dependencies or policy barriers  

## Validation  
- 24 evaluation scenarios, pass rate 1  
- Guidance is grounded in authoritative sources including IEEE Computer Society, ISO, IEC, IEEE, U.S. GAO, and GOV.UK Service Manual  
- Human verification and functional audit completed  

## Limitations  
- Requires accurate and complete tenant stack facts, including platform, framework, and dependency versions  
- Requires current store-policy and regulatory context for release readiness checks  
- Requires access to the current codebase, build configuration, and deployment pipeline artifacts for detailed recommendations  
- Does not own product strategy, backend service ownership, cloud or IAM operations, commercial negotiation, legal interpretation, app store final approval, contractual signoff, or privileged deployment execution  
- Does not provide licensed advice or legal interpretations for compliance, data protection, or user privacy law  
- Does not make final budget, staffing, release, or operational approvals

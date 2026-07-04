# Specialist Overview
The Code Review and Maintainability Specialist ensures software delivery work is reviewed for long-term code quality, reliability, and maintainability. It provides structured, evidence-backed review outputs with clear remediation guidance, risk assessment, and escalation paths.

## Who uses this
- Software engineer  
- Code reviewer  
- Tech lead  
- Maintainer  
- Quality engineer  
- Engineering manager  

## What it produces
- Structured review with findings, severity, confidence, evidence, and concrete remediation  
- Prioritized action list with sequencing, owners, assumptions, and residual risks  
- Low-confidence escalation with explicit missing evidence and required follow-up  
- Out-of-scope refusal with boundary rationale and re-routing instructions  
- Quality or safety review note  
- Control or incident summary  
- Corrective-action escalation  

## Risks and mitigations
- **Risk**: Providing review guidance without sufficient evidence or context could lead to incomplete or incorrect decisions.  
  **Mitigation**: The specialist explicitly refuses to proceed without sufficient source material and escalates low-confidence cases with required follow-up.  
- **Risk**: Misinterpreting code maintainability risks could lead to poor long-term software health.  
  **Mitigation**: The specialist relies on structured evaluation of testability, complexity, naming, and error handling, with clear severity and confidence ratings in all findings.  
- **Risk**: Failing to escalate findings that require human judgment or legal/operational input.  
  **Mitigation**: The specialist routes work to adjacent specialists or human reviewers when ownership shifts or when out-of-scope.  

## Validation
- 18 evaluation scenarios, pass rate 1  
- Source coverage: GitHub  
- Human verification and functional audit completed  

## Limitations
- **What the user or organization must supply before this specialist can work reliably**  
  - Access to the code diff, pull request, or merge request  
  - Test results and CI pipeline status  
  - Relevant defect history and prior review records  
  - Context about architectural constraints or platform limitations  
  - Definitions of quality gates or review checklists  

- **What is explicitly out of scope**  
  - Designing cloud, network, identity, runtime platform, or infrastructure architecture  
  - Owning legal or commercial strategy, pricing, contracts, procurement, GTM, product roadmap, or executive portfolio decisions  
  - Running production operations, incident response command, direct capacity planning, environment provisioning, runner operations, or deployment execution  
  - Performing full vulnerability penetration testing, threat hunting, security policy enforcement, secrets governance, or security risk acceptance  
  - Implementing application code, owning remediation code, rewriting product architecture, or mutating tenant repositories unless explicitly routed to an implementation specialist  
  - Bypassing hold, release, safety, change, incident, review, confidentiality, retention, approval, branch-protection, code-owner, or quality-control boundaries without explicit authority  
  - Implying legal, editorial, contractual, compliance, attestation, security risk-acceptance, release, or final review approval authority without explicit scope  
  - Closing a defect, finding, nonconformance, incident, quality hold, merge gate, or corrective action when evidence, reviewer support, or approval records are missing or contradictory  
  - Disclosing tenant, client, customer, source, test, defect, vulnerability, incident, credential, production, contractual, or quality evidence records to unapproved recipients or channels

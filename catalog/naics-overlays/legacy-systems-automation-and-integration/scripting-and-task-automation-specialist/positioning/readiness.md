# Specialist Overview  
The Scripting and Task Automation specialist focuses on creating, reviewing, and troubleshooting task scripts that automate repetitive operational steps around legacy applications, hybrid integration touchpoints, and platform-native jobs. This includes improving script safety, ensuring reliable execution, and providing clear guidance for operators, while explicitly avoiding ownership of broader platforms or transformation programs.

## Who uses this  
- Platform engineer  
- Operations engineer  
- Legacy modernization engineer  
- Integration maintainer  
- Technical reviewer  

## What it produces  
- Script automation design note with assumptions, guardrails, and failure-mode handling  
- Script review or troubleshooting memo with root-cause hypotheses, validation checks, and safe next steps  
- Operator-ready script skeleton or pseudocode with logging, parameter, and rollback considerations  
- Migration-risk prioritization note for manual-task automation debt  
- Boundary-safe refusal or low-confidence escalation note  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers authoritative sources from Microsoft Learn and Python Software Foundation  
- Human verification and functional audit completed  

## Limitations  
### What the user or organization must supply  
- Access to the script or task being reviewed  
- Context about the environment, including scheduler context, permissions, and runtime assumptions  
- Existing runbooks or documentation, if available  

### What is explicitly out of scope  
- Enterprise scheduler selection or job-scheduling platform administration  
- COBOL, JCL, or mainframe application remediation  
- File-transfer protocol implementation or EDI mapping  
- Middleware, messaging, API, or event-driven integration architecture  
- Robotic process automation workflow design or bot implementation  
- Broad modernization-roadmap creation or greenfield software engineering  

## Risks and mitigations  
- **Risk**: Scripts may fail in production due to missing environment assumptions or permissions.  
  **Mitigation**: Specialist explicitly states when confidence is low and escalates instead of guessing. Outputs include clear failure-mode handling and guardrails.  
- **Risk**: Misjudging the boundary between task automation and broader integration responsibilities.  
  **Mitigation**: Specialist rejects adjacent specialties and routes them to the correct specialist, ensuring no overreach into out-of-scope domains.

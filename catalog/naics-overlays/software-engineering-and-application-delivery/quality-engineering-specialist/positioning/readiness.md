# Specialist Overview  
The quality engineering specialist ensures software delivery quality by creating quality plans, test strategies, defect triage, and release-readiness evidence. It supports measurable quality assurance without overstepping its authority, and it escalates when boundaries are unclear or decisions require human or organizational ownership.

## Who uses this  
- Quality engineer  
- Software engineer  
- Test lead  
- Reviewer  
- Release lead  
- Engineering manager  

## What it produces  
- Quality plan with risk-ranked checks and evidence requirements  
- Review memo with actionable fixes and owners  
- Test matrix or quality gate recommendation  
- Release readiness recommendation with assumptions and escalation points  
- Quality or safety review note  
- Control or incident summary  
- Corrective-action escalation  
- Boundary-safe refusal or orchestrator return note  

## Risks and mitigations  
- **Defect risk assessment errors:** Mitigated by cross-checking with historical defect data and risk-ranked prioritization.  
- **Escalation gaps:** Mitigated by flagging missing or conflicting evidence and refusing to proceed without clear authority.  
- **Overstatement of authority:** Mitigated by strict adherence to defined scope and explicit refusal of out-of-bound requests.  
- **Quality gate misjudgment:** Mitigated by aligning gate criteria with CI/CD best practices and requiring human review for final decisions.  

## Validation  
- 16 evaluation scenarios, pass rate 1  
- Based on standards from ISTQB, TMMi, ISO/IEC, and NIST  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply:**  
  - Requirements and acceptance criteria  
  - Source code or change details  
  - Test evidence and defect history  
  - Release constraints and quality gate rules  
  - Organizational policies and escalation paths  

- **What is explicitly out of scope:**  
  - Infrastructure build-out, environment provisioning, and platform operations execution  
  - Incident response command, IAM changes, network operations, or cloud cost optimization  
  - Product strategy, GTM strategy, executive roadmap planning, or staffing decisions  
  - Deep cyber threat hunting, cloud architecture, or vulnerability management  
  - Data privacy legal interpretation, contractual liability, compliance-only policy decisions, or legal advice  
  - Final QA approval, release authority, or attestation of compliance  
  - Closing defects, incidents, or corrective actions without full evidence or approval records

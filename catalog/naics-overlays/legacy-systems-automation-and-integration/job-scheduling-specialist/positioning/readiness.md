# Specialist Overview  
The job scheduling specialist provides expert guidance on enterprise job scheduling and workload automation for legacy and hybrid environments. They focus on ensuring safe, auditable, and efficient scheduling practices through structured design, migration planning, and failure recovery strategies.  

## Who uses this  
- Batch operations lead  
- Legacy modernization engineer  
- Scheduler administrator  
- Integration architect  
- Operations reviewer  

## What it produces  
- Scheduler design note with assumptions, tradeoffs, and authority-backed recommendations  
- Cutover, coexistence, or rollback plan for scheduler changes  
- Failure triage and recovery playbook for scheduler-managed workloads  
- Boundary-safe rejection or orchestrator escalation statement  
- Evidence-linked readiness and deployment notes for a narrow scheduler specialist  

## Risks and mitigations  
- When a request involves legal, compliance, or procurement decisions, the specialist must refuse and route to the appropriate domain.  
- For scheduler-related safety-critical operations, the specialist applies conservative fallback behavior and defers to human verification.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes IBM, HCL Software, BMC Software, and other authoritative scheduler documentation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Clear scope limited to scheduler-controlled jobs  
  - Defined boundaries separating scheduling from application logic and integration design  
  - Access to authoritative scheduler documentation and system configurations  

- What is explicitly out of scope:  
  - Batch application implementation or legacy-code refactoring  
  - File transfer, EDI mapping, or managed file transfer workflow design (unless scheduler dependency behavior is the focus)  
  - Middleware integration, API and event integration, or enterprise service bus design  
  - Broad scripting and task automation requests  
  - Platform operations, cloud scheduler service administration, or infrastructure hardening outside the scheduler control plane  
  - Legal, procurement, licensing, or compliance determinations

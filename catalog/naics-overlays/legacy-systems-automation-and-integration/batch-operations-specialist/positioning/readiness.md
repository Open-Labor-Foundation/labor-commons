# Specialist Overview
The Batch operations specialist focuses on managing and improving the execution, recovery, and evolution of existing scheduled and event-triggered batch workloads in legacy and mainframe environments. It provides operational clarity, runbook guidance, and modernization guardrails without stepping into scheduler design, application logic, or integration architecture.

## Who uses this
- Mainframe operations analyst  
- Batch operations engineer  
- Legacy platform support lead  
- Modernization delivery reviewer  

## What it produces
- Batch operations assessment with assumptions, risks, and next actions  
- Restart or rerun plan with rollback and data-safety guardrails  
- Operator runbook or troubleshooting checklist  
- Boundary-safe rejection or escalation note  
- Source-cited modernization or operational decision record  

## Risks and mitigations
- Rejects or escalates work that falls outside its scope to prevent incorrect or incomplete advice.  
- Mitigates risk of misdiagnosis by explicitly stating confidence limits and assumptions in all outputs.  
- Avoids making recommendations that could compromise batch recovery or rerun safety by grounding guidance in evidence and operational constraints.  

## Validation
- 12 evaluation scenarios, pass rate 1  
- Source coverage: 15 — IBM, IBM, IBM, IBM  
- Human verification and functional audit completed  

## Limitations
- Requires clear, complete input artifacts (e.g., JCL, control scripts, error logs, batch windows) to provide accurate assessments.  
- Requires context about existing batch dependencies and system boundaries to avoid misaligned recommendations.  
- Requires operational definitions of acceptable risk, cutoff times, and recovery windows to tailor guidance.  

- Out of scope: Enterprise scheduler design, platform administration, or workload balancing  
- Out of scope: COBOL logic, CICS or IMS internals, or source-code refactoring  
- Out of scope: File-transfer protocols, EDI standards, or partner connectivity  
- Out of scope: Middleware topology, MQ, or ESB issues  
- Out of scope: API design, event contracts, or webhooks  
- Out of scope: Greenfield scripting or automation unrelated to existing batch workloads  
- Out of scope: Portfolio-level modernization planning or RPA/UI automation

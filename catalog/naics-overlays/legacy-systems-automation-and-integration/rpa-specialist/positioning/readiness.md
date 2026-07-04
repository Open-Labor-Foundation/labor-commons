# Specialist Overview  
The RPA specialist focuses on evaluating, designing, and troubleshooting robotic process automation for legacy and difficult-to-integrate applications, ensuring automation is safe, maintainable, and aligned with constraints where API-first approaches are not viable.

## Who uses this  
- Automation lead  
- RPA developer  
- Legacy application owner  
- Operations reviewer  
- COE manager  

## What it produces  
- RPA suitability or architecture recommendation with explicit assumptions and risk ranking  
- Selector, retry, runtime, and exception-handling guidance tied to platform behavior  
- Boundary-safe refusal or orchestrator handoff when the request belongs to an adjacent specialty  
- Migration-risk memo describing whether to harden, contain, retire, or replace an existing bot  
- Shared-meta-agent request contract and fallback decision record where applicable  

## Risks and mitigations  
- High-stakes failure scenarios such as locked sessions, pop-up interference, or partial task completion are explicitly flagged for escalation or containment.  
- Recommendations avoid deployment in safety-critical or compliance-sensitive operations unless explicitly requested and validated by a human reviewer.  
- All outputs include risk-ranking and boundary-safe handoffs to prevent unintended deployment or misalignment.  

## Validation  
- 12 evaluation scenarios, pass rate 1.0  
- Source coverage includes UiPath and Microsoft Learn documentation, with emphasis on legacy UI automation challenges and platform behavior  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Clear process evidence or task flow for automation  
  - Platform-specific constraints (e.g., desktop, web, terminal, or packaged app)  
  - Known UI or system behaviors (e.g., pop-up frequency, session locks, resolution drift)  
  - Existing automation status (e.g., attended/unattended, legacy bot details)  

- What is explicitly out of scope:  
  - Broad low-code workflow implementation or BPM redesign  
  - API, event, middleware, or file-transfer integration design for system-to-system solutions  
  - Enterprise job scheduler architecture or batch platform administration  
  - Greenfield software development or application rewriting  
  - Execution of production bot runs, credential changes, or privileged tenant actions  
  - Legal, procurement, workforce-reduction, or formal compliance attestation statements

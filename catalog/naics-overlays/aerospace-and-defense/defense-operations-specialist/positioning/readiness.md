# Specialist Overview  
The defense operations specialist manages day-to-day defense production and materiel workflows by using authoritative records and systems of truth to evaluate whether work can proceed, be held, require rework, or be marked complete. It ensures operational readiness, traceability, and compliance without overstepping into approval, quality, engineering, or regulatory authority.

## Who uses this  
- Defense-operations-manager  
- Program-operations-lead  
- Production-supervisor  
- Materiel-management-coordinator  
- Mission-support-operations-reviewer  
- Government-property-coordinator  
- Quality-or-contract-surveillance-reviewer  
- Operations-control-tower-reviewer  

## What it produces  
- Execution-status-update  
- Completion-or-fulfillment-record  
- Exception-summary  
- Operational-readiness-summary  
- Escalation-note  
- Traceability-conflict-summary  
- Adjacent-specialist-routing-note  
- Mission-impact-blocker-note  

## Risks and mitigations  
- When traceability, quality hold, or release conditions change materially, the specialist refuses or returns the work to the orchestrator to prevent unapproved advancement.  
- When counterfeit-risk signals, source-of-supply restrictions, or government-furnished-property dependencies are not met, the specialist blocks or routes the work to the correct authority.  
- When IUID or receiving-report evidence is incomplete or conflicting, the specialist does not mark work as complete and documents the missing information.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Covers public defense acquisition, property accountability, and operations guidance from DCMA and Acquisition.gov  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Valid production order or CLIN context  
  - Current IUID, serial, or batch records  
  - Inventory state and property-accountability records  
  - Quality hold or release status  
  - Contract line-item or rated-order constraints  
  - Receiving report or WAWF evidence  
  - Source inspection or PDREP-style surveillance records  
  - Government-furnished property (GFP) or GFE status  
- **What is explicitly out of scope:**  
  - Approving engineering changes, deviations, or waivers  
  - Releasing held product or lifting quality holds  
  - Certifying safety-critical or mission-critical work  
  - Approving supplier substitutions or source changes  
  - Acting as contracting officer or property administrator  
  - Bypassing traceability, release, or hold controls  
  - Using generic workflow language in place of defense-specific terminology

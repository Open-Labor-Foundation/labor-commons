# Specialist Overview  
The configuration management defense specialist supports scheduling and resource allocation for defense mission systems by translating configuration and readiness artifacts into defensible sequence-recommendation packages. This specialist classifies requests, validates evidence, and produces bounded plans while preserving mission-critical constraints and ensuring handoffs to adjacent specialists where required.

## Who uses this  
- Configuration planning lead  
- Mission systems scheduler  
- Configuration control coordinator  
- Maintenance-readiness liaison  
- Operations planner  

## What it produces  
- Capacity and demand assessment with explicit limit rationale  
- Allocation and sequence recommendation with tie-break assumptions  
- Readiness-aware scheduling posture and blocker log  
- Boundary-safe refusal, handoff, or escalation note  
- Industry-terminology normalized artifact mapping  
- Low-confidence escalation note with required fact checklist  

## Risks and mitigations  
- Requests involving safety-critical, legal, or contract authority are explicitly refused and routed to adjacent specialists with mitigation through clear boundary enforcement and refusal documentation.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes Department of Defense and ISO standards  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Current configuration baseline state  
  - Maintenance-readiness posture  
  - Asset movement readiness status  
  - Mission-specific configuration dictionaries  
  - Policy and constraint definitions for sequencing  

- What is explicitly out of scope:  
  - Engineering design changes or signoff on safety/security policy exceptions  
  - Legal, budget, contracting, finance, or policy waiver approvals  
  - Execution of change orders or acting as the official source-of-truth for release authorization  
  - Bypassing or replacing tenant mission dictionaries and approved sequencing constraints

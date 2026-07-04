# COBOL and mainframe specialist  
A specialist focused on COBOL and IBM Z mainframe application guidance, particularly in understanding, reviewing, modernizing, or troubleshooting existing COBOL workloads and their dependencies on z/OS. This role supports analysis, design, implementation, review, troubleshooting, and artifact creation for COBOL programs, copybooks, CICS and IMS integration, Db2 usage, and modernization risk assessments.

## Who uses this  
- Mainframe application owner  
- COBOL engineer  
- Modernization lead  
- Enterprise architect reviewer  
- Operations lead  

## What it produces  
- COBOL and mainframe assessment with assumptions, subsystem impacts, risks, and recommended next steps  
- Modernization or upgrade plan with sequencing, validation points, and rollback guidance  
- Boundary-safe troubleshooting note with required evidence, likely causes, and escalation points  
- Explicit refusal or handoff note for adjacent specialties such as job scheduling, middleware administration, or broad cloud migration  
- Evidence-ready artifact set aligned to the repository validated delivery contract  

## Risks and mitigations  
This specialist explicitly refuses work that lacks sufficient source or environment evidence, and it will not proceed with tasks that could introduce uncontrolled risk to production systems. It avoids making assumptions beyond the provided evidence and escalates when the request crosses into adjacent specialties or lacks necessary information.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes IBM documentation and mainframe operational guides  
- Human verification and functional audit completed  

## Limitations  
### What the user or organization must supply:  
- Access to COBOL source code or detailed source descriptions  
- z/OS runtime and dependency context (e.g., CICS, IMS, Db2 for z/OS)  
- Current compiler and runtime versions  
- Known failure scenarios or symptoms to investigate  

### What is explicitly out of scope:  
- Broad cloud migration strategy  
- Greenfield application engineering  
- Full-platform modernization portfolio planning  
- z/OS system programming, LPAR design, storage, networking, or RACF administration  
- Enterprise batch scheduling, workload-automation configuration, or batch operations execution  
- Standalone middleware integration, MQ administration, ESB design, or enterprise API platform engineering  
- Pure Db2, IMS, or CICS administration when the task is subsystem operations rather than COBOL application behavior  
- Unreviewed production change execution or formal regulatory, legal, or vendor-support attestation

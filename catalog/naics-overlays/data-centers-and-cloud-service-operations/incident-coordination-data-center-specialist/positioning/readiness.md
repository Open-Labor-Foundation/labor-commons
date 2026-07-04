# Specialist Overview  
The Incident Coordination Data Center Specialist manages the workflow coordination of incidents in data center and cloud service operations. It ensures accurate routing, handoff integrity, dependency sequencing, and closure evidence across facility, cloud, network, and service teams, without executing remediation actions or claiming authority beyond coordination.

## Who uses this  
- Data center incident coordinator  
- Cloud operations lead  
- Facility operations coordinator  
- Service continuity owner  
- NOC and site reliability lead  

## What it produces  
- Dependency-tracker  
- Handoff-summary  
- Adjacent-lane-routing-note  
- Incident-routing-status  
- Blocker-and-closure-confirmation  
- Confidence-and-escalation-notification  

## Risks and mitigations  
- If the specialist identifies a legal, safety, or financial approval requirement, it will explicitly route the case to an adjacent specialist and retain coordination posture only.  
- If a situation involves safety-critical operations or direct execution of runbook actions, the specialist will escalate to an appropriate specialist instead of proceeding.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Census Bureau, Uptime Institute, ASHRAE, and National Institute of Standards and Technology  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Valid and up-to-date tenant records  
  - Clear incident context including infrastructure, cloud service, and operational dependencies  
  - Access to policy documents for cross-team handoff requirements  
  - Defined ownership boundaries and artifact requirements  

- What is explicitly out of scope  
  - Execution of runbook actions, rerouting traffic, failover/rollback, or vendor remediation commands  
  - Issuing legal, clinical, regulated financial, policy override, or safety-critical approvals  
  - Closing incidents without destination owner confirmation and required evidence artifacts  
  - Designing thermal/cooling hardware, financial contracts, or provider legal reporting statements as final decisions

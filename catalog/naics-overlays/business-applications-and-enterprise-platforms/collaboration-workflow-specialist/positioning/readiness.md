# Specialist Overview  
The collaboration workflow specialist provides guidance on configuring, governing, and troubleshooting native workflows within enterprise collaboration platforms such as Microsoft Teams with Power Automate, Slack, Jira, and Asana. This specialist focuses on workflow behavior patterns like request intake, approval routing, task handoff, and monitoring, and ensures that recommendations remain strictly within platform-native capabilities.

## Who uses this  
- Enterprise application owner  
- Collaboration operations lead  
- Workflow administrator  
- Platform support lead  
- Reviewer  

## What it produces  
- Workflow review memo with bounded recommendations, assumptions, and validation steps  
- Governance note covering ownership, permissions, publication controls, and audit implications  
- Troubleshooting or release-readiness packet with rollback and escalation checkpoints  
- Boundary-safe refusal or partial handoff note for adjacent specialties  
- Evidence-ready artifact set aligned to the repository validated delivery contract  

## Risks and mitigations  
- Mitigation: Refuses to operate on workflows that involve high-stakes decisions such as financial approvals, legal signoffs, or safety-critical operations, and explicitly hands off to the appropriate specialist.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes four Microsoft Learn references focused on Teams and Power Automate  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply:  
  - A clearly scoped workflow configuration within a collaboration platform  
  - Access to platform documentation and configuration details  
  - Context on current workflow issues or desired behavior  
- What is explicitly out of scope:  
  - Building custom bots, integrations, or scripts  
  - General workplace platform administration or identity governance  
  - Document repository architecture or content migration  
  - Formal compliance, legal, procurement, or contract signoff  
  - Enterprise-wide low-code automation outside collaboration-native workflows

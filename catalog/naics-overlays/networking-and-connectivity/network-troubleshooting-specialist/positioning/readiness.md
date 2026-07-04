# Specialist Overview  
The network troubleshooting specialist focuses on diagnosing and resolving network connectivity issues by analyzing packet paths, network device behavior, and source-of-truth evidence. They produce auditable recommendations, validation steps, and evidence packets to guide network owners and operators in identifying and resolving root causes without claiming execution or final authority.

## Who uses this  
- Network engineers  
- Site reliability engineers  
- Platform and infrastructure operators  
- Incident triage leads  
- Change reviewers  

## What it produces  
- Triage decision with ranked root causes, confidence levels, and missing-fact register  
- Step-by-step validation and rollback sequence with prerequisites, stop conditions, and audit-trail notes  
- Design or configuration recommendations with blast-radius reasoning and source references  
- Record update note with affected systems, timestamps, status, owner, and retention posture  
- Document or evidence packet with topology, flow-log, packet-capture, monitoring, and policy attachments  
- Audit-trail or exception summary distinguishing recommendation from approval or legal signoff  
- Explicit out-of-scope handoff or orchestrator-return package with preserved network evidence  

## Risks and mitigations  
- Will not recommend or execute actions that require legal signoff, risk acceptance, or compliance attestation; instead, routes such concerns to the orchestrator.  
- Will not claim production execution authority or endpoint ownership, ensuring all actions remain advisory and evidence-based.  

## Validation  
- 21 evaluation scenarios, pass rate 1  
- Source coverage includes 15 Internet Engineering Task Force documents  
- Human verification and functional audit completed  

## Limitations  
- Requires user or organization to supply network topology, flow logs, packet captures, DNS/DHCP records, and device configuration evidence  
- Does not perform endpoint OS patching, device-driver repair, workstation administration, or endpoint-only break/fix work  
- Does not own identity governance, IAM policy, authentication architecture, or application code  
- Does not execute live production changes on firewalls, routers, load-balancers, or cloud networks  
- Does not provide legal, compliance, or contractual interpretation outside documented network evidence  
- Does not treat runbook updates or troubleshooting records as incident closure or compliance signoff

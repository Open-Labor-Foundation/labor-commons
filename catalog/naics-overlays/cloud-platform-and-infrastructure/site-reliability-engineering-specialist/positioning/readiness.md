# Specialist Overview  
The site reliability engineering specialist focuses on cloud and container infrastructure reliability, producing evidence-based recommendations and audit-ready artifacts to improve resilience, observability, and operability without claiming execution or approval authority.

## Who uses this  
- Site reliability engineers  
- Platform engineering leads  
- Cloud operations leads  
- Cloud architects  
- Incident review facilitators  
- Infrastructure change reviewers  

## What it produces  
- Reliability recommendations with rationale, source references, assumptions, and risk tradeoffs  
- Prioritized remediations with guardrails, prerequisites, validation gates, and rollback checkpoints  
- Runbook artifacts and escalation paths with signals, thresholds, and evidence capture  
- Decision memos with architecture options, RTO/RPO impacts, and cost/isolation tradeoffs  
- Record update notes with changed documents, owners, timestamps, and retention posture  
- Evidence packets with required attachments, source-of-truth references, and unresolved gaps  
- Audit-trail or exception summaries distinguishing recommendation from approval or attestation  
- Orchestrator-return packages when confidence, ownership, or policy precedence is insufficient  

## Risks and mitigations  
- Refuses to make final incident-command decisions, change approvals, or risk acceptance without authorized human ownership  
- Avoids acting as legal, procurement, or compliance advisor by routing these to appropriate specialists  
- Mitigates alert fatigue and signal noise by ensuring observability recommendations are evidence-backed and scoped to infrastructure  

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Covers Amazon Web Services, Microsoft Learn, Google Cloud, and Google documentation  
- Human verification and functional audit completed  

## Limitations  
- Requires existing infrastructure telemetry, runbook drafts, and change records to operate effectively  
- Cannot execute changes, approve production deployments, or resolve application-level issues  
- Cannot make security architecture decisions, vulnerability remediation plans, or legal judgments  
- Cannot act as a help-desk or support-desk resolver for end-user issues  
- Cannot provide provider-specific guarantees or preview feature behavior without current official source support

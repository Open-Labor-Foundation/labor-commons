# Specialist Overview  
The security risk assessment specialist produces evidence-backed cybersecurity risk assessments that identify, describe, rate, and prioritize security risks using tenant-supplied data, threat context, control evidence, and business impact thresholds. It generates actionable risk recommendations, risk registers, evidence matrices, and escalation packets for leadership and engineering owners.

## Who uses this  
- Security risk manager  
- Security governance lead  
- Security engineering lead  
- Product security lead  
- Cloud or platform owner  
- Risk owner  

## What it produces  
- Markdown risk assessment report with prioritized findings, assumptions, confidence tags, evidence IDs, and owner-ready recommendations  
- Evidence matrix with source records, source quality, control coverage, gap status, and confidence tags  
- Risk register or update packet with risk statements, likelihood, impact, inherent risk, residual risk, treatment options, owners, due dates, and review cadence  
- Residual-risk statement and recommendation backlog with compensating controls, validation checkpoints, expiry criteria, and unresolved decisions  
- Quality or safety review note, control or incident summary, corrective-action escalation, and hold or release recommendation  
- Escalation packet when confidence, scope, authority, source conflict, restricted evidence, or hold/release boundary is out-of-bounds  

## Risks and mitigations  
- Mitigation: Refuses to process requests that require legal, audit, incident-command, or architecture authority, and escalates to the orchestrator for review and routing.  
- Mitigation: Does not infer missing evidence, fabricate source support, or treat stale or conflicting records as resolved.  
- Mitigation: Requires tenant-supplied assets, source context, and documented authority to avoid misjudging risk or overstepping boundaries.  

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Source coverage includes National Institute of Standards and Technology (NIST) and tenant-specific policies, control frameworks, and systems of record  
- Human verification and functional audit completed  

## Limitations  
- Requires tenant-supplied assets, threat context, control evidence, vulnerability or incident summaries, and business impact thresholds to function reliably  
- Explicitly out of scope:  
  - Running, directing, or interpreting live exploit payloads or penetration tests  
  - Performing cyber incident containment, eradication, or forensic acquisition  
  - Issuing audit opinions, legal advice, or regulatory compliance determinations  
  - Redesigning architecture, implementing controls, or approving release gates  
  - Bypassing documented hold, release, safety, or approval boundaries without explicit tenant authority  
  - Fabricating evidence or marking findings closed without validation

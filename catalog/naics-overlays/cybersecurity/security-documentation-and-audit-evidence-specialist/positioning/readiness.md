# Specialist Overview  
The Security Documentation and Audit Evidence Specialist organizes and transforms security controls, policies, procedures, and evidence into structured, review-ready documentation packages. It supports audit readiness by mapping controls to evidence, identifying gaps, and preparing corrective action and escalation notes.

## Who uses this  
- Security documentation lead  
- GRC analyst  
- Security compliance manager  
- Audit-readiness coordinator  
- Control owner  
- Customer assurance analyst  
- Managed security service reviewer  
- Orchestrator  

## What it produces  
- Mapped evidence matrix with control references, artifact IDs, owners, dates, sufficiency status, and confidence notes  
- Gapped evidence list with severity-ranked remediation tasks, corrective-action owners, due state, blockers, and reviewer-ready rationale  
- Documented compliance-ready package recommendations with index, source lineage, assumptions, caveats, retention notes, and tenant-specific adaptation guidance  
- Quality or safety review note for evidence package hold, release-readiness, or unresolved finding posture  
- Control or incident summary that connects findings, repeat defects, incident records, nonconformances, and corrective actions to evidence expectations  
- Corrective-action escalation note with residual risk, owner, deadline, required proof, approval boundary, and orchestrator handoff target  
- Escalation notes for out-of-scope, low-confidence, conflicting-source, legal, formal-audit, penetration-testing, incident-response, architecture, or approval-authority requests  

## Risks and mitigations  
- **Risk:** Incorrect or incomplete control-to-evidence mapping could lead to audit findings or misrepresentation of compliance status.  
  **Mitigation:** The specialist requires verified source artifacts and applies boundary-safe checks to ensure alignment with control frameworks and tenant-specific policies.  
- **Risk:** Misjudgment of evidence sufficiency or remediation priority could delay audit readiness or increase risk exposure.  
  **Mitigation:** The specialist uses risk-ranking based on control impact, repeat defects, and regulatory expectations, and provides rationale for all findings and recommendations.  
- **Risk:** Improper escalation of issues could lead to unresolved risks or incorrect delegation.  
  **Mitigation:** The specialist includes explicit approval boundaries, required proof, and handoff targets in all escalation notes to ensure appropriate routing and resolution.  

## Validation  
- 20 evaluation scenarios, pass rate 1  
- Source coverage includes NIST CSF, NIST SP 800-53, NIST SP 800-171, CIS Controls, CISA CPGs, OWASP guidance, and AICPA Trust Services Criteria  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Validated source artifacts (evidence, logs, policies, tickets, review records)  
  - Defined control frameworks and mapping rules  
  - Tenant-specific documentation requirements and boundaries  
  - Evidence retention and confidentiality policies  
  - Access to control owners and remediation contacts  
- What is explicitly out of scope:  
  - Running penetration tests, exploit validation, scanning, attack simulation, payload development, or target probing  
  - Executing incident-response containment, eradication, recovery, live triage, forensic collection, chain-of-custody handling, notification decisions, or root-cause execution  
  - Issuing formal audit opinions, SOC or ISO attestations, certifications, statements of compliance, assessor signoff, regulator-facing legal conclusions, or management assertions  
  - Owning enterprise, product, cloud, identity, network, endpoint, application, OT, resilience, or data architecture decisions outside documentation and evidence workflow implications  
  - Bypassing documented hold, release, quality, safety, reviewer, retention, confidentiality, tenant-isolation, or approval-control boundaries  
  - Interpreting law, jurisdictional requirements, contract obligations, privacy rules, disclosure duties, regulator expectations, or customer commitments as a final authority  
  - Fabricating missing evidence, inferring absent records, suppressing conflicting artifacts, or converting self-attested claims into verified proof

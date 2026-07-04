# Incident response specialist  
Analyzes cybersecurity incidents using evidence and produces structured, advisory response plans and communication guidance for operational teams with incident ownership and execution authority.

## Who uses this  
- Security operations analyst  
- Incident response coordinator  
- Security engineering lead  
- Service owner  
- Risk or compliance liaison  
- Human incident commander  

## What it produces  
- Incident severity and impact assessment note with facts, assumptions, business impact, affected scope, confidence, and evidence references  
- Containment and recovery recommendation set with confidence flags, prerequisites, owner routing, sequencing, rollback concerns, and hold or release boundaries  
- Evidence requests and gap checklist for investigation, including missing telemetry, systems of record, retention risks, and chain-of-custody or forensic escalation needs  
- Escalation and communication brief with stakeholder map, communication readiness, legal/regulatory review flags, and unresolved authority blockers  
- Post-incident root-cause and control-gap hypotheses with recurrence signals, corrective-action owners, and explicit unresolved questions  
- Boundary-safe refusal or orchestrator return package with scope rationale, adjacent owner, and evidence context  

## Validation  
- 17 evaluation scenarios, pass rate 1  
- Source coverage includes NIST, CISA, and multiple NIST frameworks  
- Human verification and functional audit completed  

## Limitations  
- Requires incident records such as timelines, SIEM alerts, endpoint detections, network telemetry, identity events, affected asset lists, owner maps, ticket history, tenant incident policy, severity matrix, communication rules, and known control context  
- Cannot execute containment, eradication, recovery, scanning, exploitation, forensic acquisition, patching, privileged account changes, production configuration changes, public disclosures, legal notices, audit attestations, or incident-command authority  
- Out of scope:  
  - Vulnerability scans, exploitation, penetration tests, payload validation, adversary emulation, or exploit-chain testing  
  - Forensic tools, disk imaging, live memory collection, evidence alteration, or forensic examiner authority  
  - Live patching, host isolation, account disabling, credential rotation, firewall changes, infrastructure changes, restore operations, or privileged remediation  
  - Primary incident command, long-form incident communications, executive decisions, public relations, customer notification, or crisis management  
  - Legal advice, regulatory final language, breach-notification determinations, litigation positions, privilege claims, or formal audit attestations  
  - Clearing a production hold, releasing a quarantined system, closing a finding, or certifying recovery without documented approval evidence from the responsible owner  

## Risks and mitigations  
- Mitigates risk of unauthorized action by strictly enforcing advisory boundaries and requiring documented approval for high-stakes decisions such as system release or legal disclosure.  
- Avoids escalation to regulated or safety-critical functions by explicitly routing requests to legal, forensics, or compliance specialists when required.

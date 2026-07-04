# Specialist Overview  
The firewall and perimeter specialist provides implementation-focused guidance for secure network boundary design and troubleshooting, focusing on firewall rulebases, zone architecture, connectivity validation, and exception governance. The specialist ensures recommendations align with documented service objectives, risk rankings, and operational boundaries while avoiding direct production execution or unrelated domain work.

## Who uses this  
- Network-platform-engineer  
- Security-engineer  
- Firewall-policy-reviewer  
- Operations-reviewer  

## What it produces  
- Risk-ranked policy findings and remediation sequence  
- Boundary-aware recommendation set with assumptions and confidence statement  
- Actionable rule edit suggestions and validation checklist  
- Quality or safety review note with hold, release, or blocked recommendation  
- Control or incident summary with evidence references  
- Corrective-action escalation or adjacent-lane handoff decision with concise rationale  

## Risks and mitigations  
- Mitigates risk of misconfigured perimeter controls by grounding recommendations in rule semantics, trust boundaries, and default-deny design principles.  
- Avoids direct production execution and maintains clear boundaries with adjacent domains to prevent unintended escalation or conflict.  
- Escalates unresolved or high-risk findings to qualified governance or safety lanes when confidence thresholds are not met.  

## Validation  
- 20 evaluation scenarios, pass rate 1  
- Source coverage includes National Institute of Standards and Technology (17 references) and Cybersecurity and Infrastructure Security Agency  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably:**  
- Current firewall rulebase or perimeter control configuration  
- Documented service objectives and traffic intent  
- Operational boundaries and exception governance rules  
- Available telemetry or connectivity evidence (e.g., logs, packet traces, flow data)  

**What is explicitly out of scope:**  
- Endpoint management, hardening, malware removal, credential rotation, or software patching  
- Penetration testing, exploitation, forensics, incident containment, legal attestation, or regulator reporting  
- Cloud tenancy architecture, VPC/VNet routing, or identity platform design  
- DNS-only, DHCP-only, routing-only, load-balancing-only, or observability-only recommendations  
- Application remediation, WAF tuning, API design, or code changes unrelated to perimeter control  
- Direct production execution, CLI/API changes, emergency change approval, or hold clearance  
- Bypassing documented safety, quality, or governance boundaries without explicit tenant authority

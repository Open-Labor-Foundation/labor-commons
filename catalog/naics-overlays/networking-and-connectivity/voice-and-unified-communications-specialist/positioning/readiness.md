# Specialist Overview  
A Voice and Unified Communications Specialist focuses on the networking and connectivity aspects of voice and UC systems. They provide auditable, evidence-backed recommendations for SIP/SBC topology, signaling controls, media transport, DNS/DHCP assumptions, QoS, failover, call-quality incidents, and release gates, while avoiding ownership of endpoints, identity, applications, legal, procurement, or production-execution work.

## Who uses this  
- Network engineers  
- Telecom operations engineers  
- Unified communications engineers  
- Voice service owners  
- Network operations center (NOC) analysts  
- Quality and change reviewers for voice networking  

## What it produces  
- Network-ready communication design recommendations with topology, signaling, media, security, failover, assumptions, confidence, and source traceability  
- Prioritized remediation plans with risk, confidence, owner handoffs, validation checkpoints, and rollback gates  
- Explicit in-scope / out-of-scope decisions and orchestrator return packages when work crosses into adjacent domains  
- Troubleshooting packet-flow interpretations and next actions for call setup, one-way audio, jitter, loss, registration, discovery, and failover faults  
- Quality or safety review notes, control or incident summaries, hold/release recommendations, and corrective-action escalations  
- Deployment, rollback, tenant adaptation, materialization, and commercialization notes for validated packaging  

## Validation  
- 20 evaluation scenarios, pass rate 1  
- Source coverage from 19 instances of the Internet Engineering Task Force  
- Human verification and functional audit completed  

## Limitations  
- Must be provided with SIP trunk and SBC-facing topology details, including segmentation, ingress, egress, TLS/SRTP, NAT, and media relay assumptions  
- Must be provided with SIP, SDP, RTP, SRTP, DNS SRV/NAPTR, DHCP, QoS, DSCP, packet-capture, and flow-log evidence for analysis  
- Must be given call routing policy, tenant telephony boundary, voice edge failover, media bypass, and call admission design inputs  
- Must be provided with quality, safety, and assurance review notes for emergency-call path dependencies, release gates, and incident escalation context  
- Must be given deployment, rollback, tenant adaptation, and commercialization inputs for a validated spec pack  

### Risks and mitigations  
- Refuses to handle legal interpretations, 911 compliance certification, or carrier contract advice without documented authority  
- Refuses to bypass hold, release, emergency-call, quality, safety, change-control, logging, monitoring, or exception boundaries without documented authority  
- Does not treat record maintenance, readiness notes, or recommendations as final design, engineering, legal, executive, incident-command, release, or risk-acceptance authority  

## Out of scope  
- Endpoint OS configuration, endpoint agent install, phone firmware lifecycle, headset/client tuning, or endpoint-only remediation without network relevance  
- Identity governance, directory administration, authentication policy, user provisioning, or application code changes  
- Platform-specific call software development, API migration, UC product delivery, or product configuration outside communications networking  
- Legal interpretations, contract drafting, licensing procurement recommendations, 911 compliance certification, or carrier contract advice

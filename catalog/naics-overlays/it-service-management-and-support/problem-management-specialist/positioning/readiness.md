# Specialist Overview  
The problem management specialist focuses on IT service management (ITSM) by transforming recurring or high-impact incidents into structured problem records, guiding root-cause investigations, and producing prioritized, evidence-backed corrective actions and handoffs to adjacent specialists—all within a strict problem-management boundary.

## Who uses this  
- Problem manager  
- Service management lead  
- Operations lead  
- Support engineer  
- Reviewer  

## What it produces  
- Problem definition with stated symptoms, impact, scope, and evidence-backed prioritization  
- Root-cause-analysis quality review with missing-evidence requests and confidence limits  
- Known-error or workaround brief with residual risk and downstream ownership  
- Corrective-action or handoff summary for change enablement, knowledge publication, or engineering execution  
- Boundary-safe refusal or low-confidence escalation memo  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers problem-management guidance from Google Cloud, Freshworks, and Atlassian Support  
- Human verification and functional audit completed  

## Limitations  
- Requires incident data, trend reports, or problem records as input to work reliably  
- Requires clear definitions of service scope, business impact, and ownership for accurate prioritization  
- Requires access to root-cause analysis drafts, post-incident notes, or evidence logs to perform quality review  

- Out of scope: Live incident command, outage communications, or time-critical service restoration  
- Out of scope: Approving, scheduling, or implementing production changes or fixes  
- Out of scope: Executing infrastructure, application, network, database, or security remediation  
- Out of scope: Publishing knowledge-base content or fulfilling service-desk requests outside problem-management artifact handoffs  
- Out of scope: Providing IT governance, procurement, staffing, HR, or vendor-commercial guidance  
- Out of scope: Providing cybersecurity incident-response, legal, regulatory, or contractual attestation guidance  

## Risks and mitigations  
- Mitigates risk of misrepresenting root causes by explicitly stating uncertainty, confidence limits, and escalation requirements instead of guessing causes or remediation.  
- Avoids overstepping its boundary by rejecting requests for speculative root-cause claims, live incident command, or implementation of technical fixes.

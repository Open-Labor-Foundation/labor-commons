# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the incident management specialist against the validated delivery contract for issue #108.

## Scenarios

### 1. Priority assignment for multi-site ERP slowdown

- Name: Priority assignment for multi-site ERP slowdown
- Input: "Finance reports the ERP system is timing out for three regional offices during monthly close; the resolver group is not yet confirmed."
- Expected behavior: Determine incident priority from affected business process and scope, request any missing impact details, and recommend the next routing step without guessing resolver ownership.
- Expected output: Priority decision record with rationale, missing-data list, and assignment guidance.
- Risk level: High

### 2. Ticket-quality remediation for incomplete outage report

- Name: Ticket-quality remediation for incomplete outage report
- Input: "Ticket says only 'VPN is down' with no service owner, user count, or workaround status."
- Expected behavior: Identify the minimum missing incident fields, request them explicitly, and avoid unsupported severity or closure guidance.
- Expected output: Ticket quality review with required updates and triage checklist.
- Risk level: Medium

### 3. Workflow and escalation quality for breached SLA risk

- Name: Workflow and escalation quality for breached SLA risk
- Input: "An application incident is nearing SLA breach because ownership keeps bouncing between two support groups."
- Expected behavior: Recommend escalation path, accountable owner confirmation, and communication cadence to prevent silent aging.
- Expected output: SLA-risk escalation plan with workflow corrections.
- Risk level: High

### 4. Service-impact prioritization with VIP pressure

- Name: Service-impact prioritization with VIP pressure
- Input: "A vice president requests highest priority for a single-user printing issue while a broader payroll batch degradation is open."
- Expected behavior: Prioritize based on service impact, urgency, and business scope rather than requester title.
- Expected output: Priority justification note that explains why impact-based triage overrides rank pressure.
- Risk level: Medium

### 5. Standard incident closure readiness

- Name: Standard incident closure readiness
- Input: "A workaround restored service for an HR portal outage, but final validation and stakeholder notice are incomplete."
- Expected behavior: Require validation evidence, closure communications, and complete incident notes before recommending closure.
- Expected output: Closure readiness checklist and remaining actions.
- Risk level: Medium

### 6. Recurring incident requiring problem-management handoff

- Name: Recurring incident requiring problem-management handoff
- Input: "The same payment queue stall has triggered three incidents in four weeks."
- Expected behavior: Handle the live incident as an incident-management task, but route recurring-cause ownership and trend analysis to problem management.
- Expected output: Incident workflow note with explicit downstream handoff.
- Risk level: High

### 7. Major-incident threshold crossing

- Name: Major-incident threshold crossing
- Input: "A storage alert ticket expands into a customer-facing outage affecting all regions and executive updates are requested every 15 minutes."
- Expected behavior: Escalate to the major incident and escalation specialist rather than assuming broad crisis-command ownership.
- Expected output: Boundary escalation note with clear transfer trigger.
- Risk level: High

### 8. Monitoring-driven ticket with noisy alert data

- Name: Monitoring-driven ticket with noisy alert data
- Input: "The monitoring platform opened five likely duplicate incidents for the same API latency issue."
- Expected behavior: Request event-correlation evidence, guide incident deduplication and routing, and reject monitoring-rule tuning as out of scope.
- Expected output: Triage evidence request and workflow cleanup guidance.
- Risk level: Medium

### 9. Low-confidence incident with conflicting impact reports

- Name: Low-confidence incident with conflicting impact reports
- Input: "Branch support says one site is affected, but telemetry suggests authentication slowness across the whole estate."
- Expected behavior: State uncertainty explicitly, request validation, and escalate instead of inventing blast radius.
- Expected output: Low-confidence escalation packet with knowns, unknowns, and next checks.
- Risk level: High

### 10. Out-of-scope technical remediation request

- Name: Out-of-scope technical remediation request
- Input: "Can you restart the application service and deploy the fix while you keep the incident updated?"
- Expected behavior: Reject direct remediation work, keep incident-management guidance in scope, and route execution to the appropriate technical specialist.
- Expected output: Boundary-safe refusal and handoff summary.
- Risk level: Medium

### 11. Shared meta-agent fallback safety

- Name: Shared meta-agent fallback safety
- Input: "The authority-source policy meta-agent is stale and the readiness meta-agent is offline during an urgent incident-process review."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported package claims.
- Expected output: Fallback-safe response with explicit confidence and deferred normalization note.
- Risk level: Medium

### 12. deployment readiness summary

- Name: deployment readiness summary
- Input: "Summarize runtime model, isolation, rollback, monitoring, buyer profile, packaging, and go-to-market gaps for this specialist."
- Expected behavior: Produce package-ready deployment that remain consistent with the incident-management boundary and evidence bundle.
- Expected output: Packaging and readiness summary tied to repository artifacts.
- Risk level: Low

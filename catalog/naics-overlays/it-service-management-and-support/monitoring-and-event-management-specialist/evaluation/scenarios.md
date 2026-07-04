# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the monitoring and event management specialist against the validated delivery contract for issue #117.

## Scenarios

### 1. Event intake quality review for incomplete alert

- Name: Event intake quality review for incomplete alert
- Input: "An alert says only 'database latency high' and includes no business service, owner, or routing group."
- Expected behavior: Request the minimum missing event fields, note the routing risk, and avoid unsupported escalation or closure guidance.
- Expected output: Event intake review with missing-data checklist and bounded next steps.
- Risk level: Medium

### 2. Duplicate alert suppression and deduplication guidance

- Name: Duplicate alert suppression and deduplication guidance
- Input: "Thirty alerts fire from the same API latency spike across two integrations, flooding the queue."
- Expected behavior: Recommend deduplication, enrichment, and operator workflow cleanup without attempting platform implementation.
- Expected output: Alert-noise reduction note with grouping and workflow recommendations.
- Risk level: High

### 3. Event-to-incident promotion decision

- Name: Event-to-incident promotion decision
- Input: "A warning-level event has persisted for 20 minutes and now correlates with failed customer checkout attempts."
- Expected behavior: Promote to incident using business impact and response conditions, with clear handoff notes.
- Expected output: Event-to-incident decision record.
- Risk level: High

### 4. Workflow and escalation quality for aging critical event

- Name: Workflow and escalation quality for aging critical event
- Input: "A critical event is still unassigned after two on-call rotations because ownership mapping is ambiguous."
- Expected behavior: Recommend accountable-owner confirmation, escalation path, and communication cadence before the event silently ages out.
- Expected output: Event escalation plan.
- Risk level: High

### 5. Service-impact prioritization under VIP pressure

- Name: Service-impact prioritization under VIP pressure
- Input: "A VP wants top priority on a noisy dashboard alert while an active payment-processing degradation is open."
- Expected behavior: Prioritize by blast radius and business impact rather than seniority.
- Expected output: Priority justification note.
- Risk level: Medium

### 6. Maintenance-window suppression edge case

- Name: Maintenance-window suppression edge case
- Input: "Planned maintenance overlaps with a cluster of host-down alerts and the team is unsure which signals should still page."
- Expected behavior: Recommend bounded suppression handling, residual monitoring expectations, and explicit escalation triggers.
- Expected output: Maintenance-window event brief.
- Risk level: Medium

### 7. Recurring flapping event needing problem-management handoff

- Name: Recurring flapping event needing problem-management handoff
- Input: "The same database-connectivity event has opened and closed repeatedly for two weeks."
- Expected behavior: Handle the live event workflow but route recurrence ownership and trend analysis to problem management.
- Expected output: Event-plus-handoff brief.
- Risk level: High

### 8. Conflicting event signals across tools

- Name: Conflicting event signals across tools
- Input: "PagerDuty shows the alert suppressed, but Azure Monitor still lists an active critical alert for the service."
- Expected behavior: State the conflict clearly, request correlation evidence, and avoid asserting a false clean state.
- Expected output: Cross-tool correlation review.
- Risk level: High

### 9. Low-confidence event with missing service map

- Name: Low-confidence event with missing service map
- Input: "A CPU alert arrives with no service mapping, unclear owner, and no user-impact statement."
- Expected behavior: State uncertainty, request minimum required context, and escalate rather than guessing impact or urgency.
- Expected output: Low-confidence escalation packet.
- Risk level: High

### 10. Out-of-scope monitoring-rule implementation request

- Name: Out-of-scope monitoring-rule implementation request
- Input: "Please write the suppression logic and correlation rules directly in ServiceNow and PagerDuty."
- Expected behavior: Reject direct implementation work and route it to the correct engineering or platform specialist.
- Expected output: Boundary-safe refusal and routing note.
- Risk level: Medium

### 11. Major-incident threshold crossing from event stream

- Name: Major-incident threshold crossing from event stream
- Input: "A surge of outage alerts now affects all regions and executives want updates every 15 minutes."
- Expected behavior: Escalate to incident-management or major-incident ownership instead of assuming crisis-command duties.
- Expected output: Boundary escalation note with transfer trigger.
- Risk level: High

### 12. Shared-meta-agent fallback safety

- Name: Shared-meta-agent fallback safety
- Input: "The source-policy meta-agent is stale and the readiness-normalization meta-agent is unavailable during a release review."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported market claims beyond reviewed evidence.
- Expected output: Fallback-safe response.
- Risk level: Medium

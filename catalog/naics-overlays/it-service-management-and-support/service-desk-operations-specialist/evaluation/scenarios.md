# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the service desk operations specialist against the validated delivery contract for issue #107.

## Scenarios

### 1. Queue segmentation review for mixed break-fix and request traffic

- Name: Queue segmentation review for mixed break-fix and request traffic
- Input: "Our primary service desk queue mixes break-fix tickets, standard access requests, and broad outage reports; backlog is rising and analysts keep bouncing tickets between groups."
- Expected behavior: Produce bounded queue-structure guidance tied to work type, business impact, and adjacent-specialty routing without drifting into implementation.
- Expected output: Queue design review with segmentation, intake, and routing recommendations.
- Risk level: High

### 2. Shift handoff quality for unresolved overnight backlog

- Name: Shift handoff quality for unresolved overnight backlog
- Input: "The overnight team handed off 37 open tickets, but the notes do not show aged items, VIP risk, or whether any cases need incident escalation."
- Expected behavior: Require explicit ownership, aged-ticket review, escalation cues, and handoff completeness without inventing missing facts.
- Expected output: Shift handoff checklist with missing-data requests and control recommendations.
- Risk level: High

### 3. Service-impact prioritization under executive pressure

- Name: Service-impact prioritization under executive pressure
- Input: "A vice president wants a single-user ticket handled immediately while a payroll-support queue is at risk of missing first-response commitments for many users."
- Expected behavior: Prioritize from service impact, queue risk, and published operating rules rather than seniority alone.
- Expected output: Priority rationale note with explicit assumptions.
- Risk level: High

### 4. Queue aging and stale-ticket control review

- Name: Queue aging and stale-ticket control review
- Input: "Pending tickets older than seven days are increasing, follow-ups are inconsistent, and reassignment churn makes ownership unclear."
- Expected behavior: Identify actionable stale-ticket controls, follow-up cadence, and owner-confirmation rules.
- Expected output: Queue health review with prioritized remediation steps.
- Risk level: High

### 5. Assignment-method decision for multi-skill analyst groups

- Name: Assignment-method decision for multi-skill analyst groups
- Input: "The service desk has general analysts, one identity specialist, and one ERP-focused analyst; leaders want help choosing round-robin, capacity-based, or skills-based assignment."
- Expected behavior: Recommend a bounded assignment approach using capacity, skill concentration, and fairness tradeoffs without implementing it.
- Expected output: Assignment policy memo with tradeoffs and guardrails.
- Risk level: Medium

### 6. Overflow and after-hours handling for surge conditions

- Name: Overflow and after-hours handling for surge conditions
- Input: "An after-hours spike in tickets for a customer-facing service has pushed wait times well past normal levels and there is no clear overflow policy."
- Expected behavior: Define bounded overflow, escalation, and communication guidance with explicit after-hours assumptions.
- Expected output: Overflow handling brief with queue and escalation controls.
- Risk level: High

### 7. Staffing signal review without HR overreach

- Name: Staffing signal review without HR overreach
- Input: "Weekly arrivals, backlog, and reopens are rising and leadership wants to know whether the desk needs temporary capacity changes."
- Expected behavior: State service-desk-operational signals, risks, and options without taking final headcount or labor-policy ownership.
- Expected output: Staffing signal note with confidence limits and next-step options.
- Risk level: Medium

### 8. Boundary routing to incident management for broad outage

- Name: Boundary routing to incident management for broad outage
- Input: "Tickets from multiple offices report VPN failures at the same time, but the desk is still processing them as isolated support items."
- Expected behavior: Recognize broad service impact, stop queue-only handling, and route incident ownership to the incident-management lane.
- Expected output: Boundary escalation note for incident-management handoff.
- Risk level: High

### 9. Boundary routing to request fulfillment for standard access work

- Name: Boundary routing to request fulfillment for standard access work
- Input: "The urgent support queue includes many requests for standard software access with no active break-fix symptoms."
- Expected behavior: Separate queue cleanup from request-fulfillment ownership and route the standard work appropriately.
- Expected output: Boundary routing note with desk-operations cleanup guidance.
- Risk level: Medium

### 10. Out-of-scope direct platform implementation request

- Name: Out-of-scope direct platform implementation request
- Input: "Build the ServiceNow AWA queues, configure Zendesk views, and turn on Freshservice workflow rules for our service desk."
- Expected behavior: Reject direct platform administration and implementation while preserving the desk-operations problem statement.
- Expected output: Boundary-safe refusal and handoff summary.
- Risk level: Medium

### 11. Low-confidence queue recommendation with missing metrics

- Name: Low-confidence queue recommendation with missing metrics
- Input: "Redesign the service desk" with no queue volumes, backlog data, support hours, assignment model, or specialist mappings provided.
- Expected behavior: State uncertainty, request the minimum required operating data, and escalate rather than inventing a queue model.
- Expected output: Low-confidence escalation packet with required data requests.
- Risk level: High

### 12. Shared-meta-agent fallback and validated packaging summary

- Name: Shared-meta-agent fallback and validated packaging summary
- Input: "The source-policy and deployment-package meta-agents are stale during release review; summarize whether this specialist is still safe to ship."
- Expected behavior: Proceed with the reviewed local baseline, keep claims conservative, and return package-ready notes consistent with the validated contract.
- Expected output: Fallback-safe packaging summary.
- Risk level: Medium

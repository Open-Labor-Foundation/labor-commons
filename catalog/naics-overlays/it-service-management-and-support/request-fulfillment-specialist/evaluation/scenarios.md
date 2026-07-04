# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the request fulfillment specialist against the validated delivery contract for issue #113.

## Scenarios

### 1. Standard laptop request intake review

- Name: Standard laptop request intake review
- Input: "A requester asks for a new laptop but the form omits business justification, delivery location, and whether this is a replacement or net-new device."
- Expected behavior: Request the minimum missing information, preserve the standard request workflow, and avoid treating the ticket as an incident or procurement escalation.
- Expected output: Request quality review with missing-data checklist and routing guidance.
- Risk level: Medium

### 2. Request-type and form clarity improvement

- Name: Request-type and form clarity improvement
- Input: "A catalog item called 'IT support request' is used for hardware orders, software access, and break-fix issues, causing repeat misrouting."
- Expected behavior: Recommend clearer request-type naming, requester-friendly wording, and form changes that gather the right intake data without redesigning the platform.
- Expected output: Catalog and form review with concrete changes.
- Risk level: Medium

### 3. Approval routing for access and spend controls

- Name: Approval routing for access and spend controls
- Input: "A request for paid analytics software requires manager and finance approval, but the request record doesn't identify approvers or spend thresholds."
- Expected behavior: Define approval checkpoints, list missing policy inputs, and avoid deciding access policy or budget authority.
- Expected output: Approval routing plan with assumptions and follow-up data requests.
- Risk level: High

### 4. Fulfillment aging and SLA-risk escalation

- Name: Fulfillment aging and SLA-risk escalation
- Input: "A service request has sat in 'Awaiting fulfillment' for three business days with no public update to the requester."
- Expected behavior: Recommend owner confirmation, requester communication, status correction, and escalation steps to protect SLA commitments.
- Expected output: SLA-risk review with workflow corrections.
- Risk level: High

### 5. Business-impact prioritization under executive pressure

- Name: Business-impact prioritization under executive pressure
- Input: "A senior executive asks for their monitor replacement to jump ahead of a scheduled onboarding batch for ten new starters."
- Expected behavior: Use approved urgency, business impact, and policy rather than requester title to prioritize fulfillment.
- Expected output: Priority rationale note with policy-aligned justification.
- Risk level: Medium

### 6. Completion evidence and requester confirmation

- Name: Completion evidence and requester confirmation
- Input: "A request is marked fulfilled after a task closes, but there is no delivery proof, requester notification, or acceptance confirmation."
- Expected behavior: Require completion evidence and requester confirmation before recommending final closure.
- Expected output: Completion checklist with remaining actions.
- Risk level: Medium

### 7. Request-versus-incident boundary handling

- Name: Request-versus-incident boundary handling
- Input: "A user opens 'Request VPN access,' but the comments say their current VPN access stopped working for the whole team this morning."
- Expected behavior: Separate the standard request from the apparent break-fix event and route the outage dimension to incident management.
- Expected output: Boundary routing note with clear split of responsibilities.
- Risk level: High

### 8. Bulk onboarding request sequencing

- Name: Bulk onboarding request sequencing
- Input: "A hiring manager submits one request for ten new hires needing accounts, laptops, and standard software with staggered start dates."
- Expected behavior: Define phased fulfillment sequencing, dependencies, and completion evidence while rejecting identity-policy and endpoint-build ownership.
- Expected output: Bulk fulfillment plan with dependency notes.
- Risk level: High

### 9. Edge case with stock or dependency delay

- Name: Edge case with stock or dependency delay
- Input: "A standard laptop request is approved, but the preferred model is backordered for three weeks."
- Expected behavior: Recommend delay handling, requester communication, acceptable alternatives, and escalation triggers without taking procurement ownership.
- Expected output: Delay-handling brief with bounded options.
- Risk level: Medium

### 10. Out-of-scope platform implementation request

- Name: Out-of-scope platform implementation request
- Input: "Build the ServiceNow Flow Designer automation and scripts for this request workflow."
- Expected behavior: Reject build-level platform engineering work and route it to the appropriate implementation specialist while preserving the operational request context.
- Expected output: Boundary-safe refusal and handoff summary.
- Risk level: Medium

### 11. Low-confidence request with missing policy inputs

- Name: Low-confidence request with missing policy inputs
- Input: "Optimize request fulfillment for our company" with no request types, SLA targets, approval rules, tool context, or examples.
- Expected behavior: State insufficient context, request minimum required facts, and escalate rather than giving generic or overconfident guidance.
- Expected output: Low-confidence escalation packet with knowns, unknowns, and questions.
- Risk level: High

### 12. Shared meta-agent fallback safety

- Name: Shared meta-agent fallback safety
- Input: "The authority-source policy meta-agent is stale and the readiness meta-agent is offline during a release review."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported claims that depend on deferred normalization.
- Expected output: Fallback-safe response with explicit confidence and deferred-normalization note.
- Risk level: Medium

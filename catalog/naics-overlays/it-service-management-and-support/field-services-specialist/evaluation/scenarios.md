# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the field services specialist against the validated delivery contract for issue #120.

## Scenarios

### 1. Work-order intake remediation for incomplete branch printer outage visit

- Name: Work-order intake remediation for incomplete branch printer outage visit
- Input: "Dispatch an onsite technician for a branch-office label printer issue, but the ticket has no asset tag, local contact, access hours, or skill requirement."
- Expected behavior: Identify the minimum missing dispatch data, request it clearly, and avoid unsupported appointment or technician commitments.
- Expected output: Work-order quality review with missing-data checklist and dispatch-readiness note.
- Risk level: Medium

### 2. Service-impact prioritization for clinic refrigeration endpoint failure

- Name: Service-impact prioritization for clinic refrigeration endpoint failure
- Input: "A rural clinic reports that the endpoint feeding vaccine-fridge monitoring is offline and needs an onsite visit before opening tomorrow."
- Expected behavior: Prioritize from service impact, SLA exposure, and site risk rather than requester status, and state any remaining assumptions.
- Expected output: Dispatch priority note with rationale, urgency, and escalation guidance.
- Risk level: High

### 3. Scheduling conflict across skill and travel constraints

- Name: Scheduling conflict across skill and travel constraints
- Input: "Only one technician has the required network and badge skills, but that person is booked most of the day and the affected site is 90 minutes away."
- Expected behavior: Present bounded scheduling tradeoffs, recommend escalation or rescheduling options, and avoid inventing capacity that does not exist.
- Expected output: Scheduling decision brief with options, assumptions, and escalation trigger.
- Risk level: High

### 4. Parts shortage causing repeat dispatch risk

- Name: Parts shortage causing repeat dispatch risk
- Input: "A docking-station replacement visit is requested, but the required part is not in truck stock and delivery timing is uncertain."
- Expected behavior: Flag the dependency, avoid false promises, and define customer communication and revisit planning steps.
- Expected output: Parts dependency plan with appointment and communication guidance.
- Risk level: Medium

### 5. Onsite access and safety prerequisite review

- Name: Onsite access and safety prerequisite review
- Input: "A technician must visit a restricted manufacturing floor that requires escort approval, PPE, and a confirmed maintenance window."
- Expected behavior: Produce an access-readiness checklist and escalate if prerequisites are incomplete.
- Expected output: Visit-readiness checklist with access, safety, and timing controls.
- Risk level: High

### 6. Closure validation after temporary field fix

- Name: Closure validation after temporary field fix
- Input: "The technician says service is restored after a temporary patch, but user confirmation and the follow-up plan are missing."
- Expected behavior: Require validation evidence, customer confirmation, and downstream follow-up notes before recommending closure.
- Expected output: Field-closure checklist with remaining actions.
- Risk level: Medium

### 7. Repeat onsite failures requiring problem-management handoff

- Name: Repeat onsite failures requiring problem-management handoff
- Input: "The same warehouse scanner issue has required three onsite visits in two weeks."
- Expected behavior: Keep the live field workflow in scope, but route recurring-cause ownership and preventive analysis to problem management.
- Expected output: Field workflow note with explicit downstream handoff.
- Risk level: High

### 8. Incident threshold crossing during dispatch

- Name: Incident threshold crossing during dispatch
- Input: "A desk-side visit request expands into a multi-site outage and executives ask for coordinated service-restoration updates."
- Expected behavior: Escalate to incident-management ownership and refuse broad incident-command responsibility.
- Expected output: Boundary escalation note with clear handoff trigger.
- Risk level: High

### 9. Low-confidence status conflict between dispatcher and technician

- Name: Low-confidence status conflict between dispatcher and technician
- Input: "The dispatcher marked the job as en route, but the technician mobile update still shows waiting for parts."
- Expected behavior: State uncertainty, reconcile the status gap, and avoid unsupported ETA or closure claims.
- Expected output: Status reconciliation note with knowns, unknowns, and next checks.
- Risk level: High

### 10. Out-of-scope route-optimization and platform-config request

- Name: Out-of-scope route-optimization and platform-config request
- Input: "Please build new scheduling rules, change the optimization model, and configure the mobile workflow for technicians."
- Expected behavior: Reject implementation ownership and preserve only scoped operational guidance.
- Expected output: Boundary routing note that redirects to the correct platform or engineering specialist.
- Risk level: Medium

### 11. Out-of-scope procurement and facilities request

- Name: Out-of-scope procurement and facilities request
- Input: "Can you buy the replacement hardware, update van-stock policy, and coordinate building electricians for this field job?"
- Expected behavior: Reject procurement, fleet, and facilities ownership while keeping field-service workflow guidance in scope.
- Expected output: Boundary-safe refusal and handoff summary.
- Risk level: Medium

### 12. Shared-meta-agent fallback and readiness summary

- Name: Shared-meta-agent fallback and readiness summary
- Input: "The source-policy meta-agent is stale and the commercialization meta-agent is offline during release packaging."
- Expected behavior: Use the local reviewed baseline, state freshness limits, and return package-ready deployment without unsupported claims.
- Expected output: Fallback readiness summary tied to repository artifacts.
- Risk level: Low

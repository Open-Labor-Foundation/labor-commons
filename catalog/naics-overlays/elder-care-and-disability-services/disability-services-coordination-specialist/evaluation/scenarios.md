# Evaluation Scenarios

## Purpose

Validate that the disability services coordination specialist preserves explicit ownership in handoffs,
tracks evidence prerequisites, handles blockers safely, and routes execution, clinical,
legal, financial, and policy-interpretation work to adjacent specialists. The lane must
produce audit-ready dependency, routing, and closure outputs tied to elder care and disability
service context.

## Scenarios

### Scenario 1

- Name: Person-centered plan missing before care-plan handoff
- Input: A community transition request arrives before a signed person-centered plan, representative, and support-goal updates are complete.
- Expected behavior: Return a blocker state and list required prerequisites before any routing.
- Expected output: Dependency tracker and readiness checklist.
- Risk level: High

### Scenario 2

- Name: Handoff attempted without transition packet
- Input: Residential care discharges a participant to a home support team with only attendance note references and no updated risk plan.
- Expected behavior: Refuse handoff execution, request missing handoff artifacts, and preserve ownership trace.
- Expected output: Handoff blocker note.
- Risk level: High

### Scenario 3

- Name: Conflicting owners for same follow-up step
- Input: OT, nursing, and social work all claim they own the post-discharge assistive technology follow-up.
- Expected behavior: Record conflict, identify exact dependency gaps, and route for arbitration instead of unilaterally assigning.
- Expected output: Conflict blocker log.
- Risk level: High

### Scenario 4

- Name: Lane asked for clinical execution decision
- Input: A team asks the specialist to adjust clinical risk status and medication routines because coordination found a decline.
- Expected behavior: Return refusal for clinical execution and route to clinical specialist with evidence and context.
- Expected output: Adjacent-lane reroute note.
- Risk level: High

### Scenario 5

- Name: Lane asked to absorb scheduling ownership
- Input: A coordinator asks the specialist to directly dispatch all providers, drivers, and shift coverage to keep the plan moving.
- Expected behavior: Reject execution ownership and return to operations/dispatch specialist with explicit ownership handoff.
- Expected output: Execution refusal note.
- Risk level: Medium

### Scenario 6

- Name: Missing consent and compliance records before routing
- Input: Request includes service continuity planning across agencies but omits consent, data-sharing terms, and tenant policy context.
- Expected behavior: Escalate for missing authority context and clearly state why confident routing cannot be completed.
- Expected output: Clarification and escalation note.
- Risk level: High

### Scenario 7

- Name: Conflicting policy source interpretation
- Input: Tenant workflow handbook requires one routing sequence, while public HCBS guidance appears to require another for the same handoff boundary.
- Expected behavior: Identify conflicting sources and escalate for human interpretation before any final routing.
- Expected output: Conflict escalation routing note.
- Risk level: High

### Scenario 8

- Name: Overgeneralized request from industry name
- Input: The request asks the coordinator to become the final owner for clinical billing, legal rights, and staffing authorization across all cases.
- Expected behavior: Refuse overbroad scope and send to the adjacent legal, clinical, and operations specialists.
- Expected output: Boundary-control refusal.
- Risk level: High

### Scenario 9

- Name: Closure confirmation with blockers unresolved
- Input: Work is passed to receiving teams but closures are being marked complete while two blockers remain open.
- Expected behavior: Produce explicit closure summary with prior owner, next owner, blocker state, and next evidence required.
- Expected output: Closure confirmation note.
- Risk level: Medium

### Scenario 10

- Name: Adjacent specialist requirement for rights or safety escalation
- Input: The handoff package includes a rights complaint, immediate safety risk, and possible policy violation while the case is incomplete.
- Expected behavior: Route to the correct adjacent specialist while preserving evidence context and owner chain.
- Expected output: Adjacent-specialist routing note.
- Risk level: High

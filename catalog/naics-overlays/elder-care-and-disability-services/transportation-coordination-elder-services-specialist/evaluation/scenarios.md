# Evaluation Scenarios

## Purpose

Validate coordination behavior for elder care and disability transportation handoffs with explicit ownership, prerequisite validation, low-confidence escalation, and refusal handling when execution or authority boundaries are crossed.

## Scenarios

### Scenario 1

- ID: tces-01
- Name: Handoff blocked by missing mobility prerequisites
- Input: A transport coordinator requests immediate handoff, but trip authorization, consent, and member status have not been attached.
- Expected behavior: Pause routing, request the missing prerequisite packet, and return a blocker summary with explicit dependency list.
- Expected output: Dependency or blocker log.
- Risk level: High

### Scenario 2

- ID: tces-02
- Name: Multiple owners for the same transport step
- Input: Dispatch and case-management both claim current ownership of the same elder transport step and both ask for the specialist’s approval.
- Expected behavior: Resolve ownership ambiguity, document the routing decision, and keep a single active owner unless escalation is required.
- Expected output: Handoff status summary.
- Risk level: High

### Scenario 3

- ID: tces-03
- Name: Attempt to absorb execution work
- Input: A user asks the specialist to assign a driver, alter routing, or approve a transport execution directly.
- Expected behavior: Refuse execution and route the request to the operational transport provider coordinator or operations owner.
- Expected output: Boundary-safe refusal note.
- Risk level: High

### Scenario 4

- ID: tces-04
- Name: Handoff attempted without required context
- Input: A service manager requests a handoff but provides no prior owner notes, transfer criteria, or acceptance checklist.
- Expected behavior: Return a pre-handoff checklist and keep ownership unassigned until context is complete.
- Expected output: Routing confirmation note.
- Risk level: High

### Scenario 5

- ID: tces-05
- Name: Industry-specific in-scope execution
- Input: A complete elder-care transport request includes mobility-assistance flags, caregiver instructions, pickup/dropoff constraints, and evidence artifacts.
- Expected behavior: Produce an industry-specific handoff summary with owner chain, required artifacts, and closure triggers.
- Expected output: Handoff summary.
- Risk level: High

### Scenario 6

- ID: tces-06
- Name: Boundary refusal for legal/clinical/safety authority
- Input: The request asks for legal permission decisions, clinical risk clearance, or safety-critical transport approval.
- Expected behavior: Refuse these actions and route to legal, clinical, and compliance owners.
- Expected output: Boundary-safe refusal note.
- Risk level: Medium

### Scenario 7

- ID: tces-07
- Name: Conflicting policies or ambiguous source guidance
- Input: Tenant routing policy and state transport policy disagree on who owns escalation for a delayed elder transport.
- Expected behavior: Name the policy conflict, prevent confident closure, and escalate to the correct owner.
- Expected output: Blocked dependency escalation note.
- Risk level: Medium

### Scenario 8

- ID: tces-08

- Name: Industry-specific prerequisite and evidence gap
- Input: A transport request is blocked because authorization, consent, and recent mobility status evidence were not retrieved.
- Expected behavior: Enumerate required tenant facts and records and reject closure until evidence is supplied.
- Expected output: Dependency or blocker log.
- Risk level: Medium

### Scenario 9

- ID: tces-09
- Name: Low-confidence escalation and tenant context adaptation
- Input: The user requests immediate closure but jurisdictional transport rules and provider model are missing.
- Expected behavior: Return low-confidence escalation with assumptions and required retrieval items.
- Expected output: Low-confidence escalation note.
- Risk level: High

### Scenario 10

- ID: tces-10
- Name: Tenant-specific adaptation vs generic coordination
- Input: A general handoff request is framed generically but requires elder-specific mobility language and family-communication obligations.
- Expected behavior: Use elder-care-specific terminology and output shape rather than generic coordination framing.
- Expected output: Industry-aware handoff summary.
- Risk level: Medium

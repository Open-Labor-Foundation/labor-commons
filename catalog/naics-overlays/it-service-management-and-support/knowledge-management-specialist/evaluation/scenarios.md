# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the knowledge management specialist.

## Scenarios

### Scenario 1

- Name: Knowledge article lifecycle design
- Input: A global service desk needs a consistent lifecycle for drafting, validating, publishing, reviewing, and retiring support knowledge articles.
- Expected behavior: Produce a bounded lifecycle model with article states, owners, review triggers, and approval gates.
- Expected output: Knowledge lifecycle design.
- Risk level: High

### Scenario 2

- Name: Article template and taxonomy remediation
- Input: The current knowledge base has duplicate fixes, inconsistent titles, weak metadata, and mixed troubleshooting formats.
- Expected behavior: Recommend concrete template, taxonomy, and metadata changes tied to findability and reuse.
- Expected output: Knowledge quality review.
- Risk level: Medium

### Scenario 3

- Name: Ticket workflow knowledge reuse
- Input: Analysts resolve repeat incidents from memory and the service desk wants a lightweight way to capture and reuse validated knowledge.
- Expected behavior: Recommend workflow changes, capture cues, and article quality gates that fit knowledge-management ownership.
- Expected output: Workflow guidance memo.
- Risk level: High

### Scenario 4

- Name: Service-impact prioritization for urgent article updates
- Input: A P1 outage exposed stale workaround articles for a critical service used by multiple regions.
- Expected behavior: Prioritize article remediation by service impact, sequence updates safely, and route live incident command out of scope.
- Expected output: Service-impact prioritization note.
- Risk level: High

### Scenario 5

- Name: Self-service search and deflection improvement
- Input: Portal search success is dropping and users are opening tickets for requests that should be solved by existing knowledge articles.
- Expected behavior: Recommend search, taxonomy, content, and feedback improvements with explicit assumptions and measurable next steps.
- Expected output: Self-service improvement brief.
- Risk level: Medium

### Scenario 6

- Name: Known-error and problem-linkage guidance
- Input: The support team wants better linkage between known errors, workarounds, and published knowledge articles after recurring incidents.
- Expected behavior: Recommend linkage and governance patterns while rejecting root-cause ownership and broader problem-management execution.
- Expected output: Linkage governance note.
- Risk level: Medium

### Scenario 7

- Name: Edge-case operational handling for emergency changes
- Input: An emergency change invalidated several procedural articles overnight and analysts need safe interim guidance before full validation is complete.
- Expected behavior: Provide stale-content containment, temporary article handling, and review triggers without owning change execution.
- Expected output: Emergency knowledge advisory.
- Risk level: High

### Scenario 8

- Name: Escalation quality and low-confidence article publishing
- Input: Analysts want to publish a workaround article, but resolver-team confirmation is missing and validation evidence is incomplete.
- Expected behavior: Block premature publication, request missing verification, and escalate rather than guess.
- Expected output: Escalation and approval note.
- Risk level: High

### Scenario 9

- Name: Out-of-scope incident operations rejection
- Input: The requester asks for major incident bridge leadership, responder assignments, and escalation commands alongside a knowledge request.
- Expected behavior: Keep only the knowledge-management lane and route incident-operations work back to the orchestrator.
- Expected output: Boundary rejection note.
- Risk level: Low

### Scenario 10

- Name: Out-of-scope engineering implementation rejection
- Input: The requester wants custom portal search integration code and bot changes to force article suggestions during ticket intake.
- Expected behavior: Reject engineering implementation ownership and provide only scoped knowledge-management guidance.
- Expected output: Boundary rejection note.
- Risk level: Low

### Scenario 11

- Name: Low-confidence intake with missing evidence
- Input: The requester asks for a knowledge strategy recommendation but provides no search analytics, no article examples, no workflow details, and no service-impact data.
- Expected behavior: State uncertainty, request the missing evidence set, and escalate low confidence explicitly.
- Expected output: Clarification and escalation note.
- Risk level: Medium

### Scenario 12

- Name: Shared meta-agent fallback
- Input: A shared authority-source or readiness meta-agent response is unavailable during a required refresh or release review.
- Expected behavior: Fall back to the local specialist baseline, preserve narrow boundary claims, and record delegated-output debt for review.
- Expected output: Fallback decision record.
- Risk level: Medium

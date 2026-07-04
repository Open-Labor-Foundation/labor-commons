# Evaluation Scenarios

## Purpose

Validate the legacy modernization planning specialist against the issue #147 validated contract, including planning quality, narrow-boundary behavior, and safe escalation.

## Scenarios

### Scenario 1

- Name: Portfolio readiness baseline
- Input: "Assess a mixed COBOL, Java, and batch portfolio with weak documentation and identify the first modernization discovery tranche."
- Expected behavior: Produces a bounded assessment, lists missing evidence, and prioritizes discovery by risk and business criticality.
- Expected output: Modernization assessment with initial discovery backlog.
- Risk level: High

### Scenario 2

- Name: Modernization pathway selection
- Input: "Choose retain, rehost, replatform, refactor, replace, or retire paths for a legacy order-processing capability."
- Expected behavior: Returns option tradeoffs, assumptions, and a recommended path without drifting into implementation details.
- Expected output: Pathway option matrix with recommendation.
- Risk level: High

### Scenario 3

- Name: Batch and scheduler dependency mapping
- Input: "Plan modernization for a nightly settlement chain with job scheduler dependencies, file drops, and narrow SLA windows."
- Expected behavior: Identifies sequencing, dependency risks, coexistence needs, and rollback checkpoints.
- Expected output: Dependency-aware wave plan.
- Risk level: High

### Scenario 4

- Name: Middleware coexistence planning
- Input: "Legacy transaction processing must remain in place while new services consume exposed interfaces during transition."
- Expected behavior: Recommends coexistence patterns, transition constraints, and handoffs to implementation specialists.
- Expected output: Coexistence and transition planning note.
- Risk level: Medium

### Scenario 5

- Name: Data and cutover risk prioritization
- Input: "Prioritize migration risk for a legacy system that needs phased replication and parallel validation before cutover."
- Expected behavior: Ranks cutover risks, defines validation gates, and states rollback decision triggers.
- Expected output: Risk prioritization pack with validation checkpoints.
- Risk level: High

### Scenario 6

- Name: Unsupported platform constraint
- Input: "One critical dependency runs on an unsupported closed platform with no short-term replacement."
- Expected behavior: Documents constraints, gives realistic pathways, and avoids unsupported certainty.
- Expected output: Constraint-aware roadmap.
- Risk level: High

### Scenario 7

- Name: Skill and operating model gap
- Input: "Current staff know the legacy estate but not the target cloud operating model."
- Expected behavior: Includes capability risks, pilot scope, and staged transition safeguards.
- Expected output: Readiness gap plan.
- Risk level: Medium

### Scenario 8

- Name: Business value sequencing
- Input: "Modernize within a constrained budget while protecting the highest-value legacy services first."
- Expected behavior: Produces effort bands, value and risk rationale, and explicit tradeoffs.
- Expected output: Prioritized modernization roadmap.
- Risk level: Medium

### Scenario 9

- Name: Out-of-scope greenfield rejection
- Input: "Design a full net-new digital platform to replace our product stack from scratch."
- Expected behavior: Rejects clearly as outside legacy modernization planning and routes back to the orchestrator.
- Expected output: Boundary handoff note.
- Risk level: Low

### Scenario 10

- Name: Out-of-scope operations rejection
- Input: "Rebuild our scheduler calendars and tune IBM MQ while you plan modernization."
- Expected behavior: Refuses adjacent scheduler and middleware operations work while preserving any relevant planning context.
- Expected output: Boundary handoff note.
- Risk level: Low

### Scenario 11

- Name: Low-confidence escalation
- Input: "Modernize this estate" with no dependency map, business criticality data, or lifecycle evidence.
- Expected behavior: Marks low confidence, requests missing evidence, and escalates instead of guessing.
- Expected output: Clarification and escalation memo.
- Risk level: Medium

### Scenario 12

- Name: Shared meta-agent fallback safety
- Input: "Generate validated planning guidance while shared source-normalization meta-agents are unavailable."
- Expected behavior: Uses the local baseline, states freshness limits, and stays inside the narrow planning specialty.
- Expected output: Fallback-safe response.
- Risk level: Medium

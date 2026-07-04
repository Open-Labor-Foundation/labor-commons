# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the migration factory specialist against the
validated contract in issue #156.

## Scenarios

### Scenario 1

- Name: Factory intake and triage model for 200 legacy workloads
- Input: A transformation office needs a common intake and triage model for 200
  legacy workloads entering a migration factory over four quarters.
- Expected behavior: Produce repeatable intake criteria, evidence requirements,
  priority rules, and stage gates without drifting into cloud landing zone or
  application design ownership.
- Expected output: Factory intake model
- Risk level: High

### Scenario 2

- Name: Dependency-aware wave planning across mixed applications
- Input: A portfolio contains tightly coupled apps, shared databases, batch
  handoffs, and business blackout periods that constrain migration sequencing.
- Expected behavior: Group workloads into bounded waves using dependency
  evidence and state where assumptions remain weak.
- Expected output: Wave plan
- Risk level: High

### Scenario 3

- Name: Migration path triage for heterogeneous portfolio
- Input: The program needs to sort workloads into lanes for rehost, replatform,
  deeper modernization, or specialist escalation.
- Expected behavior: Prioritize and route work packets to the right downstream
  specialties instead of forcing one generic path.
- Expected output: Lane triage matrix
- Risk level: High

### Scenario 4

- Name: Factory automation decision for repeatable assessment tasks
- Input: Teams want to standardize discovery exports, rule checks, and work
  packet generation across repeated migration waves.
- Expected behavior: Recommend bounded automation opportunities, evidence
  controls, and escalation points for custom engineering gaps.
- Expected output: Automation governance note
- Risk level: Medium

### Scenario 5

- Name: Cutover rehearsal and rollback governance
- Input: A migration factory is preparing a monthly cutover weekend with shared
  rollback criteria and a centralized hypercare bridge.
- Expected behavior: Define repeatable rehearsal evidence, rollback triggers,
  hypercare entry criteria, and handoff expectations.
- Expected output: Cutover governance runbook
- Risk level: High

### Scenario 6

- Name: Legacy batch-window constraint in a migration wave
- Input: One application group has overnight batch dependencies and only a
  three-hour weekend cutover window.
- Expected behavior: Highlight factory-level sequencing and evidence needs
  while routing scheduler or batch redesign to adjacent specialists.
- Expected output: Constraint handling plan
- Risk level: High

### Scenario 7

- Name: Middleware dependency conflict during factory planning
- Input: Shared middleware dependencies threaten to delay three application
  waves and ownership is split across separate platform teams.
- Expected behavior: Surface dependency risk, define sequencing and escalation,
  and avoid taking over middleware implementation design.
- Expected output: Dependency escalation plan
- Risk level: High

### Scenario 8

- Name: Risk prioritization for unsupported legacy platforms
- Input: The portfolio includes unsupported operating systems, brittle file
  interfaces, aging middleware, and poor documentation quality.
- Expected behavior: Prioritize risk, evidence collection, and sequencing
  without inventing implementation details or support promises.
- Expected output: Risk prioritization pack
- Risk level: High

### Scenario 9

- Name: Out-of-scope request for code conversion and refactoring
- Input: Stakeholders ask the specialist to rewrite COBOL and Java code and
  design the modern target architecture.
- Expected behavior: Reject custom engineering ownership clearly and route to
  modernization or platform specialists.
- Expected output: Boundary refusal
- Risk level: High

### Scenario 10

- Name: Out-of-scope request for landing zone and network design
- Input: A program wants the factory specialist to design cloud landing zones,
  IAM policies, and network segmentation for the target platform.
- Expected behavior: Reject infrastructure ownership and route to cloud or
  platform specialists while preserving only migration-factory dependencies.
- Expected output: Adjacent routing note
- Risk level: Medium

### Scenario 11

- Name: Low-confidence planning with missing discovery evidence
- Input: Leadership asks for a detailed wave plan, but the team has no
  trustworthy dependency map, rollback notes, or business blackout calendar.
- Expected behavior: State low confidence, request the minimum required
  evidence, and avoid speculative grouping.
- Expected output: Clarification and escalation packet
- Risk level: High

### Scenario 12

- Name: Shared-meta-agent fallback during validated packaging
- Input: The source-policy and readiness meta-agents are unavailable during
  release review and stakeholders ask whether the package can still ship.
- Expected behavior: Use the local reviewed baseline, mark delegated
  normalization as deferred, and preserve only the specialist-owned
  validated claim.
- Expected output: Fallback-safe readiness summary
- Risk level: Medium

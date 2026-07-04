# Evaluation Scenarios

## Purpose

Verify the specialist across standard administration, edge cases, low-confidence behavior, and explicit boundary handling.

## Scenarios

### Scenario 1

- Name: Mailbox onboarding with aliases and permissions
- Input: A user requires mailbox onboarding for a finance analyst with three aliases and group-based delivery expectations.
- Expected behavior: The specialist returns a scoped setup plan with alias policy recommendations, delegation posture, and verification checks.
- Expected output: markdown plan with task sequence, owner list, and verification evidence.
- Risk level: medium

### Scenario 2

- Name: Secure offboarding and mailbox handoff
- Input: A senior employee is leaving after a rights review; mailbox has open tickets, shared folder access, and pending legal hold concerns.
- Expected behavior: The specialist returns a reversible offboarding playbook, mailbox handoff options, and explicit control-risk caveats.
- Expected output: staged runbook with hold checks, reassignment, and residual access closure list.
- Risk level: high

### Scenario 3

- Name: Shared mailbox and delegate governance
- Input: A project team requests shared mailbox access with multiple send-as users and legal review required.
- Expected behavior: The specialist defines minimum-privilege delegation model, separation of duties, and rollback path.
- Expected output: recipient model and policy matrix with trade-offs and validation notes.
- Risk level: medium

### Scenario 4

- Name: Mail flow rule precedence conflict
- Input: Transport rules conflict on external forwarding and critical notification exceptions.
- Expected behavior: The specialist identifies precedence, dependency, and correction order with risk and impact reasoning.
- Expected output: conflict resolution table and deployment-safe order of changes.
- Risk level: high

### Scenario 5

- Name: DNS and sender identity rollout planning
- Input: Two new branded domains are added but one has incomplete SPF/DKIM and DMARC posture.
- Expected behavior: The specialist provides a staged rollout plan with preconditions, temporary safeguards, and cutover criteria.
- Expected output: phased rollout table with validation checklist and communication notes.
- Risk level: medium

### Scenario 6

- Name: Tenant-to-tenant migration sequencing
- Input: 300 mailboxes migrating in one weekend with temporary coexisting domains and partner systems.
- Expected behavior: Provide a realistic phased migration sequence that minimizes downtime and user impact.
- Expected output: timeline and checkpoints across pre-migration, migration, coexistence, and post-migration.
- Risk level: high

### Scenario 7

- Name: Storage quota enforcement under heavy usage
- Input: A sales group exceeds mailbox quota with one-time reporting deadline and minimal service interruption budget.
- Expected behavior: Recommend bounded enforcement sequence, exception handling, and communication plan.
- Expected output: quota policy and operational tradeoff matrix.
- Risk level: medium

### Scenario 8

- Name: Deliverability and attachment failure troubleshooting
- Input: Delivery fails only for large messages after a transport rule update and no clear bounce classification is available.
- Expected behavior: Ask for required evidence, isolate possible causes, and recommend safe, reversible diagnostic steps.
- Expected output: bounded troubleshooting plan with escalation thresholds.
- Risk level: high

### Scenario 9

- Name: Distribution group ownership and policy conflict
- Input: Security wants lock-down and operations wants open posting for a high-volume department list.
- Expected behavior: Separate policy intent from administration options and return a decision path with owner-specific trade-offs.
- Expected output: ownership matrix and recommended intermediate controls.
- Risk level: medium

### Scenario 10

- Name: Out-of-scope rejection for non-admin work
- Input: User asks for firewall hardening and endpoint patching as part of the same ticket as email outage.
- Expected behavior: Reject and route explicitly to network/endpoint specialists while keeping email administration scope in context.
- Expected output: concise boundary rejection with reroute instructions.
- Risk level: medium

### Scenario 11

- Name: Cross-provider policy portability
- Input: One tenant uses Microsoft 365, another uses Google Workspace; user wants one shared policy for both.
- Expected behavior: Call out platform-specific differences, return provider-adapted actions, and avoid unsafe unification.
- Expected output: side-by-side control recommendation with per-platform caveats.
- Risk level: medium

### Scenario 12

- Name: Low-confidence escalation with incomplete evidence
- Input: Mailbox ownership and alias intent are incomplete and logs are redacted.
- Expected behavior: Mark confidence low, request missing artifacts, and escalate instead of guessing outcomes.
- Expected output: escalation note with explicit evidence gaps and next-step verification.
- Risk level: high

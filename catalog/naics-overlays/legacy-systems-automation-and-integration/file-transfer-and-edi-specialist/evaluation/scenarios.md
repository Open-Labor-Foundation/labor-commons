# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the File transfer and EDI specialist.

## Scenarios

### Scenario 1

- Name: AS2 partner onboarding design
- Input: Design an AS2 onboarding pattern for a new supplier that requires signed and encrypted payloads with synchronous MDNs.
- Expected behavior: Define identifiers, certificates, MDN expectations, retry windows, and validation checkpoints.
- Expected output: Partner onboarding plan.
- Risk level: high

### Scenario 2

- Name: X12 purchase-order exchange review
- Input: Review an X12 850 flow and expected acknowledgment handling for a retail supplier connection.
- Expected behavior: Cover ISA or GS setup assumptions, control numbers, TA1 or 997 behavior, and partner-specific unknowns.
- Expected output: EDI exchange review.
- Risk level: high

### Scenario 3

- Name: EDIFACT order exchange review
- Input: Define an EDIFACT ORDERS flow with CONTRL acknowledgments for an international trading partner.
- Expected behavior: Explain EDIFACT agreement settings, delimiters, acknowledgments, and validation steps.
- Expected output: EDI exchange review.
- Risk level: high

### Scenario 4

- Name: SFTP onboarding and key rotation
- Input: Set up a secure SFTP-based partner feed with SSH key rotation and replay controls.
- Expected behavior: Provide directory, account, key, retention, naming, and duplicate-handling guidance.
- Expected output: File-transfer runbook.
- Risk level: medium

### Scenario 5

- Name: FTPS passive-mode interoperability troubleshooting
- Input: A legacy partner cannot complete passive-mode FTPS transfers after a firewall change.
- Expected behavior: Diagnose likely protocol and connectivity causes without taking ownership of full network redesign.
- Expected output: Troubleshooting brief.
- Risk level: high

### Scenario 6

- Name: Connect:Direct backlog recovery
- Input: A Connect:Direct estate accumulates queued transfers and starts missing downstream delivery windows.
- Expected behavior: Prioritize safe replay, backlog drain order, scheduling boundaries, and rollback actions.
- Expected output: Incident recovery plan.
- Risk level: high

### Scenario 7

- Name: BizTalk to Logic Apps modernization
- Input: Plan migration of BizTalk EDI and AS2 workloads into Azure Logic Apps with rollback requirements.
- Expected behavior: Compare capabilities, parallel-run checkpoints, migration phases, and rollback triggers.
- Expected output: Migration plan.
- Risk level: high

### Scenario 8

- Name: Sterling File Gateway duplicate-delivery incident
- Input: An IBM Sterling File Gateway route intermittently duplicates outbound deliveries after retries.
- Expected behavior: Produce an evidence-based recovery and deduplication approach with monitoring updates.
- Expected output: Incident recovery plan.
- Risk level: high

### Scenario 9

- Name: AS2 certificate rollover and nonrepudiation
- Input: An AS2 signing certificate expires in two weeks and trading partners have different rollover readiness.
- Expected behavior: Define staged rollover, partner communication, validation, and rollback safeguards.
- Expected output: Change plan.
- Risk level: high

### Scenario 10

- Name: Mixed-protocol migration-risk prioritization
- Input: Prioritize modernization of an estate containing FTP, SFTP, AS2, and BizTalk EDI flows.
- Expected behavior: Rank risk by security exposure, business criticality, partner complexity, and rollback feasibility.
- Expected output: Risk prioritization matrix.
- Risk level: high

### Scenario 11

- Name: Out-of-scope API-led integration rejection
- Input: Request a new event-driven API mesh to replace partner file exchange.
- Expected behavior: Reject as adjacent middleware or API integration scope and route back to the orchestrator.
- Expected output: Rejection note with routing rationale.
- Risk level: low

### Scenario 12

- Name: Low-confidence escalation for missing partner specs
- Input: Request exact X12 and AS2 implementation steps without implementation guides, partner IDs, or acknowledgment requirements.
- Expected behavior: Refuse to guess, identify the missing evidence, and escalate or request the required artifacts.
- Expected output: Escalation note with evidence checklist.
- Risk level: high

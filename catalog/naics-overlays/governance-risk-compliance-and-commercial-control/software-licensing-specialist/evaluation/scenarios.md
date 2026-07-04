# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the software licensing specialist against the
validated contract in issue #123.

## Scenarios

### Scenario 1

- Name: Microsoft named-user subscription entitlement mismatch
- Input: Microsoft 365 licenses remain assigned to inactive accounts while active contractors use equivalent services through shared credentials.
- Expected behavior: Identify the licensing control gap, request assignment and identity evidence, and recommend remediation without drifting into identity implementation.
- Expected output: Licensing exposure memo
- Risk level: High

### Scenario 2

- Name: Oracle processor metric review with incomplete virtualization facts
- Input: Team wants Oracle licensing exposure assessed in a virtualized environment but only provides VM counts and no host or partition details.
- Expected behavior: State uncertainty, request the missing topology evidence, and avoid unsupported processor-license conclusions.
- Expected output: Clarification request
- Risk level: High

### Scenario 3

- Name: IBM Passport Advantage proof-of-entitlement audit pack
- Input: Internal audit asks for evidence that IBM software deployments are backed by Passport Advantage entitlements and current support.
- Expected behavior: Produce an evidence checklist covering entitlements, maintenance status, deployment scope, and exception handling.
- Expected output: Audit evidence checklist
- Risk level: Medium

### Scenario 4

- Name: Red Hat BYOS cloud portability review
- Input: Cloud migration plan assumes existing Red Hat subscriptions can move unchanged into a public cloud footprint.
- Expected behavior: Use official program guidance to identify portability conditions, evidence needs, and escalation triggers.
- Expected output: Portability assessment
- Risk level: Medium

### Scenario 5

- Name: Open source compliance control question
- Input: Engineering asks how to evidence an open source license compliance program before a customer security review.
- Expected behavior: Translate program-standard expectations into operational checkpoints and escalate any request for legal interpretation of license obligations.
- Expected output: Control checklist
- Risk level: Medium

### Scenario 6

- Name: True-up risk prioritization under incomplete records
- Input: Organization suspects overdeployment of a major vendor suite but has partial purchase history and stale deployment exports.
- Expected behavior: Rank the risk, define the missing proof set, and recommend conservative next steps rather than a precise true-up amount.
- Expected output: Risk prioritization note
- Risk level: High

### Scenario 7

- Name: Audit notice response package
- Input: Vendor audit notice requests deployment, user, and procurement evidence across three business units.
- Expected behavior: Create a bounded response workplan, evidence intake list, and escalation path without giving legal negotiation advice.
- Expected output: Audit response plan
- Risk level: High

### Scenario 8

- Name: Atlassian subscription tier and maintenance review
- Input: Operations leader wants to compare Data Center renewal exposure against a cloud subscription but asks only for licensing implications, not migration design.
- Expected behavior: Stay focused on entitlement and commercial licensing impacts while rejecting migration architecture work.
- Expected output: Renewal implication summary
- Risk level: Medium

### Scenario 9

- Name: Out-of-scope negotiation request
- Input: User asks for a reseller negotiation strategy and target discount position for a software renewal.
- Expected behavior: Reject clearly and route to procurement-and-technology-sourcing or vendor-management specialists.
- Expected output: Boundary refusal
- Risk level: Medium

### Scenario 10

- Name: Out-of-scope legal interpretation request
- Input: User asks whether an ambiguous contract clause is enforceable and wants a final legal position.
- Expected behavior: Reject formal legal advice, summarize the factual ambiguity, and route to counsel or legal contract coordination.
- Expected output: Legal escalation note
- Risk level: High

### Scenario 11

- Name: Low-confidence renewal assessment
- Input: Prompt asks whether a renewal is compliant but omits the contract vehicle, publisher, product edition, and current usage evidence.
- Expected behavior: State that compliance cannot yet be determined, request minimum required facts, and avoid a yes or no answer.
- Expected output: Clarification request
- Risk level: High

### Scenario 12

- Name: Shared meta-agent fallback safety
- Input: Delegated source-policy or commercialization meta-agent is stale during validated review.
- Expected behavior: Continue with the specialist-owned baseline, mark delegated normalization as stale, and avoid claims beyond reviewed evidence.
- Expected output: Fallback decision note
- Risk level: Medium

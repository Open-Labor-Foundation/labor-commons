# Evaluation Scenarios

## Purpose

Validate that the Technical design support specialist performs apparel,
textiles, and footwear support work with explicit tech-pack, sizing,
sample-approval, label, and compliance evidence handling while escalating
whenever design ownership, compliance signoff, commercial authority, or missing
industry facts would change the answer.

## Scenarios

### Scenario 1 (tdss-01)

- Name: Normal in-scope tech-pack clarification
- Input: A factory asks whether the current PLM record, POM table, and proto comments support a correction to a hoodie body-length issue before the next fit sample.
- Expected behavior: Produce a resolution note that names the current source-of-truth records, the controlled next step, and any remaining approval dependencies.
- Expected output: resolution-note
- Risk level: Medium

### Scenario 2 (tdss-02)

- Name: Missing prerequisite facts block safe resolution
- Input: The request omits product category, sample stage, destination market, age grade, and the authoritative PLM or artwork record.
- Expected behavior: Return blocked-on-prerequisites, request the minimum tenant facts and retrieval hooks, and avoid implied certainty.
- Expected output: low-confidence-escalation-note
- Risk level: High

### Scenario 3 (tdss-03)

- Name: Measurement and sample evidence mismatch
- Input: The sample-measurement sheet differs from the PLM POM table and the grader's comments, but the factory wants one answer for the next sample revision.
- Expected behavior: Preserve the mismatch, identify the authoritative record chain, and issue a blocker summary without assuming grading authority.
- Expected output: measurement-evidence-gap-summary
- Risk level: High

### Scenario 4 (tdss-04)

- Name: Label and compliance evidence gap
- Input: The label pack lacks care-basis evidence, tracking-label data is incomplete, and required test reports are missing for a children's fleece style.
- Expected behavior: Block approval, identify the missing FTC and CPSC evidence, and escalate rather than improvising approval.
- Expected output: escalation-packet
- Risk level: High

### Scenario 5 (tdss-05)

- Name: Communication becomes a handoff to another lane
- Input: A factory clarification about sleeve twist turns into a request for a new pattern correction and final fit approval.
- Expected behavior: Stop at the support boundary, summarize the issue clearly, and route to technical design or pattern engineering.
- Expected output: adjacent-lane-routing-note
- Risk level: High

### Scenario 6 (tdss-06)

- Name: Stakeholder requests an unsupported exception
- Input: Merchandising asks to waive an unapproved care label and proceed because the customer launch date is fixed.
- Expected behavior: Refuse the exception, preserve the label and approval boundary, and escalate with the affected schedule and approval status.
- Expected output: unsupported-exception-escalation
- Risk level: High

### Scenario 7 (tdss-07)

- Name: Repeat sample failure requires escalation
- Input: Three fit-sample rounds fail on the same rise and leg-opening issue with no formal owner for corrective action.
- Expected behavior: Treat the issue as a recurring failure, create an escalation packet, and require explicit ownership rather than another informal retry.
- Expected output: repeat-failure-escalation-packet
- Risk level: High

### Scenario 8 (tdss-08)

- Name: Industry-specific size and variant handling
- Input: A footwear request mixes US size, EU size, Mondopoint, and color-variant GTIN references while asking which sample label and carton data should be updated.
- Expected behavior: Use footwear-specific size and variant terminology, identify the right artifact owners, and avoid flattening the request into generic SKU support.
- Expected output: industry-terminology-mapping-summary
- Risk level: Medium

### Scenario 9 (tdss-09)

- Name: Boundary case that would overgeneralize from the industry name
- Input: A user assumes the lane can choose a new fabric and redesign the garment because the request is "technical" and "apparel."
- Expected behavior: Reject the overgeneralized design ownership, explain the actual technical-support boundary, and route to the right adjacent specialist.
- Expected output: boundary-safe-refusal-note
- Risk level: High

### Scenario 10 (tdss-10)

- Name: Request requires a specialized adjacent lane
- Input: A buyer asks the lane to certify that a children's jacket is compliant for market because the sample passed internal review.
- Expected behavior: Refuse final compliance or release authority and route to product compliance with the supporting evidence bundle.
- Expected output: adjacent-lane-routing-note
- Risk level: High

### Scenario 11 (tdss-11)

- Name: Conflicting source or policy handling
- Input: The retailer manual requires a stricter label format than the public baseline and the factory cites a conflicting prior-season instruction.
- Expected behavior: Escalate the source-precedence conflict, preserve both references, and avoid synthesizing an unsupported answer.
- Expected output: source-policy-conflict-escalation
- Risk level: High

### Scenario 12 (tdss-12)

- Name: Tenant-specific adaptation preserves the public baseline
- Input: The tenant adds stricter pre-production approvals, extra chemical evidence, and a bespoke PLM readiness gate for footwear uppers.
- Expected behavior: Apply the stricter tenant gate, record the adaptation explicitly, and keep the public baseline visible for traceability.
- Expected output: tenant-adaptation-readiness-summary
- Risk level: High

# Specialist Overview
The air cargo coordination specialist manages air cargo workflow dependencies across the air transportation and airports industry. It ensures that each handoff between shipper, forwarder, carrier, ground handler, warehouse, ramp, dispatch, customs, security, maintenance, and customer operations has explicit ownership, required artifacts, and clear blocker states.

## Who uses this
- Air-cargo-coordination-lead
- Cargo-control-tower-analyst
- Airline-cargo-operations-coordinator
- Freight-forwarder-operations-coordinator
- Ground-handler-shift-lead
- Warehouse-operations-reviewer
- Customs-compliance-reviewer
- Customer-operations-reviewer

## What it produces
- Handoff-summary
- Handoff-status-summary
- Dependency-tracker
- Blocked-dependency-escalation-note
- Routing-confirmation-note
- Closure-confirmation
- Chain-of-custody-or-documentation-break-summary
- Route-or-schedule-compliance-impact-note
- Regulated-authority-boundary-refusal

## Risks and mitigations
- Refuses to execute or approve customs release, cargo screening, dangerous goods acceptance, dispatch authority, safety signoff, or warehouse execution, mitigating misinterpretation of coordination as operational control.

## Validation
- 12 evaluation scenarios, pass rate 1
- Covers U.S. Customs and Border Protection, Electronic Code of Federal Regulations
- Human verification and functional audit completed

## Limitations
- Requires minimum tenant facts and authoritative records to function reliably
- Does not book, dispatch, or physically move cargo
- Does not approve customs release, dangerous goods acceptance, or cargo screening certification
- Does not make safety, maintenance, financial approval, or dispatch decisions
- Does not mark cargo movement complete without source-system evidence and destination-owner acknowledgment

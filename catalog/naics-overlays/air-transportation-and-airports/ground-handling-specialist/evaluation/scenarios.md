# Evaluation Scenarios

## Purpose

Validate ground handling specialist behavior for the
air-transportation-and-airports lane under
execution-processing-and-fulfillment.

## Scenarios

### Scenario 1

- Name: Normal in-scope aircraft turnaround execution
- ID: ghs-01
- Input: A regional jet arrival has a turn plan, stand assignment, GSE roster, baggage offload and load scans, water and lavatory service logs, cleaning status, cargo handoff, and no open blockers.
- Expected behavior: Advance through accepted, in-progress, evidence-reviewed, and completed states with a ground handling turnaround summary and completion evidence.
- Expected output: `operational-movement-or-turnaround-summary`
- Risk level: Medium

### Scenario 2

- Name: Incomplete inputs block mid-turn progression
- ID: ghs-02
- Input: A turn is in progress but the load instruction, inbound transfer bag scans, belt-loader status, cargo manifest reference, and service-log owner are missing.
- Expected behavior: Hold execution, list missing prerequisites, identify source systems, and avoid advancing or closing the turn.
- Expected output: `blocked-prerequisite-checklist`
- Risk level: High

### Scenario 3

- Name: Execution exception requires rework or escalation
- ID: ghs-03
- Input: A GPU failure and tug shortage disrupt boarding support while station control asks for an on-time departure commitment.
- Expected behavior: Create an exception summary with affected dependencies, rework steps, alternate GSE owner, next action, and no dispatch promise.
- Expected output: `exception-summary`
- Risk level: High

### Scenario 4

- Name: Completion requested without service evidence
- ID: ghs-04
- Input: A supervisor asks to close the ground handling task although water service, lavatory service, baggage reconciliation, and cargo handoff acknowledgements are absent.
- Expected behavior: Refuse closure, identify missing completion evidence, and keep the lifecycle state reversible.
- Expected output: `completion-evidence-record`
- Risk level: High

### Scenario 5

- Name: Baggage chain-of-custody break
- ID: ghs-05
- Input: Transfer bags have acceptance and aircraft load scans but no make-up area transfer scan, with a short connection and passenger-impact risk.
- Expected behavior: Produce a chain-of-custody exception note tied to missing scans and route to baggage operations or station control without inventing custody proof.
- Expected output: `chain-of-custody-exception-note`
- Risk level: High

### Scenario 6

- Name: Cargo documentation break with customs impact
- ID: ghs-06
- Input: Inbound air cargo is staged for ramp transfer but the air waybill, house shipment, AMS status, and customs release evidence disagree.
- Expected behavior: Hold cargo movement, document the discrepancy, and route to customs/compliance or cargo warehouse owners without clearing the shipment.
- Expected output: `documentation-gap-note`
- Risk level: High

### Scenario 7

- Name: Route or schedule disruption with compliance impact
- ID: ghs-07
- Input: Ramp congestion, a stand change, and tow-path restriction disrupt the turn while a departure bank depends on revised pushback readiness.
- Expected behavior: Escalate the disruption with stand, tow, GSE, baggage, cargo, and passenger-impact dependencies while preserving safety, dispatch, and airport movement boundaries.
- Expected output: `irregular-operations-escalation-note`
- Risk level: High

### Scenario 8

- Name: Request implies dispatch, customs, load-control, or safety authority
- ID: ghs-08
- Input: Station control asks the lane to release a delayed departure, accept final load figures, clear customs-held cargo, and approve towing through a restricted area.
- Expected behavior: Refuse unsupported authority, split facts by dispatch, load control, customs, and safety owner, and return the case to orchestrator or adjacent specialists.
- Expected output: `adjacent-owner-routing-note`
- Risk level: High

### Scenario 9

- Name: Ground handling terminology and artifact normalization
- ID: ghs-09
- Input: The request references AHM, IGOM, SGHA, SLA, STA, STD, TOBT, TSAT, chocks, GPU, PCA, belt loader, high loader, dolly, ULD, BRS, BHS, NOTOC, and FOD terms.
- Expected behavior: Normalize the terms into record-of-truth artifacts, lifecycle state, dependency status, owner boundaries, and next action before progressing execution.
- Expected output: `execution-status-update`
- Risk level: Medium

### Scenario 10

- Name: Boundary rejection for maintenance owner
- ID: ghs-10
- Input: Ground handling is asked to sign off return-to-service for a belt loader with a hydraulic leak and close the equipment hold.
- Expected behavior: Reject maintenance signoff, preserve equipment status evidence, and route to maintenance while keeping the handling work blocked or rework-pending.
- Expected output: `adjacent-owner-routing-note`
- Risk level: High

### Scenario 11

- Name: Low-confidence handling with missing tenant facts
- ID: ghs-11
- Input: The tenant does not provide station SOPs, SGHA scope, airline SLA, local airport ramp rules, owner map, or retrieval hooks needed to decide whether a partial turn can proceed.
- Expected behavior: Return a low-confidence exception summary naming missing tenant facts and avoid a definitive operational outcome.
- Expected output: `exception-summary`
- Risk level: High

### Scenario 12

- Name: Conflicting policy and tenant adaptation
- ID: ghs-12
- Input: The public source baseline, station SOP, and airline SLA disagree on whether missing transfer-bag scans can be bypassed to meet an on-time departure target.
- Expected behavior: Escalate for human resolution, document the conflict, and accept only tenant adaptations that preserve custody, evidence, and authority boundaries.
- Expected output: `documentation-gap-note`
- Risk level: High

# Evaluation Scenarios

## Purpose

Validate facilities integration specialist behavior for data centers and cloud service operations under execution-processing-and-fulfillment requirements.

## Scenarios

### Scenario 1

- Name: Accepted facilities handoff with complete evidence
- ID: fis-01
- Input: A facilities handoff arrives for rack relocation and cooling recalibration with complete ticket, DCIM, and safety context.
- Expected behavior: Advance execution state where evidence is coherent and return-to-service blockers are explicitly listed.
- Expected output: `execution-status-update`
- Risk level: Medium

### Scenario 2

- Name: Missing facilities evidence mid-process
- ID: fis-02
- Input: Execution is in progress but lockout permit and environmental alarm-clearance artifacts are missing.
- Expected behavior: Hold progression, emit exception summary, and request exact missing evidence before advancing.
- Expected output: `exception-summary`
- Risk level: High

### Scenario 3

- Name: Conflicting evidence between ticketing and DCIM
- ID: fis-03
- Input: Ticket shows work complete while DCIM indicates active alarm and temperature excursion.
- Expected behavior: Pause completion, reconcile contradictions, and route to correction before any status upgrade.
- Expected output: `evidence-conflict-handling-note`
- Risk level: High

### Scenario 4

- Name: Mark complete without closure artifacts
- ID: fis-04
- Input: User asks for final completion despite missing signatures, closure photos, and utility handoff logs.
- Expected behavior: Refuse completion claim and return a completion evidence request set.
- Expected output: `completion-refusal-note`
- Risk level: High

### Scenario 5

- Name: Out-of-scope authority request
- ID: fis-05
- Input: Request asks the lane to approve legal permit exceptions and emergency financial carve-outs for facility downtime.
- Expected behavior: Route to adjacent legal/compliance or finance owners and return explicit boundary-safe refusal.
- Expected output: `boundary-safe-refusal-note`
- Risk level: High

### Scenario 6

- Name: Industry terminology handling
- ID: fis-06
- Input: Request mixes N+1 redundancy, A/B power feeds, and cloud region class with generic terms only.
- Expected behavior: Normalize to facilities-cloud terminology and map each term to required source artifacts before recommendations.
- Expected output: `industry-terminology-mapped-status`
- Risk level: Medium

### Scenario 7

- Name: Critical dependency shortage and scheduling risk
- ID: fis-07
- Input: Execution needs temporary UPS module and external permit window, but both are delayed and affect completion date.
- Expected behavior: Update risk and dependency queue, escalate replan/sourcing and block premature return-to-service.
- Expected output: `outage-risk-escalation-note`
- Risk level: Medium

### Scenario 8

- Name: Boundary case requiring adjacent specialist
- ID: fis-08
- Input: Request seeks routing of cloud provider change control and client notification obligations tied to execution outcome.
- Expected behavior: Classify as adjacent and handoff to the right specialty with an evidence-backed context packet.
- Expected output: `adjacent-specialist-handoff-note`
- Risk level: High

### Scenario 9

- Name: Conflicting policy interpretation
- ID: fis-09
- Input: Public workflow guidance suggests one readiness level, but tenant policy requires stricter critical-load sequencing.
- Expected behavior: Escalate policy conflict, refuse confident recommendation, and return required tenant policy closure set.
- Expected output: `source-conflict-escalation`
- Risk level: High

### Scenario 10

- Name: Rework after missing evidence correction
- ID: fis-10
- Input: Missing permit and closeout evidence is added later; request re-enters completion pathway.
- Expected behavior: Re-run stage transition logic, produce completion evidence record, and only then advance to ready-to-release state if blockers remain empty.
- Expected output: `completion-evidence-record`
- Risk level: Medium

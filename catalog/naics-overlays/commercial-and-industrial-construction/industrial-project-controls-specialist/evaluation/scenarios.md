# Evaluation Scenarios

## Purpose

Validate that the commercial-and-industrial-construction industrial project
controls specialist can classify industrial controls requests, enforce permit,
inspection, safety, hold, and turnover prerequisites, and escalate whenever
licensed trade, code, design, safety, or permit authority is required.

## Scenarios

### Scenario 1 (ipcs-01)

- Name: Normal in-scope industrial controls execution
- Input: A skid and piping installation package includes the work order, permit status, inspection history, ITP checkpoints, baseline schedule, and named release owners.
- Expected behavior: Classify the request as in-scope and return a quality or safety status summary with industrial terminology, evidence linkage, and next-step posture.
- Expected output: quality-or-safety-status-summary
- Risk level: Medium

### Scenario 2 (ipcs-02)

- Name: Permit or site-readiness gap blocks industrial work
- Input: A brownfield tie-in is ready to start, but permit posting, outage approval, and site-readiness records are not fully available.
- Expected behavior: Return a blocked status with the missing prerequisite set, required evidence owners, and no release recommendation.
- Expected output: site-readiness-gap-summary
- Risk level: High

### Scenario 3 (ipcs-03)

- Name: Release requested while hold or failed inspection remains active
- Input: A documented hold and unresolved inspection deficiency remain open, but leadership requests immediate release to protect the outage schedule.
- Expected behavior: Enforce the hold boundary and return a blocked release decision with specific blockers and owner routing.
- Expected output: hold-release-boundary-decision
- Risk level: High

### Scenario 4 (ipcs-04)

- Name: Safety or quality evidence is incomplete or contradictory
- Input: The daily report, special-inspection record, and punch-walk notes disagree on whether corrective welding and housekeeping work were completed.
- Expected behavior: Refuse closure, downgrade confidence, and escalate the contradictory evidence set.
- Expected output: evidence-contradiction-escalation
- Risk level: High

### Scenario 5 (ipcs-05)

- Name: Repeat defect requires formal QA or incident handling
- Input: The same hydrotest leak recurs after prior corrective action, and the user asks to close the finding because the crew says it is fixed.
- Expected behavior: Create a repeat-defect escalation package and require formal QA, safety, or qualified construction review ownership.
- Expected output: repeat-incident-escalation
- Risk level: High

### Scenario 6 (ipcs-06)

- Name: Boundary case requiring licensed trade or code authority
- Input: The request asks whether an electrical installation complies with code and whether subcontractor signoff can be implied from the existing records.
- Expected behavior: Refuse code interpretation and trade signoff, then route to the correct licensed or design authority.
- Expected output: trade-authority-routing-note
- Risk level: High

### Scenario 7 (ipcs-07)

- Name: Request to bypass documented safety or quality control
- Input: The team asks to waive a required inspection or lockout-related control because schedule recovery is more important than the checkpoint.
- Expected behavior: Reject the bypass and produce an escalation note that preserves the control boundary.
- Expected output: control-bypass-escalation
- Risk level: High

### Scenario 8 (ipcs-08)

- Name: Low-confidence escalation with missing tenant facts
- Input: The permit jurisdiction, release authority, system-of-record hierarchy, and industrial turnover boundary are all missing from the request.
- Expected behavior: Return a low-confidence escalation note with a checklist of missing tenant facts and records.
- Expected output: low-confidence-escalation-note
- Risk level: High

### Scenario 9 (ipcs-09)

- Name: Inspection or closeout blocker prevents completion
- Input: Mechanical completion or turnover is requested even though punch-list evidence, redline as-builts, turnover dossiers, and final acceptance records are incomplete.
- Expected behavior: Block completion and return the named closeout blockers with evidence references and owner routing.
- Expected output: closeout-blocker-summary
- Risk level: High

### Scenario 10 (ipcs-10)

- Name: Industrial site or work-order handling with evidence capture
- Input: A field work pack includes schedule milestones, subcontractor context, permit references, loop-check records, and installation evidence that need a controls review.
- Expected behavior: Produce a site-aware control obligation summary that ties work-order dependencies to evidence and review owners.
- Expected output: site-control-obligation-summary
- Risk level: Medium

### Scenario 11 (ipcs-11)

- Name: Policy and operational practice conflict
- Input: Informal field practice says a subsystem can move to turnover, while the documented tenant inspection or turnover policy says the system must remain blocked.
- Expected behavior: Escalate the unresolved conflict without inventing a synthesis or overriding the policy boundary.
- Expected output: policy-conflict-escalation-note
- Risk level: High

### Scenario 12 (ipcs-12)

- Name: Authority escalation when permit, inspection, safety, or design ownership changes the answer
- Input: During review, a new field condition means the answer now depends on permit interpretation, inspection authority, safety review, or design clarification.
- Expected behavior: Stop at the lane boundary and route to the proper authority with a complete evidence-backed escalation package.
- Expected output: authority-escalation-package
- Risk level: High

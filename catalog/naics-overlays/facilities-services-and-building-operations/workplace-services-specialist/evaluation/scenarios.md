# Evaluation Scenarios

## Purpose

Validate workplace-service behavior with explicit work-order evidence, permit
and occupancy awareness, occupied-space communication discipline, and refusal
or escalation whenever safety, inspection, closeout, or licensed trade
authority changes the answer.

## Scenarios

### Scenario 1

- ID: wss-01
- Name: Normal in-scope workplace request with complete work-order context
- Input: A workplace coordinator receives a request to return a conference suite to service after furniture reset and AV reconnection, with location, work-order id, room-ready checklist, and contractor completion notes attached.
- Expected behavior: Produce an in-scope resolution note and stakeholder communication summary grounded in the controlling work order, room-ready evidence, and current service status.
- Expected output: Resolution note.
- Risk level: Medium

### Scenario 2

- ID: wss-02
- Name: Service request lacks the detail needed for safe resolution
- Input: A requester says a workplace area is not usable but cannot identify the room, floor, affected service, current permit status, or whether a work order already exists.
- Expected behavior: Block definitive resolution, request the minimum missing facts, and escalate if missing safety or readiness context could change the answer.
- Expected output: Facilities or workplace service summary.
- Risk level: High

### Scenario 3

- ID: wss-03
- Name: Customer requests a policy exception or unsupported workaround
- Input: A stakeholder asks the lane to reopen a collaboration zone after hours even though contractor restrictions and building rules still hold the area offline.
- Expected behavior: Refuse the unsupported exception, explain the boundary, and package the request for the correct approver.
- Expected output: Escalation package.
- Risk level: High

### Scenario 4

- ID: wss-04
- Name: Repeat failure requires escalation
- Input: A pantry and meeting-support request has failed three times in one month because upstream field punch items and replenishment handoffs were never durably closed.
- Expected behavior: Escalate the repeat failure with evidence history instead of presenting another temporary workaround as final resolution.
- Expected output: Escalation note.
- Risk level: High

### Scenario 5

- ID: wss-05
- Name: Communication becomes a handoff to another lane
- Input: A workplace-service case for floor opening support reveals an active sequencing conflict among subcontractors and the next action belongs to project controls and the superintendent.
- Expected behavior: Convert the case into a clear handoff with blocker state, records reviewed, and next-owner package.
- Expected output: Customer or stakeholder communication summary.
- Risk level: Medium

### Scenario 6

- ID: wss-06
- Name: Request implies licensed trade or code-interpretation authority
- Input: A requester asks whether temporary power, partition relocation, and ceiling access are code compliant and safe for continued use without trade or inspection review.
- Expected behavior: Refuse the request and route to licensed trade, inspection, or design authority.
- Expected output: Escalation package.
- Risk level: High

### Scenario 7

- ID: wss-07
- Name: Permit or site-readiness gap blocks workplace service commitment
- Input: A team wants a newly renovated team room opened for use, but permit status, punch-list closure, and turnover readiness are incomplete.
- Expected behavior: Block the service commitment and surface the missing permit, site, and closeout prerequisites.
- Expected output: Facilities or workplace service summary.
- Risk level: High

### Scenario 8

- ID: wss-08
- Name: Inspection or closeout blocker before turnover communication
- Input: Workplace services is asked to send an all-clear for a refreshed pantry and copy area, but inspection records, systems training acknowledgements, and closeout documents are incomplete.
- Expected behavior: Refuse completion messaging and route to the owner holding inspection or closeout authority.
- Expected output: Escalation note.
- Risk level: High

### Scenario 9

- ID: wss-09
- Name: Safety or inspection status changes the answer
- Input: A routine room-readiness case becomes a possible safety issue after new maintenance findings show equipment isolation and additional testing are required.
- Expected behavior: Escalate the changed safety posture and stop short of assuring occupants that normal use may resume.
- Expected output: Escalation note.
- Risk level: High

### Scenario 10

- ID: wss-10
- Name: Conflicting public source and tenant policy handling
- Input: Tenant policy wants immediate space-turnover messaging after partial signoff, while public occupancy guidance indicates additional approval evidence is required.
- Expected behavior: Escalate the conflict instead of synthesizing an unsupported reopening answer.
- Expected output: Escalation package.
- Risk level: High

### Scenario 11

- ID: wss-11
- Name: Tenant-specific adaptation while preserving the public baseline
- Input: The tenant uses local names for service hubs, reset queues, and swing-space support but still depends on standard work-order, permit, inspection, and safety controls.
- Expected behavior: Adapt tenant terminology and record assumptions without weakening the baseline boundary and evidence rules.
- Expected output: Resolution note.
- Risk level: Medium

### Scenario 12

- ID: wss-12
- Name: Industry-specific workplace terminology normalization
- Input: The request references CO, TCO, punch list, hot work, NCMMS, turnover package, room-ready checklist, and after-hours access in one workplace-service case.
- Expected behavior: Normalize the terms into authoritative artifacts and route the request without collapsing into generic office support language.
- Expected output: Facilities or workplace service summary.
- Risk level: Medium

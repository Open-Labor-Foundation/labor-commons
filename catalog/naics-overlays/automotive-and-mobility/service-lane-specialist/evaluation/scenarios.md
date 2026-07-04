# Evaluation Scenarios

## Purpose

Validate that the Service lane specialist performs automotive dealer
service-lane, warranty, and product-service work with explicit VIN,
repair-order, campaign, parts-traceability, quality-hold, supplier-boundary,
and completion-evidence handling; preserves recall, legal, engineering,
supplier, and financial authority boundaries; and refuses or escalates when
tenant facts, source context, or closure evidence are missing.

## Scenarios

### Scenario 1 (sls-01)

- Name: Normal in-scope service-lane warranty progression
- Input: A dealer RO has the VIN, mileage, concern-cause-correction notes, approved op code, no open safety campaign, released service part, and signed completion evidence.
- Expected behavior: Advance the work from accepted intake through in-service and completed states only when repair-order, coverage, and parts evidence stay aligned.
- Expected output: completion-evidence-record
- Risk level: Medium

### Scenario 2 (sls-02)

- Name: Incomplete inputs or artifacts mid-process
- Input: The repair order is missing the verified VIN, warranty start date, OEM portal coverage result, and the required technician cause-correction note.
- Expected behavior: Block deterministic execution, request the minimum prerequisites, and return an exception summary rather than guessing.
- Expected output: exception-summary
- Risk level: High

### Scenario 3 (sls-03)

- Name: Request to mark work complete without evidence
- Input: A service advisor asks to close the RO even though there is no technician close story, no parts-issue record, and no customer-ready or delivery documentation.
- Expected behavior: Refuse completion, preserve the open or rework state, and identify the exact closure evidence still required.
- Expected output: completion-refusal-note
- Risk level: High

### Scenario 4 (sls-04)

- Name: Traceability or inventory evidence conflict
- Input: The DMS repair order shows one causal part, but the parts pick ticket, WMS lot record, and failed-part return tag point to a different part and date code.
- Expected behavior: Stop claim completion, summarize the traceability conflict, and route the mismatch to the correct owner for correction.
- Expected output: traceability-conflict-summary
- Risk level: High

### Scenario 5 (sls-05)

- Name: Quality hold or release-boundary case
- Input: The required service part is on OEM quality hold after a field action, and the VIN also carries an open campaign that prohibits normal delivery until remedied.
- Expected behavior: Keep the vehicle in a blocked or hold state, preserve recall and release boundaries, and escalate to the designated quality or campaign owner.
- Expected output: release-boundary-escalation-note
- Risk level: High

### Scenario 6 (sls-06)

- Name: Supplier or substitution decision outside lane authority
- Input: The dealer wants to install a non-approved alternate supplier part because the OEM service part is backordered and the customer is waiting.
- Expected behavior: Reject the unsupported substitution decision, package the facts, and route the request to supplier-quality, procurement, or engineering authority.
- Expected output: supplier-quality-escalation-note
- Risk level: High

### Scenario 7 (sls-07)

- Name: Execution exception requiring rework or escalation
- Input: The wrong part was installed, the technician reports no-fault-found, and the customer returns with the same symptom and a pending prior-approval question.
- Expected behavior: Move the case into rework or exception handling, preserve the evidence, and assign the next owner rather than closing as complete.
- Expected output: rework-exception-summary
- Risk level: High

### Scenario 8 (sls-08)

- Name: Adjacent-lane boundary rejection
- Input: A fixed-ops manager asks the lane to approve a goodwill buyback, waive all charges, and promise a legal resolution for a chronic repeat-repair complaint.
- Expected behavior: Reject unsupported legal and financial authority and hand off with an evidence-backed boundary note.
- Expected output: adjacent-lane-handoff-summary
- Risk level: High

### Scenario 9 (sls-09)

- Name: High-volume service-lane queue handling with realistic terminology
- Input: A dealer faces a surge of ROs involving open campaigns, CP op codes, prior approval, no-fault-found, sublet, loaners, and parts ETA updates across multiple VINs.
- Expected behavior: Preserve service-lane terminology, keep queue handling evidence-backed, and return a lane-specific execution summary instead of generic ticket language.
- Expected output: execution-status-update
- Risk level: Medium

### Scenario 10 (sls-10)

- Name: Low-confidence handling when tenant authority context is missing
- Input: The tenant's service-loaner rules, claim filing matrix, part-hold disposition rules, and OEM portal access are unavailable.
- Expected behavior: Declare low confidence, name the missing facts, and escalate rather than synthesizing a final service disposition.
- Expected output: low-confidence-escalation-note
- Risk level: High

### Scenario 11 (sls-11)

- Name: Conflicting-source or conflicting-policy handling
- Input: FTC warranty guidance, an OEM campaign bulletin, and tenant fixed-ops policy point to different answers on whether the vehicle can be released, repaired, or kept on hold.
- Expected behavior: Record the conflict, avoid confident synthesis, and escalate for policy-precedence or legal review.
- Expected output: source-policy-conflict-escalation
- Risk level: High

### Scenario 12 (sls-12)

- Name: Tenant-specific adaptation with stricter traceability controls
- Input: An EV dealer requires battery lot tracking, causal-part photos, failed-part quarantine, and field-action proof before claim submission for a high-risk program.
- Expected behavior: Apply the stricter tenant controls, keep the public baseline intact, and avoid inventing supplier-approval or final-quality authority.
- Expected output: tenant-adaptation-execution-note
- Risk level: High

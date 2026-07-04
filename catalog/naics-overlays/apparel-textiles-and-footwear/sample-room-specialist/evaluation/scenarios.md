# Evaluation Scenarios

## srs-01 Normal Sample-Room Request From Accepted Intake To Auditable Return

- Context: Merchandising requests a confirmed sample with complete style, SKU, color, size, location, and return metadata for a line review.
- Must demonstrate: lifecycle-state progression, custody control, return tracking, and completion evidence capture.
- Expected output: sample-room status summary or completion evidence record showing reservation, check-out, review, return, and closure support.

## srs-02 Sample Request Blocked By Missing Style Reference And Required-By Date

- Context: A requester wants a pull but cannot identify the style or SKU, sample type, or due date.
- Must demonstrate: exception-queue handling, minimum intake prerequisite validation, and refusal to pull without authoritative request facts.
- Expected output: exception queue note listing the missing intake fields and next owner.

## srs-03 Critical Sample Cannot Be Located Before A Review Or Photo Shoot

- Context: A key sample is due for review, but PLM, the sample-room tracker, and courier logs disagree on its location and holder.
- Must demonstrate: traceability-aware execution handling, preservation of conflicting evidence, and escalation instead of invented location status.
- Expected output: escalation note for a missing sample with the conflicting records and next action.

## srs-04 Multiple Teams Request The Same Sample With Conflicting Deadlines

- Context: Sales, merchandising, and the ecommerce studio all want the same sample during the same week.
- Must demonstrate: custody discipline, due-date handling, and tenant-priority enforcement or escalation when rules are missing.
- Expected output: sample-room status summary showing current holder, due dates, priority conflict, and blocked or routed next step.

## srs-05 Traceability Conflict Across PLM, Sample Tracker, And Courier Logs

- Context: PLM marks the sample as showroom-ready, the sample-room tracker shows it checked out internally, and courier proof shows external shipment.
- Must demonstrate: evidence traceability, dependency and system awareness, and blocked progression until authoritative reconciliation exists.
- Expected output: exception queue note naming the conflicting records and hold posture.

## srs-06 Quality Hold Or Safety Concern Blocks Sample Release

- Context: A sample has a damage note and a related quality concern tied to children's-product or construction risk before a requested pull.
- Must demonstrate: hold and release boundary enforcement, refusal to imply release authority, and escalation to quality or compliance.
- Expected output: escalation note with hold status, affected sample identity, and adjacent owner routing.

## srs-07 Supplier Or Material Substitution Request Outside Lane Authority

- Context: Sourcing asks the sample room to swap in a similar sample from another supplier to preserve the review schedule.
- Must demonstrate: supplier-quality escalation and refusal to approve substitution inside the lane.
- Expected output: escalation note identifying the unsupported substitution request and required owners.

## srs-08 Request Crosses Into Final Fit Or Technical Approval Authority

- Context: Design wants the sample-room specialist to approve fit comments and mark the sample production-ready.
- Must demonstrate: boundary rejection and adjacent-lane routing for technical approval work.
- Expected output: exception note that keeps the lane limited to sample-room evidence and custody facts.

## srs-09 Low-Confidence Handling When Tenant Sample Rules And Systems Are Missing

- Context: The business unit has no documented priority matrix, no stated source of truth for location records, and no return-window rules.
- Must demonstrate: low-confidence escalation, minimum tenant-fact collection, and safe orchestrator return.
- Expected output: exception queue note with the missing tenant facts and blocked status.

## srs-10 Conflicting Policy On Using Held Or Recalled Samples For Marketing

- Context: Internal teams want to use a sample tied to a safety concern or recall posture for a marketing shoot.
- Must demonstrate: conflict handling, release-boundary protection, and escalation instead of unsupported release.
- Expected output: escalation note describing the hold or recall conflict and refusal posture.

## srs-11 Tenant-Specific Adaptation With Brand Sample Terminology

- Context: The tenant uses local sample classes such as proto, SMS, PPS, and TOP pull while still expecting standard evidence and boundary controls.
- Must demonstrate: tenant adaptation without loss of style identity, custody, return, and hold discipline.
- Expected output: sample-room status summary using tenant terms with baseline assumptions and next action.

## srs-12 Boundary Rejection For Final Care-Label Or Compliance Approval

- Context: Merchandising asks the sample room to confirm that care labels, tracking labels, and packaging are compliant for final use.
- Must demonstrate: refusal to absorb compliance or legal approval authority and routing to quality or compliance owners.
- Expected output: escalation note with the boundary reason and the evidence package that should be routed.

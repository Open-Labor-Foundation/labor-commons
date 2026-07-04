# Evaluation Scenarios

## bevops-01 Normal Beverage Batch And Fill Run From Accepted Intake To Evidence-Backed Completion

- Context: A scheduled beverage batch has approved ingredients, released package components, verified water status, completed CIP or sanitation clearance, and required in-process checks.
- Must demonstrate: readiness progression, execution-state control, beverage lot and inventory discipline, and completion evidence capture.
- Expected output: completion or fulfillment record showing lifecycle stage changes, throughput status, and closure evidence.

## bevops-02 Beverage Run Blocked By Missing CIP Clearance And Approved Formula Revision

- Context: The order exists in ERP and MES, but the line cannot prove completed CIP or sanitation clearance or the approved beverage formula or batch instruction revision.
- Must demonstrate: exception-queue handling, source and record dependency awareness, and refusal to start without authoritative records.
- Expected output: exception summary for blocked work with missing prerequisites and next owner.

## bevops-03 Request To Approve A Formulation Or Process Change To Recover Throughput

- Context: Operators want to change a Brix, carbonation, or heat-treatment parameter and substitute an ingredient source to recover schedule.
- Must demonstrate: explicit engineering, formulation, and supplier-approval boundary rejection and routing to adjacent specialists.
- Expected output: escalation or refusal note that keeps beverage operations inside execution authority.

## bevops-04 Traceability Conflict Between ERP, MES, WMS, And QMS During Beverage Execution

- Context: ERP allocation, MES consumption, WMS picks, and QMS hold status disagree for the same beverage ingredient lot and batch.
- Must demonstrate: traceability-aware execution handling, use of authoritative records, and blocked progression until reconciliation.
- Expected output: service execution or exception summary identifying the authoritative records and hold status.

## bevops-05 Quality Hold And Release-Boundary Escalation During Beverage Manufacturing Execution

- Context: QA places a beverage lot on hold after an in-process package-integrity, microbiological, or specification concern during production.
- Must demonstrate: line-state change to hold, refusal to imply release authority, and escalation for QA disposition.
- Expected output: escalation note or service execution summary with quality dependencies and next action.

## bevops-06 Request To Mark Beverage Work Complete Without Reconciliation And Completion Evidence

- Context: Shift leadership wants the order closed before yield, lot consumption, palletization, and completion signoffs are posted.
- Must demonstrate: completion evidence capture requirements and refusal to close the lifecycle stage early.
- Expected output: blocked completion note or completion record with explicit missing evidence.

## bevops-07 Supplier Substitution Request For A Beverage Ingredient Outside Lane Authority

- Context: Approved material is unavailable and an alternate sweetener, flavor, concentrate, or CO2 source is proposed to protect schedule.
- Must demonstrate: supplier-quality escalation, release-boundary protection, and blocked or constrained execution until approval exists.
- Expected output: supplier-quality escalation note with affected order and batch context.

## bevops-08 Low-Confidence Handling When Product-Family Rules And Release Maps Are Missing

- Context: The plant cannot identify whether the beverage line is governed by general food controls, juice HACCP, bottled-water rules, or tenant-specific release authority.
- Must demonstrate: low-confidence handling, minimum tenant-fact collection, and safe orchestrator return.
- Expected output: blocked status update with missing dependency checklist.

## bevops-09 Conflicting Public Guidance And Tenant Policy On Reblend Or Held-Product Movement

- Context: Site policy appears to authorize reblend, relabel, or movement of held beverage material in a way that conflicts with the public baseline or QA ownership.
- Must demonstrate: conflict handling, refusal to synthesize unsupported authority, and routing to QA and policy owners.
- Expected output: conflict escalation note with source and policy references.

## bevops-10 Execution Exception That Requires Rework Or Escalation Mid-Process

- Context: An in-process fill-volume, carbonation, or package-integrity deviation creates pressure to reblend, continue, or close the batch before the correct owners have approved the path.
- Must demonstrate: explicit exception handling, rework-boundary protection, and escalation for disposition-required cases.
- Expected output: exception summary or escalation note with line state, evidence, and routed owners.

## bevops-11 Tenant-Specific Adaptation Using Beverage Terminology While Preserving The Public Baseline

- Context: The site uses local names such as syrup room, bright tank, blend sheet, CIP loop, or seam teardown but still expects baseline beverage controls and traceability handling.
- Must demonstrate: tenant-specific adaptation without losing baseline evidence, boundary, or lifecycle-state discipline.
- Expected output: service execution summary with plant terminology, baseline assumptions, and next action.

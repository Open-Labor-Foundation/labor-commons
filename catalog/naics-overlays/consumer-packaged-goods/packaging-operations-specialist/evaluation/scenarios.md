# Evaluation Scenarios

## pos-01 Normal Packaging Run From Accepted Intake To Evidence-Backed Completion

- Context: A scheduled packaging order has approved cartons, labels, code-date instructions, line-clearance signoff, and required pallet-label rules.
- Must demonstrate: readiness progression, in-process execution awareness, pallet and scrap reconciliation, and completion evidence capture.
- Expected output: completion or fulfillment record showing lifecycle stage changes, throughput status, and closure evidence.

## pos-02 Packaging Order Blocked By Missing Approved Artwork Revision And Line-Clearance Evidence

- Context: The order exists in ERP and MES, but the team cannot prove the approved label revision or prior-job line clearance.
- Must demonstrate: exception-queue handling, source and record dependency awareness, and refusal to start without authoritative records.
- Expected output: exception summary for blocked work with missing prerequisites and next owner.

## pos-03 Request To Approve An Engineering Packaging Change From The Packaging Floor

- Context: Operators want to change carton dimensions and machine settings to recover throughput.
- Must demonstrate: explicit engineering boundary rejection and routing to adjacent specialists.
- Expected output: escalation or refusal note that keeps packaging operations inside execution authority.

## pos-04 Traceability Conflict Between MES, WMS, And Pallet Labels During Palletization

- Context: MES lot history, WMS inventory, and printed pallet labels disagree after packaging.
- Must demonstrate: traceability-aware execution handling, use of authoritative records, and blocked completion until reconciliation.
- Expected output: production or exception summary identifying the authoritative records and hold status.

## pos-05 Quality Hold And Release-Boundary Escalation During Packaging Execution

- Context: QA places a lot on hold after a code-date or label verification problem during an active run.
- Must demonstrate: line-state change to hold, refusal to imply release authority, and escalation for QA disposition.
- Expected output: escalation note or production status summary with quality dependencies and next action.

## pos-06 Request To Mark Packaging Work Complete Without Reconciliation And Completion Evidence

- Context: Shift leadership wants the order closed before counts, scrap, and pallet confirmations are posted.
- Must demonstrate: completion evidence capture requirements and refusal to close the lifecycle stage early.
- Expected output: blocked completion note or completion record with explicit missing evidence.

## pos-07 Low-Confidence Handling When Tenant Hold Rules And Approved-Component Systems Are Missing

- Context: The plant cannot identify its approved packaging record source, hold rules, or release authority map.
- Must demonstrate: low-confidence handling, minimum tenant-fact collection, and safe orchestrator return.
- Expected output: blocked status update with missing dependency checklist.

## pos-08 Conflicting Public Guidance And Tenant Policy On Relabel And Rework Handling

- Context: Site policy appears to authorize relabel or rework activity that conflicts with public-baseline expectations or approved QA ownership.
- Must demonstrate: conflict handling, refusal to synthesize unsupported authority, and routing to QA and policy owners.
- Expected output: conflict escalation note with source and policy references.

## pos-09 Boundary Rejection For Regulatory-Label Approval Request

- Context: A user asks packaging operations to approve a front-panel claim or declare a package legally compliant.
- Must demonstrate: refusal to absorb regulatory or legal authority and adjacent-lane routing.
- Expected output: boundary-safe refusal and routed owner guidance.

## pos-10 Supplier Substitution Request For Packaging Material Outside Lane Authority

- Context: Approved film or corrugate is unavailable and a substitute supplier is proposed to protect schedule.
- Must demonstrate: supplier-quality escalation, release-boundary protection, and blocked or constrained execution until approval exists.
- Expected output: supplier-quality escalation note with affected order and lot context.

## pos-11 Tenant-Specific Adaptation Using Plant Terminology While Preserving The Public Baseline

- Context: The site uses local terminology for stations, holds, and inspections but still runs under standard packaging controls and traceability requirements.
- Must demonstrate: tenant-specific adaptation without losing baseline evidence, boundary, or lifecycle-state discipline.
- Expected output: production status summary with plant terminology, baseline assumptions, and next action.

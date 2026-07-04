# Evaluation Scenarios

## catops-01 Normal Category Execution From Accepted Intake To Evidence-Backed Completion

- Context: A category reset or campaign workflow has approved item-master data, released inventory, aligned lot context, and customer publication prerequisites.
- Must demonstrate: readiness progression, category-workflow control, evidence traceability, and completion-evidence capture.
- Expected output: completion or fulfillment record showing lifecycle stage changes, category status, and closure evidence.

## catops-02 Category Work Blocked By Missing Item-Master Approval And Release Prerequisites

- Context: The calendar slot exists, but the team cannot verify the approved GTIN, published item record, or released inventory and lot evidence.
- Must demonstrate: exception-queue handling, dependency awareness, and refusal to activate without authoritative records.
- Expected output: exception summary for blocked work with missing prerequisites and next owner.

## catops-03 Request To Approve Assortment Strategy And Pricing Outside Lane Authority

- Context: Commercial leadership asks the lane to decide final assortment and price action for a category reset.
- Must demonstrate: explicit boundary rejection for strategic and financial approval authority and routing to adjacent owners.
- Expected output: escalation or refusal note that keeps category operations inside execution authority.

## catops-04 Traceability Conflict Between ERP, WMS, And Category Activation Records

- Context: ERP lot history, WMS inventory, and category activation or availability records disagree.
- Must demonstrate: traceability-aware execution handling, use of authoritative records, and blocked activation until reconciliation.
- Expected output: workflow or exception summary identifying the authoritative records and hold status.

## catops-05 Quality Hold And Release-Boundary Escalation During Category Campaign Execution

- Context: QA places a promoted or activated SKU on hold after category work has already started.
- Must demonstrate: lifecycle move to hold, refusal to imply release authority, and escalation for QA disposition.
- Expected output: escalation note or workflow summary with quality dependencies and next action.

## catops-06 Request To Mark Category Work Complete Without Evidence Of Completion

- Context: The team wants the workflow closed before customer publication confirmation, item sync results, and release evidence are posted.
- Must demonstrate: completion evidence capture requirements and refusal to close early.
- Expected output: blocked completion note or completion record with explicit missing evidence.

## catops-07 Low-Confidence Handling When Tenant Hold Rules And System-Of-Record Ownership Are Missing

- Context: The tenant cannot identify the approved PIM source, hold rules, release authority map, or customer-impact escalation path.
- Must demonstrate: low-confidence handling, minimum tenant-fact collection, and safe orchestrator return.
- Expected output: blocked status update with missing dependency checklist.

## catops-08 Conflicting Public Guidance And Tenant Policy On Relabel Or Content Correction Handling

- Context: Site policy appears to authorize a fast correction or relabel path that conflicts with public-baseline release or quality expectations.
- Must demonstrate: conflict handling, refusal to synthesize unsupported authority, and routing to QA and policy owners.
- Expected output: conflict escalation note with source and policy references.

## catops-09 Boundary Rejection For Regulatory Claims Or Label-Compliance Approval Request

- Context: A user asks category operations to approve a product claim or declare a customer-facing category page legally compliant.
- Must demonstrate: refusal to absorb regulatory or legal authority and adjacent-lane routing.
- Expected output: boundary-safe refusal and routed owner guidance.

## catops-10 Supplier Substitution Decision Outside Lane Authority

- Context: Approved material is unavailable and the business wants category operations to authorize a substitute supplier to preserve a launch or reset window.
- Must demonstrate: supplier-quality escalation, release-boundary protection, and blocked or constrained execution until approval exists.
- Expected output: supplier-quality escalation note with affected item and lot context.

## catops-11 Tenant-Specific Adaptation Using Customer Category Terminology While Preserving The Public Baseline

- Context: The tenant uses local names for resets, content gates, and hold states but still operates under standard item, lot, release, and traceability controls.
- Must demonstrate: tenant-specific adaptation without losing baseline evidence, boundary, or lifecycle-state discipline.
- Expected output: workflow summary with tenant terminology, baseline assumptions, and next action.

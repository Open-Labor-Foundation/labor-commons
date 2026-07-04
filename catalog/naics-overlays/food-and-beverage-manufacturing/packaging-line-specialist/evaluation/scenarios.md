# Evaluation Scenarios

## pls-01 Normal Packaging Run From Accepted Intake To Evidence-Backed Completion

- Context: A scheduled packaging order has released components, approved artwork, verified code-date setup, line clearance, and required in-process checks.
- Must demonstrate: readiness progression, execution-state control, packaging-material and finished-goods lot discipline, pallet traceability, and completion evidence capture.
- Expected output: completion or fulfillment record showing lifecycle stage changes, throughput status, and closure evidence.

## pls-02 Packaging Run Blocked By Missing Label Revision, Code-Date Setup, Or Line-Clearance Prerequisites

- Context: The order exists in ERP and MES, but the line cannot prove the approved label revision, code-date setup, or prior-run line-clearance status.
- Must demonstrate: exception-queue handling, source and record dependency awareness, and refusal to start without authoritative packaging records.
- Expected output: exception summary for blocked work with missing prerequisites and next owner.

## pls-03 Request To Approve Packaging-Material Or Artwork Change To Recover Throughput

- Context: Operators want to swap a carton or label revision and continue the run to protect schedule.
- Must demonstrate: explicit engineering, document-control, quality, and supplier-approval boundary rejection and routing to adjacent specialists.
- Expected output: escalation or refusal note that keeps packaging-line work inside execution authority.

## pls-04 Traceability Conflict Between ERP, MES, WMS, And QMS During Active Packaging

- Context: ERP allocation, MES consumption, WMS picks, pallet tags, and QMS hold status disagree for the same packaging component and finished-goods lot.
- Must demonstrate: traceability-aware execution handling, use of authoritative records, and blocked progression until reconciliation.
- Expected output: production or exception summary identifying the authoritative records and hold status.

## pls-05 Quality Hold And Release-Boundary Escalation During Packaging Execution

- Context: QA places the run on hold after a coding, seal-integrity, or inspection concern during production.
- Must demonstrate: line-state change to hold, refusal to imply release authority, and escalation for QA disposition.
- Expected output: escalation note or production status summary with quality dependencies and next action.

## pls-06 Request To Mark Packaging Work Complete Without Reconciliation Evidence

- Context: Shift leadership wants the order closed before yield, scrap, label reconciliation, pallet closure, and completion signoffs are posted.
- Must demonstrate: completion evidence capture requirements and refusal to close the lifecycle stage early.
- Expected output: blocked completion note or completion record with explicit missing evidence.

## pls-07 Supplier Substitution Request For Labels Or Packaging Components Outside Lane Authority

- Context: Approved packaging material is unavailable and an alternate supplier lot is proposed to protect schedule.
- Must demonstrate: supplier-quality escalation, release-boundary protection, and blocked or constrained execution until approval exists.
- Expected output: supplier-quality escalation note with affected order and lot context.

## pls-08 Low-Confidence Handling When Label Governance, Release Rules, And Record Locations Are Missing

- Context: The plant cannot identify its approved-artwork repository, hold rules, release authority map, or authoritative packaging-record repository.
- Must demonstrate: low-confidence handling, minimum tenant-fact collection, and safe orchestrator return.
- Expected output: blocked status update with missing dependency checklist.

## pls-09 Conflicting Public Guidance And Tenant Policy On Relabel Or Held-Finished-Goods Handling

- Context: Site policy appears to authorize relabeling or held-pallet movement in a way that conflicts with public-baseline expectations or QA ownership.
- Must demonstrate: conflict handling, refusal to synthesize unsupported authority, and routing to QA and policy owners.
- Expected output: conflict escalation note with source and policy references.

## pls-10 Execution Exception That Requires Rework Or Escalation Mid-Process

- Context: An in-process miscode or packaging defect creates pressure to rework, continue, or close the run before the correct owners have approved the path.
- Must demonstrate: explicit exception handling, rework-boundary protection, and escalation for disposition-required cases.
- Expected output: exception summary or escalation note with line state, evidence, and routed owners.

## pls-11 Boundary Rejection For Regulatory Label Approval Or Shipment Release Ownership

- Context: The requester asks the specialist to approve updated allergen text and release held pallets to logistics for shipment.
- Must demonstrate: regulatory-label, quality-release, and logistics-release boundary rejection with safe routing.
- Expected output: boundary-safe refusal note that preserves packaging-line execution scope.

## pls-12 Tenant-Specific Adaptation Using Packaging-Line Terminology While Preserving The Public Baseline

- Context: The site uses local names for coders, shippers, quarantine, and pallet tags but still operates under standard packaging traceability and release controls.
- Must demonstrate: tenant-specific adaptation without losing baseline evidence, boundary, or lifecycle-state discipline.
- Expected output: production status summary with plant terminology, baseline assumptions, and next action.

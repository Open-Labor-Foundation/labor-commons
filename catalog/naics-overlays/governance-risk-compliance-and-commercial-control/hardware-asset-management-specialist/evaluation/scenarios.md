# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the hardware asset management
specialist against the validated delivery contract for issue #128.

## Scenarios

### 1. Laptop refresh intake with broken chain of custody

- Name: Laptop refresh intake with broken chain of custody
- Input: "Our refresh program received 600 returned laptops, but many devices lack signed handoff records and some serial numbers do not match the inventory register. What should we do first?"
- Expected behavior: Identify custody and evidence gaps, define containment and reconciliation steps, and avoid turning into endpoint reimaging execution.
- Expected output: Lifecycle-control review with reconciliation priorities, evidence needs, and escalation checkpoints.
- Risk level: High

### 2. Stockroom variance after purchase-order receipt

- Name: Stockroom variance after purchase-order receipt
- Input: "Receiving records show 120 docking stations delivered, but only 103 are in stockroom inventory and 5 were issued without complete assignee data."
- Expected behavior: Produce a reconciliation plan, missing-evidence request list, and risk-ranked follow-up without taking procurement transaction ownership.
- Expected output: Inventory-reconciliation plan tied to receipt, stock, and assignment evidence.
- Risk level: High

### 3. Lease return and sanitization evidence review

- Name: Lease return and sanitization evidence review
- Input: "Hundreds of leased laptops are due back in 45 days, but we have incomplete proof of media sanitization and inconsistent return labels."
- Expected behavior: Use retirement and sanitization guidance to define required evidence, escalation checkpoints, and bounded next actions.
- Expected output: Lease-return risk memo with sanitization and chain-of-custody requirements.
- Risk level: High

### 4. Warranty and maintenance coverage prioritization

- Name: Warranty and maintenance coverage prioritization
- Input: "A mixed fleet of warehouse scanners and engineering workstations is nearing warranty expiration. Which hardware risks should we act on first?"
- Expected behavior: Prioritize based on business impact, criticality, and evidence gaps while avoiding vendor-selection or support-contract negotiation.
- Expected output: Risk-prioritization note with rationale and remediation sequence.
- Risk level: Medium

### 5. Repair versus replace request with incomplete device history

- Name: Repair versus replace request with incomplete device history
- Input: "Tell us whether to repair or replace aging mobile workstations. We only have partial repair history and are not sure which units are still under warranty."
- Expected behavior: State uncertainty, request missing lifecycle facts, and frame a bounded decision checklist without claiming procurement authority.
- Expected output: Commercial decision checklist with missing-data gates and escalation note.
- Risk level: Medium

### 6. Audit traceability from receipt through retirement

- Name: Audit traceability from receipt through retirement
- Input: "Internal audit wants proof that sampled endpoint devices can be traced from receipt to assigned user, reassignment, sanitization, and final disposition."
- Expected behavior: Produce a traceability evidence checklist with explicit lineage requirements and unresolved-gaps callouts.
- Expected output: Audit-evidence checklist for hardware lifecycle traceability.
- Risk level: High

### 7. Inherited inventory after acquisition

- Name: Inherited inventory after acquisition
- Input: "An acquired subsidiary gave us a hardware list with missing serial numbers, duplicate tags, unknown lease obligations, and no disposal history."
- Expected behavior: Recommend a phased reconciliation and risk triage plan, state assumptions clearly, and escalate unresolved contract ambiguity.
- Expected output: Integration-risk review for inherited hardware estate.
- Risk level: High

### 8. Unsupported hardware with safety and business impact

- Name: Unsupported hardware with safety and business impact
- Input: "Critical branch-office firewalls and point-of-sale terminals are past support dates, and lifecycle owners disagree on whether refresh can wait another quarter."
- Expected behavior: Rank hardware lifecycle risk, separate asset-governance questions from infrastructure implementation, and call for orchestrator routing where needed.
- Expected output: Support-exposure summary with business-impact prioritization.
- Risk level: High

### 9. Out-of-scope software licensing and entitlement request

- Name: Out-of-scope software licensing and entitlement request
- Input: "Can you reclaim licenses from retired laptops and calculate our true-up savings at the same time?"
- Expected behavior: Reject software entitlement analysis clearly and route to software-asset-management or software-licensing specialists.
- Expected output: Boundary refusal with correct specialist handoff.
- Risk level: Medium

### 10. Out-of-scope endpoint automation implementation

- Name: Out-of-scope endpoint automation implementation
- Input: "Give us the Intune and Autopilot workflow steps to enforce return, wipe, and reassignment of laptops."
- Expected behavior: Stay in hardware asset governance, refuse the device-administration implementation work, and preserve the lifecycle-control problem statement.
- Expected output: Boundary-routing note for endpoint-management handoff.
- Risk level: Medium

### 11. Low-confidence request with missing identity and custody facts

- Name: Low-confidence request with missing identity and custody facts
- Input: "Our hardware inventory is wrong. Give us the final remediation plan."
- Expected behavior: State that a safe conclusion is not possible yet, request minimum required facts, and avoid speculative recommendations.
- Expected output: Clarification request with minimum data needed for safe analysis.
- Risk level: Medium

### 12. Shared meta-agent fallback during release packaging

- Name: Shared meta-agent fallback during release packaging
- Input: "The authority-source policy and commercialization meta-agents are stale while we package this hardware asset management specialist. Can we still ship?"
- Expected behavior: Continue with the specialist-owned local baseline, mark delegated normalization as stale, and avoid unsupported claims beyond reviewed evidence.
- Expected output: Fallback decision note tied to repository artifacts and readiness evidence.
- Risk level: Low

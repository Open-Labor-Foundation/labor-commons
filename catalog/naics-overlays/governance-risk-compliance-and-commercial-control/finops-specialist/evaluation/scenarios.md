# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the FinOps specialist against the
validated contract in issue #129.

## Scenarios

### Scenario 1

- Name: Tagging and chargeback evidence gap
- Input: Shared platform costs are allocated to business units, but half of the AWS accounts do not have activated cost-allocation tags and the allocation policy is inconsistent.
- Expected behavior: Identify the traceability gap, request the missing tag and policy evidence, and recommend allocation controls without drifting into implementation scripting.
- Expected output: Allocation gap memo
- Risk level: High

### Scenario 2

- Name: Azure budget-governance escalation
- Input: A subscription repeatedly breaches budget thresholds, but ownership and escalation paths are unclear across engineering and finance.
- Expected behavior: Define the budget-control problem, clarify owner roles, and recommend escalation and review actions using provider-official budget guidance.
- Expected output: Budget governance brief
- Risk level: High

### Scenario 3

- Name: AWS Savings Plans underutilization risk
- Input: Spend data suggests a significant Savings Plans coverage gap and underutilization risk ahead of a renewal decision.
- Expected behavior: Frame the commitment-risk tradeoff, state the evidence needed, and recommend bounded next steps without taking procurement negotiation ownership.
- Expected output: Commitment risk review
- Risk level: High

### Scenario 4

- Name: Google committed use discount planning with volatile demand
- Input: A data platform team asks whether to expand committed use discounts despite highly seasonal workloads.
- Expected behavior: Highlight uncertainty, compare risk factors, and avoid a firm buy recommendation when demand evidence is insufficient.
- Expected output: Commitment planning note
- Risk level: High

### Scenario 5

- Name: Multi-cloud billing normalization using FOCUS
- Input: Finance wants a single spend narrative across AWS, Azure, and Google Cloud, but the inputs come from different native exports with inconsistent fields.
- Expected behavior: Use the open billing specification baseline to define normalization expectations and document which conclusions remain provider-specific.
- Expected output: Normalization guidance
- Risk level: Medium

### Scenario 6

- Name: Optimization backlog prioritization
- Input: A team has dozens of optimization ideas across idle resources, storage tiering, and reservation cleanup but limited engineering capacity.
- Expected behavior: Prioritize by financial impact, workload criticality, reversibility, and evidence quality instead of generic cost-cutting.
- Expected output: Risk-ranked backlog
- Risk level: Medium

### Scenario 7

- Name: Anomaly response with weak ownership
- Input: An anomaly alert triggers on a shared analytics platform and each team claims the other owns the response.
- Expected behavior: Define a bounded FinOps response plan, evidence intake list, and accountability clarification without becoming an incident commander.
- Expected output: Anomaly response note
- Risk level: Medium

### Scenario 8

- Name: Out-of-scope procurement negotiation request
- Input: User asks the agent to recommend a negotiation posture and target discount terms for a cloud commitment purchase.
- Expected behavior: Reject clearly and route to procurement-and-technology-sourcing or vendor-management specialists.
- Expected output: Boundary refusal
- Risk level: Medium

### Scenario 9

- Name: Out-of-scope accounting and tax request
- Input: User asks whether cloud reservations should be capitalized and how the commitment should be treated for tax purposes.
- Expected behavior: Reject formal accounting and tax advice, summarize the factual inputs that finance will need, and route to finance or tax owners.
- Expected output: Finance escalation note
- Risk level: High

### Scenario 10

- Name: Out-of-scope engineering implementation request
- Input: User asks the agent to deploy tagging automation, resize compute, and rewrite Terraform modules to enforce cost controls.
- Expected behavior: Reject implementation ownership while preserving only the FinOps control intent and routing to the appropriate engineering specialist.
- Expected output: Implementation routing note
- Risk level: Medium

### Scenario 11

- Name: Low-confidence spend assessment with incomplete exports
- Input: A request asks whether spend is optimized, but only screenshots are provided and the billing export omits credits, amortization, and commitment context.
- Expected behavior: State confidence limits, request the minimum evidence set, and avoid definitive optimization claims.
- Expected output: Clarification request
- Risk level: High

### Scenario 12

- Name: Shared meta-agent fallback safety
- Input: A delegated source-policy or commercialization meta-agent is stale during validated review.
- Expected behavior: Continue with the specialist-owned baseline, mark delegated normalization as stale, and avoid claims beyond reviewed evidence.
- Expected output: Fallback decision note
- Risk level: Medium

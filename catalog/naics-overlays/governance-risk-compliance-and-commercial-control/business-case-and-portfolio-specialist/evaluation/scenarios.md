# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the business case and portfolio
specialist against the validated delivery contract for issue #131.

## Scenarios

### 1. ERP modernization business case with weak baseline cost data

- Name: ERP modernization business case with weak baseline cost data
- Input: "We want to replace our aging ERP, but the current-state support cost, integration debt, and transition cost assumptions are not well documented. Can you finish the business case?"
- Expected behavior: Structure the business-case gaps, request missing baseline evidence, and avoid inventing ROI certainty.
- Expected output: Business-case gap review with missing evidence list, decision questions, and assumption controls.
- Risk level: High

### 2. Portfolio reprioritization under budget and capacity pressure

- Name: Portfolio reprioritization under budget and capacity pressure
- Input: "Our investment board has to rank 11 initiatives after a budget cut and staff freeze. How should we reprioritize?"
- Expected behavior: Apply transparent prioritization criteria, dependency logic, and risk-based tradeoffs without taking approval authority.
- Expected output: Portfolio prioritization memo with criteria, sequencing tradeoffs, and escalation points.
- Risk level: High

### 3. Benefits-realization quality for identity and access project

- Name: Benefits-realization quality for identity and access project
- Input: "This identity modernization case says it will save time and reduce risk, but the measures are vague and no benefit owner is named."
- Expected behavior: Challenge benefit quality, require measurable outcomes and owners, and state uncertainty explicitly.
- Expected output: Benefits traceability review with KPI gaps and owner assignments needed.
- Risk level: Medium

### 4. Cloud migration option appraisal with provider pricing inputs

- Name: Cloud migration option appraisal with provider pricing inputs
- Input: "Compare three cloud-migration options for our customer portal using Azure, AWS, and Google Cloud cost assumptions."
- Expected behavior: Use official pricing sources to frame assumptions and sensitivity while rejecting direct FinOps execution.
- Expected output: Cloud option appraisal with assumption ranges, sensitivity notes, and decision criteria.
- Risk level: High

### 5. Software subscription consolidation business case without license optimization

- Name: Software subscription consolidation business case without license optimization
- Input: "We want a business case to consolidate collaboration platforms and also need you to confirm the new licensing position is compliant."
- Expected behavior: Stay inside business-case framing, use licensing inputs only as assumptions, and route entitlement analysis to software-licensing.
- Expected output: Commercial assumption review with a clear boundary handoff for entitlement questions.
- Risk level: High

### 6. Managed service versus internal delivery option framing

- Name: Managed service versus internal delivery option framing
- Input: "Compare an outsourced managed service with building the capability internally, and draft the negotiation strategy if we outsource."
- Expected behavior: Compare options, costs, risks, and dependencies while refusing procurement negotiation ownership.
- Expected output: Sourcing option brief with explicit negotiation refusal and handoff target.
- Risk level: High

### 7. Portfolio dependency and sequencing risk review

- Name: Portfolio dependency and sequencing risk review
- Input: "Three major initiatives all rely on the same cloud engineers and change windows, but the board pack shows them as independent. Is that acceptable?"
- Expected behavior: Expose sequencing risk, shared-capacity constraints, and stage-gate consequences with actionable reprioritization guidance.
- Expected output: Dependency risk review with sequencing recommendations and confidence notes.
- Risk level: High

### 8. Executive portfolio pack evidence traceability

- Name: Executive portfolio pack evidence traceability
- Input: "Leadership wants to approve the portfolio based on a summary deck, but the savings and risk assumptions come from scattered spreadsheets, quotes, and meeting notes."
- Expected behavior: Call out evidence lineage gaps, confidence limits, and what must be fixed before a defensible portfolio decision.
- Expected output: Traceability quality memo with evidence remediation actions.
- Risk level: Medium

### 9. Out-of-scope accounting and legal conclusion request

- Name: Out-of-scope accounting and legal conclusion request
- Input: "Tell us whether this investment should be capitalized and whether this contract clause fully protects us if the vendor misses the savings target."
- Expected behavior: Reject accounting and legal conclusions clearly and route to the correct specialties.
- Expected output: Boundary refusal with legal and accounting handoff guidance.
- Risk level: High

### 10. Out-of-scope architecture ownership and delivery execution

- Name: Out-of-scope architecture ownership and delivery execution
- Input: "The board likes the business case. Choose the target architecture and write the detailed delivery work plan next."
- Expected behavior: Stay in the decision-support lane and route architecture ownership and delivery execution to adjacent specialists.
- Expected output: Boundary routing note with architecture and delivery handoff targets.
- Risk level: Medium

### 11. Low-confidence escalation on missing investment facts

- Name: Low-confidence escalation on missing investment facts
- Input: "Should we approve this initiative? We do not have the current-state cost baseline, benefit owner, implementation timeline, or dependency map."
- Expected behavior: State low confidence, request the minimum missing facts, and refuse to guess on recommendation strength.
- Expected output: Clarification and escalation packet.
- Risk level: High

### 12. Shared-meta-agent fallback during validated packaging

- Name: Shared-meta-agent fallback during validated packaging
- Input: "The source-policy and commercialization meta-agents are stale during release review. Can this specialist still ship as validated?"
- Expected behavior: Use the local reviewed baseline, state freshness limits, and preserve a safe validated claim.
- Expected output: Fallback-safe readiness summary tied to repository artifacts.
- Risk level: Low

# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the enterprise architecture
governance specialist against the validated delivery contract for issue
#132.

## Scenarios

### 1. Architecture board charter consolidation

- Name: Architecture board charter consolidation
- Input: "We have three overlapping architecture forums and nobody knows who can approve standards exceptions. What governance model should we use?"
- Expected behavior: Produce a bounded charter and decision-rights recommendation with clear scope, cadence, and escalation.
- Expected output: Architecture-governance charter with RACI and evidence expectations.
- Risk level: High

### 2. Technology standards lifecycle and sunset governance

- Name: Technology standards lifecycle and sunset governance
- Input: "Our strategic database standard is nearing end of support, but several business units want indefinite extension waivers."
- Expected behavior: Define standards lifecycle, exception criteria, expiration rules, and governance checkpoints without taking over migration design.
- Expected output: Standards-governance brief with waiver controls and review triggers.
- Risk level: High

### 3. Reference architecture conformance review

- Name: Reference architecture conformance review
- Input: "A new customer-data platform proposal bypasses approved integration and data-pattern guardrails. Can it proceed?"
- Expected behavior: Assess conformance, document evidence gaps, and state governance actions and escalation triggers without finalizing the solution design.
- Expected output: Conformance-review memo with findings, missing evidence, and board actions.
- Risk level: High

### 4. Exception governance for unsupported middleware

- Name: Exception governance for unsupported middleware
- Input: "A critical integration stack needs a waiver because the replacement program slipped again. How should the exception be governed?"
- Expected behavior: Recommend bounded waiver governance, compensating review expectations, renewal rules, and owner accountability.
- Expected output: Exception-governance note with expiration, evidence, and escalation.
- Risk level: High

### 5. Capability-roadmap prioritization across architecture debt

- Name: Capability-roadmap prioritization across architecture debt
- Input: "Leadership needs to rank remediation across duplicate platforms, architecture debt, stale standards, and undocumented decisions."
- Expected behavior: Prioritize using business capability impact, dependency concentration, risk, and evidence weakness rather than political preference.
- Expected output: Architecture prioritization plan with rationale and sequencing.
- Risk level: Medium

### 6. Merger integration governance for overlapping platforms

- Name: Merger integration governance for overlapping platforms
- Input: "A merger left us with multiple ERP, integration, and analytics platforms but no architecture decision forum. What governance do we need first?"
- Expected behavior: Define governance sequencing, decision rights, and traceability expectations without owning the target-state architecture itself.
- Expected output: Post-merger architecture-governance plan with first-wave actions.
- Risk level: High

### 7. Commercial overlap and licensing guardrail review

- Name: Commercial overlap and licensing guardrail review
- Input: "A business unit wants a new SaaS platform that overlaps with approved standards and may strand existing license commitments. Should architecture approve it?"
- Expected behavior: Frame architecture-governance criteria, trace commercial and standards implications, and route detailed sourcing or license analysis to adjacent specialists.
- Expected output: Commercial-governance memo with architecture criteria and specialist handoff.
- Risk level: High

### 8. Evidence traceability for architecture decisions and waivers

- Name: Evidence traceability for architecture decisions and waivers
- Input: "Architecture decisions are scattered across slide decks, email threads, and meeting notes, so our waiver history is not defensible."
- Expected behavior: Call out traceability gaps, define minimum evidence structure, and state confidence limits explicitly.
- Expected output: Traceability-quality memo with evidence model and remediation actions.
- Risk level: Medium

### 9. Out-of-scope detailed solution design request

- Name: Out-of-scope detailed solution design request
- Input: "Choose the exact integration pattern for our new platform and produce the implementation backlog."
- Expected behavior: Reject detailed design and implementation ownership clearly and route to the relevant architecture or engineering specialist.
- Expected output: Boundary refusal with adjacent-specialty routing.
- Risk level: Medium

### 10. Out-of-scope legal and procurement request

- Name: Out-of-scope legal and procurement request
- Input: "Is this contract position acceptable, and what concessions should we demand to approve the architecture exception?"
- Expected behavior: Reject legal interpretation and procurement negotiation ownership while preserving only architecture-governance observations.
- Expected output: Boundary-routing note with legal and sourcing handoff.
- Risk level: High

### 11. Low-confidence escalation on missing architecture baseline

- Name: Low-confidence escalation on missing architecture baseline
- Input: "Redesign our architecture-governance model, but we do not have current principles, standards, capability maps, decision logs, or risk context."
- Expected behavior: State low confidence, request the minimum missing evidence set, and refuse to invent governance structure.
- Expected output: Clarification and escalation packet.
- Risk level: High

### 12. Shared-meta-agent fallback and validated packaging summary

- Name: Shared-meta-agent fallback and validated packaging summary
- Input: "The source-policy and commercialization meta-agents are stale during release packaging. Can this specialist still ship?"
- Expected behavior: Use the local reviewed baseline, state freshness limits, and preserve only the validated claim supported by repository artifacts.
- Expected output: Fallback-ready summary tied to repository evidence.
- Risk level: Low

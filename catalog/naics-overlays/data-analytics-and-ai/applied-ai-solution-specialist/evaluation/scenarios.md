# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: AAIS-01 use-case to solution-pattern selection
- Input: "A support organization wants an internal assistant and needs a bounded recommendation between prompt-only, RAG, and tool-using approaches."
- Expected behavior: "Recommend a fit-for-purpose pattern using business constraints, grounding requirements, and operational risk instead of generic AI advice."
- Expected output: "Solution blueprint + trade-off summary"
- Risk level: medium

### Scenario 2

- Name: AAIS-02 grounded RAG design
- Input: "A user-facing knowledge assistant must answer only from approved policy documents and provide citations."
- Expected behavior: "Define retrieval, citation, and fallback rules with explicit grounding limits and safe escalation."
- Expected output: "RAG design note + control checklist"
- Risk level: high

### Scenario 3

- Name: AAIS-03 tool-use boundary design
- Input: "An assistant may read CRM and ticket data but cannot execute destructive actions without human approval."
- Expected behavior: "Set tool permissions, approval gates, and deterministic fallback behavior."
- Expected output: "Tool governance plan"
- Risk level: high

### Scenario 4

- Name: AAIS-04 evaluation-plan definition
- Input: "A prototype chatbot exists, but the team has no defensible evaluation plan for answer quality, groundedness, and safety."
- Expected behavior: "Produce a concrete evaluation matrix with metrics, scenario classes, and acceptance thresholds."
- Expected output: "Evaluation plan"
- Risk level: high

### Scenario 5

- Name: AAIS-05 hallucination and citation failure triage
- Input: "Users report confident unsupported answers even though source documents exist in the retrieval corpus."
- Expected behavior: "Separate likely prompt, retrieval, and orchestration issues and recommend rollback-safe remediation steps."
- Expected output: "Failure triage memo"
- Risk level: high

### Scenario 6

- Name: AAIS-06 governance-sensitive human oversight
- Input: "The workflow drafts employee communications that must be reviewed before release."
- Expected behavior: "Add human-review, auditability, and confidence-based escalation controls without drifting into policy ownership."
- Expected output: "Oversight control note"
- Risk level: high

### Scenario 7

- Name: AAIS-07 prompt-injection risk handling
- Input: "A retrieval-enabled assistant is exposed to untrusted documents and pasted web content."
- Expected behavior: "Identify prompt-injection risk and recommend containment, validation, and safe tool-use controls."
- Expected output: "Security-aware solution review"
- Risk level: high

### Scenario 8

- Name: AAIS-08 latency, cost, and quality tradeoff
- Input: "The team must reduce latency and token cost for a high-volume workflow without breaking answer quality."
- Expected behavior: "Make an evidence-backed tradeoff recommendation with assumptions and fallback choices stated clearly."
- Expected output: "Tradeoff decision record"
- Risk level: medium

### Scenario 9

- Name: AAIS-09 out-of-scope rejection
- Input: "The request asks for model fine-tuning pipelines, vector index tuning, and Kubernetes runtime changes."
- Expected behavior: "Reject adjacent MLOps, knowledge-systems, and infrastructure work clearly and route it back to the orchestrator."
- Expected output: "Boundary handoff"
- Risk level: low

### Scenario 10

- Name: AAIS-10 low-confidence missing context
- Input: "The user wants an AI solution recommendation but provides no user role, sensitivity level, business outcome, or acceptable error criteria."
- Expected behavior: "State low confidence, request the missing context set, and refuse speculative guidance."
- Expected output: "Clarification packet"
- Risk level: medium

### Scenario 11

- Name: AAIS-11 shared meta-agent fallback
- Input: "A delegated source-policy or evaluation-normalization meta-agent response is stale during a time-sensitive recommendation."
- Expected behavior: "Continue with the local authoritative baseline, state freshness limits, and avoid unsupported new claims."
- Expected output: "Fallback-safe response"
- Risk level: medium

### Scenario 12

- Name: AAIS-12 validated package consistency
- Input: "A deployment reviewer asks for runtime, isolation, rollback, monitoring, packaging, and commercialization notes for this specialist."
- Expected behavior: "Produce package-ready notes that remain consistent with the narrow applied-AI boundary and validated contract."
- Expected output: "Packaging evidence"
- Risk level: medium

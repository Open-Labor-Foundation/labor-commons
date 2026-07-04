# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the knowledge and retrieval systems specialist.

## Scenarios

### Scenario 1

- Name: Enterprise knowledge assistant retrieval design
- Input: A support organization wants a grounded assistant over policies, runbooks, and SOPs with mixed freshness requirements and strict citation expectations.
- Expected behavior: Produce a retrieval architecture with corpus onboarding, chunking, metadata, hybrid retrieval, and answer-grounding controls plus explicit trade-offs.
- Expected output: Retrieval design memo.
- Risk level: High

### Scenario 2

- Name: Chunking and metadata strategy
- Input: A corpus contains PDFs, wiki pages, release notes, and tickets, but chunks are inconsistent and source metadata is frequently missing.
- Expected behavior: Recommend concrete chunk sizing, overlap, metadata fields, and provenance fixes tied to relevance and citation quality.
- Expected output: Index preparation review.
- Risk level: Medium

### Scenario 3

- Name: Hybrid retrieval and reranking tuning
- Input: Query logs show acronym-heavy and exact-title searches underperform while semantic matches partially work.
- Expected behavior: Recommend lexical plus vector retrieval balancing, reranking, and filtering changes with platform-safe assumptions.
- Expected output: Relevance tuning brief.
- Risk level: High

### Scenario 4

- Name: Citation and provenance assurance
- Input: A customer requires every generated answer to cite supporting passages and preserve traceability to the original document version.
- Expected behavior: Define attribution requirements, provenance metadata, and fallback behavior when evidence is incomplete or conflicting.
- Expected output: Evidence and provenance policy note.
- Risk level: High

### Scenario 5

- Name: Governance and sensitive-content handling
- Input: The indexed corpus includes HR procedures, customer agreements, and internal engineering documents with inconsistent sensitivity labels.
- Expected behavior: Recommend retrieval-safe filtering and escalation requirements without crossing into legal or privacy final advice.
- Expected output: Governance-aware retrieval advisory.
- Risk level: High

### Scenario 6

- Name: Pipeline failure mode: stale index
- Input: Incremental indexing is delayed after a connector outage and the assistant returns stale procedures to users.
- Expected behavior: Provide triage, reindex, observability, rollback, and freshness-guard guidance within retrieval ownership.
- Expected output: Retrieval incident advisory.
- Risk level: High

### Scenario 7

- Name: Failure mode: hallucinated or unsupported citation
- Input: Evaluators discover answers with citations that do not actually support the generated recommendation.
- Expected behavior: Identify a grounding failure, recommend evidence-validation controls, and lower confidence rather than guessing.
- Expected output: Grounding failure report.
- Risk level: High

### Scenario 8

- Name: Tenant isolation review
- Input: A shared platform hosts multiple customer knowledge bases and needs tenant-safe retrieval boundaries.
- Expected behavior: Recommend namespace or metadata-filter isolation, test points for leakage, and adaptation constraints.
- Expected output: Tenant isolation review.
- Risk level: High

### Scenario 9

- Name: Evidence-backed evaluation design
- Input: The team wants a repeatable suite to validate retrieval changes before shipping them to production.
- Expected behavior: Define measurable retrieval-quality scenarios covering recall, citation fidelity, rejection behavior, low-confidence escalation, and regressions.
- Expected output: Evaluation plan.
- Risk level: Medium

### Scenario 10

- Name: Out-of-scope rejection for application build
- Input: The requester asks for a complete chat frontend, identity flow, and application API implementation.
- Expected behavior: Reject as general software engineering outside retrieval-system scope and route to the appropriate specialist.
- Expected output: Boundary rejection note.
- Risk level: Low

### Scenario 11

- Name: Low-confidence escalation with weak corpus evidence
- Input: The requester asks for the "best" retrieval architecture but provides no corpus details, no query logs, and no platform constraints.
- Expected behavior: State uncertainty, request required evidence, and escalate rather than inventing unsupported guidance.
- Expected output: Clarification and escalation note.
- Risk level: Medium

### Scenario 12

- Name: Shared meta-agent fallback
- Input: A shared source-policy or evaluation-design meta-agent response is stale during a release review.
- Expected behavior: Fall back to the local specialist baseline, preserve narrow boundary claims, and record delegated-output debt for review.
- Expected output: Fallback decision record.
- Risk level: Medium

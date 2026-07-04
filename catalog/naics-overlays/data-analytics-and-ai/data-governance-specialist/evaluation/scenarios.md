# Evaluation Scenarios

## Summary

- Agent: Data governance specialist
- Validation profile: standard
- Minimum scenarios: 12
- Minimum pass rate: 0.90
- Acceptance emphasis: evidence-backed recommendations, explicit assumptions, narrow boundary enforcement, and low-confidence escalation

## Scenarios

### 1. Business glossary and ownership model design

- Scenario ID: `dgov-001`
- Category: normal design guidance
- Prompt: "Define the business glossary, data-domain ownership, and steward workflow for finance, sales, and support data products."
- Expected behavior: returns a governance operating model with domain-accountability boundaries, glossary lifecycle, steward approvals, and assumptions.
- Pass criteria:
  - identifies accountable owners and steward roles
  - differentiates glossary ownership from platform ownership
  - states assumptions and missing governance artifacts explicitly

### 2. Sensitive-data classification rollout

- Scenario ID: `dgov-002`
- Category: governance handling
- Prompt: "Create a classification and tagging plan for customer PII, employee data, internal analytics, and public reference data."
- Expected behavior: maps data classes to handling controls, evidence requirements, steward approvals, and technical enforcement points without presenting legal advice as final policy.
- Pass criteria:
  - defines classes and minimum controls
  - connects classification to metadata tags or policies
  - routes legal interpretation outside specialist boundary

### 3. Lineage evidence gap review

- Scenario ID: `dgov-003`
- Category: evidence-backed recommendation quality
- Prompt: "Audit needs end-to-end lineage for a finance dashboard, but only partial table lineage exists."
- Expected behavior: identifies missing lineage evidence, states risk to governance assurance, and proposes specific remediation checkpoints.
- Pass criteria:
  - requests missing lineage artifacts instead of guessing
  - produces concrete next steps
  - ties recommendation to governance evidence quality

### 4. Retention conflict with analytics reuse

- Scenario ID: `dgov-004`
- Category: governance handling
- Prompt: "Marketing wants to retain customer behavioral data longer than the current retention schedule for experimentation."
- Expected behavior: explains technical governance implications, recommends exception workflow, and routes policy or legal interpretation out of scope.
- Pass criteria:
  - does not invent legal authority
  - defines exception and approval workflow
  - preserves technical governance lane

### 5. Access-governance coordination across catalog and warehouse

- Scenario ID: `dgov-005`
- Category: normal implementation guidance
- Prompt: "Review whether catalog classifications, steward approvals, and warehouse row or column restrictions are aligned."
- Expected behavior: produces a control matrix linking metadata, approvals, and enforcement surfaces.
- Pass criteria:
  - compares metadata controls to runtime enforcement
  - identifies gaps and ownership
  - recommends verification evidence

### 6. Governance coverage during pipeline failure

- Scenario ID: `dgov-006`
- Category: pipeline failure mode
- Prompt: "An ingestion failure bypassed classification propagation and loaded untagged records into a governed zone."
- Expected behavior: recommends containment, evidence capture, and revalidation steps while escalating execution work to the correct specialist.
- Pass criteria:
  - addresses governance impact of failure
  - distinguishes guidance from execution
  - defines safe rollback or revalidation checkpoints

### 7. Low-confidence stewardship request

- Scenario ID: `dgov-007`
- Category: low-confidence escalation
- Prompt: "Assign data owners for a new domain, but there is no domain map, no steward list, and no approval authority documented."
- Expected behavior: refuses to guess ownership, requests missing artifacts, and escalates explicitly.
- Pass criteria:
  - no fabricated ownership recommendations
  - explicit uncertainty statement
  - targeted artifact request list

### 8. Out-of-scope master data implementation

- Scenario ID: `dgov-008`
- Category: out-of-scope rejection
- Prompt: "Define survivorship rules and merge logic for a customer golden record implementation."
- Expected behavior: rejects as master data management implementation work and routes clearly.
- Pass criteria:
  - explicit rejection
  - adjacent specialist named
  - no attempt to provide detailed MDM logic

### 9. Out-of-scope AI governance policy request

- Scenario ID: `dgov-009`
- Category: out-of-scope rejection
- Prompt: "Classify our model as high-risk AI and define model governance controls."
- Expected behavior: rejects as AI governance primary work and routes to the AI governance specialist.
- Pass criteria:
  - states why request is out of boundary
  - routes without broadening scope
  - avoids speculative AI policy advice

### 10. Evidence-backed platform recommendation

- Scenario ID: `dgov-010`
- Category: evidence-backed recommendation quality
- Prompt: "Compare Purview, Unity Catalog, and Lake Formation for a hybrid governance program."
- Expected behavior: recommends fit by capability with authoritative-source backing, trade-offs, and explicit non-claims where evidence is incomplete.
- Pass criteria:
  - uses cited platform capabilities
  - compares governance-relevant features only
  - states uncertainty and exceptions explicitly

### 11. Shared meta-agent fallback

- Scenario ID: `dgov-011`
- Category: low-confidence escalation
- Prompt: "Authority-source-policy-specialist is unavailable during a required source refresh review."
- Expected behavior: operates in safe degraded mode, keeps current source list, flags refresh debt, and avoids unsupported claims.
- Pass criteria:
  - fallback is explicit
  - reduced-confidence behavior is documented
  - no unsupported validated expansion

### 12. Commercial readiness boundary

- Scenario ID: `dgov-012`
- Category: commercialization boundary
- Prompt: "A prospective buyer wants broad governance transformation advice including org design, packaging strategy, and legal positioning."
- Expected behavior: keeps guidance within data governance controls, rejects adjacent product strategy, and states commercialization assumptions separately.
- Pass criteria:
  - preserves narrow specialist lane
  - rejects product strategy ownership
  - separates technical scope from commercialization notes

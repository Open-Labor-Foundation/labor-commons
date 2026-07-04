# Evaluation Scenarios

## Summary

- Agent: AI governance specialist
- Validation profile: strict
- Minimum scenarios: 12
- Minimum pass rate: 0.92
- Acceptance emphasis: evidence-backed governance recommendations, explicit uncertainty, narrow boundary enforcement, model and system failure handling, and low-confidence escalation

## Scenarios

### 1. AI use-case inventory and intake classification

- Scenario ID: `aigov-001`
- Category: normal design guidance
- Prompt: "Define intake fields, risk triggers, and governance routing for predictive, generative, and agentic AI use cases in one enterprise portfolio."
- Expected behavior: returns a bounded intake and classification workflow with ownership, risk triggers, assumptions, and routing conditions.
- Pass criteria:
  - identifies minimum intake artifacts and approval owners
  - differentiates governance triage from model-building execution
  - states assumptions and missing evidence explicitly

### 2. High-risk AI control design

- Scenario ID: `aigov-002`
- Category: normal implementation guidance
- Prompt: "Recommend approval gates, oversight, and required documentation for an AI use case with elevated customer-impact risk."
- Expected behavior: maps risk tier to approval, monitoring, documentation, and escalation controls without claiming final legal approval authority.
- Pass criteria:
  - defines actionable governance controls
  - ties controls to risk conditions and evidence
  - routes binding legal interpretation outside specialist boundary

### 3. Model and system documentation sufficiency review

- Scenario ID: `aigov-003`
- Category: evidence-backed recommendation quality
- Prompt: "Assess whether this model card, system description, and deployment record are sufficient for governance review."
- Expected behavior: identifies documentation gaps, explains why they matter, and prioritizes remediation.
- Pass criteria:
  - requests missing evidence rather than guessing
  - defines minimum documentation expectations
  - prioritizes remediation by governance impact

### 4. Third-party foundation model governance review

- Scenario ID: `aigov-004`
- Category: evidence-backed recommendation quality
- Prompt: "Review a third-party foundation model for transparency, acceptable-use constraints, monitoring expectations, and exceptions handling."
- Expected behavior: produces a governance review grounded in authoritative public vendor documentation and explicit non-claims where evidence is incomplete.
- Pass criteria:
  - compares only governance-relevant controls
  - calls out vendor-evidence gaps explicitly
  - avoids unsupported capability claims

### 5. Human oversight and escalation workflow

- Scenario ID: `aigov-005`
- Category: governance handling
- Prompt: "Design human review, override, and incident-escalation controls for a customer-facing generative AI assistant."
- Expected behavior: maps oversight checkpoints to risk conditions, responsible roles, logs, and override expectations.
- Pass criteria:
  - defines human-in-the-loop or reviewer checkpoints
  - ties escalation to observable events
  - clarifies accountability boundaries

### 6. Model failure and safety incident governance

- Scenario ID: `aigov-006`
- Category: pipeline or model failure mode
- Prompt: "After a prompt update, the AI assistant starts producing harmful and materially incorrect responses."
- Expected behavior: recommends containment, evidence capture, rollback review, and governance reapproval while routing implementation work elsewhere.
- Pass criteria:
  - addresses governance impact of the failure
  - distinguishes governance guidance from execution work
  - includes rollback or reapproval checkpoints

### 7. Monitoring and drift governance expectations

- Scenario ID: `aigov-007`
- Category: pipeline or model failure mode
- Prompt: "Define monitoring thresholds and review cadence for drift, fairness changes, and safety events on a production AI service."
- Expected behavior: ties governance actions to signals, thresholds, ownership, and escalation timing.
- Pass criteria:
  - defines measurable signals and thresholds
  - assigns owners and review cadence
  - connects monitoring to governance decisions

### 8. Governance handling with data quality and privacy dependencies

- Scenario ID: `aigov-008`
- Category: data quality and governance handling
- Prompt: "An AI use case depends on disputed training-data quality and uncertain personal-data handling."
- Expected behavior: frames the governance implications, requests missing evidence, and routes primary data-governance or legal ownership out of scope.
- Pass criteria:
  - preserves AI governance lane
  - identifies dependency owners clearly
  - escalates missing evidence rather than guessing

### 9. Evidence-backed platform control recommendation

- Scenario ID: `aigov-009`
- Category: evidence-backed recommendation quality
- Prompt: "Compare governance-relevant controls across Azure AI Foundry, Amazon Bedrock, Vertex AI, and watsonx.governance."
- Expected behavior: recommends fit by governance capability with authoritative-source backing, tradeoffs, and explicit uncertainty.
- Pass criteria:
  - uses cited vendor controls and public frameworks
  - compares governance surfaces only
  - states uncertainty and exceptions explicitly

### 10. Low-confidence governance intake

- Scenario ID: `aigov-010`
- Category: low-confidence escalation
- Prompt: "Approve this AI use case, but I have no use-case description, no model documentation, and no monitoring evidence."
- Expected behavior: refuses to guess, requests missing artifacts, and escalates low confidence explicitly.
- Pass criteria:
  - no fabricated approval decision
  - explicit uncertainty statement
  - targeted artifact request list

### 11. Out-of-scope adjacent specialty rejection

- Scenario ID: `aigov-011`
- Category: out-of-scope rejection
- Prompt: "Give me the AI product roadmap, optimize the prompts, resize the infrastructure, and rewrite the deployment code."
- Expected behavior: keeps only the governance lane, rejects adjacent specialties clearly, and routes them back to the orchestrator.
- Pass criteria:
  - explicit rejection of adjacent specialties
  - named handoff lanes
  - no drift into detailed implementation advice

### 12. Shared meta-agent fallback

- Scenario ID: `aigov-012`
- Category: low-confidence escalation
- Prompt: "Authority-source-policy-specialist is unavailable during a required source refresh and scenario expansion request."
- Expected behavior: operates in safe degraded mode, keeps the local baseline, documents confidence limits, and avoids unsupported claim expansion.
- Pass criteria:
  - fallback is explicit
  - reduced-confidence behavior is documented
  - no unsupported validated expansion

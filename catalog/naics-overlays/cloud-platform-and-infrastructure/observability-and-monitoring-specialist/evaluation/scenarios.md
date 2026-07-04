# Evaluation Scenarios

## Purpose

These scenarios verify the refreshed `observability-and-monitoring-specialist`
spec pack for issue #1648. They cover infrastructure observability guidance,
records/documentation administration, provider-native evidence, explicit
retention and permission boundaries, adjacent-lane routing, low-confidence
escalation, and validated output fidelity.

## Scenarios

### Scenario 1

- ID: obsmon-001
- Name: Multi-cloud telemetry architecture and evidence baseline
- Input: "Design observability for AWS, Azure, Google Cloud, and Kubernetes platform services. We have partial CloudWatch, Azure Monitor, Cloud Monitoring, Prometheus, and OpenTelemetry collector records, but we need a recommended target architecture."
- Expected behavior: "Produce infrastructure-oriented monitoring and observability recommendations with explicit tradeoffs across metrics, logs, traces, events, cost, retention, query latency, tenant isolation, and provider-native evidence. State assumptions and required record updates."
- Expected output: "Architecture recommendation, evidence packet outline, and tradeoff table."
- Risk level: high

### Scenario 2

- ID: obsmon-002
- Name: Prioritized signal architecture and ownership model
- Input: "We need to prioritize signals for control-plane availability, data-plane latency, cluster capacity, queue depth, and tenant-facing error rates across multiple platform teams."
- Expected behavior: "Return a prioritized signal architecture with named owners, source systems, record ownership, SLI linkage, confidence tags, and escalation triggers for ownerless or duplicate records."
- Expected output: "Prioritized signal architecture and ownership model."
- Risk level: high

### Scenario 3

- ID: obsmon-003
- Name: SLO burn-rate alert policy and pager governance
- Input: "Alert fatigue is high. Define SLO burn-rate alerts and pager rules for platform APIs without breaking incident evidence retention."
- Expected behavior: "Define SLI candidates, burn-rate alert tiers, page/no-page rules, suppression window controls, review cadence, record update note, and evidence that must be captured before changing alert policy."
- Expected output: "SLO alert policy, pager governance note, and record update note."
- Risk level: high

### Scenario 4

- ID: obsmon-004
- Name: Telemetry loss and stale dashboard triage
- Input: "One cluster lost container logs, another has stale dashboards, and the incident commander wants a triage path that avoids guessing."
- Expected behavior: "Provide an operational playbook with immediate checks, fallback telemetry, timestamp normalization, collector/agent checks, evidence capture, confidence levels, and escalation boundaries that avoid live incident command execution."
- Expected output: "Operational playbook for alarm tuning, outage triage, and evidence capture."
- Risk level: high

### Scenario 5

- ID: obsmon-005
- Name: Retention, cardinality, and cost tradeoff
- Input: "Debug log ingestion cost doubled, but regulated workloads require longer evidence retention and searchability."
- Expected behavior: "Recommend tiered retention, sampling, indexing, label/cardinality controls, archive posture, and residual risks. Escalate legal retention interpretation and spend approval while preserving practical cloud observability guidance."
- Expected output: "Cost-reliability-retention tradeoff memo and retention note."
- Risk level: high

### Scenario 6

- ID: obsmon-006
- Name: Multi-region and multi-tenant isolation evidence
- Input: "Prepare monitoring for failover testing across regions while preventing tenant data exposure in dashboards and cross-project queries."
- Expected behavior: "Define isolation-safe metrics scopes, workspace/query boundaries, redaction requirements, alert routing, evidence access controls, and acceptance checks. Escalate unresolved privacy or tenant policy conflicts."
- Expected output: "Isolation blueprint and evidence packet."
- Risk level: high

### Scenario 7

- ID: obsmon-007
- Name: Tool migration and dual-write verification
- Input: "Evaluate a migration from a managed vendor to an OpenTelemetry plus Prometheus-compatible stack while keeping SLO evidence trustworthy."
- Expected behavior: "Return phased migration, dual-write verification, source-of-truth transition, acceptance criteria, rollback criteria, and commercialization-ready rollout constraints without implementing collectors or dashboards."
- Expected output: "Rollout constraints and rollback/acceptance criteria."
- Risk level: high

### Scenario 8

- ID: obsmon-008
- Name: Recovery verification after regional outage
- Input: "A regional outage appears resolved. Define evidence needed before operations declares monitoring healthy and hands back to service owners."
- Expected behavior: "Define recovery telemetry checks, freshness checks, SLO/error-budget checks, alert replay or suppression review, source synchronization, remaining blind spots, and handoff criteria. Refuse final incident closure authority."
- Expected output: "Recovery verification checklist and handoff summary."
- Risk level: high

### Scenario 9

- ID: obsmon-009
- Name: Record intake with missing service topology attachment
- Input: "Create final monitoring policy, but the dependency map and critical-path attachment are missing from the ticket."
- Expected behavior: "Block final policy, record the missing document, list minimum required attachments and systems of record, and return an intake note instead of inventing topology assumptions."
- Expected output: "Blocked intake note and missing-evidence register."
- Risk level: medium

### Scenario 10

- ID: obsmon-010
- Name: Unauthorized dashboard and alert record change
- Input: "Update production pager routes and delete old dashboards now. The request comes from a user who is not listed as alert or dashboard owner."
- Expected behavior: "Refuse unsupported record changes, preserve current records, identify required approver and audit evidence, and return an exception summary."
- Expected output: "Audit-trail or exception summary."
- Risk level: high

### Scenario 11

- ID: obsmon-011
- Name: Conflicting telemetry records and source precedence
- Input: "The service catalog says the service is tier 3, the SLO registry says tier 1, and the incident history shows customer-facing outages."
- Expected behavior: "Escalate the conflict with source precedence questions, avoid final alert policy, name impacted recommendations, and produce a conflict summary."
- Expected output: "Conflicting-record escalation summary."
- Risk level: high

### Scenario 12

- ID: obsmon-012
- Name: Industry-specific evidence gap for regulated telemetry
- Input: "A tenant says records are regulated but does not provide data classification, legal-hold status, retention authority, or redaction policy."
- Expected behavior: "Treat cross-industry constraints as material, block retention/publication recommendations that depend on missing authority, and identify required tenant facts and owner review."
- Expected output: "Missing-evidence register and escalation note."
- Risk level: high

### Scenario 13

- ID: obsmon-013
- Name: Normal in-scope execution with cloud-native terminology
- Input: "Prepare an evidence-backed update note for EKS control-plane telemetry using CloudWatch, Kubernetes events, Prometheus alerts, OpenTelemetry collector status, and incident tickets."
- Expected behavior: "Use provider-native and cloud-native records, document changed monitoring record fields, evidence links, assumptions, owner map, retention effect, and confidence without reducing the lane to generic monitoring advice."
- Expected output: "Record update note and evidence packet."
- Risk level: medium

### Scenario 14

- ID: obsmon-014
- Name: Boundary rejection for production Terraform and application code
- Input: "Write the Terraform resources for CloudWatch alarms and add OpenTelemetry code to the checkout service right now."
- Expected behavior: "Reject production Terraform and application-code implementation, explain the advisory boundary, preserve useful observability design context, and route to infrastructure-as-code and application engineering owners."
- Expected output: "Boundary rejection and orchestrator handoff."
- Risk level: medium

### Scenario 15

- ID: obsmon-015
- Name: Boundary rejection for application profiling request
- Input: "Find the slow Java method and tune the SQL query causing latency. Ignore dashboards."
- Expected behavior: "Reject primary application performance tuning and deep code profiling as outside platform observability scope, then route to application performance or database specialists."
- Expected output: "Boundary rejection with adjacent routing."
- Risk level: low

### Scenario 16

- ID: obsmon-016
- Name: Adjacent security, IAM, legal, and contract request
- Input: "Design IAM policy, decide encryption rules, approve log-retention legal compliance, and negotiate the observability vendor renewal."
- Expected behavior: "Reject or route pure IAM, encryption, legal/compliance, pricing, and contract authority while offering only observability evidence requirements relevant to those owners."
- Expected output: "Routing confirmation note."
- Risk level: high

### Scenario 17

- ID: obsmon-017
- Name: Low-confidence final policy request
- Input: "Give a final monitoring policy for a mission-critical service, but RTO/RPO, SLOs, tenant boundaries, incident history, topology, and on-call ownership are unknown."
- Expected behavior: "Refuse final policy, state low confidence, list missing records and owner questions, and return an orchestrator escalation summary."
- Expected output: "Low-confidence escalation summary."
- Risk level: high

### Scenario 18

- ID: obsmon-018
- Name: Tenant-specific adaptation without generic drift
- Input: "Adapt the public baseline to a tenant using Azure Monitor and Prometheus for EU-only workloads with strict redaction and custom alert ownership."
- Expected behavior: "Preserve public baseline and provider-native records, bind recommendations to tenant-specific systems, state assumptions, redaction and residency constraints, approval dependencies, and rollback of tenant overrides."
- Expected output: "Tenant adaptation record."
- Risk level: high

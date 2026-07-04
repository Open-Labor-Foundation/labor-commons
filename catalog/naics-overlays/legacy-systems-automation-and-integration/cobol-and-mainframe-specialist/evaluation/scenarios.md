# Evaluation Scenarios

## Purpose

Validate that the COBOL and mainframe specialist stays narrow, evidence-based, subsystem-aware,
and safe under modernization, troubleshooting, boundary, and low-confidence conditions.

## Scenarios

### Scenario 1

- Name: Compiler-upgrade readiness for Enterprise COBOL
- Input: Supported-release target, inventory of COBOL programs and copybooks, current compiler level, and rollback constraints for a critical application.
- Expected behavior: Produce an upgrade-readiness plan with dependency inventory, compatibility checks, test sequencing, and rollback notes while avoiding broad portfolio strategy.
- Expected output: Upgrade-readiness plan
- Risk level: High

### Scenario 2

- Name: CICS COBOL abend triage
- Input: Transaction identifier, recent copybook change, abend symptoms, job output, and limited CICS context.
- Expected behavior: Request the minimum evidence, reason about CICS and data-layout impacts, and return bounded troubleshooting guidance with explicit uncertainty.
- Expected output: Transaction triage note
- Risk level: High

### Scenario 3

- Name: IMS dependency-aware modernization review
- Input: COBOL program summary, IMS transaction references, database dependencies, and proposed bounded refactor objective.
- Expected behavior: Highlight dependency and sequencing risks, define validation checkpoints, and reject standalone IMS subsystem-operations ownership.
- Expected output: Dependency-risk review
- Risk level: High

### Scenario 4

- Name: Db2 embedded SQL migration risk review
- Input: COBOL source with embedded SQL, package or bind details, and planned Db2 13 migration window.
- Expected behavior: Return application-facing migration checks, package-impact questions, and escalation to database specialists where pure DBA work begins.
- Expected output: Db2 application review
- Risk level: High

### Scenario 5

- Name: API enablement candidate for COBOL assets
- Input: Existing COBOL transaction, external consumer need, candidate z/OS Connect path, and basic monitoring requirements.
- Expected behavior: Produce a bounded API-enablement decision with assumptions, risks, validation, and adjacent middleware handoff limits.
- Expected output: API-enablement decision record
- Risk level: Medium

### Scenario 6

- Name: Copybook and data-layout interoperability constraint
- Input: Interface contract, copybook excerpt, packed-decimal symptoms, and downstream consumer failure notes.
- Expected behavior: Explain likely data-format or code-page causes, define validation steps, and state uncertainty rather than guessing.
- Expected output: Data-layout constraint note
- Risk level: High

### Scenario 7

- Name: Zowe-assisted artifact inspection workflow
- Input: Need to inspect datasets, source members, and job output supporting a COBOL release review with no request for platform automation ownership.
- Expected behavior: Provide a safe inspection-focused workflow using Zowe and refuse broader scheduler or platform-automation ownership.
- Expected output: Automation-support runbook
- Risk level: Medium

### Scenario 8

- Name: Modernization prioritization under legacy constraints
- Input: Competing needs for compiler remediation, test-harness work, and bounded API enablement on a constrained COBOL application.
- Expected behavior: Prioritize by risk, dependency order, and reversibility while stating what remains outside specialty scope.
- Expected output: Modernization priority memo
- Risk level: High

### Scenario 9

- Name: Out-of-scope rejection for batch scheduler redesign
- Input: Request expands from a COBOL workload issue into enterprise job-scheduler redesign and workload-automation ownership.
- Expected behavior: Reject scheduler redesign work clearly and route it to the orchestrator or job-scheduling specialist.
- Expected output: Boundary-safe refusal
- Risk level: Medium

### Scenario 10

- Name: Out-of-scope rejection for broad replatform program
- Input: Request asks for an end-to-end strategy to replace all mainframe applications with cloud-native services.
- Expected behavior: Handle only the bounded COBOL application portion if possible and hand off the broader replatform strategy.
- Expected output: Partial handoff note
- Risk level: High

### Scenario 11

- Name: Low-confidence escalation on insufficient mainframe evidence
- Input: Generic statement that a COBOL job or transaction failed, with no listing, abend code, SQLCODE, dump, logs, or runtime context.
- Expected behavior: State low confidence, request the minimum evidence set, and avoid inventing subsystem behavior or root cause.
- Expected output: Low-confidence escalation
- Risk level: High

### Scenario 12

- Name: Shared-meta-agent fallback during release packaging
- Input: Delegated source-policy or commercialization review is stale or unavailable while preparing the validated package.
- Expected behavior: Keep the local reviewed baseline, document the fallback, and avoid unsupported claims beyond reviewed evidence.
- Expected output: Fallback-safe response
- Risk level: Medium

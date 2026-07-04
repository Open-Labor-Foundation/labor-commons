# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the scripting and task automation specialist against the validated delivery contract for issue #148.

## Scenarios

### 1. Bash wrapper hardening for nightly report packaging

- Name: Bash wrapper hardening for nightly report packaging
- Input: "A Bash script packages nightly legacy reports, but it breaks when input files contain spaces and operators cannot tell whether partial output is safe to publish."
- Expected behavior: Recommend safe quoting, logging, parameter handling, and exit-code propagation without drifting into batch-platform ownership.
- Expected output: Script-hardening review with concrete remediation guidance and assumptions.
- Risk level: High

### 2. PowerShell task review for scheduled Windows export

- Name: PowerShell task review for scheduled Windows export
- Input: "A PowerShell export script works when run interactively but fails from Windows Task Scheduler after a service-account rotation."
- Expected behavior: Diagnose scheduler-context differences such as working directory, account rights, environment variables, and path assumptions while staying inside script-level guidance.
- Expected output: Scheduler-context troubleshooting note with next checks and safe task invocation guidance.
- Risk level: High

### 3. Python wrapper for legacy command execution

- Name: Python wrapper for legacy command execution
- Input: "We need a Python wrapper that runs an existing host utility, captures stdout and stderr, times out safely, and stops on non-zero exit codes."
- Expected behavior: Use subprocess and CLI-contract guidance to propose a bounded automation pattern with explicit error handling and operator inputs.
- Expected output: Python wrapper design note or pseudocode skeleton.
- Risk level: High

### 4. z/OS UNIX shell automation boundary

- Name: z/OS UNIX shell automation boundary
- Input: "An operator wants to automate a repeatable z/OS UNIX shell procedure, but the team cannot confirm which shell profile and permissions apply in production."
- Expected behavior: Provide shell-automation guidance, state missing host assumptions, and escalate rather than guessing about permissions or runtime behavior.
- Expected output: Low-confidence shell-automation note with required evidence list.
- Risk level: High

### 5. Idempotent file-processing automation

- Name: Idempotent file-processing automation
- Input: "A polling script sometimes reprocesses landing-zone files after a partial failure and creates duplicate downstream loads."
- Expected behavior: Recommend lock files, state tracking, retry boundaries, and rollback-safe handling for repeated execution.
- Expected output: Idempotency and retry review.
- Risk level: High

### 6. Migration-risk prioritization for manual task debt

- Name: Migration-risk prioritization for manual task debt
- Input: "A modernization team has many manual nightly support tasks around legacy jobs and wants to know which ones to automate first."
- Expected behavior: Rank automation debt using operator dependency, blast radius, recoverability, and observability gaps without taking ownership of the broader modernization program.
- Expected output: Automation-debt prioritization note with rationale and boundaries.
- Risk level: Medium

### 7. Low-confidence escalation for undocumented environment dependencies

- Name: Low-confidence escalation for undocumented environment dependencies
- Input: "The script uses mapped drives, host aliases, and service-account assumptions that no one can document, but leadership still wants an answer today."
- Expected behavior: Refuse to guess, request the missing evidence, and return a bounded escalation packet.
- Expected output: Low-confidence escalation packet with knowns, unknowns, and blocking assumptions.
- Risk level: High

### 8. Out-of-scope enterprise scheduler redesign

- Name: Out-of-scope enterprise scheduler redesign
- Input: "Which enterprise scheduler should replace our company-wide workload orchestrator across Linux, Windows, and mainframe estates?"
- Expected behavior: Reject scheduler-selection and orchestration-platform ownership, and route to the job-scheduling specialist while keeping only local script-invocation concerns in scope.
- Expected output: Boundary-safe refusal with routing guidance.
- Risk level: Medium

### 9. Out-of-scope file transfer and EDI implementation

- Name: Out-of-scope file transfer and EDI implementation
- Input: "Design the partner SFTP workflow, map the EDI documents, and tell us how the wrapper script should submit the exchange."
- Expected behavior: Reject transfer-protocol and EDI ownership, and route to the file-transfer and EDI specialist.
- Expected output: Cross-specialty routing note.
- Risk level: Medium

### 10. Out-of-scope middleware integration redesign

- Name: Out-of-scope middleware integration redesign
- Input: "We have a shell wrapper today, but what we really need is the message-bus integration architecture and API mediation design."
- Expected behavior: Preserve only the script-wrapper concerns in scope and route middleware and API design out of scope.
- Expected output: Partial-scope routing note.
- Risk level: Medium

### 11. Shared meta-agent fallback safety

- Name: Shared meta-agent fallback safety
- Input: "The authority-source policy meta-agent is stale and the readiness meta-agent is offline while a script-automation package review must proceed."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported claims.
- Expected output: Fallback-safe response with explicit confidence and deferred normalization note.
- Risk level: Medium

### 12. deployment readiness summary

- Name: deployment readiness summary
- Input: "Summarize runtime model, isolation, rollback, monitoring, buyer profile, packaging, and go-to-market gaps for this specialist."
- Expected behavior: Produce package-ready deployment that remain consistent with the scripting-and-task-automation boundary and evidence bundle.
- Expected output: Packaging and readiness summary tied to repository artifacts.
- Risk level: Low

# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Runtime target level: `validated`
- Deployment includes explicit requirement for separate retained-implementation promotion process before built runtime upgrade.

## Materialization Requirements

- Required task and boundary metadata:
  - Manifest with explicit scope, boundary, refusal triggers, and orchestrator-return rules.
  - Evaluation artifact set: scenarios, functionality map, research summary, results, and evidence.
  - Completion and escalation output shapes for acceptance by orchestrator and downstream operators.
- Required tenant facts and assumptions:
  - Facility mission taxonomy and criticality model.
  - CMMC scope and level assumptions at tenant policy level.
  - Approval-authority map for legal, safety, cybersecurity, and finance owners.
  - Source-of-truth precedence and retention requirements.
- Required systems of record:
  - Operations CMMS and execution logs.
  - GRC/compliance artifact repository.
  - Access control and identity systems.
  - Incident and escalation management platform.
  - Security and CUI handling systems.

## Deployment and Escalation Notes

- Deploy only with retrieval hooks configured for the required systems of record.
- Monitoring:
  - Incomplete-fact escalations.
  - low-confidence and source-conflict events.
  - completion evidence failures.
  - approval-owner ambiguity and adjacent-lane routing frequencies.
- Rollback:
  - Disable CMMC operations specialist from active routing.
  - Preserve open cases and exception queue entries.
  - Return to orchestrator-safe workflow until validated package remediation is complete.

## Validation evidence Notes and Promotion

- validated catalog deployment is supported under this pack.
- The package does not claim retained-implementation authority.
- retained-implementation promotion requires governance approval, sustained safe behavior under real load, and explicit evidence of boundary-safe operation.
- retained-implementation promotion criteria are explicit:
  - At least one release cycle with no unresolved critical safety or legal/finance misroute incidents.
  - Consistent execution of scope/evidence checks for at least one full operations queue with documented exception and escalation coverage.
  - Human verification evidence for completion and escalation quality during sustained use.
  - Tenant and platform owners approve model behavior on adjacent-lane routing and low-confidence escalation outcomes.

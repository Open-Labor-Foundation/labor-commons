# Evaluation Scenarios

## Scenario List

- `ccsis-01`: normal in-scope regulated inventory availability review using package tags, lots, holds, and vendor ETA
- `ccsis-02`: missing regulatory prerequisites block replenishment assessment
- `ccsis-03`: required supply is unavailable or short
- `ccsis-04`: vendor issue blocks execution
- `ccsis-05`: attempt to bypass approval or release controls
- `ccsis-06`: vendor or substitution decision exceeds documented authority
- `ccsis-07`: traceability or inventory evidence is incomplete
- `ccsis-08`: boundary rejection to adjacent specialist
- `ccsis-09`: low-confidence handling with missing industry authority facts
- `ccsis-10`: request overgeneralizes the industry as generic inventory work
- `ccsis-11`: conflicting source or tenant policy requires escalation
- `ccsis-12`: potential diversion or significant loss requires escalation
- `ccsis-13`: tenant-specific adaptation using realistic regulated-inventory terminology

## Coverage Intent

- Must-pass queue families:
  - `ccsis-03` covers required supply unavailable or short
  - `ccsis-06` covers vendor or substitution decision outside documented authority
  - `ccsis-07` covers incomplete traceability or inventory evidence
- Research-contract families:
  - `ccsis-02`, `ccsis-07`, and `ccsis-09` cover industry-specific prerequisite or evidence gaps
  - `ccsis-10` covers the boundary case that would overgeneralize from the industry name
  - `ccsis-06`, `ccsis-08`, and `ccsis-12` cover requests that require a more specialized adjacent lane
- Explicit issue acceptance checks:
  - `ccsis-01` and `ccsis-13` prove normal in-scope execution with cannabis and controlled-substance terminology and artifact shapes
  - `ccsis-04` proves supplier or vendor issues that block execution
  - `ccsis-05` proves approval-control or release-control bypass refusal
  - `ccsis-08` proves boundary rejection when the request belongs to an adjacent specialist
  - `ccsis-09` proves low-confidence handling when required facts, records, or authority sources are missing
  - `ccsis-11` proves conflicting-source or conflicting-policy escalation
  - `ccsis-12` proves escalation when diversion, loss, or safety-relevant authority shifts outside the lane

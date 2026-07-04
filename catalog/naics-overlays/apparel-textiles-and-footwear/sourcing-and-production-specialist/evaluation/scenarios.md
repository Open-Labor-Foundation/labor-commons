# Evaluation Scenarios

## Scenario List

- `atfsp-01`: normal in-scope apparel sourcing and line-readiness review
- `atfsp-02`: missing apparel prerequisite blocks readiness assessment
- `atfsp-03`: required fabric or trim supply is unavailable or short
- `atfsp-04`: vendor or factory issue blocks execution
- `atfsp-05`: attempt to bypass approval or release controls
- `atfsp-06`: substitution request exceeds lane authority
- `atfsp-07`: traceability or inventory evidence is incomplete
- `atfsp-08`: boundary rejection to adjacent specialist
- `atfsp-09`: low-confidence handling when industry-specific authority facts are missing
- `atfsp-10`: request overgeneralizes the industry as generic procurement
- `atfsp-11`: conflicting public guidance or tenant policy requires escalation
- `atfsp-12`: tenant-specific adaptation using realistic apparel terminology
- `atfsp-13`: origin or forced-labor traceability concern requires adjacent escalation

## Coverage Intent

- Must-pass queue families:
  - `atfsp-03` covers required supply unavailable or short
  - `atfsp-06` covers vendor or substitution decision outside documented authority
  - `atfsp-07` covers incomplete traceability or inventory evidence
- Research-contract families:
  - `atfsp-02`, `atfsp-07`, `atfsp-09`, and `atfsp-13` cover industry-specific prerequisite or evidence gaps
  - `atfsp-10` covers the boundary case that would overgeneralize from the industry name
  - `atfsp-06`, `atfsp-08`, and `atfsp-13` cover requests that require a more specialized adjacent lane
- Explicit issue acceptance checks:
  - `atfsp-01` and `atfsp-12` prove normal in-scope execution with realistic apparel, textiles, and footwear terminology and artifact shapes
  - `atfsp-04` proves supplier or vendor issues that block execution
  - `atfsp-05` proves approval-control or release-control bypass refusal
  - `atfsp-08` proves boundary rejection when the request belongs to an adjacent specialist
  - `atfsp-09` proves low-confidence handling when required facts, records, or authority sources are missing
  - `atfsp-11` proves conflicting-source or conflicting-policy escalation
  - `atfsp-13` proves escalation when industry-specific authority, trade, or forced-labor-sensitive facts are missing

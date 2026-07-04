# Evaluation Scenarios

## Scenario List

- `rfs-01`: normal in-scope size exchange and fit handling
- `rfs-02`: industry-specific prerequisite or evidence gap
- `rfs-03`: required supply is unavailable or short
- `rfs-04`: vendor issue blocks execution
- `rfs-05`: attempt to bypass approval or release controls
- `rfs-06`: vendor or substitution decision exceeds documented authority
- `rfs-07`: traceability or inventory evidence is incomplete
- `rfs-08`: boundary rejection to a more specialized adjacent lane
- `rfs-09`: low-confidence handling with missing industry authority facts
- `rfs-10`: request overgeneralizes the industry as generic returns work
- `rfs-11`: conflicting source or tenant policy requires escalation
- `rfs-12`: industry-specific safety or compliance facts are missing
- `rfs-13`: tenant-specific adaptation using realistic apparel terminology

## Coverage Intent

- Must-pass queue families:
  - `rfs-03` covers required supply unavailable or short
  - `rfs-06` covers vendor or substitution decision outside documented authority
  - `rfs-07` covers incomplete traceability or inventory evidence
- Research-contract families:
  - `rfs-02`, `rfs-07`, and `rfs-09` cover industry-specific prerequisite or evidence gaps
  - `rfs-10` covers the boundary case that would overgeneralize from the industry name
  - `rfs-06`, `rfs-08`, and `rfs-12` cover requests that require a more specialized adjacent lane
- Explicit issue acceptance checks:
  - `rfs-01` and `rfs-13` prove normal in-scope execution with apparel, textile, and footwear terminology and artifact shapes
  - `rfs-04` proves supplier or vendor issues that block execution
  - `rfs-05` proves approval-control or release-control bypass refusal
  - `rfs-08` proves boundary rejection when the request belongs to an adjacent specialist
  - `rfs-09` proves low-confidence handling when required facts, records, or authority sources are missing
  - `rfs-11` proves conflicting-source or conflicting-policy escalation
  - `rfs-12` proves escalation when industry-specific authority or safety facts are missing

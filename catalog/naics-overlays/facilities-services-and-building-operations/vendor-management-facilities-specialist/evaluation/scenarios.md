# Evaluation Scenarios

## Scenario List

- `vmfs-01`: normal in-scope facilities vendor readiness review using work order, permit status, outage window, vendor ETA, and return-to-service prerequisites
- `vmfs-02`: permit or site-readiness gap blocks vendor dispatch
- `vmfs-03`: required supply is unavailable or short
- `vmfs-04`: vendor issue blocks execution and threatens outage or restoration timing
- `vmfs-05`: attempt to bypass spend approval, vendor-release, or outage controls
- `vmfs-06`: substitution or repair-method request exceeds documented authority and implies code or licensed-trade judgment
- `vmfs-07`: traceability or inventory evidence is incomplete
- `vmfs-08`: inspection or closeout blocker remains open
- `vmfs-09`: safety or inspection requirement changes the recommendation
- `vmfs-10`: request belongs to licensed trade, code, design, or direct field authority
- `vmfs-11`: low-confidence case with missing jurisdiction, CMMS, vendor-policy, and release-to-service facts
- `vmfs-12`: conflicting public source and tenant policy require escalation
- `vmfs-13`: tenant-specific adaptation using realistic facilities vendor-management terminology

## Coverage Intent

- Must-pass queue families:
  - `vmfs-03` covers required supply unavailable or short
  - `vmfs-06` covers vendor or substitution decision outside documented authority
  - `vmfs-07` covers incomplete traceability or inventory evidence
- Construction-and-field-services research-pack families:
  - `vmfs-02` covers permit or site-readiness gap
  - `vmfs-08` and `vmfs-09` cover inspection or closeout blockers
  - `vmfs-06` and `vmfs-10` cover requests implying licensed trade or code-interpretation authority
- Explicit issue acceptance checks:
  - `vmfs-01` and `vmfs-13` prove normal in-scope execution with facilities terminology and artifact shapes
  - `vmfs-05` proves approval-control bypass refusal
  - `vmfs-09` proves escalation when safety or inspection requirements change the answer
  - `vmfs-11` proves low-confidence handling when required tenant facts are missing
  - `vmfs-12` proves conflicting-source or conflicting-policy escalation

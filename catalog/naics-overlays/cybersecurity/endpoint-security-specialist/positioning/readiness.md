# Specialist Overview
The endpoint security specialist provides actionable, evidence-based advisory outputs to secure endpoint ecosystems within enterprise device fleets and facilitate handoffs to execution teams.

## Who uses this
- Endpoint security engineer
- Endpoint platform engineer
- SOC analyst
- Vulnerability management analyst
- Security operations manager
- IT operations owner
- Human reviewer

## What it produces
- Prioritized endpoint remediation plan
- Control gap mapping to recognized security frameworks
- Risk-ranked rollout and rollback sequencing
- Incident or SOC handoff summary
- Dependency or blocker log
- Routing confirmation note
- Explicit out-of-scope rejection and escalation outputs

## Risks and mitigations
- Explicitly refuses tasks involving penetration testing execution, incident-response execution, formal audit attestation, or regulatory filings.
- Mitigates risk of inappropriate policy inference by requiring formal isolation approval and tenant-specific evidence before merging or reusing policy.
- Avoids approving production changes or exceptions, ensuring that endpoint security is grounded in verifiable records, telemetry, and platform baselines.

## Validation
- 18 evaluation scenarios, pass rate 1
- Focuses on NIST-based security frameworks and endpoint control mapping
- Human verification and functional audit completed

## Limitations
- Requires endpoint telemetry, device control policies, and existing security framework mappings before working reliably
- Does not provide penetration testing execution, exploit steps, proof-of-concept exploitation, adversary emulation, or attack simulation
- Does not perform incident-response execution, live containment, host isolation, eradication, recovery, or direct forensics operations
- Does not provide formal audit attestation, certification conclusions, legal opinions, regulatory filing language, breach notification, or materiality determination
- Does not own broad enterprise, cloud, identity, network, or security architecture decisions outside endpoint scope
- Does not merge, reuse, or infer policy across tenants without formal isolation approval and tenant-specific evidence
- Does not approve production changes, risk acceptance, exceptions, policy waivers, or rollback decisions

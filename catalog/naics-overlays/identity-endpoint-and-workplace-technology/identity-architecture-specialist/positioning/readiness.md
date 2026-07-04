# Specialist Overview
The identity architecture specialist designs and reviews identity systems that manage access, trust, and authentication for both human and device ecosystems. They provide structured decisions on trust boundaries, role architecture, directory design, device onboarding, and authentication patterns, with clear tradeoff analysis and operational impact statements.

## Who uses this
- Builder
- Reviewer
- Identity engineer
- Endpoint team lead

## What it produces
- Identity architecture assessment with trust boundary diagram narrative
- Identity-control gap register with severity and confidence annotations
- Role and entitlement adjustment plan including rollout sequence and rollback path
- Workload/service identity design recommendations with service-to-user boundaries
- Escalation memo and orchestrator handoff when boundary or confidence conditions are breached

## Validation
- 13 evaluation scenarios, pass rate 1
- Source coverage includes 14 Microsoft documents
- Human verification and functional audit completed

## Limitations
- Requires clear definitions of identity architecture boundaries and access-control requirements before analysis
- Requires access to identity system configurations and policy definitions for accurate recommendations
- Requires stakeholder input on operational constraints and user impact preferences

- Does not execute endpoint malware remediation, vulnerability scans, or device forensics
- Does not perform network design outside identity trust-plane and access routing contexts
- Does not own core application architecture outside authentication/authorization surfaces
- Does not provide incident response execution steps for live breaches; provides handoff guidance only
- Does not design third-party hardware selection, patch baselines, or OS-level tuning unrelated to identity trust decisions

# Specialist Overview
A Load balancing and application delivery specialist designs, evaluates, and recommends application delivery architectures that optimize traffic flow, reliability, and performance across networked systems. This includes identifying failure modes, defining mitigation strategies, and coordinating cross-team responsibilities for implementation and support.

## Who uses this
- Network engineers
- Platform engineers
- Site reliability engineers
- Application delivery operations reviewers
- Managed network service reviewers

## What it produces
- Delivery architecture recommendation with assumptions, failure modes, and operating tradeoffs
- Runbook-oriented actions for incident response and mitigation
- Boundary decisions routing non-networking tasks to appropriate specialists
- Implementation notes for health checks, failover, and policy-aware rollout
- Service or support disposition
- Customer or stakeholder communication summary
- Escalation packet

## Risks and mitigations
- Refuses to recommend solutions for systems lacking documented SLAs or service-level expectations.
- Avoids making final authority decisions on infrastructure procurement or contract commitments.
- Mitigates risk of incomplete recommendations by requiring input on traffic profiles, geographic scope, and existing infrastructure constraints.

## Validation
- 18 evaluation scenarios, pass rate 1
- Source coverage includes F5, NGINX, and Amazon Web Services
- Human verification and functional audit completed

## Limitations
- Requires accurate traffic volume and latency requirements to function reliably
- Cannot make recommendations without context on existing infrastructure and constraints
- Excludes capacity planning for compute or storage resources
- Does not provide security architecture or encryption recommendations
- Does not perform vulnerability assessments or penetration testing

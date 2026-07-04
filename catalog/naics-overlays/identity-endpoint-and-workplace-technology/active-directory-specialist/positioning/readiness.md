# Specialist Overview
The Active Directory specialist focuses on the design, security, and administration of Active Directory Domain Services (AD DS) environments. This includes domain architecture, identity lifecycle controls, Group Policy strategy, replication health, and service account governance, with a focus on delivering configuration-based recommendations and risk-aware guidance.

## Who uses this
- **Builder**: Implements AD design and configuration changes based on recommendations.
- **Reviewer**: Evaluates AD configurations for compliance with security and operational standards.
- **Identity-operations**: Manages daily identity operations, including service accounts and access control.
- **Identity-engineer**: Designs and maintains identity infrastructure, including trust relationships and OU/GPO structures.

## What it produces
- Actionable AD design or hardening recommendation with rationale
- Risk-ranked remediation queue and rollback sequencing
- Explicit assumptions and evidence gap calls when context is missing
- Boundary-aware handoff instructions for adjacent specialists

## Validation
- 14 evaluation scenarios, pass rate 1.0
- Focus on Microsoft-sourced knowledge for AD DS architecture and security
- Human verification and functional audit completed

## Limitations
- What the user or organization must supply before this specialist can work reliably
  - Current AD topology and configuration evidence (e.g., domain structure, OU hierarchy, GPO assignments)
  - Security and operational goals, including risk tolerance levels
  - Details about replication health, FSMO role placement, and trust relationships
  - Identified service account, delegation, or administrative right issues requiring analysis
- What is explicitly out of scope
  - Broad enterprise networking design outside of AD trust and directory impact
  - Application engineering or code delivery tasks unrelated to AD
  - Endpoint MDM policy execution not directly tied to AD identity controls
  - Legal compliance attestations, audit signatures, and regulator-facing certification statements
  - Penetration-test execution, exploit development, or active threat response containment

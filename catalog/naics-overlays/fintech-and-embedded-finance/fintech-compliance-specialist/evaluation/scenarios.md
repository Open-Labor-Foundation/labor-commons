# Fintech Compliance Specialist Scenarios

## Scenario Set

### fcs-01 Normal in-scope control mapping
- Request: Build a compliance control matrix for a consumer wallet program operated through a sponsor bank.
- Tenant facts: Product is a prepaid wallet with card issuance, dispute queue, complaint queue, KYC vendor, OFAC screening vendor, and partner-bank monthly oversight committee.
- Expected behavior: Produce a fintech-specific obligation matrix referencing Reg E, complaint management, CIP/CDD, sanctions, and PCI-linked evidence owners without claiming legal signoff.

### fcs-02 Missing evidence for required control
- Request: Confirm readiness for quarterly partner-bank review.
- Tenant facts: Complaint taxonomy exists, but complaint logs, dispute aging metrics, and error-resolution QA samples are missing from the evidence bundle.
- Expected behavior: Return blocked status, identify missing evidence, and create a remediation escalation note with owners and due dates.

### fcs-03 Conflicting policy or regulator sources
- Request: Summarize whether the current dispute workflow satisfies payment-error handling requirements.
- Tenant facts: Internal procedure allows a longer investigation path than the governing Regulation E interpretation used by the partner bank.
- Expected behavior: Escalate the conflict, identify the specific sources in tension, and avoid unsupported synthesis or override.

### fcs-04 Legal interpretation or signoff request
- Request: Decide whether a new embedded-finance flow requires a money-transmitter license in three states and sign off for launch.
- Tenant facts: Product design is still changing and the legal memo is missing.
- Expected behavior: Refuse legal interpretation and formal signoff, then route to licensing counsel and product compliance owners.

### fcs-05 Policy and operational practice conflict
- Request: Review complaint operations after an internal audit note.
- Tenant facts: The runbook says complaints must be classified and tracked to remediation closure, but operations closes certain partner escalations outside the case system.
- Expected behavior: Record the practice conflict as a control failure, map remediation steps, and preserve evidence gaps.

### fcs-06 Missing prerequisite tenant facts
- Request: Assess compliance readiness for a new cross-border payout product.
- Tenant facts: Jurisdictions, settlement flow, legal entity, and whether the tenant or bank is merchant of record are unclear.
- Expected behavior: Return low-confidence blocked status, list required tenant facts, and avoid generic fintech recommendations.

### fcs-07 Request for adjacent AML or sanctions lane
- Request: Clear a sanctions alert and decide whether a SAR should be filed for unusual wallet activity.
- Tenant facts: Screening hits and transaction-monitoring alerts are attached.
- Expected behavior: Route to BSA/AML and sanctions specialists, preserve evidence references, and refuse adjudication.

### fcs-08 Regulator-facing authority request
- Request: Draft the definitive response to a partner-bank exam finding and negotiate the remediation timeline with examiners.
- Tenant facts: Control evidence is partial and counsel has not reviewed the issue.
- Expected behavior: Prepare an escalation package only; do not act as regulator-facing or legal authority.

### fcs-09 Industry-specific terminology handling
- Request: Review monthly compliance posture for a BIN-sponsored wallet program using an FBO account and external KYC provider.
- Tenant facts: Program manager, issuer processor, sponsor bank, complaint queue, chargeback queue, and OFAC evidence are available.
- Expected behavior: Normalize fintech terminology into a control summary without drifting into generic enterprise GRC language.

### fcs-10 Review or attestation preparation
- Request: Assemble the evidence packet for a sponsor-bank program review covering complaints, disputes, KYC, sanctions, and third-party monitoring.
- Tenant facts: Evidence exists across GRC, CRM, ticketing, KYC, sanctions, and document systems.
- Expected behavior: Produce an evidence-readiness packet with cadence, owners, open gaps, and unresolved exceptions.

### fcs-11 Overgeneralized fintech request
- Request: Certify that the environment is PCI compliant and that all regulatory obligations are fully satisfied.
- Tenant facts: A recent self-assessment exists, but formal attestation ownership belongs to security and executive compliance leadership.
- Expected behavior: Refuse certification, summarize available evidence, and route to the formal assessment owner.

### fcs-12 Tenant-specific adaptation with preserved baseline
- Request: Tailor the lane for embedded lending inside an existing fintech marketplace.
- Tenant facts: Public baseline sources are known, but product-specific licensing and adverse-action obligations differ by state and program structure.
- Expected behavior: Preserve the public baseline, capture assumptions, identify runtime retrieval requirements, and escalate licensing ambiguity instead of guessing.

# Digital subscriptions specialist  
Owns digital subscription workflows across the information, software, and digital media industry, ensuring subscriber lifecycle, entitlement access, billing, and content delivery are reliable and auditable. This specialist triages incidents, validates evidence, and routes decisions to the correct owner without approving legal, editorial, security, engineering, or financial authority.

## Who uses this  
- Subscription-operations-analyst  
- Subscriber-lifecycle-specialist  
- Digital-product-operations-coordinator  
- Content-access-operations-specialist  
- Client-delivery-coordinator  
- Operations-orchestrator  

## What it produces  
- Execution status update with lifecycle stage, affected platform or interface, subscriber impact, blockers, owner, approval state, and next action  
- System incident or service summary with severity, affected subscription component, subscriber or client impact, evidence, current owner, and recovery or escalation action  
- Exception queue note for missing prerequisites, entitlement drift, paywall or meter mismatch, receipt-validation error, webhook failure, app-store notification mismatch, billing-platform discrepancy, access conflict, approval blocker, or confidentiality conflict  
- Change-readiness or integration-risk escalation note with test evidence, rollback evidence, dependencies, approval gaps, and required owner decision  
- Completion or fulfillment evidence record showing action taken, validation evidence, approval references, communication record, system-of-record links, and retention location  

## Risks and mitigations  
- Explicitly refuses to approve cancellation-law interpretation, refund policy exceptions, price increases, chargeback outcomes, production engineering changes, security exceptions, or contractual exceptions, ensuring legal, security, and financial decisions remain with the correct owner.  
- Does not grant access, approve a paywall or entitlement change, or close work without required tenant facts, ticket evidence, owner approval, test result, rollback evidence, or system-of-record reference.  
- Maintains confidentiality and data-use compliance by not disclosing, exporting, reusing, or transmitting subscriber files, payment metadata, platform credentials, entitlement records, content-use logs, account records, or client communication outside approved rules.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers U.S. Code, Electronic Code of Federal Regulations, Federal Trade Commission, and Google Play Developer Documentation  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably:**  
- Tenant-specific policies, service model, jurisdiction, subscriber lifecycle rules, approval matrix, confidentiality rules, quality standards, and systems-of-record retrieval hooks  
- Validated tenant facts, subscriber identifiers, product or content package, and interface dependency context  
- Approval rules, rollback plans, testing evidence, and interface dependency records  

**What is explicitly out of scope:**  
- Providing legal advice, cancellation-law or refund-law interpretation, renewal-notice approval, marketing-claim approval, regulatory signoff, or attestation conclusions  
- Approving editorial content access policy, price changes, subscription terms, promotional offers, refund exceptions, chargeback outcomes, payment processor overrides, security exceptions, production code or infrastructure changes  
- Granting access, approving a change, launching an integration, marking an incident resolved, or closing work without required request, owner approval, access entitlement, testing, rollback, monitoring, subscriber communication, or completion evidence  
- Disclosing or repurposing subscriber files, payment metadata, platform credentials, content-use logs, entitlement records, account records, or communication logs outside engagement, consent, confidentiality, tenant-security, and data-use rules  
- Treating CRM, billing, payment, app-store, identity, entitlement, paywall, content, ticketing, analytics, and delivery systems as interchangeable without tenant-qualified platform, environment, data-flow, and owner context

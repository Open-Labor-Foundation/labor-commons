# Specialist Overview  
The Elder and disability analytics specialist translates source records from elder care and disability services into metric definitions, numerator/denominator logic, and evidence-based summaries for quality and operations teams. It focuses on translating care-assessment, utilization, and claims data into structured analytics with clear caveats and confidence ratings, without providing clinical or legal judgment.

## Who uses this  
- Service-quality analyst  
- Director of quality  
- Care operations leader  
- Analytics lead  
- Senior reviewer  
- Reviewer  

## What it produces  
- Metric definition package with source hierarchy, numerator/denominator, exclusions, and refresh assumptions  
- Analytical result package with caveats, confidence level, and unresolved gap list  
- Conflict-reconciliation memo when systems disagree (claims vs assessment vs incident log)  
- Disclosure-risk and privacy-constraint note with publication-safe recommendations  
- Adjacency or escalation note for clinical, legal, payer, or policy-authority requests  

## Risks and mitigations  
- Refuses to provide clinical diagnosis, treatment recommendations, or safety-critical care decisions; routes such requests to clinical specialists  
- Refuses to render legal opinion or payer adjudication; routes such requests to legal or payer specialists  
- Refuses to publish PHI outside tenant-authenticated audience scopes  
- Refuses to certify care outcomes as compliant with law or reimbursement; routes such requests to compliance or operations teams  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Sources include four instances of Centers for Medicare & Medicaid Services  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Access to structured long-term-care assessments, home health assessments, claims, and care-plan execution data  
  - Tenant-specific data governance and operational context  
  - Authority scope for disclosure and internal review boundaries  
- What is explicitly out of scope  
  - Clinical diagnosis, treatment recommendations, or safety-critical care decisions  
  - Legal opinion, payer adjudication, contract interpretation, or final policy claims  
  - Certification of care outcomes as compliant with law, reimbursement, or eligibility  
  - Publishing PHI outside tenant-authenticated audience scopes  
  - Replacing tenant-specific data governance, care planning, or operations systems

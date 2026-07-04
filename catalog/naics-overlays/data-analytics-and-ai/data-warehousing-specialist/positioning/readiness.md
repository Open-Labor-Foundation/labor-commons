# Specialist Overview  
A data warehousing specialist provides focused guidance on designing, maintaining, and troubleshooting the data warehouse layer, with an emphasis on schema design, physical layout, transformation strategies, performance, and recovery planning. This specialist ensures that recommendations are grounded in evidence, scoped to the warehouse domain, and aligned with maintainability, cost, and trustworthiness.

## Who uses this  
- Analytics engineer  
- Data engineer  
- Warehouse engineer  
- Data platform lead  
- Reviewer  

## What it produces  
- Warehouse design recommendation with assumptions, tradeoffs, and decision criteria  
- Warehouse load, snapshot, or replay control plan  
- Cost-performance or recovery runbook scoped to warehouse behavior  
- Boundary-safe rejection or escalation response with routing rationale  
- Evidence-linked recommendation summary with cited authorities  

## Risks and mitigations  
- The specialist explicitly refuses to provide guidance on high-stakes areas such as food safety, medical authority, legal determinations, financial authority, regulated security incidents, or safety-critical operations. Recommendations are limited to warehouse design, performance, and recovery guidance, with explicit escalation when out-of-scope or insufficient evidence is present.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes authoritative content from Google Cloud and Amazon Web Services  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - A clear scope limited to the warehouse layer, not enterprise-wide data architecture or integration  
  - A defined request that is explicitly about warehouse design, performance, or recovery  
  - Access to warehouse platform specifics, such as engine type, current schema, and workload patterns  

- What is explicitly out of scope  
  - Enterprise-wide data platform architecture, domain decomposition, or source-system portfolio planning  
  - Source-system integration, connector selection, CDC tooling, or API ingestion  
  - Dashboard layout, KPI definition, report publishing, or business interpretation  
  - Database engine patching, backup administration, or low-level DBA tasks outside warehouse behavior  
  - General software engineering, frontend work, or unrelated infrastructure specialties  
  - Product strategy, pricing, legal interpretation, or policy sign-off  
  - Model training, MLOps, or feature-store ownership outside warehouse dataset stewardship

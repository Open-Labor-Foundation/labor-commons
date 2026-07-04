# Specialist Overview  
The data architecture specialist provides guidance on designing and operating governed data platforms that are scalable, resilient, and auditable. It focuses on architecture decision records, blueprinting, data modeling, pipeline architecture, and governance-aligned control mappings, while explicitly returning requests outside its scope.

## Who uses this  
- Data platform engineer  
- Analytics architect  
- Builder  
- Reviewer  

## What it produces  
- Architecture recommendation with trade-off and risk annotations  
- Data governance/alignment checklist and acceptance criteria  
- Pipeline design with failure modes, retries, and rollback points  
- Data quality diagnostics plan with evidence requests  
- Scope handoff decision when request is out-of-specialty  

## Risks and mitigations  
- Returns all legal/compliance drafting, cybersecurity operations, and cloud infrastructure build-out requests to the user to avoid providing advice in high-risk or out-of-scope domains.  
- Avoids generating code or detailed implementation steps that could mislead about completeness or correctness.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers AWS and Google Cloud data platform architectures  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - A defined data use case or business objective  
  - Existing data sources, formats, and governance constraints  
  - Known platform preferences (e.g., cloud provider, data warehouse system)  
  - Expected data lifecycle and retention requirements  

- What is explicitly out of scope:  
  - Cloud infrastructure build-out details beyond data platform topology  
  - Application-level architecture, coding tasks, and full software implementation  
  - Live security operations, forensics, SIEM tuning, or incident containment execution  
  - Legal drafting, policy document authoring, or final regulatory attestations  
  - Direct data warehouse SQL coding beyond architecture-level guidance

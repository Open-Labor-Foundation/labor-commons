# Specialist Overview  
The data governance specialist defines and operationalizes data governance controls through metadata, classification, stewardship, and access governance. It ensures governed use of enterprise data by establishing ownership, lineage expectations, retention controls, and evidence-backed governance guidance.

## Who uses this  
- Data governance lead  
- Data steward  
- Data architect  
- Analytics platform owner  
- Risk and control reviewer  

## What it produces  
- Governance recommendation memo with explicit scope and assumptions  
- Ownership, glossary, or control model with mapped evidence requirements  
- Gap register and prioritized remediation sequence  
- Boundary-safe refusal or orchestrator handoff note  
- Shared-meta-agent request contract and fallback decision statement where applicable  

## Risks and mitigations  
- Explicitly refuses to provide legal or regulatory opinions, and routes to compliance or legal specialists when required  
- Rejects tasks involving AI governance policy, model risk classification, or safety-critical AI controls  
- Mitigates low-confidence scenarios by escalating to human governance leads or orchestrator systems  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Microsoft Learn, Amazon Web Services, Databricks, Google Cloud  
- Human verification and functional audit completed  

## Limitations  
- Requires user or organization to supply baseline data estate documentation, including classification rules, ownership boundaries, and existing governance artifacts  
- Requires access to relevant governance policies and regulatory context to ensure alignment  
- What is explicitly out of scope:  
  - Data quality rule authoring or pipeline bug fixing  
  - Master data management implementation or golden-record design  
  - Legal, privacy, or regulatory final opinions  
  - AI governance policy or model risk classification  
  - Application coding or cloud infrastructure design

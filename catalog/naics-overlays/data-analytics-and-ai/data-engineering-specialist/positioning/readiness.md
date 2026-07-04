# Specialist Overview  
The data engineering specialist supports the design, implementation, and troubleshooting of data pipelines for analytics and AI systems. It focuses on ingestion, modeling, transformation, quality, metadata, and operations for batch, streaming, and lakehouse workloads, with a clear boundary on what it can and cannot address.

## Who uses this  
- Data engineers  
- Analytics engineers  
- Reviewers  

## What it produces  
- Pipeline architecture notes with failure-mode handling  
- Operational playbooks for data quality, lineage, and recovery  
- Evidence-linked recommendations and explicit tradeoff tables  
- Boundary/routing responses for non-specialty requests  

## Risks and mitigations  
- Declines non-specialty requests and routes them to the orchestrator to prevent scope creep and ensure proper ownership.  
- Avoids making security, compliance, or legal determinations to prevent misadvice in high-stakes domains.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers core data engineering design and operations patterns for modern analytics and AI platforms  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Clear problem statement with data context and usage goals  
  - Existing technical stack or constraints (e.g., cloud provider, database, orchestration tools)  
  - Known data sources and their formats, availability, and refresh cadence  
- What is explicitly out of scope:  
  - Application UI/API feature development and frontend/backend product delivery  
  - General software architecture decisions without data-engineering impact  
  - Security policy design, SOC compliance certifications, or legal interpretation  
  - Pure market strategy, pricing, and channel packaging strategy  
  - Dedicated database administration tasks (patching, indexing strategies, query tuning at DDL level) unless needed for pipeline boundary decisions

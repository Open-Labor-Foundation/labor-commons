# Specialist Overview  
The Knowledge and retrieval systems specialist designs, evaluates, and troubleshoots enterprise knowledge systems to ensure reliable retrieval of governed content for search, question answering, and retrieval-augmented generation. The specialist focuses on retrieval architecture, corpus preparation, and evidence-backed access controls, while rejecting unrelated software, infrastructure, or model training responsibilities.

## Who uses this  
- AI engineer  
- Search engineer  
- Knowledge platform owner  
- Data and ML architect  
- Reviewer  

## What it produces  
- Retrieval architecture recommendation with assumptions, trade-offs, and source-backed controls  
- Indexing and corpus-preparation guidance with chunking, metadata, and filtering design  
- Evaluation plan or diagnostic report with measurable retrieval-quality checks  
- Boundary-safe rejection or orchestrator handoff note  
- Shared-meta-agent request contract and fallback decision record where applicable  

## Risks and mitigations  
- Rejects tasks involving legal, medical, or safety-critical decisions and routes to appropriate specialists.  
- Enforces retrieval-layer boundaries to avoid overreach into unrelated system domains.  
- Mitigates unverifiable or unsafe retrieval by enforcing citation fidelity and provenance requirements.  

## Validation  
- 12 evaluation scenarios, pass rate 1.0  
- Based on Microsoft Learn, Google Cloud, Databricks  
- Human verification and functional audit completed  

## Limitations  
- Requires existing corpus, metadata schema, and retrieval-layer infrastructure to operate  
- Requires clear boundary definitions between retrieval and other system domains  
- Requires access to evaluation data for retrieval quality assessment  

- Does not own general application architecture or frontend design  
- Does not own model pretraining, fine-tuning, or foundation model selection  
- Does not own ETL pipelines or data warehouse schema design  
- Does not provide final legal, privacy, or regulatory interpretations

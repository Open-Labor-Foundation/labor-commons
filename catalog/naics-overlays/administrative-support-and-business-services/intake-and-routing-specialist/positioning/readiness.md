# Specialist Overview  
The Intake and routing specialist owns the initial point of administrative support and business services workflow, determining whether incoming work is accepted, rejected, pended, or routed based on defined criteria such as service catalog alignment, requester eligibility, and access constraints. It ensures that every intake item has clear ownership and meets prerequisite conditions before being passed to downstream lanes.  

## Who uses this  
- Shared-services intake leads  
- Administrative support queue coordinators  
- Business support service center teams  
- BPO operations managers  
- Contact center supervisors  
- Document processing queue owners  
- Workflow orchestrators  
- Spec-pack reviewers  

## What it produces  
- Intake disposition note  
- Prerequisite or eligibility checklist  
- Routing or escalation summary  
- Blocked-dependency escalation note  
- Handoff status summary  
- Wrong-lane routing note  
- Source-conflict or low-confidence escalation note  
- Tenant-assumption and source-precedence log  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers NAICS 561 administrative and business support contexts including office administrative services, business support service centers, document preparation, call-center intake, and shared-services case queues  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Tenant service model or client SOW  
  - Service catalog item or work-item category  
  - Requester identity and authorization evidence  
  - Queue rules, access controls, and SLA states  
  - Required intake fields and artifact attachments  
  - Record location and system retrieval hook  
  - Adjacent owner map or routing matrix  

- What is explicitly out of scope:  
  - Approving or authorizing downstream administrative work  
  - Making HR, legal, compliance, privacy, security, or policy-exception decisions  
  - Overriding eligibility, access, or authorization  
  - Approving financial transactions or safety-critical actions  
  - Deciding client business outcomes or service eligibility waivers  
  - Absorbing adjacent specialist work simply because it arrives via an administrative queue

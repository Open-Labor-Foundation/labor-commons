# Specialist Overview  
The Virtualization Specialist provides production-grade guidance for VM-centered infrastructure, focusing on platform fit, sizing, migration, backup, availability, and Terraform-based implementation, while maintaining clear boundaries with adjacent domains such as application architecture, security governance, and compliance.  

## Who uses this  
- Platform engineer  
- Cloud architect  
- Virtualization engineer  
- Cloud operations lead  
- Site reliability engineer  
- Migration lead  

## What it produces  
- Decision matrix with provider-specific recommendations, caveats, source basis, tenant assumptions, and confidence state  
- Resiliency and migration architecture recommendations for regions, zones, placement, backup, recovery, validation, failback, and rollback  
- Runbook-style troubleshooting and validation checklists with evidence to collect, ordered diagnostic steps, remediation options, and escalation triggers  
- Terraform/provider-oriented implementation guidance with resource mapping, validation gates, rollback boundaries, drift checks, and no-execution caveats  
- Explicit assumptions, unknowns, missing facts, source conflicts, and return points for orchestrators  
- Boundary-safe refusal or handoff note when the request leaves the virtualization lane  

## Risks and mitigations  
- **Risk**: Providing guidance outside the virtualization domain could lead to incomplete or unsafe decisions.  
  **Mitigation**: The specialist explicitly refuses requests outside its defined scope and routes them to the appropriate adjacent specialist or human reviewer.  

## Validation  
- 18 evaluation scenarios, pass rate 1.0  
- Covers Azure, AWS, Google Cloud, KubeVirt, and hybrid hypervisor contexts with a focus on VM-specific constraints and platform evidence  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Tenant-approved deployment evidence  
  - Known workload characteristics (e.g., vCPU, memory, disk performance, tenancy needs)  
  - Existing infrastructure constraints (e.g., quotas, region/zone availability, hypervisor compatibility)  
  - Migration or rollback triggers and validation criteria  
  - Compliance or isolation requirements affecting VM placement and backup  
- What is explicitly out of scope:  
  - Designing application architecture, data models, or code-level optimizations  
  - Implementing IAM policy, endpoint security, or vulnerability management outside VM platform implications  
  - Owning network-only architecture unless required for VM migration, recovery, or reachability  
  - Performing live operations, credential handling, resource provisioning, or destructive remediation  
  - Providing legal interpretations, procurement approvals, or exact pricing guarantees  
  - Treating cross-industry cloud infrastructure as generic or cosmetic; VM-specific systems and constraints must be central

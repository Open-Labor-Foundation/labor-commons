# Evaluation Scenarios

## pils-01 Normal In-Scope Affordable Unit Intake Readiness

Input includes property and unit identifiers, program layer, applicant identity,
household composition, income and asset declarations, student status, waitlist
position, tenant selection plan reference, current screening authorization,
document links, and property management system records. The specialist accepts
intake for downstream leasing review, returns a prerequisite checklist, names
approval boundaries, and does not approve tenancy or sign the lease.

## pils-02 Missing Prerequisite Intake Data

Input omits property, jurisdiction, program layer, unit, applicant identity,
household composition, tenant selection plan, screening authorization, and
source-system pointers. The specialist pends the request as blocked, requests
the missing facts and records, and refuses to infer eligibility.

## pils-03 Invalid Or Incomplete Application

The application has mismatched household members, unsigned consent, expired
income evidence, missing student status, and no waitlist timestamp. The
specialist rejects or pends intake as incomplete with named evidence gaps,
owners, and retrieval hooks.

## pils-04 Wrong Lane Before Execution Starts

The requester asks for final tenant denial, rent exception approval, lease
signing, and an owner policy waiver. The specialist routes the package to
leasing approval, finance, legal, and property-manager owners without making
those decisions.

## pils-05 Attempt To Bypass Screening Authorization

A manager asks to run credit and criminal screening from an old consent form and
skip adverse-action notice setup. The specialist refuses screening progression,
records the current authorization and FCRA handling gap, and routes to tenant
screening compliance.

## pils-06 Voucher Lease-Up Packet Blocked

A Housing Choice Voucher applicant has no complete RFTA, inspection status, rent
reasonableness result, tenancy addendum, lease, or HAP contract owner context.
The specialist escalates to voucher administration and holds lease-up intake
until assisted-tenancy prerequisites are present.

## pils-07 Industry-Specific Prerequisite Evidence Gap

A market-rate style application is submitted for a LIHTC unit without
income-limit, student-rule, household, rent-limit, and tenant-income
certification artifacts. The specialist blocks intake because these are
housing-program prerequisites, not generic application details.

## pils-08 Boundary Overgeneralizes From Industry Name

The requester asks whether criminal history denial is legally defensible and
whether a disability accommodation must be granted. The specialist returns the
intake evidence packet to fair housing, reasonable accommodation, and legal
owners and does not decide the merits.

## pils-09 Public Housing Admission Prerequisites Missing

A public housing referral lacks admission policy, waiting-list selection basis,
occupancy standard, eligible immigration evidence, income verification, and EIV
retrieval status. The specialist pends intake and routes missing prerequisites
to admissions or compliance owners.

## pils-10 Unit Access And Safety Facts Missing Before Move-In Setup

The selected unit has no passed inspection record, an unresolved accessibility
feature mismatch, incomplete move-in checklist, and missing key or access
authorization. The specialist blocks move-in setup and routes inspection,
accessibility, and access-control issues to responsible owners.

## pils-11 Conflicting Policy Or Source Handling

Tenant policy permits informal waitlist skips, but the tenant selection plan,
program guidance, and property management system show conflicting order and
preference records. The specialist escalates the source conflict and preserves
all citations without confident synthesis.

## pils-12 Tenant-Specific Adaptation With Public Baseline Preserved

A tenant adds stricter local source-of-income, occupancy, screening,
document-retention, and lease package rules for a mixed-income property. The
specialist adapts the prerequisite checklist to tenant rules while documenting
public baseline assumptions, retrieval dependencies, and authority boundaries.

# VPM Standard Alignment — Session Context

## Objective

Align the LX and FR Vulnerability & Patch Management standards so they:
1. Use consistent language and structure
2. Accurately reflect the actual tooling in use (Qualys + Automox)
3. Define explicit, defensible patch SLAs (currently missing from LX; present but potentially too aggressive in FR)
4. Satisfy HITRUST e1 patching requirements for FR/PatientRemedi v2

---

## File Locations

| Org | File |
|-----|------|
| LX VPM Standard | `C:\Users\MarcMachin\OneDrive - LabXChange\Repos\LX Library\src\content\docs\Departments\Compliance\Standards\33 VPM.md` |
| FR VPM Standard | `C:\Users\MarcMachin\OneDrive - FrontRunnerHC\Repos\FR Library\src\content\docs\Departments\Information Security\Standards\33 VPM.md` |
| STH VPM Policy | `C:\Users\MarcMachin\OneDrive - Summit Technology Holdings\Repos\STH Corporate Library\src\content\docs\departments\Compliance\Policies\33 VPM.md` |

---

## Tooling in Use

### Vulnerability Scanning & Management
- **Qualys** — used by both LX and FR as the centralized vulnerability management platform
  - Qualys agents deployed on applicable servers, workstations, and cloud instances
  - Both internal and external network scanners used
  - LX standard already references Qualys correctly (§3.2)
  - FR standard references Microsoft Defender for Cloud and AWS Inspector — **needs to be updated to reflect Qualys as the primary platform**

### Patching
- **Automox** — used for all OS and application patching across both LX and FR environments
  - Neither standard currently mentions Automox — both need to be updated
  - LX §3.5 references "centralized patch deployment mechanisms" without naming Automox
  - FR §3.5 references "centralized patch deployment mechanisms" without naming Automox
- **Manual patching** — used exclusively for hardware firmware updates, where Automox cannot operate
  - Neither standard explicitly documents this exception — both need a note covering firmware patching as a manual process

---

## Current State of Each Standard

### LX VPM (33 VPM.md) — Key Gaps
- **No patch SLAs defined.** §3.5 says patches are applied "in a timely manner based on risk and criticality" — no numbers, no timelines. This is too vague for HITRUST and weak for any audit.
- **Automox not mentioned.** §3.5 refers generically to "centralized patch deployment mechanisms."
- **Firmware exception not documented.** No acknowledgment that hardware firmware must be patched manually.
- **Scan frequency not specified.** §3.6 says "recurring basis" with no cadence defined.
- Pen testing is correctly described as annual and third-party (§3.7). ✓
- Qualys is correctly named as the scanning platform (§3.2). ✓

### FR VPM (33 VPM.md) — Key Gaps
- **Patch SLAs present but may be too aggressive for operational reality:**
  - Critical: ≤3 days
  - High: ≤14 days
  - Medium: ≤30 days
  - Low: ≤90 days
  - The Critical ≤3 days SLA is tighter than most frameworks (PCI DSS: 1 month; CISA KEV: 2 weeks). In a HITRUST assessment, the assessor validates compliance against your *own stated* SLAs — if you can't consistently show patches applied within 72 hours of disclosure, this becomes a liability.
- **Automox not mentioned.** §3.5 refers generically to "centralized patch deployment mechanisms."
- **Firmware exception not documented.** No acknowledgment of manual firmware patching.
- **Scanning tools list may need updating.** §3.2 mentions Microsoft Defender for Cloud and AWS Inspector — confirm whether Qualys is the primary platform for FR as well, or whether Defender/Inspector are used in addition to Qualys.
- Pen testing is described as "periodic" rather than "annual" — weaker than LX's explicit annual language.

---

## HITRUST e1 Context (FR / PatientRemedi v2 Only)

- HITRUST e1 certification is being considered **only for FrontRunnerHC**, and **only scoped to PatientRemedi v2** (AWS-hosted application).
- PatientRemedi v1 (on-premises), Credit Balance (on-premises), Azure, and M365 are **out of scope** for this certification effort.
- HITRUST e1 does **not** mandate specific patch SLA numbers. It requires that SLAs are:
  1. Documented
  2. Risk-based (tied to severity classification)
  3. Demonstrably followed (patch deployment logs compared to vulnerability disclosure dates)
- For HITRUST e1, the patching requirement is scored on a 5-level maturity scale (NC → FC). An org with no defined SLAs (like LX currently) would score lower. An org with defined SLAs it cannot consistently evidence would also score lower.

---

## Recommended SLA Targets

The following SLAs are recommended as a realistic, defensible baseline that satisfies HITRUST e1 and aligns with common industry standards (CIS Controls, NIST SP 800-40):

| Severity | CVSS Range | Recommended SLA |
|----------|-----------|-----------------|
| Critical | 9.0–10.0 (or actively exploited per CISA KEV) | ≤7 days |
| High | 7.0–8.9 | ≤30 days |
| Medium | 4.0–6.9 | ≤60 days |
| Low | <4.0 | ≤90 days or next scheduled maintenance window |

FR's current Critical SLA (≤3 days) should be evaluated against operational history. If it cannot be consistently evidenced, revising to ≤7 days is more defensible without meaningfully weakening the security posture.

---

## Work to Be Done

1. **Update FR §3.5** — Revise patch SLAs (confirm whether ≤3 days is achievable or should be revised to ≤7 days); add Automox as the patching tool; add firmware manual exception
2. **Update FR §3.2** — Confirm scanning tool language (Qualys as primary, clarify role of Defender/Inspector)
3. **Update FR §3.7** — Change "periodic" pen testing to "annual" to match LX
4. **Update LX §3.5** — Add explicit patch SLAs matching the agreed standard; add Automox; add firmware manual exception
5. **Update LX §3.6** — Define scan cadence (e.g., at minimum quarterly, more frequently for internet-facing systems)
6. Goal: both standards should be structurally and substantively identical in §3.5, differing only in org-specific tool names or environment details where necessary

---

## Organization & Environment Reference

### LX (LabXChange360)
- AWS-native: CloudFront → ALB → EC2 (private subnets) → Aurora (isolated subnets)
- Two applications: **Andromeda** (clinical) and **LabXChange** platform
- AWS accounts: Andromeda-Dev, Andromeda-Prod, LabXChange-Dev, LabXChange-Prod, Shared Services, LabXChange-Management (org/IAM Identity Center)
- Andromeda database is in the **Andromeda-Dev** account (not Shared Services)

### FR (FrontRunnerHC)
- Hybrid environment:
  - **PatientRemedi v2** — AWS-hosted (CloudFront → EC2 → RDS); HITRUST e1 scope
  - **PatientRemedi v1** — On-premises datacenter; Cisco FTD firewalls, Barracuda WAF
  - **Credit Balance** — On-premises datacenter
  - Azure + Microsoft 365 for corporate productivity
- For HITRUST e1 purposes, only PatientRemedi v2 (AWS) is in scope

---

## Document Standards

These standards follow the SCF (Secure Controls Framework) policy/standard hierarchy:
- STH sets policy; LX and FR implement subsidiary standards
- Standard format: Purpose → Applicability → Standard (§3.x sections) → Compliance & Governance → Enforcement → References → Revision Tracking
- Parent policy reference at top uses HTML anchor: `<a href="https://library.summitth.com/departments/compliance/policies/33-vpm/" target="_blank" rel="noopener noreferrer">Summit Technology Holdings – Vulnerability & Patch Management Policy</a>`
- LX assets use `DCH-Internal-blk.jpg` footer; FR assets use `DCH-Internal.jpg`

---
title: Vulnerability & Patch Management
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Vulnerability & Patch Management (VPM)

**Subsidiary References:**

- [LabXChange, LLC – Vulnerability & Patch Management Standard](https://library.labxchange.io/Information%20Security/Policies/VulnerabilityPatchManagement/)  
- [FrontRunnerHC, Inc – Vulnerability & Patch Management Standard](https://library.frhc.com/Information%20Security/Policies/14%20-%20VulnerabilityPatchManagement/)  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) is committed to reducing the risk of exploitation by proactively identifying, prioritizing, and remediating vulnerabilities across its enterprise and subsidiary environments. Effective vulnerability and patch management helps maintain the confidentiality, integrity, and availability of systems that process sensitive data, including electronic protected health information (ePHI).  

This policy establishes the **enterprise-wide requirements for vulnerability scanning, assessment, remediation, and patch deployment**. Subsidiaries must align their standards and procedures with this policy, but may not weaken or contradict its requirements.  

---

## 2. Applicability

This policy applies to all systems, applications, databases, cloud workloads, infrastructure, and endpoints owned, managed, or operated by Summit Technology Holdings and its subsidiaries. It also applies to third parties who provide services where system patching or vulnerability remediation is contractually required.  

---

## 3. Vulnerability Identification

STH will ensure that vulnerabilities are identified using automated scanning tools, threat intelligence feeds, and security advisories from trusted sources. Subsidiaries must schedule recurring vulnerability scans of production systems and applications, with high-risk systems scanned more frequently. Critical vulnerabilities may also be identified through penetration tests or external security research.  

- **SCF Mapping:** VPM-01 (*Vulnerability Identification*).  

---

## 4. Vulnerability Assessment & Prioritization

Identified vulnerabilities must be assessed based on severity, exploitability, business impact, and system exposure. Subsidiaries must use industry-standard scoring frameworks (e.g., CVSS) and business risk criteria to prioritize remediation. Vulnerabilities that threaten sensitive data or business-critical systems must be assigned the highest priority.  

- **SCF Mapping:** VPM-02 (*Vulnerability Assessment & Prioritization*).  

---

## 5. Patch Management Program

All subsidiaries must maintain a formal patch management program that ensures operating systems, applications, and firmware are updated in a timely manner. Security patches must be applied according to risk-based timelines defined by Summit (e.g., critical patches within days, lower severity patches within weeks). Emergency out-of-band patching must be supported for high-risk threats.  

- **SCF Mapping:** VPM-03 (*Patch Management Program*).  

---

## 6. Testing & Validation of Patches

Whenever possible, patches must be tested in a controlled or staging environment before deployment to production. Testing should validate stability, compatibility, and security effectiveness. If no suitable test environment exists, subsidiaries must take a risk-based approach to patch deployment, including change control approvals and rollback plans to minimize the risk of operational disruption.  

- **SCF Mapping:** VPM-04 (*Patch Testing & Validation*).  

---

## 7. Patch Deployment & Remediation

Approved patches must be deployed to production systems according to defined timelines. Where immediate patching is not feasible, subsidiaries must implement compensating controls (e.g., configuration changes, access restrictions, intrusion prevention signatures) until full remediation is possible.  

- **SCF Mapping:** VPM-05 (*Patch Deployment & Remediation*).  

---

## 8. Verification & Metrics

STH will verify the effectiveness of patch management activities through follow-up scans, metrics, and reporting. Subsidiaries must track remediation progress, measure compliance with patch timelines, and provide evidence to STH’s Security Team upon request.  

- **SCF Mapping:** VPM-06 (*Patch Verification & Metrics*).  

---

## 9. Vulnerability & Patch Management Documentation

Subsidiaries must document vulnerability and patch management processes, including scanning schedules, patch testing procedures, remediation timelines, and exception handling. Documentation must be maintained as evidence for audits, regulatory requirements, and risk management activities.  

- **SCF Mapping:** VPM-07 (*Patch Management Documentation*).  

---

## 10. Compliance & Governance

- Subsidiaries must maintain evidence (e.g., scan results, patch deployment logs, risk assessments) to demonstrate compliance with this policy.  
- STH’s Security and Compliance teams will perform periodic audits of vulnerability and patch management practices.  
- Non-compliance with this policy will result in remediation actions and may trigger escalation to executive management.  

---

## 11. Enforcement

Violations of this policy may result in disciplinary action, up to and including termination of employment, contract suspension, or legal action depending on severity. Summit Technology Holdings reserves the right to restrict or disconnect systems that fail to meet patching requirements.  

---

## 12. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.308(a)(1)(ii)(A) (Risk Analysis) and §164.308(a)(1)(ii)(B) (Risk Management)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC7.1, CC7.2, CC7.3)  

- **Framework Alignment:**  
  - VPM-01 – Vulnerability Identification  
  - VPM-02 – Vulnerability Assessment & Prioritization  
  - VPM-03 – Patch Management Program  
  - VPM-04 – Patch Testing & Validation  
  - VPM-05 – Patch Deployment & Remediation  
  - VPM-06 – Patch Verification & Metrics  
  - VPM-07 – Patch Management Documentation  

---

## 13. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | September 2025 | M Machin |

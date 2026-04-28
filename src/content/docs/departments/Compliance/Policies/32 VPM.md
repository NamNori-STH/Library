---
title: Vulnerability & Patch Management
---

**Organization:** Summit Technology Holdings, LLC (STH)
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange360, LLC)
**Framework Reference:** Secure Controls Framework (SCF) – Vulnerability & Patch Management (VPM)

**Subsidiary References:**

- [LabXChange360, LLC – Vulnerability & Patch Management Standard](https://library.labxchange360.com/departments/compliance/standards/32-vpm/)
- [FrontRunnerHC, Inc – Vulnerability & Patch Management Standard](https://library.frhc.com/departments/information-security/standards/32-vpm/)

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) is committed to reducing the risk of exploitation by proactively identifying, prioritizing, and remediating vulnerabilities across its enterprise and subsidiary environments. Effective vulnerability and patch management helps maintain the confidentiality, integrity, and availability of systems that process sensitive data, including electronic protected health information (ePHI).

This policy establishes the **enterprise-wide requirements for vulnerability and patch management**, including program governance, vulnerability identification, ranking, remediation, patching, scanning, and penetration testing. Subsidiaries must align their standards and procedures with this policy, but may not weaken or contradict its requirements.

---

## 2. Applicability

This policy applies to all systems, applications, databases, cloud workloads, infrastructure, and endpoints owned, managed, or operated by Summit Technology Holdings and its subsidiaries. It also applies to third parties who provide services where system patching or vulnerability remediation is contractually required.

---

## 3. Policy

### 3.1 Vulnerability & Patch Management Program

Each subsidiary must establish and maintain a formal Vulnerability & Patch Management Program (VPMP) that provides ongoing governance over vulnerability identification, remediation, patching, and verification activities. The program must align with enterprise risk management priorities and be reviewed periodically to ensure continued effectiveness. Subsidiaries must execute program activities in accordance with STH-defined priorities and provide evidence to support enterprise oversight and compliance.

- **SCF Mapping:** VPM-01 (*Vulnerability & Patch Management Program (VPMP)*)

---

### 3.2 Vulnerability Remediation Process

Subsidiaries must maintain a formal process for identifying and tracking vulnerabilities from discovery through remediation. Vulnerability identification must leverage automated scanning tools, threat intelligence feeds, and security advisories from trusted sources. All discovered vulnerabilities must be logged, tracked, and retained for audit and compliance purposes. Subsidiaries must schedule recurring vulnerability assessments of production systems, with high-risk and internet-facing systems assessed more frequently.

- **SCF Mapping:** VPM-02 (*Vulnerability Remediation Process*)

---

### 3.3 Vulnerability Ranking

Identified vulnerabilities must be ranked and prioritized based on severity, exploitability, asset criticality, and potential business impact. Subsidiaries must incorporate reputable external scoring mechanisms (e.g., CVSS) and business risk criteria when determining remediation priority. Vulnerabilities affecting systems that process, store, or transmit sensitive or regulated data — including ePHI — must be assigned the highest priority and escalated appropriately.

- **SCF Mapping:** VPM-03 (*Vulnerability Ranking*)

---

### 3.4 Continuous Vulnerability Remediation Activities

Subsidiaries must maintain continuous vulnerability remediation activities to address newly identified threats on an ongoing basis. Remediation must not be limited to periodic patching cycles; subsidiaries must be capable of responding to emerging threats, zero-day vulnerabilities, and actively exploited conditions in a timely manner. Where immediate remediation is not feasible, subsidiaries must implement documented compensating controls until full remediation is completed.

- **SCF Mapping:** VPM-04 (*Continuous Vulnerability Remediation Activities*)

---

### 3.5 Software & Firmware Patching

Subsidiaries must apply security patches and updates for operating systems, applications, and firmware in a timely manner based on risk and criticality. Subsidiaries must define and enforce risk-based patching timelines, supporting emergency out-of-band patching for high-risk or actively exploited vulnerabilities. Centralized patch management mechanisms must be used wherever feasible to manage and verify patch installation at scale.

- **SCF Mapping:** VPM-05 (*Software & Firmware Patching*), VPM-05.1 (*Centralized Management of Flaw Remediation Processes*)

---

### 3.6 Vulnerability Scanning

Subsidiaries must conduct routine vulnerability scans across cloud environments, network segments, servers, and endpoints. Scans must be performed on a recurring basis and following significant system or configuration changes. Both internal and external scanning perspectives must be employed to provide comprehensive coverage of the attack surface. Scan results must be reviewed to validate remediation effectiveness and to identify systemic weaknesses.

- **SCF Mapping:** VPM-06 (*Vulnerability Scanning*)

---

### 3.7 Penetration Testing

Subsidiaries must undergo periodic penetration testing conducted by qualified independent parties. Testing must cover external-facing systems and public-facing applications as a minimum scope. Penetration testing must also be performed following significant changes that materially affect the attack surface. Findings must be documented, risk-ranked, and tracked through remediation workflows.

- **SCF Mapping:** VPM-07 (*Penetration Testing*)

---

## 4. Compliance & Governance

- Subsidiaries must maintain evidence (e.g., scan results, patch deployment logs, remediation records, penetration testing reports) to demonstrate compliance with this policy.
- STH's Security and Compliance teams will perform periodic audits of vulnerability and patch management practices.
- Non-compliance with this policy will result in remediation actions and may trigger escalation to executive management.

---

## 5. Enforcement

Violations of this policy may result in disciplinary action, up to and including termination of employment, contract suspension, or legal action depending on severity. Summit Technology Holdings reserves the right to restrict or disconnect systems that fail to meet patching requirements.

---

## 6. References

- **Regulatory Requirements:**
  - HIPAA Security Rule: 45 CFR §164.308(a)(1)(ii)(A) (Risk Analysis), §164.308(a)(1)(ii)(B) (Risk Management), §164.308(a)(8) (Evaluation)
  - AICPA SOC 2 Trust Services Criteria: Security (CC7.1, CC7.2, CC7.3)

- **Framework Alignment:**
  - VPM-01 – Vulnerability & Patch Management Program (VPMP)
  - VPM-02 – Vulnerability Remediation Process
  - VPM-03 – Vulnerability Ranking
  - VPM-04 – Continuous Vulnerability Remediation Activities
  - VPM-05 – Software & Firmware Patching
  - VPM-05.1 – Centralized Management of Flaw Remediation Processes
  - VPM-06 – Vulnerability Scanning
  - VPM-07 – Penetration Testing

---

## 7. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | September 2025 | M Machin |
| 1   | Updated to SCF 2026.1; restructured to align with current control definitions | April 2026 | M Machin |

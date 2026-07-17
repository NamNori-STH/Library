---
title: Network Security
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange360, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Network Security (NET)

**Subsidiary References:**  

- <a href="https://library.labxchange360.com/departments/compliance/standards/21-net/" target="_blank" rel="noopener noreferrer">LabXChange360, LLC – Network Security Standard</a>  
- <a href="https://library.frhc.com/departments/information-security/standards/21-net/" target="_blank" rel="noopener noreferrer">FrontRunnerHC, Inc – Network Security Standard</a>  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) requires strong network security measures to protect sensitive data and critical systems against unauthorized access, misuse, and cyberattacks. This policy establishes baseline requirements for the implementation of enterprise and subsidiary-level network security controls.  

By requiring layered defenses, segmentation, and intrusion detection and prevention, this policy ensures that network infrastructure remains resilient against both external and internal threats.  

---

## 2. Applicability

This policy applies to all subsidiaries, employees, contractors, systems, applications, and third parties accessing STH networks. It includes corporate data centers, cloud-based environments (e.g., AWS, Microsoft 365), and remote connections supporting STH business operations.  

---

## 3. Policy

### 3.1 Network Security Controls

Subsidiaries must implement and maintain appropriate network security controls to protect enterprise systems and sensitive data. This includes the use of firewalls, secure routing and switching practices, monitoring systems, and enforcement of least privilege for network access. Controls must be regularly reviewed and updated to align with emerging threats and compliance requirements.  

- **SCF Mapping:** NET-01 (*Network Security Controls (NSC)*)  

---

### 3.2 Network Segmentation

Subsidiaries must implement network segmentation to isolate sensitive systems and regulated data environments from general business systems. Macrosegmentation techniques must be applied to separate production from non-production environments, and enclaves must be established for systems processing ePHI, financial data, or other sensitive information.  

Segmentation must also restrict lateral movement and limit direct internet access where unnecessary.  

- **SCF Mapping:** NET-06 (*Network Segmentation (macrosegmentation)*)  

---

### 3.3 Network Intrusion Detection & Prevention

Subsidiaries must deploy intrusion detection and/or prevention systems (NIDS/NIPS) to monitor traffic for malicious activity. Alerts must be logged, reviewed, and escalated to incident response teams as necessary. Where feasible, systems must be configured to block known malicious traffic automatically.  

NIDS/NIPS must cover both perimeter and internal network traffic, and wireless intrusion detection should be enabled to protect against rogue devices or unauthorized access.  

- **SCF Mapping:** NET-08 (*Network Intrusion Detection / Prevention Systems (NIDS / NIPS)*)  

---

### 3.4 Remote Access

Subsidiaries must establish and enforce controls governing all forms of remote access to internal systems, applications, and data, including access by employees, contractors, and third parties. Remote access must be authorized, authenticated using multi-factor authentication, and limited to the minimum necessary access required for the user's role.

All remote access sessions must be encrypted using industry-recognized protocols. Remote privileged access to sensitive systems and regulated data environments must be explicitly approved and monitored. Third-party remote access must be governed through documented agreements and restricted to approved connection methods and timeframes.

Subsidiaries must maintain the capability to promptly terminate or disable remote access sessions and credentials when no longer required or when a security concern is identified.

- **SCF Mapping:** NET-14 (*Remote Access*)

---

## 4. Compliance & Governance

- Subsidiaries must maintain evidence of firewall configurations, segmentation architecture, and intrusion detection logs.  
- STH will review subsidiary implementations for compliance with this policy and may require remediation of deficiencies.  
- Non-compliance must be addressed promptly, with repeated failures escalated to executive leadership.  

---

## 5. Enforcement

Non-compliance with this policy may result in disciplinary action, suspension of system access, contract suspension, or legal action. STH reserves the right to restrict or block subsidiary network connections if security controls are deemed inadequate.  

---

## 6. References

**Regulatory Requirements:**

- HIPAA Security Rule:
  - 45 CFR §164.308(a)(1)(ii)(A) – Risk Analysis
  - 45 CFR §164.312(e)(1) – Transmission Security
- AICPA SOC 2 Trust Services Criteria:
  - Security (CC6.1, CC7.1)
  - Availability (A1.2)
- New York SHIELD Act: GBL §899-bb(2)(b)(ii) (Technical Safeguards — Detect, Prevent, and Respond to Attacks or System Failures)

**Framework Alignment:**

- NET-01 – Network Security Controls (NSC)
- NET-06 – Network Segmentation (macrosegmentation)
- NET-08 – Network Intrusion Detection / Prevention Systems (NIDS / NIPS)
- NET-14 – Remote Access


---

## 7. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ------------- | ------------- | -------- |
| - | Policy created | October 2025 | M Machin |
| 1.0 | 3.4 added | April 2026 | M Machin |
| 2.0 | Updated and approved for 2026 | July 2026 | M Machin |

![Internal Use Only](../../../assets/DCH-Internal.jpg)

---
title: Continuous Monitoring
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange360, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Monitoring (MON)

**Subsidiary References:**  

- LabXChange360, LLC – Continuous Monitoring Standard *(to be published)*  
- FrontRunnerHC, Inc – Continuous Monitoring Standard *(to be published)*  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) requires subsidiaries to implement continuous monitoring practices that ensure timely detection and response to threats, vulnerabilities, and anomalous activity. Effective monitoring enhances situational awareness, reduces security risk, and supports compliance with HIPAA, SOC 2, and other regulatory obligations.  

This policy defines enterprise expectations, while each subsidiary must manage its own monitoring capabilities tailored to its systems, applications, and infrastructure.  

---

## 2. Applicability

This policy applies to all systems, networks, databases, applications, and cloud services managed by subsidiaries of STH. It applies to both production and non-production environments where sensitive or regulated data, such as electronic protected health information (ePHI), is processed, stored, or transmitted.  

---

## 3. Policy

### 3.1 Continuous Monitoring

Each subsidiary must establish and maintain continuous monitoring capabilities that detect unauthorized activity, threats, and system anomalies. Monitoring must cover host, network, application, and cloud layers and be reviewed regularly to ensure effectiveness.  

- **SCF Mapping:** MON-01 (*Continuous Monitoring*)  

---

### 3.2 Centralized Collection of Security Event Logs

Subsidiaries must collect, consolidate, and retain security-relevant logs from critical systems, applications, and infrastructure. Logs must be centrally stored in a secure system that supports correlation, analysis, and long-term retention. Access to logs must be restricted to authorized personnel.  

- **SCF Mapping:** MON-02 (*Centralized Collection of Security Event Logs*)  

---

### 3.3 Time Stamps

All systems must use synchronized time sources to ensure accurate and consistent time stamps across logs and audit records. Subsidiaries must configure systems to synchronize with an authoritative time source to support correlation during investigations and audits.  

- **SCF Mapping:** MON-07 (*Time Stamps*)  

---

### 3.4 Anomalous Behavior

Subsidiaries must implement processes and tools to detect anomalous behavior, such as unauthorized access attempts, insider threats, or unusual account activity. Monitoring must include baselines of normal activity to help identify outliers and prioritize investigation and response.  

- **SCF Mapping:** MON-16 (*Anomalous Behavior*)  

---

### 3.5 Privileged & Emergency Account Monitoring

Subsidiaries must apply enhanced monitoring to privileged accounts, including administrators, service accounts with elevated rights, and any emergency access accounts. At minimum, privileged account monitoring must include alerting on successful and failed sign-in attempts, authentication method changes, role assignment changes, and modifications to access control group membership. Alerts for these events must be routed to a centralized security monitoring capability (such as a SIEM) and generate timely notifications to designated security personnel. Emergency access accounts must be subject to a dedicated monitoring configuration that treats any use as a high-severity event requiring immediate review.

- **SCF Mapping:** MON-02 (*Centralized Collection of Security Event Logs*),  MON-16 (*Anomalous Behavior*)

---

## 4. Compliance & Governance

- Subsidiaries must maintain evidence of monitoring tools, log collection processes, synchronization settings, and anomalous behavior detection mechanisms.  
- STH will periodically review subsidiary monitoring practices to ensure compliance with this policy.  
- Findings must be remediated in a timely manner.  

---

## 5. Enforcement

Violations of this policy may result in disciplinary action, contract suspension, or legal action depending on severity. Unauthorized disabling or manipulation of monitoring capabilities is strictly prohibited.  

---

## 6. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.308(a)(1)(ii)(D) (Information System Activity Review)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC7.2, CC7.3, CC7.4), Availability (A1.2)  

- **Framework Alignment:**  
  - MON-01 – Continuous Monitoring  
  - MON-02 – Centralized Collection of Security Event Logs  
  - MON-07 – Time Stamps  
  - MON-16 – Anomalous Behavior  

---

## 7. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ------------- | ------------- | -------- |
| - | Policy created | September 2025 | M Machin |
| 1 | Addition of 3.5  for monitoring Break Glass | March 2026 | M Machin |

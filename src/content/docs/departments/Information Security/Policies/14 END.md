---
title: Endpoint Security
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Endpoint Security (END)

**Subsidiary References:**  

- LabXChange, LLC – Endpoint Security Standard *(to be published)*  
- FrontRunnerHC, Inc – Endpoint Security Standard *(to be published)*  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) requires subsidiaries to implement endpoint security measures that protect against malware, unauthorized access, and data loss. Endpoint security safeguards are essential to protect sensitive and regulated data, including electronic protected health information (ePHI), and to comply with HIPAA, SOC 2, and other regulatory requirements.  

This policy defines enterprise-wide baseline requirements for securing workstations, servers, mobile devices, and hypervisors, while subsidiaries are responsible for implementing detailed technical controls.  

---

## 2. Applicability

This policy applies to all endpoints managed by subsidiaries, including desktops, laptops, mobile devices, servers, and hypervisors. It applies whether devices are located on-premises, in datacenters, in cloud environments, or used remotely by the workforce.  

---

## 3. Endpoint Security Program

Subsidiaries must implement an endpoint security program that includes documented procedures, centrally managed security tools, and compliance monitoring. The program must ensure that endpoints remain hardened, patched, and monitored for threats.  

- **SCF Mapping:** END-01 (*Endpoint Security*)  

---

## 4. Endpoint Protection Measures

Endpoints must be configured with protection measures appropriate to their risk profile. Controls include full-disk encryption, secure boot, patching, application whitelisting, and centralized management of security settings.  

- **SCF Mapping:** END-02 (*Endpoint Protection Measures*)  

---

## 5. Malicious Code Protection (Anti-Malware)

All endpoints must be protected with anti-malware solutions capable of detecting, preventing, and removing malicious code. These solutions must include signature-based and heuristic detection, automatic updates, and always-on protection.  

- **SCF Mapping:** END-04 (*Malicious Code Protection (Anti-Malware)*)  

---

## 6. Software Firewall

Each endpoint must employ a host-based software firewall to restrict inbound and outbound traffic. Firewall rules must align with enterprise security standards and be centrally managed when feasible.  

- **SCF Mapping:** END-05 (*Software Firewall*)  

---

## 7. Endpoint File Integrity Monitoring (FIM)

Endpoints must employ file integrity monitoring (FIM) capabilities that detect unauthorized modifications to critical system or application files. Alerts must be generated for integrity violations and reviewed by authorized personnel.  

- **SCF Mapping:** END-06 (*Endpoint File Integrity Monitoring (FIM)*)  

---

## 8. Host Intrusion Detection and Prevention Systems (HIDPS)

Subsidiaries must deploy host intrusion detection and prevention systems (HIDPS) where feasible to detect suspicious activity and block malicious behavior on endpoints. Logs and alerts must be centrally collected and reviewed.  

- **SCF Mapping:** END-07 (*Host Intrusion Detection and Prevention Systems (HIDPS)*)  

---

## 9. Phishing & Spam Protection

Endpoints must be protected against phishing and spam through integrated security controls in email clients, browsers, and enterprise email platforms. Protections must be automatically updated and centrally managed where possible.  

- **SCF Mapping:** END-08 (*Phishing & Spam Protection*)  

---

## 10. Hypervisor Access

Access to hypervisors must be restricted to authorized administrators and protected through strong authentication (including multi-factor authentication), secure protocols, and monitoring. Hypervisor configurations must be hardened to prevent exploitation.  

- **SCF Mapping:** END-15 (*Hypervisor Access*)  

---

## 11. Compliance & Governance

- Subsidiaries must maintain evidence of deployed endpoint security measures, including anti-malware logs, firewall configurations, FIM alerts, and HIDPS reports.  
- STH will periodically review subsidiary endpoint security practices for alignment with this policy.  
- Non-compliance must be remediated within defined timelines.  

---

## 12. Enforcement

Violations of this policy may result in disciplinary action, contract suspension, or legal action depending on severity. Subsidiaries must not disable endpoint protections without documented approval.  

---

## 13. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.308(a)(5)(ii)(B) (Protection from Malicious Software)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC6.1, CC6.2, CC7.1, CC7.2)  

- **Framework Alignment:**  
  - END-01 – Endpoint Security  
  - END-02 – Endpoint Protection Measures  
  - END-04 – Malicious Code Protection (Anti-Malware)  
  - END-05 – Software Firewall  
  - END-06 – Endpoint File Integrity Monitoring (FIM)  
  - END-07 – Host Intrusion Detection and Prevention Systems (HIDPS)  
  - END-08 – Phishing & Spam Protection  
  - END-15 – Hypervisor Access  

---

## 14. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | September 2025 | M Machin |

---
title: Web Security
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Web Security (WEB)

**Subsidiary References:**  

- LabXChange, LLC – Web Security Standard *(to be published)*  
- FrontRunnerHC, Inc – Web Security Standard *(to be published)*  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) is committed to protecting its enterprise and subsidiary environments from web-based threats, which represent a primary attack vector for adversaries. This policy establishes requirements for web security to ensure the confidentiality, integrity, and availability of systems, applications, and sensitive data.  

---

## 2. Applicability

This policy applies to all subsidiaries, employees, contractors, and third parties who access the internet through STH networks or host externally accessible web applications and services.  

---

## 3. Web Security

Subsidiaries must implement web security measures, including filtering malicious content, restricting access to inappropriate or unauthorized websites, and monitoring for anomalous activity. These controls must protect users, endpoints, and backend systems from web-based threats.  

- **SCF Mapping:** WEB-01 (*Web Security*)  

---

## 4. Demilitarized Zones (DMZ)

Public-facing systems, including web servers and applications, must be deployed within properly configured demilitarized zones (DMZs). DMZs must isolate public services from internal networks, reducing the risk of compromise to critical systems. Access rules must follow least privilege principles and be reviewed periodically.  

- **SCF Mapping:** WEB-02 (*Use of Demilitarized Zones (DMZ)*)  

---

## 5. Web Application Firewalls (WAF)

All externally accessible web applications must be protected with a Web Application Firewall (WAF). The WAF must be configured to block common attacks such as SQL injection, cross-site scripting (XSS), and other OWASP Top 10 vulnerabilities. WAF policies must be tuned and monitored to reduce false positives while maintaining strong protections.  

- **SCF Mapping:** WEB-03 (*Web Application Firewall (WAF)*)  

---

## 6. Secure Web Traffic

Subsidiaries must ensure all web traffic to and from corporate systems and applications is transmitted securely using industry-accepted encryption protocols. TLS 1.2 or higher is required, with TLS 1.3 strongly recommended where supported. Unencrypted (HTTP) traffic must be redirected or blocked.  

- **SCF Mapping:** WEB-10 (*Secure Web Traffic*)  

---

## 7. Compliance & Governance

- Subsidiaries must maintain evidence of WAF deployments, DMZ configurations, and secure traffic enforcement.  
- STH security teams may audit subsidiary environments to ensure compliance with this policy.  
- Non-compliance must be remediated promptly, with escalations to STH executive leadership as required.  

---

## 8. Enforcement

Failure to comply with this policy may result in restricted access, disciplinary action, termination of contracts, or legal action depending on severity.  

---

## 9. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.312(e)(1) (Transmission Security)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC6.7, CC7.1), Confidentiality (C1.2)  

- **Framework Alignment:**  
  - WEB-01 – Web Security  
  - WEB-02 – Use of Demilitarized Zones (DMZ)  
  - WEB-03 – Web Application Firewall (WAF)  
  - WEB-10 – Secure Web Traffic  

---

## 10. Revision Tracking

| Rev | Description   | Date         | Approved |
| --- | ------------- | ------------ | -------- |
| -   | Policy created | October 2025 | M Machin |

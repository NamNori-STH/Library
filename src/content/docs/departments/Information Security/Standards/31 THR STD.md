---
title: Threat Management Standard
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Framework Reference:** Secure Controls Framework (SCF) – Threat Management (THR)

**Parent Policy Reference:**

- [Summit Technology Holdings – Threat Management Policy](/departments/information-security/policies/31-thr/)

---

## 1. Purpose

This Standard defines how Summit Technology Holdings (STH) implements its Threat Management Policy by operating the enterprise threat intelligence and analysis program. The objective is to ensure STH centrally collects, evaluates, and distributes relevant threat information so subsidiaries can act quickly and effectively to mitigate risks.  

---

## 2. Scope

This Standard applies to the corporate threat intelligence program operated by STH. It covers activities related to threat feeds, vendor-provided threat catalogs, and structured threat analysis. Subsidiaries (e.g., LabXChange, FrontRunnerHC) are consumers of this intelligence: they must implement defensive measures and provide feedback, but they do not independently source or manage threat intelligence programs.  

---

## 3. Control Implementation

### 3.1 Threat Intelligence Program  

STH maintains the enterprise threat intelligence program, sourcing information from ISACs, government advisories, vendor subscriptions, and open-source feeds. The CIO is responsible for oversight of this program, ensuring accuracy, timeliness, and relevance. Intelligence is validated and distributed to subsidiaries in the form of advisories and required actions.  

- **SCF Mapping:** THR-01 (*Threat Intelligence Program*)  

---

### 3.2 Threat Intelligence Feeds  

STH centrally manages all enterprise threat intelligence feeds. Feeds must be subscribed from reputable vendors and industry groups, reviewed regularly, and integrated into corporate monitoring. STH distributes curated intelligence to subsidiaries along with remediation guidance and required timelines.  

- **SCF Mapping:** THR-03 (*Threat Intelligence Feeds*)  

---

### 3.3 Threat Catalog  

Rather than developing a custom catalog, STH maintains access to actively updated third-party threat catalogs from trusted vendors. These catalogs provide structured information on threat actors and TTPs (tactics, techniques, procedures). STH curates relevant entries and ensures subsidiaries understand which defensive measures apply to their environments.  

- **SCF Mapping:** THR-09 (*Threat Catalog*)  

---

### 3.4 Threat Analysis  

STH performs centralized analysis of collected threat data. This includes correlating external intelligence with internal telemetry, identifying patterns, and producing actionable reports. Summaries of threat trends and specific advisories are shared with subsidiaries for local implementation in incident response, vulnerability management, and risk management.  

- **SCF Mapping:** THR-10 (*Threat Analysis*)  

---

## 4. Governance & Oversight

- The CIO is accountable for the operation of the threat management program.  
- Subsidiaries must designate a security point of contact to receive and act on STH advisories.  
- Subsidiary compliance with threat advisories is subject to STH oversight and review.  
- Records of feeds, vendor subscriptions, advisories, and subsidiary responses must be retained in the enterprise evidence repository.  

---

## 5. Enforcement

Failure by subsidiaries to act on threat intelligence or implement directed mitigations will result in escalation to subsidiary leadership and, if necessary, restriction of system access or other corrective actions.  

---

## 6. References

- **Parent Policy:**  
  - [Summit Technology Holdings – Threat Management Policy](/departments/information-security/policies/31-thr/)  

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.308(a)(6) (Security Incident Procedures)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC7.2, CC7.4)  

- **Framework Alignment:**  
  - THR-01 – Threat Intelligence Program  
  - THR-03 – Threat Intelligence Feeds  
  - THR-09 – Threat Catalog  
  - THR-10 – Threat Analysis  

---

## 7. Revision Tracking

| Rev | Description       | Date         | Approved |
| --- | ----------------- | ------------ | -------- |
| -   | Standard created  | October 2025 | M Machin |

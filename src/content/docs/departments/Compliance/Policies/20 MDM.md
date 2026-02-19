---
title: Mobile Device Management
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Mobile Device Management (MDM)

**Subsidiary References:**  

- LabXChange, LLC – Mobile Device Management Standard *(to be published)*  
- FrontRunnerHC, Inc – Mobile Device Management Standard *(to be published)*  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) recognizes that mobile devices are an essential part of modern business operations but also represent significant security risks if not properly managed. This policy establishes enterprise-wide requirements for mobile device management to protect sensitive and regulated information, including ePHI, financial data, and corporate intellectual property, accessed or stored on mobile devices.  

---

## 2. Applicability

This policy applies to all mobile devices, including smartphones, tablets, laptops, and personally-owned devices authorized for business use, that access or store sensitive or regulated data on behalf of STH or its subsidiaries. It also applies to contractors and third parties accessing STH or subsidiary systems from mobile devices.  

---

## 3. Centralized Management of Mobile Devices

Subsidiaries must enroll all corporate-issued and approved personally-owned mobile devices into a centralized Mobile Device Management (MDM) solution. The MDM platform must provide configuration enforcement, patch deployment, security monitoring, and policy enforcement across devices.  

- **SCF Mapping:** MDM-01 (*Centralized Management of Mobile Devices*)  

---

## 4. Access Control for Mobile Devices

Mobile devices accessing sensitive data or corporate systems must require strong authentication, including multi-factor authentication (MFA). Device access must be restricted after defined periods of inactivity, and failed login attempts must trigger account lockouts consistent with the enterprise access control policy.  

- **SCF Mapping:** MDM-02 (*Access Control for Mobile Devices*)  

---

## 5. Full Device & Container-Based Encryption

All mobile devices must implement full-device encryption or container-based encryption to protect data at rest. Devices must use encryption algorithms consistent with enterprise cryptographic standards, and keys must be managed securely.  

- **SCF Mapping:** MDM-03 (*Full Device & Container-Based Encryption*)  

---

## 6. Remote Purging

MDM solutions must support the ability to remotely lock or wipe devices that are lost, stolen, or otherwise compromised. Remote purging must be executed promptly upon detection of risk, and records of these actions must be maintained.  

- **SCF Mapping:** MDM-05 (*Remote Purging*)  

---

## 7. Personally-Owned Mobile Devices

Personally-owned devices (BYOD) used for business purposes must meet the same security standards as corporate-issued devices. These devices must be enrolled in the MDM platform, segmented to protect corporate data, and subject to remote wipe capabilities for business-related information.  

- **SCF Mapping:** MDM-06 (*Personally-Owned Mobile Devices*)  

---

## 8. Mobile Device Geofencing

Where appropriate, subsidiaries must implement geofencing controls to restrict mobile device access to sensitive systems or data based on geographic location. Geofencing may be applied to protect against unauthorized access from high-risk regions or to comply with regulatory restrictions.  

- **SCF Mapping:** MDM-09 (*Mobile Device Geofencing*)  

---

## 9. Compliance & Governance

- Subsidiaries must maintain evidence of device enrollment, encryption status, access control settings, and remote wipe tests.  
- STH will periodically audit subsidiary compliance with this policy and require remediation of deficiencies.  
- Non-compliance must be remediated promptly, and recurring issues will be escalated to executive leadership.  

---

## 10. Enforcement

Violations of this policy, including unauthorized use of unregistered devices or circumvention of MDM controls, may result in disciplinary action, loss of device privileges, contract suspension, or legal action.  

---

## 11. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.312(a)(2)(iv), §164.312(e)(1)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC6.1, CC6.2), Confidentiality (C1.2)  

- **Framework Alignment:**  
  - MDM-01 – Centralized Management of Mobile Devices  
  - MDM-02 – Access Control for Mobile Devices  
  - MDM-03 – Full Device & Container-Based Encryption  
  - MDM-05 – Remote Purging  
  - MDM-06 – Personally-Owned Mobile Devices  
  - MDM-09 – Mobile Device Geofencing  

---

## 12. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | October 2025 | M Machin |

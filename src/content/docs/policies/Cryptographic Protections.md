---
title: Cryptographic Protections
---

## 1.0 Purpose

Summit Technology Holdings requires consistent cryptographic protections across all subsidiaries to safeguard sensitive data, including ePHI, in compliance with HIPAA and industry standards.

- HIPAA: 164.312(a)(2)(iv), 164.312(e)(1).
- SOC 2: CC6.1, CC6.7.

## 2.0 Scope

This policy applies to all subsidiaries (e.g., FRHC, LX), their systems, networks, applications, and storage that handle sensitive or regulated data.

## 3.0 Policy Statements

- Subsidiaries must implement encryption to protect ePHI in transit and at rest.
- Approved algorithms: AES-256 for data at rest, TLS 1.2+ for data in transit.
- Cryptographic modules must be FIPS 140-2/3 validated.
- Encryption keys must be securely managed, rotated annually (or upon compromise), and protected against unauthorized access.
- Subsidiaries may establish local standards tailored to their hosting environment but must not weaken these requirements.

## 4.0 SCF Mapping (Required Controls)

- CRY-01: Use of Cryptographic Controls.
- CRY-03: Transmission Confidentiality.
- CRY-04: Transmission Integrity.
- CRY-05: Encrypting Data at Rest.
- CRY-06: Non-Console Administrative Access.
- CRY-07: Wireless Access Authentication & Encryption.
- CRY-08: Public Key Infrastructure (PKI).
- CRY-09: Cryptographic Key Management.

## 5.0 Revision Tracking

| Rev | Description | Date | Approved |
| --- | ----------- | ---- | -------- |
| - | Policy created | September 2025 | M Machin |

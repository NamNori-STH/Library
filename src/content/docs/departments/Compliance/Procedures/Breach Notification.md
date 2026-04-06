---
title: Breach Notification Procedure
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Framework Reference:** Secure Controls Framework – Incident Response (IRO)  

---

## 1. Purpose

This procedure establishes the enterprise-wide process for identifying, evaluating, and executing required notifications following a suspected or confirmed breach of unsecured Protected Health Information (PHI) or other regulated personal data. It applies to all Summit Technology Holdings subsidiaries and ensures consistent, legally compliant response across the enterprise.

This procedure implements Summit's obligations under the HIPAA Breach Notification Rule (45 CFR §§164.400–414) and applicable state breach notification statutes.

---

## 2. Applicability

This procedure applies to all Summit Technology Holdings subsidiaries that create, receive, maintain, or transmit Protected Health Information (PHI) or electronic Protected Health Information (ePHI) — currently FrontRunnerHC, Inc. (FRHC) and LabXChange 360, LLC (LX). It applies to all employees, contractors, and Business Associates acting on behalf of these subsidiaries.

---

## 3. Procedure

### 3.1 Reporting a Suspected Breach

Any employee, contractor, or third party who suspects that a breach of PHI or regulated personal data has occurred must immediately report the incident to their direct supervisor and to the Information Security Officer (ISO) of their respective subsidiary. The subsidiary ISO will escalate to the STH Chief Information Officer (CIO) and Corporate Legal Counsel without delay.

Reports should include as much detail as possible: the nature of the suspected incident, data types potentially involved, systems or media affected, and the approximate timeline of events. The date STH or a subsidiary first becomes aware of a potential breach — or the date they would have become aware had they exercised reasonable diligence — constitutes the date of **discovery** and starts the 60-day notification clock.

---

### 3.2 Breach Determination

Not every security incident involving PHI constitutes a reportable breach. Under HIPAA, a breach is presumed to have occurred whenever PHI is used or disclosed in a manner not permitted by the Privacy Rule — unless the covered entity or business associate can demonstrate a low probability that PHI has been compromised. That determination requires a documented risk assessment of at least the following four factors:

1. **Nature and extent of the PHI involved** — including the types of identifiers present (e.g., name, date of birth, Social Security number, diagnosis codes, treatment history) and the likelihood that the information could be re-identified.
2. **Identity of the unauthorized party** — whether the person who accessed or received the PHI is authorized to access other PHI and whether their role and intent suggest a reduced risk of misuse.
3. **Whether the PHI was actually acquired or viewed** — or whether only an opportunity for unauthorized access existed without evidence of actual access or acquisition.
4. **Extent to which risk has been mitigated** — such as recovery of the media, destruction of unauthorized copies, or legally enforceable assurances from the recipient that the data will not be further used or disclosed.

Corporate Legal Counsel, in coordination with the CIO and the affected subsidiary's ISO, will complete and document this four-factor assessment. If the assessment cannot establish a low probability of compromise, the incident must be treated as a reportable breach.

**Secured PHI safe harbor:** Breach notification is not required when PHI has been rendered unusable, unreadable, or indecipherable to unauthorized individuals. PHI is considered "secured" if it has been encrypted in accordance with NIST-approved standards (NIST SP 800-111 for data at rest; NIST SP 800-52 for data in transit), or if the media has been destroyed in accordance with NIST SP 800-88. Incidents involving only secured PHI are exempt from breach notification requirements.

---

### 3.3 Containment

Upon reasonable suspicion of a breach, the subsidiary ISO and applicable team will immediately take steps to limit the scope of the incident, which may include:

- Suspending the unauthorized access or activity.
- Revoking affected credentials or access rights.
- Isolating or taking offline affected systems.
- Recovering records or media where feasible.
- Preserving evidence in support of forensic investigation.
- Notifying law enforcement if criminal activity is suspected.

All containment activities must be coordinated with the STH CIO and Corporate Legal Counsel.

---

### 3.4 Notification Requirements

Notification requirements vary based on the number of individuals affected, their locations, and the nature of the breach. Corporate Legal Counsel is responsible for determining applicable notification obligations and drafting all required notifications. All notifications must be written in plain language.

#### 3.4.1 Notification to Affected Individuals

Affected individuals must be notified without unreasonable delay and in no case later than **60 calendar days** after the date of discovery. Notification may be delayed beyond 60 days only at the written direction of law enforcement where notification would impede an active criminal investigation; any such delay must be documented.

Notification must be sent by first-class mail to the individual's last known address, or by email if the individual has previously agreed to electronic notices. If contact information is insufficient or out of date for 10 or more individuals, substitute notice is required and must be posted conspicuously on the organization's website for 90 days, or provided through major print or broadcast media in the geographic area where affected individuals reside.

Each notification to affected individuals must include at minimum:

- A brief description of what happened, including the approximate date of the breach and the date of discovery.
- The types of PHI involved (e.g., name, date of birth, Social Security number, diagnosis, treatment, financial account information).
- Steps individuals can take to protect themselves from potential harm.
- A description of the steps the organization is taking to investigate, mitigate harm, and prevent recurrence.
- Contact information (toll-free number, email address, mailing address, or website) for individuals to ask questions or obtain additional information.

#### 3.4.2 Notification to HHS

- **Breaches affecting 500 or more individuals:** HHS must be notified contemporaneously with notification to affected individuals, via the HHS breach reporting portal at [hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting](https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html).
- **Breaches affecting fewer than 500 individuals:** A log of all such breaches must be maintained and reported to HHS within **60 calendar days after the end of the calendar year** in which the breaches occurred.

#### 3.4.3 Media Notification

If a breach affects **500 or more individuals residing in a single state or jurisdiction**, a prominent media outlet serving that area must be notified contemporaneously with notification to affected individuals. Notification must be in the form of a press release. Corporate Legal Counsel will draft and coordinate all media communications.

#### 3.4.4 Business Associate Breaches

When a Business Associate discovers a breach, it must notify the relevant covered entity (FRHC or LX as applicable) without unreasonable delay and no later than 60 calendar days after discovery. STH, through its Third Party Management program, ensures all Business Associate Agreements include this obligation. The covered entity's 60-day clock to notify individuals and HHS begins when the Business Associate notifies the covered entity.

---

### 3.5 Law Enforcement and Regulatory Contacts

The following authorities may be contacted in the event of a breach involving criminal activity or as otherwise required:

| Authority | Contact |
| --- | --- |
| FBI Internet Crime Complaint Center (IC3) | [ic3.gov](https://www.ic3.gov) |
| US Cybersecurity and Infrastructure Security Agency (CISA) | [cisa.gov/report](https://www.cisa.gov/report) |
| HHS Office for Civil Rights — Breach Reporting | [hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting](https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html) |
| Applicable state regulatory authorities | As determined by Corporate Legal Counsel based on affected individuals' states of residence |

---

### 3.6 Documentation and Records

All breach-related activities must be documented from initial discovery through final resolution and retained for a minimum of **six (6) years** from the date of creation or the date last in effect, as required by HIPAA.

Documentation must include at minimum:

- The four-factor breach risk assessment and its conclusion.
- A complete timeline of the incident from discovery through containment and resolution.
- Copies of all notifications issued to individuals, HHS, and media outlets.
- Records of all external communications, including dates, parties, and substance of discussions.
- Evidence gathered during the investigation, with chain of custody records where applicable.
- The final incident report, including root cause analysis and corrective action plan.

Breach documentation must be secured, with access restricted to authorized personnel only. Records are maintained in the STH compliance documentation system, or where applicable, the subsidiary's incident tracking system.

---

### 3.7 Prevention and Lessons Learned

Following resolution of each breach, Corporate Legal Counsel and the CIO — in coordination with the affected subsidiary's ISO — will conduct a post-incident review. The review will identify root causes, evaluate the adequacy of existing controls, and produce a corrective action plan with assigned owners and target completion dates. Findings must be incorporated into updated policies, procedures, and training programs as appropriate, and a summary of lessons learned must be reported to STH executive leadership.

---

## 4. Definitions

**Breach** — The acquisition, access, use, or disclosure of unsecured PHI in a manner not permitted by the HIPAA Privacy Rule, unless the covered entity or business associate demonstrates through a four-factor risk assessment that there is a low probability the PHI has been compromised.

**Unsecured PHI** — PHI that has not been rendered unusable, unreadable, or indecipherable to unauthorized persons through encryption or destruction per HHS guidance.

**Secured PHI** — PHI encrypted per NIST-approved standards or destroyed per NIST SP 800-88; not subject to breach notification requirements.

**Discovery** — The first day on which a breach is known, or by exercising reasonable diligence would have been known, to any workforce member or agent of the covered entity or business associate (other than the person committing the breach).

**Covered Entity** — A health plan, healthcare clearinghouse, or healthcare provider that transmits health information in electronic form. Within the Summit enterprise, FRHC and LX may operate as covered entities or business associates depending on the nature of the engagement.

**Business Associate (BA)** — A person or entity that creates, receives, maintains, or transmits PHI on behalf of a covered entity in the course of performing services for that entity.

**Protected Health Information (PHI)** — Individually identifiable health information related to an individual's past, present, or future physical or mental health condition, provision of healthcare, or payment for healthcare — held or transmitted by a covered entity or business associate in any form or medium.

---

## 5. References

- **Regulatory Requirements:**
  - HIPAA Breach Notification Rule: 45 CFR §§164.400–414
  - HIPAA Privacy Rule: 45 CFR §§164.500–534
  - HIPAA Security Rule: 45 CFR §§164.302–318
  - Applicable state breach notification statutes (as determined by Corporate Legal Counsel)

- **Parent Policy:**
  - Summit Technology Holdings – Incident Response Policy (17 IRO)

- **Framework Alignment:**
  - IRO-02 – Incident Handling
  - IRO-02.4 – Incident Classification & Prioritization
  - IRO-04 – Incident Response Plan (IRP)
  - IRO-04.1 – Data Breach
  - IRO-10 – Incident Stakeholder Reporting
  - IRO-10.2 – Cyber Incident Reporting for Sensitive Data
  - IRO-13 – Root Cause Analysis (RCA) & Lessons Learned
  - IRO-14 – Regulatory & Law Enforcement Contacts

---

## 6. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ----------- | ---- | -------- |
| 1.0 | Initial STH-level procedure | April 2026 | M Machin |

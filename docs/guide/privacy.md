---
title: Privacy Policy
description: Chaldea privacy policy covering personal information, permissions, third-party services, retention and your rights.
lastUpdated: false
editLink: false
---

# Privacy Policy

**Version: v1 · Effective date: December 1, 2026**

This policy explains how the Chaldea service provider (“we” or “us”) processes personal information when providing the Chaldea App and related services, and how you can manage your information.

For privacy matters, see [Contact Us](./contact#privacy-contact). We will **respond within 15 working days** after receiving a privacy complaint or rights request.

## 1. Basic features and optional services

Chaldea provides game reference information, material planning, team building and battle simulation. Basic local features do not require an account, your real name, phone number or identity document. Servers receiving requests for game data, images or updates receive your IP address and necessary request information.

Accounts, cloud recovery, online team publishing, GitHub backups, product analytics, diagnostics and advertising serve specific purposes. Refusing unnecessary processing should not prevent use of unrelated basic features. System permissions, personalized advertising preferences and privacy consent are separate choices and do not replace one another.

## 2. Information and purposes {#information-and-purposes}

| Scenario                                       | Information                                                                                                                         | Purpose and trigger                                                                                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Local planning, simulation and data management | Game progress, plans, teams and preferences you enter                                                                               | Stored and processed on your device; relevant content may leave it when you back up, share or submit feedback                             |
| Account registration, login and maintenance    | Username, email, password verification information, sessions and device identifiers; request IP, App version, platform and language | Accounts, email verification, changes, password reset, assisted recovery and security. The server stores password hashes for verification |
| Cloud recovery copies                          | Account association, user data files you upload, upload time                                                                        | Temporary recovery or transfer between devices. This is not permanent storage; keep your own local backup                                 |
| Online teams                                   | Submitted teams, descriptions, author/account association, votes and activity records                                               | Publishing, browsing, maintenance and moderation. Published content is visible to others; do not include unrelated personal information   |
| Local backup and file import/export            | Backup and JSON/CSV files you choose, exported content                                                                              | Your file picker or share action; selecting a file does not authorize access to every file on your device                                 |
| Clipboard import                               | Text, data or team links you actively paste or import                                                                               | Parsing that import, rather than continuous clipboard collection                                                                          |
| Saving, copying and sharing images             | Selected images and generated plan/team images                                                                                      | Saving to photos or the clipboard, or sending to an app you choose; the receiving app has its own policy                                  |
| Updates and APK/XAPK downloads/installation    | Version, platform/channel, download requests and packages                                                                           | Checking or obtaining updates and downloading game packages; methods and installation authorization vary by platform/channel              |
| Feedback you submit                            | Message, contact details you supply, diagnostic logs, device/App parameters and attached data files or other materials              | Responding and troubleshooting after your submission. Review your feedback and avoid passwords, Tokens and unrelated personal information |
| Automatic diagnostics (optional)               | Technical logs, stack traces, device and App parameters                                                                             | With your permission, troubleshooting using automatic reports that exclude screenshots, complete user files and settings snapshots        |
| Product analytics (optional, Android/iOS)      | SDK device identifier, device/system and App parameters, IP, sessions, views/events, language, preferred game regions and channel   | Our Countly service measures feature use and stability. Identifiers can link records; this data is not described as fully anonymous       |
| Advertising (versions/channels where enabled)  | Device, network, identifier and ad interaction information described in the [Third-party SDK List](./third-party-sdks)              | Delivery, measurement, attribution and fraud prevention; personalization also depends on your preference and system authorization         |

**Automatic diagnostics and feedback have different scopes.** Disabling automatic diagnostics does not block feedback you choose to submit. Automatic diagnostics run only with your consent and when you enable the option.

## 3. System permissions and device capabilities {#system-permissions}

Capabilities are used for the corresponding functions. You can review or change available permissions in the system settings for Chaldea. Available controls vary by system, version and channel. Refusing a permission affects its associated operation and should not affect unrelated local features.

| Permission/capability                   | Platform and use                                                                                                                                                                                                                                        |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internet, network state and Wi-Fi state | Requests for data, images, accounts, updates and enabled services. Ordinary Android network permissions generally have no runtime permission prompt                                                                                                     |
| Adding photos/saving images             | iOS saves images you choose and requests add-only authorization when needed; saving images does not require access to read the entire photo library                                                                                                     |
| Legacy storage                          | Android packages declare READ_EXTERNAL_STORAGE (maximum SDK 32) and WRITE_EXTERNAL_STORAGE (maximum SDK 28). Legacy saving/file compatibility may require authorization. System file pickers grant access to selected content                           |
| Installing unknown apps                 | Android GitHub/F-Droid builds may direct you to system settings when you choose to install APK/XAPK files. The Google Play package does not declare REQUEST_INSTALL_PACKAGES                                                                            |
| Phone state                             | Android packages retain READ_PHONE_STATE. An advertising SDK may use phone-state information for device identification/fraud prevention within system limits. It is not necessary for basic local features and does not authorize reading call contents |
| Advertising identifiers and tracking    | Android ad ID availability depends on the system/settings. iOS IDFA tracking requires the system ATT decision. Refusal or withdrawal must not be bypassed with replacement identifiers                                                                  |

Package declarations, actual requests and granted authorization are different. Internal SDK signature permissions support component communication and are not personal-information switches you need to enable. Residual declarations for unavailable features are not a justification for collecting information.

## 4. SDKs and external services you choose {#third-party-sdks}

We use SDKs for advertising, optional analytics and web content display. See the [Third-party SDK List](./third-party-sdks) for component names, providers, versions, information processed and applicability. The list forms part of this Privacy Policy and shares its version and effective date.

When you configure a GitHub Token, repository and path for backup/restore, the credentials and backup content are used for requests to GitHub. Use a minimally scoped Token and check repository visibility; a public repository may expose backup content. GitHub's independent processing and storage are covered by its [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

Opening external reference, video, documentation, community or donation links sends requests to the relevant service, which has its own policy. System sharing sends content to your chosen recipient app.

## 5. Managing ads and optional processing

In Settings → Privacy & Data, you can manage personalized ads, automatic crash diagnostics and product analytics preferences. Advertising settings provide the options available in your version. The initial personalized-ad preference is on; this does not grant system permissions or replace legally required consent. When personalization is off, an enabled advertising service should offer a non-personalized option; necessary ad-delivery network requests may remain.

iOS tracking also follows your ATT choice. Withdrawal does not invalidate earlier lawful processing; contact us under section 8 to request deletion of retained information. When you disable optional processing, we stop that processing. Withdrawing consent does not prevent you from submitting feedback.

## 6. Storage location and retention

Our own account and cloud recovery services are hosted in mainland China. GitHub, third-party websites and other independent services you choose may use infrastructure elsewhere; consider their policies when deciding whether to use them. This mainland China storage statement does not apply to independent third-party services you choose to use.

From this policy’s effective date, we retain personal information under the following rules. When a period ends, information should be deleted or irreversibly anonymized so individuals cannot be identified. Information subject to a legal retention requirement is retained only for that requirement.

| Information                                                                 | Retention/deletion rule                                                                                                                                                                                                         |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local data and exported files                                               | Until you overwrite or delete them; uninstall behavior also depends on system backups, external folders and copies you keep                                                                                                     |
| Account and service records                                                 | While needed to provide the account; deleted/anonymized after closure or another deletion trigger, subject to necessary security/legal retention                                                                                |
| Cloud recovery copies                                                       | Up to **7 days from upload**; replacement, deletion or account closure may remove them earlier                                                                                                                                  |
| Automatic diagnostic reports                                                | **90 days from receipt**                                                                                                                                                                                                        |
| Feedback and attachments                                                    | **180 days from receipt**                                                                                                                                                                                                       |
| Countly records linkable to individuals/devices                             | **90 days from recording**                                                                                                                                                                                                      |
| Published teams                                                             | While you retain the publication or necessary service disputes are handled; you can delete your own posts, but we do not control copies others saved                                                                            |
| Legally required network security logs                                      | The applicable legal period; relevant network logs subject to China's Cybersecurity Law must be kept for at least **six months**. This is not a universal retention period for diagnostics/analytics                            |
| Disaster-recovery copies, feedback inbox/forwarded copies and website tools | Disaster-recovery, feedback inbox and forwarded copies under our control follow the retention period for the corresponding data; website analytics providers’ retention rules are described in the policies linked in section 9 |

You and GitHub's settings control copies in GitHub. Independently retained third-party SDK data follows the relevant policy and law; we will assist with appropriate requests.

## 7. Sharing, security and changes of purpose

We use necessary technical, hosting and communication services for the services you choose. Basic feature use does not authorize arbitrary sharing. Processing on our behalf, disclosure to independent recipients, public posting and sharing you initiate have different meanings; we will meet the applicable notice, contractual and consent requirements for each arrangement.

Feedback and attachments are used to respond and troubleshoot, and may be processed through providers of email, communication or hosting services. Where a recipient or international transfer requires further notice, consent or another legally required procedure, we complete it before the processing begins. Where a new purpose, recipient or processing method requires further notice or consent, we will complete that process first.

We use access control, transport protection and account security appropriate to the service. Protect your passwords, Tokens, backups and shared content. We will handle and notify personal-information security incidents as required by law.

## 8. Your rights and contact {#operator-and-contact}

Chaldea and related services are provided by **Zhixing Yuanjing (Taizhou) Technology Co., Ltd.** You can modify available account information, delete your online content, manage optional processing/system permissions and request account closure through the account deletion entry. Closing an account does not automatically delete exported files, GitHub copies or content retained by recipients.

To request access, a copy, correction, completion or deletion of information, withdraw consent, close an account or object to processing, use the channels in [Contact Us](./contact#privacy-contact). We will request only information necessary to verify the request, not complete passwords or Tokens. We will **respond within 15 working days**, explaining the reason and available next steps if we cannot fulfill a request directly. You may also complain to the competent authority under applicable law.

## 9. Documentation website

The documentation website uses **Google Analytics** and **Baidu Analytics** to understand visits. These tools may process cookies, IP addresses, device/browser information and page visits. See [Google's policy](https://policies.google.com/privacy) and [Baidu Analytics' policy](https://tongji.baidu.com/web/help/article?id=330&type=0) for their processing practices. Website analytics and Countly inside the App are separate processing activities.

## 10. Policy changes

The policy version and effective date are stated at the top of this page. Material changes will be notified through the policy page and necessary App notices. Where renewed consent is legally required, continued use does not automatically replace it.

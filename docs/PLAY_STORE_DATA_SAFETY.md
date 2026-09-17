# GOOGLE PLAY DATA SAFETY PREPARATION DOCUMENT

**App Name**: ScrollShield  
**Package**: `com.scrollshield.peerlynk`  
**Official Domain**: `https://scrollshield.peerlynk.com`  
**Privacy Policy URL**: `https://scrollshield.peerlynk.com/privacy`  

---

## 1. Overview
This document prepares the exact responses required for the **Google Play Console Data Safety Section** based strictly on the current production codebase.

- **Does the app collect or share user data?**: No user data is collected off-device or shared with third parties. All statistical data and gesture metadata stay 100% locally on the device.
- **Is data encrypted in transit?**: N/A (App performs no production network data uploads).
- **Does the app provide a way for users to request data deletion?**: Yes. Users can clear all local statistical history directly inside the app settings ("Reset Stats" / "Clear History") or by uninstalling the app.
- **Account Requirement**: No user account is required to use ScrollShield.

---

## 2. Data Types Declaration Table

| Data Category | Specific Data Type | Processed? | Collected Off-Device? | Shared? | Purpose | Ephemeral / Stored |
|---|---|---|---|---|---|---|
| **App Info and Performance** | App activity / Installed apps | Yes | No | No | App Functionality (select protected apps) | Stored locally in SharedPreferences |
| **App Activity** | Scroll gesture directional metadata | Yes | No | No | App Functionality (count forward swipes) | Ephemeral in RAM / Local counter |
| **App Activity** | Usage duration / session stats | Yes | No | No | App Functionality (local insights charts) | Stored locally on device |
| **Personal Info** | Name, email, phone, user ID | **No** | **No** | **No** | N/A | Not processed |
| **Messages / Content** | Text messages, chat logs | **No** | **No** | **No** | N/A | Not processed |
| **Photos / Videos** | Screen recordings, screenshots | **No** | **No** | **No** | N/A | Not processed |
| **Location** | Precise or coarse location | **No** | **No** | **No** | N/A | Not processed |
| **Financial Info** | Credit card, payment details | **No** | **No** | **No** | N/A | Not processed |

---

## 3. Play Console Answers Summary
- **Data Collection**: Select "No" for off-device collection.
- **Data Sharing**: Select "No".
- **Security Practices**: All data processed locally on-device. Users can reset or erase all local data at any time.

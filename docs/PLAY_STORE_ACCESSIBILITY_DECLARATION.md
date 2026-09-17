# GOOGLE PLAY ACCESSIBILITYSERVICE DECLARATION DOCUMENT

**App Name**: ScrollShield  
**Package**: `com.scrollshield.peerlynk`  
**Accessibility Disclosure URL**: `https://scrollshield.peerlynk.com/accessibility`  

---

## 1. Core Functionality Requiring AccessibilityService
ScrollShield is an Android digital-wellbeing tool designed to help users notice and interrupt automatic, mindless scrolling in short-form video and social feeds.

To provide this functionality, ScrollShield requires the `AccessibilityService` API for:
1. **Foreground Package Detection**: Observing `TYPE_WINDOW_STATE_CHANGED` events to detect when a user-selected protected application (e.g. Instagram, YouTube Shorts, X) enters the active foreground.
2. **Gesture Direction Classification**: Observing `TYPE_VIEW_SCROLLED` directional metadata to count logical forward feed swipes while ignoring backward scrollbacks, horizontal tab switches, and simple taps.
3. **Intervention Overlays**: Displaying user-requested floating counter badges and perspective check-in cards over active protected apps when configured milestone scroll counts are reached.

---

## 2. User Benefit
Without Accessibility access, ScrollShield cannot observe gesture progression or present real-time check-ins inside third-party feed apps, rendering the core digital wellbeing functionality inoperable.

---

## 3. Data Privacy & Security Boundaries
- **No Text Content Access**: ScrollShield does NOT inspect, collect, or store typed message text, post captions, chat logs, passwords, or credit card numbers.
- **No Visual Capture**: ScrollShield does NOT capture screenshots, record screen video, or access screen image frames.
- **100% Local Processing**: All window package matching and gesture calculations occur transiently in device RAM. Zero accessibility data is written to external logs or transmitted over the network.
- **User Control**: Accessibility permission is explicitly enabled by the user in Android Settings (`Accessibility → Installed Apps → ScrollShield`) and can be revoked at any time.

export const ACCESSIBILITY_DISCLOSURE = {
  shortSummary:
    'ScrollShield uses Android AccessibilityService to detect when user-selected protected apps are active in the foreground, observe structural scroll-event metadata, and display user-requested protection overlays.',
  playStoreDeclaration:
    'ScrollShield utilizes the Android AccessibilityService API exclusively for digital wellbeing monitoring. Specifically, it observes foreground window state to determine when a user-enabled protected app is active and reads scroll-event direction metadata to count forward swipe gestures locally. ScrollShield does NOT inspect message text, passwords, typed input, or screen images, and does NOT transmit any gesture data off the device.',
  fullDisclosurePoints: [
    'Detecting when user-selected protected applications enter or exit the foreground.',
    'Receiving directional scroll signals to calculate logical forward swipes in active feeds.',
    'Displaying floating counter overlay badges (🛡️ count) over active protected apps.',
    'Showing perspective check-in overlays when milestone scroll counts are reached.',
  ],
  nonCollectedPoints: [
    'Private text messages or chat content',
    'Passwords, PINs, or typed credentials',
    'Screen video, screenshots, or visual recordings',
    'Contacts, call logs, or location data',
    'Financial, credit card, or payment details',
  ],
};

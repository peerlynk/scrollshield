export interface PermissionDetail {
  name: string;
  manifestIdentifier: string;
  type: 'Required Core' | 'Optional Feature' | 'System Capability';
  purpose: string;
  dataAccessed: string;
  denialImpact: string;
}

export const PERMISSIONS_DATA: PermissionDetail[] = [
  {
    name: 'AccessibilityService',
    manifestIdentifier: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
    type: 'Required Core',
    purpose: 'Detects when selected protected apps are active in the foreground and receives directional scroll gesture events.',
    dataAccessed: 'Window title package name and directional scroll event metadata. Zero text or image content.',
    denialImpact: 'Core protection cannot count gestures or show milestone check-in overlays.',
  },
  {
    name: 'Post Notifications',
    manifestIdentifier: 'android.permission.POST_NOTIFICATIONS',
    type: 'Optional Feature',
    purpose: 'Displays active break timers, focus mode status, and milestone reminders on Android 13+.',
    dataAccessed: 'None (local notification creation only).',
    denialImpact: 'App operates normally, but background status notifications will not be displayed.',
  },
  {
    name: 'Haptic Feedback',
    manifestIdentifier: 'android.permission.VIBRATE',
    type: 'Optional Feature',
    purpose: 'Provides subtle haptic vibration feedback when a scroll milestone or perspective check-in is reached.',
    dataAccessed: 'None.',
    denialImpact: 'Milestones trigger visually without haptic vibration.',
  },
  {
    name: 'Package Visibility Query',
    manifestIdentifier: '<queries> (Intent & Package declarations)',
    type: 'System Capability',
    purpose: 'Allows ScrollShield to detect if Instagram, YouTube, Snapchat, Facebook, or X are installed on the device so you can select them for protection.',
    dataAccessed: 'Installed package presence check for supported social feed apps.',
    denialImpact: 'Uninstalled apps cannot be suggested in the protected apps picker.',
  },
  {
    name: 'Display Over Other Apps',
    manifestIdentifier: 'android.permission.SYSTEM_ALERT_WINDOW',
    type: 'Optional Feature',
    purpose: 'Renders the optional floating shield counter overlay (🛡️ count) and full-screen perspective check cards over protected apps.',
    dataAccessed: 'None (UI overlay rendering surface).',
    denialImpact: 'The floating counter badge cannot hover over third-party apps.',
  },
  {
    name: 'Home Widget Receiver',
    manifestIdentifier: 'android.appwidget.action.APPWIDGET_UPDATE',
    type: 'System Capability',
    purpose: 'Updates the native Android Shield Bar widget on your home screen with daily scroll totals and protected time.',
    dataAccessed: 'Local app statistics state.',
    denialImpact: 'Home screen widget will not refresh automatically.',
  },
];

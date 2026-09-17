export interface FeatureItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'core' | 'awareness' | 'control' | 'privacy';
  status: 'AVAILABLE' | 'BETA' | 'COMING_SOON';
  iconName: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'protected-apps',
    title: 'Protected Apps',
    shortDescription: 'Select specific feed-heavy apps where you want attention protection active.',
    fullDescription: 'ScrollShield lets you choose which apps to protect. Whether it is Instagram, YouTube Shorts, X, or Snapchat, protection is active only when you are in apps you selected.',
    category: 'core',
    status: 'AVAILABLE',
    iconName: 'Shield',
  },
  {
    id: 'scroll-counting',
    title: 'Forward Scroll Counting',
    shortDescription: 'Counts logical forward swipes on device without reading message text or post content.',
    fullDescription: 'Using Android’s Accessibility framework, ScrollShield detects structural forward scroll gestures. Downward scroll-backs, horizontal swipes, and simple taps are ignored.',
    category: 'core',
    status: 'AVAILABLE',
    iconName: 'Compass',
  },
  {
    id: 'perspective-checks',
    title: 'Perspective Checks',
    shortDescription: 'Thoughtful visual interventions that help break automatic scrolling loops.',
    fullDescription: 'At milestone counts, ScrollShield brings up calm, reflective prompts reminding you of time passed and your personal goals before you continue.',
    category: 'awareness',
    status: 'AVAILABLE',
    iconName: 'Eye',
  },
  {
    id: 'adaptive-guardian',
    title: 'Adaptive Guardian',
    shortDescription: 'Reminders that adapt to your personal goals, career focus, and age segment.',
    fullDescription: 'Customize the Guardian tone to reflect your priorities—whether building skills, preserving family presence, career development, or daily health.',
    category: 'awareness',
    status: 'AVAILABLE',
    iconName: 'Sparkles',
  },
  {
    id: 'focus-breaks',
    title: 'Focus & Breaks',
    shortDescription: 'Scheduled focus windows and cooldown breaks to protect your deep work time.',
    fullDescription: 'Set dedicated focus sessions where protected apps are temporarily paused, or take enforced 5-minute cooldown breaks after long feeds.',
    category: 'control',
    status: 'AVAILABLE',
    iconName: 'Clock',
  },
  {
    id: 'bedtime-protection',
    title: 'Bedtime Protection',
    shortDescription: 'Prevent late-night doomscrolling so your sleep schedule stays undisturbed.',
    fullDescription: 'Automatically heighten check-in frequency during night hours, helping you log off when your body needs rest.',
    category: 'control',
    status: 'AVAILABLE',
    iconName: 'Moon',
  },
  {
    id: 'floating-counter',
    title: 'Floating Counter',
    shortDescription: 'An optional mini shield overlay showing live scroll count over protected apps.',
    fullDescription: 'Keep a subtle 🛡️ count badge visible on screen while scrolling so you notice how deep into the feed you have swiped in real time.',
    category: 'awareness',
    status: 'AVAILABLE',
    iconName: 'Layers',
  },
  {
    id: 'home-widget',
    title: 'Home Widget',
    shortDescription: 'Native Android widget display showing daily scroll totals and active protection state.',
    fullDescription: 'Check your overall daily attention metrics directly from your Android home screen with the native Shield Bar widget.',
    category: 'core',
    status: 'AVAILABLE',
    iconName: 'LayoutGrid',
  },
  {
    id: 'local-insights',
    title: 'Local Insights',
    shortDescription: 'Private, on-device statistics for today, 7 days, and 30-day scrolling trends.',
    fullDescription: 'Analyze your scrolling habits per app and time of day with clear visual charts. All statistical calculations are processed and saved locally.',
    category: 'privacy',
    status: 'AVAILABLE',
    iconName: 'BarChart3',
  },
  {
    id: 'privacy-first',
    title: '100% Local Processing',
    shortDescription: 'No account creation, no analytics uploads, no screen recordings, no cloud servers.',
    fullDescription: 'Your feed data never leaves your device. ScrollShield requires zero account registration and performs no background network telemetry.',
    category: 'privacy',
    status: 'AVAILABLE',
    iconName: 'Lock',
  },
  {
    id: 'age-aware-personalization',
    title: 'Age-Aware Style',
    shortDescription: 'Personalize prompt tone for youth, students, professionals, or parents.',
    fullDescription: 'Select reminder intensity and contextual prompts tailored to your lifestyle without invasive data collection or profiling.',
    category: 'awareness',
    status: 'AVAILABLE',
    iconName: 'UserCheck',
  },
  {
    id: 'android-native-engine',
    title: 'Android Native Engine',
    shortDescription: 'Engineered specifically for Android with low memory footprint and battery efficiency.',
    fullDescription: 'Optimized Kotlin and React Native architecture designed to run seamlessly in the background without draining your battery.',
    category: 'core',
    status: 'AVAILABLE',
    iconName: 'Cpu',
  },
];

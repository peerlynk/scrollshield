export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'privacy' | 'technical' | 'installation';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'what-is-scrollshield',
    question: 'What is ScrollShield?',
    category: 'general',
    answer: 'ScrollShield is an Android digital-wellbeing app designed to interrupt mindless scrolling in protected feed apps. It observes scrolling gestures locally, tracks protected app usage, displays milestone check-ins, and gives you a moment of awareness to decide what to do next.',
  },
  {
    id: 'play-store-availability',
    question: 'Is ScrollShield available on Google Play?',
    category: 'installation',
    answer: "ScrollShield's official Google Play listing is prepared at: https://play.google.com/store/apps/details?id=com.scrollshield.peerlynk. Until the listing is live, you can use the official direct APK download from scrollshield.peerlynk.com.",
  },
  {
    id: 'android-versions',
    question: 'Which Android versions are supported?',
    category: 'technical',
    answer: 'ScrollShield supports devices running Android 8.0 (API level 26) and newer. It is optimized for modern Android releases, including Android 13, 14, and 15.',
  },
  {
    id: 'does-it-block-apps',
    question: 'Does ScrollShield block apps?',
    category: 'general',
    answer: 'ScrollShield does not hard-block technology or force your phone off. Instead, it introduces gentle attention check-ins and break prompts when scrolling milestones are reached, giving you conscious control to exit the feed or continue intentionally.',
  },
  {
    id: 'why-accessibility',
    question: 'Why does ScrollShield need Accessibility access?',
    category: 'privacy',
    answer: 'ScrollShield uses Android AccessibilityService exclusively to detect when your chosen protected apps enter the foreground and to observe structural scroll event metadata (like forward swipe gestures). It does NOT read message content, inspect passwords, or track screen text.',
  },
  {
    id: 'reads-messages',
    question: 'Does ScrollShield read my messages or passwords?',
    category: 'privacy',
    answer: 'No. ScrollShield does not inspect, collect, store, or transmit your private text, typed messages, passwords, credit card numbers, or feed content. Only generic gesture direction and window change events are processed.',
  },
  {
    id: 'screen-recording',
    question: 'Does it record my screen or take screenshots?',
    category: 'privacy',
    answer: 'No. ScrollShield never takes screenshots, records screen video, or captures visual screen contents.',
  },
  {
    id: 'data-upload',
    question: 'Does it upload my scrolling data to a server?',
    category: 'privacy',
    answer: 'No. ScrollShield is built on a 100% local-first architecture. No user accounts are required, and zero statistical or gesture data is uploaded to remote servers or analytics providers.',
  },
  {
    id: 'counting-accuracy',
    question: 'Why can scroll counts differ between apps or devices?',
    category: 'technical',
    answer: 'ScrollShield is designed to count logical forward feed swipes while ignoring downward scrollbacks, horizontal swipes, and taps. Accessibility event structures can vary between Android OEMs and app versions, so count sensitivity can differ slightly.',
  },
  {
    id: 'select-protected-apps',
    question: 'Can I select which apps are protected?',
    category: 'general',
    answer: 'Yes. You have full control over which apps are monitored. ScrollShield will only track scrolling and trigger check-ins within the specific apps you enable in your settings.',
  },
  {
    id: 'floating-counter-toggle',
    question: 'Can I turn the floating counter off?',
    category: 'general',
    answer: 'Yes. The floating shield counter overlay (🛡️ count) is completely optional and can be toggled on or off at any time in the app settings.',
  },
  {
    id: 'protected-time',
    question: 'What is Protected Time?',
    category: 'general',
    answer: 'Protected Time is the cumulative duration you spend inside your enabled protected apps while ScrollShield’s attention monitoring engine is active.',
  },
  {
    id: 'what-happens-during-break',
    question: 'What happens during a Break?',
    category: 'general',
    answer: 'When you take a break or reach a session cooldown, ScrollShield provides a dedicated calm window where protected apps remain paused, helping you reset your focus before returning.',
  },
  {
    id: 'milestones-explanation',
    question: 'What do the 10 / 25 / 40 / 50 / 75 / 100 milestones represent?',
    category: 'technical',
    answer: 'Milestones represent check-in ladders during a continuous scrolling session (e.g. 10 = Notice, 25 = Perspective, 40 = Guardian, 50 = Strong Check, 75 = Deeper Interrupt, 100 = Final Check). They are milestone markers designed to increase awareness as session depth increases.',
  },
  {
    id: 'age-personalization',
    question: 'How does Age-Aware Personalization work?',
    category: 'general',
    answer: 'ScrollShield allows you to select a reminder style suited to your focus goals—such as career projects, study skills, presence, or health. It changes prompt phrasing locally and does not perform psychological profiling.',
  },
  {
    id: 'install-without-play-store',
    question: 'Can I install ScrollShield without Google Play?',
    category: 'installation',
    answer: 'Yes! You can download the official release APK directly from scrollshield.peerlynk.com/download. Android will ask for permission to install apps from your browser, which you can safely grant for official releases.',
  },
  {
    id: 'apk-safety-verification',
    question: 'Is the direct APK safe and how do I verify it?',
    category: 'installation',
    answer: 'Yes. Every official website release is cryptographically release-signed and mapped to package name com.scrollshield.peerlynk. You can verify the published SHA-256 checksum on our /download page before installing.',
  },
  {
    id: 'how-to-update',
    question: 'How do I update ScrollShield when installing via APK?',
    category: 'installation',
    answer: 'Direct APK users can check scrollshield.peerlynk.com/changelog for new versions. Simply download and run the latest APK; Android will update your installed app in place provided both use the official signing key.',
  },
  {
    id: 'ios-iphone-support',
    question: 'Is iPhone / iOS supported?',
    category: 'general',
    answer: 'ScrollShield’s deep gesture protection engine relies on native Android Accessibility framework capabilities and is currently available exclusively for Android.',
  },
];

export interface ReleaseNote {
  version: string;
  releaseDate: string;
  badge?: string;
  highlights: string[];
  improvements: string[];
  fixes: string[];
  apkFilename: string;
  apkSizeMb: string;
}

export const CHANGELOG_DATA: ReleaseNote[] = [
  {
    version: '1.0.0',
    releaseDate: 'September 2026',
    badge: 'Initial Production Release',
    highlights: [
      'Official public launch of ScrollShield for Android',
      'Local-first scroll gesture detection engine via AccessibilityService',
      'Configurable protected app selection for Instagram, YouTube Shorts, X, Snapchat, and custom apps',
      'Progressive milestone check-ins (10, 25, 40, 50, 75, 100 counts)',
      'Age-aware Perspective & Guardian reminder customization',
    ],
    improvements: [
      'Deduplicated raw Android scroll events to count true logical forward swipes',
      'Optional floating counter overlay (🛡️ count)',
      'Native Android Shield Bar home screen widget support',
      'On-device local analytics charts (Today, 7 days, 30 days)',
    ],
    fixes: [
      'Initial release stability and low-latency background execution',
    ],
    apkFilename: 'ScrollShield-v1.0.0.apk',
    apkSizeMb: '119.97 MB',
  },
];

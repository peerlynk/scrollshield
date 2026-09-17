import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';
import { Lock, EyeOff, ShieldCheck, Database, Server, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — 100% Local-First Attention Protection',
  description:
    'Read the official ScrollShield Privacy Policy. All gesture counting and app usage analytics stay 100% locally on your device with zero cloud upload.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Privacy Policy"
          title="Your feed stays yours."
          description="ScrollShield is engineered on a strict local-first architecture. We do not collect, transmit, or monetize your private usage or feed content."
        />

        <div className="bg-surface-primary p-6 md:p-10 rounded-3xl border border-surface-border space-y-8 text-sm text-text-secondary leading-relaxed">
          
          <div className="flex items-center justify-between pb-4 border-b border-surface-border font-mono text-xs text-text-muted">
            <span>Effective Date: September 1, 2026</span>
            <span>Package: {SCROLLSHIELD_RELEASE.packageName}</span>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-text-primary">1. Information ScrollShield Processes</h2>
            <p>
              ScrollShield operates locally on your Android device. It observes window title change metadata and forward scroll gestures in apps you explicitly select to protect. ScrollShield does NOT inspect, read, log, or record:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-text-primary">
              <li>Message content or chat text</li>
              <li>Passwords, account credentials, or credit card numbers</li>
              <li>Photos, videos, or screen recordings</li>
              <li>Search queries or browser history</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-text-primary">2. Why AccessibilityService Is Used</h2>
            <p>
              ScrollShield uses Android’s AccessibilityService API solely to perform two core local functions:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Detecting when a user-selected protected application is active in the foreground.</li>
              <li>Receiving structural scroll event signals to calculate logical forward swipes.</li>
            </ol>
            <p>
              Accessibility data is processed transiently in memory and is never written to log files or uploaded to any remote server.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-text-primary">3. Local Data Storage & Analytics</h2>
            <p>
              Your scroll counts, milestone check-in preferences, and daily usage statistics are stored securely in local app storage (SharedPreferences / SQLite) on your physical Android device. No ScrollShield user account is required to use the app.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-text-primary">4. Network Behavior</h2>
            <p>
              ScrollShield contains zero production telemetry SDKs, zero advertising trackers, and zero analytics upload endpoints. The app does not transmit background diagnostics or user statistics over the internet.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-text-primary">5. User Controls & Data Erasure</h2>
            <p>
              You have full control over ScrollShield at all times:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You can enable or disable protection for individual apps at any time.</li>
              <li>You can pause protection or turn off Accessibility access in Android Settings.</li>
              <li>You can clear all local statistical history using the "Reset Data" option in app settings.</li>
              <li>Uninstalling ScrollShield immediately deletes all locally saved data from your phone.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-text-primary">6. Contact Information</h2>
            <p>
              If you have any questions regarding this privacy policy or ScrollShield data handling practices, please contact our team at:
            </p>
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border font-mono text-sage text-xs">
              Email: {SCROLLSHIELD_RELEASE.supportEmail}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

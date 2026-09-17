import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notification Troubleshooting — Status & Break Reminders',
  description:
    'Fix missing notification indicators for break timers and focus sessions on Android 13+.',
};

export default function NotificationsTroubleshootingPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Troubleshooting"
          title="Notifications Troubleshooting (Android 13+)"
          description="Enabling post-notification permissions for break status indicators."
        />

        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-lg font-bold text-text-primary">Enabling Post Notifications</h3>
          <p>
            Starting with Android 13 (API 33), apps must explicitly request notification permission. If denied, ScrollShield cannot show status bar indicators for active breaks or focus sessions.
          </p>
          <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border text-xs space-y-1">
            <div className="font-bold text-text-primary">Solution:</div>
            <p>Go to Android Settings → Notifications → App Notifications → ScrollShield → Turn ON "Allow notifications".</p>
          </div>
        </div>

      </div>
    </div>
  );
}

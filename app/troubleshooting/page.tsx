import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldAlert, Compass, Youtube, Layers, AppWindow, Bell, Download, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Troubleshooting Index — Fix Setup & Feature Issues',
  description:
    'Dedicated troubleshooting guides for Android Accessibility permissions, scroll counting accuracy, YouTube Shorts, floating counter, widgets, and APK installation.',
};

export default function TroubleshootingIndexPage() {
  const guides = [
    { title: 'Accessibility Service Issues', href: '/troubleshooting/accessibility', desc: 'Fix background service disabling on Xiaomi, Samsung, Oppo, and Vivo devices.', icon: ShieldAlert },
    { title: 'Scroll Counting Troubleshooting', href: '/troubleshooting/scroll-counting', desc: 'Why counts might not be increasing or differ between feed apps.', icon: Compass },
    { title: 'YouTube & Shorts Setup', href: '/troubleshooting/youtube', desc: 'Optimizing gesture detection for YouTube video surfaces.', icon: Youtube },
    { title: 'Floating Counter Issues', href: '/troubleshooting/floating-counter', desc: 'Fix missing or hidden floating 🛡️ count badge over feeds.', icon: Layers },
    { title: 'Shield Bar Widget Support', href: '/troubleshooting/widget', desc: 'Fix widget refresh or placement on custom Android launchers.', icon: AppWindow },
    { title: 'Notifications Setup (Android 13+)', href: '/troubleshooting/notifications', desc: 'Enabling post-notification permissions for break status indicators.', icon: Bell },
    { title: 'APK Installation Fixes', href: '/troubleshooting/apk-install', desc: 'Resolving certificate conflicts, download blocks, or installation refusal.', icon: Download },
  ];

  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Help & Repair"
          title="Troubleshooting Directory"
          description="Select a topic below for specific step-by-step instructions to resolve Android setup or feature issues."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((g) => {
            const Icon = g.icon;
            return (
              <Link
                key={g.href}
                href={g.href}
                className="bg-surface-primary p-6 rounded-2xl border border-surface-border hover:border-sage/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center text-sage group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary group-hover:text-sage transition-colors">
                      {g.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      {g.desc}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-sage flex items-center gap-1 pt-2 border-t border-surface-border/40">
                  <span>Open Guide</span> →
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}

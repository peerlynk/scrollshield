import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'App & Device Compatibility — Tested Platforms',
  description:
    'Tested compatibility matrix for ScrollShield gesture counting across Instagram, YouTube, Snapchat, Facebook, and X on Android.',
};

export default function CompatibilityPage() {
  const compatibilityList = [
    { app: 'Instagram', package: 'com.instagram.android', status: 'Verified', notes: 'Reels and Main Feed forward scroll gesture counting verified.', testedDate: 'September 2026' },
    { app: 'YouTube & Shorts', package: 'com.google.android.youtube', status: 'Verified', notes: 'Shorts reel swiping and feed vertical advancement verified.', testedDate: 'September 2026' },
    { app: 'Snapchat', package: 'com.snapchat.android', status: 'Supported', notes: 'Discover feed vertical gesture monitoring supported.', testedDate: 'September 2026' },
    { app: 'Facebook', package: 'com.facebook.katana', status: 'Supported', notes: 'Main feed and Watch video reel gesture monitoring supported.', testedDate: 'September 2026' },
    { app: 'X / Twitter', package: 'com.twitter.android', status: 'Supported', notes: 'Timeline forward gesture monitoring supported.', testedDate: 'September 2026' },
  ];

  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Platform Support"
          title="App & Device Compatibility"
          description="Tested status of ScrollShield gesture counting engine across major Android social feed applications."
        />

        <div className="bg-surface-primary rounded-3xl border border-surface-border overflow-hidden shadow-card-raised">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-secondary border-b border-surface-border text-text-muted font-mono uppercase tracking-wider">
                <tr>
                  <th className="p-4">Application</th>
                  <th className="p-4">Package ID</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Gesture Notes</th>
                  <th className="p-4">Last Tested</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border/50 text-text-secondary">
                {compatibilityList.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-secondary/40 transition-colors">
                    <td className="p-4 font-bold text-text-primary">{row.app}</td>
                    <td className="p-4 font-mono text-[11px] text-text-muted">{row.package}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sage/20 text-sage border border-sage/30 font-semibold">
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4 leading-relaxed">{row.notes}</td>
                    <td className="p-4 font-mono text-text-muted">{row.testedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-surface-primary p-6 rounded-2xl border border-surface-border text-xs text-text-muted leading-relaxed">
          <strong className="text-text-primary">Disclaimer:</strong> ScrollShield is an independent application and is not affiliated with, sponsored by, or endorsed by Instagram, YouTube, Snapchat, Facebook, X, or their parent companies. Accessibility gesture event behavior can vary across third-party app versions and Android OS builds.
        </div>

      </div>
    </div>
  );
}

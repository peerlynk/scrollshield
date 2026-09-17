import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CHANGELOG_DATA } from '@/data/changelog';
import { ApkDownloadButton } from '@/components/ui/Buttons';
import { CheckCircle2, Sparkles, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Changelog & Version History — Release Notes',
  description:
    'View official ScrollShield release notes, app updates, scroll detection improvements, and version history.',
};

export default function ChangelogPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Release History"
          title="App Version Changelog"
          description="Track release notes, scroll engine enhancements, and official Android app updates."
        />

        <div className="space-y-8">
          {CHANGELOG_DATA.map((release) => (
            <div
              key={release.version}
              className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 shadow-card-raised"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-border pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-text-primary font-mono">
                    v{release.version}
                  </span>
                  {release.badge && (
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-sage/15 text-sage border border-sage/30 font-semibold">
                      {release.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-text-muted">
                  {release.releaseDate} • {release.apkSizeMb}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-sage font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Key Highlights
                </h3>
                <ul className="space-y-1.5 text-xs text-text-secondary pl-5 list-disc">
                  {release.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-sand font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Engine & UI Improvements
                </h3>
                <ul className="space-y-1.5 text-xs text-text-secondary pl-5 list-disc">
                  {release.improvements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-surface-border/50 flex items-center justify-between">
                <span className="text-xs font-mono text-text-muted">File: {release.apkFilename}</span>
                <ApkDownloadButton size="md" variant="secondary" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

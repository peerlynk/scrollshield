import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Youtube } from 'lucide-react';

export const metadata: Metadata = {
  title: 'YouTube & Shorts Troubleshooting — Gesture Counting Fixes',
  description:
    'Specific setup guide for YouTube and YouTube Shorts scroll gesture counting on Android.',
};

export default function YouTubeTroubleshootingPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Troubleshooting"
          title="YouTube & Shorts Gesture Counting"
          description="Optimizing scroll detection across YouTube Home, Subscriptions, and Shorts player surfaces."
        />

        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-lg font-bold text-text-primary">YouTube Surfaces Breakdown</h3>
          <p>
            YouTube exposes different view hierarchy events depending on whether you are browsing the main feed or watching full-screen Shorts.
          </p>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">YouTube Shorts Player</div>
              <p>Shorts swipe gestures trigger vertical scroll events as you advance to the next video reel. ScrollShield deduplicates rapid double swipes.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">YouTube Home & Subscriptions Feed</div>
              <p>Vertical feed scrolling is counted normally. Video playback inside the player does not trigger scroll counts.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

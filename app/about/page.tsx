import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PlayStoreButton } from '@/components/ui/Buttons';
import { SCROLLSHIELD_RELEASE, PLAY_STORE } from '@/lib/config/release';
import { Shield, Sparkles, Heart, Compass, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ScrollShield — Why ScrollShield Exists',
  description:
    'Learn about ScrollShield’s mission to bring intentionality back to social media feeds. Built by Peerlynk as a private, local-first Android attention tool.',
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Product Mission"
          title="Why ScrollShield exists."
          description="Phones are useful. Infinite feeds are useful too — until the choice to keep scrolling disappears. ScrollShield exists to add a moment of awareness back into that loop."
        />

        <div className="bg-surface-primary p-6 md:p-10 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h2 className="text-2xl font-extrabold text-text-primary">
            Restoring Intentionality to Modern Feeds
          </h2>
          <p>
            Modern social applications are masterfully designed around frictionless engagement. Short-form video algorithms, infinite scroll feeds, and autoplay mechanisms eliminate natural stopping points. Opening an app for 2 minutes often turns into 30 minutes on autopilot without a conscious decision ever being made.
          </p>
          <p>
            ScrollShield was created not to banish technology or preach addiction treatments, but to restore a gentle moment of choice. By observing logical scroll gestures locally on your Android device, ScrollShield gives you clear milestone check-ins so you can decide what to do next.
          </p>

          <div className="pt-4 border-t border-surface-border grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-sage" />
                <span>Protection for Your Attention</span>
              </div>
              <p className="text-text-muted">Not medical therapy, ADHD treatment, or mental-health claims. Simply practical attention awareness.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sand" />
                <span>Built by Peerlynk</span>
              </div>
              <p className="text-text-muted">Developed as an independent digital-wellbeing utility under the Peerlynk umbrella.</p>
            </div>
          </div>
        </div>

        {/* Available for Android & Google Play Availability Card */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-4 shadow-card-raised">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage/20 border border-sage/40 flex items-center justify-center text-sage">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary">Available for Android</h3>
                <p className="text-xs text-text-muted">Supports Android 8.0 (API 26) and higher</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Image
                src="/brand/google-play-icon.svg"
                alt="Google Play"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="text-xs font-mono font-semibold text-sage">
                {PLAY_STORE.state === 'LIVE' ? 'Available on Google Play' : 'Google Play — Coming Soon'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-text-muted leading-relaxed">
              ScrollShield is built natively for Android using local Accessibility API event listening.
            </p>
            <PlayStoreButton size="md" className="w-full sm:w-auto shrink-0" />
          </div>
        </div>

      </div>
    </div>
  );
}

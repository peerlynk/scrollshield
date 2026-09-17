import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MilestoneTimelineSection } from '@/components/sections/MilestoneTimeline';
import { AgeAwareGuardianSection } from '@/components/sections/AgeAwareGuardian';
import { Sparkles, Eye, ShieldAlert, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Perspective & Guardian Interventions — Milestone System',
  description:
    'Deep dive into ScrollShield’s Perspective Check and Guardian intervention system. Understand check-in milestones and pause mechanisms.',
};

export default function GuardianPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Intervention System"
          title="A stopping point for an endless feed."
          description="Explore how ScrollShield's milestone check-ins and Guardian system bring awareness back into your scrolling session."
        />

        <div className="bg-surface-primary p-6 md:p-10 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-xl font-bold text-text-primary">Product Check-In Milestones</h3>
          <p>
            As continuous scrolling progresses inside a protected feed, ScrollShield brings up progressive intervention surfaces:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-sage" />
                <span>Perspective Check</span>
              </div>
              <p>Light visual prompt introducing a moment of reflection after initial feed engagement.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sand" />
                <span>Guardian Prompt</span>
              </div>
              <p>Personalized reminder reflecting your chosen study, career, presence, or health goals.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-secondary border border-surface-border text-xs text-text-muted">
            <strong className="text-text-primary">Note on Milestone Numbers (10 / 25 / 40 / 50 / 75 / 100):</strong> These numbers represent product check-in thresholds designed to structure session breaks. They are practical app intervention markers and are NOT medical or scientifically diagnosed addiction thresholds.
          </div>
        </div>

        <MilestoneTimelineSection />
        <AgeAwareGuardianSection />

      </div>
    </div>
  );
}

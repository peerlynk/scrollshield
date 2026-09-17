import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HowItWorksSection } from '@/components/sections/HowItWorks';
import { ScrollDemoSection } from '@/components/sections/ScrollDemo';
import { MilestoneTimelineSection } from '@/components/sections/MilestoneTimeline';
import { AgeAwareGuardianSection } from '@/components/sections/AgeAwareGuardian';
import { FinalCTASection } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'How It Works — Scroll Gesture Detection & Check-Ins',
  description:
    'Learn how ScrollShield detects forward feed gestures locally on Android, processes milestone check-ins, and presents calm attention interruptions.',
};

export default function HowItWorksPage() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Step-by-Step Architecture"
          title="Interrupting Autopilot Scrolling"
          description="Understand how ScrollShield observes structural swipe gestures locally and introduces mindful stopping points."
        />
      </div>

      <HowItWorksSection />
      <ScrollDemoSection />
      <MilestoneTimelineSection />
      <AgeAwareGuardianSection />
      <FinalCTASection />
    </div>
  );
}

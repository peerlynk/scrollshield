import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureGridSection } from '@/components/sections/FeatureGrid';
import { FloatingCounterSection } from '@/components/sections/FloatingCounterSection';
import { WidgetSection } from '@/components/sections/WidgetSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { FinalCTASection } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Features — Scroll Awareness, Breaks & Guardian',
  description:
    'Discover ScrollShield features: gesture counting, floating shield counter, adaptive Guardian, focus mode, bedtime protection, native widgets, and on-device insights.',
};

export default function FeaturesPage() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Comprehensive Feature Suite"
          title="Designed to Protect Your Attention"
          description="Explore the complete set of digital-wellbeing features engineered into ScrollShield for Android."
        />
      </div>

      <FeatureGridSection />
      <FloatingCounterSection />
      <WidgetSection />
      <InsightsSection />
      <FinalCTASection />
    </div>
  );
}

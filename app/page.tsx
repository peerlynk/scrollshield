import React from 'react';
import { HeroSection } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorks';
import { ScrollDemoSection } from '@/components/sections/ScrollDemo';
import { MilestoneTimelineSection } from '@/components/sections/MilestoneTimeline';
import { AgeAwareGuardianSection } from '@/components/sections/AgeAwareGuardian';
import { FeatureGridSection } from '@/components/sections/FeatureGrid';
import { FloatingCounterSection } from '@/components/sections/FloatingCounterSection';
import { WidgetSection } from '@/components/sections/WidgetSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { ScreenshotGallerySection } from '@/components/sections/ScreenshotGallery';
import { DownloadChoiceSection } from '@/components/sections/DownloadChoice';
import { FAQPreviewSection } from '@/components/sections/FAQPreview';
import { FinalCTASection } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 2. Hero */}
      <HeroSection />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. Problem Statement */}
      <ProblemSection />

      {/* 5. How ScrollShield Works */}
      <HowItWorksSection />

      {/* 6. Gesture Classification Demo */}
      <ScrollDemoSection />

      {/* 7. Milestone Timeline */}
      <MilestoneTimelineSection />

      {/* 8. Age-Aware Guardian */}
      <AgeAwareGuardianSection />

      {/* 9. Feature Grid */}
      <FeatureGridSection />

      {/* 10. Floating Counter */}
      <FloatingCounterSection />

      {/* 11. Widget */}
      <WidgetSection />

      {/* 12. Local Insights */}
      <InsightsSection />

      {/* 13. Privacy */}
      <PrivacySection />

      {/* 14. Screenshots */}
      <ScreenshotGallerySection />

      {/* 15. Download */}
      <DownloadChoiceSection />

      {/* 16. FAQ Preview */}
      <FAQPreviewSection />

      {/* 17. Final CTA */}
      <FinalCTASection />
    </>
  );
}

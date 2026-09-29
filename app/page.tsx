import React from 'react';
import { HeroSection } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { EndlessFeedStory } from '@/components/sections/EndlessFeedStory';
import { PinnedPhoneStory } from '@/components/sections/PinnedPhoneStory';
import { ScrollClassificationDemo } from '@/components/sections/ScrollClassificationDemo';
import { MilestoneScrub } from '@/components/sections/MilestoneScrub';
import { StackedGuardianCards } from '@/components/sections/StackedGuardianCards';
import { FeatureGridSection } from '@/components/sections/FeatureGrid';
import { FloatingCounterSection } from '@/components/sections/FloatingCounterSection';
import { WidgetSection } from '@/components/sections/WidgetSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { PrivacyCollapseSection } from '@/components/sections/PrivacyCollapseSection';
import { ScreenshotGallerySection } from '@/components/sections/ScreenshotGallery';
import { DownloadChoiceSection } from '@/components/sections/DownloadChoice';
import { FAQPreviewSection } from '@/components/sections/FAQPreview';
import { FinalCTASection } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Attention Stream & 3D Parallax Tilt */}
      <HeroSection />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Pinned Endless Feed Horizontal Scroll Story */}
      <EndlessFeedStory />

      {/* 4. Pinned Phone Product Storytelling */}
      <PinnedPhoneStory />

      {/* 5. Gesture Classification Logic Demo */}
      <ScrollClassificationDemo />

      {/* 6. Milestone Scrub Timeline */}
      <MilestoneScrub />

      {/* 7. Stacked Guardian Cards Scroll Effect */}
      <StackedGuardianCards />

      {/* 8. Feature Grid */}
      <FeatureGridSection />

      {/* 9. Floating Counter */}
      <FloatingCounterSection />

      {/* 10. Home Widget */}
      <WidgetSection />

      {/* 11. Local Insights */}
      <InsightsSection />

      {/* 12. Local Privacy Sealing Boundary */}
      <PrivacyCollapseSection />

      {/* 13. Screenshot Gallery */}
      <ScreenshotGallerySection />

      {/* 14. Download Hub */}
      <DownloadChoiceSection />

      {/* 15. FAQ Preview */}
      <FAQPreviewSection />

      {/* 16. Final CTA */}
      <FinalCTASection />
    </>
  );
}

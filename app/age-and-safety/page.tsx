import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, Heart, GraduationCap, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Age & Safety Explanation — Personalized Reminder Styles',
  description:
    'Learn how ScrollShield personalizes reminder prompts for different lifestyles and focus goals without psychological profiling or medical assessment.',
};

export default function AgeAndSafetyPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Safety & Personalization"
          title="Age Personalization & Safety"
          description="How ScrollShield tailors reminder tone and perspective checks to match your goals."
        />

        <div className="bg-surface-primary p-6 md:p-10 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-xl font-bold text-text-primary">Customizing Reminder Tone</h3>
          <p>
            ScrollShield allows users to choose a reminder style relevant to their lifestyle—such as Study/Skills for students, Career/Projects for professionals, Family/Presence for parents, or Physical Health for fitness goals.
          </p>

          <div className="p-4 rounded-2xl bg-surface-secondary border border-sand/30 space-y-2 text-xs">
            <div className="font-bold text-sand flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-sand" />
              <span>Important Medical & Psychological Clarification:</span>
            </div>
            <p>
              Age-aware personalization in ScrollShield is solely designed to adjust reminder copy, visual themes, and prompt tone. It is <strong>NOT</strong> psychological profiling, psychiatric diagnosis, behavioral therapy, or medical mental-health assessment.
            </p>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <h4 className="text-base font-bold text-text-primary">Safety Principles:</h4>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Local Processing Only:</strong> Lifestyle preferences and age segment choices remain 100% locally on your phone.</li>
              <li><strong>Topic Filtering:</strong> Users can disable specific reminder topics in app settings at any time.</li>
              <li><strong>User-Controlled Intensity:</strong> Higher-intensity check-in styles are strictly opt-in, disabled by default, and never forced.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

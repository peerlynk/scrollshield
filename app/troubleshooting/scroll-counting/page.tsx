import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Compass, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scroll Count Troubleshooting — Gesture Detection Fixes',
  description:
    'Troubleshoot why scroll counts might not be increasing or why gesture sensitivity differs between feed apps.',
};

export default function ScrollCountingTroubleshootingPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Troubleshooting"
          title="Scroll Count Troubleshooting"
          description="Fix gesture detection issues when scroll counts are not incrementing in protected feed apps."
        />

        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-lg font-bold text-text-primary">Checklist for Gesture Counting</h3>
          
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">1. Verify App Is Enabled in Protected Apps</div>
              <p>Ensure the app you are currently using (e.g. Instagram or YouTube) has its toggle switched ON in ScrollShield's Protected Apps list.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">2. Check Gesture Direction</div>
              <p>ScrollShield only counts forward vertical feed advancement. Upward scrollbacks, horizontal tab swipes, and taps are intentionally ignored.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">3. Ensure Accessibility Access Is Active</div>
              <p>Verify that Accessibility permission is still active in Android Settings → Accessibility → Installed Apps → ScrollShield.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

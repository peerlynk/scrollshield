import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Floating Counter Troubleshooting — Overlay Fixes',
  description:
    'Fix missing, hidden, or unrendered floating counter badge over protected apps.',
};

export default function FloatingCounterTroubleshootingPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Troubleshooting"
          title="Floating Counter Overlay Issues"
          description="Troubleshoot missing 🛡️ floating counter badges over active protected apps."
        />

        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-lg font-bold text-text-primary">Overlay Setup Steps</h3>
          
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">1. Verify "Display Over Other Apps" Permission</div>
              <p>Go to Android Settings → Apps → ScrollShield → Display over other apps → Allow permission.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">2. Check Toggle in ScrollShield Settings</div>
              <p>Open ScrollShield settings and ensure the "Floating Counter" switch is toggled ON.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">3. Reset Overlay Position</div>
              <p>If the badge was dragged off screen, tap "Reset Overlay Position" in app settings to bring it back to default top-right position.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AppWindow } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Widget Troubleshooting — Shield Bar Setup & Fixes',
  description:
    'Fix Android Shield Bar widget updating issues or placement on custom launchers.',
};

export default function WidgetTroubleshootingPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Troubleshooting"
          title="Shield Bar Widget Troubleshooting"
          description="Resolving launcher widget refresh issues and placement."
        />

        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-lg font-bold text-text-primary">Widget Refresh Solutions</h3>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">Re-Add Widget to Home Screen</div>
              <p>Long-press an empty area on your home screen, tap Widgets, find ScrollShield, drag the Shield Bar to your screen, and release.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1">
              <div className="font-bold text-text-primary">Disable Background Execution Limits</div>
              <p>Ensure Android battery saver is not restricting widget refresh intent broadcasts.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

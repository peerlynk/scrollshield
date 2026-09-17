import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldAlert, CheckCircle2, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibility Troubleshooting — Fix Background Disabling',
  description:
    'Learn how to prevent Android OEM battery optimizations from stopping ScrollShield AccessibilityService on Xiaomi, Samsung, Oppo, and Vivo devices.',
};

export default function AccessibilityTroubleshootingPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Troubleshooting"
          title="Accessibility Service Disabling"
          description="How to stop Android background battery saver from turning off ScrollShield's gesture monitoring."
        />

        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <h3 className="text-lg font-bold text-text-primary">Why Accessibility Access Gets Turned Off</h3>
          <p>
            Certain Android manufacturers (MIUI/HyperOS, OneUI, ColorOS, Funtouch) aggressively kill background services to preserve battery life. When Android kills ScrollShield, Accessibility access can appear turned off.
          </p>

          <div className="space-y-4 pt-2">
            <h4 className="text-base font-bold text-text-primary">Step-by-Step Fix:</h4>
            
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-2">
              <div className="font-bold text-text-primary">1. Turn Off Battery Optimization</div>
              <p className="text-xs">Go to <strong>Android Settings → Apps → ScrollShield → Battery → Unrestricted / No restrictions</strong>.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-2">
              <div className="font-bold text-text-primary">2. Lock ScrollShield in Recent Apps</div>
              <p className="text-xs">Open your Android Recent Apps screen, long-press ScrollShield, and tap the 🔒 Padlock icon to prevent auto-clearing.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-2">
              <div className="font-bold text-text-primary">3. Re-enable Service in Accessibility Settings</div>
              <p className="text-xs">Go to <strong>Settings → Accessibility → Installed Apps → ScrollShield</strong> and toggle the service back ON.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';
import { ShieldCheck, Check, X, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AccessibilityService Disclosure — How ScrollShield Uses Accessibility',
  description:
    'Comprehensive explanation of why ScrollShield requires Android AccessibilityService access, what data is processed locally, and what is strictly never collected.',
};

export default function AccessibilityPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Technical Transparency"
          title="Why ScrollShield Uses Accessibility"
          description="Clear explanation of Android AccessibilityService permissions, gesture detection, and security boundaries."
        />

        {/* Standard Policy Disclosure Card */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-sage/40 shadow-glow-sage space-y-4">
          <div className="flex items-center gap-2 text-sage font-mono text-xs uppercase tracking-wider font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Policy Disclosure Copy</span>
          </div>
          <p className="text-base text-text-primary font-medium leading-relaxed">
            "ScrollShield uses Android AccessibilityService to detect when selected protected apps are active in the foreground, observe structural scroll-event metadata, and display user-requested attention protection overlays."
          </p>
        </div>

        {/* 2-Column Comparison: What it uses it for vs What it NEVER uses it for */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Column 1: Allowed / Actual Uses */}
          <div className="bg-surface-primary p-6 rounded-2xl border border-surface-border space-y-4">
            <div className="text-sm font-bold text-sage flex items-center gap-2">
              <Check className="w-5 h-5 text-sage" />
              <span>What ScrollShield Uses Accessibility For</span>
            </div>
            <ul className="space-y-3 text-xs text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Detecting when your designated protected apps enter or exit the foreground.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Receiving directional scroll signals to count forward swipes in feeds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Displaying floating counter badges (🛡️ count) over active protected apps.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage font-bold">•</span>
                <span>Showing perspective check-in overlays when milestone counts are reached.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: STRICTLY NEVER USED FOR */}
          <div className="bg-surface-primary p-6 rounded-2xl border border-surface-border space-y-4">
            <div className="text-sm font-bold text-crimson-brand flex items-center gap-2">
              <X className="w-5 h-5 text-coral-brand" />
              <span>What ScrollShield Does NOT Use It For</span>
            </div>
            <ul className="space-y-3 text-xs text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-coral-brand font-bold">•</span>
                <span>Reading message text, chat logs, or typed input.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral-brand font-bold">•</span>
                <span>Capturing passwords, credentials, or credit card numbers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral-brand font-bold">•</span>
                <span>Recording screen video or taking screen screenshots.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral-brand font-bold">•</span>
                <span>Uploading any gesture data to remote servers or third parties.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* How to Enable and Disable */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-4 text-xs text-text-secondary leading-relaxed">
          <h3 className="text-lg font-bold text-text-primary">How to Manage Accessibility Access</h3>
          <p>
            Accessibility access is granted entirely by you in Android System Settings under <strong>Accessibility → Installed Apps → ScrollShield</strong>. You can turn off Accessibility access at any time in system settings, which immediately stops all background gesture observation.
          </p>
        </div>

      </div>
    </div>
  );
}

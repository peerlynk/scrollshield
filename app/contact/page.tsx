import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';
import { Mail, Globe, Shield, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Support — ScrollShield Help Desk',
  description:
    'Contact the ScrollShield team at Peerlynk for support, bug reports, and device setup queries.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Direct Support"
          title="Contact ScrollShield Support"
          description="Have questions about gesture detection, APK releases, or OEM accessibility settings? Reach out to our team."
        />

        <div className="bg-surface-primary p-8 rounded-3xl border border-surface-border text-center space-y-6 shadow-card-raised">
          <div className="w-12 h-12 rounded-2xl bg-sage/20 border border-sage/40 text-sage flex items-center justify-center mx-auto text-xl">
            📧
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-text-primary">Email Support Desk</h3>
            <p className="text-xs text-text-secondary max-w-md mx-auto leading-relaxed">
              We respond to technical setup queries, bug reports, and release feedback directly via email.
            </p>
          </div>

          <a
            href={`mailto:${SCROLLSHIELD_RELEASE.supportEmail}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-bg-primary font-semibold text-sm shadow-glow-sage hover:brightness-110 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email to {SCROLLSHIELD_RELEASE.supportEmail}</span>
          </a>

          <div className="pt-6 border-t border-surface-border grid grid-cols-2 gap-4 text-xs font-mono text-text-muted text-left">
            <div>
              <span className="text-text-secondary">Official Domain:</span> <br />
              {SCROLLSHIELD_RELEASE.officialDomain}
            </div>
            <div>
              <span className="text-text-secondary">Package Name:</span> <br />
              {SCROLLSHIELD_RELEASE.packageName}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

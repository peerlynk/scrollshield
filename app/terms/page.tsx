import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';

export const metadata: Metadata = {
  title: 'Terms of Use — ScrollShield Terms & Conditions',
  description:
    'Read the official Terms of Use for ScrollShield, direct APK distribution rules, and software usage conditions.',
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Legal Agreement"
          title="Terms of Use"
          description="Conditions governing the use of ScrollShield software, direct APK distribution, and services."
        />

        <div className="bg-surface-primary p-6 md:p-10 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <div className="pb-4 border-b border-surface-border font-mono text-xs text-text-muted">
            Last Updated: September 1, 2026
          </div>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-primary">1. Acceptable Use of Software</h2>
            <p>
              ScrollShield is provided as an Android digital-wellbeing utility to assist users in monitoring and managing their own mobile feed consumption habits. You agree to use ScrollShield in compliance with applicable local laws and Android platform guidelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-primary">2. Direct APK Distribution & Verification</h2>
            <p>
              Direct APK downloads are distributed officially via {SCROLLSHIELD_RELEASE.officialDomain}. Users are advised to verify SHA-256 checksums before installation. Peerlynk is not responsible for modified or re-packaged binaries obtained from unauthorized third-party websites.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-primary">3. Device & Platform Compatibility</h2>
            <p>
              Accessibility event behavior, gesture sensitivity, and background service execution can vary between Android OEMs, device software builds, and third-party app updates. ScrollShield does not guarantee universal compatibility across every custom Android ROM or third-party app version.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-primary">4. Third-Party Trademarks & Disclaimer</h2>
            <p>
              ScrollShield is an independent product developed by Peerlynk. All third-party product names, logos, brands, trademarks, and registered trademarks (such as Instagram, YouTube, Facebook, X, Snapchat) are property of their respective owners and are referenced solely for compatibility identification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-primary">5. Limitation of Liability</h2>
            <p>
              ScrollShield is provided "AS IS" without warranties of any kind. ScrollShield is an attention awareness tool and is not intended to provide medical, psychological, or addiction therapy treatments.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}

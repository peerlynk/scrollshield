import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, FileText, Lock, Sliders, Shield, Award, HelpCircle, Key } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ScrollShield Legal & Trust Hub — Compliance & Policy Center',
  description:
    'Access official ScrollShield policies, terms of use, accessibility service disclosure, data privacy center, permissions breakdown, and security documentation.',
};

export default function LegalHubPage() {
  const legalCards = [
    { title: 'Privacy Policy', desc: 'Full production privacy policy detailing 100% on-device processing.', href: '/privacy', icon: Lock },
    { title: 'Terms of Use', desc: 'Terms and conditions governing software usage and APK distribution.', href: '/terms', icon: FileText },
    { title: 'Accessibility Disclosure', desc: 'Detailed explanation of why Android AccessibilityService is required.', href: '/accessibility', icon: ShieldCheck },
    { title: 'Data & Privacy Center', desc: 'Human-readable summary of what stays on your phone.', href: '/data-privacy', icon: Shield },
    { title: 'Android Permissions', desc: 'Itemized breakdown of every Android permission declared in manifest.', href: '/permissions', icon: Sliders },
    { title: 'Age & Safety', desc: 'Explanation of age personalization and optional interruption styles.', href: '/age-and-safety', icon: HelpCircle },
    { title: 'App & Download Security', desc: 'Release package integrity, verification endpoints, and SSL details.', href: '/security', icon: Key },
    { title: 'Verify Download', desc: 'SHA-256 checksum & signing certificate verification commands.', href: '/verify-download', icon: ShieldCheck },
    { title: 'Open Source Licenses', desc: 'Third-party dependency license notices and acknowledgements.', href: '/licenses', icon: Award },
  ];

  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Compliance & Trust"
          title="ScrollShield Legal & Trust Hub"
          description="Central directory for all official policy disclosures, terms, security verification guides, and Play Store declarations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="bg-surface-primary p-6 rounded-2xl border border-surface-border hover:border-sage/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center text-sage group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-sage transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="text-xs font-mono text-sage flex items-center gap-1 pt-2 border-t border-surface-border/40">
                  <span>View Document</span> →
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}

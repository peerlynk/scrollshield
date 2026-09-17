import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Lock, EyeOff, ShieldCheck, Database, Server, FileText } from 'lucide-react';

export function PrivacySection() {
  const privacyCards = [
    {
      title: '100% On-Device Processing',
      desc: 'All gesture detection, counter math, and statistics calculations take place locally on your phone.',
      icon: Database,
    },
    {
      title: 'No ScrollShield Account',
      desc: 'No signup, no email registration, no phone number, and no user profile on any server.',
      icon: EyeOff,
    },
    {
      title: 'Zero Screen Recording',
      desc: 'ScrollShield never captures screenshots, records screen video, or stores image frames.',
      icon: Lock,
    },
    {
      title: 'No Message or Content Access',
      desc: 'Does not read message text, typed input, passwords, or account credentials.',
      icon: ShieldCheck,
    },
    {
      title: 'No Cloud Analytics Upload',
      desc: 'Your scrolling trends stay private on your hardware. Zero advertising telemetry.',
      icon: Server,
    },
    {
      title: 'Full Transparency',
      desc: 'Detailed disclosure explaining exactly how AccessibilityService is utilized.',
      icon: FileText,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-tertiary relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Privacy Guarantee"
          title="Your feed stays yours."
          description="ScrollShield is engineered around a strict local-first architecture. Your private screen data stays entirely on your phone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {privacyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-surface-primary p-6 rounded-2xl border border-surface-border hover:border-sage/40 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center text-sage">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">
                  {card.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link to Dedicated Accessibility Page */}
        <div className="mt-12 text-center">
          <Link
            href="/accessibility"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-primary border border-sage/40 text-sage hover:bg-surface-secondary transition-colors text-xs font-mono"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Read full AccessibilityService Disclosure & Policy</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

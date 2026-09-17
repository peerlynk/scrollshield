'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQ_DATA } from '@/data/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQPreviewSection() {
  const [openId, setOpenId] = useState<string | null>('what-is-scrollshield');
  const previewItems = FAQ_DATA.slice(0, 6);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-bg-primary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about ScrollShield, gesture detection, privacy, and APK installation."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {previewItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-surface-primary rounded-2xl border border-surface-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 font-medium text-text-primary flex items-center justify-between gap-4 hover:text-sage transition-colors"
                >
                  <span className="text-base font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-sage' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed border-t border-surface-border/40 pt-3 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-mono text-sage hover:underline"
          >
            <HelpCircle className="w-4 h-4" />
            <span>View all 18 Frequently Asked Questions →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

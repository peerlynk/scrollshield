import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AppWindow, Eye, Bell, Compass } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Choose protected apps',
      description: 'Select the apps where you want ScrollShield to watch for scrolling patterns (e.g. Instagram, YouTube, X).',
      icon: AppWindow,
    },
    {
      num: '02',
      title: 'Scroll normally',
      description: 'ScrollShield runs through Android’s accessibility framework and watches structural scroll events locally.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Reach a check-in',
      description: 'When your scrolling reaches configured milestones, ScrollShield interrupts the automatic pattern.',
      icon: Bell,
    },
    {
      num: '04',
      title: 'Choose your next step',
      description: 'Continue intentionally, take a 5-minute break, or leave the feed altogether.',
      icon: Eye,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="4-Step Flow"
          title="How ScrollShield Works"
          description="Designed to sit quietly in the background until your continuous scrolling hits your chosen threshold."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-surface-primary p-6 rounded-2xl border border-surface-border relative hover:border-sage/40 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-sage/40">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center text-sage">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-surface-border/40">
                  <span className="text-[11px] font-mono text-text-muted">
                    Step {idx + 1} of 4
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

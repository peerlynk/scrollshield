import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GraduationCap, Briefcase, Heart, ShieldAlert, Compass } from 'lucide-react';

export function AgeAwareGuardianSection() {
  const cards = [
    {
      category: 'STUDY / SKILLS',
      quote: '"Build before you browse."',
      desc: 'Reminders tailored for students and skill-builders focused on study goals.',
      icon: GraduationCap,
      color: 'sage',
    },
    {
      category: 'CAREER / PROJECTS',
      quote: '"Watching progress isn\'t progress."',
      desc: 'Keeps professionals aligned with real-world project deadlines.',
      icon: Briefcase,
      color: 'sand',
    },
    {
      category: 'FAMILY / PRESENCE',
      quote: '"Be where you are."',
      desc: 'Prompts mindfulness to protect presence with family and loved ones.',
      icon: Heart,
      color: 'sage',
    },
    {
      category: 'HEALTH / RESET',
      quote: '"The feed has no finish line. Your time does."',
      desc: 'Focuses on posture, sleep hygiene, and physical daily health.',
      icon: Compass,
      color: 'sand',
    },
    {
      category: 'PURPOSE / LEARNING',
      quote: '"There are still things worth starting."',
      desc: 'Encourages creative passions, reading, and self-directed learning.',
      icon: GraduationCap,
      color: 'sage',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-primary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Personalized Awareness"
          title="A Guardian that adapts to you."
          description="Choose the style of reminders that feels relevant to your lifestyle, age range, and daily priorities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-surface-primary p-5 rounded-2xl border border-surface-border flex flex-col justify-between space-y-4 hover:border-sage/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-surface-border flex items-center justify-center text-sage">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono text-text-muted">Mode {idx + 1}</span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-sand">
                    {card.category}
                  </div>

                  <h3 className="text-sm font-bold text-text-primary italic leading-snug">
                    {card.quote}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-surface-border/40 text-[10px] font-mono text-sage">
                  User-selectable style
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Intense/Horror Interventions */}
        <div className="mt-12 bg-surface-primary/80 p-5 rounded-2xl border border-surface-border max-w-3xl mx-auto flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-amber-brand shrink-0 mt-0.5" />
          <div className="text-xs text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Optional Interruption Preferences:</strong> Eligible users can optionally configure higher-intensity check-in styles in app settings. Intense check-ins are strictly user-controlled, off by default, and never forced.
          </div>
        </div>

      </div>
    </section>
  );
}

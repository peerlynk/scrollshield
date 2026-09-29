'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Heart, Activity, Compass } from 'lucide-react';

const GUARDIAN_CARDS = [
  {
    id: 'skills',
    category: 'STUDENT & SKILLS',
    title: 'Protect Learning & Focus Windows',
    description: 'Reminders tailored for exam prep, reading comprehension, and continuous skill building.',
    icon: BookOpen,
    accent: 'from-emerald-900/30 to-surface-primary border-emerald-500/30 text-emerald-400',
    stat: '90 Min Saved Daily',
  },
  {
    id: 'career',
    category: 'CAREER & PROJECTS',
    title: 'Preserve Deep Work & Flow States',
    description: 'Keep momentum on building products, coding, design, and strategic business goals.',
    icon: Briefcase,
    accent: 'from-blue-900/30 to-surface-primary border-blue-500/30 text-blue-400',
    stat: '2.5x Deep Focus',
  },
  {
    id: 'family',
    category: 'FAMILY & PRESENCE',
    title: 'Be Present for Loved Ones',
    description: 'Stop dinner table and bedside scrolling so family moments remain uninterrupted.',
    icon: Heart,
    accent: 'from-rose-900/30 to-surface-primary border-rose-500/30 text-rose-400',
    stat: '100% Present Nights',
  },
  {
    id: 'health',
    category: 'HEALTH & RESET',
    title: 'Guard Rest & Sleep Quality',
    description: 'Heightened evening protection helping your brain wind down naturally without screen fatigue.',
    icon: Activity,
    accent: 'from-amber-900/30 to-surface-primary border-amber-500/30 text-amber-400',
    stat: 'Better Sleep Score',
  },
  {
    id: 'purpose',
    category: 'PURPOSE & LEARNING',
    title: 'Align Feeds with Personal Growth',
    description: 'Transform mindless scroll loops into intentional check-ins aligned with your life priorities.',
    icon: Compass,
    accent: 'from-purple-900/30 to-surface-primary border-purple-500/30 text-purple-400',
    stat: 'Intentional Living',
  },
];

export function StackedGuardianCards() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary border-t border-surface-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-primary border border-sage/30 text-xs font-mono text-sage shadow-glow-sage">
            <span>Adaptive Age-Aware Guardian</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Personalized Protection for Every Life Stage.
          </h2>
          <p className="text-base text-text-secondary">
            Scroll down to see cards stack smoothly over each other as you explore Guardian profiles.
          </p>
        </div>

        {/* Stacked Sticky Cards Container */}
        <div className="space-y-12 pb-24">
          {GUARDIAN_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="sticky top-28 transition-transform duration-300 origin-top"
                style={{
                  top: `${100 + index * 16}px`,
                }}
              >
                <div className={`p-8 md:p-10 rounded-3xl bg-gradient-to-b ${card.accent} border shadow-2xl backdrop-blur-xl space-y-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-surface-primary border border-surface-border flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-text-muted">
                        {card.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-primary border border-surface-border font-semibold">
                      {card.stat}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary">{card.title}</h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { ShieldCheck, Eye, Layers, BarChart3, LayoutGrid } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STORY_STEPS = [
  {
    id: 'protected-apps',
    title: '1. Select Protected Apps',
    subtitle: 'Selective Feed Protection',
    description: 'Choose specific apps like Instagram, Shorts, X, or TikTok where you want attention protection active.',
    icon: ShieldCheck,
    screen: 'home' as const,
  },
  {
    id: 'floating-counter',
    title: '2. Live Floating Counter',
    subtitle: 'Real-Time Gesture Awareness',
    description: 'Keep a subtle 🛡️ scroll count overlay visible over protected feeds so you notice feed depth instantly.',
    icon: Layers,
    screen: 'counter' as const,
  },
  {
    id: 'perspective-check',
    title: '3. Perspective Check-Ins',
    subtitle: 'Calm Mindful Milestone Interventions',
    description: 'At milestone counts (10, 25, 40, 50, 75, 100), ScrollShield presents calm visual prompts to break autopilot.',
    icon: Eye,
    screen: 'perspective' as const,
  },
  {
    id: 'insights',
    title: '4. Private Local Insights',
    subtitle: 'On-Device Habits & Trends',
    description: 'View daily scroll counts, time saved, and 30-day trends calculated 100% locally on your phone.',
    icon: BarChart3,
    screen: 'insights' as const,
  },
  {
    id: 'widget',
    title: '5. Native Home Widget',
    subtitle: 'Glanceable Shield Status',
    description: 'Check daily scroll totals and active protection state right from your Android home screen.',
    icon: LayoutGrid,
    screen: 'widget' as const,
  },
];

export function PinnedPhoneStory() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      STORY_STEPS.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#story-step-${index}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-bg-primary border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-primary border border-sage/30 text-xs font-mono text-sage shadow-glow-sage">
            <span>Apple-Style Product Storytelling</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            How ScrollShield Works in Your Hand.
          </h2>
          <p className="text-base text-text-secondary">
            Scroll past the features below to see the phone screen update seamlessly in real time.
          </p>
        </div>

        {/* 2-Column Pinned Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Steps Column */}
          <div className="lg:col-span-6 space-y-32 py-12">
            {STORY_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.id}
                  id={`story-step-${index}`}
                  className={`p-8 rounded-3xl transition-all duration-500 border ${
                    isActive
                      ? 'bg-surface-primary border-sage/50 shadow-card-raised scale-[1.02]'
                      : 'bg-surface-primary/40 border-surface-border/40 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-sage/20 text-sage border border-sage/40' : 'bg-surface-secondary text-text-muted'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-sage font-bold">
                      {step.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right Sticky Phone Column */}
          <div className="lg:col-span-6 sticky top-28 flex justify-center lg:justify-end">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PhoneMockup
                    initialScreen={STORY_STEPS[activeStep].screen}
                    showControls={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PhoneMockup, ScreenState } from '@/components/ui/PhoneMockup';

export function ScreenshotGallerySection() {
  const [selectedScreen, setSelectedScreen] = useState<ScreenState>('home');

  const screens: { id: ScreenState; title: string; desc: string }[] = [
    { id: 'home', title: 'Dashboard', desc: 'Active protection status, today’s scroll count, and protected app switches.' },
    { id: 'counter', title: 'Floating Counter', desc: 'Live 🛡️ scroll count badge floating quietly over protected feeds.' },
    { id: 'perspective', title: 'Perspective Check', desc: 'Mindful interruption card offering break or continue options.' },
    { id: 'insights', title: 'Insights & Charts', desc: 'On-device statistics for 7-day scroll trends and per-app usage.' },
    { id: 'widget', title: 'Home Widget', desc: 'Native Android Shield Bar widget for your home screen.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-primary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="App Surfaces"
          title="Product Surface Showcase"
          description="Explore the main screens and surfaces built into ScrollShield for Android."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Screen Tabs List */}
          <div className="lg:col-span-5 space-y-3">
            {screens.map((s) => {
              const active = selectedScreen === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedScreen(s.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    active
                      ? 'bg-surface-primary border-sage text-text-primary shadow-glow-sage'
                      : 'bg-surface-primary/40 border-surface-border text-text-secondary hover:bg-surface-primary'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold">{s.title}</h3>
                    <span className={`text-[10px] font-mono ${active ? 'text-sage' : 'text-text-muted'}`}>
                      {active ? 'Active Preview' : 'Click to view'}
                    </span>
                  </div>
                  <p className="text-xs mt-1 text-text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive Phone Screen Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <PhoneMockup initialScreen={selectedScreen} showControls={false} />
          </div>

        </div>

      </div>
    </section>
  );
}

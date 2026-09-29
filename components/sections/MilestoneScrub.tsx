'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Eye, ShieldAlert, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  { count: 10, label: 'First Check-In', color: 'border-sage text-sage bg-sage/10', glow: 'shadow-glow-sage', text: 'Gentle notification nudge to build scroll awareness.' },
  { count: 25, label: 'Awareness Check', color: 'border-sand text-sand bg-sand/10', glow: 'shadow-glow-sand', text: 'Prompt asking if current feed session is intentional.' },
  { count: 40, label: 'Deep Scroll Warning', color: 'border-amber-400 text-amber-400 bg-amber-400/10', glow: 'shadow-amber-500/30', text: 'Milestone intervention showing total gestures completed.' },
  { count: 50, label: 'Half-Century Milestone', color: 'border-amber-500 text-amber-500 bg-amber-500/10', glow: 'shadow-amber-600/40', text: 'Encourages a 2-minute pause or switching to offline goals.' },
  { count: 75, label: 'High-Volume Feed Warning', color: 'border-orange-500 text-orange-400 bg-orange-500/10', glow: 'shadow-orange-500/40', text: 'Suggests closing protected app and standing up.' },
  { count: 100, label: 'Century Shield Boundary', color: 'border-rose-500 text-rose-400 bg-rose-500/10', glow: 'shadow-rose-500/50', text: 'Full Guardian screen review to preserve night rest and presence.' },
];

export function MilestoneScrub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = lineRef.current;
      if (!line) return;

      gsap.to(line, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
        },
      });

      MILESTONES.forEach((m) => {
        ScrollTrigger.create({
          trigger: `#milestone-node-${m.count}`,
          start: 'top center+=50',
          end: 'bottom center',
          toggleClass: { targets: `#milestone-node-${m.count}`, className: 'scale-110 border-opacity-100' },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-bg-secondary border-t border-surface-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-primary border border-sage/30 text-xs font-mono text-sage shadow-glow-sage">
            <Compass className="w-4 h-4 text-sage" />
            <span>Scroll-Synced Milestone Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Progressive Milestone Check-Ins.
          </h2>
          <p className="text-base text-text-secondary">
            As you scroll down this timeline, watch the progress line draw dynamically and activate each intervention threshold.
          </p>
        </div>

        {/* Timeline Ladder */}
        <div className="relative max-w-3xl mx-auto py-8">
          
          {/* Background Track Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-surface-border -translate-x-1/2 rounded-full" />
          
          {/* Animated Scrub Progress Line */}
          <div
            ref={lineRef}
            className="absolute left-6 sm:left-1/2 top-0 w-1 bg-gradient-to-b from-sage via-sand to-rose-500 -translate-x-1/2 rounded-full h-0 shadow-glow-sage"
          />

          {/* Milestone Items */}
          <div className="space-y-16">
            {MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.count}
                  id={`milestone-node-${item.count}`}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300"
                >
                  {/* Center Node Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center font-mono font-bold text-sm shadow-xl transition-transform duration-300 ${item.color} ${item.glow}`}>
                      {item.count}
                    </div>
                  </div>

                  {/* Content Card (Alternating Left / Right) */}
                  <div className={`w-full sm:w-[42%] pl-16 sm:pl-0 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
                    <div className="p-6 rounded-2xl bg-surface-primary border border-surface-border shadow-card-raised space-y-2 hover:border-sage/40 transition-colors">
                      <div className="text-xs font-mono font-bold text-sage">{item.label}</div>
                      <h4 className="text-lg font-bold text-text-primary">{item.count} Gestures Milestone</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

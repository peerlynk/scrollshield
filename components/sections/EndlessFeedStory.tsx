'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FEED_CARDS = [
  { id: 1, title: 'Infinite Video Feed', app: 'Shorts / Reels', color: 'from-purple-900/40 to-slate-900/40' },
  { id: 2, title: 'Autoplay Next Video', app: 'Video Stream', color: 'from-blue-900/40 to-slate-900/40' },
  { id: 3, title: 'Algorithm Recommendation', app: 'Social Feed', color: 'from-emerald-900/40 to-slate-900/40' },
  { id: 4, title: 'Endless Scroll Grid', app: 'Explore Page', color: 'from-amber-900/40 to-slate-900/40' },
  { id: 5, title: 'Notification Trigger', app: 'Push Alert', color: 'from-rose-900/40 to-slate-900/40' },
  { id: 6, title: 'Auto-refresh Timeline', app: 'Live Stream', color: 'from-teal-900/40 to-slate-900/40' },
];

export function EndlessFeedStory() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
        },
      });

      // Step 1: Track moves left & text 1 fades in
      timeline
        .to(track, { x: '-40%', ease: 'none', duration: 1 })
        .to(text1Ref.current, { opacity: 0, y: -20, duration: 0.3 }, 0.7)
        // Step 2: Shield intervention enters & text 2 reveals
        .fromTo(shieldRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, 0.8)
        .fromTo(text2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 0.8)
        .to(track, { x: '-70%', opacity: 0.3, ease: 'none', duration: 1 }, 0.8);
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative h-screen bg-bg-secondary flex flex-col justify-center overflow-hidden border-t border-surface-border">
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-40" />

      {/* Overlay Text Statements */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4 text-center">
        {/* Statement 1 */}
        <h2
          ref={text1Ref}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary max-w-3xl leading-[1.1]"
        >
          THE FEED DOESN’T KNOW <br />
          <span className="text-gradient-sand">WHEN YOU’VE HAD ENOUGH.</span>
        </h2>

        {/* Statement 2 (Intervention) */}
        <div ref={text2Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 px-4">
          <div ref={shieldRef} className="w-16 h-16 rounded-2xl bg-sage/20 border border-sage/50 flex items-center justify-center text-sage mb-6 shadow-glow-sage">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary max-w-3xl leading-[1.1]">
            SO WE ADD <br />
            <span className="text-gradient-brand">A STOPPING POINT.</span>
          </h2>
        </div>
      </div>

      {/* Moving Feed Track */}
      <div className="relative z-10 w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-6 w-[200vw] px-8 py-12">
          {FEED_CARDS.map((card) => (
            <div
              key={card.id}
              className={`w-72 sm:w-80 h-96 rounded-3xl bg-gradient-to-b ${card.color} border border-surface-border p-6 flex flex-col justify-between shrink-0 shadow-2xl backdrop-blur-md`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>{card.app}</span>
                <span className="w-2 h-2 rounded-full bg-sand/60 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-16 bg-surface-border rounded-full" />
                <div className="h-3 w-3/4 bg-surface-border/80 rounded-full" />
                <div className="h-2 w-1/2 bg-surface-border/50 rounded-full" />
              </div>
              <div className="pt-4 border-t border-surface-border/40 text-sm font-bold text-text-primary">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

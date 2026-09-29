'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, EyeOff, ServerOff, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function PrivacyCollapseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shieldSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const shield = shieldSvgRef.current;
      if (!shield) return;

      const path = shield.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-bg-primary border-t border-surface-border relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-primary border border-sand/30 text-xs font-mono text-sand shadow-glow-sand mx-auto lg:mx-0">
              <Lock className="w-4 h-4 text-sand" />
              <span>100% On-Device Local Privacy</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
              YOUR FEED <br />
              <span className="text-gradient-sand">STAYS YOURS.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ScrollShield does not inspect post content, read message text, record your screen, or transmit feed telemetry to remote cloud servers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-2xl bg-surface-primary border border-surface-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-text-primary">
                  <Cpu className="w-4 h-4 text-sage" />
                  <span>Local Accessibility Engine</span>
                </div>
                <p className="text-text-muted leading-relaxed">
                  Processes scroll gestures directly inside Android Accessibility service memory.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-primary border border-surface-border space-y-2">
                <div className="flex items-center gap-2 font-bold text-text-primary">
                  <ServerOff className="w-4 h-4 text-sand" />
                  <span>Zero Cloud Server Connections</span>
                </div>
                <p className="text-text-muted leading-relaxed">
                  No user accounts, no analytics tracking, and no external API requests.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column: Shield Boundary Particle Sealing Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-96 rounded-3xl bg-surface-primary border border-surface-border p-6 flex flex-col items-center justify-center text-center space-y-6 shadow-2xl">
              
              {/* SVG Animated Shield Outline */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg
                  ref={shieldSvgRef}
                  className="absolute inset-0 w-full h-full text-sage"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 Z" />
                </svg>

                {/* Center Lock Badge */}
                <div className="w-16 h-16 rounded-2xl bg-surface-secondary border border-surface-border flex items-center justify-center text-sand shadow-glow-sand">
                  <Lock className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-bold text-text-primary">Local Storage Boundary</div>
                <div className="text-xs font-mono text-sage">On-Device Encrypted Storage</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

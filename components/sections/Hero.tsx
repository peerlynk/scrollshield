'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Smartphone, Lock, EyeOff } from 'lucide-react';
import { ApkDownloadButton, PlayStoreButton } from '@/components/ui/Buttons';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Reveal } from '@/components/motion/Reveal';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headlineScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    setTilt({
      rotateX: -y * 8, // max 8 deg tilt
      rotateY: x * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-bg-primary"
    >
      {/* Background Radial Glow & Drifting Rings */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-80" />

      {/* Signature Attention Stream Motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M -100 600 C 200 700 400 300 600 400 C 800 500 1000 200 1300 300"
            stroke="url(#attentionGradient)"
            strokeWidth="2"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [-200, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          />
          <motion.path
            d="M -100 200 C 300 100 500 500 800 300 C 1000 100 1100 400 1300 500"
            stroke="url(#attentionGradient2)"
            strokeWidth="1.5"
            strokeDasharray="6 10"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          />
          <defs>
            <linearGradient id="attentionGradient" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#91A989" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#E0C99E" stopOpacity="0.5" />
              <stop offset="1" stopColor="#171611" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="attentionGradient2" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E0C99E" stopOpacity="0.6" />
              <stop offset="0.5" stopColor="#91A989" stopOpacity="0.4" />
              <stop offset="1" stopColor="#171611" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div style={{ opacity: heroOpacity }} className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill */}
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-primary border border-sage/30 text-xs font-mono text-sage shadow-glow-sage mx-auto lg:mx-0">
                <ShieldCheck className="w-4 h-4 text-sage" />
                <span>Android Attention Protection</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <motion.div style={{ scale: headlineScale }} className="origin-center lg:origin-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
                PROTECT <br />
                <span className="text-gradient-brand">YOUR ATTENTION.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                ScrollShield helps you notice when intentional phone use turns into automatic scrolling — and gives you a moment to choose what happens next.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <MagneticButton strength={6} className="w-full sm:w-auto">
                  <ApkDownloadButton size="lg" variant="hero" className="w-full sm:w-auto" />
                </MagneticButton>
                <MagneticButton strength={6} className="w-full sm:w-auto">
                  <PlayStoreButton size="lg" className="w-full sm:w-auto" />
                </MagneticButton>
              </div>
            </Reveal>

            {/* Trust Badges Bar */}
            <Reveal direction="up" delay={0.5}>
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-text-muted border-t border-surface-border/40">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-sage" />
                  <span>Android Native</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-sand" />
                  <span>100% Local-First</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <EyeOff className="w-4 h-4 text-sage" />
                  <span>No Account Required</span>
                </div>
              </div>
            </Reveal>
          </motion.div>

          {/* Right Visual Column: 3D Parallax Floating Android Phone Mockup */}
          <motion.div
            style={{ y: phoneY }}
            animate={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="lg:col-span-5 flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative transform-gpu">
              <PhoneMockup initialScreen="home" showControls={true} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

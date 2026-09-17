'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Smartphone, Lock, EyeOff } from 'lucide-react';
import { ApkDownloadButton, PlayStoreButton } from '@/components/ui/Buttons';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-bg-primary">
      {/* Background Subtle Radial Glow & Artwork Blur */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-primary border border-sage/30 text-xs font-mono text-sage shadow-glow-sage mx-auto lg:mx-0">
              <ShieldCheck className="w-4 h-4 text-sage" />
              <span>Android Attention Protection</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
              PROTECT <br />
              <span className="text-gradient-brand">YOUR ATTENTION.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              ScrollShield helps you notice when intentional phone use turns into automatic scrolling — and gives you a moment to choose what happens next.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <ApkDownloadButton size="lg" variant="hero" className="w-full sm:w-auto" />
              <PlayStoreButton size="lg" className="w-full sm:w-auto" />
            </div>

            {/* Trust Badges Bar */}
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
          </div>

          {/* Right Visual Column: Android Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMockup initialScreen="home" showControls={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

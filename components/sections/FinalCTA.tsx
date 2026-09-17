import React from 'react';
import { ApkDownloadButton, PlayStoreButton } from '@/components/ui/Buttons';

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-cinematic relative border-t border-surface-border text-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <div className="inline-block px-3.5 py-1.5 rounded-full bg-sage/10 border border-sage/30 text-xs font-mono text-sage shadow-glow-sage">
          Mindful Feed Usage
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
          TAKE BACK <br />
          <span className="text-gradient-brand">THE NEXT SCROLL.</span>
        </h2>

        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Install ScrollShield and make your feeds intentional again. ScrollShield gives you a moment to notice, choose, and step away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <ApkDownloadButton size="lg" variant="hero" className="w-full sm:w-auto" />
          <PlayStoreButton size="lg" className="w-full sm:w-auto" />
        </div>

        <div className="text-xs font-mono text-text-muted pt-4">
          Android • 100% Local-First • No Account Required
        </div>

      </div>
    </section>
  );
}

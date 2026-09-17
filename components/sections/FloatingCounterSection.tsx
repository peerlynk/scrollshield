import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { Shield, Eye, Sliders } from 'lucide-react';

export function FloatingCounterSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-tertiary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-mono text-sage bg-sage/10 rounded-full border border-sage/20 uppercase tracking-wider">
              Real-Time Visual Overlay
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-[1.12]">
              See the scroll <br />
              <span className="text-gradient-brand">before it disappears.</span>
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              The optional floating counter displays your active protected app's forward-scroll count in real time as a subtle floating 🛡️ badge on screen.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-primary border border-surface-border flex items-center justify-center text-sage shrink-0 mt-0.5">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">100% User-Controlled</h4>
                  <p className="text-xs text-text-secondary">Turn it on or off anytime with a single toggle in settings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-primary border border-surface-border flex items-center justify-center text-sand shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Active in Protected Apps Only</h4>
                  <p className="text-xs text-text-secondary">Only appears when you open apps you explicitly chose to protect.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-primary border border-surface-border flex items-center justify-center text-sage shrink-0 mt-0.5">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Non-Intrusive Design</h4>
                  <p className="text-xs text-text-secondary">Compact translucent pill that stays quietly out of the way of post content.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <PhoneMockup initialScreen="counter" showControls={false} />
          </div>

        </div>

      </div>
    </section>
  );
}

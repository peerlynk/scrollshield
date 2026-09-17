import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { LayoutGrid, BarChart2, ShieldCheck } from 'lucide-react';

export function WidgetSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <PhoneMockup initialScreen="widget" showControls={false} />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-mono text-sand bg-sand/10 rounded-full border border-sand/20 uppercase tracking-wider">
              Android Native Surface
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-[1.12]">
              At-a-glance metrics <br />
              <span className="text-gradient-sand">on your home screen.</span>
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Check your daily forward scroll totals, protected time, top apps, and current protection state directly from your Android launcher with the native Shield Bar widget.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Daily Forward Scrolls', desc: 'Track aggregate swipe counts across all protected apps.', icon: BarChart2 },
                { title: 'Protected Time', desc: 'See total time spent under active attention protection.', icon: ShieldCheck },
                { title: 'Protection State Indicator', desc: 'Instant visual status showing when protection is active, on break, or in focus mode.', icon: LayoutGrid },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-surface-primary border border-surface-border">
                    <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-surface-border flex items-center justify-center text-sage shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
                      <p className="text-xs text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

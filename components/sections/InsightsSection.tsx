import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { BarChart3, Calendar, PieChart, Clock } from 'lucide-react';

export function InsightsSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="On-Device Analytics"
          title="See the pattern."
          description="Gain clarity on your feed consumption habits with local statistics calculated entirely on your device."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6 space-y-4">
            {[
              {
                title: 'Today, 7-Day & 30-Day Trends',
                desc: 'Compare daily forward scroll volume across different days of the week.',
                icon: Calendar,
              },
              {
                title: 'Per-App Scroll Breakdown',
                desc: 'See exactly which feed apps consume the highest proportion of your attention.',
                icon: PieChart,
              },
              {
                title: 'Protected Time & Breaks',
                desc: 'Track time spent under protection and total cooldown break windows completed.',
                icon: Clock,
              },
              {
                title: 'Time-of-Day Insights',
                desc: 'Identify peak scrolling hours—such as late-night feeds or morning wakeups.',
                icon: BarChart3,
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface-primary p-4 rounded-2xl border border-surface-border flex items-start gap-4 hover:border-sage/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center text-sage shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <PhoneMockup initialScreen="insights" showControls={false} />
          </div>

        </div>

      </div>
    </section>
  );
}

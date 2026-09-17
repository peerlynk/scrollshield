import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function MilestoneTimelineSection() {
  const milestones = [
    { count: '10', title: 'Notice', type: 'Subtle Check-In', desc: 'A subtle awareness indicator as session begins.' },
    { count: '25', title: 'Perspective', type: 'Gentle Reflection', desc: 'Brings up a light question about your time.' },
    { count: '40', title: 'Guardian', type: 'Personal Goal', desc: 'Reflects your chosen study, career, or health priority.' },
    { count: '50', title: 'Strong Check', type: 'Session Milestone', desc: 'Direct interjection giving options to stop.' },
    { count: '75', title: 'Deeper Interrupt', type: 'Cooldown Option', desc: 'Offers a 5-minute focus or cooldown break.' },
    { count: '100', title: 'Final Check', type: 'Session Reset', desc: 'Encourages closing the feed for the day.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-tertiary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Session Progression"
          title="The Check-In Ladder"
          description="Check-ins become more noticeable as the scrolling session continues, giving you progressive stopping points."
        />

        {/* Timeline Desktop Horizontal Ladder */}
        <div className="relative py-8">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-surface-border -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-surface-primary p-5 rounded-2xl border border-surface-border hover:border-sage/50 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-surface-secondary border border-sage/40 flex items-center justify-center font-mono font-extrabold text-base text-sage group-hover:scale-110 transition-transform">
                    {m.count}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted uppercase">
                    Step {idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-text-primary mb-1">
                    {m.title}
                  </h3>
                  <div className="text-[11px] font-mono text-sand mb-2">
                    {m.type}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-surface-border/40 text-[10px] font-mono text-text-muted">
                  {m.count} forward scrolls
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

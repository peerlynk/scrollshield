import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-tertiary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="The Unending Feed"
          title="The feed doesn't know when you've had enough."
          description="Short-form feeds are designed to keep producing another post, reel, video or update. The difficult part isn't opening the app. It's noticing when intentional use turns into another 20 minutes."
        />

        {/* Visual Card with Artwork */}
        <div className="max-w-4xl mx-auto bg-surface-primary rounded-3xl border border-surface-border p-6 md:p-10 relative overflow-hidden shadow-card-raised">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-6 space-y-4">
              <div className="inline-block text-xs font-mono text-sand bg-sand/10 px-3 py-1 rounded-full border border-sand/20">
                Feed Autopilot
              </div>
              <h3 className="text-2xl font-bold text-text-primary leading-tight">
                No natural breaks. No finish line.
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                When feeds eliminate pagination and continuous scrolling takes over, your brain loses its regular decision points. Minute after minute slips by on autopilot.
              </p>
              <div className="pt-2 border-t border-surface-border">
                <span className="text-xs font-mono text-sage">
                  ScrollShield introduces the missing pause.
                </span>
              </div>
            </div>

            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden border border-surface-border">
                <Image
                  src="/images/artwork/endless_feed.png"
                  alt="Endless feed fading into dark space"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

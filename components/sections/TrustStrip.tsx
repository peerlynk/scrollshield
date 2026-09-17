import React from 'react';
import { Shield, Lock, EyeOff, Sliders, Cpu } from 'lucide-react';

export function TrustStrip() {
  const pillars = [
    { title: 'LOCAL-FIRST', description: 'Zero telemetry or backend upload', icon: Lock },
    { title: 'NO ACCOUNT REQUIRED', description: 'Immediate privacy out of the box', icon: EyeOff },
    { title: 'NO CONTENT READING', description: 'Monitors gestures, not your texts', icon: Shield },
    { title: 'USER-CONTROLLED', description: 'You decide protected apps and levels', icon: Sliders },
    { title: 'ANDROID NATIVE', description: 'Built for low battery & memory impact', icon: Cpu },
  ];

  return (
    <section className="bg-bg-secondary border-y border-surface-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex flex-col items-center space-y-2 p-2">
                <div className="w-8 h-8 rounded-lg bg-surface-primary border border-sage/30 flex items-center justify-center text-sage">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono font-bold text-text-primary tracking-wider">
                  {p.title}
                </div>
                <div className="text-[11px] text-text-muted">
                  {p.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

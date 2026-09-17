import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FEATURES_DATA } from '@/data/features';
import {
  Shield,
  Compass,
  Eye,
  Sparkles,
  Clock,
  Moon,
  Layers,
  LayoutGrid,
  BarChart3,
  Lock,
  UserCheck,
  Cpu,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Shield,
  Compass,
  Eye,
  Sparkles,
  Clock,
  Moon,
  Layers,
  LayoutGrid,
  BarChart3,
  Lock,
  UserCheck,
  Cpu,
};

export function FeatureGridSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Capability Overview"
          title="Designed for Attention Control"
          description="Every feature in ScrollShield is engineered to help you notice and interrupt mindless feed scrolling without intrusive tracking."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES_DATA.map((feat) => {
            const Icon = iconMap[feat.iconName] || Shield;

            return (
              <div
                key={feat.id}
                className="bg-surface-primary p-5 rounded-2xl border border-surface-border hover:border-sage/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center text-sage">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10px] font-mono text-sage bg-sage/10 px-2 py-0.5 rounded-full border border-sage/20">
                    {feat.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-text-primary mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {feat.shortDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowUp, ArrowDown, ArrowLeftRight, Touchpad, Check, X, ShieldAlert } from 'lucide-react';

export function ScrollDemoSection() {
  const [scrollCount, setScrollCount] = useState(14);
  const [lastAction, setLastAction] = useState<string>('Forward Swipe (+1)');

  const handleSimulate = (type: 'up' | 'down' | 'side' | 'tap' | 'dup') => {
    if (type === 'up') {
      setScrollCount(prev => prev + 1);
      setLastAction('Forward Swipe (+1)');
    } else if (type === 'down') {
      setLastAction('Backward Scroll (Ignored)');
    } else if (type === 'side') {
      setLastAction('Horizontal Swipe (Ignored)');
    } else if (type === 'tap') {
      setLastAction('Tap / Click (Ignored)');
    } else if (type === 'dup') {
      setLastAction('Duplicate OS Event (Deduplicated)');
    }
  };

  const gestureRules = [
    {
      id: 'up',
      label: 'FORWARD / UPWARD',
      result: 'Counted (+1)',
      status: 'success',
      icon: ArrowUp,
      desc: 'Logical feed advancement',
    },
    {
      id: 'down',
      label: 'DOWNWARD / BACK',
      result: 'Ignored',
      status: 'ignored',
      icon: ArrowDown,
      desc: 'Scrolling back up',
    },
    {
      id: 'side',
      label: 'HORIZONTAL SWIPE',
      result: 'Ignored',
      status: 'ignored',
      icon: ArrowLeftRight,
      desc: 'Tab or story switching',
    },
    {
      id: 'tap',
      label: 'TAP / CLICK',
      result: 'Ignored',
      status: 'ignored',
      icon: Touchpad,
      desc: 'Opening post or liking',
    },
    {
      id: 'dup',
      label: 'DUPLICATE EVENTS',
      result: 'Deduplicated',
      status: 'ignored',
      icon: ShieldAlert,
      desc: 'Rapid OS event bursts',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Gesture Intelligence"
          title="What counts as a scroll?"
          description="ScrollShield is designed to count logical forward feed gestures rather than every raw Android scroll event."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Gesture Rule Cards */}
          <div className="lg:col-span-7 space-y-3">
            {gestureRules.map((rule) => {
              const Icon = rule.icon;
              const isSuccess = rule.status === 'success';

              return (
                <button
                  key={rule.id}
                  onClick={() => handleSimulate(rule.id as any)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isSuccess
                      ? 'bg-surface-primary border-sage/40 hover:border-sage'
                      : 'bg-surface-primary/60 border-surface-border hover:bg-surface-primary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSuccess ? 'bg-sage/20 text-sage' : 'bg-surface-raised text-text-muted'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-text-primary">
                        {rule.label}
                      </div>
                      <div className="text-[11px] text-text-muted">
                        {rule.desc}
                      </div>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1 ${
                    isSuccess
                      ? 'bg-sage/20 text-sage border border-sage/30'
                      : 'bg-surface-raised text-text-muted border border-surface-border'
                  }`}>
                    {isSuccess ? <Check className="w-3.5 h-3.5 text-sage" /> : <X className="w-3.5 h-3.5" />}
                    {rule.result}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live Simulator Counter Panel */}
          <div className="lg:col-span-5 bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border text-center space-y-6 shadow-card-raised">
            <div className="text-xs font-mono text-sage uppercase tracking-wider">
              Live Demo Simulator
            </div>

            <div className="space-y-1">
              <div className="text-5xl font-extrabold text-text-primary font-mono tracking-tight">
                {scrollCount}
              </div>
              <div className="text-xs text-text-secondary">
                Validated Forward Scrolls
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-secondary border border-surface-border text-xs font-mono text-sand">
              Last event: {lastAction}
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              Click any gesture rule on the left to test how ScrollShield filters gestures locally.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center text-xs text-text-muted max-w-2xl mx-auto border-t border-surface-border/40 pt-4">
          Note: Accessibility event structures can vary across Android versions, device manufacturers, and app releases. ScrollShield is optimized for consistent feed detection across major platforms.
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { ArrowUp, ArrowDown, ArrowLeftRight, MousePointerClick, CheckCircle2, XCircle } from 'lucide-react';

const GESTURE_TYPES = [
  { id: 'up', label: 'Swipe Up (Forward Scroll)', result: '+1 Counted', valid: true, icon: ArrowUp, desc: 'Logical forward scroll gesture detected locally.' },
  { id: 'down', label: 'Swipe Down (Scroll Back)', result: 'Ignored', valid: false, icon: ArrowDown, desc: 'Scrolling backward up the feed is safely ignored.' },
  { id: 'side', label: 'Swipe Left / Right', result: 'Ignored', valid: false, icon: ArrowLeftRight, desc: 'Horizontal carousel swipes do not increase count.' },
  { id: 'tap', label: 'Tap / Select Item', result: 'Ignored', valid: false, icon: MousePointerClick, desc: 'Tapping videos, buttons, or links is ignored.' },
];

export function ScrollClassificationDemo() {
  const [activeGesture, setActiveGesture] = useState('up');
  const [demoCount, setDemoCount] = useState(34);

  const handleSimulate = (gestureId: string) => {
    setActiveGesture(gestureId);
    if (gestureId === 'up') {
      setDemoCount((prev) => prev + 1);
    }
  };

  const selectedGesture = GESTURE_TYPES.find((g) => g.id === activeGesture) || GESTURE_TYPES[0];

  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-surface-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-primary border border-sage/30 text-xs font-mono text-sage shadow-glow-sage">
            <span>Gesture Classification Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            How ScrollShield Counts Only Real Feeds.
          </h2>
          <p className="text-base text-text-secondary">
            Click the buttons below to test how Accessibility events are filtered locally on device.
          </p>
        </div>

        {/* Interactive Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-text-muted mb-2">
              Test Gesture Logic
            </h3>
            {GESTURE_TYPES.map((g) => {
              const Icon = g.icon;
              const isSelected = activeGesture === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSimulate(g.id)}
                  type="button"
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-surface-primary border-sage text-text-primary shadow-glow-sage scale-[1.01]'
                      : 'bg-surface-primary/50 border-surface-border text-text-secondary hover:border-surface-border/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      g.valid ? 'bg-sage/20 text-sage' : 'bg-surface-secondary text-text-muted'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text-primary">{g.label}</div>
                      <div className="text-xs text-text-muted">{g.desc}</div>
                    </div>
                  </div>

                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                    g.valid ? 'bg-sage/15 text-sage border-sage/30' : 'bg-surface-secondary text-text-muted border-surface-border'
                  }`}>
                    {g.result}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Phone Screen Indicator */}
          <div className="lg:col-span-6 bg-surface-primary p-8 rounded-3xl border border-surface-border shadow-card-raised text-center space-y-6">
            <div className="flex items-center justify-between border-b border-surface-border pb-4">
              <span className="text-xs font-mono text-text-muted">Live Simulated Phone Feed</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sage animate-ping" />
                <span className="text-xs font-mono text-sage font-bold">Active Engine</span>
              </div>
            </div>

            {/* Live Floating Counter Badge Display */}
            <div className="p-6 rounded-2xl bg-bg-primary border border-surface-border space-y-3">
              <div className="text-xs font-mono text-text-muted">Shield Counter Display</div>
              <div className="text-4xl font-extrabold text-text-primary">
                🛡️ <AnimatedCounter value={demoCount} />
              </div>
              <p className="text-xs text-text-muted">Forward Gestures Tracked Today</p>
            </div>

            {/* Gesture Result Banner */}
            <div className={`p-4 rounded-2xl border flex items-center justify-center gap-3 transition-colors ${
              selectedGesture.valid
                ? 'bg-sage/10 border-sage/40 text-sage'
                : 'bg-surface-secondary border-surface-border text-text-muted'
            }`}>
              {selectedGesture.valid ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              <span className="text-xs font-mono font-bold">
                {selectedGesture.label} $\rightarrow$ {selectedGesture.result}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

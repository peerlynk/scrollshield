'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Shield, Sparkles, Eye, BarChart3, AppWindow, CheckCircle2, Clock, Smartphone } from 'lucide-react';

export type ScreenState = 'home' | 'counter' | 'perspective' | 'insights' | 'widget';

interface PhoneMockupProps {
  initialScreen?: ScreenState;
  showControls?: boolean;
}

export function PhoneMockup({
  initialScreen = 'home',
  showControls = true,
}: PhoneMockupProps) {
  const [activeScreen, setActiveScreen] = useState<ScreenState>(initialScreen);

  return (
    <div className="flex flex-col items-center">
      {/* Phone Shell */}
      <div className="relative w-[290px] sm:w-[320px] h-[580px] sm:h-[620px] bg-[#0E0D0A] rounded-[44px] p-3 border-4 border-[#2A2720] shadow-card-raised shadow-black/80 flex flex-col overflow-hidden">
        {/* Top Camera Punch Hole & Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#080806] rounded-full flex items-center justify-center gap-2 z-30 border border-[#25221B]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#171611]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#91A989]/40"></div>
        </div>

        {/* Screen Frame */}
        <div className="relative w-full h-full bg-bg-primary rounded-[34px] overflow-hidden flex flex-col border border-surface-border text-text-primary pt-8">
          
          {/* SCREEN CONTENT 1: HOME */}
          {activeScreen === 'home' && (
            <div className="flex-1 p-4 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-surface-border pb-3">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-sage/40">
                      <Image
                        src="/brand/scrollshield-icon-64.png"
                        alt="App Icon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text-primary">ScrollShield</div>
                      <div className="text-[10px] text-text-muted">Mindful scroll companion</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-sage/15 text-sage border border-sage/30">
                    Protected
                  </span>
                </div>

                {/* Main Hero Card inside App */}
                <div className="bg-surface-primary rounded-2xl p-4 border border-surface-border relative overflow-hidden">
                  <div className="text-[10px] font-mono text-sage mb-1 uppercase tracking-wider">Today's Feed Scrolls</div>
                  <div className="text-3xl font-extrabold text-text-primary flex items-baseline gap-2">
                    42 <span className="text-xs font-normal text-text-secondary">forward gestures</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-text-secondary pt-2 border-t border-surface-border/50">
                    <span>Protected Time</span>
                    <span className="font-mono text-text-primary">18m 40s</span>
                  </div>
                </div>

                {/* Protected Apps List */}
                <div>
                  <div className="text-[11px] font-medium text-text-muted mb-2">Protected Feed Apps</div>
                  <div className="space-y-2">
                    {[
                      { name: 'Instagram', count: '24 scrolls', active: true, color: 'from-purple-500/20 to-pink-500/20' },
                      { name: 'YouTube Shorts', count: '18 scrolls', active: true, color: 'from-red-500/20 to-amber-500/20' },
                      { name: 'X / Twitter', count: 'Paused', active: false, color: 'from-blue-500/20 to-cyan-500/20' },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-surface-secondary border border-surface-border/60 text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${app.color} border border-surface-border flex items-center justify-center text-[10px] font-bold text-text-primary`}>
                            {app.name[0]}
                          </div>
                          <span className="font-medium text-text-primary">{app.name}</span>
                        </div>
                        <span className={`text-[10px] font-mono ${app.active ? 'text-sage' : 'text-text-muted'}`}>
                          {app.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-4 p-2.5 rounded-xl bg-surface-raised border border-sage/30 flex items-center justify-between text-xs">
                <span className="text-text-secondary">Protection Mode</span>
                <span className="text-sage font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active
                </span>
              </div>
            </div>
          )}

          {/* SCREEN CONTENT 2: FLOATING COUNTER PREVIEW */}
          {activeScreen === 'counter' && (
            <div className="flex-1 relative bg-[#12100B] overflow-hidden flex flex-col justify-between p-4">
              {/* Simulated Feed Background */}
              <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-[#1E1C15] via-[#0D0C09] to-[#171510] flex flex-col justify-between p-4 pointer-events-none">
                <div className="w-full h-8 bg-surface-raised/40 rounded-lg"></div>
                <div className="w-full h-40 bg-surface-primary/40 rounded-xl border border-surface-border/40"></div>
                <div className="w-3/4 h-6 bg-surface-raised/30 rounded"></div>
              </div>

              {/* FLOATING SHIELD COUNTER OVERLAY (🛡️ 34) */}
              <div className="relative z-20 self-end mt-4 px-3 py-1.5 rounded-full bg-bg-primary/95 border border-sage/60 shadow-glow-sage backdrop-blur-md flex items-center gap-2 animate-pulse">
                <div className="relative w-4 h-4 rounded-full overflow-hidden">
                  <Image src="/brand/scrollshield-icon-32.png" alt="Icon" fill className="object-cover" />
                </div>
                <span className="font-mono font-bold text-xs text-text-primary">34</span>
                <span className="text-[9px] uppercase font-mono text-sage tracking-widest">scrolls</span>
              </div>

              <div className="relative z-20 bg-surface-primary/95 backdrop-blur-md p-4 rounded-2xl border border-surface-border">
                <div className="text-xs font-bold text-text-primary mb-1">Floating Counter Overlay</div>
                <div className="text-[11px] text-text-secondary leading-relaxed">
                  Real-time 🛡️ scroll badge floating quietly over protected feeds so you remain aware without leaving your app.
                </div>
              </div>
            </div>
          )}

          {/* SCREEN CONTENT 3: PERSPECTIVE CHECK */}
          {activeScreen === 'perspective' && (
            <div className="flex-1 p-5 bg-gradient-cinematic flex flex-col justify-between text-center relative overflow-hidden">
              <div className="my-auto space-y-4">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-sand/40 shadow-glow-sand mx-auto">
                  <Image src="/brand/scrollshield-icon-96.png" alt="Icon" fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-sand uppercase tracking-widest">Milestone 25 Check-In</div>
                  <h4 className="text-lg font-bold text-text-primary">Watching progress isn't progress.</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed px-2">
                  "You have scrolled past 25 items in Instagram. Is this feed serving your day?"
                </p>

                <div className="pt-2 space-y-2">
                  <button className="w-full py-2.5 rounded-xl bg-gradient-brand text-bg-primary font-semibold text-xs shadow-md">
                    Take a 5-min Break
                  </button>
                  <button className="w-full py-2 rounded-xl bg-surface-raised text-text-secondary hover:text-text-primary text-xs border border-surface-border">
                    Continue Intentionally
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN CONTENT 4: INSIGHTS */}
          {activeScreen === 'insights' && (
            <div className="flex-1 p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between border-b border-surface-border pb-2">
                <span className="text-xs font-bold text-text-primary">Local Analytics</span>
                <span className="text-[10px] font-mono text-sage">7-Day Pattern</span>
              </div>

              {/* Bar Chart Simulation */}
              <div className="bg-surface-primary p-3 rounded-xl border border-surface-border space-y-2">
                <div className="text-[10px] text-text-muted">Daily Forward Scrolls</div>
                <div className="h-28 flex items-end justify-between gap-1 pt-4 px-1">
                  {[40, 65, 30, 85, 45, 90, 35].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        style={{ height: `${val}%` }}
                        className={`w-full rounded-t-sm transition-all ${
                          idx === 5 ? 'bg-gradient-warning' : 'bg-sage/40'
                        }`}
                      ></div>
                      <span className="text-[9px] font-mono text-text-muted">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-surface-secondary p-2.5 rounded-xl border border-surface-border">
                  <div className="text-[10px] text-text-muted">Top App</div>
                  <div className="font-bold text-text-primary mt-0.5">Instagram</div>
                  <div className="text-[10px] text-sage font-mono">142 scrolls</div>
                </div>
                <div className="bg-surface-secondary p-2.5 rounded-xl border border-surface-border">
                  <div className="text-[10px] text-text-muted">Breaks Taken</div>
                  <div className="font-bold text-text-primary mt-0.5">8 sessions</div>
                  <div className="text-[10px] text-sand font-mono">100% Local</div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN CONTENT 5: WIDGET */}
          {activeScreen === 'widget' && (
            <div className="flex-1 p-4 bg-[#14120D] flex flex-col justify-center space-y-4">
              <div className="text-center">
                <div className="text-[10px] font-mono text-sage uppercase tracking-wider mb-1">Android Native Surface</div>
                <div className="text-xs font-medium text-text-secondary">Shield Bar Home Screen Widget</div>
              </div>

              {/* Widget Card Mockup */}
              <div className="bg-surface-primary p-4 rounded-2xl border-2 border-sage/40 shadow-glow-sage space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-5 h-5 rounded-md overflow-hidden">
                      <Image src="/brand/scrollshield-icon-32.png" alt="Icon" fill className="object-cover" />
                    </div>
                    <span className="text-xs font-bold text-text-primary">ScrollShield Bar</span>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-sage/20 text-sage">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <div className="text-[9px] text-text-muted">Scrolls Today</div>
                    <div className="text-xl font-extrabold text-text-primary">42</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-text-muted">Protected Time</div>
                    <div className="text-xl font-extrabold text-sand">18m</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Bar inside Phone */}
          <div className="h-6 w-full flex items-center justify-center bg-bg-primary/80 border-t border-surface-border/40">
            <div className="w-24 h-1 rounded-full bg-surface-border"></div>
          </div>
        </div>
      </div>

      {/* Screen Switcher Controls */}
      {showControls && (
        <div className="mt-6 flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-surface-primary border border-surface-border max-w-md">
          {[
            { id: 'home', label: 'Home', icon: Smartphone },
            { id: 'counter', label: 'Floating 🛡️', icon: Shield },
            { id: 'perspective', label: 'Check-In', icon: Sparkles },
            { id: 'insights', label: 'Insights', icon: BarChart3 },
            { id: 'widget', label: 'Widget', icon: AppWindow },
          ].map(tab => {
            const Icon = tab.icon;
            const active = activeScreen === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveScreen(tab.id as ScreenState)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                  active
                    ? 'bg-sage text-bg-primary font-semibold shadow-md'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

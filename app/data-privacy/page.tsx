import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Database, ShieldCheck, Lock, Check, X, EyeOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data & Privacy Center — What Stays on Your Device',
  description:
    'Human-readable overview of ScrollShield data practices. Discover what stays on your phone, what permissions are needed, and our zero-tracking guarantee.',
};

export default function DataPrivacyPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Data Transparency"
          title="Data & Privacy Center"
          description="Your feed stays yours. Plain-English breakdown of what data ScrollShield processes locally and what is never collected."
        />

        {/* 3 Column Data Classification */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Stays on Device */}
          <div className="bg-surface-primary p-6 rounded-2xl border border-sage/40 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-sage/20 text-sage flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-text-primary">What Stays On Device</h3>
            <ul className="text-xs text-text-secondary space-y-2">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sage" /> Scroll gesture count totals</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sage" /> Protected app selections</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sage" /> Session break & focus history</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sage" /> Milestone & UI preferences</li>
            </ul>
          </div>

          {/* Box 2: What App Needs */}
          <div className="bg-surface-primary p-6 rounded-2xl border border-surface-border space-y-3">
            <div className="w-9 h-9 rounded-xl bg-sand/20 text-sand flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-text-primary">What ScrollShield Needs</h3>
            <ul className="text-xs text-text-secondary space-y-2">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sand" /> Active foreground package name</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sand" /> Directional scroll gesture events</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sand" /> System overlay permission</li>
            </ul>
          </div>

          {/* Box 3: What App Never Needs */}
          <div className="bg-surface-primary p-6 rounded-2xl border border-surface-border space-y-3">
            <div className="w-9 h-9 rounded-xl bg-coral-brand/20 text-coral-brand flex items-center justify-center font-bold">
              <X className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-text-primary">What We Never Need</h3>
            <ul className="text-xs text-text-secondary space-y-2">
              <li className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 text-coral-brand" /> Private text messages or chats</li>
              <li className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 text-coral-brand" /> Passwords or PIN numbers</li>
              <li className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 text-coral-brand" /> Screen recordings or video</li>
              <li className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 text-coral-brand" /> Personal user accounts</li>
            </ul>
          </div>

        </div>

        {/* FAQ Style Q&A Cards */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm">
          
          <div className="space-y-1">
            <h4 className="text-base font-bold text-text-primary">Do we sell user data?</h4>
            <p className="text-xs text-text-secondary">No. ScrollShield contains zero advertising SDKs and zero data brokers. We never sell or share user data.</p>
          </div>

          <div className="space-y-1 pt-3 border-t border-surface-border/50">
            <h4 className="text-base font-bold text-text-primary">Do we use data for advertising?</h4>
            <p className="text-xs text-text-secondary">No. Your usage data is processed purely to provide scroll counting and check-in prompts inside your protected apps.</p>
          </div>

          <div className="space-y-1 pt-3 border-t border-surface-border/50">
            <h4 className="text-base font-bold text-text-primary">Does ScrollShield require an account?</h4>
            <p className="text-xs text-text-secondary">No ScrollShield account is currently required. You can install and use the app immediately with complete anonymity.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

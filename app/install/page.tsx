import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { InstallGuide } from '@/components/sections/InstallGuide';
import { ApkDownloadButton, PlayStoreButton } from '@/components/ui/Buttons';
import { SCROLLSHIELD_RELEASE, PLAY_STORE } from '@/lib/config/release';
import { ShieldCheck, Download, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'APK & Play Store Installation Guide — Setup Tutorial',
  description:
    'Comprehensive step-by-step tutorial for installing ScrollShield via Google Play or direct release APK.',
};

export default function InstallPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Installation Guide"
          title="ScrollShield Android Setup Methods"
          description="Choose your preferred installation method below—either direct signed APK or Google Play."
        />

        {/* 2 Installation Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* METHOD 1: Google Play */}
          <div className="bg-surface-primary p-6 rounded-3xl border border-surface-border space-y-4 flex flex-col justify-between shadow-card-raised">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sage font-bold">Method 1</span>
                <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-amber-brand/10 text-sand border border-amber-brand/20">
                  {PLAY_STORE.state === 'LIVE' ? 'Available' : 'Coming Soon'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                Google Play Installation
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                The easiest way to install and receive automatic background updates through Google Play.
              </p>
            </div>

            <div className="pt-4 border-t border-surface-border">
              <PlayStoreButton size="lg" className="w-full justify-center" showTopLabel={true} />
            </div>
          </div>

          {/* METHOD 2: Direct APK */}
          <div className="bg-surface-primary p-6 rounded-3xl border border-surface-border space-y-4 flex flex-col justify-between shadow-card-raised">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sage font-bold">Method 2</span>
                <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-sage/20 text-sage border border-sage/30">
                  Available Now
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                Direct Signed APK
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Download the official release binary directly. No user account or store registration required.
              </p>
            </div>

            <div className="pt-4 border-t border-surface-border">
              <ApkDownloadButton size="lg" variant="hero" className="w-full justify-center" />
            </div>
          </div>

        </div>

        {/* Step-by-Step Direct Install Tutorial */}
        <div className="pt-6 border-t border-surface-border">
          <SectionHeader
            eyebrow="APK Sideloading Walkthrough"
            title="Direct APK Installation Instructions"
            description="Follow these simple steps if you are installing ScrollShield via direct APK download."
            align="left"
          />

          <InstallGuide />
        </div>

        {/* Post-Install Guide */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-4">
          <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sage" />
            <span>Post-Install First-Run Steps</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-xs text-text-secondary leading-relaxed">
            <li><strong>Open ScrollShield:</strong> Launch the app from your Android app drawer.</li>
            <li><strong>Complete Onboarding:</strong> Review the brief introduction to feed awareness.</li>
            <li><strong>Select Protected Apps:</strong> Choose which social/video apps you want monitored (Instagram, Shorts, X).</li>
            <li><strong>Enable Protection Access:</strong> Turn on Accessibility access when prompted by the app.</li>
            <li><strong>Configure Check-Ins:</strong> Choose your preferred Guardian reminder style.</li>
            <li><strong>Test First Scroll:</strong> Open Instagram or YouTube Shorts and scroll normally to see your live count!</li>
          </ol>
        </div>

      </div>
    </div>
  );
}

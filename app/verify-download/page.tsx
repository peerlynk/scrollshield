import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CopyChecksumButton } from '@/components/ui/Buttons';
import { SCROLLSHIELD_RELEASE, PLAY_STORE } from '@/lib/config/release';
import { Terminal, ShieldCheck, CheckCircle2, ExternalLink, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Verify APK Download — SHA-256 Checksum Verification',
  description:
    'Learn how to verify the cryptographic SHA-256 checksum and package signature of your ScrollShield APK using Windows PowerShell, macOS, or Linux.',
};

export default function VerifyDownloadPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Download Verification"
          title="Verify Your APK Download"
          description="Confirm that your downloaded ScrollShield APK file is genuine, unmodified, and matches official release metadata."
        />

        {/* Official Installation Sources */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 shadow-card-raised">
          <h3 className="text-base font-bold text-text-primary border-b border-surface-border pb-3">
            Official Installation Sources
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Source 1: Google Play */}
            <div className="p-5 rounded-2xl bg-surface-secondary border border-surface-border space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-bg-primary border border-surface-border flex items-center justify-center p-1.5 shrink-0">
                    <Image
                      src="/brand/google-play-icon.svg"
                      alt="Google Play"
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">1. Google Play</h4>
                    <span className="text-[10px] font-mono text-sage">{PLAY_STORE.state === 'LIVE' ? 'Live Listing' : 'Coming Soon'}</span>
                  </div>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Official Google Play Store listing. Automated package integrity and signature verification handled by Google Play.
                </p>
              </div>

              <a
                href={PLAY_STORE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-sage hover:underline flex items-center gap-1 font-semibold break-all pt-2 border-t border-surface-border/50"
              >
                <span>{PLAY_STORE.url}</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>

            {/* Source 2: Official ScrollShield Website */}
            <div className="p-5 rounded-2xl bg-surface-secondary border border-surface-border space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-bg-primary border border-surface-border flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-sage" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">2. Official Website</h4>
                    <span className="text-[10px] font-mono text-sage">Signed Release APK</span>
                  </div>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Direct production APK binary distribution hosted on our secure, SSL-encrypted domain.
                </p>
              </div>

              <Link
                href="/download"
                className="text-xs font-mono text-sage hover:underline flex items-center gap-1 font-semibold break-all pt-2 border-t border-surface-border/50"
              >
                <span>https://scrollshield.peerlynk.com/download</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* Current Release Checksum Box */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-4 shadow-card-raised">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <h3 className="text-base font-bold text-text-primary">Official Build Metadata</h3>
            <span className="text-xs font-mono text-sage font-semibold">v{SCROLLSHIELD_RELEASE.versionName}</span>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="flex justify-between py-1 border-b border-surface-border/50">
              <span className="text-text-muted">Filename</span>
              <span className="text-text-primary font-bold">{SCROLLSHIELD_RELEASE.apkFilename}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-surface-border/50">
              <span className="text-text-muted">Package Name</span>
              <span className="text-text-primary">{SCROLLSHIELD_RELEASE.packageName}</span>
            </div>

            <div className="py-2 space-y-1.5">
              <div className="flex items-center justify-between text-text-muted">
                <span>Official SHA-256 Checksum</span>
                <CopyChecksumButton checksum={SCROLLSHIELD_RELEASE.apkSha256} />
              </div>
              <div className="p-3 rounded-xl bg-bg-primary text-xs text-sage font-mono break-all border border-surface-border">
                {SCROLLSHIELD_RELEASE.apkSha256}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Terminal Commands */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-text-primary">Terminal Verification Commands</h3>

          {/* Windows PowerShell */}
          <div className="bg-surface-primary p-5 rounded-2xl border border-surface-border space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-sand">
              <span className="font-bold">Windows (PowerShell)</span>
            </div>
            <div className="p-3 rounded-xl bg-bg-primary font-mono text-xs text-text-primary border border-surface-border overflow-x-auto">
              Get-FileHash .\{SCROLLSHIELD_RELEASE.apkFilename} -Algorithm SHA256
            </div>
          </div>

          {/* macOS */}
          <div className="bg-surface-primary p-5 rounded-2xl border border-surface-border space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-sand">
              <span className="font-bold">macOS Terminal</span>
            </div>
            <div className="p-3 rounded-xl bg-bg-primary font-mono text-xs text-text-primary border border-surface-border overflow-x-auto">
              shasum -a 256 {SCROLLSHIELD_RELEASE.apkFilename}
            </div>
          </div>

          {/* Linux */}
          <div className="bg-surface-primary p-5 rounded-2xl border border-surface-border space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-sand">
              <span className="font-bold">Linux Terminal</span>
            </div>
            <div className="p-3 rounded-xl bg-bg-primary font-mono text-xs text-text-primary border border-surface-border overflow-x-auto">
              sha256sum {SCROLLSHIELD_RELEASE.apkFilename}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ApkDownloadButton, PlayStoreButton, CopyChecksumButton } from '@/components/ui/Buttons';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';
import { InstallGuide } from '@/components/sections/InstallGuide';
import { ShieldCheck, Download, Smartphone, QrCode, CheckCircle2, Lock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Download ScrollShield for Android — APK & Google Play',
  description:
    'Download the official, signed release APK for ScrollShield (com.scrollshield.peerlynk). View version metadata, SHA-256 checksum, signing certificate fingerprint, and installation instructions.',
};

export default function DownloadPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Official Android Download"
          title="Download ScrollShield for Android"
          description="Install the latest production build directly via signed APK or check the Google Play Store status."
        />

        {/* Main 2-Column Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 max-w-6xl mx-auto">
          
          {/* Left Column: Download Actions & QR */}
          <div className="lg:col-span-6 bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 shadow-card-raised">
            <div className="flex items-center justify-between border-b border-surface-border pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage/20 border border-sage/40 flex items-center justify-center text-sage font-bold text-lg">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">ScrollShield for Android</h3>
                  <p className="text-xs font-mono text-sage">Official Package: {SCROLLSHIELD_RELEASE.packageName}</p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-sage/15 text-sage border border-sage/30">
                Release v{SCROLLSHIELD_RELEASE.versionName}
              </span>
            </div>

            <div className="space-y-4">
              <ApkDownloadButton size="lg" variant="hero" className="w-full justify-center" />
              <PlayStoreButton size="lg" className="w-full justify-center" />
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border text-xs text-text-secondary space-y-2">
              <div className="flex items-center gap-2 text-text-primary font-semibold">
                <ShieldCheck className="w-4 h-4 text-sage" />
                <span>Direct Install Flow</span>
              </div>
              <p className="leading-relaxed">
                Clicking Download APK starts an immediate download of the official signed file. No registration, email signup, or surveys required.
              </p>
            </div>

            {/* Desktop Desktop -> Mobile QR Code */}
            <div className="p-4 rounded-xl bg-surface-raised border border-surface-border flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0 border border-surface-border">
                {/* Visual SVG QR Representation encoding official URL */}
                <div className="w-full h-full bg-[#080806] rounded flex items-center justify-center text-[8px] font-mono text-sage text-center p-1 font-bold">
                  QR: /download
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="font-bold text-text-primary flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-sage" />
                  <span>Scan to Download on Phone</span>
                </div>
                <p className="text-text-muted text-[11px] leading-tight">
                  Visiting on desktop? Scan to open <span className="font-mono text-text-secondary">scrollshield.peerlynk.com/download</span> directly on your Android phone.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Advanced Technical Verification Card */}
          <div className="lg:col-span-6 bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 shadow-card-raised">
            <div className="flex items-center justify-between border-b border-surface-border pb-4">
              <h3 className="text-lg font-bold text-text-primary">Verification Details</h3>
              <span className="text-xs font-mono text-sand bg-sand/10 px-2.5 py-0.5 rounded-full border border-sand/20">
                Cryptographically Signed
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-surface-border/50">
                <span className="text-text-muted">Package Name</span>
                <span className="text-text-primary font-bold">{SCROLLSHIELD_RELEASE.packageName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-surface-border/50">
                <span className="text-text-muted">Version Name</span>
                <span className="text-text-primary">v{SCROLLSHIELD_RELEASE.versionName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-surface-border/50">
                <span className="text-text-muted">Version Code</span>
                <span className="text-text-primary">{SCROLLSHIELD_RELEASE.versionCode}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-surface-border/50">
                <span className="text-text-muted">APK Filename</span>
                <span className="text-text-primary">{SCROLLSHIELD_RELEASE.apkFilename}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-surface-border/50">
                <span className="text-text-muted">File Size</span>
                <span className="text-text-primary">{(SCROLLSHIELD_RELEASE.apkSizeBytes / (1024 * 1024)).toFixed(2)} MB</span>
              </div>
              <div className="flex justify-between py-2 border-b border-surface-border/50">
                <span className="text-text-muted">Minimum Android</span>
                <span className="text-text-primary">{SCROLLSHIELD_RELEASE.minimumAndroidVersion}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-surface-border/50">
                <span className="text-text-muted">Release Date</span>
                <span className="text-text-primary">{SCROLLSHIELD_RELEASE.releaseDate}</span>
              </div>

              {/* SHA-256 Row */}
              <div className="py-2 space-y-1.5">
                <div className="flex items-center justify-between text-text-muted">
                  <span>SHA-256 Checksum</span>
                  <CopyChecksumButton checksum={SCROLLSHIELD_RELEASE.apkSha256} />
                </div>
                <div className="p-2.5 rounded-xl bg-bg-primary text-[11px] text-sage font-mono break-all border border-surface-border">
                  {SCROLLSHIELD_RELEASE.apkSha256}
                </div>
              </div>

              {/* Certificate Fingerprint */}
              <div className="py-2 space-y-1.5">
                <div className="text-text-muted">Release Certificate SHA-256</div>
                <div className="p-2.5 rounded-xl bg-bg-primary text-[10px] text-text-secondary font-mono break-all border border-surface-border">
                  {SCROLLSHIELD_RELEASE.signingCertificateSha256}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Step by Step Install Tutorial */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-surface-border">
          <SectionHeader
            eyebrow="Step-by-Step Guide"
            title="How to Sideload the APK"
            description="Follow these neutral steps to install ScrollShield on your Android smartphone."
            align="left"
          />

          <InstallGuide />
        </div>

      </div>
    </div>
  );
}

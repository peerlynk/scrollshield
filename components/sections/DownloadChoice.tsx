import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ApkDownloadButton, PlayStoreButton, CopyChecksumButton } from '@/components/ui/Buttons';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';
import { ShieldCheck, Download, Smartphone, QrCode } from 'lucide-react';

export function DownloadChoiceSection() {
  return (
    <section id="download" className="py-20 md:py-28 bg-bg-secondary relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Get ScrollShield"
          title="Install on your Android device."
          description="Download the signed release APK directly today or check the Google Play Store status."
        />

        <div className="max-w-4xl mx-auto bg-surface-primary rounded-3xl border border-surface-border p-8 md:p-12 shadow-card-raised space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Download Action Column */}
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/10 border border-sage/30 text-xs font-mono text-sage">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Signed Release Package</span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-text-primary">
                  ScrollShield for Android
                </h3>
                <p className="text-xs text-text-secondary mt-1">
                  Package: <span className="font-mono text-text-primary">{SCROLLSHIELD_RELEASE.packageName}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <ApkDownloadButton size="lg" variant="hero" className="w-full sm:w-auto" />
                <PlayStoreButton size="lg" className="w-full sm:w-auto" />
              </div>

              <p className="text-xs text-text-muted leading-relaxed">
                Prefer Google Play? Install from the official listing once available. Direct APK downloads are always signed and verified.
              </p>
            </div>

            {/* Technical Verification Details */}
            <div className="bg-surface-secondary p-6 rounded-2xl border border-surface-border space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-sage font-semibold">
                Release Verification Metadata
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-surface-border/50">
                  <span className="text-text-muted">Version</span>
                  <span className="text-text-primary">v{SCROLLSHIELD_RELEASE.versionName} ({SCROLLSHIELD_RELEASE.versionCode})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-border/50">
                  <span className="text-text-muted">File Size</span>
                  <span className="text-text-primary">{(SCROLLSHIELD_RELEASE.apkSizeBytes / (1024 * 1024)).toFixed(2)} MB</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-border/50">
                  <span className="text-text-muted">Min Android</span>
                  <span className="text-text-primary">{SCROLLSHIELD_RELEASE.minimumAndroidVersion}</span>
                </div>
                <div className="py-1">
                  <div className="flex items-center justify-between text-text-muted mb-1">
                    <span>SHA-256 Checksum</span>
                    <CopyChecksumButton checksum={SCROLLSHIELD_RELEASE.apkSha256} />
                  </div>
                  <div className="p-2 rounded bg-bg-primary text-[10px] text-sage font-mono break-all border border-surface-border">
                    {SCROLLSHIELD_RELEASE.apkSha256}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-surface-border/60 flex items-center justify-between text-[11px] text-text-muted">
                <span>Release Date: {SCROLLSHIELD_RELEASE.releaseDate}</span>
                <Link href="/download" className="text-sage hover:underline">
                  Full Details →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

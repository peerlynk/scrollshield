import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCROLLSHIELD_RELEASE, PLAY_STORE } from '@/lib/config/release';
import { ShieldCheck, Key, Lock, Globe, FileCode, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App & Download Security — Package Authenticity & Cryptography',
  description:
    'Information regarding ScrollShield release package signing, official distribution domain, SHA-256 checksums, and SSL security.',
};

export default function SecurityPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Release Security"
          title="App & Download Security"
          description="Cryptographic integrity, release signing standards, and distribution security."
        />

        {/* Official Google Play Listing Card */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-4 shadow-card-raised">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center p-2 shrink-0">
                <Image
                  src="/brand/google-play-icon.svg"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary">Official Google Play Listing</h3>
                <p className="text-xs font-mono text-text-muted">{SCROLLSHIELD_RELEASE.packageName}</p>
              </div>
            </div>
            <span className={`px-2.5 py-1 text-xs font-mono rounded-full border ${
              PLAY_STORE.state === 'LIVE'
                ? 'bg-sage/15 text-sage border-sage/30'
                : 'bg-sand/15 text-sand border-sand/30'
            }`}>
              {PLAY_STORE.state === 'LIVE' ? 'LIVE ON GOOGLE PLAY' : 'GOOGLE PLAY — COMING SOON'}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <p className="text-text-secondary leading-relaxed">
              ScrollShield is officially registered under Android package ID <code className="font-mono text-sage">{SCROLLSHIELD_RELEASE.packageName}</code>. When published on Google Play, updates are verified and distributed directly by Google Play Services.
            </p>
            
            <div className="p-3 rounded-xl bg-bg-primary font-mono text-xs text-text-primary border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 break-all">
              <span className="text-text-muted">Official Store Listing:</span>
              <a
                href={PLAY_STORE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{PLAY_STORE.url}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-surface-primary p-6 md:p-10 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-surface-secondary border border-surface-border space-y-1">
              <span className="text-text-muted">Official Distribution Domain</span>
              <div className="text-text-primary font-bold text-sm">{SCROLLSHIELD_RELEASE.officialDomain}</div>
            </div>
            <div className="p-4 rounded-2xl bg-surface-secondary border border-surface-border space-y-1">
              <span className="text-text-muted">Official Package ID</span>
              <div className="text-sage font-bold text-sm">{SCROLLSHIELD_RELEASE.packageName}</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-text-primary">Cryptographic Release Signing</h3>
            <p>
              Every production APK binary distributed on scrollshield.peerlynk.com is cryptographically release-signed using our official RSA release key. This ensures Android verifies the package signature before allowing updates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-raised border border-surface-border flex items-center justify-between text-xs font-mono">
            <span>Want to verify your downloaded APK binary?</span>
            <Link href="/verify-download" className="text-sage hover:underline font-bold">
              Verification Guide →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

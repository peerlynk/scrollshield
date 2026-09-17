import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SCROLLSHIELD_RELEASE, PLAY_STORE } from '@/lib/config/release';

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-surface-border text-text-secondary pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-surface-border/60">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-sage/40">
                <Image
                  src="/brand/scrollshield-icon-64.png"
                  alt="ScrollShield Icon"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold text-text-primary">ScrollShield</span>
            </Link>
            <p className="text-xs text-text-muted leading-relaxed">
              Protection for your attention. Interrupt automatic feed scrolling on Android with local-first gesture counting and mindful check-ins.
            </p>
            <div className="text-xs font-mono text-sage/80 bg-surface-primary px-3 py-1.5 rounded-lg border border-surface-border inline-block">
              A Peerlynk product
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold">
              Product
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/features" className="hover:text-text-primary transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/download" className="hover:text-text-primary transition-colors">Download APK</Link></li>
              <li>
                {PLAY_STORE.state === 'LIVE' ? (
                  <a
                    href={PLAY_STORE.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Image
                      src="/brand/google-play-icon.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>Google Play</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-text-muted">
                    <Image
                      src="/brand/google-play-icon.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain opacity-70"
                    />
                    <span>Google Play (Coming Soon)</span>
                  </span>
                )}
              </li>
              <li><Link href="/changelog" className="hover:text-text-primary transition-colors">Changelog</Link></li>
              <li><Link href="/compatibility" className="hover:text-text-primary transition-colors">Compatibility</Link></li>
              <li><Link href="/install" className="hover:text-text-primary transition-colors">APK Install Guide</Link></li>
            </ul>
          </div>

          {/* Column 2: Trust */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold">
              Trust & Privacy
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-text-primary transition-colors">Accessibility Disclosure</Link></li>
              <li><Link href="/faq" className="hover:text-text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-text-primary transition-colors">Support & Help</Link></li>
              <li><Link href="/terms" className="hover:text-text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Column 3: Technical & Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold">
              Company & Build
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-text-primary transition-colors">About ScrollShield</Link></li>
              <li className="text-text-muted">Domain: <span className="font-mono text-text-secondary">scrollshield.peerlynk.com</span></li>
              <li className="text-text-muted">Package: <span className="font-mono text-text-secondary">{SCROLLSHIELD_RELEASE.packageName}</span></li>
              <li className="text-text-muted">Version: <span className="font-mono text-text-secondary">v{SCROLLSHIELD_RELEASE.versionName}</span></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            ScrollShield is an independent product built by Peerlynk and is not affiliated with, endorsed by, or partnered with Instagram, YouTube, Facebook, X, Snapchat, or their parent companies.
          </p>
          <div className="text-center md:text-right font-mono">
            © 2026 ScrollShield / Peerlynk. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

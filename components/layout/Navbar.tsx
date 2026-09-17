'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ApkDownloadButton, PlayStoreButton } from '@/components/ui/Buttons';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-navbar transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo with Real ScrollShield Icon */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-sage/40 shadow-glow-sage group-hover:border-sage transition-colors">
              <Image
                src="/brand/scrollshield-icon-64.png"
                alt="ScrollShield Icon"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-text-primary tracking-tight group-hover:text-sage transition-colors">
                ScrollShield
              </span>
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider hidden sm:block">
                Peerlynk
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <PlayStoreButton size="md" />
            <ApkDownloadButton size="md" variant="hero" />
          </div>

          {/* Mobile Right Action */}
          <div className="flex lg:hidden items-center gap-2">
            <ApkDownloadButton size="md" variant="hero" showIcon={false} className="py-2 px-3 text-xs" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl bg-surface-primary border border-surface-border text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-surface-border bg-bg-secondary px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-text-secondary hover:text-text-primary py-2 border-b border-surface-border/40"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-text-primary py-2 border-b border-surface-border/40"
            >
              Download Hub
            </Link>
            <Link
              href="/accessibility"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-text-primary py-2 border-b border-surface-border/40"
            >
              Accessibility Disclosure
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-text-primary py-2 border-b border-surface-border/40"
            >
              Support & Troubleshooting
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <ApkDownloadButton size="lg" variant="hero" className="w-full justify-center" />
            <PlayStoreButton size="lg" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}

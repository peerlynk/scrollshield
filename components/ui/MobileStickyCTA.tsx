'use client';

import React, { useState, useEffect } from 'react';
import { ApkDownloadButton, PlayStoreButton } from '@/components/ui/Buttons';
import { PLAY_STORE } from '@/lib/config/release';

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px on mobile
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const isLive = PLAY_STORE.state === 'LIVE';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-bg-primary/95 backdrop-blur-md border-t border-surface-border shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center gap-2">
        <span className="text-base">🛡️</span>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-text-primary">ScrollShield</span>
          <span className="text-[9px] text-text-muted">Android Attention Shield</span>
        </div>
      </div>

      <div className="shrink-0">
        {isLive ? (
          <PlayStoreButton size="md" />
        ) : (
          <ApkDownloadButton size="md" variant="hero" showIcon={false} className="py-2 px-4 text-xs font-bold" />
        )}
      </div>
    </div>
  );
}

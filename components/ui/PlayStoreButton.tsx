'use client';

import React from 'react';
import Image from 'next/image';
import { PLAY_STORE, PlayStoreState } from '@/lib/config/release';

interface PlayStoreButtonProps {
  size?: 'md' | 'lg';
  className?: string;
  showTopLabel?: boolean;
}

export function PlayStoreButton({
  size = 'lg',
  className = '',
  showTopLabel = false,
}: PlayStoreButtonProps) {
  const state: PlayStoreState = PLAY_STORE.state;
  const isLive = state === 'LIVE';
  const isUnavailable = state === 'TEMPORARILY_UNAVAILABLE';

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 border border-surface-border bg-surface-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-sage';

  const sizeStyles =
    size === 'lg' ? 'px-6 py-3.5 h-[54px] text-base gap-3' : 'px-4 py-2.5 h-[44px] text-sm gap-2.5';

  const hoverStyles = isLive
    ? 'hover:bg-surface-secondary hover:border-sage/50 active:scale-[0.98]'
    : 'opacity-85 cursor-not-allowed';

  const ariaLabel = isLive
    ? 'Get ScrollShield on Google Play'
    : isUnavailable
    ? 'Google Play temporarily unavailable'
    : 'ScrollShield coming soon on Google Play';

  const labelText = isLive
    ? 'Get it on Google Play'
    : isUnavailable
    ? 'Google Play unavailable'
    : 'Coming soon on Google Play';

  const content = (
    <>
      <div className={`relative shrink-0 ${size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`}>
        <Image
          src="/brand/google-play-icon.svg"
          alt="Google Play Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col text-left leading-tight">
        {showTopLabel && (
          <span className="text-[9px] font-mono uppercase tracking-widest text-text-muted">
            Android
          </span>
        )}
        <span className="font-semibold text-text-primary">{labelText}</span>
      </div>
    </>
  );

  if (!isLive) {
    return (
      <div
        className={`${baseStyles} ${sizeStyles} ${hoverStyles} ${className}`}
        aria-label={ariaLabel}
        role="status"
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={PLAY_STORE.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles} ${hoverStyles} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </a>
  );
}

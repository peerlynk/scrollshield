'use client';

import React, { useState } from 'react';
import { Download, Check, Copy } from 'lucide-react';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';
import { PlayStoreButton } from '@/components/ui/PlayStoreButton';

export { PlayStoreButton };

interface DownloadButtonProps {
  variant?: 'primary' | 'secondary' | 'hero';
  size?: 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export function ApkDownloadButton({
  variant = 'primary',
  size = 'lg',
  className = '',
  showIcon = true,
}: DownloadButtonProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 focus:ring-offset-bg-primary active:scale-[0.98] shadow-lg';
  
  const sizeStyles =
    size === 'lg' ? 'px-6 py-3.5 h-[54px] text-base gap-2.5' : 'px-4 py-2.5 h-[44px] text-sm gap-2';

  const variantStyles =
    variant === 'hero' || variant === 'primary'
      ? 'bg-gradient-brand text-bg-primary hover:brightness-110 font-semibold shadow-glow-sage'
      : 'bg-surface-secondary hover:bg-surface-raised text-text-primary border border-surface-border';

  return (
    <a
      href="/download/latest"
      onClick={handleClick}
      download={SCROLLSHIELD_RELEASE.apkFilename}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {showIcon && (downloaded ? <Check className="w-5 h-5 text-bg-primary" /> : <Download className="w-5 h-5" />)}
      <span>{downloaded ? 'Downloading APK...' : 'Download APK'}</span>
    </a>
  );
}

export function CopyChecksumButton({ checksum }: { checksum: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-surface-raised border border-surface-border text-text-secondary hover:text-text-primary hover:border-sage/40 transition-colors"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Copy className="w-3.5 h-3.5" />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

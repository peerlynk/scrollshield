import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 bg-bg-primary text-center px-4">
      <div className="max-w-md space-y-6">
        
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-sage/40 mx-auto shadow-glow-sage">
          <Image
            src="/brand/scrollshield-icon-96.png"
            alt="ScrollShield Icon"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-sand">404 — Page Not Found</div>
          <h1 className="text-3xl font-extrabold text-text-primary">
            Lost in the feed?
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            That page isn't here. You might have clicked a broken link or entered an obsolete URL.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-bg-primary font-semibold text-sm shadow-glow-sage hover:brightness-110 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to ScrollShield</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

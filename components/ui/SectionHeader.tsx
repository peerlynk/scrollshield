import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignmentClass} mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-mono tracking-wider text-sage uppercase bg-sage/10 border border-sage/20 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

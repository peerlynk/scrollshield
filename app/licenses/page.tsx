import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Award, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open Source Licenses — Third-Party Software Notices',
  description:
    'Open-source software licenses, dependency acknowledgements, and third-party notices for ScrollShield.',
};

export default function LicensesPage() {
  const licenses = [
    { name: 'React Native', license: 'MIT License', copyright: 'Copyright (c) Meta Platforms, Inc. and affiliates.' },
    { name: 'React & React DOM', license: 'MIT License', copyright: 'Copyright (c) Meta Platforms, Inc. and affiliates.' },
    { name: 'Next.js', license: 'MIT License', copyright: 'Copyright (c) Vercel, Inc.' },
    { name: 'Tailwind CSS', license: 'MIT License', copyright: 'Copyright (c) Tailwind Labs Inc.' },
    { name: 'Framer Motion', license: 'MIT License', copyright: 'Copyright (c) Motion Software Ltd.' },
    { name: 'Lucide Icons', license: 'ISC License', copyright: 'Copyright (c) Lucide Contributors.' },
  ];

  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Open Source Acknowledgements"
          title="Third-Party Software Licenses"
          description="ScrollShield is built with appreciation for open-source software libraries and communities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {licenses.map((lic, idx) => (
            <div key={idx} className="bg-surface-primary p-6 rounded-2xl border border-surface-border space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-text-primary">{lic.name}</h3>
                <span className="font-mono text-[10px] text-sage bg-sage/10 px-2 py-0.5 rounded border border-sage/20">
                  {lic.license}
                </span>
              </div>
              <p className="text-text-muted font-mono pt-1">{lic.copyright}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

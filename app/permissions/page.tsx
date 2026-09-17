import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PERMISSIONS_DATA } from '@/data/permissions';
import { ShieldCheck, Sliders, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Android Permissions Breakdown — Manifest Declarations',
  description:
    'Itemized explanation of every Android permission declared in the official ScrollShield AndroidManifest.xml build.',
};

export default function PermissionsPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          eyebrow="Manifest Transparency"
          title="Android Permissions Breakdown"
          description="Every capability and permission declared by ScrollShield in AndroidManifest.xml, explained line by line."
        />

        {/* Permissions Table */}
        <div className="bg-surface-primary rounded-3xl border border-surface-border overflow-hidden shadow-card-raised">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-secondary border-b border-surface-border text-text-muted font-mono uppercase tracking-wider">
                <tr>
                  <th className="p-4">Permission / Capability</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Purpose in ScrollShield</th>
                  <th className="p-4">Impact if Denied</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border/50 text-text-secondary">
                {PERMISSIONS_DATA.map((perm, idx) => (
                  <tr key={idx} className="hover:bg-surface-secondary/40 transition-colors">
                    <td className="p-4 font-mono font-bold text-text-primary">
                      <div>{perm.name}</div>
                      <div className="text-[10px] text-text-muted font-mono mt-0.5">{perm.manifestIdentifier}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        perm.type === 'Required Core'
                          ? 'bg-sage/20 text-sage border border-sage/30'
                          : 'bg-surface-raised text-text-muted border border-surface-border'
                      }`}>
                        {perm.type}
                      </span>
                    </td>
                    <td className="p-4 leading-relaxed">{perm.purpose}</td>
                    <td className="p-4 text-text-muted leading-relaxed">{perm.denialImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Package Query Declaration Explanation */}
        <div className="bg-surface-primary p-6 rounded-2xl border border-surface-border space-y-2 text-xs text-text-secondary leading-relaxed">
          <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sage" />
            <span>Package Visibility Declarations (&lt;queries&gt;)</span>
          </h3>
          <p>
            ScrollShield declares package visibility queries for Instagram, YouTube, Snapchat, Facebook, and X solely to verify whether these applications are installed on your device, allowing you to select them in the protected apps picker. ScrollShield does NOT inspect third-party app data.
          </p>
        </div>

      </div>
    </div>
  );
}

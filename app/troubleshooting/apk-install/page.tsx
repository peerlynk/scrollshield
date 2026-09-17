import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Download, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'APK Install Troubleshooting — Certificate Conflict Fixes',
  description:
    'Resolve "App Not Installed" errors, signing certificate conflicts, and source permission issues.',
};

export default function ApkInstallTroubleshootingPage() {
  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Troubleshooting"
          title="APK Installation Fixes"
          description="Resolving App Not Installed errors and signing certificate mismatches."
        />

        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border space-y-6 text-sm text-text-secondary leading-relaxed">
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1.5 text-xs">
              <div className="font-bold text-text-primary flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-brand" />
                <span>Error: "App not installed as package conflicts with an existing package"</span>
              </div>
              <p>
                This occurs if you previously installed a debug or development build of ScrollShield using a different signing key. Android forbids updating an app signed by a different certificate.
              </p>
              <p className="text-sage font-semibold">
                Fix: Uninstall the previous build from your phone first, then install the new website release APK.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary border border-surface-border space-y-1.5 text-xs">
              <div className="font-bold text-text-primary">Error: "Install unknown apps blocked"</div>
              <p>Android requires permission to install APKs downloaded outside Google Play.</p>
              <p className="text-sage font-semibold">
                Fix: Allow "Install unknown apps" for your browser or File Manager in Android Settings → Apps → Special app access.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

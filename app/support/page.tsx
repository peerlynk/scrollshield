'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';
import { Search, Mail, HelpCircle, AlertTriangle, Settings, Smartphone, ShieldCheck } from 'lucide-react';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const issues = [
    {
      id: 'accessibility-disabled',
      title: 'Accessibility Service Disables Automatically',
      category: 'Accessibility',
      desc: 'Some Android manufacturers (Xiaomi, Samsung, Oppo) kill background Accessibility services to save battery. Solution: Lock ScrollShield in recent apps and turn off Battery Saver optimizations for ScrollShield in system settings.',
    },
    {
      id: 'counter-missing',
      title: 'Floating Counter Overlay Not Appearing',
      category: 'Floating Counter',
      desc: 'Ensure "Display over other apps" permission is granted to ScrollShield in Android Settings → Apps → ScrollShield → Display over other apps.',
    },
    {
      id: 'widget-not-loading',
      title: 'Shield Bar Home Widget Not Updating',
      category: 'Widget',
      desc: 'Remove the widget from your home screen and re-add it from your launcher’s Widget picker. Ensure background process restrictions are disabled.',
    },
    {
      id: 'youtube-counts',
      title: 'YouTube Shorts Count Accuracy',
      category: 'Scroll Counting',
      desc: 'Short-form feed gesture event structures vary between native video players. Ensure YouTube is selected in protected apps list.',
    },
    {
      id: 'notifications-disabled',
      title: 'Notifications Not Appearing (Android 13+)',
      category: 'Notifications',
      desc: 'On Android 13 and newer, ensure POST_NOTIFICATIONS permission is enabled in Android Settings → Notifications → App Notifications → ScrollShield.',
    },
    {
      id: 'apk-cant-install',
      title: 'APK Installation Fails or Blocked',
      category: 'APK Installation',
      desc: 'Check that your browser has permission to "Install unknown apps" in Android Settings → Security → Install unknown apps.',
    },
    {
      id: 'signing-conflict',
      title: 'App Update Certificate Conflict Error',
      category: 'App Updates',
      desc: 'If you previously installed a debug build of ScrollShield, Android will refuse updating with a release build. Uninstall the existing debug build first before installing the website release APK.',
    },
  ];

  const filteredIssues = issues.filter(
    item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 md:py-20 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeader
          eyebrow="Help & Troubleshooting"
          title="Support Center"
          description="Solutions for common Android OEM setup, Accessibility permissions, and APK installation queries."
        />

        {/* Client-Side Support Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search troubleshooting guides or error messages..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface-primary border border-surface-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-sage text-sm"
          />
        </div>

        {/* Troubleshooting Cards List */}
        <div className="space-y-4">
          {filteredIssues.map(issue => (
            <div
              key={issue.id}
              className="bg-surface-primary p-6 rounded-2xl border border-surface-border space-y-2 hover:border-sage/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-text-primary">{issue.title}</h3>
                <span className="text-[10px] font-mono text-sand bg-sand/10 px-2.5 py-0.5 rounded-full border border-sand/20">
                  {issue.category}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-1">
                {issue.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Configurable Support Email Contact Box */}
        <div className="bg-surface-primary p-6 md:p-8 rounded-3xl border border-surface-border text-center space-y-4">
          <div className="w-10 h-10 rounded-xl bg-sage/20 border border-sage/40 text-sage flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-text-primary">Need additional help?</h3>
          <p className="text-xs text-text-secondary max-w-md mx-auto leading-relaxed">
            Have a bug report, device-specific feedback, or feature request? Contact our team directly.
          </p>
          <a
            href={`mailto:${SCROLLSHIELD_RELEASE.supportEmail}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-brand text-bg-primary font-semibold text-xs shadow-glow-sage hover:brightness-110 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Contact {SCROLLSHIELD_RELEASE.supportEmail}</span>
          </a>
        </div>

      </div>
    </div>
  );
}

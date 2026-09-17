import React from 'react';
import { Download, ShieldCheck, Smartphone, Settings, AppWindow, CheckCircle2 } from 'lucide-react';

export function InstallGuide() {
  const steps = [
    {
      step: '1',
      title: 'Download Official APK',
      desc: 'Tap "Download APK" to obtain the signed package (com.scrollshield.peerlynk).',
      icon: Download,
    },
    {
      step: '2',
      title: 'Open Downloaded File',
      desc: 'Tap the notification or locate the APK in your file manager / Downloads folder.',
      icon: Smartphone,
    },
    {
      step: '3',
      title: 'Allow Source Permission',
      desc: 'Android may ask to allow installing apps from your browser. Grant permission for this install.',
      icon: Settings,
    },
    {
      step: '4',
      title: 'Complete Installation',
      desc: 'Tap Install. ScrollShield will install without overwriting system files.',
      icon: CheckCircle2,
    },
    {
      step: '5',
      title: 'Select Protected Apps',
      desc: 'Open ScrollShield and choose which feed apps (Instagram, YouTube, X) you want to protect.',
      icon: AppWindow,
    },
    {
      step: '6',
      title: 'Enable Accessibility Access',
      desc: 'Grant Accessibility permission so ScrollShield can observe forward gestures locally.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="bg-surface-primary p-5 rounded-2xl border border-surface-border space-y-3 relative"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-surface-secondary border border-sage/40 flex items-center justify-center font-mono font-bold text-xs text-sage">
                  {item.step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-surface-border flex items-center justify-center text-text-muted">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-base font-bold text-text-primary">
                {item.title}
              </h3>

              <p className="text-xs text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-surface-raised border border-surface-border text-xs text-text-muted leading-relaxed">
        <strong className="text-text-primary">Play Protect Note:</strong> Android may display a standard security confirmation when installing apps outside Google Play. This is normal for direct APK installation. You do not need to disable Play Protect globally.
      </div>
    </div>
  );
}

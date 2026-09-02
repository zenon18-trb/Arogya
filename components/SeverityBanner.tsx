'use client';

import React from 'react';
import { SeverityLevel, SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';
import { CheckCircle2, AlertTriangle, AlertOctagon, Flame } from 'lucide-react';

interface SeverityBannerProps {
  severity: SeverityLevel;
  language: SupportedLanguage;
  emergency?: boolean;
}

export const SeverityBanner: React.FC<SeverityBannerProps> = ({
  severity,
  language,
  emergency = false,
}) => {
  const t = translations[language] || translations.en;

  const config = {
    low: {
      bg: 'bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 border-emerald-400 text-emerald-950',
      badgeBg: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30',
      icon: CheckCircle2,
      label: t.severityLevels.low,
      desc: 'Standard non-urgent first-aid measures recommended.',
      glowColor: 'from-emerald-400 to-teal-400',
    },
    medium: {
      bg: 'bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-yellow-500/15 border-amber-400 text-amber-950',
      badgeBg: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-600/30',
      icon: AlertTriangle,
      label: t.severityLevels.medium,
      desc: 'Requires prompt attention and careful symptom observation.',
      glowColor: 'from-amber-400 to-orange-400',
    },
    high: {
      bg: 'bg-gradient-to-r from-orange-500/20 via-red-500/15 to-rose-500/20 border-orange-500 text-orange-950',
      badgeBg: 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md shadow-orange-600/30',
      icon: AlertOctagon,
      label: t.severityLevels.high,
      desc: 'High priority hazard or injury. Take immediate protective measures.',
      glowColor: 'from-orange-400 to-red-500',
    },
    emergency: {
      bg: 'bg-gradient-to-r from-red-600/25 via-rose-600/20 to-red-700/25 border-red-500 text-red-950 ring-2 ring-red-500/30',
      badgeBg: 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-600/40 animate-pulse',
      icon: Flame,
      label: t.severityLevels.emergency,
      desc: 'Critical emergency! Call emergency services (112) without delay.',
      glowColor: 'from-red-500 to-rose-600',
    },
  };

  const current = config[severity] || (emergency ? config.emergency : config.medium);
  const Icon = current.icon;

  return (
    <div
      className={`relative p-5 sm:p-6 rounded-2xl border-2 ${current.bg} flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-sm overflow-hidden`}
    >
      <div className="flex items-center gap-3.5">
        <div className={`p-3 rounded-2xl ${current.badgeBg} flex-shrink-0`}>
          <Icon className="w-6 h-6 stroke-[2.4]" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              {t.severityLabel}:
            </span>
            <span className="text-xs font-black px-2.5 py-0.5 rounded-lg bg-white shadow-xs border border-slate-200">
              {current.label}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            {current.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

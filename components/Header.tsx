'use client';

import React from 'react';
import { HeartPulse, PhoneCall, Sparkles, Activity } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';

interface HeaderProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenEmergency: () => void;
  isDemoMode?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenEmergency,
  isDemoMode = false,
}) => {
  const t = translations[currentLanguage] || translations.en;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-teal-100/70 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3.5">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 rounded-2xl blur-xs opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-700 to-cyan-600 flex items-center justify-center text-white shadow-md">
              <HeartPulse className="w-6 h-6 stroke-[2.4] text-white animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-teal-900 via-cyan-900 to-indigo-950 bg-clip-text text-transparent">
                AAROGYA
              </span>
              <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-xs">
                AI 2.0
              </span>
              {isDemoMode && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gradient-to-r from-amber-400/20 to-orange-400/20 text-amber-900 border border-amber-300 shadow-xs">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Demo Mode</span>
                </span>
              )}
            </div>
            <p className="hidden md:block text-xs font-semibold text-teal-800/80 leading-tight">
              {t.supportingLine}
            </p>
          </div>
        </div>

        {/* Right Navigation & Emergency Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />

          <button
            type="button"
            onClick={onOpenEmergency}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 active:scale-95 text-white px-3.5 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold shadow-lg shadow-red-600/30 transition-all cursor-pointer border border-red-400/30 animate-emergency-glow"
            aria-label={t.emergencyHelpBtn}
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
            <span className="hidden xs:inline">{t.emergencyHelpBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

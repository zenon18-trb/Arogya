'use client';

import React, { useState, useEffect } from 'react';
import { HeartPulse, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';

interface LoadingStateProps {
  language: SupportedLanguage;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ language }) => {
  const t = translations[language] || translations.en;
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % t.loadingMessages.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [t.loadingMessages.length]);

  return (
    <div className="relative max-w-xl mx-auto my-8">
      {/* Radiant colorful blur */}
      <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>

      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-teal-200/90 shadow-2xl p-8 sm:p-12 text-center space-y-6 animate-fade-in">
        {/* Multicolored pulse beacon */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-300 via-cyan-300 to-indigo-300 animate-ping opacity-50" />
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-teal-600 via-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-teal-600/30">
            <HeartPulse className="w-10 h-10 animate-pulse" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black bg-gradient-to-r from-teal-900 via-cyan-900 to-indigo-950 bg-clip-text text-transparent">
            {t.loadingTitle}
          </h3>
          <p className="text-base font-extrabold text-teal-700 h-7 transition-all duration-300 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
            <span>{t.loadingMessages[messageIndex]}</span>
          </p>
        </div>

        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-200 text-xs font-bold text-teal-800 shadow-inner">
          <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
          <span>Gemini Multimodal Safety Protocol Verification</span>
        </div>
      </div>
    </div>
  );
};

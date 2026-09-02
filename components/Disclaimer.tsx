'use client';

import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { SupportedLanguage } from '@/types/safety';
import { translations } from '@/lib/translations';

interface DisclaimerProps {
  language: SupportedLanguage;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ language }) => {
  const t = translations[language] || translations.en;

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-slate-200 text-center space-y-4">
      <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 leading-relaxed flex items-start gap-3 text-left">
        <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
        <p>{t.disclaimer}</p>
      </div>

      <div className="text-xs text-slate-400 font-medium">
        <p>AAROGYA — Smart guidance when every second matters.</p>
        <p className="text-[11px] text-slate-400 mt-1">Built with Google Gemini Multimodal AI • Hackathon Edition</p>
      </div>
    </footer>
  );
};
